import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import Dashboard from './Dashboard'
import Dashboard from './Dashboard'
import Patrols from './Patrols'
import Workers from './Workers'
import Neshek from './Neshek'

function App() {

  return (
    <>

    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/Patrols" element={<Patrols/>} />
          <Route path="/Workers" element={<Workers/>} />
          <Route path="/Neshek" element={<Neshek/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />

      </Routes>
    </BrowserRouter>

     {/* <Dashboard_1></Dashboard_1> */}

    </>
  )
}

export default App
