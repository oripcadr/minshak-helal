import './Eq_order_popup.css'


// import {  useState } from 'react'
import close_img from './assets/close.png'
import eq_p_1 from './assets/eq_2.png'
import del_eq from './assets/del_eq.png'
import pencil_eq from './assets/pencil_eq.png'
function Eq_order_popup_2(props:any) {

//   const [selected_tab, set_selected_tab] = useState(1);
//   const [selected_tab_1, set_selected_tab_1] = useState(1);
    
  return (
   <><div className='layout'></div>
        <div className='eq_order_popup_cont'>
            <img src={close_img} className='close_img' onClick={()=>props.set_show_eq_order_popup(false)}/>
            <div className='eq_p_title'>הזמנת עבודה לספק ציוד</div>
            <img src={eq_p_1} className='eq_p_1' />

            <div>
                <div className='qe_tb_header'>
                    <div className='eq_tb_in'>סוג מוצר</div>
                    <div className='eq_tb_in eq_tb_in_s'>כמות</div>
                    <div className='eq_tb_in eq_tb_in_s'>מחיר ליחידה</div>
                    <div className='eq_tb_in eq_tb_in_s'>סה"כ בש"ח</div>
                </div>

                <div className='qe_tb_header_in'>
                    <div className='eq_tb_in'><input type="text" placeholder='חיפוש פריט' className='eq_search_tb'/></div>
                    <div className='eq_tb_in eq_tb_in_s'><input type="text" className='eq_tb_input'/></div>
                    <div className='eq_tb_in eq_tb_in_s'><input type="text" className='eq_tb_input'/></div>
                    <div className='eq_tb_in eq_tb_in_s'><input type="text" className='eq_tb_input'/></div>
                    <div className='eq_tb_in eq_tb_in_t'> 1.00₪</div>
                    <img src={pencil_eq} />
                    <img src={del_eq} className='del_eq'/>
                </div>

                <div className='eq_add_item'>+ הוסף פריט</div>
            </div>

            <div className='eq_date_cont'>
                <div>
                    <div className='eq_date_title'>טווח תאריכים</div>
                    <input type="date" className='eq_date'/>
                </div>

                <div>
                    <div className='eq_date_title'>הערות</div>
                   <textarea className='eq_textarea'></textarea>
                </div>

            </div>

            <div className='eq_back_btn_cont'>
                <div className='eq_back_btn' onClick={()=>props.set_next_page(1)}>חזור</div>
                <div className='eq_cont_btn_2' onClick={()=>props.set_next_page(3)}>המשך</div>
            </div>

        </div>
        </>
  )
}


export default Eq_order_popup_2