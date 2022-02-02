import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Month from './screens/Month/Month'
import Months from './screens/Months/Months'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [months, setMonths] = useState([])
  const [bills, setBills] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const getMonthsData = async () => {
      const url = 'http://127.0.0.1:8000/month/'
      const res = await axios.get(url)
      setMonths(res.data)
    }
    getMonthsData()

    const getBillsData = async () => {
      const url = 'http://127.0.0.1:8000/bill/'
      const res = await axios.get(url)
      setBills(res.data)
    }
    getBillsData()
  },[toggle])
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Months months={months}/>}/>
        <Route path='/:id' element={<Month months={months} bills={bills} setToggle={setToggle}/>}/>
      </Routes>
    </div>
  );
}

export default App;
