import { useEffect, useState } from "react";
import { getAllFeedbacks } from "../apiCalls/apiCalls.js";
import { ErrorMessage, SuccessMessage } from "../helper/helper.js";

const ShowAllFeedbacks = () => {
    const [showAllFeedbacks, setShowAllFeedbacks] = useState([]);

    useEffect(() => {
        (async () => {
            let response = await getAllFeedbacks();
            if (Array.isArray(response)) {
                SuccessMessage("Successfully loaded all Feedbacks");
                setShowAllFeedbacks(response);
            } else {
                ErrorMessage("Invalid response format");
            }
        })();
    }, []);


    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-center text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Email</th>
                        <th className="px-6 py-3">Message</th>
                        <th className="px-6 py-3">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {showAllFeedbacks !== null &&  showAllFeedbacks.map((item, index) => (
                        <tr key={index} className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-4 text-center">{item?.name}</td>
                            <td className="px-6 py-4 text-center">{item?.email}</td>

                            {/* Truncated Content */}
                            <td className="px-6 py-4 text-center">
                                {item?.message.length > 50
                                    ? item?.message.slice(0, 50) + "..."
                                    : item?.message}
                                {item?.message.length > 50 && (
                                    <button
                                        className="text-blue-600 hover:underline ml-2"
                                    >
                                        Read More
                                    </button>
                                )}
                            </td>

                            {/* Action Buttons (Edit + Delete) */}
                            <td className="px-6 py-4 text-center">
                                <button
                                    className="text-blue-600 hover:underline mr-4"
                                >
                                    Edit
                                </button>
                                <button
                                    className="text-red-600 hover:underline"
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShowAllFeedbacks;
