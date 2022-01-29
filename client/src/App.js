import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Month from './screens/Month/Month'
import Months from './screens/Months/Months'

function App() {

  const [months, setMonths] = useState([])
  const [bills, setBills] = useState([])

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
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Months months={months}/>}/>
        <Route path='/:month' element={<Month months={months}/>}/>
      </Routes>
    </div>
  );
}

export default App;
