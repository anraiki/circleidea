"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { Client } from "pg";
const User = __importStar(require("./controller/user"));
const app = express_1.default();
const port = 8000;
// const db         = new Client();
const router = express_1.default.Router();
// Prepend Router with API namespace
app.use("/api", router);
// Start of Routing
router.get("/user", User.info);
router.get(["/user/login", "/login"], User.login);
router.get(["/user/signup", "/signup"], User.signup);
app.listen(port, () => 
// tslint:disable-next-line:no-console
console.log(`Example app listening on port ${port}!`));
//# sourceMappingURL=index.js.map