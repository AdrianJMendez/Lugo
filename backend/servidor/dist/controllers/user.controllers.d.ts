import { Request, Response } from "express";
export declare const login: (req: Request, res: Response) => Promise<void>;
export declare const obtenerusuario: (req: Request, res: Response) => Promise<void>;
export declare const obtenerlistausuario: (req: Request, res: Response) => void;
export declare const obtenerallusers: (req: Request, res: Response) => Promise<void>;
export declare const guardarusuario: (req: Request, res: Response) => Promise<void>;
