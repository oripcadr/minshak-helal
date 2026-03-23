import './Tr_order_popup.css'


// import {  useState } from 'react'
import close_img from './assets/close.png'
import eq_p_1 from './assets/eq_p_3.png'
// import user_n_2 from './assets/user_n_2.png'
// import eq_selct_1 from './assets/eq_selct_1.png'

function Tr_order_popup_3(props:any) {

//   const [selected_tab, set_selected_tab] = useState(1);
//   const [selected_tab_1, set_selected_tab_1] = useState(1);
    
  return (
   <><div className='layout'></div>
        <div className='eq_order_popup_cont'>
            <img src={close_img} className='close_img' onClick={()=>props.set_show_eq_order_popup(false)}/>
            <div className='eq_p_title'>תיאום עם מוסד הכשרה</div>
            <img src={eq_p_1} className='eq_p_1' />


            <div>
                <div className='qe_tb_header'>
                    <div className='eq_tb_in '>סוג קורס</div>
                    <div className='eq_tb_in '>סוג מטווח</div>
                    <div className='eq_tb_in '>סוג מטווח</div>
                </div>

                <div className='qe_tb_header_in_3'>
                    <div className='eq_tb_in ' >
                        <select className='eq_tb_in_select'>
                            <option>
                                בחר סוג קורס
                            </option>
                            <option>
                                קורס מאבטחים בסיסי
                            </option>

                            <option>
                                קורס אחמ״ש
                            </option>
                            <option>
                                רענון תקופתי
                            </option>
                            <option>
                                הכשרת נשק
                            </option>
                            <option>
                               מטווח 50 כדור 
                            </option>
                        </select>
                    </div>

                     <div className='eq_tb_in ' >
                        <select className='eq_tb_in_select'>
                            <option>
                                בחר סוג קורס
                            </option>
                            <option>
                                50 כדור
                            </option>
                            <option>
                                100 כדור
                            </option>
                            <option>
                                אחר
                            </option>
                        </select>
                    </div>
                  
                     <div className='eq_tb_in ' >
                                 <select className='eq_tb_in_select'>
                            <option>
                                בחר סוג קורס
                            </option>
                            <option>
                                50 כדור
                            </option>
                            <option>
                                100 כדור
                            </option>
                            <option>
                                אחר
                            </option>
                        </select>
                    </div>
                </div>
            </div>


            <div className='eq_date_cont'>
                <div>
                    <div className='eq_date_title'> טווח תאריכים נדרש</div>
                    <input type="date" className='eq_date'/>
                </div>

                <div>
                    <div className='eq_date_title'>הערות</div>
                   <textarea className='eq_textarea'></textarea>
                </div>

            </div>
  
            <div className='eq_back_btn_cont'>
                <div className='eq_back_btn' onClick={()=>props.set_next_page_tr(2)}>חזור</div>
                <div className='eq_cont_btn_2' onClick={()=>props.set_next_page_tr(4)}>המשך</div>
            </div>

        </div>
        </>
  )
}


export default Tr_order_popup_3