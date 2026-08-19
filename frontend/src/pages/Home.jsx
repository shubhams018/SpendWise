import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Card from '../components/Card'
import { Receipt, ChartNoAxesCombined, ListFilter } from 'lucide-react';
import HowItWorks from '../components/HowItWorks';
import CTA from '../components/CTA';
import Footer from '../components/Footer';


const Home = () => {


  const features = [
  {
    title: "Track Your Expenses",
    description:
      "Add and organize your daily expenses so you always know where your money is going.",
    icon: <Receipt/>
  },
  {
    title: "See Your Financial Summary",
    description:
      "See your total income, total expenses, and current balance in one simple dashboard.",
    icon: <ChartNoAxesCombined/>
  },
  {
    title: "Filter & Sort Transactions",
    description:
      "Filter expenses by category and date, sort transactions, and quickly find exactly what you need.",
    icon: <ListFilter/>
  }
];



  return (
     
   <div className="min-h-screen bg-slate-950 text-white p-2">
     <Navbar/>
      <Hero/>
       <div className="flex flex-wrap justify-center gap-8 mt-12">         
          {
           features.map((feature) => (
            <Card
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
            />
           ))
         }
        </div>
        
        <HowItWorks/>
        <CTA/>
        <Footer/>
    </div> 
  )
}

export default Home
