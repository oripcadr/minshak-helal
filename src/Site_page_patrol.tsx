

//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Site_page.css'

// import Dashboard from './Dashboard'
import p_action_1 from './assets/p_action_1.png'
import p_action_2 from './assets/p_action_2.png'
import p_action_3 from './assets/p_action_3.png'

import user_s_1 from './assets/user_s_1.png'

import filter from './assets/filter.png'

import {  useState } from 'react'


function Site_page_patrol() {

  const [selected_tab, set_selected_tab] = useState(1);
  const [selected_tab_1, set_selected_tab_1] = useState(1);
    
  return (
    <>
    <div className='site_page_general_info_cont'>
        
          <div>
    
                <div className='site_workers_cont'>
                    <div className='p_details_title'>נקודות QR</div>

                    <div className='btn_exp_cont_site'>
                        <input type="text" placeholder='חיפוש נשק' className='search_input_site btn_exp_cont_input'/>
                        <div className='select_period'>סינון

                            <img src={filter} className='filter_icon'/>
                        </div>
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    <div className='top_btns_cont_site_page_neshek '>
                        <div className={'top_btn '+ (selected_tab==1?"top_btn_selected":"")} onClick={()=>set_selected_tab(1)}>כל הסיורים</div>
                        <div className={'top_btn '+ (selected_tab==2?"top_btn_selected":"")} onClick={()=>set_selected_tab(2)}>סיור בוקר</div>
                        <div className={'top_btn '+ (selected_tab==3?"top_btn_selected":"")} onClick={()=>set_selected_tab(3)}>סיור צהריים</div>
                        <div className={'top_btn '+ (selected_tab==4?"top_btn_selected":"")} onClick={()=>set_selected_tab(4)}>סיור ערב</div>
                        <div className={'top_btn '+ (selected_tab==5?"top_btn_selected":"")} onClick={()=>set_selected_tab(5)}>סיור לילה</div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_header'>מיקום</div>
                        <div className='table_header'>סטטוס</div>
                        <div className='table_header'>נסרק לאחרונה</div>
                        <div className='table_header'>פעולות</div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_row'>
                          כניסה ראשית
                            </div>
                        <div className='table_row'>תקין</div>
                        <div className='table_row'>2025-12-01 07:50</div>
                        <div className='table_row'>
                            <img src={p_action_1} />
                            <img src={p_action_2} />
                            <img src={p_action_3} />
                        </div>
                    </div>


                    <div className='table_header_cont'>
                        <div className='table_row'>
                          כניסה ראשית
                            </div>
                        <div className='table_row'>תקין</div>
                        <div className='table_row'>2025-12-01 07:50</div>
                        <div className='table_row'>
                            <img src={p_action_1} />
                            <img src={p_action_2} />
                            <img src={p_action_3} />
                        </div>
                    </div>


                    <div className='table_header_cont'>
                        <div className='table_row'>
                          כניסה ראשית
                            </div>
                        <div className='table_row'>תקין</div>
                        <div className='table_row'>2025-12-01 07:50</div>
                        <div className='table_row'>
                            <img src={p_action_1} />
                            <img src={p_action_2} />
                            <img src={p_action_3} />
                        </div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_row'>
                          כניסה ראשית
                            </div>
                        <div className='table_row'>תקין</div>
                        <div className='table_row'>2025-12-01 07:50</div>
                        <div className='table_row'>
                            <img src={p_action_1} />
                            <img src={p_action_2} />
                            <img src={p_action_3} />
                        </div>
                    </div>

                </div>
            </div>

             <div>
       

                <div className='site_workers_cont site_workers_cont_left'>
                    <div className='p_details_title'>יומן נשק</div>

                    <div className='btn_exp_cont_site'>
                        <input type="text" placeholder='חיפוש נשק' className='search_input_site btn_exp_cont_input'/>
                        <div className='select_period'>סינון

                            <img src={filter} className='filter_icon'/>
                        </div>
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    <div className='top_btns_cont_site_page_neshek '>
                        <div className='top_btns_cont_site_page_neshek '>
                            <div className={'top_btn '+ (selected_tab_1==1?"top_btn_selected":"")} onClick={()=>set_selected_tab_1(1)}>כל הסיורים</div>
                            <div className={'top_btn '+ (selected_tab_1==2?"top_btn_selected":"")} onClick={()=>set_selected_tab_1(2)}>סיור בוקר</div>
                            <div className={'top_btn '+ (selected_tab_1==3?"top_btn_selected":"")} onClick={()=>set_selected_tab_1(3)}>סיור צהריים</div>
                            <div className={'top_btn '+ (selected_tab_1==4?"top_btn_selected":"")} onClick={()=>set_selected_tab_1(4)}>סיור ערב</div>
                            <div className={'top_btn '+ (selected_tab_1==5?"top_btn_selected":"")} onClick={()=>set_selected_tab_1(5)}>סיור לילה</div>
                        </div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_header'>מאבטח</div>
                        <div className='table_header'>זמן</div>
                        <div className='table_header'>מסלול</div>
                        <div className='table_header'>נקודות שנסרקו</div>
                        <div className='table_header'>נקודות חסרות</div>
                    </div>

                    <div className='table_header_cont'>
                           <div className='table_row'>
                            <img src={user_s_1} className='user_s' />
                            יוסי כהן
                            </div>
                        <div className='table_row'>2025-12-01 07:50</div>
                        <div className='table_row'>בוקר</div>
                        <div className='table_row'><div className='points_cont_patrol'>8</div></div>
                        <div className='table_row'>-</div>
                    </div>

                    <div className='table_header_cont'>
                           <div className='table_row'>
                            <img src={user_s_1} className='user_s' />
                            יוסי כהן
                            </div>
                        <div className='table_row'>2025-12-01 07:50</div>
                        <div className='table_row'>בוקר</div>
                        <div className='table_row'><div className='points_cont_patrol'>8</div></div>
                        <div className='table_row'>-</div>
                    </div>

                </div>
            </div>

            <div>
                <div className='fast_actions_site_cont'>
                    <div className='p_details_title'>פעולות מהירות</div>

                    <div className='btn_exp_cont_site'>
                      
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    <div className='add_meavteah_btn qr'>הוספת נקודה חדשה</div>
                    <div className='add_meavteah_btn flowchart'>הוספת מסלול חדש</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Site_page_patrol