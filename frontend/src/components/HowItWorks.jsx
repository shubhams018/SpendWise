const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Add your transactions",
      description:
        "Add your income and expenses with details like amount, category, type, and date.",
    },
    {
      number: "02",
      title: "Track your money",
      description:
        "SpendWise calculates your income, expenses, and balance and displays them clearly on your dashboard.",
    },
    {
      number: "03",
      title: "Understand your spending",
      description:
        "Filter transactions by category and date, sort them, and manage individual expenses easily.",
    },
  ];

  return (
    <section className="w-[90%] max-w-6xl mx-auto mt-8 px-5 py-10 sm:px-8 bg-slate-900 border border-slate-800 rounded-2xl">

      <div className="text-center max-w-2xl mx-auto">

        <p className="text-sm text-indigo-400 font-medium">
          HOW IT WORKS
        </p>

        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold">
          Why SpendWise?
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-400">
          Everything you need to keep track of your money in one simple place.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">

        {steps.map((step) => (
          <div
            key={step.number}
            className="p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-600 transition"
          >

            <span className="text-sm text-indigo-400 font-semibold">
              {step.number}
            </span>

            <h3 className="text-lg font-semibold mt-4">
              {step.title}
            </h3>

            <p className="text-sm leading-6 text-slate-400 mt-3">
              {step.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default HowItWorks;