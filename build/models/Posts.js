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
var _Posts = /** @class */ (function (_super) {
    __extends(_Posts, _super);
    function _Posts() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createTable = function () {
            _this.db.serialize(function () {
                console.log('Creating table "Posts"');
                _this.db.run('CREATE TABLE posts (content text, image varchar(500))');
            });
        };
        _this.createNewPost = function (content, image) {
            _this.db.serialize(function () {
                var statement = _this.db.prepare('INSERT INTO posts VALUES (?, ?)');
                statement.run(content, image);
                statement.finalize();
            });
        };
        _this.getAll = function () {
            return new Promise(function (resolve, reject) {
                _this.db.get('SELECT * FROM posts', function (err, result) {
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
        _this.closeDBConnection = function () {
            _this.db.close();
        };
        return _this;
    }
    return _Posts;
}(Base_1.default));
var Posts = new _Posts();
exports.Posts = Posts;
