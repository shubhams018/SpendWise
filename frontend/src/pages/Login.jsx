import { useNavigate } from 'react-router-dom';
import {loginUser} from '../services/auth.service';
import React, { useState } from 'react'

const Login = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        identifier : "",
        password : ""
    })

    const [error, setError] = useState("")
  

    const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
           const response =  await loginUser(formData);
           navigate('/dashboard')
        
    } catch (error) {
    const errors = error.response?.data?.errors;

    if (errors && errors.length > 0) {
        setError(errors[0].msg);
    } else {
        setError(error.response?.data?.message || "Login failed");
    }
}
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
    <div className="flex flex-col justify-center w-full max-w-sm rounded-xl px-6 py-8 border border-slate-700 bg-slate-900 text-white text-sm">
    <h2 className="text-2xl text-center font-semibold">Sign In</h2>

    <p className="text-slate-300 text-center mt-1">
        Login to your SpendWise account
    </p>

    <form className="mt-8" onSubmit={handleSubmit}>

        {
          error && (
            <p className="text-red-400 text-sm mt-2">
                {error}
            </p>
          )
        }
        <label
            htmlFor="identifier"
            className="block mb-1 font-medium text-slate-300"
        >
            Username or Email
        </label>

        <input
            type="text"
            id="identifier"
            name="identifier"
            placeholder="Username or Email"
            value={formData.identifier}
            onChange={handleChange}
            className="w-full p-2 mb-4 bg-slate-900 border border-slate-700 rounded-md focus:outline-none focus:ring-1 transition focus:ring-indigo-500 focus:border-indigo-500"
        />

        <label
            htmlFor="password"
            className="block mb-1 font-medium text-slate-300"
        >
            Password
        </label>

        <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 mb-2 bg-slate-900 border border-slate-700 rounded-md focus:outline-none focus:ring-1 transition focus:ring-indigo-500 focus:border-indigo-500"
        />

        <button
            type="submit"
            className="w-full mt-8 px-4 py-2.5 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"  
        >
            Sign in
        </button>


    </form>
</div>
</div>
  )
}

export default Login
