"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Usersmodel_1 = require("./Usersmodel");
var Post = /** @class */ (function () {
    function Post() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Post.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            length: 100
        }),
        __metadata("design:type", String)
    ], Post.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column("text"),
        __metadata("design:type", String)
    ], Post.prototype, "content", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Post.prototype, "image", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], Post.prototype, "timestamp", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Post.prototype, "likes", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (type) { return Usersmodel_1.User; }, {
            cascade: true
        }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Object)
    ], Post.prototype, "user", void 0);
    Post = __decorate([
        typeorm_1.Entity()
    ], Post);
    return Post;
}());
exports.Post = Post;
