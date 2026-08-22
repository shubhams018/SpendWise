import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/Logo.png";
import { logoutUser } from "../services/auth.service";
import { authContext } from "../context/authContext";

const Navbar = () => {
    const { authenticated, setAuthenticated } = useContext(authContext);
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = async () => {
        try {
            await logoutUser();

            setAuthenticated(false);
            setMenuOpen(false);

            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur">

            <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-800">

                {/* Logo */}
                <Link to="/" onClick={() => setMenuOpen(false)}>
                    <img
                        src={logo}
                        alt="SpendWise"
                        className="h-12 sm:h-14"
                    />
                </Link>


                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">

                    <Link
                        to="/"
                        className="text-sm text-slate-300 hover:text-white transition"
                    >
                        Home
                    </Link>

                    <Link
                        to="/about"
                        className="text-sm text-slate-300 hover:text-white transition"
                    >
                        About
                    </Link>

                    <Link
                        to="/contact"
                        className="text-sm text-slate-300 hover:text-white transition"
                    >
                        Contact
                    </Link>

                </div>


                {/* Desktop Authentication */}
                <div className="hidden md:flex items-center gap-3">

                    {authenticated ? (

                        <div className="relative">

                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="flex items-center justify-center w-9 h-9 rounded-full border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition cursor-pointer"
                            >
                                <Menu size={19} />
                            </button>


                            {menuOpen && (
                                <div className="absolute right-0 mt-3 w-48 rounded-xl bg-slate-900 border border-slate-700 p-2 shadow-xl">

                                    <Link
                                        to="/dashboard"
                                        onClick={() => setMenuOpen(false)}
                                        className="block px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition"
                                    >
                                        Dashboard
                                    </Link>

                                    <Link
                                        to="/add-expense"
                                        onClick={() => setMenuOpen(false)}
                                        className="block px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition"
                                    >
                                        Add Expense
                                    </Link>

                                    <button
                                        onClick={handleLogout}
                                        className="block w-full text-left px-3 py-2 rounded-md text-sm text-red-400 hover:bg-slate-800 transition cursor-pointer"
                                    >
                                        Logout
                                    </button>

                                </div>
                            )}

                        </div>

                    ) : (

                        <>
                            <button
                                onClick={() => navigate("/login")}
                                className="px-4 py-2 rounded-full border border-slate-700 text-sm font-medium text-slate-300 hover:bg-slate-900 hover:text-white transition cursor-pointer"
                            >
                                Login
                            </button>

                            <button
                                onClick={() => navigate("/register")}
                                className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-slate-200 transition cursor-pointer"
                            >
                                Register
                            </button>
                        </>

                    )}

                </div>


                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex items-center justify-center w-9 h-9 rounded-md border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition cursor-pointer"
                >
                    {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

            </nav>


            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden border-b border-slate-800 bg-slate-950 px-4 py-4">

                    <div className="max-w-7xl mx-auto flex flex-col gap-1">

                        <Link
                            to="/"
                            onClick={() => setMenuOpen(false)}
                            className="px-3 py-2.5 rounded-md text-sm text-slate-300 hover:bg-slate-900 hover:text-white transition"
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            onClick={() => setMenuOpen(false)}
                            className="px-3 py-2.5 rounded-md text-sm text-slate-300 hover:bg-slate-900 hover:text-white transition"
                        >
                            About
                        </Link>

                        <Link
                            to="/contact"
                            onClick={() => setMenuOpen(false)}
                            className="px-3 py-2.5 rounded-md text-sm text-slate-300 hover:bg-slate-900 hover:text-white transition"
                        >
                            Contact
                        </Link>


                        <div className="border-t border-slate-800 my-2" />


                        {authenticated ? (

                            <>
                                <Link
                                    to="/dashboard"
                                    onClick={() => setMenuOpen(false)}
                                    className="px-3 py-2.5 rounded-md text-sm text-slate-300 hover:bg-slate-900 hover:text-white transition"
                                >
                                    Dashboard
                                </Link>

                                <Link
                                    to="/add-expense"
                                    onClick={() => setMenuOpen(false)}
                                    className="px-3 py-2.5 rounded-md text-sm text-slate-300 hover:bg-slate-900 hover:text-white transition"
                                >
                                    Add Expense
                                </Link>

                                <button
                                    onClick={handleLogout}
                                    className="px-3 py-2.5 rounded-md text-left text-sm text-red-400 hover:bg-slate-900 transition cursor-pointer"
                                >
                                    Logout
                                </button>
                            </>

                        ) : (

                            <div className="flex flex-col gap-2">

                                <button
                                    onClick={() => {
                                        setMenuOpen(false);
                                        navigate("/login");
                                    }}
                                    className="px-3 py-2.5 rounded-md text-left text-sm text-slate-300 hover:bg-slate-900 hover:text-white transition cursor-pointer"
                                >
                                    Login
                                </button>

                                <button
                                    onClick={() => {
                                        setMenuOpen(false);
                                        navigate("/register");
                                    }}
                                    className="px-3 py-2.5 rounded-md text-left text-sm text-indigo-400 hover:bg-slate-900 transition cursor-pointer"
                                >
                                    Register
                                </button>

                            </div>

                        )}

                    </div>

                </div>
            )}

        </header>
    );
};

export default Navbar;