import express from "express";
// import { Client } from "pg";

import * as User from "./controller/user";

const app           = express();
const port          = 8000;
// const db         = new Client();
const router        = express.Router();

// Prepend Router with API namespace
app.use("/api", router);

// Start of Routing
router.get("/user",                       User.info);
router.get(["/user/login",  "/login"],    User.login);
router.get(["/user/signup", "/signup"],   User.signup);

app.listen(port, () =>
    // tslint:disable-next-line:no-console
    console.log(`Example app listening on port ${port}!`)
);
