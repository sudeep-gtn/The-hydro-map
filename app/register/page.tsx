'use client';

import { redirect } from 'next/navigation';
import React, { useState, useEffect, } from "react";
import Image from "next/image";
import 'tailwindcss/tailwind.css';
export default function SignUp() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        c_password: "",
    });
    const storedDataString = localStorage.getItem("userData");
    const storedData = storedDataString ? JSON.parse(storedDataString) : null;

    if (storedData) {
        window.location.href = '/';
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
    };

    console.log("Stoere ll", storedData);
    if (storedData && storedData.email === formData.email) {
        alert("Email already registered!");
        return;
    }
    const handleRegister = () => {
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.c_password) {
            alert("Please fill all the fields");
            return;
        }
        localStorage.setItem("userData", JSON.stringify(formData));
        alert("Form data saved successfully!");
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            c_password: ""
        });
        window.location.href = "/";
    };

    return (
        <div className="h-full m-20">
            <div className="flex align-center items-center  justify-center py-24 shadow-2xl rounded-2xl shadow-black-500/100">
                <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                    <div style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url('https://plus.unsplash.com/premium_photo-1678167657805-36fb1c27cbd4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }} className="w-full transition duration-300 h-auto lg:block lg:w-5/12 bg-cover rounded-l-xl"></div>
                    <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                        <h3 style={{ color: '#92a91a' }} className="py-4 text-2xl text-center text-gray-900 font-bold border-b border-gray-300 ">Create an Account!</h3>
                        <form className="px-8 pt-6 pb-8 mb-4 bg-white  rounded">
                            <div className="mb-4 md:flex md:justify-between">
                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <label className="block mb-2 text-sm font-bold text-gray-700 " htmlFor="firstName">
                                        First Name
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="firstName"
                                        type="text"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="md:ml-2">
                                    <label className="block mb-2 text-sm font-bold text-gray-700 " htmlFor="lastName">
                                        Last Name
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="lastName"
                                        type="text"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700 " htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-4 md:flex md:justify-between">
                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <label className="block mb-2 text-sm font-bold text-gray-700 " htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="******************"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="md:ml-2">
                                    <label className="block mb-2 text-sm font-bold text-gray-700 " htmlFor="c_password">
                                        Confirm Password
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="c_password"
                                        type="password"
                                        placeholder="******************"
                                        value={formData.c_password}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-6 text-center">
                                <button
                                    style={{
                                        backgroundColor: "#92a91a"
                                    }}
                                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                    type="button"
                                    onClick={handleRegister} // Add onClick event handler
                                >
                                    Register Account
                                </button>
                            </div>
                            <hr className="mb-6 border-t" />
                            <div className="text-center">
                                <a className="inline-block text-sm text-green-600  align-baseline hover:text-green-800"
                                    href="/">
                                    Forgot Password?
                                </a>
                            </div>
                            <div className="text-center">
                                <a className="inline-block text-sm text-green-600  align-baseline hover:text-green-800"
                                    href="/login">
                                    Already have an account? Login!
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
