import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {useEffect, useState} from "react";
import {ErrorMessage, IsEmpty, SuccessMessage} from "../helper/helper.js";
import {createBlog, deleteBlog, getAllBlog, uploadFiles} from "../apiCalls/apiCalls.js";
import {useNavigate} from "react-router-dom";

const DashboardComponent = () => {
    let navigate = useNavigate();

    let baseUrl= "http://localhost:3000/file-upload"

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        (async () => {
            let result = await getAllBlog()
            setBlogs(result)
        })()
    }, []);

    let [file, setFile] = useState()
    const [data, setData] = useState({blogTitle: "", blogDes: "", blogContent: "", img: ""})

    let handleFileUpload = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("file", file)
        const result = await uploadFiles(formData)
        setData({...data, img: result?.data?.file?.[0]?.filename})

    }
    let submitData = async () => {
        if (IsEmpty(data.blogTitle)){
         ErrorMessage("Blog Title Required")
        }else if (IsEmpty(data.blogDes)){
            ErrorMessage("Blog Description Required")
        } else if (IsEmpty(data.blogContent)){
            ErrorMessage("Blog Content Required")
        }else if (IsEmpty(data.img)){
            ErrorMessage("Blog Image Required")
        }

         await createBlog(data)
        window.location.reload()

    }

    let deleteHandler = async (id) => {
        const result = await deleteBlog(id);
        console.log(result, "delete handler")
        if (result) {
            // Filter out the deleted product from the products state
            setBlogs(blogs.filter(blog => blog._id !== id));
        }
    };



    return (
    <div className="flex flex-col gap-10">
      <div className="container-fluid w-full mx-auto bg-zinc-300">
        <h2 className="text-gray-700  text-4xl font-bold text-center p-4">
          Welcome to Our DashBoard!
        </h2>
      </div>
        <div className="container mx-auto  border-gray-700 shadow-md">
            <Tabs>
                <TabList className="text-gray-700 font-bold flex items-center justify-center ">
                    <Tab>Add Blog</Tab>
                    <Tab>All Blogs</Tab>
                    <Tab>Add Team Member</Tab>
                    <Tab>All Team Members</Tab>
                </TabList>

                <TabPanel className="mt-4">
                        <div className=" py-[20px] sm:px-6 lg:px-8">

                            <div  className="gap-4 grid grid-cols-12 " >
                                <div className="grid col-span-12 space-y-6">
                                    <div ><label htmlFor="blog" className="label-text text-2xl ">Blog Title
                                    <input
                                        onChange={(e)=>setData({...data, blogTitle: e.target.value})}
                                        placeholder="Blog Title"
                                        className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm border  focus:ring-purple-400 "
                                        id="blog"
                                        type="text"
                                    /></label>
                                    </div>
                                    <div><label htmlFor="blogDes" className="label-text text-2xl"> Blog Description
                                    <input
                                        onChange={(e)=>setData({...data, blogDes: e.target.value})}
                                        placeholder="Blog Description"
                                        className="w-full rounded-lg  p-4 pe-12 text-sm shadow-sm border  focus:ring-purple-400 "
                                        id="blogDes"
                                        type="text"
                                    />
                                    </label></div>
                                    <div><label htmlFor="blogContent" className="label-text text-2xl">Blog Content
                                    <textarea
                                        onChange={(e)=>setData({...data, blogContent: e.target.value})}
                                        placeholder="Blog Content"
                                        className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm border focus:ring-purple-400 "
                                        id="blogContent"
                                        type="text"
                                    />
                                    </label></div>
                                    <form className="space-y-4" onSubmit={handleFileUpload}>
                                    <div><label htmlFor="imageBlog"> Blog Image
                                        <input
                                            className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm border focus:ring-purple-400"
                                            type="file"
                                            onChange={(e) => setFile(e.target.files[0])}
                                            accept="image/*"
                                            id="imageBlog"
                                        />
                                    </label></div>
                                        <button
                                            className="inline-block rounded-lg bg-purple-600 px-4  py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                            type="submit">
                                            Upload
                                        </button>
                                    </form>
                                </div>
                                <div className="grid col-span-2  ">
                                    <button
                                        onClick={submitData}
                                        className="inline-block rounded-lg bg-purple-600 px-4  py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                        type="submit"
                                    >
                                        Add Blog
                                    </button>
                                </div>
                            </div>
                        </div>


                </TabPanel>
                <TabPanel className="mt-4">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead
                                className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                            <tr>

                                <th scope="col" className="px-6 py-3">
                                    Blog Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Content
                                </th>
                                <th scope="col" className="px-16 py-3">
                                    Blog Image
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                blogs?.map((item, index)=> (
                                    <tr key={index}
                                        className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-center">
                                            {item?.blogTitle}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-center">
                                            {item?.blogDes}
                                        </td>

                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-center">
                                            {item?.blogContent}
                                        </td>
                                        <td className="p-4 flex items-center justify-center">
                                            <img src={`${baseUrl}/${item?.img}`} alt={item?.blogTitle}
                                                 className="w-[150px] h-[150px] object-cover "/>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span onClick={()=>deleteHandler(item?._id)}
                                               className="cursor-pointer font-medium text-red-600 dark:text-red-500 hover:underline">Remove</span>
                                        </td>

                                    </tr>))
                            }

                            </tbody>
                        </table>
                    </div>

                </TabPanel>
            </Tabs>
        </div>
    </div>
  );
};

export default DashboardComponent;
