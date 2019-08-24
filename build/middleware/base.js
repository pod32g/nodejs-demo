"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var webtokens_1 = __importDefault(require("../utils/webtokens"));
var Base = /** @class */ (function () {
    function Base() {
        var _this = this;
        this.user = undefined;
        this.checkForFields = function (req, res, fields) {
            var keys = Object.keys(req.body);
            var missing = [];
            fields.forEach(function (key) {
                if (!keys.includes(key)) {
                    missing.push(key);
                }
            });
            if (missing.length > 0) {
                res.status(400).json({
                    "error": "Missing parameters",
                    "missing": missing.toString()
                });
            }
        };
        this.checkAuthentication = function (req, res) {
            var header = req.headers.authorization;
            var token = "";
            if (header !== undefined) {
                token = header.split(" ")[1];
                try {
                    _this.user = webtokens_1.default.decrypt(token);
                }
                catch (error) {
                    res.status(400).json({ error: "JWT Token malformed" });
                }
            }
        };
    }
    return Base;
}());
exports.default = Base;
