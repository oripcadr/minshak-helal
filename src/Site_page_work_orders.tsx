

//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Site_page.css'

// import Dashboard from './Dashboard'

import filter from './assets/filter.png'


import {  useState } from 'react'
import Eq_order_popup from './Eq_order_popup';
import Eq_order_popup_2 from './Eq_order_popup_2';
import Eq_order_popup_3 from './Eq_order_popup_3';
import Tr_order_popup from './Tr_order_popup';
import Tr_order_popup_2 from './Tr_order_popup_2';
import Tr_order_popup_3 from './Tr_order_popup_3';
import Tr_order_popup_4 from './Tr_order_popup_4';


function Site_page_work_orders() {

  const [selected_tab, set_selected_tab] = useState(1);
  const [selected_tab_1, set_selected_tab_1] = useState(1);
  const [show_eq_order_popup, set_show_eq_order_popup] = useState(false);
  const [show_tr_order_popup, set_show_tr_order_popup] = useState(false);
  
  const [next_page, set_next_page] = useState(1);
  const [next_page_tr, set_next_page_tr] = useState(1);
  
  return (
    <>
    <div className='site_page_general_info_cont'>
        
          <div>
    
                <div className='site_workers_cont'>
                    <div className='p_details_title'>הזמנת הכשרות</div>

                    <div className='btn_exp_cont_site'>
                        <input type="text" placeholder='חיפוש נשק' className='search_input_site btn_exp_cont_input'/>
                        <div className='select_period'>סינון

                            <img src={filter} className='filter_icon'/>
                        </div>
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    <div className='top_btns_cont_site_page_neshek '>
                        <div className={'top_btn '+ (selected_tab==1?"top_btn_selected":"")} onClick={()=>set_selected_tab(1)}>כל ההכשרות</div>
                        <div className={'top_btn '+ (selected_tab==2?"top_btn_selected":"")} onClick={()=>set_selected_tab(2)}>רענונים</div>
                        <div className={'top_btn '+ (selected_tab==3?"top_btn_selected":"")} onClick={()=>set_selected_tab(3)}>הכשרות</div>
                        <div className={'top_btn '+ (selected_tab==4?"top_btn_selected":"")} onClick={()=>set_selected_tab(4)}>מטווחים</div>
                        <div className={'top_btn '+ (selected_tab==5?"top_btn_selected":"")} onClick={()=>set_selected_tab(5)}>פסיכולוג</div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_header'>מספר הזמנה</div>
                        <div className='table_header'>סוג</div>
                        <div className='table_header'>ספק</div>
                        <div className='table_header'>סטטוס</div>
                        <div className='table_header'>תאריך</div>
                        <div className='table_header'>סכום</div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_row'>
                         WO-2024-001
                            </div>
                        <div className='table_row'>הכשרה</div>
                        <div className='table_row'>מטווח קרית גת</div>
                        <div className='table_row'>
                        בוצע
                        </div>
                        <div className='table_row'>12-09-25</div>
                        <div className='table_row'>₪12,500</div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_row'>
                         WO-2024-001
                            </div>
                        <div className='table_row'>הכשרה</div>
                        <div className='table_row'>מטווח קרית גת</div>
                        <div className='table_row'>
                        בוצע
                        </div>
                        <div className='table_row'>12-09-25</div>
                        <div className='table_row'>₪12,500</div>
                    </div>


                </div>
            </div>

             <div>
       

                <div className='site_workers_cont site_workers_cont_left'>
                    <div className='p_details_title'>הזמנת ציוד</div>

                    <div className='btn_exp_cont_site'>
                        <input type="text" placeholder='חיפוש נשק' className='search_input_site btn_exp_cont_input'/>
                        <div className='select_period'>סינון

                            <img src={filter} className='filter_icon'/>
                        </div>
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    <div className='top_btns_cont_site_page_neshek '>
                        <div className='top_btns_cont_site_page_neshek '>
                            <div className={'top_btn '+ (selected_tab_1==1?"top_btn_selected":"")} onClick={()=>set_selected_tab_1(1)}>כל הציוד</div>
                            <div className={'top_btn '+ (selected_tab_1==2?"top_btn_selected":"")} onClick={()=>set_selected_tab_1(2)}>מדים</div>
                            <div className={'top_btn '+ (selected_tab_1==3?"top_btn_selected":"")} onClick={()=>set_selected_tab_1(3)}>נשקים</div>
                            <div className={'top_btn '+ (selected_tab_1==4?"top_btn_selected":"")} onClick={()=>set_selected_tab_1(4)}>ניירת</div>
                            <div className={'top_btn '+ (selected_tab_1==5?"top_btn_selected":"")} onClick={()=>set_selected_tab_1(5)}>מכשירי קשר</div>
                        </div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_header'>מספר הזמנה</div>
                        <div className='table_header'>סוג</div>
                        <div className='table_header'>ספק</div>
                        <div className='table_header'>סטטוס</div>
                        <div className='table_header'>תאריך</div>
                        <div className='table_header'>סכום</div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_row'>
                         WO-2024-001
                            </div>
                        <div className='table_row'>הכשרה</div>
                        <div className='table_row'>מטווח קרית גת</div>
                        <div className='table_row'>
                        בוצע
                        </div>
                        <div className='table_row'>12-09-25</div>
                        <div className='table_row'>₪12,500</div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_row'>
                         WO-2024-001
                            </div>
                        <div className='table_row'>הכשרה</div>
                        <div className='table_row'>מטווח קרית גת</div>
                        <div className='table_row'>
                        בוצע
                        </div>
                        <div className='table_row'>12-09-25</div>
                        <div className='table_row'>₪12,500</div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_row'>
                         WO-2024-001
                            </div>
                        <div className='table_row'>הכשרה</div>
                        <div className='table_row'>מטווח קרית גת</div>
                        <div className='table_row'>
                        בוצע
                        </div>
                        <div className='table_row'>12-09-25</div>
                        <div className='table_row'>₪12,500</div>
                    </div>

                </div>
            </div>

            <div>
                <div className='fast_actions_site_cont'>
                    <div className='p_details_title'>פעולות מהירות</div>

                    <div className='btn_exp_cont_site'>
                      
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    <div className='add_meavteah_btn add_meavteah_btn_b bullseye' onClick={()=>{set_show_tr_order_popup(true);set_next_page_tr(1)}}>תיאום עם מוסד הכשרה
                        <div className='add_meavteah_btn_s'>
                           הכשרה, מטווח, רענון או שירותי פסיכולוג למאבטחים 
                        </div>
                    </div>
                    <div className='add_meavteah_btn add_meavteah_btn_b workwear' onClick={()=>{set_show_eq_order_popup(true);set_next_page(1)}}>הזמנת ציוד
                        <div className='add_meavteah_btn_s'>
                          רכישת ציוד, מדים, נשקים או ציוד טקטי
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {show_eq_order_popup && next_page==1?<Eq_order_popup set_show_eq_order_popup={set_show_eq_order_popup} set_next_page={set_next_page}></Eq_order_popup>:<></>}
        {show_eq_order_popup && next_page==2?<Eq_order_popup_2 set_show_eq_order_popup={set_show_eq_order_popup} set_next_page={set_next_page}></Eq_order_popup_2>:<></>}
        {show_eq_order_popup && next_page==3?<Eq_order_popup_3 set_show_eq_order_popup={set_show_eq_order_popup} set_next_page={set_next_page}></Eq_order_popup_3>:<></>}

        {show_tr_order_popup && next_page_tr==1?<Tr_order_popup set_show_eq_order_popup={set_show_tr_order_popup}  set_next_page_tr={set_next_page_tr} set_next_page={set_next_page}></Tr_order_popup>:<></>}
        {show_tr_order_popup && next_page_tr==2?<Tr_order_popup_2 set_show_eq_order_popup={set_show_tr_order_popup}  set_next_page_tr={set_next_page_tr} set_next_page={set_next_page}></Tr_order_popup_2>:<></>}

        {show_tr_order_popup && next_page_tr==3?<Tr_order_popup_3 set_show_eq_order_popup={set_show_tr_order_popup}  set_next_page_tr={set_next_page_tr} set_next_page={set_next_page}></Tr_order_popup_3>:<></>}
        {show_tr_order_popup && next_page_tr==4?<Tr_order_popup_4 set_show_eq_order_popup={set_show_tr_order_popup}  set_next_page_tr={set_next_page_tr} set_next_page={set_next_page}></Tr_order_popup_4>:<></>}

    </>
  )
}

export default Site_page_work_orders