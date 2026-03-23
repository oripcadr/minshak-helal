

//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Workers.css'
import RightMenu from './RightMenu'
// import Dashboard from './Dashboard'
import user from './assets/user.png'
import msg_icon from './assets/msg_icon.png'
import bell_icon from './assets/bell_icon.png'
import p_1 from './assets/p_1_w.png'
import p_2 from './assets/p_2_w.png'
import p_3 from './assets/p_3_w.png'
import p_4 from './assets/p_4_w.png'
import l_2 from './assets/l_2.png'
import l_3 from './assets/l_3.png'
import employee_icon from './assets/user_add.png'

import user_m from './assets/user_m.png'


import g_dot from './assets/g_dot.png'


import more_icon from './assets/more_icon.png'
import user_add from './assets/user_add.png'

import user_m_1 from './assets/user_m_1.png'
import user_m_2 from './assets/user_m_2.png'

import arrow_r from './assets/arrow_r.png'
import filter from './assets/filter.png'

import { useState } from 'react'

import Patrol_popup from './Patrol_popup'
import folder_o from './assets/folder_o.png'
import Comp_popup_1 from './Comp_popup_1'

function Workers() {
    
    const [show_p_box_cont_info, set_show_p_box_cont_info] = useState(false);
    const [show_work_time, set_show_work_time] = useState(false);
    const [show_filter_options, set_show_filter_options] = useState(false);
    const [show_worker_popup, set_show_worker_popup] = useState(false);
    const [show_comp_popup, set_show_comp_popup] = useState(false);

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
{/* 
            <div className='search_cont'>
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


                        <div className='p_box_cont p_box_cont_p'>
                            <div className='p_box_action p_box_action_w'>
                                <img src={user_add} className='' />
                                <div className='user_add_title user_add_title_w'>הוסף עובד חדש</div>

                            </div>

                            <div className='p_box_action p_box_action_w' onClick={()=>set_show_comp_popup(true)}>
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
                                    <div className='p_box_title'>420</div>
                                    <div className='p_box_subtitle'>עובדים רשומים</div>
                                </div>
                            
                            </div>

                            <div className='p_box'>
                                <img src={more_icon} className='more_icon' />
                                <img src={p_2} className='p_icon'/>
                                <div className='p_box_text_cont'>
                                    <div className='p_box_title'>380</div>
                                    <div className='p_box_subtitle'>עובדים פעילים</div>
                                </div>
                            </div>

                            <div className='p_box'>

                                <img src={more_icon} className='more_icon' />
                                <img src={p_3} className='p_icon'/>
                                <div className='p_box_text_cont'>
                                    <div className='p_box_title'>15</div>
                                    <div className='p_box_subtitle'>בהכשרה</div>
                                </div>

                            </div>

                            <div className='p_box'>
                                <img src={more_icon} className='more_icon' />
                                <img src={p_4} className='p_icon'/>
                                <div className='p_box_text_cont'>
                                    <div className='p_box_title'>12</div>
                                    <div className='p_box_subtitle'>חסרים מסמכים</div>
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
                    <div className='right_part_cont_top_title'>סיורים</div>

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

                    <div className='table_header_cont'>
                        <div className='table_header'>שם</div>
                        <div className='table_header'>תפקיד</div>
                        <div className='table_header'>סניף</div>
                        <div className='table_header'>סטטוס תעסוקה</div>
                        <div className='table_header'>מסמכים</div>
                    </div>

                    <div className='table_header_cont'>
                    
                        <div  className='table_row'><img src={user_m} className='user_s' />
                          דניאל שמש
                        </div>

                        <div className='table_row'>אחמ"ש</div>
                        <div className='table_row'>תל אביב</div>

                        <div className='table_row'>
                            <img src={g_dot} />
                            פעיל</div>


                            <div className='doc_btn_cont_main'>
                                <div className='doc_btn_cont'>
                                    <div className='doc_btn_cont_title'>ריענון אחרון</div>
                                    <div className='doc_btn_cont_subtitle'>בתוקף עד 14/07/25</div>
                                </div>

                                <div className='doc_btn_cont'>
                                    <div className='doc_btn_cont_title'>ריענון אחרון</div>
                                    <div className='doc_btn_cont_subtitle'>בתוקף עד 14/07/25</div>
                                </div>

                                <div className='doc_btn_cont'>
                                    <div className='doc_btn_cont_title'>אישור רפואי</div>
                                    <div className='doc_btn_cont_subtitle'>בתוקף עד 14/07/25</div>
                                </div>


                            </div>

                    </div>

                          <div className='table_header_cont'>
                    
                        <div  className='table_row'><img src={user_m} className='user_s' />
                          דניאל שמש
                        </div>

                        <div className='table_row'>אחמ"ש</div>
                        <div className='table_row'>תל אביב</div>

                        <div className='table_row'>
                            <img src={g_dot} />
                            פעיל</div>


                            <div className='doc_btn_cont_main'>
                                <div className='doc_btn_cont'>
                                    <div className='doc_btn_cont_title'>ריענון אחרון</div>
                                    <div className='doc_btn_cont_subtitle'>בתוקף עד 14/07/25</div>
                                </div>

                                <div className='doc_btn_cont'>
                                    <div className='doc_btn_cont_title'>ריענון אחרון</div>
                                    <div className='doc_btn_cont_subtitle'>בתוקף עד 14/07/25</div>
                                </div>

                                <div className='doc_btn_cont'>
                                    <div className='doc_btn_cont_title'>אישור רפואי</div>
                                    <div className='doc_btn_cont_subtitle'>בתוקף עד 14/07/25</div>
                                </div>


                            </div>

                    </div>
                    <div className='table_header_cont'>
                    
                        <div  className='table_row'><img src={user_m} className='user_s' />
                          דניאל שמש
                        </div>

                        <div className='table_row'>אחמ"ש</div>
                        <div className='table_row'>תל אביב</div>

                        <div className='table_row'>
                            <img src={g_dot} />
                            פעיל</div>


                            <div className='doc_btn_cont_main'>
                                <div className='doc_btn_cont'>
                                    <div className='doc_btn_cont_title'>ריענון אחרון</div>
                                    <div className='doc_btn_cont_subtitle'>בתוקף עד 14/07/25</div>
                                </div>

                                <div className='doc_btn_cont'>
                                    <div className='doc_btn_cont_title'>ריענון אחרון</div>
                                    <div className='doc_btn_cont_subtitle'>בתוקף עד 14/07/25</div>
                                </div>

                                <div className='doc_btn_cont'>
                                    <div className='doc_btn_cont_title'>אישור רפואי</div>
                                    <div className='doc_btn_cont_subtitle'>בתוקף עד 14/07/25</div>
                                </div>


                            </div>

                    </div>

                           <div className='table_header_cont'>
                    
                        <div  className='table_row'><img src={user_m} className='user_s' />
                          דניאל שמש
                        </div>

                        <div className='table_row'>אחמ"ש</div>
                        <div className='table_row'>תל אביב</div>

                        <div className='table_row'>
                            <img src={g_dot} />
                            פעיל</div>


                            <div className='doc_btn_cont_main'>
                                <div className='doc_btn_cont'>
                                    <div className='doc_btn_cont_title'>ריענון אחרון</div>
                                    <div className='doc_btn_cont_subtitle'>בתוקף עד 14/07/25</div>
                                </div>

                                <div className='doc_btn_cont'>
                                    <div className='doc_btn_cont_title'>ריענון אחרון</div>
                                    <div className='doc_btn_cont_subtitle'>בתוקף עד 14/07/25</div>
                                </div>

                                <div className='doc_btn_cont'>
                                    <div className='doc_btn_cont_title'>אישור רפואי</div>
                                    <div className='doc_btn_cont_subtitle'>בתוקף עד 14/07/25</div>
                                </div>


                            </div>

                    </div>

                           <div className='table_header_cont'>
                    
                        <div  className='table_row'><img src={user_m} className='user_s' />
                          דניאל שמש
                        </div>

                        <div className='table_row'>אחמ"ש</div>
                        <div className='table_row'>תל אביב</div>

                        <div className='table_row'>
                            <img src={g_dot} />
                            פעיל</div>


                            <div className='doc_btn_cont_main'>
                                <div className='doc_btn_cont'>
                                    <div className='doc_btn_cont_title'>ריענון אחרון</div>
                                    <div className='doc_btn_cont_subtitle'>בתוקף עד 14/07/25</div>
                                </div>

                                <div className='doc_btn_cont'>
                                    <div className='doc_btn_cont_title'>ריענון אחרון</div>
                                    <div className='doc_btn_cont_subtitle'>בתוקף עד 14/07/25</div>
                                </div>

                                <div className='doc_btn_cont'>
                                    <div className='doc_btn_cont_title'>אישור רפואי</div>
                                    <div className='doc_btn_cont_subtitle'>בתוקף עד 14/07/25</div>
                                </div>


                            </div>

                    </div>

                           <div className='table_header_cont'>
                    
                        <div  className='table_row'><img src={user_m} className='user_s' />
                          דניאל שמש
                        </div>

                        <div className='table_row'>אחמ"ש</div>
                        <div className='table_row'>תל אביב</div>

                        <div className='table_row'>
                            <img src={g_dot} />
                            פעיל</div>


                            <div className='doc_btn_cont_main'>
                                <div className='doc_btn_cont'>
                                    <div className='doc_btn_cont_title'>ריענון אחרון</div>
                                    <div className='doc_btn_cont_subtitle'>בתוקף עד 14/07/25</div>
                                </div>

                                <div className='doc_btn_cont'>
                                    <div className='doc_btn_cont_title'>ריענון אחרון</div>
                                    <div className='doc_btn_cont_subtitle'>בתוקף עד 14/07/25</div>
                                </div>

                                <div className='doc_btn_cont'>
                                    <div className='doc_btn_cont_title'>אישור רפואי</div>
                                    <div className='doc_btn_cont_subtitle'>בתוקף עד 14/07/25</div>
                                </div>


                            </div>

                    </div>

                           <div className='table_header_cont'>
                    
                        <div  className='table_row'><img src={user_m} className='user_s' />
                          דניאל שמש
                        </div>

                        <div className='table_row'>אחמ"ש</div>
                        <div className='table_row'>תל אביב</div>

                        <div className='table_row'>
                            <img src={g_dot} />
                            פעיל</div>


                            <div className='doc_btn_cont_main'>
                                <div className='doc_btn_cont'>
                                    <div className='doc_btn_cont_title'>ריענון אחרון</div>
                                    <div className='doc_btn_cont_subtitle'>בתוקף עד 14/07/25</div>
                                </div>

                                <div className='doc_btn_cont'>
                                    <div className='doc_btn_cont_title'>ריענון אחרון</div>
                                    <div className='doc_btn_cont_subtitle'>בתוקף עד 14/07/25</div>
                                </div>

                                <div className='doc_btn_cont'>
                                    <div className='doc_btn_cont_title'>אישור רפואי</div>
                                    <div className='doc_btn_cont_subtitle'>בתוקף עד 14/07/25</div>
                                </div>


                            </div>

                    </div>

                           <div className='table_header_cont'>
                    
                        <div  className='table_row'><img src={user_m} className='user_s' />
                          דניאל שמש
                        </div>

                        <div className='table_row'>אחמ"ש</div>
                        <div className='table_row'>תל אביב</div>

                        <div className='table_row'>
                            <img src={g_dot} />
                            פעיל</div>


                            <div className='doc_btn_cont_main'>
                                <div className='doc_btn_cont'>
                                    <div className='doc_btn_cont_title'>ריענון אחרון</div>
                                    <div className='doc_btn_cont_subtitle'>בתוקף עד 14/07/25</div>
                                </div>

                                <div className='doc_btn_cont'>
                                    <div className='doc_btn_cont_title'>ריענון אחרון</div>
                                    <div className='doc_btn_cont_subtitle'>בתוקף עד 14/07/25</div>
                                </div>

                                <div className='doc_btn_cont'>
                                    <div className='doc_btn_cont_title'>אישור רפואי</div>
                                    <div className='doc_btn_cont_subtitle'>בתוקף עד 14/07/25</div>
                                </div>


                            </div>

                    </div>

                    
                </div>

            </div>



            <div className='left_part_third_cont left_part_third_cont_p'>
                <div className='right_part_cont_top_title right_part_cont_top_title_last '>התראות אחרונות</div>

                    <div className='btn_exp_cont'>
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    <div className='alert_box'> 
                        <img src={l_2} className='alert_img'/>        
                        <div className='alert_box_title_s'>מסמך עומד לפוג</div>
                        <div className='alert_box_title_s_l'>לפני 2 דק׳</div>

                        <div className='alert_box_title'>האישור הרפואי של יוסי כהן פג בעוד 5 ימים</div>

                        <div className='send_msg_btn'>שלח תזכורת</div>
                        <div className='view_msg_btn'>צפה במסמכים</div>
                        
                    </div>    

                    
                    <div className='alert_box'> 
                        <img src={l_3} className='alert_img'/>        
                        <div className='alert_box_title_s'>ריענון ירי</div>
                        <div className='alert_box_title_s_l'>לפני 2 דק׳</div>

                        <div className='alert_box_title'>ריענון ירי של ספיר כהן פג היום</div>

                        <div className='send_msg_btn'>שלח תזכורת</div>
                        <div className='view_msg_btn'>צפה במסמכים</div>
                        
                    </div>    


                    <div className='alert_box'> 
                        <img src={l_3} className='alert_img'/>        
                        <div className='alert_box_title_s'>עובד חדש נוסף</div>
                        <div className='alert_box_title_s_l'>לפני 2 דק׳</div>

                        <div className='alert_box_title'>נוסף עובד חדש – דניאל שמש (סגן קב״ט)</div>

                        <div className='send_msg_btn'>שלח תזכורת</div>
                        <div className='view_msg_btn'>צפה במסמכים</div>
                        
                    </div>    

                    
                    <div className='alert_box'> 
                        <img src={employee_icon} className='alert_img employee_icon'/>        
                        <div className='alert_box_title_s'>עובד חדש נוסף</div>
                        <div className='alert_box_title_s_l'>לפני 2 דק׳</div>

                        <div className='alert_box_title'>נוסף עובד חדש – דניאל שמש (סגן קב״ט)</div>

                        <div className='send_msg_btn'>שלח תזכורת</div>
                        <div className='call_msg_btn'>התקשר</div>
                        
                    </div>    


                    <div className='alert_box'> 
                        <img src={l_3} className='alert_img'/>        
                        <div className='alert_box_title_s'>עובד חדש נוסף</div>
                        <div className='alert_box_title_s_l'>לפני 2 דק׳</div>

                        <div className='alert_box_title'>נוסף עובד חדש – דניאל שמש (סגן קב״ט)</div>

                        <div className='send_msg_btn'>שלח תזכורת</div>
                        <div className='view_msg_btn'>צפה במסמכים</div>
                        
                    </div>    

                    
                    <div className='alert_box'> 
                        <img src={employee_icon} className='alert_img employee_icon'/>        
                        <div className='alert_box_title_s'>עובד חדש נוסף</div>
                        <div className='alert_box_title_s_l'>לפני 2 דק׳</div>

                        <div className='alert_box_title'>נוסף עובד חדש – דניאל שמש (סגן קב״ט)</div>

                        <div className='send_msg_btn'>שלח תזכורת</div>
                        <div className='call_msg_btn'>התקשר</div>
                        
                    </div>  
            </div>
        </div>

    </div>

    {show_worker_popup?<Patrol_popup set_show_worker_popup={set_show_worker_popup}></Patrol_popup>:<></>}

    {show_comp_popup?<Comp_popup_1 set_show_worker_popup={set_show_comp_popup}></Comp_popup_1>:<></>}

    </>
  )
}

export default Workers
