import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './api_conf'
// import Dashboard from './Dashboard'
import Dashboard from './Dashboard'
import Patrols from './Patrols'
import Workers from './Workers'
import Neshek from './Neshek'
import Munitions from './Munitions'
import Settings from './Settings'
import Supervision from './Supervision'
import Shifts from './Shifts'
import Site_page from './Site_page'
import Equipment from './Equipment'
import Login from './Login'
import Login_1 from './Login_1'
import Calendar_events from './Calendar_events'
import Forms from './Forms'
import Forms_create from './Forms_create'
import Forms_create_doc from './Forms_create_doc'


function App() {

  return (
    <>

    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Patrols" element={<Patrols/>} />
          <Route path="/Workers" element={<Workers/>} />
          <Route path="/Neshek" element={<Neshek/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/Munitions" element={<Munitions/>} />

          <Route path="/Settings" element={<Settings/>} />

          <Route path="/Supervision" element={<Supervision/>} />
          <Route path="/Shifts" element={<Shifts/>} />
          <Route path="/Site_page" element={<Site_page/>} />
          <Route path="/Equipment" element={<Equipment/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Login_1" element={<Login_1/>} />

          <Route path="/Calendar_events" element={<Calendar_events/>} />
          <Route path="/Forms" element={<Forms/>} />
          <Route path="/Forms_create" element={<Forms_create/>} />
          <Route path="/Forms_create_doc" element={<Forms_create_doc/>} />
          

      </Routes>
    </BrowserRouter>

     {/* <Dashboard_1></Dashboard_1> */}

    </>
  )
}

export default App
