
import './Worker_popup.css'

import p_details_1 from './assets/p_details_1.png'
import more_icon from './assets/more_icon.png'
import refresh_w from './assets/refresh_w.png'
import more_h from './assets/more_h.png'
import add_icon from './assets/add_icon.png'

import { useState } from 'react'

function Worker_popup_6() {

  const [t_1, set_t_1] = useState(false);
  const [show_more_h, set_show_more_h] = useState(false);


  return (
    <>
         

        <div className='gisha_cont'>
            <img src={more_icon} className='w_more_icon'/>
            <img src={p_details_1} className='p_details_1'/>
            <div className='p_details_title'>פרטי גישה</div>


            <div className='settings_box_line_cont_w settings_box_line_cont_sup'>
                <div className='settings_box_title_in'>מייל מערכתי</div>
                <input className='settings_box_input settings_box_input_sup' type="text"/>
                <div className='refresh_w_cont'> 
                    <img src={refresh_w} />
                    שלח קישור לאיפוס סיסמה

                </div>
            </div>    



        </div>

        <div className='gisha_cont_2_cont'>
                <div className='gisha_cont_2'>
                     <img src={add_icon} className='w_more_icon'/>
                        <img src={p_details_1} className='p_details_1'/>
                        <div className='p_details_title'>רשימת כלי-נשק מאושרים</div>

                        <div className='table_header_cont table_header_cont_2'>
                            <div className='table_header'>
                                סוג נשק
                            </div>

                            <div className='table_header'>
                                מסט״ב
                            </div>

                            <div className='table_header'>
                                סטטוס תוקף
                            </div>

                            <div className='table_header'>
                             
                            </div>
                        </div>


                        <div className='table_header_cont'>
                            <div className='table_row'>גלוק 19</div>
                            <div className='table_row'>20387</div>
                            <div className='table_row'>12/2026</div>
                            <div className='table_row' onClick={()=>set_show_more_h(!show_more_h)}> <img src={more_h} /></div>
                        </div>

                        {show_more_h?<div className='more_h_options_cont'>
                            <div className='more_h_option'>עדכן תוקף</div>
                            <div className='more_h_option more_h_option_last'>הסר</div>

                        </div>:<></>}
                        
                        <div className='table_header_cont'>
                            <div className='table_row'>יריחו</div>
                            <div className='table_row'>11245</div>
                            <div className='table_row'>12/2026</div>
                            <div className='table_row'> <img src={more_h} /></div>
                        </div>

                        
                        <div className='table_header_cont'>
                            <div className='table_row'>גלוק 19</div>
                            <div className='table_row'>20387</div>
                            <div className='table_row'>12/2026</div>
                            <div className='table_row'> <img src={more_h} /></div>
                        </div>

                </div>

                  <div className='gisha_cont_2'>
                     <img src={add_icon} className='w_more_icon'/>
                        <img src={p_details_1} className='p_details_1'/>
                        <div className='p_details_title'>אתרים מורשים לעבודה</div>

                         <div className='table_header_cont table_header_cont_2'>
                            <div className='table_header'>
                                אתר
                            </div>

                            <div className='table_header'>
                               כתובת
                            </div>


                            <div className='table_header'>
                             
                            </div>
                        </div>


                        <div className='table_header_cont'>
                            <div className='table_row'>קניון TLV</div>
                            <div className='table_row'>ארלוזורוב 95, תל אביב</div>
                           
                            <div className='table_row'> <img src={more_h} /></div>
                        </div>

                        <div className='table_header_cont'>
                            <div className='table_row'>מגדלי בסר 4</div>
                            <div className='table_row'>מנדלוביץ׳ 198, בני ברק</div>
                           
                            <div className='table_row'> <img src={more_h} /></div>
                        </div>
                </div>

        </div>

       <div className='harshaot_cont'>
            <img src={more_icon} className='w_more_icon'/>
            <img src={p_details_1} className='p_details_1'/>
            <div className='p_details_title'>הרשאות</div>

            <div className='harshaot_cont_in'>
                <div className='harshaot_cont_in_text'>ניהול משמרות</div> 
                <div className='harshaot_cont_in_subtext'>אפשר למאבטח להיכנס לאפליקציה הניידת</div>  

                <div className='slide_cont_harshaot'>
                     <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>צפייה</div>
                            <div className='slide_settings_cont' onClick={()=>set_t_1(!t_1)}> 
                                <div className={'slide_settings_middle ' + (t_1?"slide_settings_middle_selected": "")}></div>
                            </div>
                        </div>


                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>עריכה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>


                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>מחיקה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>


                </div>
            </div>

            
            <div className='harshaot_cont_in'>
                <div className='harshaot_cont_in_text'>גישת נשק</div> 
                <div className='harshaot_cont_in_subtext'>הרשאה לקבלת נשק ממחסן</div>  

                <div className='slide_cont_harshaot'>
                     <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>צפייה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>


                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>עריכה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>


                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>מחיקה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>


                </div>
            </div>

            
            <div className='harshaot_cont_in'>
                <div className='harshaot_cont_in_text'>דיווחי סיור</div> 
                <div className='harshaot_cont_in_subtext'>יכולת לשלוח דיווחי סיור דרך האפליקציה</div>  

                <div className='slide_cont_harshaot'>
                     <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>צפייה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>


                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>עריכה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>


                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>מחיקה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>


                </div>
            </div>

            <div className='harshaot_cont_in'>
                <div className='harshaot_cont_in_text'>העלאת מסמכים</div> 
                <div className='harshaot_cont_in_subtext'>יכולת להעלות מסמכים אישיים</div>  

                <div className='slide_cont_harshaot'>
                     <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>צפייה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>


                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>עריכה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>


                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>מחיקה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>


                </div>
            </div>

            <div className='harshaot_cont_in'>
                <div className='harshaot_cont_in_text'>חתימה דיגיטלית</div> 
                <div className='harshaot_cont_in_subtext'>יכולת לחתום על מסמכים באופן דיגיטלי</div>  

                <div className='slide_cont_harshaot'>
                     <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>צפייה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>


                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>עריכה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>


                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>מחיקה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>


                </div>
            </div>



            <div className='harshaot_cont_in'>
                <div className='harshaot_cont_in_text'>צפייה בנוכחות</div> 
                <div className='harshaot_cont_in_subtext'>צפייה בדוח נוכחות ושעות עבודה אישיות</div>  

                <div className='slide_cont_harshaot'>
                     <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>צפייה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>


                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>עריכה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>


                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>מחיקה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>


                </div>
            </div>


        </div>
      
    </>
  )
}

export default Worker_popup_6