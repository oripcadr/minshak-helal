
import './Worker_popup.css'

import p_details_1 from './assets/p_details_1.png'

import more_icon from './assets/more_icon.png'
import r_dot from './assets/r_dot.png'
import y_dot from './assets/y_dot.png'
import checked from './assets/checked.png'
import not_checked from './assets/not_checked.png'
import user_m_1 from './assets/user_m_1.png'
import { useState } from 'react'
// import { useState } from 'react'

function Worker_popup_7() {


  const [checked_1, set_checked_1] = useState(false);
  const [checked_2, set_checked_2] = useState(false);

  return (
    <>
        <div className='personal_d_cont_main'>
            <div className='personal_d_cont'>
                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>דגלי התראה</div>

                <div className='note_cont_box'>
                    <div className='note_cont_box_title'>דורש ריענון עזרה ראשונה מייד</div>
                    <div className='note_cont_box_subtitle'>נוצר בתאריך: 01/11/2024</div>

                    <div className='note_cont_box_t'>
                        <img src={r_dot} />
                        <div>גבוה</div>
                    </div>

                </div>


                <div className='note_cont_box_2'>
                    <div className='note_cont_box_title'>תדריך בטיחות יפוג בעוד 45 ימים</div>
                    <div className='note_cont_box_subtitle'>נוצר בתאריך: 20/11/2024</div>

                    <div className='note_cont_box_t'>
                        <img src={y_dot} />
                        <div>בינוני</div>
                    </div>

                </div>


            
            </div>

            <div className='personal_d_cont'>
                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>משימות פתוחות</div>

                <div className='note_cont_box'>
                    {checked_1?<img src={checked} className='checked_img' onClick={()=>set_checked_1(!checked_1)}/>:<img src={not_checked} className='checked_img' onClick={()=>set_checked_1(!checked_1)}/>}
                    <div className='note_cont_box_title'>לתאם ריענון עזרה ראשונה</div>
                    <div className='note_cont_box_subtitle'>תאריך יעד: 01/12/2024          אחראי: מנהל הכשרות</div>

                </div>

                <div className='note_cont_box_2'>
                    {checked_2?<img src={checked} className='checked_img' onClick={()=>set_checked_2(!checked_2)}/>:<img src={not_checked} className='checked_img' onClick={()=>set_checked_2(!checked_2)}/>}
                    <div className='note_cont_box_title'>לשלוח תזכורת לעדכון כתובת</div>
                    <div className='note_cont_box_subtitle'>תאריך יעד: 01/12/2024          אחראי: מנהל הכשרות</div>
                </div>
            </div>

        </div>

        <div className='personal_d_cont_main_2'>
            <img src={more_icon} className='w_more_icon'/>
            <img src={p_details_1} className='p_details_1'/>
            <div className='p_details_title'>הערות פנימיות</div>

            <div className='add_payment_btn_note'>הוסף הערה חדשה  +</div>

            <div className='inner_note_box_cont'>
                <div className='user_m_cont'>
                    <img src={user_m_1}/>
                    <div>יוסי כהן</div>
                </div>

                <div className='inner_note_box_date'>05/12/2024 14:30</div>

                <div className='inner_note_box_text'>המאבטח הגיע באיחור של 15 דקות. שוחח איתו והבהיר את החשיבות של הגעה בזמן.</div>
            </div>



            <div className='inner_note_box_cont'>
                <div className='user_m_cont'>
                    <img src={user_m_1}/>
                    <div>דניאל שמש</div>
                </div>

                <div className='inner_note_box_date'>05/12/2024 14:30</div>

                <div className='inner_note_box_text'>עודכן חוזה עבודה - העלאת שכר בסיסי החל מ-01/01/2025</div>
            </div>


            <div className='inner_note_box_cont'>
                <div className='user_m_cont'>
                    <img src={user_m_1}/>
                    <div>יוסי כהן</div>
                </div>

                <div className='inner_note_box_date'>05/12/2024 14:30</div>

                <div className='inner_note_box_text'>ביצועים מצוינים בריענון ירי - ציון 95. מומלץ להמשיך לתרגל</div>
            </div>


            <div className='inner_note_box_cont'>
                <div className='user_m_cont'>
                    <img src={user_m_1}/>
                    <div>דניאל שמש</div>
                </div>

                <div className='inner_note_box_date'>05/12/2024 14:30</div>

                <div className='inner_note_box_text'>עודכן חוזה עבודה - העלאת שכר בסיסי החל מ-01/01/2025</div>
            </div>


        </div>


        

    </>
  )
}

export default Worker_popup_7