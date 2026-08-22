import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 px-4 py-12 sm:px-6 lg:px-8">

      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">

            <Link to="/">
              <img
                src={logo}
                alt="SpendWise"
                className="h-14"
              />
            </Link>

            <p className="max-w-sm mt-5 text-sm leading-6 text-slate-400">
              Manage your money, track your expenses, and build better
              financial habits with SpendWise.
            </p>

          </div>


          {/* Important Links */}
          <div>

            <h3 className="text-sm font-semibold text-white">
              Important Links
            </h3>

            <div className="flex flex-col gap-3 mt-5">

              <Link
                to="/"
                className="text-sm text-slate-400 hover:text-white transition"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-sm text-slate-400 hover:text-white transition"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="text-sm text-slate-400 hover:text-white transition"
              >
                Contact
              </Link>

            </div>

          </div>


          {/* Get Started */}
          <div>

            <h3 className="text-sm font-semibold text-white">
              Get Started
            </h3>

            <div className="flex flex-col gap-3 mt-5">

              <Link
                to="/login"
                className="text-sm text-slate-400 hover:text-white transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="text-sm text-slate-400 hover:text-white transition"
              >
                Register
              </Link>

            </div>

          </div>

        </div>


        {/* Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-xs text-slate-500">
            © 2026 SpendWise. All rights reserved.
          </p>

          <div className="flex items-center gap-4">

            <Link
              to="/terms"
              className="text-xs text-slate-500 hover:text-white transition"
            >
              Terms & Conditions
            </Link>

            <span className="text-slate-700">|</span>

            <Link
              to="/privacy"
              className="text-xs text-slate-500 hover:text-white transition"
            >
              Privacy Policy
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;