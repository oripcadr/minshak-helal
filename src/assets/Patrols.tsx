

//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Patrols.css'
import RightMenu from './RightMenu'
// import Dashboard from './Dashboard'
import user from './assets/user.png'
import msg_icon from './assets/msg_icon.png'
import bell_icon from './assets/bell_icon.png'
import p_1 from './assets/p_1_p.png'
import p_2 from './assets/p_2_p.png'
import p_3 from './assets/p_3_p.png'
import p_4 from './assets/p_4_p.png'
import proccess from './assets/proccess.png'
import user_s_2 from './assets/user_s_2.png'

import y_dot from './assets/y_dot.png'
import more_h from './assets/more_icon.png'

import more_icon from './assets/more_icon.png'
import user_add from './assets/user_add.png'
import b_icon from './assets/b_icon.png'
import add_icon from './assets/add_icon.png'
import flowchart from './assets/flowchart.png'


import user_m_1 from './assets/user_m_1.png'
import user_m_2 from './assets/user_m_2.png'

import arrow_r from './assets/arrow_r.png'
import filter from './assets/filter.png'
import arrow_left from './assets/arrow_left.png'
import clock from './assets/clock.png'
import route from './assets/route.png'
import dup from './assets/dup.png'
import arrow_right from './assets/arrow_right.png'
import g_dot from './assets/g_dot.png'
import p_details_1 from './assets/p_details_1.png'
import more_2 from './assets/more_2.png'
import print_icon from './assets/print_icon.png'
import del_icon from './assets/del_icon.png'
import r_dot from './assets/r_dot.png'
import approve_icon from './assets/approve_icon.png'
import edit_icon from './assets/edit_icon.png'
import trash from './assets/trash.png'

import { useState } from 'react'

import Patrol_popup from './Patrol_popup'

function Patrols() {

    
    const [show_p_box_cont_info, set_show_p_box_cont_info] = useState(false);
    const [show_work_time, set_show_work_time] = useState(false);
    const [show_filter_options, set_show_filter_options] = useState(false);
    const [show_worker_popup, set_show_worker_popup] = useState(false);
    const [show_add_new_patrol_popup, set_show_add_new_patrol_popup] = useState(false);
    const [patrtol_type, set_patrtol_type] = useState(0);

    const [partol_filter_popup, set_partol_filter_popup] = useState(false);
    const [show_patrol_info, set_show_patrol_info] = useState(false);
    const [selected_time_1, set_selected_time_1] = useState(false);
    const [selected_time_2, set_selected_time_2] = useState(false);
    const [selected_time_3, set_selected_time_3] = useState(false);
    const [selected_time_4, set_selected_time_4] = useState(false);
    const [show_status_opt, set_show_status_opt] = useState(false);
    const [edit_title_mode, set_edit_title_mode] = useState(false);
    const [show_more_opt, set_show_more_opt] = useState(false);

    const [choose_site_opt, set_choose_site_opt] = useState(false);
    const [show_dup_route_opt, set_show_dup_route_opt] = useState(false);


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
                
                <div className='top_area_p'>
                    <div>
                        <div className='right_part_cont_top_title'>פעולות מהירות</div>


                        <div className='p_box_cont p_box_cont_p'>
                            <div className='p_box_action p_box_action_p'>
                                <img src={user_add} className='user_add_icon user_add_icon_p' />
                                <div className='user_add_title'>הפק דוח סיורים</div>

                            </div>

                            <div className='p_box_action p_box_action_p'>
                                <img src={flowchart} className='user_add_icon user_add_icon_p' />
                                <div className='user_add_title'>צור סיור חדש</div>
                            
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
                                    <div className='p_box_title'>12</div>
                                    <div className='p_box_subtitle'>סה״כ סיורים היום</div>
                                </div>
                            
                            </div>

                            <div className='p_box'>
                                <img src={more_icon} className='more_icon' />
                                <img src={p_2} className='p_icon'/>
                                <div className='p_box_text_cont'>
                                    <div className='p_box_title'>3</div>
                                    <div className='p_box_subtitle'>סיורים פעילים</div>
                                </div>
                            </div>

                            <div className='p_box'>

                                <img src={more_icon} className='more_icon' />
                                <img src={p_3} className='p_icon'/>
                                <div className='p_box_text_cont'>
                                    <div className='p_box_title'>7</div>
                                    <div className='p_box_subtitle'>סיורים הסתיימו</div>
                                </div>

                            </div>

                            <div className='p_box'>
                                <img src={more_icon} className='more_icon' />
                                <img src={p_4} className='p_icon'/>
                                <div className='p_box_text_cont'>
                                    <div className='p_box_title'>2</div>
                                    <div className='p_box_subtitle'>חריגות</div>
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
                        <div className='table_header'>סיור</div>
                        <div className='table_header'>מסלול</div>
                        <div className='table_header'>שעת התחלה</div>
                        <div className='table_header'>מאבטח</div>
                        <div className='table_header'>נקודות נסרקו</div>
                        <div className='table_header'>סטטוס</div>
                        <div className='table_header'>חריגות</div>
                    </div>


                    <div className='table_header_cont' onClick={()=>set_show_worker_popup(true)}>
                    
                        <div className='table_row'>לילה #12</div>
                        <div className='table_row'>מסלול A</div>
                        <div className='table_row'>23:00</div>
                        <div  className='table_row'><img src={user_s_2} className='user_s' />
                          דניאל שמש
                        </div>
                        <div className='table_row'>8/10
                            <img src={proccess} />
                        </div>
                        <div className='table_row'>
                            <img src={y_dot} />
                            בתהליך</div>
                        <div className='table_row'>נקודות 7 ו-13 לא נסרקו</div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_row'>לילה #12</div>
                        <div className='table_row'>מסלול A</div>
                        <div className='table_row'>23:00</div>
                        <div  className='table_row'><img src={user_s_2} className='user_s' />
                          דניאל שמש
                        </div>
                        <div className='table_row'>8/10
                             <img src={proccess} />
                        </div>
                        <div className='table_row'>
                            <img src={y_dot} />
                            בתהליך</div>
                        <div className='table_row'>נקודות 7 ו-13 לא נסרקו</div>
                    </div>



                    <div className='table_header_cont'>
                        <div className='table_row'>לילה #12</div>
                        <div className='table_row'>מסלול A</div>
                        <div className='table_row'>23:00</div>
                        <div  className='table_row'><img src={user_s_2} className='user_s' />
                          דניאל שמש
                        </div>
                        <div className='table_row'>8/10
                             <img src={proccess} />
                        </div>
                        <div className='table_row'>
                            <img src={y_dot} />
                            בתהליך</div>
                        <div className='table_row'>נקודות 7 ו-13 לא נסרקו</div>
                    </div>
                    <div className='table_header_cont'>
                        <div className='table_row'>לילה #12</div>
                        <div className='table_row'>מסלול A</div>
                        <div className='table_row'>23:00</div>
                        <div  className='table_row'><img src={user_s_2} className='user_s' />
                          דניאל שמש
                        </div>
                        <div className='table_row'>8/10
                             <img src={proccess} />
                        </div>
                        <div className='table_row'>
                            <img src={y_dot} />
                            בתהליך</div>
                        <div className='table_row'>נקודות 7 ו-13 לא נסרקו</div>
                    </div>
                    <div className='table_header_cont'>
                        <div className='table_row'>לילה #12</div>
                        <div className='table_row'>מסלול A</div>
                        <div className='table_row'>23:00</div>
                        <div  className='table_row'><img src={user_s_2} className='user_s' />
                          דניאל שמש
                        </div>
                        <div className='table_row'>8/10
                             <img src={proccess} />
                        </div>
                        <div className='table_row'>
                            <img src={y_dot} />
                            בתהליך</div>
                        <div className='table_row'>נקודות 7 ו-13 לא נסרקו</div>
                    </div>
                    <div className='table_header_cont'>
                        <div className='table_row'>לילה #12</div>
                        <div className='table_row'>מסלול A</div>
                        <div className='table_row'>23:00</div>
                        <div  className='table_row'><img src={user_s_2} className='user_s' />
                          דניאל שמש
                        </div>
                        <div className='table_row'>8/10
                             <img src={proccess} />
                        </div>
                        <div className='table_row'>
                            <img src={y_dot} />
                            בתהליך</div>
                        <div className='table_row'>נקודות 7 ו-13 לא נסרקו</div>
                    </div>
                    <div className='table_header_cont'>
                        <div className='table_row'>לילה #12</div>
                        <div className='table_row'>מסלול A</div>
                        <div className='table_row'>23:00</div>
                        <div  className='table_row'><img src={user_s_2} className='user_s' />
                          דניאל שמש
                        </div>
                        <div className='table_row'>8/10
                             <img src={proccess} />
                        </div>
                        <div className='table_row'>
                            <img src={y_dot} />
                            בתהליך</div>
                        <div className='table_row'>נקודות 7 ו-13 לא נסרקו</div>
                    </div>
                    <div className='table_header_cont'>
                        <div className='table_row'>לילה #12</div>
                        <div className='table_row'>מסלול A</div>
                        <div className='table_row'>23:00</div>
                        <div  className='table_row'><img src={user_s_2} className='user_s' />
                          דניאל שמש
                        </div>
                        <div className='table_row'>8/10
                             <img src={proccess} />
                        </div>
                        <div className='table_row'>
                            <img src={y_dot} />
                            בתהליך</div>
                        <div className='table_row'>נקודות 7 ו-13 לא נסרקו</div>
                    </div>
                    <div className='table_header_cont'>
                        <div className='table_row'>לילה #12</div>
                        <div className='table_row'>מסלול A</div>
                        <div className='table_row'>23:00</div>
                        <div  className='table_row'><img src={user_s_2} className='user_s' />
                          דניאל שמש
                        </div>
                        <div className='table_row'>8/10
                             <img src={proccess} />
                        </div>
                        <div className='table_row'>
                            <img src={y_dot} />
                            בתהליך</div>
                        <div className='table_row'>נקודות 7 ו-13 לא נסרקו</div>
                    </div>
                    <div className='table_header_cont'>
                        <div className='table_row'>לילה #12</div>
                        <div className='table_row'>מסלול A</div>
                        <div className='table_row'>23:00</div>
                        <div  className='table_row'><img src={user_s_2} className='user_s' />
                          דניאל שמש
                        </div>
                        <div className='table_row'>8/10
                             <img src={proccess} />
                        </div>
                        <div className='table_row'>
                            <img src={y_dot} />
                            בתהליך</div>
                        <div className='table_row'>נקודות 7 ו-13 לא נסרקו</div>
                    </div>
                    <div className='table_header_cont'>
                        <div className='table_row'>לילה #12</div>
                        <div className='table_row'>מסלול A</div>
                        <div className='table_row'>23:00</div>
                        <div  className='table_row'><img src={user_s_2} className='user_s' />
                          דניאל שמש
                        </div>
                        <div className='table_row'>8/10
                             <img src={proccess} />
                        </div>
                        <div className='table_row'>
                            <img src={y_dot} />
                            בתהליך</div>
                        <div className='table_row'>נקודות 7 ו-13 לא נסרקו</div>
                    </div>
                    <div className='table_header_cont'>
                        <div className='table_row'>לילה #12</div>
                        <div className='table_row'>מסלול A</div>
                        <div className='table_row'>23:00</div>
                        <div  className='table_row'><img src={user_s_2} className='user_s' />
                          דניאל שמש
                        </div>
                        <div className='table_row'>8/10
                             <img src={proccess} />
                        </div>
                        <div className='table_row'>
                            <img src={y_dot} />
                            בתהליך</div>
                        <div className='table_row'>נקודות 7 ו-13 לא נסרקו</div>
                    </div>
                </div>

            </div>



            <div className='left_part_third_cont left_part_third_cont_p'>
                <div className='right_part_cont_top_title right_part_cont_top_title_last right_part_cont_top_title_p'>מסלולים</div>

                <div className='patrol_filert_cont'>
                    <div className='btn_exp_cont'>
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    <div className="select_period">סינון<img className="filter_icon" src={filter} onClick={()=>set_partol_filter_popup(!partol_filter_popup)}/></div>

                    <img src={add_icon} onClick={()=>set_show_add_new_patrol_popup(true)}/>
                
                </div>

                {show_add_new_patrol_popup?<div className='add_new_patrol_popup_cont'>
                    <div className='add_new_patrol_popup_title'>הוספת מסלול חדש</div>
                    <div className='choose_site' onClick={()=>set_choose_site_opt(true)}>בחירת אתר</div>

                    {choose_site_opt?<div className='choose_site_opt_cont'>
                        <div className='choose_site_opt_row' onClick={()=>set_choose_site_opt(false)}>בחירת אתר</div>
                        <div className='choose_site_opt_row'>
                            <img src={b_icon} />
                            <div>קניון עזריאלי</div>
                        </div>
                        <div className='choose_site_opt_row'>
                            <img src={b_icon} />
                            <div>מגדל שלום</div>
                        </div>

                        <div className='choose_site_opt_row'>
                            <img src={b_icon} />
                            <div>מתחם הבורסה</div>
                        </div>

                        <div className='choose_site_opt_row'>
                            <img src={b_icon} />
                            <div>בנייני הקרייה</div>
                        </div>
                        
                    </div>:<></>}

                    <input type='text' className="patrol_input" placeholder='שם מסלול'/>
                    <input type='text' className="patrol_input" placeholder='זמן ממוצע צפוי'/>

                    <div className='add_new_patrol_popup_subtitle'>איך תרצה להתחיל?</div>

                    <div className='route_option_box_cont'>
                        <div className={'route_option_box ' + (patrtol_type==1?"route_option_box_selected":"") } onClick={()=>set_patrtol_type(1)}>
                            <img src={route} />
                            <div>אתחיל מסלול ריק (אוסיף נקודות ידנית)</div>
                        </div>

                        <div className={'route_option_box ' + (patrtol_type==2?"route_option_box_selected":"") } onClick={()=>set_patrtol_type(2)}>
                            <img src={dup} />
                            <div>שכפל מסלול קיים</div>
                        </div>
                    </div>

                    {patrtol_type==2?<div className='choose_site' onClick={()=>set_show_dup_route_opt(true)}>בחר מסלול לשכפול</div>:<></>}

                    {patrtol_type==2 && show_dup_route_opt?<div className='dup_route_opt_cont'>
                        <div className='choose_site_opt_row choose_site_opt_row_r' onClick={()=>set_show_dup_route_opt(false)}>בחר מסלול לשכפול</div>
                        <div className='choose_site_opt_row choose_site_opt_row_r' >סיור בניין A</div>
                        <div className='choose_site_opt_row choose_site_opt_row_r' >סיור בניין B</div>
                        <div className='choose_site_opt_row choose_site_opt_row_r' >סיור בניין B</div>

                    </div>:<></>}

                    <div className='create_patrol_btn' onClick={()=>set_show_add_new_patrol_popup(false)}>צור מסלול</div>

                </div>:<></>}

                {partol_filter_popup?<div className='partol_filter_popup_cont'>
                    <input type='text' placeholder='חיפוש סיור' className='search_input_patrol'/>

                    <div className='partol_filter_popup_title'>מספר נקודות</div>    

                    <div className='range_cont'>
                        <div>50</div>
                        <input type="range" min="3" max="50" />
                        <div>3</div>
                    </div>

                    <div className='partol_filter_popup_title'>זמן סיור בדקות</div>    

                    <div className='range_cont'>
                        <div>50</div>
                        <input type="range" min="15" max="50" />
                        <div>15</div>
                    </div>

                    <div className='partol_filter_popup_title'>סניף</div>    

                    <div className='checkbox_com_cont checkbox_com_cont_p'>
                        <input type="checkbox" />
                        <div className='details_cont_r_l'>קניון עזריאלי</div>
                   </div>

                    <div className='checkbox_com_cont checkbox_com_cont_p'>
                        <input type="checkbox" />
                        <div className='details_cont_r_l'>בנייני האומה</div>
                   </div>

                    <div className='checkbox_com_cont checkbox_com_cont_p'>
                        <input type="checkbox" />
                        <div className='details_cont_r_l'>מגדל שלום</div>
                   </div>

                    <div className='checkbox_com_cont checkbox_com_cont_p'>
                        <input type="checkbox" />
                        <div className='details_cont_r_l'>מתחם הבורסה</div>
                   </div>

                </div>:<></>}   

{!show_patrol_info?<>
                <div className='patrol_left_title'>
                    <img src={b_icon} />
                    <div>קניון עזריאלי</div>
                </div>

                    <div className='patrol_box_cont'>   
                        <img src={more_h} className='patrol_more_h' onClick={()=>set_show_more_opt(!show_more_opt)}/>
                        <div className='patrol_box_cont_title'>
                            סיור בניין A
                        </div>

                        <div className='flowchart_patrol_cont'>
                            <div className='flowchart_patrol_cont_in'>
                                <img src={flowchart} className='flowchart_s'/>
                                <div>נקודות 12</div>
                            </div>

                             <div className='flowchart_patrol_cont_in'>
                                <img src={clock} />
                                <div>נקודות 12</div>
                            </div>

                        </div>


                        <img src={arrow_left} className='petrol_arrow_left' onClick={()=>set_show_patrol_info(true)}/>
                        {show_more_opt?<div className='more_opt_cont'>
                            <div className='more_opt_row'>
                                <img src={edit_icon} />
                                <div>עריכה</div>
                            </div>

                            <div className='more_opt_row'>
                                <img src={dup} />
                                <div>שכפול</div>
                            </div>


                            <div className='more_opt_row more_opt_row_l'>
                                <img src={trash} />
                                <div>מחיקה</div>
                            </div>

                        </div>:<></>}
                    </div>

                    

                     <div className='patrol_box_cont'>   
                        <img src={more_h} className='patrol_more_h'/>
                        <div className='patrol_box_cont_title'>
                            סיור בניין B
                        </div>

                        <div className='flowchart_patrol_cont'>
                            <div className='flowchart_patrol_cont_in'>
                                <img src={flowchart} className='flowchart_s'/>
                                <div>נקודות 12</div>
                            </div>

                             <div className='flowchart_patrol_cont_in'>
                                <img src={clock} />
                                <div>נקודות 12</div>
                            </div>

                        </div>


                        <img src={arrow_left} className='petrol_arrow_left'/>
                    </div>


                    <div className='patrol_box_cont'>   
                        <img src={more_h} className='patrol_more_h'/>
                        <div className='patrol_box_cont_title'>
                            סיור בניין C
                        </div>

                        <div className='flowchart_patrol_cont'>
                            <div className='flowchart_patrol_cont_in'>
                                <img src={flowchart} className='flowchart_s'/>
                                <div>נקודות 12</div>
                            </div>

                             <div className='flowchart_patrol_cont_in'>
                                <img src={clock} />
                                <div>נקודות 12</div>
                            </div>

                        </div>


                        <img src={arrow_left} className='petrol_arrow_left'/>
                    </div>


                    <div className='patrol_box_cont'>   
                        <img src={more_h} className='patrol_more_h'/>
                        <div className='patrol_box_cont_title'>
                           סיור לילה
                        </div>

                        <div className='flowchart_patrol_cont'>
                            <div className='flowchart_patrol_cont_in'>
                                <img src={flowchart} className='flowchart_s'/>
                                <div>נקודות 12</div>
                            </div>

                             <div className='flowchart_patrol_cont_in'>
                                <img src={clock} />
                                <div>נקודות 12</div>
                            </div>

                        </div>


                        <img src={arrow_left} className='petrol_arrow_left'/>
                    </div>



                <div className='patrol_left_title'>
                    <img src={b_icon} />
                    <div>בנייני הקרייה</div>
                </div>

                    <div className='patrol_box_cont'>   
                        <img src={more_h} className='patrol_more_h'/>
                        <div className='patrol_box_cont_title'>
                           סיור בוקר ראשון
                        </div>

                        <div className='flowchart_patrol_cont'>
                            <div className='flowchart_patrol_cont_in'>
                                <img src={flowchart} className='flowchart_s'/>
                                <div>נקודות 12</div>
                            </div>

                             <div className='flowchart_patrol_cont_in'>
                                <img src={clock} />
                                <div>נקודות 12</div>
                            </div>

                        </div>


                        <img src={arrow_left} className='petrol_arrow_left'/>
                    </div>

                     <div className='patrol_box_cont'>   
                        <img src={more_h} className='patrol_more_h'/>
                        <div className='patrol_box_cont_title'>
                          סיור בוקר שני
                        </div>

                        <div className='flowchart_patrol_cont'>
                            <div className='flowchart_patrol_cont_in'>
                                <img src={flowchart} className='flowchart_s'/>
                                <div>נקודות 12</div>
                            </div>

                             <div className='flowchart_patrol_cont_in'>
                                <img src={clock} />
                                <div>נקודות 12</div>
                            </div>

                        </div>


                        <img src={arrow_left} className='petrol_arrow_left'/>
                    </div>


                    <div className='patrol_box_cont'>   
                        <img src={more_h} className='patrol_more_h'/>
                        <div className='patrol_box_cont_title'>
                          סיור ערב ראשון
                        </div>

                        <div className='flowchart_patrol_cont'>
                            <div className='flowchart_patrol_cont_in'>
                                <img src={flowchart} className='flowchart_s'/>
                                <div>נקודות 12</div>
                            </div>

                             <div className='flowchart_patrol_cont_in'>
                                <img src={clock} />
                                <div>נקודות 12</div>
                            </div>

                        </div>


                        <img src={arrow_left} className='petrol_arrow_left'/>
                    </div>
                </>:<div>
                       <img src={arrow_right} className='arrow_right' onClick={()=>set_show_patrol_info(false)}/>
                       {!edit_title_mode?<div className='patrol_info_title' onDoubleClick={()=>set_edit_title_mode(true)}>A סיור בניין</div>:
                        <input type="text" value="A סיור בניין" className=' patrol_info_title_input'/>
                        }

                       {edit_title_mode?<img src={approve_icon} className='approve_icon'  onClick={()=>set_edit_title_mode(false)}/>:<></>}

                       <div className='patrol_status_cont' onClick={()=>set_show_status_opt(true)}>
                        <img src={g_dot} />
                        פעיל

                       </div>

                       {show_status_opt?<div className='status_opt_cont'>
                        <div className='status_opt_row' onClick={()=>set_show_status_opt(false)}><img src={g_dot} />
                        פעיל</div>

                          <div className='status_opt_row'><img src={y_dot} />
                        טיוטה</div>

                          <div className='status_opt_row'><img src={r_dot} />
                        לא פעיל</div>

                       </div>:<></>}

                       <div className='general_info_cont'>
                          <img src={more_icon} className='w_more_icon'/>
                            <img src={p_details_1} className='p_details_1'/>
                            <div className='p_details_title'>מידע כללי</div>

                            <div className='g_info_cont'>
                                <div className='g_info_r'>שייך לאתר</div>
                                <div className='g_info_b'>קניון עזריאלי</div>
                            </div>

                              <div className='g_info_cont'>
                                <div className='g_info_r'>זמן ממוצע צפוי</div>
                                <div className='g_info_b'>35 דקות</div>
                            </div>

                            <div className='g_info_cont'>
                                <div className='g_info_r'>משמרות רלוונטיות</div>
                              
                            </div>

                            <div className='patrol_time_btn_cont'>
                                <div className={'patrol_time_btn ' + (selected_time_1?"patrol_time_btn_selected":"") } onClick={()=>set_selected_time_1(!selected_time_1)}>בוקר</div>
                                <div className={'patrol_time_btn ' + (selected_time_2?"patrol_time_btn_selected":"") } onClick={()=>set_selected_time_2(!selected_time_2)}>צהריים</div>
                                <div className={'patrol_time_btn ' + (selected_time_3?"patrol_time_btn_selected":"") } onClick={()=>set_selected_time_3(!selected_time_3)}>ערב</div>
                                <div className={'patrol_time_btn ' + (selected_time_4?"patrol_time_btn_selected":"") } onClick={()=>set_selected_time_4(!selected_time_4)}>לילה</div>
                            </div>


                        </div>

                        <div className='general_info_cont general_info_cont_points'>
                            <img src={more_icon} className='w_more_icon'/>
                            <img src={p_details_1} className='p_details_1'/>
                            <div className='p_details_title'>נקודות</div>

                            <img src={add_icon} className='add_icon_points'/>
                            <input type="text" placeholder='חיפוש נקודה' className='search_point_input'/>

                            <div className='point_num_cont'>
                                <div className='point_num'>1</div>
                                <div className='point_cont'>
                                    <img src={more_2} className='more_2' />
                                    <div className='point_text'>דלת ראשית</div>
                                  
                                    <img src={del_icon} className='del_icon'/>
                                    <img src={print_icon} className='print_icon'/>
                                </div>
                            </div>

                            <div className='point_num_cont'>
                                <div className='point_num'>2</div>
                                <div className='point_cont'>
                                    <img src={more_2} className='more_2' />
                                    <div className='point_text'>קומה 7 כניסה</div>
                                  
                                    <img src={del_icon} className='del_icon'/>
                                    <img src={print_icon} className='print_icon'/>
                                </div>
                            </div>


                            <div className='point_num_cont'>
                                <div className='point_num'>3</div>
                                <div className='point_cont'>
                                    <img src={more_2} className='more_2' />
                                    <div className='point_text'>דלת ראשית</div>
                                  
                                    <img src={del_icon} className='del_icon'/>
                                    <img src={print_icon} className='print_icon'/>
                                </div>
                            </div>

                            <div className='point_num_cont'>
                                <div className='point_num'>4</div>
                                <div className='point_cont'>
                                    <img src={more_2} className='more_2' />
                                    <div className='point_text'>דלת ראשית</div>
                                  
                                    <img src={del_icon} className='del_icon'/>
                                    <img src={print_icon} className='print_icon'/>
                                </div>
                            </div>

                            <div className='point_num_cont'>
                                <div className='point_num'>5</div>
                                <div className='point_cont'>
                                    <img src={more_2} className='more_2' />
                                    <div className='point_text'>דלת ראשית</div>
                                  
                                    <img src={del_icon} className='del_icon'/>
                                    <img src={print_icon} className='print_icon'/>
                                </div>
                            </div>

                            <div className='point_num_cont'>
                                <div className='point_num'>6</div>
                                <div className='point_cont'>
                                    <img src={more_2} className='more_2' />
                                    <div className='point_text'>קומה 7 מסדרון</div>
                                  
                                    <img src={del_icon} className='del_icon'/>
                                    <img src={print_icon} className='print_icon'/>
                                </div>
                            </div>

                            <div className='point_num_cont'>
                                <div className='point_num'>7</div>
                                <div className='point_cont'>
                                    <img src={more_2} className='more_2' />
                                    <div className='point_text'>קומה 7 מסדרון</div>
                                  
                                    <img src={del_icon} className='del_icon'/>
                                    <img src={print_icon} className='print_icon'/>
                                </div>
                            </div>


                        </div>

                    </div>}


                   {/* <div className='map_add_cont'>
                        <div className='map_add_box'>
                            <img src={add_mark} />
                            הוסף נקודה
                        </div>    
                 
                        <div className='map_add_box'>
                            <img src={edit_mark} />
                            הוסף נקודה
                        </div>    
                   
                        <div className='map_add_box'>
                            <img src={add_map} />
                           הוסף מפה
                        </div>    
                   </div>    */}

                   {/* <img src={patrol_map}  className='patrol_map'/>  */}


            </div>
        </div>

    </div>

    {show_worker_popup?<Patrol_popup set_show_worker_popup={set_show_worker_popup}></Patrol_popup>:<></>}
    </>
  )
}

export default Patrols
