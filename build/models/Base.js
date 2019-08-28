"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sqlite3_1 = __importDefault(require("sqlite3"));
var Base = /** @class */ (function () {
    function Base() {
        this.db = new sqlite3_1.default.Database('db.sqlite');
    }
    return Base;
}());
exports.default = Base;
