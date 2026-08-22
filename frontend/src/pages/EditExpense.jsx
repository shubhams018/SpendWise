import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    getExpense,
    updateExpenses
} from "../services/expense.service";

const EditExpense = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        title: "",
        amount: "",
        category: "",
        type: "",
        date: ""
    });

    const getData = async () => {

        try {
            setError("");

            const response = await getExpense(id);
            const expense = response.data.expense;

            setFormData({
                title: expense.title,
                amount: expense.amount,
                category: expense.category,
                type: expense.type,
                date: expense.date.split("T")[0]
            });

        } catch (error) {

            const errors = error.response?.data?.errors;

            if (errors && errors.length > 0) {
                setError(errors[0].msg);
            } else {
                setError(
                    error.response?.data?.error ||
                    "Failed to fetch expense"
                );
            }

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            setError("");
            setUpdating(true);

            await updateExpenses(id, formData);

            navigate("/dashboard");

        } catch (error) {

            const errors = error.response?.data?.errors;

            if (errors && errors.length > 0) {
                setError(errors[0].msg);
            } else {
                setError(
                    error.response?.data?.error ||
                    "Failed to update expense"
                );
            }

        } finally {
            setUpdating(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-400">
                Loading expense...
            </div>
        );
    }

    if (error && !formData.title) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950">
                <div className="text-center">
                    <p className="text-red-400">
                        {error}
                    </p>

                    <button
                        onClick={getData}
                        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 py-8">

            <div className="w-full max-w-md rounded-xl px-6 py-6 border border-slate-700 bg-slate-900 text-white text-sm">

                <h2 className="text-2xl text-center font-semibold">
                    Update Expense
                </h2>

                {error && (
                    <p className="mt-4 text-sm text-red-400 text-center">
                        {error}
                    </p>
                )}

                <form
                    className="mt-8"
                    onSubmit={handleSubmit}
                >

                    {/* Title */}
                    <label
                        htmlFor="title"
                        className="block mb-1 font-medium text-slate-300"
                    >
                        Title
                    </label>

                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full p-2 mb-4 bg-slate-900 border border-slate-700 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />

                    {/* Amount */}
                    <label
                        htmlFor="amount"
                        className="block mb-1 font-medium text-slate-300"
                    >
                        Amount
                    </label>

                    <input
                        type="number"
                        min="1"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        className="w-full p-2 mb-4 bg-slate-900 border border-slate-700 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />

                    {/* Category */}
                    <label
                        htmlFor="category"
                        className="block mb-1 font-medium text-slate-300"
                    >
                        Category
                    </label>

                    <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full p-2 mb-4 cursor-pointer bg-slate-900 border border-slate-700 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    >
                        <option value="">Select category</option>
                        <option value="Food">Food</option>
                        <option value="Travel">Travel</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Other">Other</option>
                    </select>

                    {/* Type */}
                    <label
                        htmlFor="type"
                        className="block mb-1 font-medium text-slate-300"
                    >
                        Type
                    </label>

                    <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full p-2 mb-4 bg-slate-900 border border-slate-700 rounded-md focus:outline-none focus:ring-1 cursor-pointer focus:ring-indigo-500"
                    >
                        <option value="">Select type</option>
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>

                    {/* Date */}
                    <label
                        htmlFor="date"
                        className="block mb-1 font-medium text-slate-300"
                    >
                        Date
                    </label>

                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full p-2 mb-4 bg-slate-900 border border-slate-700 rounded-md focus:outline-none cursor-pointer focus:ring-1 focus:ring-indigo-500"
                    />

                    <button
                        type="submit"
                        disabled={updating}
                        className="w-full rounded-md bg-indigo-600 py-2.5 font-medium transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50">
                        {updating ? "Updating..." : "Update"}
                    </button>

                </form>
            </div>
        </div>
    );
};

export default EditExpense;