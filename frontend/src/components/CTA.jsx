import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
const CTA = () => {
  return (
   <div className=" px-6 py-8 flex flex-col items-center justify-between gap-4 mt-5 bg-slate-950 max-w-[90%] ">


         <h1 className="text-center text-2xl leading-tight md:text-4xl mt-3 font-semibold px-4">
           Ready to take control of your money?
        </h1>
          <div className='flex ml-15 max-w-[80%] flex-col '>
            <p className='text-center text-sm text-slate-200 '>SpendWise provides you services to manage your expenses smartly and track your expenses. Get started with SpendWise to keep your profit/loss track. Start managing your money smarter with SpendWise.</p>
            </div>

            <Link to="/register" className='mt-4'>
          <button className='flex items-hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black bg-white hover:bg-slate-100 transition duration-300 rounded-full px-5 py-2 cursor-pointer'>Get Started <ArrowRight size={20}/>
          </button>
          </Link>
       </div>

  )
}

export default CTA
