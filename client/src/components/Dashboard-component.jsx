import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {useEffect, useState} from "react";
import {ErrorMessage, IsEmpty, SuccessMessage} from "../helper/helper.js";
import {createProduct, deleteProduct, getAllProduct, uploadFiles} from "../apiCalls/apiCalls.js";
import {useNavigate} from "react-router-dom";

const DashboardComponent = () => {
    let navigate = useNavigate();

    let baseUrl= "http://localhost:3000/file-upload"

    const [products, setProducts] = useState([])

    useEffect(() => {
        (async () => {
            let result = await getAllProduct()
            setProducts(result)
        })()
    }, []);

    let [file, setFile] = useState()
    const [data, setData] = useState({productName: "", productDes: "", productPrice: "", img: ""})

    let handleFileUpload = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("file", file)
        const result = await uploadFiles(formData)
        setData({...data, img: result?.data?.file?.[0]?.filename})

    }
    let submitData = async () => {
        if (IsEmpty(data.productName)){
         ErrorMessage("Product Name Required")
        }else if (IsEmpty(data.productDes)){
            ErrorMessage("Product Des Required")
        } else if (IsEmpty(data.productPrice)){
            ErrorMessage("Product Price Required")
        }else if (IsEmpty(data.img)){
            ErrorMessage("Product Image Required")
        }

         await createProduct(data)
        window.location.reload()

    }

    let deleteHandler = async (id) => {
        const result = await deleteProduct(id);
        console.log(result, "delete handler")
        if (result) {
            // Filter out the deleted product from the products state
            setProducts(products.filter(product => product._id !== id));
            console.log("products set", products)
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
                <TabList className="text-gray-700 font-bold">
                    <Tab>Add Products</Tab>
                    <Tab>All Product</Tab>
                </TabList>

                <TabPanel className="mt-4">
                        <div className=" py-[20px] sm:px-6 lg:px-8">

                            <div  className="gap-4 grid grid-cols-12 " >
                                <div className="flex col-span-12 space-x-4">
                                    <input
                                        onChange={(e)=>setData({...data, productName: e.target.value})}
                                        placeholder="Product Name"
                                        className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm border  focus:ring-purple-400 "
                                        id="product"
                                        type="text"
                                    />
                                    <input
                                        onChange={(e)=>setData({...data, productDes: e.target.value})}
                                        placeholder="Product Description"
                                        className="w-full rounded-lg  p-4 pe-12 text-sm shadow-sm border  focus:ring-purple-400 "
                                        id="productDes"
                                        type="text"
                                    />
                                    <input
                                        onChange={(e)=>setData({...data, productPrice: e.target.value})}
                                        placeholder="Product Price"
                                        className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm border focus:ring-purple-400 "
                                        id="productPrice"
                                        type="text"
                                    />
                                    <form className="flex w-full gap-3" onSubmit={handleFileUpload}>
                                        <input
                                            className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm border focus:ring-purple-400"
                                            type="file"
                                            onChange={(e) => setFile(e.target.files[0])}
                                            accept="image/*"
                                        />
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
                                        Add Product
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
                                    Product Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-16 py-3">
                                    Product Image
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                products?.map((item, index)=> (
                                    <tr key={index}
                                        className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-center">
                                            {item?.productName}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-center">
                                            {item?.productDes}
                                        </td>

                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-center">
                                            {item?.productPrice}
                                        </td>
                                        <td className="p-4 flex items-center justify-center">
                                            <img src={`${baseUrl}/${item?.img}`} alt={item?.productName}
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
