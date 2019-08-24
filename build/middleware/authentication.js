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
var AuthenticationMiddleware = /** @class */ (function (_super) {
    __extends(AuthenticationMiddleware, _super);
    function AuthenticationMiddleware() {
        var _this = _super.call(this) || this;
        _this.login = function (req, res, next) {
            var fields = [
                "username",
                "password"
            ];
            _this.checkForFields(req, res, fields);
            next();
        };
        _this.test = function (req, res, next) {
            var fields = [
                "token"
            ];
            _this.checkAuthentication(req, res);
            _this.checkForFields(req, res, fields);
            res.locals.user = _this.user;
            next();
        };
        _this.register = function (req, res, next) {
            var fields = [
                "username",
                "password"
            ];
            _this.checkForFields(req, res, fields);
            next();
        };
        return _this;
    }
    return AuthenticationMiddleware;
}(base_1.default));
exports.default = AuthenticationMiddleware;
