import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="w-[90%] max-w-5xl mx-auto mt-8 mb-8 px-5 py-12 sm:px-10 bg-slate-900 border border-slate-800 rounded-2xl text-center">

      <p className="text-sm text-indigo-400 font-medium">
        START TODAY
      </p>

      <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
        Ready to take control of your money?
      </h2>

      <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-7 text-slate-400">
        Manage your income, track your expenses, and understand your
        spending habits with SpendWise.
      </p>

      <Link
        to="/register"
        className="inline-block mt-7"
      >
        <button className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-medium hover:bg-slate-200 transition shadow-[0_0_25px_4px] shadow-white/20">
          Get Started
          <ArrowRight size={19} />
        </button>
      </Link>

    </section>
  );
};

export default CTA;