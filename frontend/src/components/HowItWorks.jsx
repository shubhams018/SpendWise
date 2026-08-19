import React from 'react'

const HowItWorks = () => {

  return (

    <div className=" px-3 py-5 mx-auto mt-5 bg-slate-900 border border-gray-200 rounded-lg shadow shadow-black/10 max-w-[90%] ">

         <h1 className="text-center text-2xl leading-tight md:text-4xl mt-3 font-bold  px-4">
           Why SpendWise ?
        </h1>
        <div className='flex flex-col gap-2'>
        
        <div className='flex flex-col items-start gap-2'>
            <h2 className='text-center text-xl leading-tight md:text-2xl mt-3 font-semibold  px-4'>1. Add your transactions</h2>
             <p className="px-4 text-white text-sm font-light flex items-center gap-2">Users add their income and expenses with details like amount, category, type, and date.</p>
        </div>

        <div className='flex flex-col items-start gap-2'>
            <h2 className='text-center text-xl leading-tight md:text-2xl mt-3 font-semibold  px-4'>2. Track your money</h2>
             <p className="px-4 text-white text-sm font-light flex items-center gap-2">SpendWise calculates income, expenses, and balance and displays them on the dashboard.</p>
        </div>

        <div className='flex flex-col items-start gap-2'>
            <h2 className='text-center text-xl leading-tight md:text-2xl mt-3 font-semibold  px-4'>3. Understand your spending</h2>
             <p className="px-4 text-white text-sm font-light flex items-center gap-2">Users can filter by category/date, sort transactions, and manage individual expenses.</p>
        </div>
        </div>
    </div>

 
  

  )
}

export default HowItWorks
