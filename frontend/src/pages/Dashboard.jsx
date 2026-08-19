import React, { useEffect, useState } from 'react'
import { getSummary, getExpenses, deleteExpenses } from '../services/expense.service'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate();
    const [summary, setSummary] = useState({});
    const [expenses, setExpenses] = useState([]);
    const [pagination, setPagination] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [sort, setSort] = useState("newest");
    const [category, setCategory] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const limits = [5, 10, 15, 20];



    async function fetchDashboardData() {
        const summaryResponse = await getSummary();
        setSummary(summaryResponse.data)

        const expensesResponse = await getExpenses(
            currentPage, 
            limit, 
            sort, 
            category, 
            from, 
            to
        );

        setExpenses(expensesResponse.data.expenses);
        setPagination(expensesResponse.data.pagination);
        
    }

   useEffect(() => {
   fetchDashboardData()
}, [currentPage, limit, sort, category, from, to]);

    const handleDelete = async (id) => {
   
    await deleteExpenses(id);
    await fetchDashboardData();
};

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
        <div className="max-w-6xl mx-auto">

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-semibold">
                        Dashboard
                    </h1>

                    <p className="text-slate-400 mt-1">
                        Here's your expense overview
                    </p>
                </div>

                <button className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700"
                onClick={()=>{navigate("/add-expense")}}>
                    Add Expense
                </button>
            </div>


            {/* Summary cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

                <div className="rounded-xl border border-slate-700 bg-slate-900 p-5">
                    <p className="text-slate-400">
                        Total Income
                    </p>

                    <h2 className="text-2xl font-semibold mt-2 text-green-400">
                        ₹ {summary.summary?.totalIncome}
                    </h2>
                </div>


                <div className="rounded-xl border border-slate-700 bg-slate-900 p-5">
                    <p className="text-slate-400">
                        Total Expense
                    </p>

                    <h2 className="text-2xl font-semibold mt-2 text-red-400">
                        ₹ {summary.summary?.totalExpense}
                    </h2>
                </div>


                <div className="rounded-xl border border-slate-700 bg-slate-900 p-5">
                    <p className="text-slate-400">
                        Balance
                    </p>

                    <h2 className= {`text-2xl font-semibold mt-2 ${summary.summary.balance >= 0 ? 'text-green-400' : 'text-red-400'}`}
                    
>
                        ₹ {summary.summary?.balance}
                    </h2>
                </div>

            </div>


            {/* Recent expenses card */}
            <div className="rounded-xl border border-slate-700 bg-slate-900">

                {/* Expenses header */}
                <div className="flex items-center justify-between p-5 border-b border-slate-700">

                    {/* Title */}
                    <div>
                        <h2 className="text-xl font-semibold">
                            Recent Expenses
                        </h2>

                        <p className="text-sm text-slate-400 mt-1">
                            Your latest transactions
                        </p>
                    </div>


                    {/* Controls */}
                    <div className="flex items-center gap-3">

                        {/* Date */}

                        <div className="flex items-center gap-2">
                            <span className="text-sm text-slate-400">From</span>

                            <input
                                type="date"
                                value={from}
                                onChange={(e) => {
                                    setFrom(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="text-sm text-slate-200 bg-slate-900 border border-slate-700 rounded-md px-3 py-1.5 outline-none focus:border-indigo-500"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-sm text-slate-400">To</span>

                            <input
                                type="date"
                                value={to}
                                onChange={(e) => {
                                    setTo(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="text-sm text-slate-200 bg-slate-900 border border-slate-700 rounded-md px-3 py-1.5 outline-none focus:border-indigo-500"
                            />
                        </div>

                        {/* Category */}
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-slate-400">
                                Category
                            </span>

                            <select
                                value={category}
                                onChange={(e) => {
                                    setCategory(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="text-sm text-slate-200 bg-slate-900 border border-slate-700 rounded-md px-3 py-1.5 outline-none focus:border-indigo-500"
                            >    
                                <option value="">
                                    All
                                </option>

                                <option value="Food">
                                    Food
                                </option>

                                <option value="Travel">
                                    Travel
                                </option>

                                <option value="Entertainment">
                                    Entertainment
                                </option>

                                <option value="Shopping">
                                    Shopping
                                </option>

                                 <option value="Other">
                                    Other
                                </option>
                            </select>
                        </div>

                        {/* Sort */}
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-slate-400">
                                Sort
                            </span>

                            <select
                                value={sort}
                                onChange={(e) => {
                                    setSort(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="text-sm text-slate-200 bg-slate-900 border border-slate-700 rounded-md px-3 py-1.5 outline-none focus:border-indigo-500"
                            >
                                <option value="newest">
                                    Newest
                                </option>

                                <option value="oldest">
                                    Oldest
                                </option>
                            </select>
                        </div>


                        {/* Limit */}
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-slate-400">
                                Show
                            </span>

                            <select
                                value={limit}
                                onChange={(e) => {
                                    setLimit(Number(e.target.value));
                                    setCurrentPage(1);
                                }}
                                className="text-sm text-slate-200 bg-slate-900 border border-slate-700 rounded-md px-3 py-1.5 outline-none focus:border-indigo-500"
                            >
                                {limits.map((value) => (
                                    <option
                                        key={value}
                                        value={value}
                                    >
                                        {value}
                                    </option>
                                ))}
                            </select>
                        </div>


                        {/* View all */}
                        <button className="text-indigo-400 hover:text-indigo-300 text-sm">
                            View All
                        </button>

                    </div>

                </div>


                {/* Expense rows */}
                {
                expenses.length === 0 ? (
                    <div className="p-8 text-center text-slate-400">
                        No expenses found
                    </div>
                ) : (
                
                expenses.map((expense) => (
                    <div
                        key={expense._id}
                        className="flex items-center justify-between p-5 border-b border-slate-700"
                    >
                        <div>
                            <h3 className="font-medium">
                                {expense.title}
                            </h3>

                            <p className="text-sm text-slate-400">
                                {expense.category}
                            </p>
                        </div>
                            <p className="text-sm text-slate-400">
                                { expense.date.split("T")[0]}
                            </p>
                        <div className="flex items-center gap-4">
                        <span className={expense.type === "expense" ?"text-red-400 font-medium" :"text-green-400 font-medium" }>
                           {expense.type === "expense" ? "- ₹" : "+  ₹" }{expense.amount}
                        </span>
                        <button
                            onClick={() => navigate(`/edit-expense/${expense._id}`)}
                            className="text-sm text-indigo-400 hover:text-indigo-300"
                        >
                            Update
                        </button>
                        <button
                                onClick={() => handleDelete(expense._id)}
                                className="text-sm text-red-400 hover:text-red-300"
                        >
                                Delete
                        </button>
                        </div>
                    </div>
                ))
            )}


                {/* Pagination */}
                <div className="flex items-center justify-between p-5">

                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-md border border-slate-700 text-slate-300 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Previous
                    </button>


                    <span className="text-sm text-slate-400">
                        Page {pagination.currentPage} of {pagination.totalPages}
                    </span>


                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === pagination.totalPages}
                        className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Next
                    </button>

                </div>

            </div>

        </div>
    </div>
);
}

export default Dashboard
