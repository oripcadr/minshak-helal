 
 import './First_report.css'


// import {  useState } from 'react'
import close_img from './assets/close.png'
import exclamation_w from './assets/exclamation_w.png'
import rep_1 from './assets/rep_1.png'
// import pencil_eq from './assets/pencil_eq.png'
function First_report(props:any) {

//   const [selected_tab, set_selected_tab] = useState(1);
//   const [selected_tab_1, set_selected_tab_1] = useState(1);
    
  return (
        <><div className='layout'></div>
        <div className='eq_order_popup_cont_f'>
            <img src={close_img} className='close_img' onClick={()=>props.set_show_first_report(false)}/>
            <div className='eq_p_title eq_p_title_f'>דיווח ראשוני</div>
            <img src={exclamation_w} className='exclamation_w_f' />

            <div className='event_report_cont'>
                <div className='rep_1_cont'>
                    <img src={rep_1} />
                    <div className='event_report_title'>פרטי אירוע</div>
                </div>

                <div className='rep_input_title_cont_main'>
                    <div className='rep_input_title_cont'>
                        <div className='rep_input_title'>מקבל הדיווח</div>
                        <input type="text" placeholder='זה המפקח ממשרד הבט״פ' className='rep_input'/>
                    </div>

                    <div className='rep_input_title_cont'>
                        <div className='rep_input_title'>מדווח</div>
                        <input type="text" className='rep_input'/>
                    </div>


                    <div className='rep_input_title_cont'>
                        <div className='rep_input_title'>מדווח</div>
                        <input type="text" className='rep_input'/>
                    </div>

                </div>


                
                <div className='rep_input_title_cont_main'>
                    <div className='rep_input_title_cont'>
                        <div className='rep_input_title '>מקום האירוע</div>
                        <input type="text" className='rep_input rep_input_title_long'/>
                    </div>

                    <div className='rep_input_title_cont'>
                        <div className='rep_input_title'>תאריך האירוע</div>
                        <input type="text" className='rep_input'/>
                    </div>
                </div>


                <div className='rep_input_title_cont_main'>
                    <div className='rep_input_title_cont'>
                        <div className='rep_input_title '>מה קרה?</div>
                        {/* <input type="text" className='rep_input rep_input_title_long'/> */}
                        <textarea className="report_desc_cont" placeholder='תאר בפירוט את האירוע, כולל רצף אירועים, גורמים מעורבים, ותוצאות'></textarea>
                    </div>
                </div>


            </div>

            <div className='report_sent_cont'>
                <div className='rep_1_cont'>
                    <img src={rep_1} />
                    <div className='event_report_title'>הדיווח יישלח ל</div>
                </div>

                <div className='report_to_btn_cont'>
                    <div className='report_to_btn'>
                        <input type="checkbox" />
                        <div>משטרת ישראל</div>
                    </div>

                    <div className='report_to_btn'>
                        <input type="checkbox" />
                        <div>מפקח המחוז</div>
                    </div>

                    <div className='report_to_btn'>
                        <input type="checkbox" />
                        <div>מייל פניות מארגונים</div>
                    </div>

                </div>
            </div>

            <div className='send_report_cont'>
                <div className='send_report_btn'>שלח דיווח</div>
                <div className='cancel_report_btn' onClick={()=>props.set_show_first_report(false)}>ביטול</div>

                <div className='draft_report_btn'>שמור כטיוטה</div>
            </div>

         </div>
        </>

  )

}

export default First_report
