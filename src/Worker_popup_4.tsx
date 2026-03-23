
import './Worker_popup.css'

import p_details_1 from './assets/p_details_1.png'

import more_icon from './assets/more_icon.png'
import umbrella from './assets/umbrella.png'
import replace from './assets/replace.png'
import y_dot from './assets/y_dot.png'
import g_dot from './assets/g_dot.png'
import location from './assets/location.png'
import time_grid from './assets/time_grid.png'
import p_details_4 from './assets/p_details_4.png'

// import { useState } from 'react'

function Worker_popup_4() {

//  const [show_upload_doc_popup, set_show_upload_doc_popup] = useState(false);

  return (
    <>
        <div className='add_mishmeret_btn'>הוסף משמרת</div>

         <div className='personal_d_cont_main personal_d_cont_main_mish'>
            <div className='personal_d_cont'>
                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>משמרות קרובות</div>

                <div className='mish_box_cont_main'>
                    <div className='mish_box_cont'>
                        <div className='mish_box_date'>7/12</div>
                        <div className='mish_box_time_cont'>
                            <div className='mish_box_time'>
                                8:00-16:00
                            </div>

                            <div className='mish_box_loc'>
                                <img src={location} className='location'/>
                                קניון דיזנגוף 
                            </div>
                        </div>

                        <div className='approve_cont'>
                            <img src={g_dot} />
                            מאושר
                        </div>
                    </div>

                    <div className='mish_box_cont'>
                        <div className='mish_box_date'>7/12</div>
                        <div className='mish_box_time_cont'>
                            <div className='mish_box_time'>
                                8:00-16:00
                            </div>

                            <div className='mish_box_loc'>
                                <img src={location} className='location'/>
                                קניון דיזנגוף 
                            </div>
                        </div>

                        <div className='approve_cont'>
                            <img src={g_dot} />
                            מאושר
                        </div>
                    </div>

                    <div className='mish_box_cont'>
                        <div className='mish_box_date'>7/12</div>
                        <div className='mish_box_time_cont'>
                            <div className='mish_box_time'>
                                8:00-16:00
                            </div>

                            <div className='mish_box_loc'>
                                <img src={location} className='location'/>
                                קניון דיזנגוף 
                            </div>
                        </div>

                        <div className='approve_cont'>
                            <img src={y_dot} />
                            ממתין לאישור
                        </div>
                    </div>


                </div>

            </div>


            <div className='personal_d_cont'>
                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>בקשות</div>

                <div className='mish_box_cont_main'>
                    <div className='mish_box_ask_cont'>
                        <img src={replace} className='replace_icon'/>

                        <div className='time_place_cont'>
                            <div>7/12</div>
                            <div>8:00-16:00</div>
                            <div className='mish_box_loc'>
                                 <img src={location} className='location'/>
                                קניון דיזנגוף</div>
                        </div>

                        <div className='box_ask_text'>בקשת החלפת משמרת עם יוסי אברהם</div>

                    </div>
                     <div className='mish_box_ask_cont'>

                        <img src={umbrella} className='replace_icon'/>

                        <div className='time_place_cont'>
                            <div>7/12</div>
                            <div>8:00-16:00</div>
                            <div className='mish_box_loc'>
                                 <img src={location} className='location'/>
                                קניון דיזנגוף</div>
                        </div>

                        <div className='box_ask_text'>בקשה לחופשה בינואר</div>
                    </div>

                </div>

            </div>
        </div>

        
        <div className='worker_popup_bottom_area'>
                
            <img src={p_details_4} className='p_details_1'/>
            <div className='p_details_title'>שעון נוכחות</div>

            <div className='date_time_cont'>
                <div>21/8-28/8</div>
                <div>28:30 שעות</div>
            </div>


            <img src={time_grid} className='time_grid'/>

        </div>
    
    </>
  )
}

export default Worker_popup_4