'use client';

import Router, { useState } from 'react';
import { useRouter } from 'next/router';
import { redirect } from 'next/navigation';
export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = (e: any) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };
    const handleLogin = () => {
        const storedDataString = localStorage.getItem("userData");
        const storedData = storedDataString ? JSON.parse(storedDataString) : null;
        if (!storedData) {
            alert("Please register first!");
            return;
        }
        if (formData.email === storedData.email && formData.password === storedData.password) {
            redirect("/");
        } else {
            alert("Invalid email or password");
        }
    };

    return (
        <div className="h-full w-2/3 mx-auto my-28">
            <div className="flex align-center items-center justify-center py-14 shadow-2xl rounded-2xl shadow-black-500/100">
                <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                    <div style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url('https://plus.unsplash.com/premium_photo-1678167657805-36fb1c27cbd4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }} className="w-full transition duration-300 h-auto lg:block lg:w-5/12 bg-cover rounded-l-xl"></div>
                    <div className="w-full lg:w-7/12 white p-5 rounded-lg lg:rounded-l-none">
                        <h3 style={{ color: '#92a91a' }} className="py-4 text-2xl text-center font-bold border-b border-gray-200">Login to Your Account</h3>
                        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
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
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="******************"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-6 text-center">
                                <button
                                    style={{
                                        backgroundColor: '#92a91a'
                                    }}
                                    className="w-full px-4 py-2 font-bold text-white rounded-full hover:bg-green-800 focus:outline-none focus:shadow-outline"
                                    type="button"
                                    onClick={handleLogin} // Add onClick event handler
                                >
                                    Login
                                </button>
                            </div>
                            <hr className="mb-6 border-t" />
                            <div className="text-center">
                                <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="/">
                                    Forgot Password?
                                </a>
                            </div>
                            <div className="text-center">
                                <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="/register">
                                    Don't have an account? Sign Up!
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
