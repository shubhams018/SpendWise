import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'

const Footer = () => {
  return (
    <div>
      <footer className='bg-slate-950 py-12 px-4 sm:px-6 lg:px-8'>
                <div className='w-full max-w-7xl mx-auto'>
            
                    <div className="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">
            
                        <div className="w-full md:w-[45%] lg:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
                            <Link to="/">
                                <img src={logo} alt="logo" 
                                className='h-16'
                                />
                            </Link>
                            <div className='w-full max-w-52 h-px mt-8 bg-linear-to-r from-black via-white/25 to-black'></div>
                            <p className='text-sm text-white/60 mt-6 max-w-sm leading-relaxed'>
                               Manage your money. Build better habits.
                            </p>
                        </div>
            
                        <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
                            <h3 className='text-sm text-white font-medium'>Important Links</h3>
                            <div className="flex flex-col gap-2 mt-6">
                                <Link to ="/" className='text-sm text-white/60 hover:text-white transition-colors'>Home</Link>

                                <Link to ="/about" className='text-sm text-white/60 hover:text-white transition-colors'>About</Link>

                                <Link to ="/contact" className='text-sm text-white/60 hover:text-white transition-colors'>Contact</Link>

                            </div>
                        </div>
            
                        <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
                            <h3 className='text-sm text-white font-medium'>Get Started</h3>
                            <div className="flex flex-col gap-2 mt-6">
                                <Link to= "/login" className='text-sm text-white/60 hover:text-white transition-colors'>Login</Link>

                                <Link to="/register" className='text-sm text-white/60 hover:text-white transition-colors'>Register</Link>


                            </div>
                        </div>
            
                    </div>
            
                    <div className='w-full h-px mt-16 mb-4 bg-linear-to-r from-black via-white/25 to-black'></div>
            
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className='text-xs text-white/60'>© 2026 SpendWise</p>
                        <div className="flex items-center gap-6">
                            <Link to='' className='text-xs text-white/60 hover:text-white transition-colors'>Terms & Conditions</Link>
                            <div className='w-px h-4 bg-white/20'></div>
                            <Link to='#' className='text-xs text-white/60 hover:text-white transition-colors'>Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </footer>
    </div>
  )
}

export default Footer
