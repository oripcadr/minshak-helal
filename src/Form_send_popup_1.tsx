import './Form_send_popup.css'


// import {  useState } from 'react'
import close_img from './assets/close.png'
import form_p_i_1 from './assets/form_p_i_1.png'
import whatsup from './assets/whatsup.png'
import sms from './assets/sms.png'
import email from './assets/email.png'
import warning_g from './assets/warning_g.png'
import { useState } from 'react'


function Form_send_popup_1(props:any) {


    const [type_btn_selected, set_type_btn_selected] = useState(1);


  return (
   <><div className='layout'></div>
        <div className='eq_order_popup_cont'>
            <img src={close_img} className='close_img' onClick={()=>props.set_show_send_popup(false)}/>
            <div className='eq_p_title'>פרסום והפצה</div>
            <img src={form_p_i_1} className='eq_p_1' />

            <div className='form_send_2_title'>תאריך יעד להשלמה</div>

            <input type='date'className='form_send_date white-calendar' />
          

            <div className='form_send_2_title_sec'>אמצעי התראה</div>

            <div className='msg_type_btn_cont'>
                <div className={'msg_type_btn '+ (type_btn_selected==1?"msg_type_btn_selected":"")} onClick={()=>set_type_btn_selected(1)}>
                    <img src={whatsup} />
                    ווטסאפ
                </div>

                   <div className={'msg_type_btn '+ (type_btn_selected==2?"msg_type_btn_selected":"")}  onClick={()=>set_type_btn_selected(2)}>
                    <img src={sms} />
                   SMS
                </div>

                <div className={'msg_type_btn '+ (type_btn_selected==3?"msg_type_btn_selected":"")}  onClick={()=>set_type_btn_selected(3)}>
                    <img src={email} />
                   Email
                </div>

            </div>

            <div className='form_send_warning_cont'>
                <img src={warning_g} />

                <div>
                    <div className='warning_g_text_bold'>
                        שים לב
                    </div>
                    <div  className='warning_g_text'>
                        לאחר הפרסום, 3 מאבטחים יקבלו התראה ויוכלו לגשת להדרכה. פעולה זו לא ניתנת לביטול.
                    </div>
                </div>

            </div>

            <div className='form_cont_btn_main'>
                <div className=' eq_back_btn ' onClick={()=>props.set_next_page(1)}>חזרה</div>
                <div className='form_cont_btn_next ' onClick={()=>props.set_next_page(3)}>המשך</div>
            </div> 

        </div>
        </>
  )
}


export default Form_send_popup_1