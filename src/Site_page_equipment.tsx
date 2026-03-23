//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Site_page.css'

import user_s_1 from './assets/user_s_1.png'

import filter from './assets/filter.png'

// import {  useState } from 'react'

function Site_page_equipment() {

//   const [selected_tab, set_selected_tab] = useState(1);
//   const [selected_tab_1, set_selected_tab_1] = useState(1);
    
  return (
    <>
    <div className='site_page_general_info_cont'>
            <div>

                <div className='site_workers_cont'>
                    <div className='p_details_title'>ציוד אישי למאבטחים</div>

                    <div className='btn_exp_cont_site'>
                        <input type="text" placeholder='חיפוש נשק' className='search_input_site btn_exp_cont_input'/>
                        <div className='select_period'>סינון

                            <img src={filter} className='filter_icon'/>
                        </div>
                        <div className='export_btn'>ייצוא</div>
                    </div>

                 
                    <div className='table_header_cont'>
                        <div className='table_header'>שם</div>
                        <div className='table_header'>מדים</div>
                        <div className='table_header'>כובע</div>
                        <div className='table_header'>מכשיר קשר</div>
                        <div className='table_header'>ערכה רפואית</div>
                        <div className='table_header'>וסט</div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_row'>
                            <img src={user_s_1} className='user_s' />
                            יוסי כהן
                        </div>
                        <div className='table_row'>      
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>
                        <div className='table_row'>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>
                        <div className='table_row'>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>
                           <div className='table_row'>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>
                        <div className='table_row'>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_row'>
                            <img src={user_s_1} className='user_s' />
                            יוסי כהן
                        </div>
                        <div className='table_row'>      
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>
                        <div className='table_row'>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>
                        <div className='table_row'>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>
                           <div className='table_row'>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>
                        <div className='table_row'>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_row'>
                            <img src={user_s_1} className='user_s' />
                            יוסי כהן
                        </div>
                        <div className='table_row'>      
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>
                        <div className='table_row'>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>
                        <div className='table_row'>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>
                           <div className='table_row'>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>
                        <div className='table_row'>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_row'>
                            <img src={user_s_1} className='user_s' />
                            יוסי כהן
                        </div>
                        <div className='table_row'>      
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>
                        <div className='table_row'>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>
                        <div className='table_row'>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>
                           <div className='table_row'>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>
                        <div className='table_row'>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

             <div>

                <div className='site_workers_cont site_workers_cont_left site_workers_cont_left_1'>
                    <div className='p_details_title'>ציוד משמרת אתרי</div>

                    <div className='btn_exp_cont_site'>
                       
                        <div className='select_period'>סינון
                            <img src={filter} className='filter_icon'/>
                        </div>

                        <div className='export_btn'>ייצוא</div>
                    </div>

                    <div className='eq_box_cont'>
                        <div className='eq_box'>
                            <div className='eq_box_title'>טאבלט</div>
                            <div className='eq_box_text'>סהכ:3</div>
                            <div className='eq_box_text'>משוייך:3</div>
                            <div className='eq_box_text'>זמין:3</div>
                            <div className='eq_box_btn_cont'>
                                <div className='eq_box_btn_mesira'>מסירה</div>
                                <div className='eq_box_btn'>זיכוי</div>
                            </div>
                        </div>

                        <div className='eq_box'>
                            <div className='eq_box_title_2'>מכשיר קשר</div>
                            <div className='eq_box_text'>סהכ:3</div>
                            <div className='eq_box_text'>משוייך:3</div>
                            <div className='eq_box_text'>זמין:3</div>
                            <div className='eq_box_btn_cont'>
                                <div className='eq_box_btn_mesira'>מסירה</div>
                                <div className='eq_box_btn'>זיכוי</div>
                            </div>
                        </div>

                        <div className='eq_box'>
                            <div className='eq_box_title_3'>מחסנית</div>
                            <div className='eq_box_text'>סהכ:3</div>
                            <div className='eq_box_text'>משוייך:3</div>
                            <div className='eq_box_text'>זמין:3</div>
                            <div className='eq_box_btn_cont'>
                                <div className='eq_box_btn_mesira'>מסירה</div>
                                <div className='eq_box_btn'>זיכוי</div>
                            </div>
                        </div>

                        <div className='eq_box'>
                            <div className='eq_box_title_4'>יומן אירועים</div>
                            <div className='eq_box_text'>סהכ:3</div>
                            <div className='eq_box_text'>משוייך:3</div>
                            <div className='eq_box_text'>זמין:3</div>
                            <div className='eq_box_btn_cont'>
                                <div className='eq_box_btn_mesira'>מסירה</div>
                                <div className='eq_box_btn'>זיכוי</div>
                            </div>
                        </div>
                    </div>

                </div>       

                <div className='site_workers_cont site_workers_cont_left'>
                    <div className='p_details_title'>מלאי ציוד אתרי</div>

                    <div className='btn_exp_cont_site'>
                        <div className='add_eq_btn'>+ הוספת ציוד</div>
                        <input type="text" placeholder='חיפוש נשק' className='search_input_site btn_exp_cont_input'/>
                        <div className='select_period'>סינון

                            <img src={filter} className='filter_icon'/>
                        </div>
                        <div className='export_btn'>ייצוא</div>
                    </div>

               
                    <div className='table_header_cont'>
                        <div className='table_header'>שם</div>
                        <div className='table_header'>סה"כ</div>
                        <div className='table_header'>בשימוש</div>
                        <div className='table_header'>זמין</div>
                        <div className='table_header'>סטטוס</div>
                     
                    </div>

                    <div className='table_header_cont'>
                       
                        <div className='table_row'>אפוד טקטי</div>
                        <div className='table_row'>8</div>
                        <div className='table_row'>6</div>
                        <div className='table_row'>2</div>
                        <div className='table_row table_row_final'>הכל תקין</div>
                    </div>

                    <div className='table_header_cont'>
                       
                        <div className='table_row'>אפוד טקטי</div>
                        <div className='table_row'>8</div>
                        <div className='table_row'>6</div>
                        <div className='table_row'>2</div>
                        <div className='table_row table_row_final'>הכל תקין</div>
                    </div>


                    <div className='table_header_cont'>
                       
                        <div className='table_row'>אפוד טקטי</div>
                        <div className='table_row'>8</div>
                        <div className='table_row'>6</div>
                        <div className='table_row'>2</div>
                        <div className='table_row table_row_final'>הכל תקין</div>
                    </div>


                    <div className='table_header_cont'>
                       
                        <div className='table_row'>אפוד טקטי</div>
                        <div className='table_row'>8</div>
                        <div className='table_row'>6</div>
                        <div className='table_row'>2</div>
                        <div className='table_row table_row_final'>הכל תקין</div>
                    </div>


                </div>
            </div>

            <div>
                <div className='fast_actions_site_cont'>
                    <div className='p_details_title'>פעולות מהירות</div>

                    <div className='btn_exp_cont_site'>
                      
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    <div className='add_meavteah_btn shopping_w'>הזמנת ציוד חדשה</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Site_page_equipment