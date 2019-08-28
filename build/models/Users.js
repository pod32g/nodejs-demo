"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Base_1 = __importDefault(require("./Base"));
var _Users = /** @class */ (function (_super) {
    __extends(_Users, _super);
    function _Users() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.result = [];
        _this.createTable = function () {
            _this.db.serialize(function () {
                console.log('Creating table "users"');
                _this.db.run('CREATE TABLE users (username varchar(30), password varchar(100));');
            });
        };
        _this.createNewUser = function (username, password) {
            _this.db.serialize(function () {
                var statement = _this.db.prepare('INSERT INTO users VALUES (?, ?)');
                statement.run(username, password);
                statement.finalize();
            });
        };
        _this.filter = function (username) {
            return new Promise(function (resolve, reject) {
                _this.db.get("SELECT * FROM users WHERE username='" + username + "'", function (err, result) {
                    if (err) {
                        console.error(err);
                        reject(err);
                    }
                    else {
                        resolve(result);
                    }
                });
            });
        };
        _this.closeDatabaseConnection = function () {
            _this.db.close();
        };
        return _this;
    }
    return _Users;
}(Base_1.default));
var Users = new _Users();
exports.Users = Users;
