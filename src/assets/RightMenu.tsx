

//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './RightMenu.css'
import logo from './assets/logo.png'
import dashboad_icon from './assets/dashboad_icon.png'
import building_icon from './assets/building_icon.png'
import employee_icon from './assets/employee_icon.png'
import gun_icon from './assets/gun_icon.png'
import calendar_icon from './assets/calendar_icon.png'
import reminder_icon from './assets/reminder_icon.png'
import doc_icon from './assets/doc_icon.png'
import walking from './assets/walking.png'
import { useNavigate } from 'react-router-dom'

function RightMenu() {

     const navigate = useNavigate();

  return (
    <div className='RightMenu_main_cont'>

        <div className='RightMenu_main_line RightMenu_main_line_selected' onClick={()=>navigate("/Dashboard")}>
            דשבורד
            <img src={dashboad_icon} />
        </div>

        <div className='RightMenu_main_line'>
            אתרים
            <img src={building_icon} />
        </div>

        <div className='RightMenu_main_line'  onClick={()=>navigate("/Patrols")}>
            סיורים
            <img src={walking} />
        </div>

        <div className='RightMenu_main_line'  onClick={()=>navigate("/Workers")}>
            עובדים
            <img src={employee_icon} />
        </div>

        <div className='RightMenu_main_line'  onClick={()=>navigate("/Neshek")}>
            נשקים
            <img src={gun_icon} />
        </div>

        <div className='RightMenu_main_line'>
            נוכחות
            <img src={calendar_icon} />
        </div>

        <div className='RightMenu_main_line'>
            יומן אירועים
            <img src={reminder_icon} />
        </div>

        <div className='RightMenu_main_line'>
            מסמכים
             <img src={doc_icon} />
        </div>

        <div className='RightMenu_main_line'>
            הגדרות
            <img src={doc_icon} />
        </div>

        <img src={logo} className='logo_img'/>
    </div>
  )
}

export default RightMenu
