

//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Neshek.css'
import RightMenu from './RightMenu'
// import Dashboard from './Dashboard'
import user from './assets/user.png'
import msg_icon from './assets/msg_icon.png'
import bell_icon from './assets/bell_icon.png'
import p_1 from './assets/p_1_w.png'
import p_2 from './assets/p_2_w.png'
import p_3 from './assets/p_3_w.png'
import p_4 from './assets/p_4_w.png'
import arrow_left from './assets/arrow_left.png'
import v_1 from './assets/v_1.png'
import v_2 from './assets/v_2.png'
import v_3 from './assets/v_3.png'
import v_4 from './assets/v_4.png'

import b_dot from './assets/b_dot.png'
import r_dot from './assets/r_dot.png'
import more_w from './assets/more_w.png'


import more_icon from './assets/more_icon.png'
import add_n from './assets/add_n.png'

import user_m_1 from './assets/user_m_1.png'
import user_m_2 from './assets/user_m_2.png'
import user_s_2 from './assets/user_s_2.png'

import arrow_r from './assets/arrow_r.png'
import filter from './assets/filter.png'

import { useState } from 'react'

import folder_o from './assets/folder_o_s.png'
import file_icon from './assets/file_icon.png'
import Comp_popup from './Comp_popup'
import Cert_popup from './Cert_popup'
import success_icon from './assets/success_icon.png'
import Neshek_popup from './Neshek_popup'
import p_dot from './assets/p_dot.png'
import y_dot from './assets/y_dot.png'

function Neshek() {
    
    const [show_p_box_cont_info, set_show_p_box_cont_info] = useState(false);
    const [show_work_time, set_show_work_time] = useState(false);
    const [show_filter_options, set_show_filter_options] = useState(false);

    const [show_tab, set_show_tab] = useState(1);
    const [show_tab_t, set_show_tab_t] = useState(1);
    const [show_company_popup, set_show_company_popup] = useState(false);
    const [show_cert_popup_f, set_show_cert_popup_f] = useState(false);
    const [show_success_popup, set_show_success_popup] = useState(false);

    const [show_neshek_popup, set_show_neshek_popup] = useState(false);
    
    const [show_status_opt, set_show_status_opt] = useState(false);
    const [show_update_count, set_show_update_count] = useState(false);


    
    function set_show_cert_popup(){
        debugger;
        set_show_company_popup(false);
        set_show_cert_popup_f(true);
    }

    function set_show_sucess(){
        set_show_company_popup(false);
        set_show_success_popup(true);
    }

  return (
    <>
    <div className='dashboard_main_cont'>

        <RightMenu></RightMenu>

        <div className='top_header'>

            <div className='user_cont'>
                <img src={user} />
                <div className='user_title'>
                    <div className='user_name'>ישראל ישראלי</div>
                    <div className='user_role'>מנכ"ל</div>
                </div>
            </div>

            {/* <div className='search_cont'>
                 <input type="text" placeholder='חפש אתר, עובד, מסמך או נשק…' className='search_input'/>   
                 <img src={msg_icon} />
                 <img src={bell_icon} />
            </div> */}
        </div>

        <div className='main_area_cont'>
            <div className='right_part_cont'>
                
                <div className='top_area_p top_area_w'>
                    <div>
                        <div className='right_part_cont_top_title'>פעולות מהירות</div>


                        <div className='p_box_action_neshek_cont'>
                            <div className='p_box_action_neshek'>
                                <img src={add_n} className='' />
                                <div className='user_add_title user_add_title_w'>הוסף נשק חדש</div>
                            </div>

                            <div className='p_box_action_neshek' onClick={()=>set_show_company_popup(true)}>
                                <img src={folder_o} className='' />
                                <div className='user_add_title user_add_title_w'>תיק חברה (מפעל ראוי)</div>
                            </div>

                        </div>
                    </div>
                    <div className='right_part_cont_top'>
                        <div className='right_part_cont_top_title'>תמונת מצב</div>

                        <div className='btn_exp_cont'>
                            <div className='select_period'>יומי</div>
                            <div className='export_btn'>ייצוא</div>
                        </div>


                        {!show_p_box_cont_info?<div className='p_box_cont'>
                            <div className='p_box' onClick={()=>set_show_p_box_cont_info(true)}>
                                <img src={more_icon} className='more_icon' />
                                <img src={p_1} className='p_icon'/>
                                <div className='p_box_text_cont'>
                                    <div className='p_box_title'>120</div>
                                    <div className='p_box_subtitle'>סה״ב נשקים רשומים</div>
                                </div>
                            
                            </div>

                            <div className='p_box'>
                                <img src={more_icon} className='more_icon' />
                                <img src={p_2} className='p_icon'/>
                                <div className='p_box_text_cont'>
                                    <div className='p_box_title'>78%</div>
                                    <div className='p_box_subtitle'>נשקים מוקצים (94)</div>
                                </div>
                            </div>

                            <div className='p_box'>

                                <img src={more_icon} className='more_icon' />
                                <img src={p_3} className='p_icon'/>
                                <div className='p_box_text_cont'>
                                    <div className='p_box_title'>35</div>
                                    <div className='p_box_subtitle'>נשקים זמינים בכספות</div>
                                </div>

                            </div>

                            <div className='p_box'>
                                <img src={more_icon} className='more_icon' />
                                <img src={p_4} className='p_icon'/>
                                <div className='p_box_text_cont'>
                                    <div className='p_box_title'>3</div>
                                    <div className='p_box_subtitle'>נשקים זקוקים לטיפול</div>
                                </div>

                            </div>

                        </div>: 
                        <div className='p_box_cont_2'>
                            <img src={arrow_r} className='arrow_r' onClick={()=>set_show_p_box_cont_info(false)}/>
                            <div className='p_box_cont_2_first'>
                                <img src={p_1} className='p_icon'/>
                                <div className='p_box_text_cont'>
                                    <div className='p_box_title'>82%</div>
                                    <div className='p_box_subtitle'>נוכחות</div>
                                </div>
                            </div>

                            <div className='p_box_cont_2_sec'>
                                <div className='count_p_cont'>
                                    <div className='count_p'>2</div>
                                    <div className='count_p_text'>אחמ״שים</div>
                                </div>
                                <div className='count_p_user_cont' onMouseOver={()=>set_show_work_time(true)} onMouseLeave={()=>set_show_work_time(false)}>
                                    <img src={user_m_1} />
                                    <div>יוסי כהן</div>
                                </div>

                                {show_work_time? <div className='show_work_time_cont'>
                                    <div className='show_work_time_title'>משמרת בוקר</div>
                                    <div className='show_work_time_subtitle'>6:00-14:00</div>
                                    <div className='show_work_time_subtitle'>סניף תל אביב</div>
                                </div>:<></>}

                                <div className='count_p_user_cont'>
                                    <img src={user_m_2} />
                                    <div>רועי לוי</div>
                                </div>

                            </div>


                            <div className='p_box_cont_3_sec'>
                                <div className='add_worker_btn'>הוספת עובד +</div>

                                <div className='count_p_cont'>
                                    <div className='count_p count_p_2'>9/13</div>
                                    <div className='count_p_text'>מאבטחים</div>
                                </div>

                                <div className='count_p_user_cont_main'>
                                    <div>
                                        <div className='count_p_user_cont'>
                                            <img src={user_m_1} />
                                            <div>יוסי כהן</div>
                                        </div>

                                        <div className='count_p_user_cont'>
                                            <img src={user_m_2} />
                                            <div>רועי לוי</div>
                                        </div>

                                        <div className='count_p_user_cont'>
                                            <img src={user_m_2} />
                                            <div>ספיר כהן</div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className='count_p_user_cont'>
                                            <img src={user_m_1} />
                                            <div>יוסי כהן</div>
                                        </div>

                                        <div className='count_p_user_cont'>
                                            <img src={user_m_2} />
                                            <div>רועי לוי</div>
                                        </div>

                                        <div className='count_p_user_cont'>
                                            <img src={user_m_2} />
                                            <div>ספיר כהן</div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className='count_p_user_cont'>
                                            <img src={user_m_1} />
                                            <div>יוסי כהן</div>
                                        </div>

                                        <div className='count_p_user_cont'>
                                            <img src={user_m_2} />
                                            <div>רועי לוי</div>
                                        </div>

                                        <div className='count_p_user_cont'>
                                            <img src={user_m_2} />
                                            <div>ספיר כהן</div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            
                        </div>}

                    </div>

                </div>

                <div className='right_part_cont_bottom right_part_cont_bottom_p'>
                    <div className='right_part_cont_top_title'>נשקים</div>

                    <div className='btn_exp_cont'>
                        <input type="text" placeholder='חיפוש עובד לפי שם, תתפקיד, סניף, מסט״ב…' className='btn_exp_cont_input'/>
                        <div className='select_period'>סינון

                            <img src={filter} className='filter_icon' onClick={()=>set_show_filter_options(!show_filter_options)}/>
                        </div>
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    {show_filter_options? <div className='filter_options_cont'>
                        <div className='filter_options_cont_title'>תפקיד</div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>קב״ט</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>סגן קב״ט</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>אחמ״ש</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>מאבטח</div>
                        </div>

                        <div className='filter_options_cont_title'>סניף</div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>תל אביב</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>ירושלים</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>חיפה</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>באר שבע</div>
                        </div>


                        <div className='filter_options_cont_title'>סטטוס תעסוקה</div>
                        <div className='filter_checkbox_row'>
                        <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>פעיל</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>בהכשרה</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>מושעה</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>סיים</div>
                        </div>

                        <div className='filter_options_cont_title'>מסמכים בתוקף</div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>תקין</div>
                        </div>

                        <div className='filter_checkbox_row'>
                            <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>עומד לפוג</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>פג תוקף</div>
                        </div>

                    </div>:<></>}

                    <div className='top_btns_cont'>
                        <div className='top_btn top_btn_selected'>כל הנשקים</div>

                        <div className='top_btn'>תקולים</div>
                        <div className='top_btn'>בכספת</div>
                        <div className='top_btn'>משויכים למאבטחים</div>
                        <div className='top_btn'>משויכים לאתרים</div>

                    </div>

                    <div className='table_header_cont'>
                        <div className='table_header'>מסט״ב</div>
                        <div className='table_header'>דגם / סוג</div>
                        <div className='table_header'>סטטוס</div>
                        <div className='table_header'>שיוך</div>

                        <div className='table_header'>מיקום נוכחי</div>
                        <div className='table_header'>בדיקה אחרונה</div>
                        <div className='table_header'>בדיקה הבאה</div>
                    </div>

                    <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          117
                        </div>

                        <div className='table_row' onClick={()=>set_show_neshek_popup(true)}>Glock 17</div>
                      

                        <div className='table_row'>
                            <div className='status_b' onClick={()=>set_show_status_opt(true)}>
                            <img src={r_dot} />
                            תקול</div></div>

                           {show_status_opt?<div className='status_opt_cont status_opt_cont_neshek'>

                             <div className='status_opt_row' onClick={()=>set_show_status_opt(false)}><img src={r_dot} />
                        תקול</div>

                          <div className='status_opt_row'><img src={p_dot} />
                        משוייך לאתר</div>

                          <div className='status_opt_row'><img src={b_dot} />
                        משוייך למאבטח</div>

                        <div className='status_opt_row'><img src={y_dot} />
                        בכספת</div>

                        </div>:<></>}


                        <div  className='table_row'><img src={user_s_2} className='user_s' />
                          דניאל שמש
                        </div>
                            <div className='table_row'>תל אביב</div>

                            <div className='table_row'>12/12/2024</div>

                            <div className='table_row'>12/12/2025</div>
                            
                            <img src={more_w} className='more_w'/>
                    </div>


  <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          203
                        </div>

                        <div className='table_row'>M16A2</div>
                      

                        <div className='table_row'>
                            <div className='status_b'>
                            <img src={b_dot} />
                            משוייך למאבטח</div></div>


                        <div  className='table_row'><img src={user_s_2} className='user_s' />
                          דניאל שמש
                        </div>
                            <div className='table_row'>באר שבע</div>

                            <div className='table_row'>12/12/2024</div>

                            <div className='table_row table_row_red'>18/9/2025</div>
                            <img src={more_w} className='more_w'/>

                    </div>

                      <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          117
                        </div>

                        <div className='table_row'>Glock 17</div>
                      

                        <div className='table_row'>
                            <div className='status_b'>
                            <img src={r_dot} />
                            תקול</div></div>


                        <div  className='table_row'><img src={user_s_2} className='user_s' />
                          דניאל שמש
                        </div>
                            <div className='table_row'>תל אביב</div>

                            <div className='table_row'>12/12/2024</div>

                            <div className='table_row'>12/12/2024</div>
                            
                            <img src={more_w} className='more_w'/>
                    </div>

                      <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          117
                        </div>

                        <div className='table_row'>Glock 17</div>
                      

                        <div className='table_row'>
                            <div className='status_b'>
                            <img src={r_dot} />
                            תקול</div></div>


                        <div  className='table_row'><img src={user_s_2} className='user_s' />
                          דניאל שמש
                        </div>
                            <div className='table_row'>תל אביב</div>

                            <div className='table_row'>12/12/2024</div>

                            <div className='table_row'>12/12/2024</div>
                            
                            <img src={more_w} className='more_w'/>
                    </div>

                      <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          117
                        </div>

                        <div className='table_row'>Glock 17</div>
                      

                        <div className='table_row'>
                            <div className='status_b'>
                            <img src={r_dot} />
                            תקול</div></div>


                        <div  className='table_row'><img src={user_s_2} className='user_s' />
                          דניאל שמש
                        </div>
                            <div className='table_row'>תל אביב</div>

                            <div className='table_row'>12/12/2024</div>

                            <div className='table_row'>12/12/2024</div>
                            
                            
                            <img src={more_w} className='more_w'/>

                    </div>

                      <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          117
                        </div>

                        <div className='table_row'>Glock 17</div>
                      

                        <div className='table_row'>
                            <div className='status_b'>
                            <img src={r_dot} />
                            תקול</div></div>


                        <div  className='table_row'><img src={user_s_2} className='user_s' />
                          דניאל שמש
                        </div>
                            <div className='table_row'>תל אביב</div>

                            <div className='table_row'>12/12/2024</div>

                            <div className='table_row'>12/12/2024</div>
                            

                            
                            <img src={more_w} className='more_w'/>
                    </div>

                      <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          117
                        </div>

                        <div className='table_row'>Glock 17</div>
                      

                        <div className='table_row'>
                            <div className='status_b'>
                            <img src={r_dot} />
                            תקול</div></div>


                        <div  className='table_row'><img src={user_s_2} className='user_s' />
                          דניאל שמש
                        </div>
                            <div className='table_row'>תל אביב</div>

                            <div className='table_row'>12/12/2024</div>

                            <div className='table_row'>12/12/2024</div>
                            

                            
                            <img src={more_w} className='more_w'/>
                    </div>

                      <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          117
                        </div>

                        <div className='table_row'>Glock 17</div>
                      

                        <div className='table_row'>
                            <div className='status_b'>
                            <img src={r_dot} />
                            תקול</div></div>


                        <div  className='table_row'><img src={user_s_2} className='user_s' />
                          דניאל שמש
                        </div>
                            <div className='table_row'>תל אביב</div>

                            <div className='table_row'>12/12/2024</div>

                            <div className='table_row'>12/12/2024</div>
                            

                            
                            <img src={more_w} className='more_w'/>
                    </div>

                      <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          117
                        </div>

                        <div className='table_row'>Glock 17</div>
                      

                        <div className='table_row'>
                            <div className='status_b'>
                            <img src={r_dot} />
                            תקול</div></div>


                        <div  className='table_row'><img src={user_s_2} className='user_s' />
                          דניאל שמש
                        </div>
                            <div className='table_row'>תל אביב</div>

                            <div className='table_row'>12/12/2024</div>

                            <div className='table_row'>12/12/2024</div>
                            

                            
                            <img src={more_w} className='more_w'/>
                    </div>



                   

                    
                </div>

            </div>



            <div>
                <div className='left_part_third_cont left_part_third_cont_neshek'>
                <div className='right_part_cont_top_title right_part_cont_top_title_last '>דו״חות מוצעים</div>

                    <div className='btn_exp_cont'>
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    <div className='top_btns_cont'>
                        <div className={'top_btn ' + (show_tab_t==1?"top_btn_selected":"")} onClick={()=>set_show_tab_t(1)}>דו"ח תחמושת</div>

                        <div className={'top_btn ' + (show_tab_t==2?"top_btn_selected":"")} onClick={()=>set_show_tab_t(2)}>דו״ח תקלות ותיקונים</div>
                
                    </div>

                    {show_tab_t==1?<>
                         
                    <div className='table_header_cont'>
                        <div className='table_header'>מסט״ב</div>
                        <div className='table_header'>במלאי</div>
                        <div className='table_header'>נמסרה החודש</div>
                        <div className='table_header'>נותרה לשימוש</div>
            
                    </div>

                    <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          9mm
                        </div>

                        <div className='table_row' onClick={()=>set_show_update_count(true)}>3200</div>

                        <div className='table_row'>600</div>
                    
                            <div className='table_row'>2600</div>

                     </div>

                     {show_update_count?<div className='update_count_cont'>
                        <div className='update_count_title'>עדכון כמות</div>
                        <input type="text" className='update_count_input' placeholder='3200'/>

                        <div className="update_count_cancel" onClick={()=>set_show_update_count(false)}>ביטול</div>

                        <div className="update_count_save" onClick={()=>set_show_update_count(false)}>שמירה</div>


                     </div>:<></>}

                     
                    <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          5.56mm
                        </div>

                        <div className='table_row'>3200</div>

                        <div className='table_row'>600</div>
                     
                            <div className='table_row'>2600</div>

                     </div>
                     
                    <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          12G
                        </div>

                        <div className='table_row'>3200</div>

                        <div className='table_row'>600</div>
                     
                            <div className='table_row'>2600</div>

                     </div>
                     
                    <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          9mm
                        </div>

                        <div className='table_row'>3200</div>

                        <div className='table_row'>600</div>
                     
                            <div className='table_row'>2600</div>

                     </div>
                     
                    <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          9mm
                        </div>

                        <div className='table_row'>3200</div>

                        <div className='table_row'>600</div>
                   
                            <div className='table_row'>2600</div>

                     </div>
                     
                    <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          9mm
                        </div>

                        <div className='table_row'>3200</div>

                        <div className='table_row'>600</div>
                  
                            <div className='table_row'>2600</div>

                     </div>
                    </>:<></>}

                    {show_tab_t==2?<>
                    
                    <div className='table_header_cont'>
                        <div className='table_header'>מסט״ב</div>
                        <div className='table_header'>דגם / סוג</div>
                        <div className='table_header'>מיקום</div>
                        <div className='table_header'>סטטוס תקלה</div>
                        <div className='table_header'>תאריך דיווח</div>
                        <div className='table_header'>הערות</div>
                    </div>

                    <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          84
                        </div>

                        <div className='table_row'>M16A2</div>

                        <div className='table_row'>חיפה</div>
                        <div className='table_row'>תוקן והוחזר
                        </div>
                            <div className='table_row'>12/09/25</div>

                            <div className='table_row'>בעיית נוקר</div>

                            <img src={more_w} className='more_w more_w_s'/>
                    </div>

                       <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          84
                        </div>

                        <div className='table_row'>M16A2</div>

                        <div className='table_row'>חיפה</div>
                        <div className='table_row'>תוקן והוחזר
                        </div>
                            <div className='table_row'>12/09/25</div>

                            <div className='table_row'>בעיית נוקר</div>

                            <img src={more_w} className='more_w more_w_s'/>
                    </div>

                       <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          84
                        </div>

                        <div className='table_row'>M16A2</div>

                        <div className='table_row'>חיפה</div>
                        <div className='table_row'>תוקן והוחזר
                        </div>
                            <div className='table_row'>12/09/25</div>

                            <div className='table_row'>בעיית נוקר</div>

                            <img src={more_w} className='more_w more_w_s'/>
                    </div>

                       <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          84
                        </div>

                        <div className='table_row'>M16A2</div>

                        <div className='table_row'>חיפה</div>
                        <div className='table_row'>תוקן והוחזר
                        </div>
                            <div className='table_row'>12/09/25</div>

                            <div className='table_row'>בעיית נוקר</div>

                            <img src={more_w} className='more_w more_w_s'/>
                    </div>

                       <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          84
                        </div>

                        <div className='table_row'>M16A2</div>

                        <div className='table_row'>חיפה</div>
                        <div className='table_row'>תוקן והוחזר
                        </div>
                            <div className='table_row'>12/09/25</div>

                            <div className='table_row'>בעיית נוקר</div>

                            <img src={more_w} className='more_w more_w_s'/>
                    </div>

                       <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          155
                        </div>

                        <div className='table_row'>M16A2</div>

                        <div className='table_row'>תל אביב</div>
                        <div className='table_row'>בהמתנה לטכנאי
                        </div>
                            <div className='table_row'>12/09/25</div>

                            <div className='table_row'>בעיית נוקר</div>

                            <img src={more_w} className='more_w more_w_s'/>
                    </div>
                    </>:<></>}

                </div>

                <div className='lecture_cont'>
                    <div className='right_part_cont_top_title right_part_cont_top_title_last '>הדרכה והסמכה</div>
                    <div className='next_page'>
                        <div>מעבר דף</div>
                        <img src={arrow_left} />
                    </div>


                    <div className='top_btns_cont'>
                        <div className={'top_btn ' + (show_tab==1?"top_btn_selected":"")} onClick={()=>set_show_tab(1)}>סרטונים</div>

                        <div className={'top_btn ' + (show_tab==2?"top_btn_selected":"")} onClick={()=>set_show_tab(2)}>מסמכים</div>

                        <div className={'top_btn ' + (show_tab==3?"top_btn_selected":"")} onClick={()=>set_show_tab(3)}>שאלונים</div>
                
                    </div>

                    {show_tab==1?<>
                    <div className='top_btns_cont'>
                        <input type="text" placeholder='חיפוש סרטון' className='search_video'/>
                        <div className='add_new_video_btn'>+ סרטון חדש</div>

                    </div>

                    <div className='videos_cont'>
                        <div><img src={v_1} />
                        <div>רצף פעולות יעיל</div>
                        </div>

                        <div>
                        <img src={v_2} />
                        <div>רצף פעולות יעיל</div>
                        </div>



                        <div>
                        <img src={v_3} />
                        <div>רצף פעולות יעיל</div>
                        </div>



                        <div>
                        <img src={v_4} />
                        <div>רצף פעולות יעיל</div>
                        </div>



                    </div>
                    </>:<></>}

                    {show_tab==2?<>
                    <div className='top_btns_cont'>
                        <input type="text" placeholder='חיפוש מסמך' className='search_video'/>
                        <div className='add_new_video_btn'>+ מסמך חדש</div>

                    </div>

                    <div className='videos_cont'>
                        <div className='v_b'><img src={file_icon} />
                        <div>נוהל נשיאת נשק בארגון</div>
                        </div>

                        <div className='v_b'><img src={file_icon} />
                        <div>נוהל נשיאת נשק בארגון</div>
                        </div>
                        <div className='v_b'><img src={file_icon} />
                        <div>נוהל נשיאת נשק בארגון</div>
                        </div>

                        <div className='v_b'><img src={file_icon} />
                        <div>נוהל נשיאת נשק בארגון</div>
                        </div>

                        <div className='v_b'><img src={file_icon} />
                        <div>נוהל נשיאת נשק בארגון</div>
                        </div>

                        <div className='v_b'><img src={file_icon} />
                        <div>נוהל נשיאת נשק בארגון</div>
                        </div>

                        <div className='v_b'><img src={file_icon} />
                        <div>נוהל נשיאת נשק בארגון</div>
                        </div>

                        <div className='v_b'><img src={file_icon} />
                        <div>נוהל נשיאת נשק בארגון</div>
                        </div>                      

                    </div>
                    </>:<></>}


                    {show_tab==3?<>
                    <div className='top_btns_cont'>
                        <input type="text" placeholder='חיפוש מסמך' className='search_video'/>
                        <div className='add_new_video_btn'>+ מסמך חדש</div>
                    </div>
                            
                    <div className='table_header_cont'>
                        <div className='table_header table_row_l'>שם השאלון</div>
                        <div className='table_header '>עדכון אחרון</div>
                        <div className='table_header table_row_l'>מיועד ל</div>
                    </div>

                     <div className='table_header_cont'>
                    
                        <div className='row_b'>
                        <div  className='table_row table_row_l'>
                          מבחן ריענון נשק חם – בסיסי
                        </div>

                        <div className='table_row '>02.09.25</div>

                        <div className='table_row table_row_l'>כלל המאבטחים והקב״טים</div>

                        <img src={more_w} className='more_w more_w_s'/>
                        </div>
                    </div>



                     <div className='table_header_cont'>
                    
                        <div className='row_b row_b_n'>
                        <div  className='table_row table_row_l'>
                          מבחן ריענון נשק חם – בסיסי
                        </div>

                        <div className='table_row '>02.09.25</div>

                        <div className='table_row table_row_l'>כלל המאבטחים והקב״טים</div>

                        <img src={more_w} className='more_w more_w_s'/>
                        </div>
                    </div>

                    
                     <div className='table_header_cont'>
                    
                        <div className='row_b'>
                        <div  className='table_row table_row_l'>
                          מבחן ריענון נשק חם – בסיסי
                        </div>

                        <div className='table_row '>02.09.25</div>

                        <div className='table_row table_row_l'>כלל המאבטחים והקב״טים</div>

                        <img src={more_w} className='more_w more_w_s'/>
                        </div>
                    </div>

                    
                     <div className='table_header_cont'>
                    
                        <div className='row_b row_b_n'>
                        <div  className='table_row table_row_l'>
                          מבחן ריענון נשק חם – בסיסי
                        </div>

                        <div className='table_row '>02.09.25</div>

                        <div className='table_row table_row_l'>כלל המאבטחים והקב״טים</div>

                        <img src={more_w} className='more_w more_w_s'/>
                        </div>
                    </div>
                    </>:<></>}

                </div>


            </div>
        </div>

    </div>

        {show_company_popup?<Comp_popup set_show_sucess={set_show_sucess} set_show_worker_popup={set_show_company_popup} set_show_cert_popup={set_show_cert_popup}></Comp_popup>:<></>}

        {show_cert_popup_f?<Cert_popup set_show_cert_popup={set_show_cert_popup_f}></Cert_popup>:<></>}

        {show_neshek_popup?<Neshek_popup  set_show_cert_popup={set_show_neshek_popup}></Neshek_popup>:<></>}

        {show_success_popup?<div className='success_popup_cont'>
            <img src={success_icon} className='success_icon'/>
            <div className='success_popup_title'>התעודה הונפקה בהצלחה</div>

            <div className='success_popup_btn'>הדפס</div>

            <div className='success_popup_btn'>שלח במייל</div>

            <div  className='success_popup_btn_close' onClick={()=>set_show_success_popup(false)}>סגירה</div>

        </div>:<></>}
    </>
  )
}

export default Neshek
