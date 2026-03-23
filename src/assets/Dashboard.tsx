

//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Dashboard.css'
import RightMenu from './RightMenu'
// import Dashboard from './Dashboard'
import user from './assets/user.png'
import msg_icon from './assets/msg_icon.png'
import bell_icon from './assets/bell_icon.png'
import p_1 from './assets/p_1.png'
import p_2 from './assets/p_2.png'
import p_3 from './assets/p_3.png'
import p_4 from './assets/p_4.png'
import user_s_1 from './assets/user_s_1.png'
import user_s_2 from './assets/user_s_2.png'

import u_1_icon from './assets/u_1_icon.png'
import u_2_icon from './assets/u_2_icon.png'

import more_icon from './assets/more_icon.png'
import user_add from './assets/user_add.png'
import place_1 from './assets/place_1.png'
import place_2 from './assets/place_2.png'
import place_3 from './assets/place_3.png'
import place_4 from './assets/place_4.png'

import user_m_1 from './assets/user_m_1.png'
import user_m_2 from './assets/user_m_2.png'
import n_1 from './assets/n_1.png'
import n_2 from './assets/n_2.png'
import l_1 from './assets/l_1.png'
import l_2 from './assets/l_2.png'
import l_3 from './assets/l_3.png'
import l_4 from './assets/l_4.png'
import arrow_r from './assets/arrow_r.png'
import filter from './assets/filter.png'


import { useState } from 'react'
import Worker_popup from './Worker_popup'

function Dashboard() {

    
    const [show_p_box_cont_info, set_show_p_box_cont_info] = useState(false);
    const [show_work_time, set_show_work_time] = useState(false);
    const [show_filter_options, set_show_filter_options] = useState(false);
    const [show_worker_popup, set_show_worker_popup] = useState(false);
    


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

            <div className='search_cont'>
                 <input type="text" placeholder='חפש אתר, עובד, מסמך או נשק…' className='search_input'/>   
                 <img src={msg_icon} />
                 <img src={bell_icon} />
            </div>
        </div>

        <div className='main_area_cont'>
            <div className='right_part_cont'>
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
                                <div className='p_box_title'>82%</div>
                                <div className='p_box_subtitle'>נוכחות</div>
                            </div>
                        
                        </div>

                        <div className='p_box'>
                            <img src={more_icon} className='more_icon' />
                            <img src={p_2} className='p_icon'/>
                            <div className='p_box_text_cont'>
                                <div className='p_box_title'>22%</div>
                                <div className='p_box_subtitle'>נשקים מוקצים</div>
                            </div>
                        </div>

                        <div className='p_box'>

                            <img src={more_icon} className='more_icon' />
                            <img src={p_3} className='p_icon'/>
                            <div className='p_box_text_cont'>
                                <div className='p_box_title'>88%</div>
                                <div className='p_box_subtitle'>מסמכים בתוקף</div>
                            </div>

                        </div>

                        <div className='p_box'>
                            <img src={more_icon} className='more_icon' />
                            <img src={p_4} className='p_icon'/>
                            <div className='p_box_text_cont'>
                                <div className='p_box_title'>67%</div>
                                <div className='p_box_subtitle'>סיורים בזמן</div>
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


                <div className='right_part_cont_bottom'>
                    <div className='right_part_cont_top_title'>עובדים</div>

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
                        <div className='table_header'>מסט״ב נשק</div>
                        <div className='table_header'>תוקף מסמכים</div>
                    </div>


                    <div className='table_header_cont'>
                        <div className='table_row'>
                            <img src={user_s_1} className='user_s' />
                            יוסי כהן
                            </div>
                        <div className='table_row'>אחמ״ש</div>
                        <div className='table_row'>תל אביב</div>
                        <div className='table_row'>1176589</div>
                        <div className='table_row'>12/2025
                            <img src={u_1_icon} className='user_s' />
                            <img src={u_2_icon} className='user_s' />

                        </div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_row' onClick={()=>set_show_worker_popup(!show_worker_popup)}>
                            <img src={user_s_2} className='user_s' />
                           נועה ברק
                            </div>
                        <div className='table_row'>קב״ט</div>
                        <div className='table_row'>ירושלים</div>
                        <div className='table_row'>1176589</div>
                        <div className='table_row'>12/2025
                            <img src={u_1_icon} className='user_s' />
                            <img src={u_2_icon} className='user_s' />

                        </div>
                    </div>



                    <div className='table_header_cont'>
                        <div className='table_row'>
                            <img src={user_s_1} className='user_s' />
                            יוסי כהן
                            </div>
                        <div className='table_row'>אחמ״ש</div>
                        <div className='table_row'>תל אביב</div>
                        <div className='table_row'>1176589</div>
                        <div className='table_row'>12/2025
                            <img src={u_1_icon} className='user_s' />
                            <img src={u_2_icon} className='user_s' />

                        </div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_row'>
                            <img src={user_s_2} className='user_s' />
                           נועה ברק
                            </div>
                        <div className='table_row'>קב״ט</div>
                        <div className='table_row'>ירושלים</div>
                        <div className='table_row'>1176589</div>
                        <div className='table_row'>12/2025
                            <img src={u_1_icon} className='user_s' />
                            <img src={u_2_icon} className='user_s' />

                        </div>
                    </div>


                    
                    <div className='table_header_cont'>
                        <div className='table_row'>
                            <img src={user_s_1} className='user_s' />
                            יוסי כהן
                            </div>
                        <div className='table_row'>אחמ״ש</div>
                        <div className='table_row'>תל אביב</div>
                        <div className='table_row'>1176589</div>
                        <div className='table_row'>12/2025
                            <img src={u_1_icon} className='user_s' />
                            <img src={u_2_icon} className='user_s' />

                        </div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_row'>
                            <img src={user_s_2} className='user_s' />
                           נועה ברק
                            </div>
                        <div className='table_row'>קב״ט</div>
                        <div className='table_row'>ירושלים</div>
                        <div className='table_row'>1176589</div>
                        <div className='table_row'>12/2025
                            <img src={u_1_icon} className='user_s' />
                            <img src={u_2_icon} className='user_s' />

                        </div>
                    </div>


                    
                    <div className='table_header_cont'>
                        <div className='table_row'>
                            <img src={user_s_1} className='user_s' />
                            יוסי כהן
                            </div>
                        <div className='table_row'>אחמ״ש</div>
                        <div className='table_row'>תל אביב</div>
                        <div className='table_row'>1176589</div>
                        <div className='table_row'>12/2025
                            <img src={u_1_icon} className='user_s' />
                            <img src={u_2_icon} className='user_s' />

                        </div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_row'>
                            <img src={user_s_2} className='user_s' />
                           נועה ברק
                            </div>
                        <div className='table_row'>קב״ט</div>
                        <div className='table_row'>ירושלים</div>
                        <div className='table_row'>1176589</div>
                        <div className='table_row'>12/2025
                            <img src={u_1_icon} className='user_s' />
                            <img src={u_2_icon} className='user_s' />

                        </div>
                    </div>

                    
                    <div className='table_header_cont'>
                        <div className='table_row'>
                            <img src={user_s_1} className='user_s' />
                            יוסי כהן
                            </div>
                        <div className='table_row'>אחמ״ש</div>
                        <div className='table_row'>תל אביב</div>
                        <div className='table_row'>1176589</div>
                        <div className='table_row'>12/2025
                            <img src={u_1_icon} className='user_s' />
                            <img src={u_2_icon} className='user_s' />

                        </div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_row'>
                            <img src={user_s_2} className='user_s' />
                           נועה ברק
                            </div>
                        <div className='table_row'>קב״ט</div>
                        <div className='table_row'>ירושלים</div>
                        <div className='table_row'>1176589</div>
                        <div className='table_row'>12/2025
                            <img src={u_1_icon} className='user_s' />
                            <img src={u_2_icon} className='user_s' />

                        </div>
                    </div>

                    
                    <div className='table_header_cont'>
                        <div className='table_row'>
                            <img src={user_s_1} className='user_s' />
                            יוסי כהן
                            </div>
                        <div className='table_row'>אחמ״ש</div>
                        <div className='table_row'>תל אביב</div>
                        <div className='table_row'>1176589</div>
                        <div className='table_row'>12/2025
                            <img src={u_1_icon} className='user_s' />
                            <img src={u_2_icon} className='user_s' />

                        </div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_row'>
                            <img src={user_s_2} className='user_s' />
                           נועה ברק
                            </div>
                        <div className='table_row'>קב״ט</div>
                        <div className='table_row'>ירושלים</div>
                        <div className='table_row'>1176589</div>
                        <div className='table_row'>12/2025
                            <img src={u_1_icon} className='user_s' />
                            <img src={u_2_icon} className='user_s' />

                        </div>
                    </div>


                </div>

            </div>

            <div className='left_part_cont'>

                <div>
                    <div className='right_part_cont_top_title'>פעולות מהירות</div>


                    <div className='p_box_cont'>
                        <div className='p_box_action'>
                            <img src={user_add} className='user_add_icon' />
                            <div className='user_add_title'>הוסף עובד</div>

                            <div className='user_add_text'>הוספת עובד חדש למערכת עם פרטים אישיים, שיוך לסניף והעלאת מסמכים ראשוניים.</div>
                        
                        </div>

                        <div className='p_box_action'>
                            <img src={user_add} className='user_add_icon' />
                            <div className='user_add_title'>הקצה נשק</div>

                            <div className='user_add_text'>הקצאת נשק לעובד כולל בדיקת מסמכים בתוקף וחתימה דיגיטלית ביומן הקצאות.</div>
                        
                        </div>

                        <div className='p_box_action'>
                            <img src={user_add} className='user_add_icon' />
                            <div className='user_add_title'>הפק דו״ח PDF</div>

                            <div className='user_add_text'>הפקת דו״ח נוכחות, נשק, או סיור כקובץ PDF מוכן להדפסה או שליחה.</div>
                        
                        </div>

                    </div>
                </div>


                <div className='places_cont'>
                    <div className='right_part_cont_top_title'>אתרים</div>

                    <div className='btn_exp_cont'>
                        <input type="text" placeholder='חיפוש עובד לפי שם, תתפקיד, סניף, מסט״ב…' className='btn_exp_cont_input'/>
                        <div className='select_period'>סינון</div>
                        <div className='export_btn'>ייצוא</div>
                    </div>


                    <div className='place_box_cont'>
                        <div className='place_box'>
                            <img src={place_1} className='place_img'/>
                            <div className='place_box_title'>קניון עזריאלי</div>

                            <div className='place_box_users_cont'>
                                <div className='place_box_user_cont'>
                                    <img src={user_m_1} />
                                    <div>
                                        <div className='place_box_user_cont_name'>יוסי כהן</div>
                                        <div className='place_box_user_cont_role'>קב״ט</div>
                                    </div>
                                </div>

                                <div className='place_box_user_cont'>
                                    <img src={user_m_2} />
                                    <div>
                                        <div className='place_box_user_cont_name'>דניאל שמש</div>
                                        <div className='place_box_user_cont_role'>ס. קב״ט</div>
                                    </div>
                                </div>

                            </div>

                            <div className='neshek_cont'>
                                <div className='neshek_cont_r'>
                                    <img src={n_1} />
                                    <div>4 נשקים מוקצים</div>
                                </div>

                                 <div className='neshek_cont_r'> 
                                    <img src={n_2} />
                                    <div>36 מאבטחים</div>
                                </div>


                                 <div className='neshek_cont_r'>
                                    <img src={n_2} />
                                    <div>36 מאבטחים</div>
                                </div>



                            </div>

                            <div className='place_details_btn'>
                                פרטי אתר
                            </div>

                        </div>


                         <div className='place_box'>
                            <img src={place_2} className='place_img'/>
                            <div className='place_box_title'>קניון עזריאלי</div>

                            <div className='place_box_users_cont'>
                                <div className='place_box_user_cont'>
                                    <img src={user_m_1} />
                                    <div>
                                        <div className='place_box_user_cont_name'>יוסי כהן</div>
                                        <div className='place_box_user_cont_role'>קב״ט</div>
                                    </div>
                                </div>

                                <div className='place_box_user_cont'>
                                    <img src={user_m_2} />
                                    <div>
                                        <div className='place_box_user_cont_name'>דניאל שמש</div>
                                        <div className='place_box_user_cont_role'>ס. קב״ט</div>
                                    </div>
                                </div>

                            </div>

                            <div className='neshek_cont'>
                                <div className='neshek_cont_r'>
                                    <img src={n_1} />
                                    <div>4 נשקים מוקצים</div>
                                </div>

                                 <div className='neshek_cont_r'> 
                                    <img src={n_2} />
                                    <div>36 מאבטחים</div>
                                </div>


                                 <div className='neshek_cont_r'>
                                    <img src={n_2} />
                                    <div>36 מאבטחים</div>
                                </div>



                            </div>

                            <div className='place_details_btn'>
                                פרטי אתר
                            </div>

                        </div>

                        <div className='place_box'>
                            <img src={place_3} className='place_img'/>
                            <div className='place_box_title'>קניון עזריאלי</div>

                            <div className='place_box_users_cont'>
                                <div className='place_box_user_cont'>
                                    <img src={user_m_1} />
                                    <div>
                                        <div className='place_box_user_cont_name'>יוסי כהן</div>
                                        <div className='place_box_user_cont_role'>קב״ט</div>
                                    </div>
                                </div>

                                <div className='place_box_user_cont'>
                                    <img src={user_m_2} />
                                    <div>
                                        <div className='place_box_user_cont_name'>דניאל שמש</div>
                                        <div className='place_box_user_cont_role'>ס. קב״ט</div>
                                    </div>
                                </div>

                            </div>

                            <div className='neshek_cont'>
                                <div className='neshek_cont_r'>
                                    <img src={n_1} />
                                    <div>4 נשקים מוקצים</div>
                                </div>

                                 <div className='neshek_cont_r'> 
                                    <img src={n_2} />
                                    <div>36 מאבטחים</div>
                                </div>


                                 <div className='neshek_cont_r'>
                                    <img src={n_2} />
                                    <div>36 מאבטחים</div>
                                </div>



                            </div>

                            <div className='place_details_btn'>
                                פרטי אתר
                            </div>

                        </div>

                        <div className='place_box'>
                            <img src={place_4} className='place_img'/>
                            <div className='place_box_title'>קניון עזריאלי</div>

                            <div className='place_box_users_cont'>
                                <div className='place_box_user_cont'>
                                    <img src={user_m_1} />
                                    <div>
                                        <div className='place_box_user_cont_name'>יוסי כהן</div>
                                        <div className='place_box_user_cont_role'>קב״ט</div>
                                    </div>
                                </div>

                                <div className='place_box_user_cont'>
                                    <img src={user_m_2} />
                                    <div>
                                        <div className='place_box_user_cont_name'>דניאל שמש</div>
                                        <div className='place_box_user_cont_role'>ס. קב״ט</div>
                                    </div>
                                </div>

                            </div>

                            <div className='neshek_cont'>
                                <div className='neshek_cont_r'>
                                    <img src={n_1} />
                                    <div>4 נשקים מוקצים</div>
                                </div>

                                 <div className='neshek_cont_r'> 
                                    <img src={n_2} />
                                    <div>36 מאבטחים</div>
                                </div>


                                 <div className='neshek_cont_r'>
                                    <img src={n_2} />
                                    <div>36 מאבטחים</div>
                                </div>



                            </div>

                            <div className='place_details_btn'>
                                פרטי אתר
                            </div>

                        </div>


                    </div>

                </div>

            </div>


            <div className='left_part_third_cont'>
                <div className='right_part_cont_top_title right_part_cont_top_title_last'>התראות אחרונות</div>

                    <div className='btn_exp_cont'>
                   
                        <div className='export_btn'>ייצוא</div>
                    </div>


                    <div className='last_box_alert'>
                        <img src={l_1} className='last_box_alert_icon'/>
                        <div className='last_box_alert_time'>לפני 2 דק׳</div>

                        <div>
                            <div className='last_box_alert_title'>
                                אתר תחנת רכבת
                            </div>

                            <div className='last_box_alert_text'>
                            מאבטח איחר לנקודת QR
                            </div>
                        </div>

                    </div>


                     <div className='last_box_alert'>
                        <img src={l_2} className='last_box_alert_icon'/>
                        <div className='last_box_alert_time'>לפני 2 דק׳</div>

                        <div>
                            <div className='last_box_alert_title'>
                                אתר תחנת רכבת
                            </div>

                            <div className='last_box_alert_text'>
                            מאבטח איחר לנקודת QR
                            </div>
                        </div>

                    </div>



                     <div className='last_box_alert'>
                        <img src={l_3} className='last_box_alert_icon'/>
                        <div className='last_box_alert_time'>לפני 2 דק׳</div>

                        <div>
                            <div className='last_box_alert_title'>
                               אתר קניון עזריאלי
                            </div>

                            <div className='last_box_alert_text'>
                           בדיקת נשק קרובה
                            </div>
                        </div>

                    </div>

                    <div className='last_box_alert'>
                        <img src={l_4} className='last_box_alert_icon'/>
                        <div className='last_box_alert_time'>לפני 2 דק׳</div>

                        <div>
                            <div className='last_box_alert_title'>
                              אתר הבורסה
                            </div>

                            <div className='last_box_alert_text'>
                           חוסר אחמ״ש במשמרת
                            </div>
                        </div>

                    </div>



                    <div className='last_box_alert'>
                        <img src={l_1} className='last_box_alert_icon'/>
                        <div className='last_box_alert_time'>לפני 2 דק׳</div>

                        <div>
                            <div className='last_box_alert_title'>
                                אתר תחנת רכבת
                            </div>

                            <div className='last_box_alert_text'>
                            מאבטח איחר לנקודת QR
                            </div>
                        </div>

                    </div>


                     <div className='last_box_alert'>
                        <img src={l_2} className='last_box_alert_icon'/>
                        <div className='last_box_alert_time'>לפני 2 דק׳</div>

                        <div>
                            <div className='last_box_alert_title'>
                                אתר תחנת רכבת
                            </div>

                            <div className='last_box_alert_text'>
                            מאבטח איחר לנקודת QR
                            </div>
                        </div>

                    </div>



                     <div className='last_box_alert'>
                        <img src={l_3} className='last_box_alert_icon'/>
                        <div className='last_box_alert_time'>לפני 2 דק׳</div>

                        <div>
                            <div className='last_box_alert_title'>
                               אתר קניון עזריאלי
                            </div>

                            <div className='last_box_alert_text'>
                           בדיקת נשק קרובה
                            </div>
                        </div>

                    </div>

                    <div className='last_box_alert'>
                        <img src={l_4} className='last_box_alert_icon'/>
                        <div className='last_box_alert_time'>לפני 2 דק׳</div>

                        <div>
                            <div className='last_box_alert_title'>
                              אתר הבורסה
                            </div>

                            <div className='last_box_alert_text'>
                           חוסר אחמ״ש במשמרת
                            </div>
                        </div>

                    </div>




                    <div className='last_box_alert'>
                        <img src={l_1} className='last_box_alert_icon'/>
                        <div className='last_box_alert_time'>לפני 2 דק׳</div>

                        <div>
                            <div className='last_box_alert_title'>
                                אתר תחנת רכבת
                            </div>

                            <div className='last_box_alert_text'>
                            מאבטח איחר לנקודת QR
                            </div>
                        </div>

                    </div>


                     <div className='last_box_alert'>
                        <img src={l_2} className='last_box_alert_icon'/>
                        <div className='last_box_alert_time'>לפני 2 דק׳</div>

                        <div>
                            <div className='last_box_alert_title'>
                                אתר תחנת רכבת
                            </div>

                            <div className='last_box_alert_text'>
                            מאבטח איחר לנקודת QR
                            </div>
                        </div>

                    </div>



                     <div className='last_box_alert'>
                        <img src={l_3} className='last_box_alert_icon'/>
                        <div className='last_box_alert_time'>לפני 2 דק׳</div>

                        <div>
                            <div className='last_box_alert_title'>
                               אתר קניון עזריאלי
                            </div>

                            <div className='last_box_alert_text'>
                           בדיקת נשק קרובה
                            </div>
                        </div>

                    </div>

                    <div className='last_box_alert'>
                        <img src={l_4} className='last_box_alert_icon'/>
                        <div className='last_box_alert_time'>לפני 2 דק׳</div>

                        <div>
                            <div className='last_box_alert_title'>
                              אתר הבורסה
                            </div>

                            <div className='last_box_alert_text'>
                           חוסר אחמ״ש במשמרת
                            </div>
                        </div>

                    </div>


                    <div className='last_box_alert'>
                        <img src={l_1} className='last_box_alert_icon'/>
                        <div className='last_box_alert_time'>לפני 2 דק׳</div>

                        <div>
                            <div className='last_box_alert_title'>
                                אתר תחנת רכבת
                            </div>

                            <div className='last_box_alert_text'>
                            מאבטח איחר לנקודת QR
                            </div>
                        </div>

                    </div>


            </div>
        </div>

    </div>

    {show_worker_popup?<Worker_popup></Worker_popup>:<></>}
    </>
  )
}

export default Dashboard
