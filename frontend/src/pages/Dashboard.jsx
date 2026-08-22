import { useEffect, useState } from "react";
import {
    getSummary,
    getExpenses,
    deleteExpenses
} from "../services/expense.service";
import { useNavigate } from "react-router-dom";

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
    const [error, setError] = useState("");
    const limits = [5, 10, 15, 20];
    const [loading, setLoading] = useState(true);
    const [deleteError, setDeleteError] = useState("");
    const [deletingId, setDeletingId] = useState(null);
    
    
    
    async function fetchDashboardData() {

        try{
       
            const summaryResponse = await getSummary();
        setSummary(summaryResponse.data);


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
    catch(error){
        const errors = error.response?.data?.errors;

        if (errors && errors.length > 0) {
            setError(errors[0].msg)
        
        } else{
            setError(error.response?.data?.error || "Failed to fetch data");
        }
    } finally {
        setLoading(false);
    }
    }


    useEffect(() => {

        fetchDashboardData();

    }, [currentPage, limit, sort, category, from, to]);


    const handleDelete = async (id) => {
        try {
            setDeleteError("");
            setDeletingId(id);

            await deleteExpenses(id);
            await fetchDashboardData();

        } catch (error) {
            const errors = error.response?.data?.errors;

            if (errors && errors.length > 0) {
                setDeleteError(errors[0].msg);
            } else {
                setDeleteError(
                    error.response?.data?.error || "Failed to delete expense"
                );
            }
        } finally {
            setDeletingId(null);
        }
    };



    return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-8 sm:px-6">

        {loading ? (

            <div className="min-h-[70vh] flex items-center justify-center">
                <p className="text-slate-400">
                    Dashboard is loading...
                </p>
            </div>

        ) : error ? (

            <div className="min-h-[70vh] flex items-center justify-center">
                <div className="text-center">

                    <p className="text-red-400">
                        {error}
                    </p>

                    <button
                        onClick={fetchDashboardData}
                        className="mt-4 rounded-md bg-indigo-600 px-4 py-2 text-sm hover:bg-indigo-700"
                    >
                        Try Again
                    </button>

                </div>
            </div>

        ) : (

            <div className="mx-auto max-w-6xl">

                {/* Header */}

                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                        <h1 className="text-3xl font-semibold">
                            Dashboard
                        </h1>

                        <p className="mt-1 text-sm text-slate-400">
                            Here's your expense overview
                        </p>
                    </div>

                    <button
                        onClick={() => navigate("/add-expense")}
                        className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-medium transition hover:bg-indigo-700"
                    >
                        + Add Expense
                    </button>

                </div>


                {/* Summary */}

                <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                        <p className="text-sm text-slate-400">
                            Total Income
                        </p>

                        <p className="mt-2 text-2xl font-semibold text-green-400">
                            ₹ {summary.summary?.totalIncome ?? 0}
                        </p>
                    </div>


                    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                        <p className="text-sm text-slate-400">
                            Total Expense
                        </p>

                        <p className="mt-2 text-2xl font-semibold text-red-400">
                            ₹ {summary.summary?.totalExpense ?? 0}
                        </p>
                    </div>


                    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 sm:col-span-2 lg:col-span-1">
                        <p className="text-sm text-slate-400">
                            Balance
                        </p>

                        <p
                            className={`mt-2 text-2xl font-semibold ${
                                summary.summary?.balance >= 0
                                    ? "text-green-400"
                                    : "text-red-400"
                            }`}
                        >
                            ₹ {summary.summary?.balance ?? 0}
                        </p>
                    </div>

                </div>


                {/* Transactions */}

                <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">

                    <div className="border-b border-slate-800 p-5">

                        <div className="mb-5">
                            <h2 className="text-xl font-semibold">
                                Recent Transactions
                            </h2>

                            <p className="mt-1 text-sm text-slate-400">
                                Manage and filter your transactions
                            </p>
                        </div>


                        {/* Filters */}

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

                            <div>
                                <label className="mb-1.5 block text-xs text-slate-400">
                                    From
                                </label>

                                <input
                                    type="date"
                                    value={from}
                                    onChange={(e) => {
                                        setFrom(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                    className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-indigo-500"
                                />
                            </div>


                            <div>
                                <label className="mb-1.5 block text-xs text-slate-400">
                                    To
                                </label>

                                <input
                                    type="date"
                                    value={to}
                                    onChange={(e) => {
                                        setTo(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                    className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-indigo-500"
                                />
                            </div>


                            <div>
                                <label className="mb-1.5 block text-xs text-slate-400">
                                    Category
                                </label>

                                <select
                                    value={category}
                                    onChange={(e) => {
                                        setCategory(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                    className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-indigo-500"
                                >
                                    <option value="">All</option>
                                    <option value="Food">Food</option>
                                    <option value="Travel">Travel</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Shopping">Shopping</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>


                            <div>
                                <label className="mb-1.5 block text-xs text-slate-400">
                                    Sort
                                </label>

                                <select
                                    value={sort}
                                    onChange={(e) => {
                                        setSort(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                    className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-indigo-500"
                                >
                                    <option value="newest">Newest</option>
                                    <option value="oldest">Oldest</option>
                                </select>
                            </div>


                            <div>
                                <label className="mb-1.5 block text-xs text-slate-400">
                                    Show
                                </label>

                                <select
                                    value={limit}
                                    onChange={(e) => {
                                        setLimit(Number(e.target.value));
                                        setCurrentPage(1);
                                    }}
                                    className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-indigo-500"
                                >
                                    {limits.map((value) => (
                                        <option key={value} value={value}>
                                            {value}
                                        </option>
                                    ))}
                                </select>
                            </div>

                        </div>

                    </div>


                    {/* Delete Error */}

                    {deleteError && (
                        <div className="border-b border-red-500/20 bg-red-500/5 px-5 py-3 text-sm text-red-400">
                            {deleteError}
                        </div>
                    )}


                    {/* Transactions */}

                    {expenses.length === 0 ? (

                        <div className="p-10 text-center">
                            <p className="text-slate-400">
                                No transactions found
                            </p>

                            <button
                                onClick={() => navigate("/add-expense")}
                                className="mt-4 text-sm text-indigo-400 hover:text-indigo-300"
                            >
                                Add your first transaction
                            </button>
                        </div>

                    ) : (

                        <div>

                            {expenses.map((expense) => (

                                <div
                                    key={expense._id}
                                    className="border-b border-slate-800 p-5 last:border-b-0"
                                >

                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                                        <div className="min-w-0">
                                            <h3 className="truncate font-medium">
                                                {expense.title}
                                            </h3>

                                            <div className="mt-1 flex flex-wrap gap-3 text-sm text-slate-400">
                                                <span>{expense.category}</span>
                                                <span>
                                                    {expense.date.split("T")[0]}
                                                </span>
                                            </div>
                                        </div>


                                        <div className="flex flex-wrap items-center gap-4">

                                            <span
                                                className={`font-medium ${
                                                    expense.type === "expense"
                                                        ? "text-red-400"
                                                        : "text-green-400"
                                                }`}
                                            >
                                                {expense.type === "expense"
                                                    ? "- ₹"
                                                    : "+ ₹"}
                                                {expense.amount}
                                            </span>

                                            <button
                                                onClick={() =>
                                                    navigate(
                                                        `/edit-expense/${expense._id}`
                                                    )
                                                }
                                                className="text-sm text-indigo-400 hover:text-indigo-300"
                                            >
                                                Edit
                                            </button>

                                            <button
                                                onClick={() =>
                                                    handleDelete(expense._id)
                                                }
                                                disabled={
                                                    deletingId === expense._id
                                                }
                                                className="text-sm text-red-400 hover:text-red-300 disabled:opacity-50"
                                            >
                                                {deletingId === expense._id
                                                    ? "Deleting..."
                                                    : "Delete"}
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    )}


                    {/* Pagination */}

                    <div className="flex flex-col gap-4 border-t border-slate-800 p-5 sm:flex-row sm:items-center sm:justify-between">

                        <button
                            onClick={() =>
                                setCurrentPage(currentPage - 1)
                            }
                            disabled={currentPage === 1}
                            className="rounded-md border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            Previous
                        </button>

                        <span className="text-sm text-slate-400">
                            Page {pagination.currentPage || 1} of{" "}
                            {pagination.totalPages || 1}
                        </span>

                        <button
                            onClick={() =>
                                setCurrentPage(currentPage + 1)
                            }
                            disabled={
                                currentPage === pagination.totalPages ||
                                !pagination.totalPages
                            }
                            className="rounded-md bg-indigo-600 px-4 py-2 text-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            Next
                        </button>

                    </div>

                </div>

            </div>
        )}

    </div>
);
};

export default Dashboard;