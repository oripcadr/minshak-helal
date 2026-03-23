import './Popup_shift.css'

import close from './assets/close.png'

import user_m_1 from './assets/user_m_1.png'

import site_s from './assets/site_s.png'
import add_sup_icon from './assets/add_sup_icon.png'

// import { useState } from 'react'

function Popup_shift(props:any) {

    // const [show_kaliber_popup, set_show_kaliber_popup] = useState(false); 
    // const [show_worker_popup, set_show_worker_popup] = useState(false);

  return (
    <>
      <div className='worker_popup_cont sup_pupop' >
        <img src={close} className='close_icon' onClick={()=>props.set_show_popup_shift(false)}/>
        <div className='worker_popup_header'>
            <img src={add_sup_icon} className='user_b'/>    
            <div className='user_b_text_cont'>
                <div className='user_b_text_main_tachmoshet'>איוש משמרות</div>
                <div className='text_sub_tachmoshet'>17 משמרות לא מאויישות</div>
            </div>    
        </div>

        <div className='set_to_all_shift_cont'>
            <div className='set_to_all_shift'>שיבוץ אוטומטי לכל האתרים</div>
            <div className='set_to_k_shift'>שיבוץ אוטומטי לקניון עזריאלי</div>
        </div>

        <div className='site_s_cont_main'>
            <div className='site_s_cont'>
                <img src={site_s} />   
                קניון עזריאלי
                <div className='site_s_cont_count'>12</div>    
            </div>

            <div className='site_s_cont'>
                <img src={site_s} />   
                מתחם הבורסה
                <div className='site_s_cont_count'>12</div>    
            </div>

            <div className='site_s_cont'>
                <img src={site_s} />   
                בנייני הקרייה
                <div className='site_s_cont_count'>12</div>    
            </div>

        </div>

        <div className='popup_shift_box'>
            <div className='popup_shift_box_title_cont'>
                <div className='popup_shift_box_title'>29 אוקטובר 2025</div>
                <div className='popup_shift_box_title'>משמרת בוקר 06:00-14:00</div>
            </div>

            <div className='popup_shift_box_title_sub'>פנויים לשיבוץ</div>

            <div className='user_m_box_cont'>
                <div className='user_m_box'>
                    <img src={user_m_1} />
                    <div>שלומי שלומייביץ׳</div>
                </div>

                 <div className='user_m_box'>
                    <img src={user_m_1} />
                    <div>שלומי שלומייביץ׳</div>
                </div>

                 <div className='user_m_box'>
                    <img src={user_m_1} />
                    <div>שלומי שלומייביץ׳</div>
                </div>

                 <div className='user_m_box'>
                    <img src={user_m_1} />
                    <div>שלומי שלומייביץ׳</div>
                </div>

                 <div className='user_m_box'>
                    <img src={user_m_1} />
                    <div>שלומי שלומייביץ׳</div>
                </div>

                 <div className='user_m_box'>
                    <img src={user_m_1} />
                    <div>שלומי שלומייביץ׳</div>
                </div>

            </div>

        </div>

    <div className='popup_shift_box'>
            <div className='popup_shift_box_title_cont'>
                <div className='popup_shift_box_title'>29 אוקטובר 2025</div>
                <div className='popup_shift_box_title'>משמרת בוקר 06:00-14:00</div>
            </div>

            <div className='popup_shift_box_title_sub'>פנויים לשיבוץ</div>

            <div className='user_m_box_cont'>
                <div className='user_m_box'>
                    <img src={user_m_1} />
                    <div>שלומי שלומייביץ׳</div>
                </div>

                 <div className='user_m_box'>
                    <img src={user_m_1} />
                    <div>שלומי שלומייביץ׳</div>
                </div>

                 <div className='user_m_box'>
                    <img src={user_m_1} />
                    <div>שלומי שלומייביץ׳</div>
                </div>

                 <div className='user_m_box'>
                    <img src={user_m_1} />
                    <div>שלומי שלומייביץ׳</div>
                </div>

                 <div className='user_m_box'>
                    <img src={user_m_1} />
                    <div>שלומי שלומייביץ׳</div>
                </div>

                 <div className='user_m_box'>
                    <img src={user_m_1} />
                    <div>שלומי שלומייביץ׳</div>
                </div>

            </div>

        </div>


            <div className='popup_shift_box'>
            <div className='popup_shift_box_title_cont'>
                <div className='popup_shift_box_title'>29 אוקטובר 2025</div>
                <div className='popup_shift_box_title'>משמרת בוקר 06:00-14:00</div>
            </div>

            <div className='popup_shift_box_title_sub'>פנויים לשיבוץ</div>

            <div className='user_m_box_cont'>
                <div className='user_m_box'>
                    <img src={user_m_1} />
                    <div>שלומי שלומייביץ׳</div>
                </div>

                 <div className='user_m_box'>
                    <img src={user_m_1} />
                    <div>שלומי שלומייביץ׳</div>
                </div>

                 <div className='user_m_box'>
                    <img src={user_m_1} />
                    <div>שלומי שלומייביץ׳</div>
                </div>

                 <div className='user_m_box'>
                    <img src={user_m_1} />
                    <div>שלומי שלומייביץ׳</div>
                </div>

                 <div className='user_m_box'>
                    <img src={user_m_1} />
                    <div>שלומי שלומייביץ׳</div>
                </div>

                 <div className='user_m_box'>
                    <img src={user_m_1} />
                    <div>שלומי שלומייביץ׳</div>
                </div>

            </div>

        </div>


      </div>
    </>
  )}


export default Popup_shift