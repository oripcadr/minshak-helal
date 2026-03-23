

//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './RightMenu.css'
import logo from './assets/logo.png'
import dashboad_icon from './assets/dashboad_icon.png'
import forms_icon from './assets/forms_icon.png'
import employee_icon from './assets/employee_icon.png'
import gun_icon from './assets/gun_icon.png'
import calendar_icon from './assets/calendar_icon.png'

import logout_icon from './assets/logout_icon_1.png'
import walking from './assets/walking.png'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import user from './assets/user.png'
import eq_icon from './assets/eq_icon.png'
import overview_icon from './assets/overview_icon.png'
import settings_icon from './assets/settings_icon.png'
import msg_icon from './assets/msg_icon.png'
import bell_icon from './assets/bell_icon.png'
function RightMenu(props:any) {

    const navigate = useNavigate();
    const [user_name, set_user_name] = useState('');
    const [role, set_role] = useState('');
         
    useEffect(() => {
        let t:any='';
        t=localStorage.getItem("neshek_user")?.split('|');
        set_user_name(t[0]);
        set_role(t[1]);
    }, []);


  return (
    <>
        <div className='user_cont'>
               <div className="header_user_cont"> <img src={user} />
                <div className='user_title'>
                    <div className='user_name'>{user_name}</div>
                    <div className='user_role'>{role}</div>
              </div></div>
                <div className='top_header'>

                <div className='search_cont'>
                    <input type="text" placeholder='חפש אתר, עובד, מסמך או נשק…' className='search_input'/>   
                    <img src={msg_icon} />
                    <img src={bell_icon} />
                </div>
            </div>
          </div>
          
    <div className='RightMenu_main_cont'>



        

        <div className={'RightMenu_main_line ' + (props.title=="dashboard"?'RightMenu_main_line_selected':'')} onClick={()=>navigate("/Dashboard")}>
            דשבורד
            <img src={dashboad_icon} />
        </div>

        {/* <div className='RightMenu_main_line'>
            אתרים
            <img src={building_icon} />
        </div> */}


        <div className={'RightMenu_main_line ' + (props.title=="patrols"?'RightMenu_main_line_selected':'')}  onClick={()=>navigate("/Patrols")}>
            סיורים
            <img src={walking} />
        </div>

        <div className={'RightMenu_main_line ' + (props.title=="workers"?'RightMenu_main_line_selected':'')}   onClick={()=>navigate("/Workers")}>
            עובדים
            <img src={employee_icon} />
        </div>

        <div className={'RightMenu_main_line ' + (props.title=="neshek"?'RightMenu_main_line_selected':'')} onClick={()=>navigate("/Neshek")}>
            נשקים
            <img src={gun_icon} />
        </div>

        <div className={'RightMenu_main_line ' + (props.title=="shifts"?'RightMenu_main_line_selected':'')} onClick={()=>navigate("/Shifts")}>
            סידור עבודה
            <img src={calendar_icon} />
        </div>


        <div className={'RightMenu_main_line ' + (props.title=="Forms"?'RightMenu_main_line_selected':'')} onClick={()=>navigate("/Forms")}>
           הדרכות וטפסים
            <img src={forms_icon} />
        </div>

        {/* <div className={'RightMenu_main_line ' + (props.title=="calendar"?'RightMenu_main_line_selected':'')} onClick={()=>navigate("/Calendar_events")}>
            יומן אירועים
            <img src={reminder_icon} />
        </div> */}
{/* 
        <div className='RightMenu_main_line'>
            מסמכים
            <img src={doc_icon} />
        </div> */}

        {/* <div className={'RightMenu_main_line ' + (props.title=="munitions"?'RightMenu_main_line_selected':'')} onClick={()=>navigate("/Munitions")}>
            תחמושת
            <img src={doc_icon} />
        </div> */}

        <div className={'RightMenu_main_line ' + (props.title=="Equipment"?'RightMenu_main_line_selected':'')} onClick={()=>navigate("/Equipment")}>
            ציוד
            <img src={eq_icon} />
        </div>


        <div className={'RightMenu_main_line ' + (props.title=="supervision"?'RightMenu_main_line_selected':'')} onClick={()=>navigate("/Supervision")}>
            פיקוח
            <img src={overview_icon} />
        </div>

        <div className={'RightMenu_main_line ' + (props.title=="settings"?'RightMenu_main_line_selected':'')} onClick={()=>navigate("/Settings")}>
            הגדרות
            <img src={settings_icon} />
        </div>

        <div className={'RightMenu_main_line ' + (props.title=="logout"?'RightMenu_main_line_selected':'')} onClick={()=>navigate("/Login")}>
            התנתק
            <img src={logout_icon} className='logout_icon'/>
        </div>

        <img src={logo} className='logo_img'/>
    </div>
    </>

  )
}

export default RightMenu
