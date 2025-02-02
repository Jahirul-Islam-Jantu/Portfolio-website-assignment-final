import { useEffect, useState } from "react";
import { getAllBlog } from "../apiCalls/apiCalls.js";
import Loader from "./Loader.jsx";

const GetAllBlogs = () => {
    let baseUrl= "http://localhost:3000/file-upload"
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true); // Start with loading state

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true); // Start loading
            const result = await getAllBlog();
            if (result) {
                setBlogs(result); // Store fetched blogs
            }
            setLoading(false); // Stop loading
        };

        fetchBlogs();
    }, []); // Empty dependency array to run once

    return (
        <div className="flex items-center justify-center p-4 gap-4">
            {loading && <Loader />}
            {!loading && blogs.length === 0 && <p>No blogs found</p>}
            {blogs.map((blog, index) => (
                <div key={index} className=" card bg-base-100 w-96 shadow-xl ">
                    <figure className="px-10 pt-10">

                        <img className="rounded-xl" src={`${baseUrl}/${blog?.img}`} alt={blog?.blogTitle}/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{blog?.blogTitle}</h2>
                        <p>{blog?.blogDes}</p>
                        <p>{blog?.blogContent}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GetAllBlogs;
