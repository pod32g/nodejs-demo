"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new /** @class */ (function () {
    function Error() {
        this.globalError = function (err, req, res, next) {
            console.log(err.stack);
            res.status(500).send("Something Broke");
        };
        this.globalLogs = function (req, res, next) {
            var host = req.headers.host;
            var origin = req.headers.origin;
            var user_agent = req.headers["user-agent"];
            console.log("HOST => " + host + " ORIGIN => " + origin + " USER AGENT => " + user_agent);
            next();
        };
    }
    return Error;
}());
