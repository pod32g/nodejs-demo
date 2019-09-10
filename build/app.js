"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var router_1 = require("./routes/router");
var cors_1 = __importDefault(require("cors"));
var globalerrors_1 = __importDefault(require("./middleware/globalerrors"));
require("reflect-metadata");
var app = express_1.default();
app.use(globalerrors_1.default.globalLogs);
app.use(globalerrors_1.default.globalError);
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/authentication', router_1.authRouter);
app.use('/posts', router_1.postRouter);
app.listen(3000, function () {
    console.log('Listening on port 3000');
});
