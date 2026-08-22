const Card = ({ title, description, icon }) => {
  return (
    <div className="group p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-600 hover:-translate-y-1 transition-all duration-300">

      <div className="flex items-center gap-3">

        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 text-indigo-400">
          {icon}
        </div>

        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

      </div>

      <p className="text-sm leading-6 text-slate-400 mt-4">
        {description}
      </p>

    </div>
  );
};

export default Card;