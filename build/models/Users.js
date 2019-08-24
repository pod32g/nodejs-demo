"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sqlite3_1 = __importDefault(require("sqlite3"));
var _Users = /** @class */ (function () {
    function _Users() {
        var _this = this;
        this.db = new sqlite3_1.default.Database('db.sqlite');
        this.createTable = function () {
            _this.db.serialize(function () {
                console.log('Creating table "users"');
                _this.db.run('CREATE TABLE users (username varchar(30), password varchar(100));');
            });
        };
        this.createNewUser = function (username, password) {
            _this.db.serialize(function () {
                var statement = _this.db.prepare('INSERT INTO users VALUES (?, ?)');
                statement.run(username, password);
                statement.finalize();
            });
        };
        this.filter = function (username) {
            var result = [];
            _this.db.serialize(function () {
                _this.db.each("SELECT * from users WHERE username=" + username, function (err, row) {
                    result.push(row);
                });
            });
            return result;
        };
        this.closeDatabaseConnection = function () {
            _this.db.close();
        };
    }
    return _Users;
}());
var Users = new _Users();
exports.Users = Users;
