"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Login = /** @class */ (function () {
    function Login() {
        this.authenticate = function (req, res) {
            console.log(req.body);
            var response = {
                test: "Hello World"
            };
            res.json(response);
        };
    }
    return Login;
}());
exports.default = Login;
