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
var base_1 = __importDefault(require("./base"));
var PostsMiddleware = /** @class */ (function (_super) {
    __extends(PostsMiddleware, _super);
    function PostsMiddleware() {
        var _this = _super.call(this) || this;
        _this.newPost = function (req, res, next) {
            var fields = [
                "title",
                "content",
                "image"
            ];
            _this.checkAuthentication(req, res);
            res.locals.user = _this.user;
            _this.checkForFields(req, res, fields);
            next();
        };
        _this.getSinglePost = function (req, res, next) {
            var params = [
                "postId"
            ];
            _this.checkForURLParams(req, res, params);
            next();
        };
        _this.plusOne = function (req, res, next) {
            var params = [
                "postId"
            ];
            _this.checkForURLParams(req, res, params);
            next();
        };
        return _this;
    }
    return PostsMiddleware;
}(base_1.default));
exports.default = PostsMiddleware;
