import { useRef, useState} from 'react';

import './Login.css';
import login_logo from './assets/login_logo.png'
import edit_icon from './assets/edit_login.png'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Login_1() {    
  const location = useLocation();
  const navigate = useNavigate();
  const [username] = useState<any>(location.state.email);
  const [password, setpassword] = useState<any>('');

  const [email] = useState(location.state.email);
  const [login_err, set_login_err] = useState('');
 // const [stores, set_stores] = useState<any>([]);
//  const [selected_store, set_selected_store] = useState('');


  const InputRef1 = useRef<any>(null)
  const InputRef2 = useRef<any>(null)
  const InputRef3 = useRef<any>(null)
  const InputRef4 = useRef<any>(null)
  const InputRef5 = useRef<any>(null)



  async function login_func(){
      let  payload = new FormData();

      payload.append("email", username);
      payload.append("password", password);

      axios({
          method: 'post',
          url: globalThis.app.current+'/login',
          data: payload,
          headers: { "Content-Type": "multipart/form-data" },
      }).then(res => {

        if (res.data.recordset[0]) {
            debugger;
            localStorage.setItem("neshek_user", res.data.recordset[0].user_name+'|'+res.data.recordset[0].role_name);
            navigate('/Dashboard')

        } else {
            set_login_err('שם משתמש או סיסמא לא נכונים')
        }
         
    //     });
       
      }).catch(err => {
         console.log(err)
      });

  }


  function setpassword_v(val:string, id:string){

    debugger;
    let p_temp=password;
    let p_temp_arr=p_temp.split("");

    if (val==''){
        p_temp=p_temp.substring(0, p_temp.length - 1);
    } else if (p_temp.length>=id){
        p_temp_arr[id]=val;
    }
    
    p_temp=p_temp_arr.join("");
 
    setpassword(p_temp);
  }
  
  return (


         <div className='login_main_cont Login_1'>
            <div className='login_form_cont'>
            <img src={login_logo} className='login_logo'/>
            <div className='login_title_b'>התחברות</div>

            <div className='email_text_cont'>
                <div className='email_text'>{email}</div>
                <img src={edit_icon} className='edit_icon' onClick={()=> navigate('/Login',{ state: { email: email } })} /> 
            </div>

            <div className='connect_with_email_cont connect_with_email_cont_no_border'>
               
                <div className='code_input_cont'> 
                    <input type="text" className='code_input' value={password[0]?password[0]:''} onChange={(e)=>setpassword_v(e.target.value,'0')} onKeyUp={() => InputRef1.current.focus()}/>
                    <input type="text" className='code_input' value={password[1]?password[1]:''} onChange={(e)=>setpassword_v(e.target.value,'1')} ref={InputRef1} onKeyUp={() => InputRef2.current.focus()}/>
                    <input type="text" className='code_input' value={password[2]?password[2]:''} onChange={(e)=>setpassword_v(e.target.value,'2')} ref={InputRef2} onKeyUp={() => InputRef3.current.focus()}/>
                    <input type="text" className='code_input' value={password[3]?password[3]:''} onChange={(e)=>setpassword_v(e.target.value,'3')} ref={InputRef3} onKeyUp={() => InputRef4.current.focus()}/>
                    <input type="text" className='code_input' value={password[4]?password[4]:''} onChange={(e)=>setpassword_v(e.target.value,'4')} ref={InputRef4}  onKeyUp={() => InputRef5.current.focus()}/>
                    <input type="text" className='code_input' value={password[5]?password[5]:''} onChange={(e)=>setpassword_v(e.target.value,'5')} ref={InputRef5} />
                </div>

                <div className='no_account_cont_1'>
                    <div className='no_account'>לא קיבלת קוד?</div>
                    <div className='sign_in'>שלח שוב</div>
                </div>

               


                <button className={'next_btn_login ' + (password.length==6?"next_btn_login_selected":"")}  onClick={login_func}>המשך</button>
                    <div className='login_err'> {login_err} </div>
            </div>

            <div className='no_account_cont_1'>
                <div className='no_account'>שימוש בשיטת הזדהות אחרת</div>
            </div>

        </div>
            </div>

  );
}

export default Login_1;
