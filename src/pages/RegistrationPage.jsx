import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        secretCode: "",
        email: "",
        password: "",
        reEnterPassword: ""
    });

    const [showPasswordFields, setShowPasswordFields] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate(); // Initialize navigate

    const validateInitialFields = () => {
        // Example validation for initial fields
        if (formData.name && formData.secretCode === "1234" && formData.email.includes("@")) {
            setShowPasswordFields(true);
            setErrorMessage("");
        } else {
            setErrorMessage("Please enter the correct Name, Secret Code, and Email.");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if passwords match
        if (formData.password !== formData.reEnterPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        // On successful registration, navigate to the login page
        navigate("/login"); // Redirects to login page after submission
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div
            className="flex overflow-hidden flex-col justify-center items-start px-20 py-28 min-h-screen bg-gradient-to-b from-[#FF4E6E] via-[#DA5F9C] to-[#2E33D1] max-md:px-5 max-md:py-24"
        >
            <div className="flex flex-col w-full max-w-[1103px] mx-auto max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/67446702eabcd31d9bbf137ef3170bebac9ba0f224c2ee2157d3a073fec81b9f?placeholderIfAbsent=true&apiKey=856530a2bc8b4fad805f6d030062538d"
                            alt="Student registration illustration"
                            className="object-contain grow mt-24 w-full aspect-[0.59] max-md:mt-10"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col text-white max-md:mt-10 max-md:max-w-full"
                            noValidate
                        >
                            <h1 className="text-5xl font-bold max-md:max-w-full max-md:text-4xl">
                                Student Registration Form
                            </h1>
                            <div className="flex flex-col items-start mt-28 ml-12 max-w-full text-xl w-[361px] max-md:mt-10 max-md:ml-2.5">
                                <div className="w-full mb-6">
                                    <label htmlFor="name" className="block mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="flex w-full px-4 py-2 bg-white text-gray-900 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        required
                                        aria-required="true"
                                    />
                                </div>

                                <div className="w-full mb-6">
                                    <label htmlFor="secretCode" className="block mb-2">Secret Code</label>
                                    <input
                                        type="text"
                                        id="secretCode"
                                        name="secretCode"
                                        value={formData.secretCode}
                                        onChange={handleInputChange}
                                        className="flex w-full px-4 py-2 bg-white text-gray-900 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        required
                                        aria-required="true"
                                    />
                                </div>

                                <div className="w-full mb-6">
                                    <label htmlFor="email" className="block mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="flex w-full px-4 py-2 bg-white text-gray-900 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        required
                                        aria-required="true"
                                    />
                                </div>

                                {/* Error message display */}
                                {errorMessage && (
                                    <p className="text-red-500 mt-2">{errorMessage}</p>
                                )}

                                <button
                                    type="button"
                                    onClick={validateInitialFields}
                                    className="mt-6 px-6 py-2 text-lg font-semibold text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200"
                                >
                                    Verify Details
                                </button>

                                {/* Password fields (initially hidden) */}
                                {showPasswordFields && (
                                    <div className="w-full mt-8 mb-6">
                                        <h2 className="text-2xl font-bold mb-6">Create Your Password</h2>
                                        <div className="mb-6">
                                            <label htmlFor="password" className="block mb-2">Password</label>
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleInputChange}
                                                className="flex w-full px-4 py-2 bg-white text-gray-900 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                                required
                                                aria-required="true"
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="reEnterPassword" className="block mb-2">Re-enter Password</label>
                                            <input
                                                type="password"
                                                id="reEnterPassword"
                                                name="reEnterPassword"
                                                value={formData.reEnterPassword}
                                                onChange={handleInputChange}
                                                className="flex w-full px-4 py-2 bg-white text-gray-900 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                                required
                                                aria-required="true"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="self-end px-14 py-2 mr-52 text-xl font-bold text-white bg-blue-700 rounded-md w-[180px] hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 max-md:px-5 max-md:mr-2.5"
                                aria-label="Submit registration form"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;
