import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './login'
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import ViewAttendance from './components/ViewAttendance'
import MarkAttendance from './components/MarkAttendance'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/viewattendance' element={<ViewAttendance />}></Route>
        <Route path='/markattendance' element={<MarkAttendance />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
