

//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Site_page.css'
import { useEffect, useRef, useState } from "react"

import gray_dot from './assets/gray_dot.png'
import replace from './assets/replace.png'
import umbrella from './assets/umbrella.png'
import stethoscope from './assets/stethoscope.png'

import site_m from './assets/site_m.png'


import delete_t from './assets/delete_t.png'
import edit_t from './assets/edit_t.png'
import arrow_right_w from './assets/arrow_r_w.png'
import arrow_left_w from './assets/arrow_left_w.png'

// import Dashboard from './Dashboard'
//import cal_icon from './assets/cal_icon.png'


import filter from './assets/filter.png'
import user_n_2 from './assets/user_n_2.png'
//import user_m_1 from './assets/user_m_1.png'
import axios from 'axios'
import Popup_shift from './Popup_shift'
import Popup_shift_settings from './Popup_shift_settings'

function Site_page_shifts(props:any) {

 // const [selected_tab, set_selected_tab] = useState(1);
//   const [selected_tab_1, set_selected_tab_1] = useState(1);
    

    
    const [add_mishmeret_popup, set_add_mishmeret_popup] = useState<any>(0);
    const [hover_add, set_hover_add] = useState<any>(0);
    const [mishmeret_type, set_mishmeret_type] = useState(1);
    const [show_popup_shift, set_show_popup_shift] = useState(false);
    const [show_popup_shift_settings, set_show_popup_shift_settings] = useState(false);

  //  const [page_selected, set_page_selected] = useState(1);

    const [workers, set_workers] = useState<any>([]);
    const [mishmeret_type_in, set_mishmeret_type_in] = useState<any>(0);
    const [start_time, set_start_time] = useState<any>('');
    const [end_time, set_end_time] = useState<any>('');
    const [date_shift, set_date_shift] = useState<any>('');
    
    const [sunday, set_sunday] = useState<any>();
    const [monday, set_monday] = useState<any>();
    const [tusday, set_tusday] = useState<any>();
    const [wensday, set_wensday] = useState<any>();
    const [thursday, set_thursday] = useState<any>();
    const [friday, set_friday] = useState<any>();

    const [current_month, set_current_month] = useState<any>('');
   // const [current_year, set_current_year] = useState<any>('');
    const [shifts, set_shifts] = useState<any>('');
    const [show_edit, set_show_edit] = useState<any>('');
    const [del_shift, set_del_shift] = useState<any>('');
    const [edit_shift, set_edit_shift] = useState<any>('');
    const [current_sunday, set_current_sunday] = useState<any>('');
    
    useEffect(() => {
        get_all_workers();
        getCurrentWeek();
        get_shifts();
    }, []);

    
    function get_all_workers(){

      let payload = new FormData();
    
      axios({
        method: 'post',
        url: globalThis.app.current+'/get_all_workers',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(res => {

        if (res.data.recordset.length>0){
           set_workers(res.data.recordset);

        } 
          
      });
  
    }


    
    
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

    function get_shifts(){
        
      let payload = new FormData();
    
      axios({
        method: 'post',
        url: globalThis.app.current+'/get_shifts',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(res => {

        let shifts_t:any=[];
        if (res.data.recordset.length>0){
            for(let i=0; i<res.data.recordset.length; i++){
               shifts_t[res.data.recordset[i].worker_id+"_"+res.data.recordset[i].date.split('T')[0]]= res.data.recordset[i];
            }

            debugger;
            set_shifts(shifts_t);
        } 
          
      });
    }

    function delete_shift_func(){
        let payload = new FormData();
        payload.append("id", del_shift);
    
        axios({
            method: 'post',
            url: globalThis.app.current+'/delete_shift',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {

            get_shifts();
            
        });
    }

    function add_shifts_func(){
      let payload = new FormData();
      payload.append("worker_id", add_mishmeret_popup);

      if(mishmeret_type==2){
        payload.append("type", "מותאם אישית");
      } else {
        if(mishmeret_type_in==1){
            payload.append("type", "בוקר");
        }

        if(mishmeret_type_in==2){
            payload.append("type", "צהריים");
        }
       
        if(mishmeret_type_in==3){
            payload.append("type", "לילה");
        }

      }

      payload.append("start_time",start_time);
      payload.append("end_time",end_time);
      payload.append("date",date_shift);


      axios({
        method: 'post',
        url: globalThis.app.current+'/add_shifts',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(() => {


         get_shifts();
          
      });
    }

    function set_edit_shift_func(val:any){
      set_edit_shift(val);

      if(val.type=='בןקר'){
        set_mishmeret_type_in(1);
        set_mishmeret_type(1);
      } else if(val.type=='צהריים'){
        set_mishmeret_type_in(2);
        set_mishmeret_type(1);
      } else if(val.type=='לילה'){
        set_mishmeret_type_in(3);
        set_mishmeret_type(1);
      } else {
        set_mishmeret_type(2);
      }

      set_start_time(val.start_time.split('T')[1].split('.')[0]);
      set_end_time(val.end_time.split('T')[1].split('.')[0]);

    }

    function update_shifts_func(){
       let payload = new FormData();
       payload.append("id", edit_shift.id);

      if(mishmeret_type==2){
        payload.append("type", "מותאם אישית");
      } else {
        if(mishmeret_type_in==1){
            payload.append("type", "בוקר");
        }

        if(mishmeret_type_in==2){
            payload.append("type", "צהריים");
        }
       
        if(mishmeret_type_in==3){
            payload.append("type", "לילה");
        }

      }

      payload.append("start_time",start_time);
      payload.append("end_time",end_time);
     
      axios({
        method: 'post',
        url: globalThis.app.current+'/update_shifts',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(() => {

        get_shifts();
        set_edit_shift('');
          
      });
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
                        <div className='shifts_main_right_top_title'>נוכחות בזמן אמת</div>
                        <div className='shifts_main_right_top_count'>12</div>

                        <div className='top_btn_cont_main'>
                            <div className='top_btn_cont'>
                                <div className='top_btn top_btn_s'>הכל</div>
                                <div className='top_btn top_btn_s'>קניון רמת אביב</div>
                                <div className='top_btn top_btn_s'>בורסה</div>
                                <div className='top_btn top_btn_s'>רפואי</div>
                            </div>
                        </div>

                        <div className='p_shift_box_cont'>
                            <img src={user_n_2} />
                            <div className='p_shift_box_title_cont'>
                                <div className='p_shift_box_title'>שלומי שלומייביץ׳</div>
                                <div className='p_shift_box_subtitle'>
                                    <div>אחמ״ש</div>
                                    <img src={gray_dot} />
                                    <div>קניון רמת אביב</div>
                                </div>
                            </div>
                        </div>

                        <div className='p_shift_box_cont'>
                            <img src={user_n_2} />
                            <div className='p_shift_box_title_cont'>
                                <div className='p_shift_box_title'>שירה סמוחה</div>
                                <div className='p_shift_box_subtitle'>
                                    <div>אחמ״ש</div>
                                    <img src={gray_dot} />
                                    <div>קניון רמת אביב</div>
                                </div>
                            </div>
                        </div>

                        <div className='p_shift_box_cont'>
                            <img src={user_n_2} />
                            <div className='p_shift_box_title_cont'>
                                <div className='p_shift_box_title'>שחר קרן</div>
                                <div className='p_shift_box_subtitle'>
                                    <div>אחמ״ש</div>
                                    <img src={gray_dot} />
                                    <div>קניון רמת אביב</div>
                                </div>
                            </div>
                        </div>

                        <div className='p_shift_box_cont'>
                            <img src={user_n_2} />
                            <div className='p_shift_box_title_cont'>
                                <div className='p_shift_box_title'>שחר קרן</div>
                                <div className='p_shift_box_subtitle'>
                                    <div>אחמ״ש</div>
                                    <img src={gray_dot} />
                                    <div>קניון רמת אביב</div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className='shifts_main_right_top_cont'>
                        <div className='shifts_main_right_top_title'>בקשות ממתינות</div>
                        <div className='shifts_main_right_top_count'>3</div>

                        <div className='top_btn_cont_main'>
                            <div className='top_btn_cont'>
                                <div className='top_btn top_btn_s'>הכל</div>
                                <div className='top_btn top_btn_s'>החלפות</div>
                                <div className='top_btn top_btn_s'>חופשות</div>
                                <div className='top_btn top_btn_s'>רפואי</div>
                            </div>
                        </div>

                         <div className='p_shift_box_cont_2'>
                            <img src={replace} />
                            <div className='p_shift_box_title_cont'>
                                <div className='p_shift_box_title'>שלומי שלומייביץ׳</div>
                                <div className='p_shift_box_subtitle'>
                                    <div>בקשת החלפת משמרת עם יוסי אברהם</div>
                                </div>
                            </div>
                        </div>

                        <div className='p_shift_box_cont_2'>
                            <img src={umbrella} />
                            <div className='p_shift_box_title_cont'>
                                <div className='p_shift_box_title'>שלומי שלומייביץ׳</div>
                                <div className='p_shift_box_subtitle'>
                                    <div>בקשה לחופשה בינואר</div>
                                </div>
                            </div>
                        </div>

                        <div className='p_shift_box_cont_2'>
                            <img src={stethoscope} />
                            <div className='p_shift_box_title_cont'>
                                <div className='p_shift_box_title'>שלומי שלומייביץ׳</div>
                                <div className='p_shift_box_subtitle'>
                                    <div>בקשה ליום חופש עבור תהליך רפואי</div>
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

                    <div className='shift_popup_btn_site' onClick={()=>props.set_selected_tab(10)}>הכן סידור לשבוע הבא</div>
                    <div className='shift_settings_btn' onClick={()=>set_show_popup_shift_settings(true)}>הגדרת משמרות</div>

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

                    <div className='main_shifts_main_left'>
                         <div className='headr_shifts_main_left_in headr_shifts_main_left_in_first'>
                            <div className='main_shifts_main_left_title_cont'>
                                <img src={site_m} />
                                <div className='main_shifts_main_left_title'>קניון עזריאלי</div>
                            </div>

                            <div className='p_shift_box_cont_main_cont'>

                            
                            {workers && workers.map((worker:any) => (
                                <div className='p_shift_box_cont'>
                                    <img src={user_n_2} />
                                    <div className='p_shift_box_title_cont'>
                                        <div className='p_shift_box_title'>{worker.name}</div>
                                        <div className='p_shift_box_subtitle'>
                                            <div>{worker.role}</div>
                                            <img src={gray_dot} />
                                            <div>{worker.snif}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}


                            </div>
                            
                         </div>

                        <div className='headr_shifts_main_left_in'>

                            <div className='shifts_main_left_in_shift_cont'>

                                {workers && workers.map((worker:any) => (
                                    <>
                                 {shifts[worker.id+"_"+sunday]?
                                    <div className={'shifts_main_left_in_shift ' } onMouseOver={()=>set_show_edit(worker.id+"_"+sunday)} onMouseOut={()=>set_show_edit('')}>
                                    <div className={'shift_box_in ' + (show_edit==worker.id+"_"+sunday?"shifts_main_left_in_shift_small":"")}>
                                        <div className='shift_box_in_title'>{shifts[worker.id+"_"+sunday].type}</div>
                                        <div className='shift_box_in_subtitle'>{shifts[worker.id+"_"+sunday].start_time.split('T')[1].split('.')[0]}-{shifts[worker.id+"_"+sunday].end_time.split('T')[1].split('.')[0]}</div>
                                    </div>

                                    {show_edit==worker.id+"_"+sunday?<div className='edit_del_btns_cont'>
                                        <img src={edit_t} onClick={()=>set_edit_shift_func(shifts[worker.id+"_"+sunday])}/>
                                        <img src={delete_t} onClick={()=>set_del_shift(shifts[worker.id+"_"+sunday].id)}/>
                                    </div>:<></>}

                                </div>:
                                <div className='shifts_main_left_in_shift' onMouseOver={()=>set_hover_add(worker.id)} onMouseOut={()=>set_hover_add(0)}>
                                    {hover_add==worker.id?
                                    <div className='add_shift_hover_cont' onClick={()=>{set_add_mishmeret_popup(worker.id); set_date_shift(sunday)}}>
                                        +   
                                    </div>:<></>}
                                </div>}
                                
                                    {shifts[worker.id+"_"+sunday] && del_shift==shifts[worker.id+"_"+sunday].id?<div className='delete_worker_popup_cont'>
                                    האם אתה בטוח רוצה למחוק? 

                                    <div className='delete_worker_popup_btncont'>
                                        <div onClick={()=>delete_shift_func()}>כן</div>
                                        <div onClick={()=>{set_del_shift(0)}}>לא</div>
                                    </div>
                                    </div>:<></>}
                                </>
                                ))}


                            


                                {/* <div className='shifts_main_left_in_shift'>
                                    <div className='shift_box_in'>
                                        <div className='shift_box_in_title'>לילה</div>
                                        <div className='shift_box_in_subtitle'>6:00-14:00</div>
                                    </div>
                                </div> */}

                            </div>

                        </div>

                        {add_mishmeret_popup?<div className='add_mishmeret_popup_cont' ref={popupRef_3}>
                            <div className='add_mishmeret_popup_title'>הוספת משמרת</div>

                            <div className='top_btn_cont_mishmeret_popup'>
                                <div className={'top_btn ' + (mishmeret_type==1?"top_btn_selected":"" )} onClick={()=>set_mishmeret_type(1)}>משמרות רגילות</div>
                                <div className={'top_btn '+ (mishmeret_type==2?"top_btn_selected":"" )} onClick={()=>set_mishmeret_type(2)}>מותאם אישית</div>
                            </div>

                            {mishmeret_type==1?<>
                                <div className='mishmeret_popup_box_cont'>
                                
                                    <div className={'mishmeret_popup_box ' + (mishmeret_type_in==1?'top_btn_selected':"")} onClick={()=>{set_mishmeret_type_in(1); set_start_time('06:00'); set_end_time('14:00')}}>
                                        <div className='mishmeret_popup_box_title'>בוקר</div>
                                        <div className='mishmeret_popup_box_subtitle'>6:00-14:00</div>
                                    </div>

                                    <div className={'mishmeret_popup_box ' + (mishmeret_type_in==2?'top_btn_selected':"")} onClick={()=>{set_mishmeret_type_in(2);set_start_time('14:00'); set_end_time('22:00')}}>
                                        <div className='mishmeret_popup_box_title'>צהריים</div>
                                        <div className='mishmeret_popup_box_subtitle'>14:00-22:00</div>
                                    </div>

                                    <div className={'mishmeret_popup_box ' + (mishmeret_type_in==3?'top_btn_selected':"")} onClick={()=>{set_mishmeret_type_in(3);set_start_time('22:00'); set_end_time('06:00')}}>
                                        <div className='mishmeret_popup_box_title'>לילה</div>
                                        <div className='mishmeret_popup_box_subtitle'>22:00-06:00</div>
                                    </div>
                                
                                </div> 
                            </>:<></>}

                            
                            {mishmeret_type==2?<>
                                <div className='mishmeret_popup_box_cont'>
                                
                                    <div>
                                        <div className='mishmeret_popup_box_text'>התחלה</div>
                                        <input type="text" className='mishmeret_popup_box_time' placeholder='08:00' value={start_time} onChange={(e)=>set_start_time(e.target.value)}/>
                                    </div>

                                    <div>
                                        <div className='mishmeret_popup_box_text'>סיום</div>
                                        <input type="text" className='mishmeret_popup_box_time' placeholder='18:00' value={end_time} onChange={(e)=>set_end_time(e.target.value)}/>
                                    </div>
                                
                                </div> 
                            </>:<></>}

                            <div className='mishmeret_popup_add_btn' onClick={()=>{set_add_mishmeret_popup(false); add_shifts_func()}}>הוספת משמרת</div>

                        </div>:<></>}


                        {edit_shift?<div className='add_mishmeret_popup_cont' ref={popupRef_4}>
                            <div className='add_mishmeret_popup_title'>הוספת משמרת</div>

                            <div className='top_btn_cont_mishmeret_popup'>
                                <div className={'top_btn ' + (mishmeret_type==1?"top_btn_selected":"" )} onClick={()=>set_mishmeret_type(1)}>משמרות רגילות</div>
                                <div className={'top_btn '+ (mishmeret_type==2?"top_btn_selected":"" )} onClick={()=>set_mishmeret_type(2)}>מותאם אישית</div>
                            </div>

                            {mishmeret_type==1?<>
                                <div className='mishmeret_popup_box_cont'>
                                
                                    <div className={'mishmeret_popup_box ' + (mishmeret_type_in==1?'top_btn_selected':"")} onClick={()=>{set_mishmeret_type_in(1); set_start_time('06:00'); set_end_time('14:00')}}>
                                        <div className='mishmeret_popup_box_title'>בוקר</div>
                                        <div className='mishmeret_popup_box_subtitle'>6:00-14:00</div>
                                    </div>

                                    <div className={'mishmeret_popup_box ' + (mishmeret_type_in==2?'top_btn_selected':"")} onClick={()=>{set_mishmeret_type_in(2);set_start_time('14:00'); set_end_time('22:00')}}>
                                        <div className='mishmeret_popup_box_title'>צהריים</div>
                                        <div className='mishmeret_popup_box_subtitle'>14:00-22:00</div>
                                    </div>

                                    <div className={'mishmeret_popup_box ' + (mishmeret_type_in==3?'top_btn_selected':"")} onClick={()=>{set_mishmeret_type_in(3);set_start_time('22:00'); set_end_time('06:00')}}>
                                        <div className='mishmeret_popup_box_title'>לילה</div>
                                        <div className='mishmeret_popup_box_subtitle'>22:00-06:00</div>
                                    </div>
                                
                                </div> 
                            </>:<></>}

                            
                            {mishmeret_type==2?<>
                                <div className='mishmeret_popup_box_cont'>
                                
                                    <div>
                                        <div className='mishmeret_popup_box_text'>התחלה</div>
                                        <input type="text" className='mishmeret_popup_box_time' placeholder='08:00' value={start_time} onChange={(e)=>set_start_time(e.target.value)}/>
                                    </div>

                                    <div>
                                        <div className='mishmeret_popup_box_text'>סיום</div>
                                        <input type="text" className='mishmeret_popup_box_time' placeholder='18:00' value={end_time} onChange={(e)=>set_end_time(e.target.value)}/>
                                    </div>
                                
                                </div> 
                            </>:<></>}

                            <div className='mishmeret_popup_add_btn' onClick={()=>{update_shifts_func()}}>עדכן משמרת</div>

                        </div>:<></>}

                        <div className='headr_shifts_main_left_in'>
                             <div className='shifts_main_left_in_shift_cont'>
                                   {workers && workers.map((worker:any) => (
                                    <>
                                      
                                 {shifts[worker.id+"_"+monday]?
                                    <div className='shifts_main_left_in_shift' onMouseOver={()=>set_show_edit(worker.id+"_"+monday)} onMouseOut={()=>set_show_edit('')}>
                                    <div className='shift_box_in'>
                                        <div className='shift_box_in_title'>{shifts[worker.id+"_"+monday].type}</div>
                                        <div className='shift_box_in_subtitle'>{shifts[worker.id+"_"+monday].start_time.split('T')[1].split('.')[0]}-{shifts[worker.id+"_"+monday].end_time.split('T')[1].split('.')[0]}</div>
                                    </div>

                                     {show_edit==worker.id+"_"+monday?<div className='edit_del_btns_cont'>
                                        <img src={edit_t} onClick={()=>set_edit_shift_func(shifts[worker.id+"_"+monday])}/>
                                        <img src={delete_t} onClick={()=>set_del_shift(shifts[worker.id+"_"+monday].id)}/>
                                    </div>:<></>}
                                </div>:
                                <div className='shifts_main_left_in_shift' onMouseOver={()=>set_hover_add(worker.id+"_2")} onMouseOut={()=>set_hover_add(0)}>
                                    {hover_add==worker.id+"_2"?
                                    <div className='add_shift_hover_cont' onClick={()=>{set_add_mishmeret_popup(worker.id); set_date_shift(monday)}}>
                                        +   
                                    </div>:<></>}
                                </div>}
                                
                                 {shifts[worker.id+"_"+monday] && del_shift==shifts[worker.id+"_"+monday].id?<div className='delete_worker_popup_cont'>
                                    האם אתה בטוח רוצה למחוק? 

                                    <div className='delete_worker_popup_btncont'>
                                        <div onClick={()=>delete_shift_func()}>כן</div>
                                        <div onClick={()=>{set_del_shift(0)}}>לא</div>
                                    </div>
                                    </div>:<></>}
                                </>

                                
                                ))}
                           </div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                              <div className='shifts_main_left_in_shift_cont'>
                                {workers && workers.map((worker:any) => (
                                     <>
                                      
                                 {shifts[worker.id+"_"+tusday]?
                                    <div className='shifts_main_left_in_shift' onMouseOver={()=>set_show_edit(worker.id+"_"+tusday)} onMouseOut={()=>set_show_edit('')}>
                                    <div className='shift_box_in'>
                                        <div className='shift_box_in_title'>{shifts[worker.id+"_"+tusday].type}</div>
                                        <div className='shift_box_in_subtitle'>{shifts[worker.id+"_"+tusday].start_time.split('T')[1].split('.')[0]}-{shifts[worker.id+"_"+tusday].end_time.split('T')[1].split('.')[0]}</div>
                                    </div>
                                    {show_edit==worker.id+"_"+tusday?<div className='edit_del_btns_cont'>
                                        <img src={edit_t}  onClick={()=>set_edit_shift_func(shifts[worker.id+"_"+tusday])}/>
                                        <img src={delete_t} onClick={()=>set_del_shift(shifts[worker.id+"_"+tusday].id)}/>
                                    </div>:<></>}
                                </div>:
                                <div className='shifts_main_left_in_shift' onMouseOver={()=>set_hover_add(worker.id+"_3")} onMouseOut={()=>set_hover_add(0)}>
                                    {hover_add==worker.id+"_3"?
                                    <div className='add_shift_hover_cont' onClick={()=>{set_add_mishmeret_popup(worker.id); set_date_shift(tusday)}}>
                                        +   
                                    </div>:<></>}
                                </div>}

                                 {shifts[worker.id+"_"+tusday] && del_shift==shifts[worker.id+"_"+tusday].id?<div className='delete_worker_popup_cont'>
                                    האם אתה בטוח רוצה למחוק? 

                                    <div className='delete_worker_popup_btncont'>
                                        <div onClick={()=>delete_shift_func()}>כן</div>
                                        <div onClick={()=>{set_del_shift(0)}}>לא</div>
                                    </div>
                                    </div>:<></>}
                                </>
                                ))}

                            
                           </div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                             <div className='shifts_main_left_in_shift_cont'>
                                {workers && workers.map((worker:any) => (
                                    <>
                                      
                                 {shifts[worker.id+"_"+wensday]?
                                    <div className='shifts_main_left_in_shift' onMouseOver={()=>set_show_edit(worker.id+"_"+wensday)} onMouseOut={()=>set_show_edit('')}>
                                    <div className='shift_box_in'>
                                        <div className='shift_box_in_title'>{shifts[worker.id+"_"+wensday].type}</div>
                                        <div className='shift_box_in_subtitle'>{shifts[worker.id+"_"+wensday].start_time.split('T')[1].split('.')[0]}-{shifts[worker.id+"_"+wensday].end_time.split('T')[1].split('.')[0]}</div>
                                    </div>

                                     {show_edit==worker.id+"_"+wensday?<div className='edit_del_btns_cont'>
                                        <img src={edit_t}  onClick={()=>set_edit_shift_func(shifts[worker.id+"_"+wensday])}/>
                                        <img src={delete_t} onClick={()=>set_del_shift(shifts[worker.id+"_"+wensday].id)}/>
                                    </div>:<></>}
                                </div>:
                                <div className='shifts_main_left_in_shift' onMouseOver={()=>set_hover_add(worker.id+"_4")} onMouseOut={()=>set_hover_add(0)}>
                                    {hover_add==worker.id+"_4"?
                                    <div className='add_shift_hover_cont' onClick={()=>{set_add_mishmeret_popup(worker.id); set_date_shift(wensday)}}>
                                        +   
                                    </div>:<></>}
                                </div>}
                                {shifts[worker.id+"_"+wensday] && del_shift==shifts[worker.id+"_"+wensday].id?<div className='delete_worker_popup_cont'>
                                    האם אתה בטוח רוצה למחוק? 

                                    <div className='delete_worker_popup_btncont'>
                                        <div onClick={()=>delete_shift_func()}>כן</div>
                                        <div onClick={()=>{set_del_shift(0)}}>לא</div>
                                    </div>
                                    </div>:<></>}
                                </>
                                ))}

                               
                           </div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                             <div className='shifts_main_left_in_shift_cont'>
                                {workers && workers.map((worker:any) => (
                                     <>
                                      
                                 {shifts[worker.id+"_"+thursday]?
                                    <div className='shifts_main_left_in_shift' onMouseOver={()=>set_show_edit(worker.id+"_"+thursday)} onMouseOut={()=>set_show_edit('')}>
                                    <div className='shift_box_in'>
                                        <div className='shift_box_in_title'>{shifts[worker.id+"_"+thursday].type}</div>
                                        <div className='shift_box_in_subtitle'>{shifts[worker.id+"_"+thursday].start_time.split('T')[1].split('.')[0]}-{shifts[worker.id+"_"+thursday].end_time.split('T')[1].split('.')[0]}</div>
                                    </div>
                                       {show_edit==worker.id+"_"+thursday?<div className='edit_del_btns_cont'>
                                        <img src={edit_t}  onClick={()=>set_edit_shift_func(shifts[worker.id+"_"+thursday])}/>
                                        <img src={delete_t} onClick={()=>set_del_shift(shifts[worker.id+"_"+thursday].id)}/>
                                    </div>:<></>}
                                </div>:
                                <div className='shifts_main_left_in_shift' onMouseOver={()=>set_hover_add(worker.id+"_5")} onMouseOut={()=>set_hover_add(0)}>
                                    {hover_add==worker.id+"_5"?
                                    <div className='add_shift_hover_cont' onClick={()=>{set_add_mishmeret_popup(worker.id); set_date_shift(thursday)}}>
                                        +   
                                    </div>:<></>}
                                </div>}
                                 {shifts[worker.id+"_"+thursday] && del_shift==shifts[worker.id+"_"+thursday].id?<div className='delete_worker_popup_cont'>
                                    האם אתה בטוח רוצה למחוק? 

                                    <div className='delete_worker_popup_btncont'>
                                        <div onClick={()=>delete_shift_func()}>כן</div>
                                        <div onClick={()=>{set_del_shift(0)}}>לא</div>
                                    </div>
                                    </div>:<></>}
                                </>
                                ))}

                                
                           </div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                              <div className='shifts_main_left_in_shift_cont'>
                                {workers && workers.map((worker:any) => (
                                     <>
                                      
                                 {shifts[worker.id+"_"+friday]?
                                    <div className='shifts_main_left_in_shift' onMouseOver={()=>set_show_edit(worker.id+"_"+friday)} onMouseOut={()=>set_show_edit('')}>
                                    <div className='shift_box_in'>
                                        <div className='shift_box_in_title'>{shifts[worker.id+"_"+friday].type}</div>
                                        <div className='shift_box_in_subtitle'>{shifts[worker.id+"_"+friday].start_time.split('T')[1].split('.')[0]}-{shifts[worker.id+"_"+friday].end_time.split('T')[1].split('.')[0]}</div>
                                    </div>

                                    {show_edit==worker.id+"_"+friday?<div className='edit_del_btns_cont'>
                                        <img src={edit_t} onClick={()=>set_edit_shift_func(shifts[worker.id+"_"+friday])}/>
                                        <img src={delete_t} onClick={()=>set_del_shift(shifts[worker.id+"_"+friday].id)}/>
                                    </div>:<></>}
                                </div>:
                                <div className='shifts_main_left_in_shift' onMouseOver={()=>set_hover_add(worker.id+"_6")} onMouseOut={()=>set_hover_add(0)}>
                                    {hover_add==worker.id+"_6"?
                                    <div className='add_shift_hover_cont' onClick={()=>{set_add_mishmeret_popup(worker.id); set_date_shift(friday)}}>
                                        +   
                                    </div>:<></>}
                                </div>}
                                {shifts[worker.id+"_"+friday] && del_shift==shifts[worker.id+"_"+friday].id?<div className='delete_worker_popup_cont'>
                                    האם אתה בטוח רוצה למחוק? 

                                    <div className='delete_worker_popup_btncont'>
                                        <div onClick={()=>delete_shift_func()}>כן</div>
                                        <div onClick={()=>{set_del_shift(0)}}>לא</div>
                                    </div>
                                    </div>:<></>}
                                </>
                                ))}


                                {/* <div className='shifts_main_left_in_shift'>
                                    <div className='shift_box_in'>
                                        <div className='shift_box_in_title'>בוקר</div>
                                        <div className='shift_box_in_subtitle'>6:00-14:00</div>
                                    </div>
                                </div> */}

                               
                           </div>
                        </div>

                    </div>
{/* 
                         <div className='main_shifts_main_left'>
                         <div className='headr_shifts_main_left_in headr_shifts_main_left_in_first'>
                            <div className='main_shifts_main_left_title_cont'>
                                <img src={site_m} />
                                <div className='main_shifts_main_left_title'>קניון עזריאלי</div>
                            </div>

                            <div className='p_shift_box_cont_main_cont'>

                                  <div className='p_shift_box_cont'>
                                    <img src={user_n_2} />
                                    <div className='p_shift_box_title_cont'>
                                        <div className='p_shift_box_title'>שלומי שלומייביץ׳</div>
                                        <div className='p_shift_box_subtitle'>
                                            <div>אחמ״ש</div>
                                            <img src={gray_dot} />
                                            <div>קניון רמת אביב</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='p_shift_box_cont'>
                                    <img src={user_n_2} />
                                    <div className='p_shift_box_title_cont'>
                                        <div className='p_shift_box_title'>שירה סמוחה</div>
                                        <div className='p_shift_box_subtitle'>
                                            <div>אחמ״ש</div>
                                            <img src={gray_dot} />
                                            <div>קניון רמת אביב</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='p_shift_box_cont'>
                                    <img src={user_n_2} />
                                    <div className='p_shift_box_title_cont'>
                                        <div className='p_shift_box_title'>שחר קרן</div>
                                        <div className='p_shift_box_subtitle'>
                                            <div>אחמ״ש</div>
                                            <img src={gray_dot} />
                                            <div>קניון רמת אביב</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='p_shift_box_cont'>
                                    <img src={user_n_2} />
                                    <div className='p_shift_box_title_cont'>
                                        <div className='p_shift_box_title'>שחר קרן</div>
                                        <div className='p_shift_box_subtitle'>
                                            <div>אחמ״ש</div>
                                            <img src={gray_dot} />
                                            <div>קניון רמת אביב</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            
                         </div>

                        <div className='headr_shifts_main_left_in'>

                            <div className='shifts_main_left_in_shift_cont'>
                                <div className='shifts_main_left_in_shift'>

                                </div>

                                <div className='shifts_main_left_in_shift'>

                                </div>

                                <div className='shifts_main_left_in_shift'>
                                    <div className='shift_box_in'>
                                        <div className='shift_box_in_title'>לילה</div>
                                        <div className='shift_box_in_subtitle'>6:00-14:00</div>
                                    </div>
                                </div>

                                <div className='shifts_main_left_in_shift'>

                                </div>
                           </div>

                        </div>

                        <div className='headr_shifts_main_left_in'>
                             <div className='shifts_main_left_in_shift_cont'>
                                <div className='shifts_main_left_in_shift'>
                                    <div className='shift_box_in'>
                                        <div className='shift_box_in_title'>בוקר</div>
                                        <div className='shift_box_in_subtitle'>6:00-14:00</div>
                                    </div>
                                </div>

                                <div className='shifts_main_left_in_shift'>

                                </div>

                                <div className='shifts_main_left_in_shift'>
                                   
                                </div>

                                <div className='shifts_main_left_in_shift'>
                                    <div className='shift_box_in'>
                                        <div className='shift_box_in_title'>בוקר</div>
                                        <div className='shift_box_in_subtitle'>6:00-14:00</div>
                                    </div>
                                </div>
                           </div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                              <div className='shifts_main_left_in_shift_cont'>
                                <div className='shifts_main_left_in_shift'>
                                    <div className='shift_box_in'>
                                        <div className='shift_box_in_title'>בוקר</div>
                                        <div className='shift_box_in_subtitle'>6:00-14:00</div>
                                    </div>
                                </div>

                                <div className='shifts_main_left_in_shift'>
                                    <div className='shift_box_in'>
                                        <div className='shift_box_in_title'>בוקר</div>
                                        <div className='shift_box_in_subtitle'>6:00-14:00</div>
                                    </div>
                                </div>

                                <div className='shifts_main_left_in_shift'>
                                    <div className='shift_box_in'>
                                        <div className='shift_box_in_title'>בוקר</div>
                                        <div className='shift_box_in_subtitle'>6:00-14:00</div>
                                    </div>
                                </div>

                                <div className='shifts_main_left_in_shift'>

                                </div>
                           </div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                             <div className='shifts_main_left_in_shift_cont'>
                                <div className='shifts_main_left_in_shift'>

                                </div>

                                <div className='shifts_main_left_in_shift'>
                                    <div className='shift_box_in'>
                                        <div className='shift_box_in_title'>בוקר</div>
                                        <div className='shift_box_in_subtitle'>6:00-14:00</div>
                                    </div>
                                </div>

                                <div className='shifts_main_left_in_shift'>

                                </div>

                                <div className='shifts_main_left_in_shift'>
                                    <div className='shift_box_in'>
                                        <div className='shift_box_in_title'>בוקר</div>
                                        <div className='shift_box_in_subtitle'>6:00-14:00</div>
                                    </div>
                                </div>
                           </div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                             <div className='shifts_main_left_in_shift_cont'>
                                <div className='shifts_main_left_in_shift'>
                                    <div className='shift_box_in'>
                                        <div className='shift_box_in_title'>בוקר</div>
                                        <div className='shift_box_in_subtitle'>6:00-14:00</div>
                                    </div>
                                </div>

                                <div className='shifts_main_left_in_shift'>

                                </div>

                                <div className='shifts_main_left_in_shift'>

                                </div>

                                <div className='shifts_main_left_in_shift'>

                                </div>
                           </div>
                        </div>

                        <div className='headr_shifts_main_left_in'>
                              <div className='shifts_main_left_in_shift_cont'>
                                <div className='shifts_main_left_in_shift'>
                                    <div className='shift_box_in'>
                                        <div className='shift_box_in_title'>בוקר</div>
                                        <div className='shift_box_in_subtitle'>6:00-14:00</div>
                                    </div>
                                </div>

                                <div className='shifts_main_left_in_shift'>

                                </div>

                                <div className='shifts_main_left_in_shift'>
                                    <div className='shift_box_in'>
                                        <div className='shift_box_in_title'>בוקר</div>
                                        <div className='shift_box_in_subtitle'>6:00-14:00</div>
                                    </div>
                                </div>

                                <div className='shifts_main_left_in_shift'>

                                </div>
                           </div>
                        </div>

                    </div> */}

                </div>
            </div>


            </div>

            <div>
                <div className='fast_actions_site_cont_shifts'>
                    <div className='p_details_title'>פעולות מהירות</div>

                    <div className='btn_exp_cont_site'>
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    <div className='shifts_action_cont'>
                        <div className='shifts_action_1'>הוספת נקודה חמה</div>
                        <div className='shifts_action_2'>הוספת מסלול חדש</div>
                        <div className='shifts_action_3'>שינוי רדיוס דיווח</div>
                    </div>
       

                </div>
            </div>
        </div>

    {show_popup_shift?<Popup_shift set_show_popup_shift={set_show_popup_shift}></Popup_shift>:<></>}

    {show_popup_shift_settings?<Popup_shift_settings set_show_popup_shift_settings={set_show_popup_shift_settings}></Popup_shift_settings>:<></>}
    </>
  )
}

export default Site_page_shifts