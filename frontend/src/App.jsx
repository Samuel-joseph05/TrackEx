
import './index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'

function NotFoundPage() {
  return <h1>404 - Page Not Found</h1>
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExpenseForm />} />
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