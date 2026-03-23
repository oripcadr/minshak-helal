
import './Comp_popup.css'
import p_details_1 from './assets/p_details_1.png'
import more_icon from './assets/more_icon.png'


import close from './assets/close.png'
import comp_img from './assets/comp_img.png'



function Comp_popup(props:any) {
  return (
    <>
    <div className='worker_popup_cont'>
        <img src={close} className='close_icon' onClick={()=>props.set_show_worker_popup(false)}/>
        <div className='worker_popup_header'>
            <img src={comp_img} className='user_b'/>    
            <div className='user_b_text_cont'>
                <div className='user_b_text_main_r'>תעודת הרשאה מס׳ 123456</div>
                <div className='user_b_text_submain'>
                  לנשיאת כלי ירייה — ארגון שמירה לפי סעיף 10ג' לחוק כלי הירייה, תש"ט - 1949
                 
                </div>
            </div>    

        </div>

        <div className='worker_popup_top_area'>
            <div className='worker_popup_top_area_right worker_popup_top_area_right_l'>
                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>נתוני המנפיק</div>

            <div className='comp_cols_cont'>
                <div>
                    <div className='details_cont details_cont_first'>
                        <div className='details_cont_r'> מבצע סיור:</div>   
                        <div className='details_cont_b details_cont_b_cont'>יוסי כהן</div> 
                    </div>

                    <div className='details_cont'>
                        <div className='details_cont_r'>ת.ז:</div>   
                        <div className='details_cont_b details_cont_b_cont'>201456472</div> 
                    </div>

                    <div className='details_cont'>
                        <div className='details_cont_r'>תפקיד:</div>   
                        <div className='details_cont_b details_cont_b_cont'>בעל הרישיון המיוחד</div> 
                    </div>

                </div>


                <div>
                    <div className='details_cont details_cont_first'>
                        <div className='details_cont_r'>מספר ארגון::</div>   
                        <div className='details_cont_b details_cont_b_cont'>043600642</div> 
                    </div>

                    <div className='details_cont'>
                        <div className='details_cont_r'>טלפון ארגוני:</div>   
                        <div className='details_cont_b details_cont_b_cont'>03-9313193</div> 
                    </div>

                    <div className='details_cont'>
                        <div className='details_cont_r'>תוקף רישיון::</div>   
                        <div className='details_cont_b details_cont_b_cont'>30/06/2027</div> 
                    </div>

                </div>      
            </div>




            </div>

        </div>


     <div className='worker_popup_top_area'>
            <div className='worker_popup_top_area_right worker_popup_top_area_right_l'>
                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>פרטי המורשה</div>

            <div className='comp_cols_cont'>
                <div>
                    <div className='details_cont details_cont_first'>
                        <div className='details_cont_r'>שם מלא:</div>   
                        <div className='details_cont_b details_cont_b_cont'>חיפוש עובד...</div> 
                    </div>

                    <div className='details_cont'>
                        <div className='details_cont_r'>מספר זהות:</div>   
                        <div className='details_cont_b details_cont_b_cont'></div> 
                    </div>

                    <div className='details_cont'>
                        <div className='details_cont_r'>תפקיד:</div>   
                        <div className='details_cont_b details_cont_b_cont'></div> 
                    </div>

                </div>


                <div>
                    <div className='details_cont details_cont_first'>
                        <div className='details_cont_r'>איזור:</div>   
                        <div className='details_cont_b details_cont_b_cont'></div> 
                    </div>

                    <div className='details_cont'>
                        <div className='details_cont_r'>מספר רישוי ארגוני:</div>   
                        <div className='details_cont_b details_cont_b_cont'></div> 
                    </div>

       

                </div>      
            </div>




            </div>

        </div>


        <div className='worker_popup_top_area'>
            <div className='worker_popup_top_area_right worker_popup_top_area_right_el'>
                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>פרטי כלי הנשק</div>

            <div className='comp_cols_cont'>
                <div>
                    <div className='details_cont details_cont_first'>
                        <div className='details_cont_r'>יצרן:</div>   
                        <div className='details_cont_b details_cont_b_cont'>חיפוש יצרן...</div> 
                    </div>

                    <div className='details_cont'>
                        <div className='details_cont_r'>קליבר:</div>   
                        <div className='details_cont_b details_cont_b_cont'></div> 
                    </div>

                    <div className='details_cont'>
                        <div className='details_cont_r'>מספר הכלי:</div>   
                        <div className='details_cont_b details_cont_b_cont'></div> 
                    </div>

                    <div className='details_cont'>
                        <div className='details_cont_r'>סוג הכלי:</div>   
                        <div className='details_cont_b details_cont_b_cont'></div> 
                    </div>

                </div>


                <div>
                    <div className='details_cont details_cont_first'>
                        <div className='details_cont_r'>כמות כדורים (בספרות):</div>   
                        <div className='details_cont_b details_cont_b_cont'></div> 
                    </div>

                    <div className='details_cont'>
                        <div className='details_cont_r'>כמות כדורים (במילים):</div>   
                        <div className='details_cont_b details_cont_b_cont'></div> 
                    </div>

       

                </div>      
            </div>




            </div>

        </div>


     <div className='worker_popup_top_area'>
            <div className='worker_popup_top_area_right worker_popup_top_area_right_l'>
                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>שיטת נשיאה</div>

            <div className='comp_cols_cont comp_cols_cont_checkbox'>
                <div>
                   <div className='checkbox_com_cont'>
                        <input type="checkbox" />
                        <div className='details_cont_r_l'>נשיאה כללית (כולל מחוץ לשעות הפעילות)</div>
                   </div>

                    <div className='checkbox_com_cont'>
                        <input type="checkbox" />
                        <div className='details_cont_r_l'>נשיאה רק במסגרת פעילות מורשה (חייב החזרה לכספת בסיום)</div>
                   </div>

                </div>


                <div>
                    <div className='checkbox_com_cont'>
                        <input type="checkbox" />
                        <div className='details_cont_r_l'>נשיאה רק לכספת אישית באתר החמוש</div>
                   </div>

                    <div className='checkbox_com_cont'>
                        <input type="checkbox" />
                        <div className='details_cont_r_l'>העברה חמה בין מורשים</div>
                   </div>
                </div>      
            </div>




            </div>

        </div>


        <div className='worker_popup_top_area'>
            <div className='worker_popup_top_area_right worker_popup_top_area_right_sign'>
                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>חתימות</div>

            <div className='comp_cols_cont'>
                <div className='details_cont_h_main'>
            

                    <div className='details_cont details_cont_h'>
                        <div className='details_cont_r'>חתימת בעל הרישיון המיוחד / ממלא מקומו:</div>   
                        <div className='details_cont_b details_cont_b_cont'></div> 
                    </div>

                    <div className='details_cont details_cont_h'>
                        <div className='details_cont_r'>חותמת ארגון השמירה</div>   
                        <div className='details_cont_b details_cont_b_cont'></div> 
                    </div>

                    <div className='details_cont details_cont_h'>
                        <div className='details_cont_r'>חתימת נושא התעודה</div>   
                        <div className='details_cont_b details_cont_b_cont'></div> 
                    </div>

                </div>
     
            </div>




            </div>

        </div>

        <div className='bottom_btns_cont'>
            <div className='create_sert_btn'  onClick={()=>props.set_show_sucess()}>הנפק תעודה</div>
            <div className='save_sert_btn'>שמור טיוטה</div>
            <div className='save_sert_btn' onClick={()=>props.set_show_cert_popup()}>תצוגה מקדימה</div>
        </div>

    </div>

    </>
  )
}

export default Comp_popup