import { Request, Response, NextFunction } from "express";
import { Client } from "pg";
const db = new Client();

export let login = async (req: Request, res: Response) => {
    res.send("Hello World Again 2");
};

export let signup = async (req: Request, res: Response) => {
    await db.connect();
    const result = await db.query("SELECT * from user");
    await db.end();

    res.json(result);
};

export let info = (req: Request, res: Response) => {
    res.send("User Info");
};