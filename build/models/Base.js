"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Usersmodel_1 = require("./Usersmodel");
var Postsmodel_1 = require("./Postsmodel");
var Base = /** @class */ (function () {
    function Base() {
        this.options = {
            type: 'sqlite',
            database: './db.sqlite',
            entities: [Usersmodel_1.User, Postsmodel_1.Post],
            logging: true,
            synchronize: false
        };
        this.connection = typeorm_1.createConnection(this.options);
    }
    return Base;
}());
exports.default = Base;
