

//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import login_logo from './assets/login_logo.png'
import { useState } from 'react';


function Login() {

    const navigate = useNavigate();
    const location = useLocation();
    debugger;

    const [email, set_email] = useState(location.state && location.state.email?location.state.email:"");
    const [err_msg, set_err_msg] = useState('');
    
      function go_to_password_page(){
        if (email){
           
            set_err_msg('');
            navigate('/Login_1',{ state: { email: email } })
        } else {
            set_err_msg('יש להכניס שם משתמש');
        }
    }

    return (
    <>
        <div className='login_main_cont'>
            <div className='login_form_cont'>
                <img src={login_logo} className='login_logo'/>
                <div className='login_title'>התחברות</div>

                <div className='google_cont_btn'>
                    <div className='apple_btn'>Apple</div>
                    <div className='google_btn'>Google</div>
                </div>

                <div className='login_sep_line'>
                    <div className='login_sep_line_text'>או</div>
                </div>

                <div className='login_email_title'>שם משתמש</div>

                <input type="text" className='email_input' value={email} onChange={(e)=>set_email(e.target.value)}/>

                {/* <div className='login_cont_btn' onClick={()=>navigate('/Login_1',{state: {email: email}})}>המשך</div> */}

                   <div className="login_cont_btn" onClick={()=>go_to_password_page()}>המשך</div>
                     {err_msg?<div className='err_msg'>{err_msg}</div>:<></>}  

                <div className='no_user_cont'>
                    <div className='no_user'>אין לך חשבון</div>
                    <div className='sign_up'>הרשם</div>
                </div>


            </div>

        </div>
    </>
  )
}

export default Login

