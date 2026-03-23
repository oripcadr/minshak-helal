
import './Worker_popup.css'

import p_details_1 from './assets/p_details_1.png'

import more_icon from './assets/more_icon.png'

import { useState } from 'react'


function Worker_popup_2(props:any) {

  const [show_payment_popup, set_show_payment_popup] = useState(false);

  return (
    <>
        <div className='personal_d_cont_main'>
            <div className='personal_d_cont'>
                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>שכר</div>

                <div className='settings_box_line_cont_w settings_box_line_cont_sup'>
                    <div className='settings_box_title_in'>סוג שכר</div>
                    {/* <input className='settings_box_input settings_box_input_sup' type="text" placeholder='שעתי'/> */}
                      <select  className='settings_box_input settings_box_input_sup settings_box_input_sup_select' value={props.worker.salery_type}>
                        <option value="1">שעתי</option>
                        <option value="2">יומי</option>
                        <option  value="3">גלובלי</option>
                    </select>
                </div>   

                <div className='settings_box_line_cont_w settings_box_line_cont_sup'>
                    <div className='settings_box_title_in'>שכר שעתי</div>
                  
                    <input className='settings_box_input settings_box_input_sup' type="text" value={props.worker.salery_hour}/>
                </div>   

                <div className='settings_box_line_cont_w settings_box_line_cont_sup'>
                    <div className='settings_box_title_in'>בנק</div>
                    <input className='settings_box_input settings_box_input_sup' type="text" />
                </div> 

                <div className='settings_box_line_cont_w settings_box_line_cont_sup'>
                    <div className='settings_box_title_in'>סניף</div>
                    <input className='settings_box_input settings_box_input_sup' type="text" />
                </div>     

                <div className='settings_box_line_cont_w settings_box_line_cont_sup'>
                    <div className='settings_box_title_in'>מספר חשבון</div>
                    <input className='settings_box_input settings_box_input_sup' type="text" />
                </div>

            </div>

            <div className='personal_d_cont'>
                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>נוכחות ושעות עבודה</div>

                <div className='h_title_cont_main'>
                    <div className='h_title_cont'>
                        <div className='h_title'>שעות חודשיות</div>
                        <div className='h_title_num'>186</div>
                    </div>

                    <div className='h_title_cont'>
                        <div className='h_title'>איחורים</div>
                        <div className='h_title_num'>2</div>
                    </div>
                
                </div>    

                <div className='h_title_cont_main'>
                    <div className='h_title_cont'>
                        <div className='h_title'>היעדרויות</div>
                        <div className='h_title_num'>1</div>
                    </div>

                    <div className='h_title_cont'>
                        <div className='h_title'>שעות נוספות</div>
                        <div className='h_title_num'>12</div>
                    </div>
                
                </div>  

                <div className='view_rep_btn'>צפה בדו"ח נוכחות</div>

            </div>

        </div>


        <div className='personal_d_cont_main_2'>
                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>תשלומים ומקדמות</div>

                <div className='add_payment_btn' onClick={()=>set_show_payment_popup(!show_payment_popup)}>הוספת תשלום +</div>

                {show_payment_popup?<div className='payment_popup_cont'>
                    <div className='payment_popup_title'>תשלום חדש</div>

                    <div className='settings_box_line_cont_w '>
                        <div className='settings_box_title_in'>סוג תשלום</div>
                        <select  className='settings_box_input settings_box_input_sup settings_box_input_sup_select'>
                            <option>משכורת</option>
                            <option>מקדמה חודשית</option>
                            <option>מקדמה דחופה</option>
                        </select>
                    </div>   

                    <div className='settings_box_line_cont_w '>
                        <div className='settings_box_title_in'>סכום</div>
                        <input className='settings_box_input settings_box_input_sup' type="text" />
                    </div>

                    <div className='settings_box_line_cont_w '>
                        <div className='settings_box_title_in'>תאריך</div>
                        <input className='settings_box_input settings_box_input_sup' type="text" />
                    </div>

                    <div className='settings_box_line_cont_w '>
                        <div className='settings_box_title_in'>סטטוס</div>
                        <select  className='settings_box_input settings_box_input_sup settings_box_input_sup_select'>
                            <option>שולם</option>
                            <option>מחכה לאישור</option>
                            <option>סורב</option>
                        </select>
                    </div>  

                    <textarea placeholder='הערות' className='comments_area_p'></textarea>

                    <div className='update_popup_btn' onClick={()=>set_show_payment_popup(false)}>הוסף</div>

                </div>:<></>}

                    <div className='table_header_cont table_header_cont_main_2'>
                        <div className='table_header'>תאריך</div>
                        <div className='table_header'>סכוום</div>
                        <div className='table_header'>סיבה</div>
                        <div className='table_header'>סטטוס</div>
                        <div className='table_header'>הערות</div>
                    </div>

                    <div className='table_header_cont'>
                     
                        <div className='table_row'>01/11/2024</div>
                        <div className='table_row'>	1,500 ₪</div>
                        <div className='table_row'>מקדמה חודשית</div>
                        <div className='table_row ' >  
                           <div className='table_row_payed'>שולם</div>
                        </div>

                        <div className='table_row'>על חשבון התלוש</div>
                    </div>

                     <div className='table_header_cont'>
                     
                        <div className='table_row'>01/11/2024</div>
                        <div className='table_row'>	1,500 ₪</div>
                        <div className='table_row'>מקדמה חודשית</div>
                        <div className='table_row'>  <div className='table_row_payed'>שולם</div></div>
                        <div className='table_row'>על חשבון התלוש</div>
                    </div>


                     <div className='table_header_cont'>
                     
                        <div className='table_row'>01/11/2024</div>
                        <div className='table_row'>	1,500 ₪</div>
                        <div className='table_row'>מקדמה חודשית</div>
                        <div className='table_row'>  <div className='table_row_payed'>שולם</div></div>
                        <div className='table_row'>על חשבון התלוש</div>
                    </div>


                     <div className='table_header_cont'>
                     
                        <div className='table_row'>01/11/2024</div>
                        <div className='table_row'>	1,500 ₪</div>
                        <div className='table_row'>מקדמה חודשית</div>
                        <div className='table_row'>  <div className='table_row_payed'>שולם</div></div>
                        <div className='table_row'>על חשבון התלוש</div>
                    </div>


                     <div className='table_header_cont'>
                     
                        <div className='table_row'>01/11/2024</div>
                        <div className='table_row'>	1,500 ₪</div>
                        <div className='table_row'>מקדמה חודשית</div>
                        <div className='table_row'>  <div className='table_row_payed'>שולם</div></div>
                        <div className='table_row'>על חשבון התלוש</div>
                    </div>


                     <div className='table_header_cont'>
                     
                        <div className='table_row'>01/11/2024</div>
                        <div className='table_row'>	1,500 ₪</div>
                        <div className='table_row'>מקדמה חודשית</div>
                        <div className='table_row'>  <div className='table_row_payed'>שולם</div></div>
                        <div className='table_row'>על חשבון התלוש</div>
                    </div>


                     <div className='table_header_cont'>
                     
                        <div className='table_row'>01/11/2024</div>
                        <div className='table_row'>	1,500 ₪</div>
                        <div className='table_row'>מקדמה חודשית</div>
                        <div className='table_row'>  <div className='table_row_payed'>שולם</div></div>
                        <div className='table_row'>על חשבון התלוש</div>
                    </div>



        </div>

    </>
  )
}

export default Worker_popup_2