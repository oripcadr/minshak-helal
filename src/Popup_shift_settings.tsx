import './Popup_shift_settings.css'


// import {  useState } from 'react'
import close_img from './assets/close.png'
import trash from './assets/trash.png'
import edit_icon from './assets/edit_icon.png'
import { useState } from 'react';

function Popup_shift_settings(props:any) {

   const [add_extra_event_popup, set_add_extra_event_popup] = useState(false);

   const [add_shift_popup, set_add_shift_popup] = useState(false);
   
   const [selected_t, set_selected_t] = useState(1);
    
  return (
   <><div className='layout'></div>
        <div className='eq_order_popup_cont'>
            <img src={close_img} className='close_img' onClick={()=>props.set_show_popup_shift_settings(false)}/>
            <div className='eq_p_title'>הגדרת תקני כוח אדם ואירועים חריגים</div>
          
            <div className='shift_settings_title'>
                מבנה משמרות יומי
            </div>

            <div className='add_shift_btn' onClick={()=>set_add_shift_popup(!add_shift_popup)}>+ הוספת משמרת</div>

            {add_shift_popup?<div className='add_shift_popup_cont'>
                <div className='extra_event_popup_cont_title'>הוספת משמרת</div>
                <div className='extra_event_popup_cont_subtitle'>זמני המשמרת</div>

                <div className='extra_event_title_cont'>
                    <div className='extra_event_title'>שם המשמרת</div>
                    <input type="text" placeholder='איך נקראת המשמרת?' className='extra_event_input_long'/>
                </div>

                <div className='extra_event_title_cont_main'>
                    <div className='extra_event_title_cont'>
                        <div className='extra_event_title'>שעת התחלה</div>
                        <input type="text"  className='extra_event_input_s'/>
                    </div>

                    <div className='extra_event_title_cont'>
                        <div className='extra_event_title'>שעת סיום</div>
                        <input type="text"  className='extra_event_input_s'/>
                    </div>
                </div>

                <div className='extra_event_popup_cont_subtitle'>מאבטחים</div>

                <div className='extra_event_title_cont'>
                    <div className='extra_event_title'>מספר מאבטחים נדרש</div>
                    <input type="text" className='extra_event_input_s' placeholder='5'/>
                </div>

                <div className='extra_event_popup_cont_subtitle'>צבע</div>

                <div className='extra_event_title_cont'>
                    <div className='g_color'></div>
                    <div className='r_color'></div>
                    <div className='b_color'></div>
                    <div className='o_color'></div>
                    <div className='p_color'></div>
                    <div className='y_color'></div>
                    <div className='w_color'></div>
                </div>

                <div className='add_event_extra_btn_cont'>
                    <div className='add_event_extra_btn'>יצירת משמרת</div>
                    <div className='cancel_event_btn' onClick={()=>set_add_shift_popup(false)}>ביטול</div>
                </div>
            </div>:<></>}

            <div className='time_line_cont'>
                <div className='time_line_item'>00:00</div>
                <div className='time_line_item'>03:00</div>
                <div className='time_line_item'>06:00</div>
                <div className='time_line_item'>09:00</div>
                <div className='time_line_item'>12:00</div>
                <div className='time_line_item'>15:00</div>
                <div className='time_line_item'>18:00</div>
                <div className='time_line_item'>21:00</div>
                <div className='time_line_item time_line_item_last'>00:00</div>
            </div>

            <div className='shift_time_line_cont'>
                <div className='shift_box_p'>
                    <div className='shift_box_p_title'>לילה</div>
                    <div className='shift_box_p_time'>22:00-6:00</div>
                    <div className='shift_box_p_count'>5 מאבטחים</div>
                </div>

                <div className='shift_box_g'>
                    <div className='shift_box_g_title'>בוקר</div>
                    <div className='shift_box_g_time'>06:00-15:00</div>
                    <div className='shift_box_g_count'>5 מאבטחים</div>
                </div>

                
                <div className='shift_box_o'>
                    <div className='shift_box_o_title'>צהרים</div>
                    <div className='shift_box_o_time'>15:00-22:00</div>
                    <div className='shift_box_o_count'>5 מאבטחים</div>
                </div>

                <div className='shift_box_p_2'>
                    <div className='shift_box_p_title'>לילה</div>
                    <div className='shift_box_p_time'>22:00-06:00</div>
                </div>

                <div className='shift_box_r'>
                    <div className='shift_box_r_title'>בוקר מוקדם</div>
                    <div className='shift_box_r_time'>3:00-12:00</div>
                    <div className='shift_box_r_count'>5 מאבטחים</div>
                </div>

                <div className='shift_box_b'>
                    <div className='shift_box_b_title'>בוקר מוקדם</div>
                    <div className='shift_box_b_time'>3:00-12:00</div>
                    <div className='shift_box_b_count'>5 מאבטחים</div>
                </div>

            </div>

            <div className='shift_settings_title'>
               אירועים מיוחדים ותגבור נקודתי
            </div>

            <div className='add_shift_btn add_shift_btn_2' onClick={()=>set_add_extra_event_popup(!add_extra_event_popup)}>+ הוספת אירוע</div>

            {add_extra_event_popup?<div className='extra_event_popup_cont'>
                <div className='extra_event_popup_cont_title'>הוספת אירוע תגבור חדש</div>

                <div className='extra_event_title'>שם האירוע / סיבת התגבור</div>
                <input type="text" placeholder='לדוגמה: הופעת קיץ, ביקור משלחת vip, אירוע תאגידי….' className='extra_event_input_long'/>

                <div className='extra_event_title'>פרטים נוספים</div>
                <textarea placeholder='תיאור קצר של הראירוע, נקודות חשובות, דגשים מיוחדים…' className='extra_event_textarea'></textarea>

                <div className='extra_event_input_cont'>
                    <div>
                        <div className='extra_event_title_in'>תאריך התחלה</div>
                        <input type="text" placeholder='בחירת תאריך' className='extra_event_input'/>
                    </div>

                    <div>
                        <div className='extra_event_title_in'>תאריך סיום</div>
                        <input type="text" placeholder='בחירת תאריך' className='extra_event_input'/>
                    </div>

                </div>

                    <div className='extra_event_input_cont'>
                        <div className='extra_event_input_cont_in'>
                        <div className='all_day_toggle'>
                            <div className={'allday_toggle_in '+ (selected_t==1?"allday_toggle_in_selected":"")} onClick={()=>set_selected_t(1)}></div>
                            <div className={'allday_toggle_in '+ (selected_t==2?"allday_toggle_in_selected":"")} onClick={()=>set_selected_t(2)}></div>
                        </div>

                        <div className='all_day_toggle_text'>אירוע לאורך כל היום (24 שעות)</div>
                        </div>
                    </div>

                      <div className='extra_event_input_cont'>
                    <div>
                        <div className='extra_event_title_in'>שעת התחלה</div>
                        <input type="text" placeholder='בחירת שעה' className='extra_event_input'/>
                    </div>

                    <div>
                        <div className='extra_event_title_in'>שעת סיום</div>
                        <input type="text" placeholder='בחירת שעה' className='extra_event_input'/>
                    </div>

                </div>

                 <div className='extra_event_input_cont'>
                    <div>
                        <div className='extra_event_title_in'>מספר מאבטחים נדרש</div>
                        <input type="text" placeholder='10' className='extra_event_input'/>
                    </div>
                    <div></div>

                </div>

                <div className='add_event_extra_btn_cont'>
                    <div className='add_event_extra_btn'>הוסף אירוע</div>
                    <div className='cancel_event_btn' onClick={()=>set_add_extra_event_popup(false)}>ביטול</div>
                </div>
            </div>:<></>}

            <div className='special_events_cont'>
                <div className='special_events_h'>שם האירוע</div>
                <div className='special_events_h'>תאריכים</div>
                <div className='special_events_h'>שעות רלוונטיות</div>
                <div className='special_events_h'>תקן נדרש</div>
            </div>

            <div className='special_events_cont'>
                <div className='special_events_r'>הופעת קיץ - רחבת כניסה</div>
                <div className='special_events_r'>15/08/2024</div>
                <div className='special_events_r'>18:00-23:59</div>
                <div className='special_events_r'>מאבטחים 25</div>
                <img src={edit_icon} className='special_events_edit'/>
                <img src={trash} className='special_events_trash'/>
               
            </div>

             <div className='special_events_cont'>
                <div className='special_events_r'>הופעת קיץ - רחבת כניסה</div>
                <div className='special_events_r'>15/08/2024</div>
                <div className='special_events_r'>18:00-23:59</div>
                <div className='special_events_r'>מאבטחים 25</div>
                <img src={edit_icon} className='special_events_edit'/>
                <img src={trash} className='special_events_trash'/>
               
            </div>
             <div className='special_events_cont'>
                <div className='special_events_r'>הופעת קיץ - רחבת כניסה</div>
                <div className='special_events_r'>15/08/2024</div>
                <div className='special_events_r'>18:00-23:59</div>
                <div className='special_events_r'>מאבטחים 25</div>
                <img src={edit_icon} className='special_events_edit'/>
                <img src={trash} className='special_events_trash'/>
               
            </div>


        </div>
        </>
  )
}


export default Popup_shift_settings