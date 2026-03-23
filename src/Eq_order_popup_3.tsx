import './Eq_order_popup.css'


// import {  useState } from 'react'
import close_img from './assets/close.png'
import eq_p_1 from './assets/eq_3.png'
// import del_eq from './assets/del_eq.png'
// import pencil_eq from './assets/pencil_eq.png'
function Eq_order_popup_3(props:any) {

//   const [selected_tab, set_selected_tab] = useState(1);
//   const [selected_tab_1, set_selected_tab_1] = useState(1);
    
  return (
   <><div className='layout'></div>
        <div className='eq_order_popup_cont'>
            <img src={close_img} className='close_img' onClick={()=>props.set_show_eq_order_popup(false)}/>
            <div className='eq_p_title'>הזמנת עבודה לספק ציוד</div>
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
                    <div className='order_eq_box_title'>מוצרים</div>
                 
                    <div className='order_eq_box_text'>
                   חולצות כחולות
                    </div>
                    <div className='order_eq_box_text_s'>
                  3 יחידות.    300₪ סה״כ
                    </div>

                     <div className='order_eq_box_text'>
                  פונדה עור
                    </div>
                    <div className='order_eq_box_text_s'>
                  3 יחידות.    300₪ סה״כ
                    </div>

                    <div className='order_eq_box_text'>
                 מכשירי קשר
                    </div>
                    <div className='order_eq_box_text_s'>
                  3 יחידות.    300₪ סה״כ
                    </div>
                </div>

                <div className='order_eq_box'>
                    <div className='order_eq_box_title'>סה"כ</div>
                    <div className='order_eq_box_text_bold'>
                       50,0000₪
                    </div>

                </div>


            </div>

            <div className='eq_back_btn_cont'>
                <div className='eq_back_btn' onClick={()=>props.set_next_page(2)}>חזור</div>
                <div className='eq_cont_btn_2' onClick={()=>props.set_next_page(0)}>שלח הזמנה</div>
            </div>

        </div>
        </>
  )
}


export default Eq_order_popup_3