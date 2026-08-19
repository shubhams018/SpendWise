import React from 'react'

 const Card = ({ title, description, icon }) => {
  



  return (
        <div className="p-4 bg-slate-900 border mb-10 border-gray-200 hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10 max-w-90">
            <p className="text-white text-xl font-semibold ml-2 mt-4 flex items-center gap-2">
                <span className=''>{icon}</span> {title}
            </p>
            <p className="text-zinc-400 text-sm/6 mt-2 ml-2 mb-2">
               {description}
            </p>
        </div>
  )
}

export default Card
