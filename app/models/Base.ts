import { ConnectionOptions, createConnection } from 'typeorm';
import { User } from './Usersmodel';
import { Post } from './Postsmodel';

export default class Base {
    options: ConnectionOptions = {
        type: 'sqlite',
        database: './db.sqlite',
        entities: [User, Post],
        logging: true,
        synchronize: false
    }

    connection = createConnection(this.options);
}