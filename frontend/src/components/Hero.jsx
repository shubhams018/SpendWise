import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-slate-950 text-white px-4 pt-20 pb-16 sm:pt-24 sm:pb-20">
      
      <div className="max-w-4xl mx-auto text-center">

        {/* Badge */}
        <Link
          to="/register"
          className="inline-flex items-center gap-2 rounded-full border border-green-800 bg-green-950/50 px-3 py-1.5 hover:border-green-600 transition"
        >
          <span className="bg-green-600 text-xs px-2.5 py-1 rounded-full">
            NEW
          </span>

          <span className="text-sm text-green-400 flex items-center gap-1">
            Start with SpendWise
            <ArrowRight size={15} />
          </span>
        </Link>

        {/* Heading */}
        <h1 className="mt-7 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          Take control of your{" "}
          <span className="text-slate-400">money</span>
        </h1>

        {/* Description */}
        <p className="max-w-xl mx-auto mt-5 text-sm sm:text-base leading-7 text-slate-400">
          Track your spending, understand your financial habits,
          and keep your income and expenses organized with SpendWise.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">

          <Link
            to="/register"
            className="w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-medium hover:bg-slate-200 transition">
              Get Started
              <ArrowRight size={19} />
            </button>
          </Link>

          <Link
            to="/login"
            className="w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-slate-700 text-white font-medium hover:bg-slate-900 transition">
              Login
            </button>
          </Link>

        </div>

      </div>

    </section>
  );
};

export default Hero;