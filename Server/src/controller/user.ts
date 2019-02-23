import { Request, Response, NextFunction } from "express";

export let login = (req: Request, res: Response) => {
    res.send("Hello World");
};

export let signup = (req: Request, res: Response) => {
    res.send("Sign Up");
};

export let info = (req: Request, res: Response) => {
    res.send("User Info");
};
