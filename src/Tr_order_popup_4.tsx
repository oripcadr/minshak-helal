import './Eq_order_popup.css'


// import {  useState } from 'react'
import close_img from './assets/close.png'
import eq_p_1 from './assets/eq_p_4.png'
 import user_s_2 from './assets/user_s_2.png'
// import pencil_eq from './assets/pencil_eq.png'
function Eq_order_popup_4(props:any) {

//   const [selected_tab, set_selected_tab] = useState(1);
//   const [selected_tab_1, set_selected_tab_1] = useState(1);
    
  return (
   <><div className='layout'></div>
        <div className='eq_order_popup_cont'>
            <img src={close_img} className='close_img' onClick={()=>props.set_show_eq_order_popup(false)}/>
            <div className='eq_p_title'>תיאום עם מוסד הכשרה</div>
            <img src={eq_p_1} className='eq_p_1' />

            <div className='order_eq_cont'>
                <div className='order_eq_box'>
                    <div className='order_eq_box_title'>ספק</div>
                    <div className='order_eq_box_text'>
                        מכון פסיכולוגי מרכז
                    </div>
                    <div className='order_eq_box_text'>
                    02-6234567
                    </div>
                </div>

                <div className='order_eq_box'>
                    <div className='order_eq_box_title'>מאבטחים</div>
                 
                    <div className='table_row_tr' >
                        <img src={user_s_2} className='user_s' />
                        משה כהן
                    </div>
                    <div className='table_row_tr' >
                        <img src={user_s_2} className='user_s' />
                      יוסי אברהם
                    </div>

                    <div className='table_row_tr' >
                        <img src={user_s_2} className='user_s' />
                      חדווה שלומית
                    </div>

                </div>

                <div className='order_eq_box'>
                    <div className='order_eq_box_title'>פרטי הכשרה</div>
                    <div className='order_eq_box_text'>
                       קורס ריענון
                    </div>
                    <div className='order_eq_box_text'>
                      12-27/12/2025
                    </div>

                </div>


            </div>

            <div className='eq_back_btn_cont'>
                <div className='eq_back_btn' onClick={()=>props.set_next_page_tr(3)}>חזור</div>
                <div className='eq_cont_btn_2' onClick={()=>props.set_next_page_tr(0)}>שלח הזמנה</div>
            </div>

        </div>
        </>
  )
}


export default Eq_order_popup_4