

//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Site_page.css'

// import Dashboard from './Dashboard'
import cal_icon from './assets/cal_icon.png'
//import warning_site from './assets/warning_site.png'

//import filter from './assets/filter.png'

//import {  useState } from 'react'


function Site_page_rep_check() {

 // const [selected_tab, set_selected_tab] = useState(1);
//   const [selected_tab_1, set_selected_tab_1] = useState(1);
    
  return (
    <>
    <div className='site_page_general_info_cont'>
        
          <div>
    
            <div className='shifts_main_box_cont'>
                    <div className='shifts_main_box'>
                        <div className='shifts_main_box_title'>דו״ח שעות נוספות</div>
                        <div className='shifts_main_box_subtitle'>פירוט שעות נוספות לכל עובד לצורכי חישוב שכר</div>

                        <select className='shifts_main_box_select'>
                            <option>דו״ח חודשי</option>
                            <option>דו״ח יומי</option>
                            <option>דו״ח שנתי</option>
                            <option>בחירת טווח תאריכים</option>
                        </select>

                        <div className='exp_btn_cont'>
                            <div className='exp_excel'>ייצוא Excel</div>   
                            <div className='exp_pdf'>ייצא PDF</div>
                        </div>
                    </div>


                    <div className='shifts_main_box'>
                        <div className='shifts_main_box_title'>דו״ח מאחרים ונעדרים</div>
                        <div className='shifts_main_box_subtitle'>פירוט שעות נוספות לכל עובד לצורכי חישוב שכר</div>

                        <select className='shifts_main_box_select'>
                            <option>דו״ח חודשי</option>
                            <option>דו״ח יומי</option>
                            <option>דו״ח שנתי</option>
                            <option>בחירת טווח תאריכים</option>
                        </select>

                        <div className='exp_btn_cont'>
                            <div className='exp_excel'>ייצוא Excel</div>   
                            <div className='exp_pdf'>ייצא PDF</div>
                        </div>
                    </div>

                         <div className='shifts_main_box'>
                        <div className='shifts_main_box_title'>דו״ח שעות לחודש</div>
                        <div className='shifts_main_box_subtitle'>פירוט שעות נוספות לכל עובד לצורכי חישוב שכר</div>

                        <select className='shifts_main_box_select'>
                            <option>דו״ח חודשי</option>
                            <option>דו״ח יומי</option>
                            <option>דו״ח שנתי</option>
                            <option>בחירת טווח תאריכים</option>
                        </select>

                        <div className='exp_btn_cont'>
                            <div className='exp_excel'>ייצוא Excel</div>   
                            <div className='exp_pdf'>ייצא PDF</div>
                        </div>
                    </div>


                         <div className='shifts_main_box'>
                        <div className='shifts_main_box_title'>דו״ח שכר למחלקת הנה״ח</div>
                        <div className='shifts_main_box_subtitle'>פירוט שעות נוספות לכל עובד לצורכי חישוב שכר</div>

                        <select className='shifts_main_box_select'>
                            <option>דו״ח חודשי</option>
                            <option>דו״ח יומי</option>
                            <option>דו״ח שנתי</option>
                            <option>בחירת טווח תאריכים</option>
                        </select>

                        <div className='exp_btn_cont'>
                            <div className='exp_excel'>ייצוא Excel</div>   
                            <div className='exp_pdf'>ייצא PDF</div>
                        </div>
                    </div>


                         <div className='shifts_main_box'>
                        <div className='shifts_main_box_title'>דו״ח נוכחות למנהלי אתרים</div>
                        <div className='shifts_main_box_subtitle'>פירוט שעות נוספות לכל עובד לצורכי חישוב שכר</div>

                        <select className='shifts_main_box_select'>
                            <option>דו״ח חודשי</option>
                            <option>דו״ח יומי</option>
                            <option>דו״ח שנתי</option>
                            <option>בחירת טווח תאריכים</option>
                        </select>

                        <div className='exp_btn_cont'>
                            <div className='exp_excel'>ייצוא Excel</div>   
                            <div className='exp_pdf'>ייצא PDF</div>
                        </div>
                    </div>


                         <div className='shifts_main_box'>
                        <div className='shifts_main_box_title'>דו״ח איוש משמרות</div>
                        <div className='shifts_main_box_subtitle'>פירוט שעות נוספות לכל עובד לצורכי חישוב שכר</div>

                        <select className='shifts_main_box_select'>
                            <option>דו״ח חודשי</option>
                            <option>דו״ח יומי</option>
                            <option>דו״ח שנתי</option>
                            <option>בחירת טווח תאריכים</option>
                        </select>

                        <div className='exp_btn_cont'>
                            <div className='exp_excel'>ייצוא Excel</div>   
                            <div className='exp_pdf'>ייצא PDF</div>
                        </div>
                    </div>


                </div>



            </div>

            <div>
                <div className='fast_actions_site_cont'>
                    <div className='p_details_title'>פעולות מהירות</div>

                    <div className='btn_exp_cont_site'>
                      
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    <div className='add_meavteah_btn file_add_check'>דו״ח מותאם אישית


                        <div className='file_check_date'>
                            <img src={cal_icon}/>
                            <div>תאריך התחלה</div>
                        </div>

                        <div className='file_check_date'>
                            <img src={cal_icon}/>
                            <div>תאריך סיום</div>
                        </div>

                        <div className='file_add_check_text'>בחר מידע לכלול</div>
                        <div className='rep_options_cont'>
                            <input type="checkbox"/>
                            <div>נוכחות</div>
                        </div>
                         <div className='rep_options_cont'>
                            <input type="checkbox"/>
                            <div>ציוד</div>
                        </div>
                         <div className='rep_options_cont'>
                            <input type="checkbox"/>
                            <div>אנומליות</div>
                        </div>

                        <div className='rep_options_cont'>
                            <input type="checkbox"/>
                            <div>נשקים</div>
                        </div>

                        <div className='rep_options_cont'>
                            <input type="checkbox"/>
                            <div>סיורים</div>
                        </div>

                        <div className='rep_options_cont'>
                            <input type="checkbox"/>
                            <div>העברות חמות</div>
                        </div>

                    <div className='exp_excel_cont'>
                        <div className='exp_excel exp_excel_l '>ייצוא Excel</div>   
                        <div className='exp_pdf exp_excel_l'>ייצא PDF</div>
                        </div>

                    </div>

                  
           
                </div>
            </div>
        </div>
    </>
  )
}

export default Site_page_rep_check