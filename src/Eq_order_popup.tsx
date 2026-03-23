import './Eq_order_popup.css'


// import {  useState } from 'react'
import close_img from './assets/close.png'
import eq_p_1 from './assets/eq_1.png'
import eq_select_1 from './assets/eq_selct_1.png'

function Eq_order_popup(props:any) {

//   const [selected_tab, set_selected_tab] = useState(1);
//   const [selected_tab_1, set_selected_tab_1] = useState(1);
    
  return (
   <><div className='layout'></div>
        <div className='eq_order_popup_cont'>
            <img src={close_img} className='close_img' onClick={()=>props.set_show_eq_order_popup(false)}/>
            <div className='eq_p_title'>הזמנת עבודה לספק ציוד</div>
            <img src={eq_p_1} className='eq_p_1' />

            <div className='eq_search_cont'>
                <input type='text' placeholder='חיפוש ספק' className='eq_search'/>
                <div className='top_btn '>כל המוסדות</div>
                <div className='top_btn '>מדים</div>
                <div className='top_btn '>ציוד טקטי</div>
                <div className='top_btn '>נשקים</div>
            </div>

            <div className='supp_box_cont'>
                <div className='supp_box'>
                    <div className='supp_box_title'>טכנולוגיה לאבטחה</div>
                    <div className='supp_tag'>מדים</div>
                    <img src={eq_select_1} className='eq_select_1'/>
                    <div className='supp_box_text supp_box_text_top' >
                        טלפון: 02-6234567
                    </div>
                    <div className='supp_box_text'>
                       אימייל: psycho@example.com
                    </div>
                    <div className='supp_box_text'>
                       כתובת: ירושלים 
                    </div>
                </div>

                <div className='supp_box'>
                    <div className='supp_box_title'>טכנולוגיה לאבטחה</div>
                    <div className='supp_tag'>מדים</div>
                    <img src={eq_select_1} className='eq_select_1'/>
                    <div className='supp_box_text supp_box_text_top' >
                        טלפון: 02-6234567
                    </div>
                    <div className='supp_box_text'>
                       אימייל: psycho@example.com
                    </div>
                    <div className='supp_box_text'>
                       כתובת: ירושלים 
                    </div>
                </div>

                    <div className='supp_box'>
                    <div className='supp_box_title'>טכנולוגיה לאבטחה</div>
                    <div className='supp_tag'>מדים</div>
                    <img src={eq_select_1} className='eq_select_1'/>
                    <div className='supp_box_text supp_box_text_top' >
                        טלפון: 02-6234567
                    </div>
                    <div className='supp_box_text'>
                       אימייל: psycho@example.com
                    </div>
                    <div className='supp_box_text'>
                       כתובת: ירושלים 
                    </div>
                </div>

                    <div className='supp_box'>
                    <div className='supp_box_title'>טכנולוגיה לאבטחה</div>
                    <div className='supp_tag'>מדים</div>
                    <img src={eq_select_1} className='eq_select_1'/>
                    <div className='supp_box_text supp_box_text_top' >
                        טלפון: 02-6234567
                    </div>
                    <div className='supp_box_text'>
                       אימייל: psycho@example.com
                    </div>
                    <div className='supp_box_text'>
                       כתובת: ירושלים 
                    </div>
                </div>

                    <div className='supp_box'>
                    <div className='supp_box_title'>טכנולוגיה לאבטחה</div>
                    <div className='supp_tag'>מדים</div>
                    <img src={eq_select_1} className='eq_select_1'/>
                    <div className='supp_box_text supp_box_text_top' >
                        טלפון: 02-6234567
                    </div>
                    <div className='supp_box_text'>
                       אימייל: psycho@example.com
                    </div>
                    <div className='supp_box_text'>
                       כתובת: ירושלים 
                    </div>
                </div>

                    <div className='supp_box'>
                    <div className='supp_box_title'>טכנולוגיה לאבטחה</div>
                    <div className='supp_tag'>מדים</div>
                    <img src={eq_select_1} className='eq_select_1'/>
                    <div className='supp_box_text supp_box_text_top' >
                        טלפון: 02-6234567
                    </div>
                    <div className='supp_box_text'>
                       אימייל: psycho@example.com
                    </div>
                    <div className='supp_box_text'>
                       כתובת: ירושלים 
                    </div>
                </div>
            </div>

            <div className='eq_cont_btn' onClick={()=>props.set_next_page(2)}>המשך</div>

        </div>
        </>
  )
}


export default Eq_order_popup