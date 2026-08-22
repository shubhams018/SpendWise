import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/auth.service";
import { useContext, useState } from "react";
import { authContext } from "../context/authContext";

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        identifier: "",
        password: "",
    });

    const { setAuthenticated } = useContext(authContext);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError("");

            await loginUser(formData);

            setAuthenticated(true);
            navigate("/dashboard");
        } catch (error) {
            const errors = error.response?.data?.errors;

            if (errors && errors.length > 0) {
                setError(errors[0].msg);
            } else {
                setError(
                    error.response?.data?.message || "Login failed"
                );
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">

            <div className="w-full max-w-md rounded-xl border border-slate-700 bg-slate-900 px-6 py-8 text-white">

                {/* Heading */}

                <div className="text-center">

                    <h2 className="text-2xl font-semibold">
                        Sign In
                    </h2>

                    <p className="mt-2 text-sm text-slate-400">
                        Login to your SpendWise account
                    </p>

                </div>


                {/* Form */}

                <form
                    className="mt-8"
                    onSubmit={handleSubmit}
                >

                    {/* Error */}

                    {error && (
                        <div className="mb-5 rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2">
                            <p className="text-sm text-red-400">
                                {error}
                            </p>
                        </div>
                    )}


                    {/* Username / Email */}

                    <div className="mb-5">

                        <label
                            htmlFor="identifier"
                            className="block mb-2 text-sm font-medium text-slate-300"
                        >
                            Username or Email
                        </label>

                        <input
                            type="text"
                            id="identifier"
                            name="identifier"
                            placeholder="Enter username or email"
                            value={formData.identifier}
                            onChange={handleChange}
                            className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                        />

                    </div>


                    {/* Password */}

                    <div>

                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-slate-300"
                        >
                            Password
                        </label>

                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                        />

                    </div>


                    {/* Submit */}

                    <button
                        type="submit"
                        className="w-full mt-7 rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-700"
                    >
                        Sign In
                    </button>

                </form>


                {/* Register */}

                <p className="mt-6 text-center text-sm text-slate-400">

                    Don't have an account?{" "}

                    <button
                        onClick={() => navigate("/register")}
                        className="text-indigo-400 hover:text-indigo-300"
                    >
                        Create account
                    </button>

                </p>

            </div>

        </div>
    );
};

export default Login;