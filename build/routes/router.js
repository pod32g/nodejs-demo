"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authentication_1 = __importDefault(require("../controllers/authentication"));
var authentication_2 = __importDefault(require("../middleware/authentication"));
var router = express_1.Router();
var auth = new authentication_1.default();
var authMid = new authentication_2.default();
router.post('/login', authMid.login, auth.login);
router.post('/test', authMid.test, auth.test);
router.post('/register', authMid.register, auth.register);
exports.default = router;
