"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var webtokens_1 = __importDefault(require("../utils/webtokens"));
var Users_1 = require("../models/Users");
var Authentication = /** @class */ (function () {
    function Authentication() {
        this.login = function (req, res) {
            var token = webtokens_1.default.encrypt(req.body);
            var response = {
                token: token
            };
            res.json(response);
        };
        this.test = function (req, res) {
            console.log(res.locals.user);
            // console.log(user.toString());
            res.send("Hello World");
        };
        this.register = function (req, res) {
            console.log(req.body);
            Users_1.Users.createNewUser(req.body.username, req.body.password);
            var token = webtokens_1.default.encrypt({
                username: req.body.username
            });
            res.json({
                status: "All Correct",
                token: token
            });
        };
    }
    return Authentication;
}());
exports.default = Authentication;
