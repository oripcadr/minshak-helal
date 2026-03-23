
import './Neshek_popup.css'
import p_details_1 from './assets/p_details_1.png'
import more_icon from './assets/more_icon.png'


import close from './assets/close.png'
import r_dot from './assets/r_dot.png'
import valid from './assets/valid_icon.png'
import not_valid from './assets/not_valid.png'
import g_dot from './assets/g_dot.png'
import y_dot from './assets/y_dot.png'
import { useState } from 'react'



function Neshek_popup(props:any) {

    const [show_status_opt, set_show_status_opt] = useState(false);
    
  return (
    <>
    <div className='worker_popup_cont'>
        <img src={close} className='close_icon' onClick={()=>props.set_show_cert_popup(false)}/>
        <div className='worker_popup_header'>
            {/* <img src={comp_img} className='user_b'/>     */}
            <div className='user_b_text_cont'>
                <div className='user_b_text_main_r'>נשק #117 — Glock 17</div>


                <div className='user_b_text_submain_n'>
                    <span>  סדרה: GNC10585</span>
                     <span> יוצר: 12/03/2022</span>
                     <span>
                        <img src={valid} className='valid_icon'/>
                        תקין
                     </span>

                </div>
     
            </div>    

            <div className='create_neshek_id_btn'>
                הפק ת.ז נשק
            </div>

        </div>


           <div className='worker_popup_top_area'>
            <div className='worker_popup_top_area_right worker_popup_top_area_right_sign'>

            <div className='comp_cols_cont'>
                <div className='details_cont_h_main'>
                    <div className='details_cont details_cont_h'> 
                        <div className='details_cont_r details_cont_h_b'>12/12/2025</div>   
                        <div className='details_cont_r'>בדיקה הבאה</div>   
                       
                    </div>


                    <div className='details_cont details_cont_h'> 
                         <div className='details_cont_r details_cont_h_b'>12/12/2024</div>  
                        <div className='details_cont_r'>בדיקה אחרונה</div>   
                        
                      
                    </div>

                    <div className='details_cont details_cont_h'>  
                        <div className='details_cont_r details_cont_h_b'>יוסי כהן</div>   
                        <div className='details_cont_r'>מוקצה ל</div>   
                      
                  
                    </div>

                    <div className='details_cont details_cont_h'> 
                         <div className='details_cont_r details_cont_h_b'>כספת – תל אביב</div>   
                        <div className='details_cont_r'>מיקום נוכחי</div>   
                      
                    </div>

                </div>
     
            </div>


            </div>

            

        </div>



        <div className='worker_popup_top_area'>
            <div className='worker_popup_top_area_right worker_popup_top_area_right_neshek'>
                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>מסמכים ורישיונות</div>
                <div className='warning_msg'> 
                      <img src={r_dot} />
                      חסרה תעודת הרשאה לנשק
                </div>
                <div className='upload_doc_btn'>העלאת מסמך</div>

                <div className='neshek_doc_box_cont_main'>

                    <div className='neshek_doc_box_cont'>
                        <img src={more_icon} className='more_icon_neshek_doc_box'/>
                        <div className='neshek_doc_box_title'>טופס רישום נשק (מסמך זהות נשק)</div>
                        <div className='neshek_doc_box_title_sub'>
                            <img src={valid} />
                            <div>קיים</div>
                            <div>בתוקף עד 06/2026</div>
                        </div>
                    </div>

                    <div className='neshek_doc_box_cont'>
                        <img src={more_icon} className='more_icon_neshek_doc_box'/>
                        <div className='neshek_doc_box_title'>אישור רפואי</div>
                        <div className='neshek_doc_box_title_sub'>
                            <img src={not_valid} />
                            <div>חסר</div>
                            <div className='upload_file_btn'>העלאת מסמך</div>
                        </div>
                    </div>


                    <div className='neshek_doc_box_cont'>
                        <img src={more_icon} className='more_icon_neshek_doc_box'/>
                        <div className='neshek_doc_box_title'>טופס קבלה/מסירה בכספת</div>
                        <div className='neshek_doc_box_title_sub'>
                            <img src={valid} />
                            <div>קיים</div>
                            <div>בתוקף עד 06/2026</div>
                        </div>
                    </div>


                    <div className='neshek_doc_box_cont'>
                        <img src={more_icon} className='more_icon_neshek_doc_box'/>
                        <div className='neshek_doc_box_title'>אישור ריענון ירי</div>
                        <div className='neshek_doc_box_title_sub'>
                            <img src={valid} />
                            <div>קיים</div>
                            <div>בתוקף עד 06/2026</div>
                        </div>
                    </div>


                    <div className='neshek_doc_box_cont'>
                        <img src={more_icon} className='more_icon_neshek_doc_box'/>
                        <div className='neshek_doc_box_title'>טופס רישום נשק (מסמך זהות נשק)</div>
                        <div className='neshek_doc_box_title_sub'>
                            <img src={valid} />
                            <div>קיים</div>
                            <div>בתוקף עד 06/2026</div>
                        </div>
                    </div>


                    <div className='neshek_doc_box_cont'>
                        <img src={more_icon} className='more_icon_neshek_doc_box'/>
                        <div className='neshek_doc_box_title'>טופס רישום נשק (מסמך זהות נשק)</div>
                        <div className='neshek_doc_box_title_sub'>
                            <img src={valid} />
                            <div>קיים</div>
                            <div>בתוקף עד 06/2026</div>
                        </div>
                    </div>




                </div>


            </div>

        </div>


        <div className='worker_popup_top_area'>
            <div className='worker_popup_top_area_right worker_popup_top_area_right_neshek_s'>
                {/* <img src={more_icon} className='w_more_icon'/> */}
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>פרטי תחמושת</div>
                <div className='neshek_s_title'>
                    15 כדורים (9mm)
                </div>

                <div className='update_count_btn'>עדכן כמות</div>
            </div>
        </div>

        <div className='worker_popup_top_area'>
            <div className='worker_popup_top_area_right worker_popup_top_area_right_neshek'>
                {/* <img src={more_icon} className='w_more_icon'/> */}
               
                <div className='select_period select_period_h'>סינון</div>
                <div className='export_btn export_btn_h'>ייצוא</div>
                

                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>הסטוריה</div>


                <div className='btn_cont_top'>
                    <div className="top_btn top_btn_selected">תקלות</div>
                    <div className="top_btn ">הקצאות</div>
                    <div className="top_btn ">החזרות</div>
                </div>

                <div className='history_info_cont'>
                    <div className='history_info_title'>תאריך</div>
                    <div className='history_info_title'>סוג אירוע</div>
                    <div className='history_info_title'>פרטים</div>
                    <div className='history_info_title'>בוצע על ידי</div>
                     <div className='history_info_title'>הערות</div>
                    <div className='history_info_title'>סטטוס</div>

                </div>

                <div className='history_info_cont'>
                    <div className='history_info_title history_info_title_r'>10/01/25</div>
                    <div className='history_info_title history_info_title_r'>הקצאה</div>
                    <div className='history_info_title history_info_title_r'>הוקצה ל־יוסי כהן (אתר קניון TLV)</div>
                    <div className='history_info_title history_info_title_r'>קב״ט רועי לוי</div>
                    <div className='history_info_title history_info_title_r'>12/09/25</div>
                    <div className='history_info_title history_info_title_r'>
                        <div className='status_cont' onClick={()=>set_show_status_opt(true)}>
                            <img src={g_dot} />
                            <div>הושלם</div>
                        </div>

                        {show_status_opt?<div className='status_opt_cont status_opt_cont_h'>

                             <div className='status_opt_row' onClick={()=>set_show_status_opt(false)}><img src={g_dot} />
                        הושלם</div>

                          <div className='status_opt_row'><img src={y_dot} />
                        בטיפול</div>

                          <div className='status_opt_row'><img src={r_dot} />
                        הושבת</div>
                        </div>:<></>}
                    </div>

                </div>

                        <div className='history_info_cont'>
                    <div className='history_info_title history_info_title_r'>10/01/25</div>
                    <div className='history_info_title history_info_title_r'>הקצאה</div>
                    <div className='history_info_title history_info_title_r'>הוקצה ל־יוסי כהן (אתר קניון TLV)</div>
                    <div className='history_info_title history_info_title_r'>קב״ט רועי לוי</div>
                    <div className='history_info_title history_info_title_r'>12/09/25</div>
                    <div className='history_info_title history_info_title_r'>
                        <div className='status_cont'>
                            <img src={g_dot} />
                            <div>הושלם</div>
                        </div>
                    </div>

                </div>

                        <div className='history_info_cont'>
                    <div className='history_info_title history_info_title_r'>10/01/25</div>
                    <div className='history_info_title history_info_title_r'>הקצאה</div>
                    <div className='history_info_title history_info_title_r'>הוקצה ל־יוסי כהן (אתר קניון TLV)</div>
                    <div className='history_info_title history_info_title_r'>קב״ט רועי לוי</div>
                    <div className='history_info_title history_info_title_r'>12/09/25</div>
                    <div className='history_info_title history_info_title_r'>
                        <div className='status_cont'>
                            <img src={g_dot} />
                            <div>הושלם</div>
                        </div>
                    </div>

                </div>

                        <div className='history_info_cont'>
                    <div className='history_info_title history_info_title_r'>10/01/25</div>
                    <div className='history_info_title history_info_title_r'>הקצאה</div>
                    <div className='history_info_title history_info_title_r'>הוקצה ל־יוסי כהן (אתר קניון TLV)</div>
                    <div className='history_info_title history_info_title_r'>קב״ט רועי לוי</div>
                    <div className='history_info_title history_info_title_r'>12/09/25</div>
                    <div className='history_info_title history_info_title_r'>
                        <div className='status_cont'>
                            <img src={g_dot} />
                            <div>הושלם</div>
                        </div>
                    </div>

                </div>

                        <div className='history_info_cont'>
                    <div className='history_info_title history_info_title_r'>10/01/25</div>
                    <div className='history_info_title history_info_title_r'>הקצאה</div>
                    <div className='history_info_title history_info_title_r'>הוקצה ל־יוסי כהן (אתר קניון TLV)</div>
                    <div className='history_info_title history_info_title_r'>קב״ט רועי לוי</div>
                    <div className='history_info_title history_info_title_r'>12/09/25</div>
                    <div className='history_info_title history_info_title_r'>
                        <div className='status_cont'>
                            <img src={g_dot} />
                            <div>הושלם</div>
                        </div>
                    </div>

                </div>

                        <div className='history_info_cont'>
                    <div className='history_info_title history_info_title_r'>10/01/25</div>
                    <div className='history_info_title history_info_title_r'>הקצאה</div>
                    <div className='history_info_title history_info_title_r'>הוקצה ל־יוסי כהן (אתר קניון TLV)</div>
                    <div className='history_info_title history_info_title_r'>קב״ט רועי לוי</div>
                    <div className='history_info_title history_info_title_r'>12/09/25</div>
                    <div className='history_info_title history_info_title_r'>
                        <div className='status_cont'>
                            <img src={g_dot} />
                            <div>הושלם</div>
                        </div>
                    </div>

                </div>

                        <div className='history_info_cont'>
                    <div className='history_info_title history_info_title_r'>10/01/25</div>
                    <div className='history_info_title history_info_title_r'>הקצאה</div>
                    <div className='history_info_title history_info_title_r'>הוקצה ל־יוסי כהן (אתר קניון TLV)</div>
                    <div className='history_info_title history_info_title_r'>קב״ט רועי לוי</div>
                    <div className='history_info_title history_info_title_r'>12/09/25</div>
                    <div className='history_info_title history_info_title_r'>
                        <div className='status_cont'>
                            <img src={g_dot} />
                            <div>הושלם</div>
                        </div>
                    </div>

                </div>



            </div>
        </div>

    </div>

    </>
  )
}

export default Neshek_popup