import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp"
import cookieParser from "cookie-parser"
import router from "./routes/api.js";
import {
    MONGODB_CONNECTION,
    PORT,
    MAX_JSON_SIZE,
    URL_ENCODING,
    WEB_CACHE,
    REQUEST_LIMIT_NUMBER,
    REQUEST_LIMIT_TIME,
    corsOptions
} from "./src/config/config.js"

const app = express();

app.use(cors(corsOptions))
app.use(express.json({limit:MAX_JSON_SIZE}))
app.use(express.urlencoded({extended:URL_ENCODING}))
app.use(hpp())
app.use(helmet({crossOriginResourcePolicy:false}))
app.use(cookieParser())

// Rate limiter
const limiter = rateLimit({windowMs:REQUEST_LIMIT_TIME, max:REQUEST_LIMIT_NUMBER})
app.use(limiter)
// web cache
app.set('etag', WEB_CACHE)
// MongoDB connection
mongoose.connect(  MONGODB_CONNECTION, {autoIndex: true}).then(()=>{
    console.log("connected to MongoDB")
}).catch(err=>{
    console.log(err)
})
// set Api
app.use("/api", router)

// file Upload
app.use('/file-upload', express.static('uploads'));
export default app

// run app
// app.listen(PORT || 3030, ()=>{
//     console.log(`app running on port ${PORT}`)
// })


