import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import AddExpense from './pages/AddExpense'
import EditExpense from './pages/EditExpense'
import Home from './pages/Home'
import Register from './pages/Register'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/add-expense" element={<AddExpense/>} />
        <Route path="/edit-expense/:id" element={<EditExpense/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

