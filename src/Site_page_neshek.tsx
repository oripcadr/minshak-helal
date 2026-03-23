

//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios';
import './Site_page.css'

import filter from './assets/filter.png'

import {  useEffect, useState } from 'react'


function Site_page_neshek() {

    const [selected_tab, set_selected_tab] = useState(1);
    const [selected_tab_1, set_selected_tab_1] = useState(1);
        const [weapons, set_weapons] = useState([]);
    const [weapons_original, set_weapons_original] = useState([]);
    //     const [in_safe, set_in_safe] = useState(0);
    // const [to_fix, set_to_fix] = useState(0);
    // const [belong_n, set_belong_n] = useState(0);
        useEffect(() => {
        get_all_weapons();
    }, []);
    function get_all_weapons(){

      let payload = new FormData();
    
      axios({
        method: 'post',
        url: globalThis.app.current+'/get_all_weapons',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(res => {

        if (res.data.recordset.length>0){
           set_weapons(res.data.recordset);
            set_weapons_original(res.data.recordset);
            console.log("nesheks:",res.data.recordset)
        //    let in_safe=0;
        //    let to_fix=0;
        //    let bolong_n=0

        //    for(let i=0; i<res.data.recordset.length; i++){
        //     if (res.data.recordset[i].statys=="בכספת"){
        //         in_safe++;
        //     }

        //     if (res.data.recordset[i].statys=="תקול"){
        //         to_fix++;
        //     }

        //     if (res.data.recordset[i].statys=="משוייך למאבטח"){
        //         bolong_n++;
        //     }
        //    }

        //    set_in_safe(in_safe);
        //    set_to_fix(to_fix);
        //    set_belong_n(bolong_n);

        } 
          
      });
  
    }
  return (
    <>
    <div className='site_page_general_info_cont'>
            <div>
       

                <div className='site_workers_cont'>
                    <div className='p_details_title'>נשקים</div>

                    <div className='btn_exp_cont_site'>
                        <input type="text" placeholder='חיפוש נשק' className='search_input_site btn_exp_cont_input'/>
                        <div className='select_period'>סינון

                            <img src={filter} className='filter_icon'/>
                        </div>
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    <div className='top_btns_cont_site_page_neshek '>
                        <div className={'top_btn '+ (selected_tab==1?"top_btn_selected":"")} onClick={()=>set_selected_tab(1)}>כל הנשקים</div>
                        <div className={'top_btn '+ (selected_tab==2?"top_btn_selected":"")} onClick={()=>set_selected_tab(2)}>תקולים</div>
                        <div className={'top_btn '+ (selected_tab==3?"top_btn_selected":"")} onClick={()=>set_selected_tab(3)}>בכספת</div>
                        <div className={'top_btn '+ (selected_tab==4?"top_btn_selected":"")} onClick={()=>set_selected_tab(4)}>משוייכים</div>
                        <div className={'top_btn '+ (selected_tab==5?"top_btn_selected":"")} onClick={()=>set_selected_tab(5)}>מאופסנים</div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_header'>מסט״ב</div>
                        <div className='table_header'>דגם/סוג</div>
                        <div className='table_header'>בכספת</div>
                        <div className='table_header'>מיקום</div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_row'>
                           117
                            </div>
                        <div className='table_row'>Glock 17</div>
                        <div className='table_row'>תקול</div>
                        <div className='table_row'>כספת מרכזית</div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_row'>
                           117
                            </div>
                        <div className='table_row'>Glock 17</div>
                        <div className='table_row'>מאופסן</div>
                        <div className='table_row'>תחנת משטרה - יפו</div>
                    </div>


                    <div className='table_header_cont'>
                        <div className='table_row'>
                           117
                            </div>
                        <div className='table_row'>Glock 17</div>
                        <div className='table_row'>תקול</div>
                        <div className='table_row'>כספת מרכזית</div>
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
                        <div className={'top_btn '+ (selected_tab_1==1?"top_btn_selected":"")} onClick={()=>set_selected_tab_1(1)}>תקלות</div>
                        <div className={'top_btn '+ (selected_tab_1==2?"top_btn_selected":"")} onClick={()=>set_selected_tab_1(2)}>מסירות</div>
                        <div className={'top_btn '+ (selected_tab_1==3?"top_btn_selected":"")} onClick={()=>set_selected_tab_1(3)}>החזרות</div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_header'>תאריך</div>
                        <div className='table_header'>סוג אירוע</div>
                        <div className='table_header'>פרטים</div>
                        <div className='table_header'>בוצע על ידי</div>
                        <div className='table_header'>הערות</div>
                        <div className='table_header'>סטטוס</div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_row'>
                           10/10/2025
                        </div>
                        <div className='table_row'>תקלה</div>
                        <div className='table_row'>הוקצה ל־יוסי כהן (אתר קניון TLV)</div>
                        <div className='table_row'>קב״ט רועי לוי</div>
                        <div className='table_row'>12/09/25</div>
                        <div className='table_row table_row_final'>הושלם</div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_row'>
                           10/10/2025
                        </div>
                        <div className='table_row'>תקלה</div>
                        <div className='table_row'>הוקצה ל־יוסי כהן (אתר קניון TLV)</div>
                        <div className='table_row'>קב״ט רועי לוי</div>
                        <div className='table_row'>12/09/25</div>
                        <div className='table_row table_row_final'>הושלם</div>
                    </div>


                </div>
            </div>

            <div>
                <div className='fast_actions_site_cont'>
                    <div className='p_details_title'>פעולות מהירות</div>

                    <div className='btn_exp_cont_site'>
                      
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    <div className='add_meavteah_btn flame_w'>ביצוע העברה חמה</div>
                   
                    <div className='add_meavteah_btn add_neshek_w'>הוספת נשק לאתר</div>
                    <div className='add_meavteah_btn vault'>אפסון נשק</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Site_page_neshek