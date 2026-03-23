import './Form_send_popup.css'


// import {  useState } from 'react'
import close_img from './assets/close.png'
import send_form from './assets/send_form.png'
import whatsup from './assets/whatsup.png'
import sms from './assets/sms.png'
import email from './assets/email.png'
import warning_g from './assets/warning_g.png'
import { useState } from 'react'


function Form_send_popup_2(props:any) {

  return (
    <>
        <div className='layout'></div>
        <div className=' eq_order_popup_cont_send'>
            <img src={close_img} className='close_img' onClick={()=>props.set_show_send_popup(false)}/>
        
            <img src={send_form} className='send_form_img' />
            <div className='send_f_title'>המסמך נשלח בהצלחה</div>
          
            <div className='send_f_close_btn' onClick={()=>{props.set_next_page(1); props.set_show_send_popup(false)}}>סגירה</div>

        </div>
    </>
  )
}


export default Form_send_popup_2