import React, { useState } from 'react'
import axios from 'axios';
import { addExpenses } from '../services/expense.service';
import { useNavigate } from 'react-router-dom';


const AddExpense = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    type: "",
    date: ""
  });

    const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
   };

    const handleSubmit = async (e) => {
        e.preventDefault();
    const response =  await addExpenses(formData);
    navigate('/dashboard')

   };




  return (
        <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col justify-center w-full max-w-80 rounded-xl px-6 py-8 border border-slate-700 bg-slate-900 text-white text-sm">
    <h2 className="text-2xl font-semibold">Add Expense</h2>

    <form className="mt-8" onSubmit={handleSubmit}>

        <label
            htmlFor="Title"
            className="block mb-1 font-medium text-slate-300"
        >
           Title
        </label>

        <input
            type="text"
            id="Title"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 mb-4 bg-slate-900 border border-slate-700 rounded-md focus:outline-none focus:ring-1 transition focus:ring-indigo-500 focus:border-indigo-500"
        />

         <label
            htmlFor="amount"
            className="block mb-1 font-medium text-slate-300"
        >
            Amount
        </label>

        <input
            type="number"
            min={1}
            id="Amount"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full p-2 mb-4 bg-slate-900 border border-slate-700 rounded-md focus:outline-none focus:ring-1 transition focus:ring-indigo-500 focus:border-indigo-500"
        />

         <label
            htmlFor="Category"
            className="block mb-1 font-medium text-slate-300"
        >
           Category
        </label>

        <input
            type="text"
            id="Category"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 mb-4 bg-slate-900 border border-slate-700 rounded-md focus:outline-none focus:ring-1 transition focus:ring-indigo-500 focus:border-indigo-500"
        />

         <label
            htmlFor="Type"
            className="block mb-1 font-medium text-slate-300"
        >
            Type
        </label>

        <input
            type="text"
            id="Type"
            name="type"
            placeholder="Type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-2 mb-4 bg-slate-900 border border-slate-700 rounded-md focus:outline-none focus:ring-1 transition focus:ring-indigo-500 focus:border-indigo-500"
        />

        <label
            htmlFor="Type"
            className="block mb-1 font-medium text-slate-300"
        >
            Date
        </label>

        <input
            type="Date"
            id="Date"
            name="date"
            placeholder="Date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 mb-4 bg-slate-900 border border-slate-700 rounded-md focus:outline-none focus:ring-1 transition focus:ring-indigo-500 focus:border-indigo-500"
        />

        <button
            type="submit"
            className="w-full mt-8 px-4 py-2.5 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
            Add
        </button>


    </form>
</div>
</div>
  )
}

export default AddExpense
