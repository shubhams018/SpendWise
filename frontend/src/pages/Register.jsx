import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/auth.service';


const Register = () => {

     const navigate = useNavigate();
     
     const [formData, setFormData] = useState({
        username : "",
        email : "",
        password : ""
    })

    const [error, setError] = useState("");

    const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

    const handleSubmit = async (e) => {
     e.preventDefault();

    try {
        await registerUser(formData);
        navigate('/login');
    } catch (error) {
    const errors = error.response?.data?.errors;

    if (errors && errors.length > 0) {
        setError(errors[0].msg);
    } else {
        setError(error.response?.data?.message || "Registration failed");
    }
}
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
       <div className="flex flex-col justify-center w-full max-w-sm rounded-xl px-6 py-8 border border-slate-700 bg-slate-900 text-white text-sm">
   
        <h2 className="text-2xl text-center font-semibold">Register</h2>
        <p className="text-center text-slate-300 mt-1">
            Create a SpendWise account
        </p>

        <form className="mt-4" onSubmit={handleSubmit}>

        {
          error && (
            <p className="text-red-400 text-sm mb-4">
                {error}
            </p>
          )
        }
        <label
            htmlFor="username"
            className="block mb-1 font-medium text-slate-300"
        >
            Username 
        </label>

        <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full p-2 mb-4 bg-slate-900 border border-slate-700 rounded-md focus:outline-none focus:ring-1 transition focus:ring-indigo-500 focus:border-indigo-500"
        />

         <label
            htmlFor="email"
            className="block mb-1 font-medium text-slate-300"
        >
            Email 
        </label>

        <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email"
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
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-2 mb-2 bg-slate-900 border border-slate-700 rounded-md focus:outline-none focus:ring-1 transition focus:ring-indigo-500 focus:border-indigo-500"
        />

        <button
            type="submit"
            className="w-full mt-8 px-4 py-2.5 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
           Create Account
        </button>


    </form>
</div>
</div>
  )
}

export default Register
