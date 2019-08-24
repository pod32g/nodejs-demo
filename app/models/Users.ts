import sqlite3 from 'sqlite3';

class _Users {
    db = new sqlite3.Database('db.sqlite');

    createTable = () => {
        this.db.serialize(() => {
            console.log('Creating table "users"');
            this.db.run('CREATE TABLE users (username varchar(30), password varchar(100));')
        });
    }

    createNewUser = (username: string, password: string) => {
        this.db.serialize(() => {
            let statement = this.db.prepare('INSERT INTO users VALUES (?, ?)');
            statement.run(username, password);
            statement.finalize();
        });
    }

    filter = (username: string) => {
        let result: any[] = [];
        this.db.serialize(() => {
            this.db.each(`SELECT * from users WHERE username=${username}`, (err, row) => {
                result.push(row);
            });
        });

        return result;
    }

    closeDatabaseConnection = () => {
        this.db.close();
    }
}

const Users = new _Users();

export { Users };