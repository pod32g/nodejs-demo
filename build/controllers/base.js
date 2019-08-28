"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Base = /** @class */ (function () {
    function Base() {
        this.sayHi = function (req, res) {
            res.send('Hello World');
        };
    }
    return Base;
}());
exports.default = Base;
