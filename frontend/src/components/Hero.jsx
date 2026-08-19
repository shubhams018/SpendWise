import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
const Hero = () => {

  const navigate =  useNavigate();
  return (
    
    <section className="relative flex flex-col items-center  bg-slate-950 text-white text-sm pb-8 ">

        <Link to ="/register" className="flex items-center gap-2 rounded-full bg-green-950 p-2 mt-20">
          <span className="bg-green-600 text-xs px-3 py-1 rounded-full">
            NEW
          </span>
          <div className="flex items-center text-green-600 text-md">
            <span className='flex items-center'>Start with SpendWise now <ArrowRight className='pt-0.5 ml-0.5' size={16}/>
            </span>
          </div>
        </Link>

        <h1 className="text-center text-4xl leading-tight md:text-6xl mt-3 font-semibold  px-4">
           Take control of your money
        </h1>
        <p className="text-center text-sm md:text-base/7 text-slate-200 max-w-md mt-2 px-4">
           Track your spending. Know your balance.
        </p>
        
        <div className="flex items-center gap-4 mt-8">
          <Link to="/register">
          <button className='flex items-center gap-1 justify-between text-md font-semibold border border-slate-600 hover:bg-slate-800 rounded-full px-5 py-2 cursor-pointer'>Get Started <ArrowRight size={20}/>
          </button>
          </Link>
          
          <Link to="/login">
          <button className='flex text-md font-semibold hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black bg-white hover:bg-slate-100 transition duration-300 rounded-full px-5 py-2 cursor-pointer'>Login 
          </button>
          </Link>
        </div>
      </section>
  
  )
}

export default Hero
