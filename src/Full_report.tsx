 
 import './Full_report.css'


// import {  useState } from 'react'
import close_img from './assets/close.png'
import exclamation_w from './assets/exclamation_w.png'
import rep_1 from './assets/rep_1.png'
import m_u_1 from './assets/m_u_1.png'
import upload_img from './assets/upload_img.png'
import file_d_1 from './assets/file_d_1.png'
import file_d_2 from './assets/file_d_2.png'

function Full_report(props:any) {

//   const [selected_tab, set_selected_tab] = useState(1);
//   const [selected_tab_1, set_selected_tab_1] = useState(1);
    
  return (
        <><div className='layout_full'></div>
        <div className='eq_order_popup_cont_full'>
            <img src={close_img} className='close_img' onClick={()=>props.set_show_first_report(false)}/>
            <div className='eq_p_title eq_p_title_f'>דוח אירוע</div>
            <img src={exclamation_w} className='exclamation_w_f' />

            <div className='event_report_cont_full'>
                <div className='rep_1_cont'>
                    <img src={rep_1} />
                    <div className='event_report_title'>פרטי אירוע</div>
                </div>


                
                <div className='rep_input_title_cont_main'>
                    <div className='rep_input_title_cont'>
                        <div className='rep_input_title'>סוג אירוע</div>
                        {/* <input type="text" className='rep_input'/> */}

                        <select className='rep_select'>
                            <option>בחר סוג אירוע</option>
                            <option>חשד לגניבה</option>
                            <option>פריצה לאתר</option>
                            <option>אדם חשוד</option>
                            <option>עימות פיזי</option>
                            <option>נזק לרכוש</option>
                            <option>שריפה</option>
                            <option>אירוע רפואי</option>
                            <option>אירוע נשק</option>
                        </select>

                     
                    </div>


                    <div className='rep_input_title_cont'>
                        <div className='rep_input_title '>מקום האירוע</div>
                        <input type="text" className='rep_input rep_input_title_long'/>
                    </div>

            
                </div>



                <div className='rep_input_title_cont_main'>
                    <div  className='rep_input_title_cont'>
                        <div className='rep_input_title'>שעת התחלה</div>
                        <input type="time" className='time_input'/>
                    </div>

                    <div  className='rep_input_title_cont'>
                        <div className='rep_input_title'>שעת סיום</div>
                        <input type="time" className='time_input'/>
                    </div>

                    <div  className='rep_input_title_cont'>
                        <div className='rep_input_title'>רמת חומרה</div>
                        <div className='steps_cont'>
                            <div className='step_1'>קלה</div>
                            <div className='step_2'>בינונית</div>
                            <div className='step_3'>קשה</div>
                        </div>
                    </div>
                    
                    <div className='rep_input_title_cont'>
                        <div className='rep_input_title'>נשק מעורב</div>
                          <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                    </div>
                    

                </div>

            </div>


            <div className='event_report_cont_full_2'>

                <div className='rep_1_cont'>
                    <img src={rep_1} />
                    <div className='event_report_title'>תיאור האירוע</div>
                </div>

                  <div className='rep_input_title_cont_main'>
                    <div className='rep_input_title_cont'>
                        <div className='rep_input_title '>מה קרה?</div>
                        {/* <input type="text" className='rep_input rep_input_title_long'/> */}
                        <textarea className="report_desc_cont_full" placeholder='תאר בפירוט את האירוע, כולל רצף אירועים, גורמים מעורבים, ותוצאות'></textarea>
                    </div>
                </div>

                <div className='rep_input_title_cont_main'>
                    <div className='rep_input_title_cont'>
                        <div className='rep_input_title '>פעולות מיידיות שננקטו</div>
                        {/* <input type="text" className='rep_input rep_input_title_long'/> */}
                        <textarea className="report_desc_cont_full" placeholder='פרט את הפעולות שננקטו במקום - למשל: הפרדת צדדים, קריאה למשטרה, עזרה ראשונה וכו’'></textarea>
                    </div>
                </div>




            </div>


            <div className='event_report_cont_full_3'>

                <div className='rep_1_cont'>
                    <img src={rep_1} />
                    <div className='event_report_title'>גורמים מעורבים</div>
                </div>

                <div className='rep_input_title_cont_main'>
                    <div className='rep_input_title_cont'>
                        <div className='rep_input_title '>מאבטחים מעורבים</div>
                        <input type="text" className='search_meavteah' placeholder='חיפוש עובד לפי שם, תתפקיד, סניף, מסט״ב…'/>
                    </div>
                </div>

                 <div className='rep_input_title_cont_main'>
                    <div className='m_u_cont_main'>
                        <div className='m_u_cont'>
                            <img src={m_u_1} />
                            <div className='m_u_text'>שלומי שלומייביץ׳</div>
                        </div>

                         <div className='m_u_cont'>
                            <img src={m_u_1} />
                            <div className='m_u_text'>שלומי שלומייביץ׳</div>
                        </div>
                         <div className='m_u_cont'>
                            <img src={m_u_1} />
                            <div className='m_u_text'>שלומי שלומייביץ׳</div>
                        </div>
                         <div className='m_u_cont'>
                            <img src={m_u_1} />
                            <div className='m_u_text'>שלומי שלומייביץ׳</div>
                        </div>
                         <div className='m_u_cont'>
                            <img src={m_u_1} />
                            <div className='m_u_text'>שלומי שלומייביץ׳</div>
                        </div>
                         <div className='m_u_cont'>
                            <img src={m_u_1} />
                            <div className='m_u_text'>שלומי שלומייביץ׳</div>
                        </div>
                         <div className='m_u_cont'>
                            <img src={m_u_1} />
                            <div className='m_u_text'>שלומי שלומייביץ׳</div>
                        </div>
                         <div className='m_u_cont'>
                            <img src={m_u_1} />
                            <div className='m_u_text'>שלומי שלומייביץ׳</div>
                        </div>
                         <div className='m_u_cont'>
                            <img src={m_u_1} />
                            <div className='m_u_text'>שלומי שלומייביץ׳</div>
                        </div>
                         <div className='m_u_cont'>
                            <img src={m_u_1} />
                            <div className='m_u_text'>שלומי שלומייביץ׳</div>
                        </div>
                         <div className='m_u_cont'>
                            <img src={m_u_1} />
                            <div className='m_u_text'>שלומי שלומייביץ׳</div>
                        </div>
                         <div className='m_u_cont'>
                            <img src={m_u_1} />
                            <div className='m_u_text'>שלומי שלומייביץ׳</div>
                        </div>
                         <div className='m_u_cont'>
                            <img src={m_u_1} />
                            <div className='m_u_text'>שלומי שלומייביץ׳</div>
                        </div>
                         <div className='m_u_cont'>
                            <img src={m_u_1} />
                            <div className='m_u_text'>שלומי שלומייביץ׳</div>
                        </div>
                         <div className='m_u_cont'>
                            <img src={m_u_1} />
                            <div className='m_u_text'>שלומי שלומייביץ׳</div>
                        </div>
                         <div className='m_u_cont'>
                            <img src={m_u_1} />
                            <div className='m_u_text'>שלומי שלומייביץ׳</div>
                        </div>
                         <div className='m_u_cont'>
                            <img src={m_u_1} />
                            <div className='m_u_text'>שלומי שלומייביץ׳</div>
                        </div>
                         <div className='m_u_cont'>
                            <img src={m_u_1} />
                            <div className='m_u_text'>שלומי שלומייביץ׳</div>
                        </div>
                         <div className='m_u_cont'>
                            <img src={m_u_1} />
                            <div className='m_u_text'>שלומי שלומייביץ׳</div>
                        </div>
                         <div className='m_u_cont'>
                            <img src={m_u_1} />
                            <div className='m_u_text'>שלומי שלומייביץ׳</div>
                        </div>

                    </div>
                </div>


                <div className='rep_input_title_cont_main'>
                    <div className='rep_input_title_cont'>
                        <div className='rep_input_title '>אזרחים / גורמים חיצוניים</div>
                        {/* <input type="text" className='rep_input rep_input_title_long'/> */}
                        <textarea className="report_desc_cont_full" placeholder='פרט שמות, תפקידים או תיאורים של גורמים חיצוניים שהיו מעורבים'></textarea>
                    </div>
                </div>




                <div className='rep_input_title_cont_main'>
                    <div className='rep_input_title_cont'>
                        <div className='rep_input_title '>נפגעים / פציעות?</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>

                        {/* <input type="text" className='rep_input rep_input_title_long'/> */}
                        <textarea className="report_desc_cont_full" placeholder='פרט סוג פציעות, חומרה, וטיפול שניתן'></textarea>
                    </div>
                </div>

            </div>

            <div className='report_sent_cont'>
                <div className='rep_1_cont'>
                    <img src={rep_1} />
                    <div className='event_report_title'>דיווח לראשויות</div>
                </div>

                <div className='report_to_btn_cont'>
                    <div className='report_to_btn'>
                        <input type="checkbox" />
                        <div>המשטרה עודכנה</div>
                    </div>

                    <div className='report_to_btn report_to_btn_l'>
                        <input type="checkbox" />
                        <div>שירותי חירום הוזעקו (מד״א, כיבוי אש)</div>
                    </div>

                    <div className='report_to_btn'>
                        <input type="checkbox" />
                        <div>הנהלה עודכנה</div>
                    </div>

                </div>
            </div>


             <div className='event_report_cont_full_4'>

                <div className='rep_1_cont'>
                    <img src={rep_1} />
                    <div className='event_report_title'>קבצים מצורפים</div>
                </div>

                <div className='upload_img_cont_main'>
                    <div className='upload_img_cont'>
                        <img src={upload_img} className='upload_img'/>
                        <div className='upload_img_text'>גרור קבצים לכאן או לחץ להעלאה</div>
                    </div>

                    <div >
                        <div className='file_d_cont'>
                            <div className='file_d_text'>צילום_זירת_האירוע_מרחוק.jpg</div>
                            <img src={file_d_1} />
                            <img src={file_d_2} />
                        </div>
                        
                        <div className='file_d_cont file_d_cont_2'>
                            <div className='file_d_text'>צילום_זירת_האירוע_מרחוק.jpg</div>
                            <img src={file_d_1} />
                            <img src={file_d_2} />
                        </div>

                        <div className='file_d_cont'>
                            <div className='file_d_text'>צילום_זירת_האירוע_מרחוק.jpg</div>
                            <img src={file_d_1} />
                            <img src={file_d_2} />
                        </div>

                        <div className='file_d_cont file_d_cont_2'>
                            <div className='file_d_text'>צילום_זירת_האירוע_מרחוק.jpg</div>
                            <img src={file_d_1} />
                            <img src={file_d_2} />
                        </div>


                        <div className='file_d_cont'>
                            <div className='file_d_text'>צילום_זירת_האירוע_מרחוק.jpg</div>
                            <img src={file_d_1} />
                            <img src={file_d_2} />
                        </div>

                        <div className='file_d_cont file_d_cont_2'>
                            <div className='file_d_text'>צילום_זירת_האירוע_מרחוק.jpg</div>
                            <img src={file_d_1} />
                            <img src={file_d_2} />
                        </div>

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

export default Full_report
