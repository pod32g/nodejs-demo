import sqlite3 from 'sqlite3';

export default class Base {
    db = new sqlite3.Database('db.sqlite');
}