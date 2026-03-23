import './Popup_forms.css'


import close from './assets/close.png'
import more_icon from './assets/more_icon.png'
import p_details_1 from './assets/p_details_1.png'
import calendar_f from './assets/calendar_f.png'
import badge from './assets/badge.png'

import user_m_1 from './assets/user_m_1.png'
import { useEffect, useState } from 'react'
import axios from 'axios'


// import { useState } from 'react'

function Popup_forms(props:any) {


  return (
    <>
      <div className='worker_popup_cont sup_report_pupop eq_pupop' >
        <img src={close} className='close_icon' onClick={()=>props.set_popup_form(false)}/>
        <div className='worker_popup_header_form'>
           
            <div className='user_b_text_cont'>
                <div className='user_b_text_main_tachmoshet'>הדרכת בטיחות בנשק - רבעון א׳</div>

                <div className='calendar_f_cont_main'>
                    <div className='calendar_f_cont'>
                        <img src={calendar_f} />
                        <div className='forms_header_sub'>תאריך יעד: 20.3.2026</div>
                    </div>
                    <div className='calendar_f_cont'>
                        <img src={badge} />
                        <div className='forms_header_sub'>ציון עובר: 70 נקודות</div>
                    </div>
                </div>

            </div>    
        </div>

        <div className='move_form_btn_cont'>
       
            <div className='export_btn'>ייצוא </div>
        </div>


        <div className='cout_form_box_cont'>
            <div className='cout_form_box'>
                <div>תפוצה</div>
                <div className='eq_count_valid_form'>70</div>
            </div>

            <div className='cout_form_box'>
                <div>הושלם</div>
                <div className='eq_count_valid'>70</div>
            </div>

            <div className='cout_form_box'>
                <div>באיחור</div>
                <div className='eq_count_takul'>2</div>
            </div>

            
            <div className='cout_form_box'>
                <div>ממוצע ציון</div>
                <div className='eq_count_in_use'>70</div>
            </div>

        </div>

        <div>
           
            <div className='top_btns_cont top_btns_cont_form'>
                 <input type="text" placeholder='חיפוש לפי שם או אתר' className='search_form_input'/>

                <div className='top_btn'>הכל</div>
                <div className='top_btn'>הושלם</div>
                <div className='top_btn'>מאבטחים</div>
                <div className='top_btn'>סיירים</div>
            </div>

        </div>

         <div className='tachmoshet_info_cont eq_places_cont form_places_cont'>

            <img src={more_icon} className='w_more_icon'/>
            <img src={p_details_1} className='p_details_1'/>
            <div className='p_details_title'>מיקומים</div>
            

            <div className='table_header_cont table_header_cont_eq_in'>
                <div className='table_header table_row_forms_m'>מאבטח</div>
           
                <div className='table_header'>סטטוס</div>
                <div className='table_header'>ציון</div>

                <div className='table_header'>תאריך השלמה</div>
                <div className='table_header'>זמן ביצוע</div>

            </div>


            <div className='table_header_cont' >
                    
                <div  className='table_row_r table_row_forms_m'><img src={user_m_1} className='user_s' />
                    <div>
                        <div className='forms_name_b'>שירה סמוחה</div>
                        <div className='forms_name_r'>אחמ״ש - קניון רמת אביב</div>
                    </div>
                </div>

                <div className='table_row_r'>
                    <div className='form_done_staus'>הושלם</div>
                </div>

                <div className='table_row_r'>
                    <div className='form_done_grade'>90</div>
                </div>
                      

                <div  className='table_row_r form_center'>
                    <div>
                        <div className='forms_name_b_f'>14.3.26</div>
                        <div className='forms_name_r '>10:15</div>
                    </div>
                </div>
      
                <div  className='table_row_r form_center'>
                    <div className='forms_name_b_f_cont'>
                        <div className='forms_name_b_f'>12 דקות</div>
                    </div>
                </div>
                    
           
            </div>

                 <div className='table_header_cont' >
                    
                <div  className='table_row_r table_row_forms_m'><img src={user_m_1} className='user_s' />
                    <div>
                        <div className='forms_name_b'>שירה סמוחה</div>
                        <div className='forms_name_r'>אחמ״ש - קניון רמת אביב</div>
                    </div>
                </div>

                <div className='table_row_r'>
                    <div className='form_done_staus'>הושלם</div>
                </div>

                <div className='table_row_r'>
                    <div className='form_done_grade'>90</div>
                </div>
                      

                <div  className='table_row_r form_center'>
                    <div>
                        <div className='forms_name_b_f'>14.3.26</div>
                        <div className='forms_name_r '>10:15</div>
                    </div>
                </div>
      
                <div  className='table_row_r form_center'>
                    <div className='forms_name_b_f_cont'>
                        <div className='forms_name_b_f'>12 דקות</div>
                    </div>
                </div>
                    
           
            </div>

                 <div className='table_header_cont' >
                    
                <div  className='table_row_r table_row_forms_m'><img src={user_m_1} className='user_s' />
                    <div>
                        <div className='forms_name_b'>שירה סמוחה</div>
                        <div className='forms_name_r'>אחמ״ש - קניון רמת אביב</div>
                    </div>
                </div>

                <div className='table_row_r'>
                    <div className='form_done_staus'>הושלם</div>
                </div>

                <div className='table_row_r'>
                    <div className='form_done_grade'>90</div>
                </div>
                      

                <div  className='table_row_r form_center'>
                    <div>
                        <div className='forms_name_b_f'>14.3.26</div>
                        <div className='forms_name_r '>10:15</div>
                    </div>
                </div>
      
                <div  className='table_row_r form_center'>
                    <div className='forms_name_b_f_cont'>
                        <div className='forms_name_b_f'>12 דקות</div>
                    </div>
                </div>
                    
           
            </div>

                 <div className='table_header_cont' >
                    
                <div  className='table_row_r table_row_forms_m'><img src={user_m_1} className='user_s' />
                    <div>
                        <div className='forms_name_b'>שירה סמוחה</div>
                        <div className='forms_name_r'>אחמ״ש - קניון רמת אביב</div>
                    </div>
                </div>

                <div className='table_row_r'>
                    <div className='form_done_staus'>הושלם</div>
                </div>

                <div className='table_row_r'>
                    <div className='form_done_grade'>90</div>
                </div>
                      

                <div  className='table_row_r form_center'>
                    <div>
                        <div className='forms_name_b_f'>14.3.26</div>
                        <div className='forms_name_r '>10:15</div>
                    </div>
                </div>
      
                <div  className='table_row_r form_center'>
                    <div className='forms_name_b_f_cont'>
                        <div className='forms_name_b_f'>12 דקות</div>
                    </div>
                </div>
                    
           
            </div>

                 <div className='table_header_cont' >
                    
                <div  className='table_row_r table_row_forms_m'><img src={user_m_1} className='user_s' />
                    <div>
                        <div className='forms_name_b'>שירה סמוחה</div>
                        <div className='forms_name_r'>אחמ״ש - קניון רמת אביב</div>
                    </div>
                </div>

                <div className='table_row_r'>
                    <div className='form_done_staus'>הושלם</div>
                </div>

                <div className='table_row_r'>
                    <div className='form_done_grade'>90</div>
                </div>
                      

                <div  className='table_row_r form_center'>
                    <div>
                        <div className='forms_name_b_f'>14.3.26</div>
                        <div className='forms_name_r '>10:15</div>
                    </div>
                </div>
      
                <div  className='table_row_r form_center'>
                    <div className='forms_name_b_f_cont'>
                        <div className='forms_name_b_f'>12 דקות</div>
                    </div>
                </div>
                    
           
            </div>


                 

      

        </div>

      </div>
    </>
  )}


export default Popup_forms