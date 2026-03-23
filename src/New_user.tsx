import './New_user.css'
import add_user from './assets/add_user.png'

import close from './assets/close.png'
import more_icon from './assets/more_icon.png'
import p_details_1 from './assets/p_details_1.png'

import { useEffect, useState } from 'react'
import axios from 'axios'

function New_user(props:any) {

    // const [permissions, set_permissions] = useState('');
    // const [status_user, set_status_user] = useState('');
    const [gender, set_gender] = useState('זכר');
    const [firstname, set_firstname] = useState('');
    const [lastname, set_lastname] = useState('');
    const [tz, set_tz] = useState('');
    const [address, set_address] = useState('');
    const [phone, set_phone] = useState('');
    const [email, set_email] = useState('');
    const [b_date, set_b_date] = useState('');
    const [user_name, set_user_name] = useState('');
    const [password, set_password] = useState('');
  
   // const [role, set_role] = useState('');
    const [roles, set_roles] = useState<any>([]);
    const [role_name, set_role_name] = useState('');

    const [mishmarot_1, set_mishmarot_1] = useState<any>('true');
    const [mishmarot_2, set_mishmarot_2] = useState<any>('false');
    const [mishmarot_3, set_mishmarot_3] = useState<any>('false');
    
    const [neshakim_1, set_neshakim_1] = useState<any>('true');
    const [neshakim_2, set_neshakim_2] = useState<any>('false');
    const [neshakim_3, set_neshakim_3] = useState<any>('false');
    
    const [pikuah_1, set_pikuah_1] = useState<any>('true');
    const [pikuah_2, set_pikuah_2] = useState<any>('false');
    const [pikuah_3, set_pikuah_3] = useState<any>('false');

    const [mlay_1, set_mlay_1] = useState<any>('true');
    const [mlay_2, set_mlay_2] = useState<any>('false');
    const [mlay_3, set_mlay_3] = useState<any>('false');

    const [tafkidim_1, set_tafkidim_1] = useState<any>('true');
    const [tafkidim_2, set_tafkidim_2] = useState<any>('false');
    const [tafkidim_3, set_tafkidim_3] = useState<any>('false');

    useEffect(() => {
        get_rols();
    }, []);

    function get_rols(){
        let payload = new FormData();
               
        axios({
            method: 'post',
            url: globalThis.app.current+'/get_roles',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(res => {
           set_roles(res.data.recordset);
        }); 
    }
    
    function save_new_user(){
      let payload = new FormData();
    
      payload.append("firstname", firstname);
      payload.append("lastname", lastname);
      payload.append("role_name", role_name);
      payload.append("gender", gender);
      payload.append("tz", tz);
      payload.append("address", address);
      payload.append("phone", phone);
      payload.append("email", email);

      payload.append("b_date", b_date);
      payload.append("user_name", user_name);
      payload.append("password", password);

      payload.append("mishmarot_1", mishmarot_1);
      payload.append("mishmarot_2", mishmarot_2);
      payload.append("mishmarot_3", mishmarot_3);
      
      payload.append("neshakim_1", neshakim_1);
      payload.append("neshakim_2", neshakim_2);
      payload.append("neshakim_3", neshakim_3);
  
      payload.append("pikuah_1", pikuah_1);
      payload.append("pikuah_2", pikuah_2);
      payload.append("pikuah_3", pikuah_3);

      payload.append("mlay_1", mlay_1);
      payload.append("mlay_2", mlay_2);
      payload.append("mlay_3", mlay_3);

      payload.append("tafkidim_1", tafkidim_1);
      payload.append("tafkidim_2", tafkidim_2);
      payload.append("tafkidim_3", tafkidim_3);
      
      axios({
        method: 'post',
        url: globalThis.app.current+'/save_new_user',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(() => {
        props.get_all_users();
        props.set_show_add_user_popup(false);
      });
  
    }


  return (
    <>
      <div className='new_worker_popup_cont' >
        <img src={close} className='close_icon' onClick={()=>props.set_show_add_user_popup(false)}/>
        <div className='worker_popup_header'>
            <img src={add_user} className='user_b'/>    
            <div className='user_b_text_cont'>
                <div className='user_b_text_main_tachmoshet'>הוספת משתמש חדש</div>
            </div>    

        </div>

        <div className='worker_info_cont'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>פרטים אישיים</div>

                <div className='tachmoshet_info_type_cont_main_row'>
                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>שם פרטי</div>   
                        <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' placeholder='הזן שם פרטי' value={firstname} onChange={(e)=>set_firstname(e.target.value)}/>
                    </div>

                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>שם משפחה</div>   
                        <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' placeholder='הזן שם משפחה' value={lastname} onChange={(e)=>set_lastname(e.target.value)}/>
                    </div>
                </div>

                <div className='tachmoshet_info_type_cont_main_row'>
                   <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>תעודת זהות</div>   
                        <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' placeholder='תעודת זהות' value={tz} onChange={(e)=>set_tz(e.target.value)}/>
                    </div>

                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>כתובת</div>   
                        <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' placeholder='כתובת' value={address} onChange={(e)=>set_address(e.target.value)}/>
                    </div>
                </div>

                <div className='tachmoshet_info_type_cont_main_row'>
                   <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>טלפון</div>   
                        <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' placeholder='טלפון' value={phone} onChange={(e)=>set_phone(e.target.value)}/>
                    </div>

                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>אימייל</div>   
                        <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' placeholder='אימייל' value={email} onChange={(e)=>set_email(e.target.value)}/>
                    </div>
                </div>

                <div className='tachmoshet_info_type_cont_main_row'>
                   <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>מין</div>   
                       
                        <div className='gender_cont'>
                          <div className={'gender ' + (gender=='זכר'? "gender_selected" : "")} onClick={()=>set_gender('זכר')}>זכר</div>
                          <div className={'gender ' + (gender=='נקבה'? "gender_selected" : "")} onClick={()=>set_gender('נקבה')}>נקבה</div>
                        </div>
                    </div>

                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>תאריך לידה</div>   
                        <input type="date" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' placeholder='' value={b_date} onChange={(e)=>set_b_date(e.target.value)}/>
                    </div>
                </div>

        </div>

        <div className='new_user_info_cont_2'>
            <img src={more_icon} className='w_more_icon'/>
            <img src={p_details_1} className='p_details_1'/>
            <div className='p_details_title'>פרטי משתמש</div>


            <div className='tachmoshet_info_type_cont_main_row'>
                <div className=' tachmoshet_info_type_cont_main'>
                    <div className='tachmoshet_info_type_title'>שם משתמש</div>   
                    <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' placeholder='בחר שם משתמש' value={user_name} onChange={(e)=>set_user_name(e.target.value)}/>
                </div>

                <div className=' tachmoshet_info_type_cont_main'>
                    <div className='tachmoshet_info_type_title'>סיסמה</div>   
                    <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' placeholder='הזן סיסמה' value={password} onChange={(e)=>set_password(e.target.value)}/>
                </div>
            </div>


             <div className='tachmoshet_info_type_cont_main_row'>
                <div className=' tachmoshet_info_type_cont_main'>
                    <div className='tachmoshet_info_type_title'>תפקיד</div>   
                  <select value={role_name} onChange={(e)=>{set_role_name(e.target.value);}} className='tachmoshet_info_type_cont tachmoshet_info_type_row_date'>
                        <option>
                            בחר תפקיד
                        </option>

                        {roles && roles.map((role:any) => (
                        <option>
                            {role.role_name}
                        </option>
                        ))}

                
                    </select>
                </div>

              
            </div>

        </div>

      <div className='new_user_info_cont_3'>
            <img src={more_icon} className='w_more_icon'/>
            <img src={p_details_1} className='p_details_1'/>
            <div className='p_details_title'>הרשאות מערכת</div>

                <div className='settings_by_role_cont_1'>
                        <div className='settings_by_role_text'>ניהול משמרות</div>

                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>צפייה</div>
                            <div className={' slide_settings_cont_w ' + (mishmarot_1=='true'?"slide_settings_cont_w_selected":"")} onClick={()=>set_mishmarot_1(mishmarot_1=='true'?'false':'true')}> 
                                <div className={'slide_settings_middle ' + (mishmarot_1=='true'?"slide_settings_middle_w_selected":"")}></div>
                            </div>
                        </div>

                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>עריכה</div>
                             <div className={' slide_settings_cont_w ' + (mishmarot_2=='true'?"slide_settings_cont_w_selected":"")} onClick={()=>set_mishmarot_2(mishmarot_2=='true'?'false':'true')}> 
                                <div className={'slide_settings_middle ' + (mishmarot_2=='true'?"slide_settings_middle_w_selected":"")}></div>
                            </div>
                        </div>

                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>מחיקה</div>
                            <div className={' slide_settings_cont_w ' + (mishmarot_3=='true'?"slide_settings_cont_w_selected":"")} onClick={()=>set_mishmarot_3(mishmarot_3=='true'?'false':'true')}> 
                                <div className={'slide_settings_middle ' + (mishmarot_3=='true'?"slide_settings_middle_w_selected":"")}></div>
                            </div>
                        </div>

                    </div>

                <div className='settings_by_role_cont_1'>
                        <div className='settings_by_role_text'>ניהול נשקים</div>

                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>צפייה</div>
                            <div className={' slide_settings_cont_w ' + (neshakim_1=='true'?"slide_settings_cont_w_selected":"")} onClick={()=>set_neshakim_1(neshakim_1=='true'?'false':'true')}> 
                                <div className={'slide_settings_middle ' + (neshakim_1=='true'?"slide_settings_middle_w_selected":"")}></div>
                            </div>
                        </div>

                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>עריכה</div>
                             <div className={' slide_settings_cont_w ' + (neshakim_2=='true'?"slide_settings_cont_w_selected":"")} onClick={()=>set_neshakim_2(neshakim_2=='true'?'false':'true')}> 
                                <div className={'slide_settings_middle ' + (neshakim_2=='true'?"slide_settings_middle_w_selected":"")}></div>
                            </div>
                        </div>

                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>מחיקה</div>
                            <div className={' slide_settings_cont_w ' + (neshakim_3=='true'?"slide_settings_cont_w_selected":"")} onClick={()=>set_neshakim_3(neshakim_3=='true'?'false':'true')}> 
                                <div className={'slide_settings_middle ' + (neshakim_3=='true'?"slide_settings_middle_w_selected":"")}></div>
                            </div>
                        </div>

                </div>

                    <div className='settings_by_role_cont_1'>
                        <div className='settings_by_role_text'>ניהול פיקוח</div>

                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>צפייה</div>
                            <div className={' slide_settings_cont_w ' + (pikuah_1=='true'?"slide_settings_cont_w_selected":"")} onClick={()=>set_pikuah_1(pikuah_1=='true'?'false':'true')}> 
                                <div className={'slide_settings_middle ' + (pikuah_1=='true'?"slide_settings_middle_w_selected":"")}></div>
                            </div>
                        </div>

                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>עריכה</div>
                             <div className={' slide_settings_cont_w ' + (pikuah_2=='true'?"slide_settings_cont_w_selected":"")} onClick={()=>set_pikuah_2(pikuah_2=='true'?'false':'true')}> 
                                <div className={'slide_settings_middle ' + (pikuah_2=='true'?"slide_settings_middle_w_selected":"")}></div>
                            </div>
                        </div>

                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>מחיקה</div>
                            <div className={' slide_settings_cont_w ' + (pikuah_3=='true'?"slide_settings_cont_w_selected":"")} onClick={()=>set_pikuah_3(pikuah_3=='true'?'false':'true')}> 
                                <div className={'slide_settings_middle ' + (pikuah_3=='true'?"slide_settings_middle_w_selected":"")}></div>
                            </div>
                        </div>

                </div>



                    <div className='settings_by_role_cont_1'>
                        <div className='settings_by_role_text'>ניהול מלאי</div>

                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>צפייה</div>
                            <div className={' slide_settings_cont_w ' + (mlay_1=='true'?"slide_settings_cont_w_selected":"")} onClick={()=>set_mlay_1(mlay_1=='true'?'false':'true')}> 
                                <div className={'slide_settings_middle ' + (mlay_1=='true'?"slide_settings_middle_w_selected":"")}></div>
                            </div>
                        </div>

                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>עריכה</div>
                             <div className={' slide_settings_cont_w ' + (mlay_2=='true'?"slide_settings_cont_w_selected":"")} onClick={()=>set_mlay_2(mlay_2=='true'?'false':'true')}> 
                                <div className={'slide_settings_middle ' + (mlay_2=='true'?"slide_settings_middle_w_selected":"")}></div>
                            </div>
                        </div>

                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>מחיקה</div>
                            <div className={' slide_settings_cont_w ' + (mlay_3=='true'?"slide_settings_cont_w_selected":"")} onClick={()=>set_mlay_3(mlay_3=='true'?'false':'true')}> 
                                <div className={'slide_settings_middle ' + (mlay_3=='true'?"slide_settings_middle_w_selected":"")}></div>
                            </div>
                        </div>

                </div>

                <div className='settings_by_role_cont_1'>
                        <div className='settings_by_role_text'>ניהול תפקידים</div>

                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>צפייה</div>
                            <div className={' slide_settings_cont_w ' + (tafkidim_1=='true'?"slide_settings_cont_w_selected":"")} onClick={()=>set_tafkidim_1(tafkidim_1=='true'?'false':'true')}> 
                                <div className={'slide_settings_middle ' + (tafkidim_1=='true'?"slide_settings_middle_w_selected":"")}></div>
                            </div>
                        </div>

                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>עריכה</div>
                             <div className={' slide_settings_cont_w ' + (tafkidim_2=='true'?"slide_settings_cont_w_selected":"")} onClick={()=>set_tafkidim_2(tafkidim_2=='true'?'false':'true')}> 
                                <div className={'slide_settings_middle ' + (tafkidim_2=='true'?"slide_settings_middle_w_selected":"")}></div>
                            </div>
                        </div>

                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>מחיקה</div>
                            <div className={' slide_settings_cont_w ' + (tafkidim_3=='true'?"slide_settings_cont_w_selected":"")} onClick={()=>set_tafkidim_3(tafkidim_3=='true'?'false':'true')}> 
                                <div className={'slide_settings_middle ' + (tafkidim_3=='true'?"slide_settings_middle_w_selected":"")}></div>
                            </div>
                        </div>

                </div>
        </div>

        <div className='save_t_btn_cont'>
            <div className='save_t_btn' onClick={()=>save_new_user()}>צור משתמש</div>
            <div className='cancel_t_btn'  onClick={()=>props.set_show_add_user_popup(false)}>ביטול</div>
        </div>

      </div>

    </>
  )}

export default New_user