import { useState } from "react";
import axios from "axios";
import {createFeedback} from "../apiCalls/apiCalls.js";

const ContactComponent = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage("");
        setErrorMessage("");

        try {
            let response = await createFeedback(formData);

            if (response?.data?.status === "Success") {
                setSuccessMessage(response.data.message);
                setFormData({ name: "", email: "", message: "" });
            } else {
                setErrorMessage("Failed to send feedback!");
            }
        } catch (error) {
            setErrorMessage("Failed to send feedback. Please try again later.");
        }

        setLoading(false);
    };


    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container-fluid px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                            frameBorder={0}
                            title="map"
                            marginHeight={0}
                            marginWidth={0}
                            scrolling="no"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.386302873441!2d90.70578010000001!3d23.797376099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754365105b9c3f1%3A0x2d4ed1077f9848ec!2sGopaldi!5e0!3m2!1sen!2sbd!4v1738687453625!5m2!1sen!2sbd"
                        />
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                    ADDRESS
                                </h2>
                                <p className="mt-1">Narayangonj, Dhaka, Bangladesh</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                    EMAIL
                                </h2>
                                <a className="text-red-500 leading-relaxed">jahirulislam001@yahoo.com</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                                    PHONE
                                </h2>
                                <p className="leading-relaxed">+8801773427087</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col p-4 md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Send Your Valuable Feedback to Us</p>

                        {successMessage && <p className="text-green-500">{successMessage}</p>}
                        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

                        <form onSubmit={handleSubmit}>
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3"
                                    required
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3"
                                    required
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-white rounded border border-gray-300 h-32 text-base outline-none text-gray-700 py-1 px-3"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send Feedback"}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactComponent;
