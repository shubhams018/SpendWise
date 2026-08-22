import { ArrowRight, CheckCircle2, Code2, Target, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white px-4 py-10 sm:px-6">

            <div className="max-w-5xl mx-auto">

                {/* Hero */}
                <section className="text-center mb-12">

                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full border border-slate-700 bg-slate-900 text-sm text-slate-300">
                        <Wallet size={16} className="text-indigo-400" />
                        About SpendWise
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                        Take control of your
                        <span className="text-indigo-400"> money.</span>
                    </h1>

                    <p className="max-w-2xl mx-auto mt-5 text-slate-400 text-sm sm:text-base leading-7">
                        SpendWise is a simple expense management application
                        designed to help users track their income, expenses,
                        and overall financial balance in one place.
                    </p>

                </section>


                {/* Why SpendWise */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">

                    <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">

                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-500/10 mb-4">
                            <Target className="text-indigo-400" size={22} />
                        </div>

                        <h2 className="text-xl font-semibold mb-3">
                            Why I built SpendWise
                        </h2>

                        <p className="text-sm text-slate-400 leading-6">
                            Managing daily transactions can become difficult
                            when everything is tracked manually. SpendWise
                            provides a simple way to record transactions,
                            organize expenses, and understand your financial
                            balance.
                        </p>

                    </div>


                    <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">

                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-500/10 mb-4">
                            <Code2 className="text-indigo-400" size={22} />
                        </div>

                        <h2 className="text-xl font-semibold mb-3">
                            Built as a full-stack project
                        </h2>

                        <p className="text-sm text-slate-400 leading-6">
                            SpendWise was built to practice and demonstrate
                            full-stack web development, from building the
                            React interface to creating REST APIs,
                            authentication, database operations, and
                            validation.
                        </p>

                    </div>

                </section>


                {/* What I implemented */}
                <section className="rounded-xl border border-slate-700 bg-slate-900 p-6 sm:p-8 mb-10">

                    <h2 className="text-2xl font-semibold mb-6">
                        What SpendWise includes
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        <div className="flex items-start gap-3">
                            <CheckCircle2
                                size={20}
                                className="text-indigo-400 mt-0.5 shrink-0"
                            />
                            <span className="text-sm text-slate-300">
                                User registration and login
                            </span>
                        </div>

                        <div className="flex items-start gap-3">
                            <CheckCircle2
                                size={20}
                                className="text-indigo-400 mt-0.5 shrink-0"
                            />
                            <span className="text-sm text-slate-300">
                                JWT based authentication
                            </span>
                        </div>

                        <div className="flex items-start gap-3">
                            <CheckCircle2
                                size={20}
                                className="text-indigo-400 mt-0.5 shrink-0"
                            />
                            <span className="text-sm text-slate-300">
                                Add and update transactions
                            </span>
                        </div>

                        <div className="flex items-start gap-3">
                            <CheckCircle2
                                size={20}
                                className="text-indigo-400 mt-0.5 shrink-0"
                            />
                            <span className="text-sm text-slate-300">
                                Delete expenses
                            </span>
                        </div>

                        <div className="flex items-start gap-3">
                            <CheckCircle2
                                size={20}
                                className="text-indigo-400 mt-0.5 shrink-0"
                            />
                            <span className="text-sm text-slate-300">
                                Expense filtering and sorting
                            </span>
                        </div>

                        <div className="flex items-start gap-3">
                            <CheckCircle2
                                size={20}
                                className="text-indigo-400 mt-0.5 shrink-0"
                            />
                            <span className="text-sm text-slate-300">
                                Pagination for transactions
                            </span>
                        </div>

                        <div className="flex items-start gap-3">
                            <CheckCircle2
                                size={20}
                                className="text-indigo-400 mt-0.5 shrink-0"
                            />
                            <span className="text-sm text-slate-300">
                                Income, expense and balance summary
                            </span>
                        </div>

                        <div className="flex items-start gap-3">
                            <CheckCircle2
                                size={20}
                                className="text-indigo-400 mt-0.5 shrink-0"
                            />
                            <span className="text-sm text-slate-300">
                                Responsive design
                            </span>
                        </div>

                    </div>

                </section>


                {/* Tech Stack */}
                <section className="text-center mb-10">

                    <h2 className="text-2xl font-semibold mb-5">
                        Built with
                    </h2>

                    <div className="flex flex-wrap justify-center gap-3">

                        {[
                            "React",
                            "Tailwind CSS",
                            "Node.js",
                            "Express.js",
                            "MongoDB",
                            "Mongoose",
                            "JWT"
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 rounded-full border border-slate-700 bg-slate-900 text-sm text-slate-300"
                            >
                                {tech}
                            </span>
                        ))}

                    </div>

                </section>


                {/* CTA */}
                <section className="rounded-xl border border-slate-700 bg-slate-900 p-7 sm:p-10 text-center">

                    <h2 className="text-2xl sm:text-3xl font-semibold">
                        Ready to manage your expenses?
                    </h2>

                    <p className="text-sm text-slate-400 mt-3 max-w-lg mx-auto">
                        Start tracking your income and expenses with SpendWise.
                    </p>

                    <Link
                        to="/register"
                        className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-white text-black font-medium hover:bg-slate-100 transition"
                    >
                        Get Started
                        <ArrowRight size={18} />
                    </Link>

                </section>

            </div>

        </div>
    );
};

export default About;