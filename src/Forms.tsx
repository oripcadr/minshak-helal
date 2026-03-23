import RightMenu from "./RightMenu"

import './Forms.css'

import msg_icon from './assets/msg_icon.png'
import bell_icon from './assets/bell_icon.png'
import p_1 from './assets/p_1_w.png'


import more_icon from './assets/more_icon.png'

import user_m_1 from './assets/user_m_1.png'
import user_m_2 from './assets/user_m_2.png'
// import user_s_2 from './assets/user_s_2.png'

import arrow_r from './assets/arrow_r.png'
import filter from './assets/filter.png'


import form_i_1 from './assets/form_i_1.png'
import form_i_2 from './assets/form_i_2.png'
import form_i_3 from './assets/form_i_3.png'
import form_i_4 from './assets/form_i_4.png'

import Popup_forms from "./Popup_forms"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Forms() {
    const navigate = useNavigate();

    const [show_p_box_cont_info, set_show_p_box_cont_info] = useState(false);
    const [show_work_time, set_show_work_time] = useState(false);
    const [show_filter_options, set_show_filter_options] = useState(false);

    const [show_popup_forms, set_show_popup_forms] = useState(false);


    return (
    <>
        <div className="dashboard_main_cont">
            <RightMenu title="Forms"></RightMenu>

            {/* <div className='top_header'>

       
                <div className='search_cont'>
                    <input type="text" placeholder='חפש אתר, עובד, מסמך או נשק…' className='search_input'/>   
                    <img src={msg_icon} />
                    <img src={bell_icon} />
                </div>
            </div> */}

   <div className='main_area_cont'>
            <div className='right_part_cont'>
                
                <div className='top_area_p top_area_w'>
                    <div>
                        <div className='right_part_cont_top_title'>פעולות מהירות</div>


                        <div className='p_box_action_neshek_cont'>
                            <div className='p_box_action_neshek p_box_action_neshek_forms'  onClick={()=>navigate("/Forms_create")}>
                                {/* <img src={add_n} className='' /> */}
                                <div className='user_add_title user_add_title_w'>צור הדרכה חדשה</div>
                            </div>

                            <div className='p_box_action_neshek p_box_action_neshek_forms' onClick={()=>navigate("/Forms_create_doc")}>
                                {/* <img src={folder_o} className='' /> */}
                                <div className='user_add_title user_add_title_w'>צור מסמך לחתימה</div>
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
                            <div className='p_box' >
                                <img src={more_icon} className='more_icon' />
                                <img src={form_i_1} className='p_icon'/>
                                <div className='p_box_text_cont'>
                                    <div className='p_box_title'>6</div>
                                    <div className='p_box_subtitle'>הדרכות פעילות</div>
                                </div>
                            
                            </div>

                            <div className='p_box'>
                                <img src={more_icon} className='more_icon' />
                                <img src={form_i_2} className='p_icon'/>
                                <div className='p_box_text_cont'>
                                    <div className='p_box_title'>78%</div>
                                    <div className='p_box_subtitle'>ממוצע הענות</div>
                                </div>
                            </div>

                            <div className='p_box'>

                                <img src={more_icon} className='more_icon' />
                                <img src={form_i_3} className='p_icon'/>
                                <div className='p_box_text_cont'>
                                    <div className='p_box_title'>2</div>
                                    <div className='p_box_subtitle'>טיוטות</div>
                                </div>

                            </div>

                            <div className='p_box'>
                                <img src={more_icon} className='more_icon' />
                                <img src={form_i_4} className='p_icon'/>
                                <div className='p_box_text_cont'>
                                    <div className='p_box_title'>15</div>
                                    <div className='p_box_subtitle'>פורסמו</div>
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

                <div className='right_part_cont_bottom right_part_cont_bottom_p right_part_cont_bottom_p_forms'>
                    <div className='right_part_cont_top_title'>היסטוריה</div>

                    <div className='btn_exp_cont btn_exp_cont_forms'>
                        <input type="text" placeholder='חיפוש הדרכה' className='btn_exp_cont_input'/>
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
                        <div className={'top_btn '} >הכל</div>
                        <div className={'top_btn '} >טפסים לחתימה</div>
                        <div className={'top_btn '} >הדרכות</div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_header table_row_forms_long'>שם</div>
                       
                        <div className='table_header'>סטטוס</div>
  
                        <div className='table_header'>תאריך יצירה</div>
                       
                        <div className='table_header'>עדכון אחרון</div>
                        <div className='table_header'>רכיבים</div>
                        <div className='table_header'>השלמות</div>
                        <div className='table_header table_row_forms_ex_long'>פעולות</div>
                    </div>


                    <div className='table_header_cont' onClick={()=>set_show_popup_forms(true)}>
                    
                        <div  className='table_row table_row_forms_long'>
                          הדרכת בטיחות בנשק - רבעון א׳
                        </div>

                        <div className='table_row'>פורסם</div>
        
                        <div className='table_row'>15.3.26</div>

                        <div className='table_row'>15.3.26</div>

                        <div className='table_row'>4</div>

                        <div className='table_row'>57 מתוך 80</div>

                        <div className='table_row table_row_forms_ex_long'>
                            <div className="forms_send_btn">שליחה</div>
                            <div className="forms_copy_btn">שכפול</div>
                            <div className="forms_edit_btn">עריכה</div>
                            <div className="forms_del_btn"></div>
                        </div>



                        
                    </div>

                        <div className='table_header_cont'>
                    
                        <div  className='table_row table_row_forms_long'>
                          הדרכת בטיחות בנשק - רבעון א׳
                        </div>

                        <div className='table_row'>פורסם</div>
        
                        <div className='table_row'>15.3.26</div>

                        <div className='table_row'>15.3.26</div>

                        <div className='table_row'>4</div>

                        <div className='table_row'>57 מתוך 80</div>

                        <div className='table_row table_row_forms_ex_long'>
                            <div className="forms_send_btn">שליחה</div>
                            <div className="forms_copy_btn">שכפול</div>
                            <div className="forms_edit_btn">עריכה</div>
                            <div className="forms_del_btn"></div>
                        </div>



                        
                    </div>


                        <div className='table_header_cont'>
                    
                        <div  className='table_row table_row_forms_long'>
                          הדרכת בטיחות בנשק - רבעון א׳
                        </div>

                        <div className='table_row'>פורסם</div>
        
                        <div className='table_row'>15.3.26</div>

                        <div className='table_row'>15.3.26</div>

                        <div className='table_row'>4</div>

                        <div className='table_row'>57 מתוך 80</div>

                        <div className='table_row table_row_forms_ex_long'>
                            <div className="forms_send_btn">שליחה</div>
                            <div className="forms_copy_btn">שכפול</div>
                            <div className="forms_edit_btn">עריכה</div>
                            <div className="forms_del_btn"></div>
                        </div>



                        
                    </div>

                        <div className='table_header_cont'>
                    
                        <div  className='table_row table_row_forms_long'>
                          הדרכת בטיחות בנשק - רבעון א׳
                        </div>

                        <div className='table_row'>פורסם</div>
        
                        <div className='table_row'>15.3.26</div>

                        <div className='table_row'>15.3.26</div>

                        <div className='table_row'>4</div>

                        <div className='table_row'>57 מתוך 80</div>

                        <div className='table_row table_row_forms_ex_long'>
                            <div className="forms_send_btn">שליחה</div>
                            <div className="forms_copy_btn">שכפול</div>
                            <div className="forms_edit_btn">עריכה</div>
                            <div className="forms_del_btn"></div>
                        </div>



                        
                    </div>
           
                    
                </div>

            </div>



        </div>

        
        </div>

        {show_popup_forms?<Popup_forms set_popup_form={set_show_popup_forms}></Popup_forms>:<></>}

    </>
  )
}

export default Forms
