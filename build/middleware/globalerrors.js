"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new /** @class */ (function () {
    function Error() {
        this.globalError = function (err, req, res, next) {
            console.log(err.stack);
            res.status(500).send("Something Broke");
        };
    }
    return Error;
}());
