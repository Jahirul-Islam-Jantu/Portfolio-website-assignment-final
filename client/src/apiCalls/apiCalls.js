import axios from "axios";
import {DeleteAlert, ErrorMessage, SuccessMessage} from "../helper/helper.js";

const baseURL = "http://localhost:3000/api"

class ApiCalls {
    async registerUser(reqBody) {
        let result = await axios.post(`${baseURL}/registerUser`, reqBody, { withCredentials: true })

        if (result.data.status === "Success"){
            SuccessMessage(result.data.message)
            return true
        }
        else{
            ErrorMessage(result.data.message)
            return false
        }
    }

    async universalApi(apiEndPoint, reqBody){
        let result = await axios.post(`${baseURL}/${apiEndPoint}`, reqBody)
        if (result.data.status === "Success"){
            SuccessMessage(result.data.message)
            return true
        }else {
            ErrorMessage(result.data.message)
            return false;
        }


    }

    async loginUser(reqBody) {
        let result = await axios.post(`${baseURL}/login`, reqBody, {withCredentials: true })

        if (result.data.status === "Success"){
            SuccessMessage(result.data.message)
            return true
        }else{
            ErrorMessage(result.data.message)
            return false;
        }
    }

    async logOutUser() {
        let result = await axios.get(`${baseURL}/logout`, {withCredentials: true})
        if (result.data.status === "Success"){
            SuccessMessage(result.data.message)
            return true
        }else{
            ErrorMessage(result.data.message)
            return false;
        }
    }

    async createBlog(reqBody) {
        let result = await axios.post(`${baseURL}/createBlog`, reqBody)

        if (result.data.status === "Success"){
            SuccessMessage(result.data.message)
            return true
        }
        else{
            ErrorMessage(result.data.message)
            return false
        }
    }

    async uploadFiles(reqBody) {
        const result = await axios.post(
                    `${baseURL}/file-upload`,
                    reqBody,
                    { headers: { "Content-Type": "multipart/form-data" } }
                );


        if (result){
            SuccessMessage(result.data.message)
            return result
        }
        else{
            ErrorMessage(result.data.message)
            return false
        }
    }

    async  getAllBlog() {
        let result = await axios.get(`${baseURL}/getBlogs`)

        if (result.data.status === "Success"){
            return result?.data?.data
        }
        else{
            ErrorMessage(result.data.message)
            return false
        }
    }

    async  deleteBlog (id) {
        let IsConfirm = await DeleteAlert()
        if (IsConfirm){
        let result = await axios.delete(`${baseURL}/deleteBlog/`+ id)
            console.log(result)
            if (result.data.status === "Success"){
                return result
            }
            else{
                ErrorMessage(result.data.message)
                return false
            }

        }


    }




}

export const {registerUser, universalApi, loginUser, logOutUser, createBlog, uploadFiles, getAllBlog , deleteBlog} = new ApiCalls( )