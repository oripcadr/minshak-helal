

//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Site_page.css'
import { useEffect, useRef, useState } from "react"

import gray_dot from './assets/gray_dot.png'
import add_icon from './assets/add_icon.png'
import user_m_1 from './assets/user_m_1.png'

import arrow_right_w from './assets/arrow_r_w.png'
import arrow_left_w from './assets/arrow_left_w.png'

// import Dashboard from './Dashboard'
//import cal_icon from './assets/cal_icon.png'


import filter from './assets/filter.png'
import user_s_2 from './assets/user_s_2.png'
//import user_m_1 from './assets/user_m_1.png'
//import axios from 'axios'
import Popup_shift from './Popup_shift'
import Popup_shift_settings from './Popup_shift_settings'

function Site_page_shifts_1(props:any) {

 // const [selected_tab, set_selected_tab] = useState(1);
//   const [selected_tab_1, set_selected_tab_1] = useState(1);
    
    //const navigate = useNavigate();
    
    const [add_mishmeret_popup, set_add_mishmeret_popup] = useState<any>(0);
    const [add_shibuz_popup, set_add_shibuz_popup] = useState<any>(false);
  //  const [mishmeret_type, set_mishmeret_type] = useState(1);
    const [show_popup_shift, set_show_popup_shift] = useState(false);
    const [show_popup_shift_settings, set_show_popup_shift_settings] = useState(false);
    const [show_shibuz_day_popup, set_show_shibuz_day_popup] = useState(false);
    const [show_final_shibuz, set_show_final_shibuz] = useState(false);
    
  //  const [page_selected, set_page_selected] = useState(1);

    // const [workers, set_workers] = useState<any>([]);
    // const [mishmeret_type_in, set_mishmeret_type_in] = useState<any>(0);
    // const [start_time, set_start_time] = useState<any>('');
    // const [end_time, set_end_time] = useState<any>('');
    // const [date_shift, set_date_shift] = useState<any>('');
    
    const [sunday, set_sunday] = useState<any>();
    const [monday, set_monday] = useState<any>();
    const [tusday, set_tusday] = useState<any>();
    const [wensday, set_wensday] = useState<any>();
    const [thursday, set_thursday] = useState<any>();
    const [friday, set_friday] = useState<any>();

    const [current_month, set_current_month] = useState<any>('');
   // const [current_year, set_current_year] = useState<any>('');
   // const [shifts, set_shifts] = useState<any>('');

    const [edit_shift, set_edit_shift] = useState<any>('');
    const [current_sunday, set_current_sunday] = useState<any>('');
    
    useEffect(() => {
      //  get_all_workers();
        getCurrentWeek();
      //  get_shifts();
    }, []);

    
    // function get_all_workers(){

    //   let payload = new FormData();
    
    //   axios({
    //     method: 'post',
    //     url: globalThis.app.current+'/get_all_workers',
    //     data: payload,
    //     headers: { "Content-Type": "multipart/form-data" }, 
    //   }).then(res => {

    //     if (res.data.recordset.length>0){
    //        set_workers(res.data.recordset);

    //     } 
          
    //   });
  
    // }


    
    
    const popupRef_3 = useRef<any>(null);

  
    useEffect(() => {

    function handleClickOutside(event:any) {
      if (popupRef_3.current && !popupRef_3.current.contains(event.target)) {
       set_add_mishmeret_popup('');
      }
    }

    if (add_mishmeret_popup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [add_mishmeret_popup]);

    

  
    const popupRef_4 = useRef<any>(null);

  
    useEffect(() => {

    function handleClickOutside(event:any) {
      if (popupRef_4.current && !popupRef_4.current.contains(event.target)) {
       set_edit_shift('');
      }
    }

    if (edit_shift) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [edit_shift]);


    function get_prev_week(){
       // const today = new Date();
      //  const day = today.getDay(); 

        const sunday = new Date(current_sunday);
        sunday.setDate(current_sunday.getDate() - 7);

        const monday = new Date(sunday);
        monday.setDate(sunday.getDate() + 1);

        const tusday = new Date(sunday);
        tusday.setDate(sunday.getDate() + 2);

        const wensday = new Date(sunday);
        wensday.setDate(sunday.getDate() + 3);


        const thursday = new Date(sunday);
        thursday.setDate(sunday.getDate() + 4);


        const friday = new Date(sunday);
        friday.setDate(sunday.getDate() + 5);

        // const saturday = new Date(sunday);
        // saturday.setDate(sunday.getDate() + 6);

       set_sunday(sunday.getFullYear() +"-"+ (sunday.getMonth()+1) +"-"+ sunday.getDate() );
       set_monday(monday.getFullYear() +"-"+ (monday.getMonth()+1) +"-"+ monday.getDate() );
       set_tusday(tusday.getFullYear() +"-"+ (tusday.getMonth()+1) +"-"+ tusday.getDate() );
       set_wensday(wensday.getFullYear() +"-"+ (wensday.getMonth()+1) +"-"+ wensday.getDate() );
       set_thursday(thursday.getFullYear() +"-"+ (thursday.getMonth()+1) +"-"+ thursday.getDate());
       set_friday( friday.getFullYear() +"-"+ (friday.getMonth()+1) +"-"+ friday.getDate());

       set_current_month(sunday.toLocaleString('en-US', { month: 'long' }))
       set_current_sunday(sunday);
    }



    function getCurrentWeek() {
        debugger;
        const today = new Date();
        const day = today.getDay(); 

        const sunday = new Date(today);
        sunday.setDate(today.getDate() - day);

        const monday = new Date(sunday);
        monday.setDate(sunday.getDate() + 1);

        const tusday = new Date(sunday);
        tusday.setDate(sunday.getDate() + 2);

        const wensday = new Date(sunday);
        wensday.setDate(sunday.getDate() + 3);


        const thursday = new Date(sunday);
        thursday.setDate(sunday.getDate() + 4);


        const friday = new Date(sunday);
        friday.setDate(sunday.getDate() + 5);

        // const saturday = new Date(sunday);
        // saturday.setDate(sunday.getDate() + 6);

       set_sunday(sunday.getFullYear() +"-"+ (sunday.getMonth()+1) +"-"+ sunday.getDate() );
       set_monday(monday.getFullYear() +"-"+ (monday.getMonth()+1) +"-"+ monday.getDate() );
       set_tusday(tusday.getFullYear() +"-"+ (tusday.getMonth()+1) +"-"+ tusday.getDate() );
       set_wensday(wensday.getFullYear() +"-"+ (wensday.getMonth()+1) +"-"+ wensday.getDate() );
       set_thursday(thursday.getFullYear() +"-"+ (thursday.getMonth()+1) +"-"+ thursday.getDate());
       set_friday( friday.getFullYear() +"-"+ (friday.getMonth()+1) +"-"+ friday.getDate());

       set_current_month(sunday.toLocaleString('en-US', { month: 'long' }))
     //  set_current_year(sunday.getFullYear())
      set_current_sunday(sunday);
    }


    
    function get_next_week(){
     //   const today = new Date();
        //const day = today.getDay(); 

        const sunday = new Date(current_sunday);
        sunday.setDate(current_sunday.getDate() + 7);


        const monday = new Date(sunday);
        monday.setDate(sunday.getDate() + 1);

        const tusday = new Date(sunday);
        tusday.setDate(sunday.getDate() + 2);

        const wensday = new Date(sunday);
        wensday.setDate(sunday.getDate() + 3);


        const thursday = new Date(sunday);
        thursday.setDate(sunday.getDate() + 4);


        const friday = new Date(sunday);
        friday.setDate(sunday.getDate() + 5);

        // const saturday = new Date(sunday);
        // saturday.setDate(sunday.getDate() + 6);

       set_sunday(sunday.getFullYear() +"-"+ (sunday.getMonth()+1) +"-"+ sunday.getDate() );
       set_monday(monday.getFullYear() +"-"+ (monday.getMonth()+1) +"-"+ monday.getDate() );
       set_tusday(tusday.getFullYear() +"-"+ (tusday.getMonth()+1) +"-"+ tusday.getDate() );
       set_wensday(wensday.getFullYear() +"-"+ (wensday.getMonth()+1) +"-"+ wensday.getDate() );
       set_thursday(thursday.getFullYear() +"-"+ (thursday.getMonth()+1) +"-"+ thursday.getDate());
       set_friday( friday.getFullYear() +"-"+ (friday.getMonth()+1) +"-"+ friday.getDate());

       set_current_month(sunday.toLocaleString('en-US', { month: 'long' }));
       set_current_sunday(sunday);

    }

  return (
    <>
    <div className='site_page_general_info_cont'>
        
          <div>

            <div className='shifts_main_cont'>
                <div className='shifts_main_right'>
                    <div className='shifts_main_right_top_cont'>
                        <div className='shifts_main_right_top_title'>משמרות לא מאויישות</div>
                        <div className='shifts_main_right_top_count'>12</div>

                        <div className='top_btn_cont_main'>
                            <div className='top_btn_cont'>
                                <div className='top_btn top_btn_s'>הכל</div>
                                <div className='top_btn top_btn_s'>בוקר מוקדם</div>
                                <div className='top_btn top_btn_s'>בוקר</div>
                                <div className='top_btn top_btn_s'>צהריים</div>
                                <div className='top_btn top_btn_s'>ערב</div>
                            </div>
                        </div>

                        <div className='p_shift_box_cont'>
                          
                            <div className='p_shift_box_title_cont'>
                                <div className='p_shift_box_title'>בוקר מוקדם</div>
                                <div className='p_shift_box_subtitle'>
                                    <div>יום ראשון</div>
                                    <img src={gray_dot} />
                                    <div>03-00-12:00</div>
                                </div>
                            </div>
                        </div>

                       <div className='p_shift_box_cont'>
                          
                            <div className='p_shift_box_title_cont'>
                                <div className='p_shift_box_title'>בוקר</div>
                                <div className='p_shift_box_subtitle'>
                                    <div>יום ראשון</div>
                                    <img src={gray_dot} />
                                    <div>03-00-12:00</div>
                                </div>
                            </div>
                        </div>
                        <div className='p_shift_box_cont'>
                          
                            <div className='p_shift_box_title_cont'>
                                <div className='p_shift_box_title'>צהריים</div>
                                <div className='p_shift_box_subtitle'>
                                    <div>יום ראשון</div>
                                    <img src={gray_dot} />
                                    <div>03-00-12:00</div>
                                </div>
                            </div>
                        </div>

                        <div className='p_shift_box_cont'>
                          
                            <div className='p_shift_box_title_cont'>
                                <div className='p_shift_box_title'>ערב</div>
                                <div className='p_shift_box_subtitle'>
                                    <div>יום ראשון</div>
                                    <img src={gray_dot} />
                                    <div>03-00-12:00</div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className='shifts_main_right_top_cont'>
                        <div className='shifts_main_right_top_title'>משמרות ריקות מאילוצים</div>
                        <div className='shifts_main_right_top_count'>3</div>

                        <div className='top_btn_cont_main'>
                            <div className='top_btn_cont'>
                                <div className='top_btn top_btn_s'>הכל</div>
                                <div className='top_btn top_btn_s'>בוקר מוקדם</div>
                                <div className='top_btn top_btn_s'>בוקר</div>
                                <div className='top_btn top_btn_s'>צהריים</div>
                                <div className='top_btn top_btn_s'>ערב</div>
                            </div>
                        </div>

                        
                        <div className='p_shift_box_cont'>
                          
                            <div className='p_shift_box_title_cont'>
                                <div className='p_shift_box_title'>בוקר מוקדם</div>
                                <div className='p_shift_box_subtitle'>
                                    <div>יום ראשון</div>
                                    <img src={gray_dot} />
                                    <div>03-00-12:00</div>
                                </div>
                            </div>
                        </div>

                       <div className='p_shift_box_cont'>
                          
                            <div className='p_shift_box_title_cont'>
                                <div className='p_shift_box_title'>בוקר</div>
                                <div className='p_shift_box_subtitle'>
                                    <div>יום ראשון</div>
                                    <img src={gray_dot} />
                                    <div>03-00-12:00</div>
                                </div>
                            </div>
                        </div>
                        <div className='p_shift_box_cont'>
                          
                            <div className='p_shift_box_title_cont'>
                                <div className='p_shift_box_title'>צהריים</div>
                                <div className='p_shift_box_subtitle'>
                                    <div>יום ראשון</div>
                                    <img src={gray_dot} />
                                    <div>03-00-12:00</div>
                                </div>
                            </div>
                        </div>

                        <div className='p_shift_box_cont'>
                          
                            <div className='p_shift_box_title_cont'>
                                <div className='p_shift_box_title'>ערב</div>
                                <div className='p_shift_box_subtitle'>
                                    <div>יום ראשון</div>
                                    <img src={gray_dot} />
                                    <div>03-00-12:00</div>
                                </div>
                            </div>
                        </div>
                        

                    </div>


                      <div className='shifts_main_right_top_cont'>
                        <div className='shifts_main_right_top_title'>שיבוצים קבועים</div>
                        <div className='shifts_main_right_top_count'>3</div>

                        <img src={add_icon} className='add_icon_shift' onClick={()=>set_add_shibuz_popup(!add_shibuz_popup)}/>

                        {add_shibuz_popup?<div className='shibuz_popup_cont'>
                            <div className='shibuz_popup_title'>הוספת שיבוץ קבוע</div>
                            <div className='shibuz_popup_search'>חיפוש עובד</div>

                            <div className='shibuz_popup_subtitle'>בחירת משמרת</div>
                            <div className='select_shift_cont_1'>
                                <div>בוקר מוקדם</div>
                                <div className='white_dot_sep'></div>
                                <div>6:00-14:00</div>
                            </div>

                            <div className='select_shift_cont_2'>
                                <div>בוקר</div>
                                <div className='white_dot_sep'></div>
                                <div>6:00-14:00</div>
                            </div>

                            <div className='select_shift_cont_3'>
                                <div>צהריים</div>
                                <div className='white_dot_sep'></div>
                                <div>6:00-14:00</div>
                            </div>
                            <div className='select_shift_cont_4'>
                                <div>תגבור ערב</div>
                                <div className='white_dot_sep'></div>
                                <div>6:00-14:00</div>
                            </div>

                            <div className='select_shift_cont_5'>
                                <div>בוקר מוקדם</div>
                                <div className='white_dot_sep'></div>
                                <div>6:00-14:00</div>
                            </div>

                            <div className='add_shibuz_btn'>הוסף שיבוץ קבוע</div>

                        </div>:<></>}

                        <div className='top_btn_cont_main'>
                            <div className='top_btn_cont'>
                                <div className='top_btn top_btn_s'>הכל</div>
                                <div className='top_btn top_btn_s'>בוקר מוקדם</div>
                                <div className='top_btn top_btn_s'>בוקר</div>
                                <div className='top_btn top_btn_s'>צהריים</div>
                                <div className='top_btn top_btn_s'>ערב</div>
                            </div>
                        </div>
                        
                        <div className='p_shift_box_cont'>
                          
                            <div className='p_shift_box_title_cont'>
                                <div className='p_shift_box_title'>בוקר מוקדם</div>
                                <div >
                                    <div className='worker_name_shift'>שלומי שלומייביץ׳
                                        <img src={user_s_2} />
                                    </div>
                                    <div className='worker_name_shift'>שלומי שלומייביץ׳  <img src={user_s_2} /></div>
                                    <div className='worker_name_shift'>שלומי שלומייביץ׳  <img src={user_s_2} /></div>
                                </div>
                            </div>
                        </div>

                       <div className='p_shift_box_cont'>
                          
                            <div className='p_shift_box_title_cont'>
                                <div className='p_shift_box_title'>בוקר</div>
                                <div className='p_shift_box_subtitle'> 
                                    <div className='worker_name_shift'>שלומי שלומייביץ׳
                                        <img src={user_s_2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p_shift_box_cont'>
                          
                            <div className='p_shift_box_title_cont'>
                                <div className='p_shift_box_title'>צהריים</div>
                                <div className='worker_name_shift'>שלומי שלומייביץ׳
                                    <img src={user_s_2} />
                                </div>
                            </div>
                        </div>

                        <div className='p_shift_box_cont'>
                          
                            <div className='p_shift_box_title_cont'>
                                <div className='p_shift_box_title'>ערב</div>
                                <div className='worker_name_shift'>שלומי שלומייביץ׳
                                    <img src={user_s_2} />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className='shifts_main_left'>
                    <div className='shifts_main_left_header_cont'>
                        <div className='shifts_main_right_top_title'>סידור עבודה</div>
                        {/* <div className='top_btn_cont'>
                            <div className='top_btn top_btn_s'>יומי</div>
                            <div className='top_btn top_btn_s'>שבועי</div>
                        </div> */}

                      
                    </div>

                    <div className='shift_popup_btn_site' >שיבוץ אוטומטי</div>

                    {/* <div className='shift_popup_btn' onClick={()=>set_show_popup_shift(true)}>משמרות לא מאויישות 17</div> */}

                    <div className='btn_exp_cont_shift'>
                        <input type="text" placeholder='חיפוש עובד לפי שם, תתפקיד, סניף, מסט״ב…' className='btn_exp_cont_input'/>
                        <div className='select_period'>סינון
                            <img src={filter} className='filter_icon'/>
                        </div>
                        <div className='export_btn'>ייצוא</div>
                    </div>


                    <div className='headr_shifts_main_left'>
                        <div className='headr_shifts_main_left_in headr_shifts_main_left_in_first headr_shifts_main_left_in_first_month' ><img src={arrow_left_w} onClick={()=>get_next_week()}/> {current_month} {sunday} - {friday}<img src={arrow_right_w} onClick={()=>get_prev_week()}/></div>

                        <div className='headr_shifts_main_left_in'>
                            <div>ראשון</div>
                            <div className='headr_shifts_main_left_in_g'>{sunday}</div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                            <div>שני</div>
                            <div className='headr_shifts_main_left_in_g'>{monday}</div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                            <div>שלישי</div>
                            <div className='headr_shifts_main_left_in_g'>{tusday}</div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                            <div>רביעי</div>
                            <div className='headr_shifts_main_left_in_g'>{wensday}</div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                            <div>חמישי</div>
                            <div className='headr_shifts_main_left_in_g'>{thursday}</div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                            <div>שישי</div>
                            <div className='headr_shifts_main_left_in_g'>{friday}</div>
                        </div>

                    </div>

                    <div className='main_shifts_main_left_1'>
                        <div className='shift_cont_row'>
                        <div className='headr_shifts_main_left_in headr_shifts_main_left_in_first_1'>
                            <div className='main_shifts_main_left_title_cont_1'>
                           
                                <div className='main_shifts_main_left_title_1'>בוקר מוקדם</div>

                                <div className='main_shifts_main_left_title_sub'>3:00-12:00 * 10 מאבטחים</div>
                            </div>

                        </div>

                        <div className='headr_shifts_main_left_in'>
                            <div className='headr_shifts_main_left_in_first_1'>
                               {!show_final_shibuz?<div className='cal_shift_btn' onClick={()=>set_show_shibuz_day_popup(!show_shibuz_day_popup)}>שיבוץ</div>:
                               <div>
                                    <div className='shibuz_day_worker_list'>שלומי שלומייביץ׳
                                        <img src={user_m_1} />
                                    </div>

                                    <div className='shibuz_day_worker_list'>שחר קרן 
                                        <img src={user_m_1} />
                                    </div>

                                    <div className='shibuz_day_worker_list'>יוסף מתיתיהו
                                        <img src={user_m_1} />
                                    </div>

                                    <div className='shibuz_day_worker_list'>אהרה ברנע
                                        <img src={user_m_1} />
                                    </div>

                                    <div className='shibuz_day_worker_list'>ישראל ליבוביץ׳ 
                                        <img src={user_m_1} />
                                    </div>

                                    <div className='edit_shibuz_day_worker_btn'>עריכה</div>

                                </div>}
                            </div>

                            {show_shibuz_day_popup?<div className='shibuz_day_popup'>
                                <div className='shibuz_day_popup_title'>פנויים לשיבוץ</div>
                                <div className='shibuz_day_worker_cont'>
                                    <div className='shibuz_day_worker'>שלומי שלומייביץ׳
                                        <img src={user_m_1} />
                                    </div>

                                    <div className='shibuz_day_worker'>שחר קרן 
                                        <img src={user_m_1} />
                                    </div>

                                    <div className='shibuz_day_worker'>יוסף מתיתיהו
                                        <img src={user_m_1} />
                                    </div>

                                    <div className='shibuz_day_worker'>אהרה ברנע
                                        <img src={user_m_1} />
                                    </div>

                                    <div className='shibuz_day_worker'>ישראל ליבוביץ׳ 
                                        <img src={user_m_1} />
                                    </div>

                                    <div className='shibuz_day_worker'>אורי אחדות
                                        <img src={user_m_1} />
                                    </div>

                                </div>

                                <div className='shibuz_day_worker_line'></div>

                                 <div className='shibuz_day_popup_title'>משובצים</div>
                                 <div className='shibuz_count'>6 מתוך 10</div>
                                <div className='shibuz_day_worker_cont'>
                                    <div className='shibuz_day_worker'>שלומי שלומייביץ׳
                                        <img src={user_m_1} />
                                    </div>

                                    <div className='shibuz_day_worker'>שחר קרן 
                                        <img src={user_m_1} />
                                    </div>

                                    <div className='shibuz_day_worker'>יוסף מתיתיהו
                                        <img src={user_m_1} />
                                    </div>

                                    <div className='shibuz_day_worker'>אהרה ברנע
                                        <img src={user_m_1} />
                                    </div>

                                    <div className='shibuz_day_worker'>ישראל ליבוביץ׳ 
                                        <img src={user_m_1} />
                                    </div>

                                    <div className='shibuz_day_worker'>אורי אחדות
                                        <img src={user_m_1} />
                                    </div>

                                </div>

                                <div className='save_shibuz_btn_cont'>
                                    <div className='save_shibuz_btn' onClick={()=>{set_show_final_shibuz(true);set_show_shibuz_day_popup(false)}}>שמור שיבוץ</div>
                                    <div className='cancel_shibuz_btn' onClick={()=>set_show_shibuz_day_popup(false)}>ביטול</div>
                                </div>

                            </div>:<></>}

                        </div>

                        <div className='headr_shifts_main_left_in'>
                           <div className='headr_shifts_main_left_in_first_1'>
                                <div className='cal_shift_btn'>שיבוץ</div>
                            </div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                            <div className='headr_shifts_main_left_in_first_1'>
                                <div className='cal_shift_btn'>שיבוץ</div>
                            </div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                          <div className='headr_shifts_main_left_in_first_1'>
                                <div className='cal_shift_btn'>שיבוץ</div>
                            </div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                            <div className='headr_shifts_main_left_in_first_1'>
                                <div className='cal_shift_btn'>שיבוץ</div>
                            </div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                            <div className='headr_shifts_main_left_in_first_1'>
                                <div className='cal_shift_btn'>שיבוץ</div>
                            </div>
                        </div>
                        </div>

                         <div className='shift_cont_row'>
                         <div className='headr_shifts_main_left_in headr_shifts_main_left_in_first_2'>
                            <div className='main_shifts_main_left_title_cont_1'>
                           
                                <div className='main_shifts_main_left_title_1'>בוקר</div>

                                <div className='main_shifts_main_left_title_sub'>6:00-14:00 * 10 מאבטחים</div>
                            </div>

                            
                         </div>

                        <div className='headr_shifts_main_left_in'>
                            <div className='headr_shifts_main_left_in_first_2'>
                                <div className='cal_shift_btn_2'>שיבוץ</div>
                            </div>

                        </div>

           

                        <div className='headr_shifts_main_left_in'>
                           <div className='headr_shifts_main_left_in_first_2'>
                                <div className='cal_shift_btn_2'>שיבוץ</div>
                            </div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                            <div className='headr_shifts_main_left_in_first_2'>
                                <div className='cal_shift_btn_2'>שיבוץ</div>
                            </div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                          <div className='headr_shifts_main_left_in_first_2'>
                                <div className='cal_shift_btn_2'>שיבוץ</div>
                            </div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                            <div className='headr_shifts_main_left_in_first_2'>
                                <div className='cal_shift_btn_2'>שיבוץ</div>
                            </div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                            <div className='headr_shifts_main_left_in_first_2'>
                                <div className='cal_shift_btn_2'>שיבוץ</div>
                            </div>
                        </div>
                        </div>

                            <div className='shift_cont_row'>
                         <div className='headr_shifts_main_left_in headr_shifts_main_left_in_first_3'>
                            <div className='main_shifts_main_left_title_cont_1'>
                           
                                <div className='main_shifts_main_left_title_1'>צהריים</div>

                                <div className='main_shifts_main_left_title_sub'>6:00-14:00 * 10 מאבטחים</div>
                            </div>

                            
                         </div>

                        <div className='headr_shifts_main_left_in'>
                            <div className='headr_shifts_main_left_in_first_3'>
                                <div className='cal_shift_btn_3'>שיבוץ</div>
                            </div>

                        </div>

           

                        <div className='headr_shifts_main_left_in'>
                           <div className='headr_shifts_main_left_in_first_3'>
                                <div className='cal_shift_btn_3'>שיבוץ</div>
                            </div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                            <div className='headr_shifts_main_left_in_first_3'>
                                <div className='cal_shift_btn_3'>שיבוץ</div>
                            </div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                          <div className='headr_shifts_main_left_in_first_3'>
                                <div className='cal_shift_btn_3'>שיבוץ</div>
                            </div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                            <div className='headr_shifts_main_left_in_first_3'>
                                <div className='cal_shift_btn_3'>שיבוץ</div>
                            </div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                            <div className='headr_shifts_main_left_in_first_3'>
                                <div className='cal_shift_btn_3'>שיבוץ</div>
                            </div>
                        </div>
                        </div>

                            <div className='shift_cont_row'>
                         <div className='headr_shifts_main_left_in headr_shifts_main_left_in_first_4'>
                            <div className='main_shifts_main_left_title_cont_1'>
                           
                                <div className='main_shifts_main_left_title_1'>תגבור ערב</div>

                                <div className='main_shifts_main_left_title_sub'>6:00-14:00 * 10 מאבטחים</div>
                            </div>

                            
                         </div>

                        <div className='headr_shifts_main_left_in'>
                            <div className='headr_shifts_main_left_in_first_4'>
                                <div className='cal_shift_btn_4'>שיבוץ</div>
                            </div>

                        </div>

           

                        <div className='headr_shifts_main_left_in'>
                           <div className='headr_shifts_main_left_in_first_4'>
                                <div className='cal_shift_btn_4'>שיבוץ</div>
                            </div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                            <div className='headr_shifts_main_left_in_first_4'>
                                <div className='cal_shift_btn_4'>שיבוץ</div>
                            </div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                          <div className='headr_shifts_main_left_in_first_4'>
                                <div className='cal_shift_btn_4'>שיבוץ</div>
                            </div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                            <div className='headr_shifts_main_left_in_first_4'>
                                <div className='cal_shift_btn_4'>שיבוץ</div>
                            </div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                            <div className='headr_shifts_main_left_in_first_4'>
                                <div className='cal_shift_btn_4'>שיבוץ</div>
                            </div>
                        </div>
                        </div>

                            <div className='shift_cont_row'>
                         <div className='headr_shifts_main_left_in headr_shifts_main_left_in_first_5'>
                            <div className='main_shifts_main_left_title_cont_1'>
                           
                                <div className='main_shifts_main_left_title_1'>בוקר מוקדם</div>

                                <div className='main_shifts_main_left_title_sub'>6:00-14:00 * 10 מאבטחים</div>
                            </div>

                            
                         </div>

                        <div className='headr_shifts_main_left_in'>
                            <div className='headr_shifts_main_left_in_first_5'>
                                <div className='cal_shift_btn_5'>שיבוץ</div>
                            </div>

                        </div>

           

                        <div className='headr_shifts_main_left_in'>
                           <div className='headr_shifts_main_left_in_first_5'>
                                <div className='cal_shift_btn_5'>שיבוץ</div>
                            </div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                            <div className='headr_shifts_main_left_in_first_5'>
                                <div className='cal_shift_btn_5'>שיבוץ</div>
                            </div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                          <div className='headr_shifts_main_left_in_first_5'>
                                <div className='cal_shift_btn_5'>שיבוץ</div>
                            </div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                            <div className='headr_shifts_main_left_in_first_5'>
                                <div className='cal_shift_btn_5'>שיבוץ</div>
                            </div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                            <div className='headr_shifts_main_left_in_first_5'>
                                <div className='cal_shift_btn_5'>שיבוץ</div>
                            </div>
                        </div>
                        </div>

                    </div>

                    

                    

                </div>
            </div>

            </div>

            <div className='back_btn_shist_cont'>
                <div className='back_btn_shist' onClick={()=>props.set_selected_tab(5)}>חזרה לניהול אתר</div>
                <div className='save_changes_btn_shist'>שמור שינויים</div>
                <div className='exit_nosave_btn_shist'>יציאה ללא שמירת שינויים</div>

                <div className='publish_btn_shist'>פרסם סידור עבודה</div>
            </div>
          
        </div>

    {show_popup_shift?<Popup_shift set_show_popup_shift={set_show_popup_shift}></Popup_shift>:<></>}

    {show_popup_shift_settings?<Popup_shift_settings set_show_popup_shift_settings={set_show_popup_shift_settings}></Popup_shift_settings>:<></>}
    </>
  )
}

export default Site_page_shifts_1