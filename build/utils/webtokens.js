"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = new /** @class */ (function () {
    function JWT() {
        var _this = this;
        this.signingKey = "tkOHaBJ0ZXshZixQsuFIpUoP3875F8g4";
        this.encrypt = function (data) {
            return jsonwebtoken_1.default.sign(data, _this.signingKey);
        };
        this.decrypt = function (token) {
            return jsonwebtoken_1.default.verify(token, _this.signingKey);
        };
    }
    return JWT;
}());
