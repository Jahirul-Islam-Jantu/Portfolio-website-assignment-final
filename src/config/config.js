import dotenv from "dotenv";
dotenv.config();


export const MONGODB_CONNECTION = "mongodb+srv://unchangedjahir:742682@mernstack.tose2.mongodb.net/Full-Stack"
export const JWT_SECRET = "05660b74f5658917c96d0068d9e62455a0abca27a10438585aaec933e902a2d2"
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


