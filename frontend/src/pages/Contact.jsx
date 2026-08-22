
const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white px-4 py-12 sm:px-6">

            <div className="max-w-5xl mx-auto">

                {/* Header */}

                <div className="max-w-2xl mx-auto text-center">

                    <h1 className="text-3xl sm:text-4xl font-semibold">
                        Get in touch
                    </h1>

                    <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
                        Have a question or feedback about SpendWise?
                        Send us a message and we'll get back to you.
                    </p>

                </div>


                {/* Contact Content */}

                <div className="grid md:grid-cols-2 gap-6 mt-10">


                    {/* Contact Information */}

                    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 sm:p-8">

                        <h2 className="text-xl font-semibold">
                            Contact information
                        </h2>

                        <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                            We'd love to hear your questions, suggestions,
                            or feedback about SpendWise.
                        </p>


                        <div className="mt-8 space-y-6">

                            <div>
                                <p className="text-sm font-medium text-slate-300">
                                    Email
                                </p>

                                <p className="mt-1 text-sm text-slate-400">
                                    shedages747@gmail.com
                                </p>
                            </div>


                            <div>
                                <p className="text-sm font-medium text-slate-300">
                                    Location
                                </p>

                                <p className="mt-1 text-sm text-slate-400">
                                    Maharashtra, India
                                </p>
                            </div>


                            <div>
                                <p className="text-sm font-medium text-slate-300">
                                    GitHub
                                </p>

                                <a
                                    href="https://github.com/shubhams018"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-1 block text-sm text-slate-400 hover:text-white transition"
                                >
                                    github.com
                                </a>
                            </div>


                            <div>
                                <p className="text-sm font-medium text-slate-300">
                                    LinkedIn
                                </p>

                                <a
                                    href="https://www.linkedin.com/in/shubham-shedage-7b8b22265/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-1 block text-sm text-slate-400 hover:text-white transition"
                                >
                                    linkedin.com
                                </a>
                            </div>

                        </div>

                    </div>


                    {/* Contact Form */}

                    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 sm:p-8">

                        <h2 className="text-xl font-semibold">
                            Send us a message
                        </h2>


                        <form
                            onSubmit={handleSubmit}
                            className="mt-6 space-y-5"
                        >

                            <div>

                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-slate-300"
                                >
                                    Name
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your name"
                                    className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                />

                            </div>


                            <div>

                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-slate-300"
                                >
                                    Email
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your email"
                                    className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                />

                            </div>


                            <div>

                                <label
                                    htmlFor="message"
                                    className="block mb-2 text-sm font-medium text-slate-300"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Write your message..."
                                    className="w-full resize-none rounded-md border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                />

                            </div>


                            <button
                                type="submit"
                                className="w-full rounded-md bg-indigo-600 py-2.5 font-medium transition hover:bg-indigo-700"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Contact;