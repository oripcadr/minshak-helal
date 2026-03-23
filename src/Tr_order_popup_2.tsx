import './Tr_order_popup.css'


// import {  useState } from 'react'
import close_img from './assets/close.png'
import eq_p_1 from './assets/eq_p_2.png'
import user_n_2 from './assets/user_n_2.png'
import eq_selct_1 from './assets/eq_selct_1.png'

function Tr_order_popup_2(props:any) {

//   const [selected_tab, set_selected_tab] = useState(1);
//   const [selected_tab_1, set_selected_tab_1] = useState(1);
    
  return (
   <><div className='layout'></div>
        <div className='eq_order_popup_cont'>
            <img src={close_img} className='close_img' onClick={()=>props.set_show_eq_order_popup(false)}/>
            <div className='eq_p_title'>תיאום עם מוסד הכשרה</div>
            <img src={eq_p_1} className='eq_p_1' />

            <div className='eq_search_cont'>
                <input type='text' placeholder='חיפוש ספק' className='eq_search'/>
                <div className='top_btn '>מאבטח</div>
                <div className='top_btn '>אחמ"ש</div>
            </div>

            <div className='supp_box_cont_t'>
                <div className='meavteah_box'>
                    <img src={eq_selct_1} className='eq_selct_1'/>
                    <img src={user_n_2} className='user_n_2_img'/>
                    <div className='supp_box_title'>דוד לוי</div>
                 
                    <div className='supp_box_text'>
                    מאבטח • קניון עזריאלי תל אביב
                    </div>
                </div>


                <div className='meavteah_box'>
                    <img src={eq_selct_1} className='eq_selct_1'/>
                    <img src={user_n_2} className='user_n_2_img'/>
                    <div className='supp_box_title'>דוד לוי</div>
                 
                    <div className='supp_box_text'>
                    מאבטח • קניון עזריאלי תל אביב
                    </div>
                </div>
                 <div className='meavteah_box'>
                    <img src={eq_selct_1} className='eq_selct_1'/>
                    <img src={user_n_2} className='user_n_2_img'/>
                    <div className='supp_box_title'>דוד לוי</div>
                 
                    <div className='supp_box_text'>
                    מאבטח • קניון עזריאלי תל אביב
                    </div>
                </div>
                 <div className='meavteah_box'>
                    <img src={eq_selct_1} className='eq_selct_1'/>
                    <img src={user_n_2} className='user_n_2_img'/>
                    <div className='supp_box_title'>דוד לוי</div>
                 
                    <div className='supp_box_text'>
                    מאבטח • קניון עזריאלי תל אביב
                    </div>
                </div>
                 <div className='meavteah_box'>
                    <img src={eq_selct_1} className='eq_selct_1'/>
                    <img src={user_n_2} className='user_n_2_img'/>
                    <div className='supp_box_title'>דוד לוי</div>
                 
                    <div className='supp_box_text'>
                    מאבטח • קניון עזריאלי תל אביב
                    </div>
                </div>
                 <div className='meavteah_box'>
                    <img src={eq_selct_1} className='eq_selct_1'/>
                    <img src={user_n_2} className='user_n_2_img'/>
                    <div className='supp_box_title'>דוד לוי</div>
                 
                    <div className='supp_box_text'>
                    מאבטח • קניון עזריאלי תל אביב
                    </div>
                </div>
                 <div className='meavteah_box'>
                    <img src={eq_selct_1} className='eq_selct_1'/>
                    <img src={user_n_2} className='user_n_2_img'/>
                    <div className='supp_box_title'>דוד לוי</div>
                 
                    <div className='supp_box_text'>
                    מאבטח • קניון עזריאלי תל אביב
                    </div>
                </div>
                 <div className='meavteah_box'>
                    <img src={eq_selct_1} className='eq_selct_1'/>
                    <img src={user_n_2} className='user_n_2_img'/>
                    <div className='supp_box_title'>דוד לוי</div>
                 
                    <div className='supp_box_text'>
                    מאבטח • קניון עזריאלי תל אביב
                    </div>
                </div>
                 <div className='meavteah_box'>
                    <img src={eq_selct_1} className='eq_selct_1'/>
                    <img src={user_n_2} className='user_n_2_img'/>
                    <div className='supp_box_title'>דוד לוי</div>
                 
                    <div className='supp_box_text'>
                    מאבטח • קניון עזריאלי תל אביב
                    </div>
                </div>
                 <div className='meavteah_box'>
                    <img src={eq_selct_1} className='eq_selct_1'/>
                    <img src={user_n_2} className='user_n_2_img'/>
                    <div className='supp_box_title'>דוד לוי</div>
                 
                    <div className='supp_box_text'>
                    מאבטח • קניון עזריאלי תל אביב
                    </div>
                </div>
                 <div className='meavteah_box'>
                    <img src={eq_selct_1} className='eq_selct_1'/>
                    <img src={user_n_2} className='user_n_2_img'/>
                    <div className='supp_box_title'>דוד לוי</div>
                 
                    <div className='supp_box_text'>
                    מאבטח • קניון עזריאלי תל אביב
                    </div>
                </div>
                 <div className='meavteah_box'>
                    <img src={eq_selct_1} className='eq_selct_1'/>
                    <img src={user_n_2} className='user_n_2_img'/>
                    <div className='supp_box_title'>דוד לוי</div>
                 
                    <div className='supp_box_text'>
                    מאבטח • קניון עזריאלי תל אביב
                    </div>
                </div>
                
            </div>

  
            <div className='eq_back_btn_cont'>
                <div className='eq_back_btn' onClick={()=>props.set_next_page_tr(1)}>חזור</div>
                <div className='eq_cont_btn_2' onClick={()=>props.set_next_page_tr(3)}>המשך</div>
            </div>

        </div>
        </>
  )
}


export default Tr_order_popup_2