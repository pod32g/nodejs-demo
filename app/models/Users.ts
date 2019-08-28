import Base from './Base';
import { Statement } from 'sqlite3';

class _Users extends Base {
    result: any[] = []

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
        return new Promise((resolve, reject) => {
            this.db.get(`SELECT * FROM users WHERE username='${username}'`, (err: Error, result: Statement) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        })
    }

    closeDatabaseConnection = () => {
        this.db.close();
    }
}

const Users = new _Users();

export { Users };