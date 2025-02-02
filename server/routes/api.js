import express from "express";
import * as UserController from "../src/controllers/UsersController.js";
import * as BlogController from "../src/controllers/BlogController.js"
import * as FileUploads from "../src/controllers/FileUploadController.js"
import upload from "../src/middleware/FileUploads.js";
const router = express.Router()


// User API
router.post("/registerUser", UserController.userRegistration);
router.post("/login", UserController.userLogIn)
router.get("/logout", UserController.userLogOut)



// Blog Api
router.post("/createBlog", BlogController.createBlog)
router.get("/getBlog", BlogController.getBlog)
router.delete("/deleteBlog/:id", BlogController.deleteBlog)
// file route
router.post("/file-upload", upload.array("file", 20), FileUploads.fileUpload)


export default router