import Base from './Base';
import { Statement } from 'sqlite3';

class _Posts extends Base {

    createTable = () => {
        this.db.serialize(() => {
            console.log('Creating table "Posts"');
            this.db.run('CREATE TABLE posts (content text, image varchar(500))');
        });
    }

    createNewPost = (content: string, image: string) => {
        this.db.serialize(() => {
            let statement = this.db.prepare('INSERT INTO posts VALUES (?, ?)');
            statement.run(content, image);
            statement.finalize();
        });
    }

    getAll = () => {
        return new Promise((resolve, reject) => {
            this.db.get('SELECT * FROM posts', (err: Error, result: Statement) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    closeDBConnection = () => {
        this.db.close();
    }
}

const Posts = new _Posts();

export { Posts };