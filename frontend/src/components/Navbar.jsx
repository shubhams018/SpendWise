import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/Logo.png'


const Navbar = () => {


    const navigate = useNavigate();
  
  
    return (
    <div className="sticky top-0 z-50 bg-slate-950">
      <nav className="flex justify-between border max-md:w-full max-md:justify-between border-slate-700 px-6 py-4 rounded-full text-white text-sm">
   
        <img src={logo} alt="logo" className='h-16'/>
    <div className="flex justify-start"> 
    <div className="hidden md:flex items-center gap-6 ml-7">
        <Link to="/home" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">Home</span>
            <span
                className="block absolute top-full left-0 group-hover:translate-y-full transition-transform duration-300">Home</span>
       </Link>
        <Link to="/about" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">About</span>
            <span
                className="block absolute top-full left-0 group-hover:translate-y-full transition-transform duration-300">About</span>
       </Link>
        <Link to="/contact" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">Contact</span>
            <span
                className="block absolute top-full left-0 group-hover:translate-y-full transition-transform duration-300">Contact</span>
       </Link>
    </div>

    <div className="hidden ml-14 md:flex items-center gap-4">
        <button onClick={()=> {navigate("/login")}}
            className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
            Login
        </button>
        <button onClick={()=> {navigate("/register")}}
            className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
            Register
        </button>
    </div>
    </div>   
    <button id="menuToggle" className="md:hidden text-gray-600">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </button>
    <div id="mobileMenu" className="absolute hidden top-48 text-base left-0 bg-black w-full flex-col items-center gap-4">
        <Link className="hover:text-indigo-600" href="#">
            Home
       </Link>
        <Link className="hover:text-indigo-600" href="#">
            About
       </Link>
        <Link className="hover:text-indigo-600" href="#">
            Contact
       </Link>
        <button onClick={()=> {navigate("/login")}}
            className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
            Login
        </button>
        <button onClick={()=> {navigate("/register")}}
            className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
            Register
        </button>
    </div>
</nav>
    </div>
  )
}

export default Navbar
