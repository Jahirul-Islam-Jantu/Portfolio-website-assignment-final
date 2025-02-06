import dotenv from "dotenv";
dotenv.config();


export const MONGODB_CONNECTION = process.env.MONGODB_CONNECTION ;
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRATION_DURATION = 60 * 60 * 24 * 7 * 1000;

export const Cookie_ExpiresIn = 60 * 60 * 24 * 7 * 1000;
export const corsOptions = {
        origin: "http://localhost:5173",
        credentials: true,
    };


export const URL_ENCODING = true;
export const MAX_JSON_SIZE = "50mb";

export const REQUEST_LIMIT_TIME = 15 * 60 * 1000;
export const REQUEST_LIMIT_NUMBER = 3000;

export const WEB_CACHE = false;
export const PORT = 3000;


