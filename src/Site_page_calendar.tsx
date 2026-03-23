

//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Site_page.css'

// import Dashboard from './Dashboard'
import info_cal_1 from './assets/info_cal_1.png'
import info_cal_2 from './assets/info_cal_2.png'
import info_cal_3 from './assets/info_cal_3.png'
import info_cal_4 from './assets/info_cal_4.png'
import more_w from './assets/more_w.png'
import user_s_1 from './assets/user_s_1.png'

import filter from './assets/filter.png'

import {  useState } from 'react'
import First_report from './First_report'
import Full_report from './Full_report'


function Site_page_calendar() {

   const [show_full_report, set_show_full_report] = useState(false);
   const [show_first_report, set_show_first_report] = useState(false);
    
  return (
    <>
    <div className='site_page_general_info_cont'>
        
            <div className='general_info_calendar_cont'>
                <div className='general_info_calendar'>
                    <div className='right_part_cont_top_title'>תמונת מצב</div>
                    
                    <div className='btn_exp_cont'>
                        <div className='select_period'>יומי</div>
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    <div className='info_calendar_box_cont'>
                        <div className='info_calendar_box'>
                            <img src={info_cal_1} className='info_cal_1'/>
                            <div className='info_cal_num'>1</div>
                            <div className='info_cal_text'>אירועים פתוחים</div>
                            <img src={more_w} className='more_w_cal'/>
                        </div>
                         <div className='info_calendar_box'>
                            <img src={info_cal_2} className='info_cal_1'/>
                            <div className='info_cal_num'>2</div>
                            <div className='info_cal_text'>בטיפול</div>
                            <img src={more_w} className='more_w_cal'/>
                        </div>

                         <div className='info_calendar_box'>
                            <img src={info_cal_3} className='info_cal_1'/>
                            <div className='info_cal_num'>12</div>
                            <div className='info_cal_text'>טיוטות</div>
                            <img src={more_w} className='more_w_cal'/>
                        </div>

                         <div className='info_calendar_box'>
                            <img src={info_cal_4} className='info_cal_1'/>
                            <div className='info_cal_num'>23</div>
                            <div className='info_cal_text'>אירועים השנה</div>
                            <img src={more_w} className='more_w_cal'/>
                        </div>
                    </div>
                </div>

                <div className='last_docs_calendar'>

                    <div className='p_details_title'>מסמכים אחרונים</div>
                    <div className='btn_exp_cont_site_doc'>
                        <input type="text" placeholder='חיפוש אירוע' className='search_input_site btn_exp_cont_input'/>
                        <div className='select_period'>סינון

                            <img src={filter} className='filter_icon'/>
                        </div>
                        <div className='export_btn'>ייצוא</div>
                    </div>


                    
                    <div className='table_header_cont'>
                        <div className='table_header'>מזהה אירוע</div>
                        <div className='table_header'>תאריך ושעה</div>
                        <div className='table_header'>אתר</div>
                        <div className='table_header'>סוג אירוע</div>
                        <div className='table_header'>מאבטחים מעורבים</div>
                        <div className='table_header'>נשק מעורב</div>
                        <div className='table_header'>חומרה</div>
                        <div className='table_header'>סטטוס</div>
                        <div className='table_header'>חוקר</div>
                        <div className='table_header'>עדכון אחרון</div>
                    </div>

                    <div className='table_header_cont_line'>
                        <div className='table_row table_row_blue'>
                       INC-2024-001
                            </div>
                        <div className='table_row'>2025-12-01 07:50</div>
                        <div className='table_row'>קניון עזריאלי</div>
                        <div className='table_row'>
                            <div className='docs_calendar_tag'>
                       חשד לגניבה</div>
                        </div>
                        <div className='table_row'>
                            <div className='user_s_1_cont'>
                                <div className='table_row'>
                                    <img src={user_s_1} className='user_s' />
                                    יוסי כהן
                                </div>
                                <div className='table_row'>
                                    <img src={user_s_1} className='user_s' />
                                    יוסי כהן
                                </div>
                                <div className='table_row'>
                                    <img src={user_s_1} className='user_s' />
                                    יוסי כהן
                                </div>
                            </div>
                        </div>
                        <div className='table_row'>GLK-2024-003</div>
                        <div className='table_row'>  <div className='docs_calendar_tag_w'>בינונית</div></div>
                        <div className='table_row'>תקין</div>
                        <div className='table_row'>
                            <div className='table_row'>
                                    <img src={user_s_1} className='user_s' />
                                    יוסי כהן
                            </div>
                        </div>

                        <div className='table_row'>2025-12-01 07:50</div>
                    </div>

                       <div className='table_header_cont_line'>
                        <div className='table_row table_row_blue'>
                       INC-2024-001
                            </div>
                        <div className='table_row'>2025-12-01 07:50</div>
                        <div className='table_row'>קניון עזריאלי</div>
                        <div className='table_row'>
                           <div className='docs_calendar_tag'>
                       חשד לגניבה</div>
                        </div>
                        <div className='table_row'>
                            <div className='user_s_1_cont'>
                                <div className='table_row'>
                                    <img src={user_s_1} className='user_s' />
                                    יוסי כהן
                                </div>
                                <div className='table_row'>
                                    <img src={user_s_1} className='user_s' />
                                    יוסי כהן
                                </div>
                                <div className='table_row'>
                                    <img src={user_s_1} className='user_s' />
                                    יוסי כהן
                                </div>
                            </div>
                        </div>
                        <div className='table_row'>GLK-2024-003</div>
                        <div className='table_row'>
                             <div className='docs_calendar_tag_w'>בינונית</div>
                            </div>
                        <div className='table_row'>תקין</div>
                        <div className='table_row'>
                            <div className='table_row'>
                                    <img src={user_s_1} className='user_s' />
                                    יוסי כהן
                            </div>
                        </div>

                        <div className='table_row'>2025-12-01 07:50</div>
                    </div>

                       <div className='table_header_cont_line'>
                        <div className='table_row table_row_blue'>
                       INC-2024-001
                            </div>
                        <div className='table_row'>2025-12-01 07:50</div>
                        <div className='table_row'>קניון עזריאלי</div>
                        <div className='table_row'>
                           <div className='docs_calendar_tag'>
                       חשד לגניבה</div>
                        </div>
                        <div className='table_row'>
                            <div className='user_s_1_cont'>
                                <div className='table_row'>
                                    <img src={user_s_1} className='user_s' />
                                    יוסי כהן
                                </div>
                                <div className='table_row'>
                                    <img src={user_s_1} className='user_s' />
                                    יוסי כהן
                                </div>
                                <div className='table_row'>
                                    <img src={user_s_1} className='user_s' />
                                    יוסי כהן
                                </div>
                            </div>
                        </div>
                        <div className='table_row'>GLK-2024-003</div>
                        <div className='table_row'>  <div className='docs_calendar_tag_w'>בינונית</div></div>
                        <div className='table_row'>תקין</div>
                        <div className='table_row'>
                            <div className='table_row'>
                                    <img src={user_s_1} className='user_s' />
                                    יוסי כהן
                            </div>
                        </div>

                        <div className='table_row'>2025-12-01 07:50</div>
                    </div>

                </div>
        
            </div>

            <div>
                <div className='fast_actions_site_cont'>
                    <div className='p_details_title'>פעולות מהירות</div>

                    <div className='btn_exp_cont_site'>
                      
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    <div className='add_meavteah_btn exclamation_w' onClick={()=>set_show_first_report(true)}>דיווח ראשוני על אירוע</div>
                    <div className='add_meavteah_btn exclamation_w' onClick={()=>set_show_full_report(true)}>העלאת דיווח מפורט</div>

                </div>
            </div>
        </div>

        {show_first_report?<First_report set_show_first_report={set_show_first_report}></First_report>:<></>}

        {show_full_report?<Full_report set_show_first_report={set_show_full_report}></Full_report>:<></>}

    </>
  )
}

export default Site_page_calendar