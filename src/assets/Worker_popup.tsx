
import './Worker_popup.css'
import user_b from './assets/user_b.png'
import msg_icon from './assets/msg_icon.png'
import phone_icon from './assets/phone_icon.png'
import p_details_1 from './assets/p_details_1.png'
import p_details_2 from './assets/p_details_2.png'
import more_icon from './assets/more_icon.png'
import p_details_3 from './assets/p_details_3.png'
import download_icon from './assets/download_icon.png'
import g_dot from './assets/g_dot.png'
import y_dot from './assets/y_dot.png'
import r_dot from './assets/r_dot.png'
import p_details_4 from './assets/p_details_4.png'
import time_grid from './assets/time_grid.png'
import { useState } from 'react'
import Cert_popup from './Cert_popup'


function Worker_popup() {

  const [show_cert_popup, set_show_cert_popup] = useState(false);

  return (
    <>
    <div className='worker_popup_cont'>
        <div className='worker_popup_header'>
            <img src={user_b} className='user_b'/>    
            <div className='user_b_text_cont'>
                <div className='user_b_text_main'>נועה ברק</div>
                <div className='user_b_text_submain'>אחמש״ית</div>
                <div className='user_b_text_submain'>סניף: תל אביב</div>
            </div>    
            
            <img src={msg_icon} />
            <img src={phone_icon} />

        </div>

        <div className='worker_popup_top_area'>
            <div className='worker_popup_top_area_right'>
                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>פרטים אישיים</div>

                <div className='details_cont details_cont_first'>
                    <div className='details_cont_r'>מספר טלפון:</div>   
                    <div className='details_cont_b'>050-1234567</div> 
                </div>

                <div className='details_cont'>
                    <div className='details_cont_r'>כתובת:</div>   
                    <div className='details_cont_b'>שפרינצק 30, דירה 12, חולון</div> 
                </div>

                <div className='details_cont'>
                    <div className='details_cont_r'>ותק:</div>   
                    <div className='details_cont_b'>3 שנים ו-4 חודשים</div> 
                </div>

            </div>

            <div className='worker_popup_top_area_right'>
                  <img src={more_icon} className='w_more_icon'/>
                  <img src={p_details_2} className='p_details_1'/>
                  <div className='p_details_title'>שיוך ותפקידים</div>


                <div className='details_cont details_cont_first'>
                    <div className='details_cont_r'>תפקיד נוכחי:</div>   
                    <div className='details_cont_b'>אחמ״ש</div> 
                </div>

                <div className='details_cont'>
                    <div className='details_cont_r'>יחידה/סניף:</div>   
                    <div className='details_cont_b'>סניף מרכז תל אביב</div> 
                </div>

                <div className='details_cont'>
                    <div className='details_cont_r'>מנהל ישיר:</div>   
                    <div className='details_cont_b'>יוסי כהן</div> 
                </div>

            </div>

        </div>

        <div className='worker_popup_mid_area'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_3} className='p_details_1'/>
                <div className='p_details_title'>מסמכים ורישיונות</div>

                <div className='docs_cont'>
                    <div className='docs_box' onClick={()=>set_show_cert_popup(!show_cert_popup)}>
                        <img src={download_icon} className='download_icon'/>
                        <div className='docs_box_text'> (מס׳ 20387) תעודת הרשאה</div>
                        <div className='docs_box_subtext'>בתוקף עד 06/2026
                            <img src={g_dot} />

                        </div>

                    </div>


                    <div className='docs_box'>

                          <img src={download_icon} className='download_icon'/>
                          <div className='docs_box_text'> (מס׳ 20387) תעודת הרשאה</div>

                           <div className='docs_box_subtext'>פג בעוד 7 ימים
                            <img src={y_dot} />

                        </div>

                    </div>


                    <div className='docs_box'>

                            <img src={download_icon} className='download_icon'/>
                            <div className='docs_box_text'>ריענון ירי</div>

                            <div className='docs_box_subtext'> פג לפני חודש
                                <img src={r_dot} />

                            </div>

                    </div>

                </div>
        </div>

        <div className='worker_popup_bottom_area'>
                
            <img src={p_details_4} className='p_details_1'/>
            <div className='p_details_title'>שעון נוכחות</div>

            <img src={time_grid} className='time_grid'/>

        </div>
    </div>

      {show_cert_popup?<Cert_popup set_show_cert_popup={set_show_cert_popup}></Cert_popup>:<></>}
    </>
  )
}

export default Worker_popup