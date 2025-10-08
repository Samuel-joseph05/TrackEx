
import './index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import Home from './pages/Home'

function NotFoundPage() {
  return(
  <div>
    <h1 className='text-center mx-10 my-6 font-bold
      p-10  '>404 - Page Not Found😓</h1>  
     <a href="/" className="flex justify-center text-blue-600 hover:cursor-pointer hover:underline">Go Home</a>
     </div>
     );

} 

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/expenseform" element={<ExpenseForm />} />
        <Route path="/expenselist" element={<ExpenseList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App;