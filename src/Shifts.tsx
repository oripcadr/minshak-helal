
import RightMenu from './RightMenu';
import './Shifts.css'
import { useEffect, useRef, useState } from "react"

import msg_icon from './assets/msg_icon.png'
import bell_icon from './assets/bell_icon.png'
import user_n_2 from './assets/user_n_2.png'
import user_m_1 from './assets/user_m_1.png'
import gray_dot from './assets/gray_dot.png'
import replace from './assets/replace.png'
import umbrella from './assets/umbrella.png'
import stethoscope from './assets/stethoscope.png'
import filter from './assets/filter.png'
import site_m from './assets/site_m.png'
import Popup_shift from './Popup_shift';
import sahar_1 from './assets/sahar_1.png'
import sahar_2 from './assets/sahar_2.png'
import sahar_3 from './assets/sahar_3.png'
import phone_icon_s from './assets/phone_icon_s.png'
import msg_icon_s from './assets/msg_icon_s.png'
import warning from './assets/warning.png'
import clock from './assets/clock.png'
import user_m from './assets/user_m.png'
import sahar_4 from './assets/sahar_4.png'
import sahar_5 from './assets/sahar_5.png'
import delete_t from './assets/delete_t.png'
import edit_t from './assets/edit_t.png'
import arrow_right_w from './assets/arrow_r_w.png'
import arrow_left_w from './assets/arrow_left_w.png'
import axios from 'axios';

function Shifts() {

    const [add_mishmeret_popup, set_add_mishmeret_popup] = useState<any>(0);
    const [hover_add, set_hover_add] = useState<any>(0);
    const [mishmeret_type, set_mishmeret_type] = useState(1);
    const [show_popup_shift, set_show_popup_shift] = useState(false);
    const [page_selected, set_page_selected] = useState(1);

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
      //  console.log(sunday.getFullYear() +"-"+ ((sunday.getMonth()+1)<10?String(sunday.getMonth()+1).padStart(2, '0'):sunday.getMonth()+1) +"-"+ (sunday.getDate()<10?'0'+sunday.getDate():sunday.getDate()));

       set_sunday(sunday.getFullYear() +"-"+ ((sunday.getMonth()+1)<10?String(sunday.getMonth()+1).padStart(2, '0'):sunday.getMonth()+1) +"-"+ (sunday.getDate()<10?'0'+sunday.getDate():sunday.getDate()) );
       set_monday(monday.getFullYear() +"-"+ ((monday.getMonth()+1)<10?String(monday.getMonth()+1).padStart(2, '0'):(monday.getMonth()+1)) +"-"+ (monday.getDate()<10? '0'+monday.getDate():monday.getDate()));
       set_tusday(tusday.getFullYear() +"-"+ ((tusday.getMonth()+1)<10?String(tusday.getMonth()+1).padStart(2, '0'):(tusday.getMonth()+1)) +"-"+ (tusday.getDate()<10? '0'+tusday.getDate():tusday.getDate()));
       set_wensday(wensday.getFullYear() +"-"+ ((wensday.getMonth()+1)<10?String(wensday.getMonth()+1).padStart(2, '0'):(wensday.getMonth()+1)) +"-"+ (wensday.getDate()<10? '0'+wensday.getDate():wensday.getDate()));
       set_thursday(thursday.getFullYear() +"-"+ ((thursday.getMonth()+1)<10?String(thursday.getMonth()+1).padStart(2, '0'):(thursday.getMonth()+1)) +"-"+ (thursday.getDate()<10? '0'+thursday.getDate():thursday.getDate()));
       set_friday(friday.getFullYear() +"-"+ ((friday.getMonth()+1)<10?String(friday.getMonth()+1).padStart(2, '0'):(friday.getMonth()+1)) +"-"+ (friday.getDate()<10? '0'+friday.getDate():friday.getDate()));

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
        <div className="dashboard_main_cont">
            <RightMenu title="shifts"></RightMenu>

            <div className='top_header'>
{/* 
                <div className='user_cont'>
                    <img src={user} />
                    <div className='user_title'>
                        <div className='user_name'>ישראל ישראלי</div>
                        <div className='user_role'>מנכ"ל</div>
                    </div>
                </div> */}

                {/* <div className='search_cont'>
                    <input type="text" placeholder='חפש אתר, עובד, מסמך או נשק…' className='search_input'/>   
                    <img src={msg_icon} />
                    <img src={bell_icon} />
                </div> */}
            </div>

            <div className='top_btns_cont top_btn_cont_shifts'>
                <div className={'top_btn ' + (page_selected==1?"top_btn_selected":"")} onClick={()=>set_page_selected(1)}>לוח משמרות</div>
                <div className={'top_btn ' + (page_selected==2?"top_btn_selected":"")} onClick={()=>set_page_selected(2)}>נוכחות יומית</div>
                <div className={'top_btn ' + (page_selected==3?"top_btn_selected":"")} onClick={()=>set_page_selected(3)}>תיקוני נוכחות</div>
                <div className={'top_btn ' + (page_selected==4?"top_btn_selected":"")} onClick={()=>set_page_selected(4)}>דו״חות</div>
                <div className={'top_btn ' + (page_selected==5?"top_btn_selected":"")} onClick={()=>set_page_selected(5)}>הגדרות שכר</div>
            </div>

            {page_selected==1?<div className='shifts_main_cont'>
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
                        <div className='top_btn_cont'>
                            <div className='top_btn top_btn_s'>יומי</div>
                            <div className='top_btn top_btn_s'>שבועי</div>
                        </div>

                      
                    </div>

                    <div className='shift_popup_btn' onClick={()=>set_show_popup_shift(true)}>משמרות לא מאויישות 17</div>

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
            </div>:<></>}

            {page_selected==2?<div className='shifts_main_cont'>
                <div className='fix_right_cont'>
                    <div className='right_part_cont_top_title'>תמונת מצב</div>

                    <div className='btn_exp_cont'>
                        <div className='select_period'>יומי</div>
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    <div className='current_pic_cont'>
                        <img src={sahar_1} />
                        <div className='current_pic_num'>24</div>
                        <div className='current_pic_text'>עובדים במשמרת עכשיו</div>
                    </div>

                    <div className='current_pic_cont'>
                        <img src={sahar_4} />
                        <div className='current_pic_num'>3</div>
                        <div className='current_pic_text'>מאחרים כרגע</div>
                    </div>

                    <div className='current_pic_cont_in_main'>
                        <div className='current_pic_cont_in'>
                            <img src={user_n_2} />
                            <div className='p_shift_box_title_cont'>
                                <div className='p_shift_box_title'>שלומי שלומייביץ׳</div>
                                <div className='p_shift_box_subtitle'>
                                    <div>אחמ״ש</div>
                                    <img src={gray_dot} />
                                    <div>קניון רמת אביב  08:00-14:00</div>
                                </div>
                            </div>

                            <div className='msg_icon_s_cont'>
                                <img src={msg_icon_s} />
                                <img src={phone_icon_s} />
                            </div>
                        </div>

                        <div className='current_pic_cont_in'>
                            <img src={user_n_2} />
                            <div className='p_shift_box_title_cont'>
                                <div className='p_shift_box_title'>שלומי שלומייביץ׳</div>
                                <div className='p_shift_box_subtitle'>
                                    <div>אחמ״ש</div>
                                    <img src={gray_dot} />
                                    <div>קניון רמת אביב  08:00-14:00</div>
                                </div>
                            </div>

                            <div className='msg_icon_s_cont'>
                                <img src={msg_icon_s} />
                                <img src={phone_icon_s} />
                            </div>
                        </div>


                        <div className='current_pic_cont_in'>
                            <img src={user_n_2} />
                            <div className='p_shift_box_title_cont'>
                                <div className='p_shift_box_title'>שלומי שלומייביץ׳</div>
                                <div className='p_shift_box_subtitle'>
                                    <div>אחמ״ש</div>
                                    <img src={gray_dot} />
                                    <div>קניון רמת אביב  08:00-14:00</div>
                                </div>
                            </div>

                            <div className='msg_icon_s_cont'>
                                <img src={msg_icon_s} />
                                <img src={phone_icon_s} />
                            </div>
                        </div>


                    </div>



                    <div className='current_pic_cont'>
                        <img src={sahar_5} />
                        <div className='current_pic_num'>1</div>
                        <div className='current_pic_text'>לא הגיעו למשמרת</div>
                    </div>

                </div>


                <div className='fix_left_cont'>

                    
                    <div className='right_part_cont_top_title'>נוכחות יומית</div>

                    <div className='btn_exp_cont'>
                        <input type="text" placeholder='חיפוש עובד לפי שם, תתפקיד, סניף, מסט״ב…' className='btn_exp_cont_input'/>

                        <div className='select_period'>סינון

                            <img src={filter} className='filter_icon'/>
                        </div>
                        <div className='export_btn'>ייצוא</div>
                    </div>


                    <div className='table_header_cont'>
                        <div className='table_header table_header_long'>עובד</div>
                        <div className='table_header table_header_long'>אתר</div>
                        <div className='table_header table_header_long'>שעת כניסה צפויה	</div>
                        <div className='table_header table_header_long'>שעת כניסה בפועל	</div>
                        <div className='table_header table_header_long'>סטטוס	</div>
                        <div className='table_header table_header_long'>הערות מנהל</div>
                     
                    </div>


                    
                    <div className='table_header_cont'>
                      <div className='table_row table_header_long'>
                            <img src={user_m} className='user_s' />
                            דניאל שמש
                            </div>
                        <div className='table_row table_header_long'>קניון רמת אביב</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row table_header_long'>בזמן</div>
                    
                        <div className='table_row ' >  
                           <div className='table_row_payed'>אושר</div>
                        </div>
                        
                        <div className='table_row table_header_long'></div>
                    </div>

     
                    <div className='table_header_cont'>
                      <div className='table_row table_header_long'>
                            <img src={user_m} className='user_s' />
                            דניאל שמש
                            </div>
                        <div className='table_row table_header_long'>קניון רמת אביב</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row table_header_long'>בזמן</div>
                    
                        <div className='table_row ' >  
                           <div className='table_row_payed_late'>איחור</div>
                        </div>
                        
                        <div className='table_row table_header_long'>פקק בכביש</div>
                    </div>



                    <div className='table_header_cont'>
                      <div className='table_row table_header_long'>
                            <img src={user_m} className='user_s' />
                            דניאל שמש
                            </div>
                        <div className='table_row table_header_long'>קניון רמת אביב</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row table_header_long'>בזמן</div>
                    
                        <div className='table_row ' >  
                           <div className='table_row_payed'>בזמן</div>
                        </div>
                        
                        <div className='table_row table_header_long'></div>
                    </div>

                    <div className='table_header_cont'>
                      <div className='table_row table_header_long'>
                            <img src={user_m} className='user_s' />
                            דניאל שמש
                            </div>
                        <div className='table_row table_header_long'>קניון רמת אביב</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row table_header_long'>בזמן</div>
                    
                        <div className='table_row ' >  
                           <div className='table_row_payed_red'>לא הגיע</div>
                        </div>
                        
                        <div className='table_row table_header_long'>לא עונה בטלפון</div>
                    </div>



                    <div className='table_header_cont'>
                      <div className='table_row table_header_long'>
                            <img src={user_m} className='user_s' />
                            דניאל שמש
                            </div>
                        <div className='table_row table_header_long'>קניון רמת אביב</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row table_header_long'>בזמן</div>
                    
                        <div className='table_row ' >  
                           <div className='table_row_payed'>בזמן</div>
                        </div>
                        
                        <div className='table_row table_header_long'></div>
                    </div>

                    
                    <div className='table_header_cont'>
                      <div className='table_row table_header_long'>
                            <img src={user_m} className='user_s' />
                            דניאל שמש
                            </div>
                        <div className='table_row table_header_long'>קניון רמת אביב</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row table_header_long'>בזמן</div>
                    
                        <div className='table_row ' >  
                           <div className='table_row_payed'>בזמן</div>
                        </div>
                        
                        <div className='table_row table_header_long'></div>
                    </div>


                    
                    <div className='table_header_cont'>
                      <div className='table_row table_header_long'>
                            <img src={user_m} className='user_s' />
                            דניאל שמש
                            </div>
                        <div className='table_row table_header_long'>קניון רמת אביב</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row table_header_long'>בזמן</div>
                    
                        <div className='table_row ' >  
                           <div className='table_row_payed'>בזמן</div>
                        </div>
                        
                        <div className='table_row table_header_long'></div>
                    </div>


                    
                </div>

        
            </div>:<></>}
            
            
            {page_selected==3?<div className='shifts_main_cont'>

                <div className='fix_right_cont'>
                    <div className='right_part_cont_top_title'>חריגות מזוהות</div>

                    <div className='btn_exp_cont'>
                        <div className='select_period'>יומי</div>
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    <div className='fix_right_in_box'>
                        <img src={user_m_1} className='user_m_1'/>
                        <div className='fix_right_in_name_cont'>
                            <div className='fix_right_in_name_text'>אורי אחדות</div>
                            <div className='fix_right_in_name_text_d'>
                                <div>אחמ״ש</div>
                                <img src={gray_dot} />
                                <div>קניון רמת אביב  08:00-14:00</div>
                            </div>

                        </div>

                        <img src={phone_icon_s} className='phone_icon_in'/>
                        <img src={msg_icon_s} className='msg_icon_in'/>


                        <div className='warning_cont'>
                            <img src={warning} />
                            <div>יציאה מוקדמת</div>
                        </div>

                        <div className='msg_r_cont'>המערכת מציעה לקצר את המשמרת בהתאם לדיווח בפועל</div>

                        <div className='msg_r_btn_cont'>
                            <div className='msg_r_btn'>יישום המלצה</div>
                            <div className='msg_r_btn_1'>עדכן ידנית</div>
                        </div>

                    </div>


                    <div className='fix_right_in_box'>
                        <img src={user_m_1} className='user_m_1'/>
                        <div className='fix_right_in_name_cont'>
                            <div className='fix_right_in_name_text'>אורי אחדות</div>
                            <div className='fix_right_in_name_text_d'>
                                <div>אחמ״ש</div>
                                <img src={gray_dot} />
                                <div>קניון רמת אביב  08:00-14:00</div>
                            </div>

                        </div>

                        <img src={phone_icon_s} className='phone_icon_in'/>
                        <img src={msg_icon_s} className='msg_icon_in'/>


                        <div className='warning_cont'>
                            <img src={clock} />
                            <div>איחור מעל 15 דק’</div>
                        </div>

                        <div className='msg_r_cont'>המערכת מציעה לקצר את המשמרת בהתאם לדיווח בפועל</div>

                        <div className='msg_r_btn_cont'>
                            <div className='msg_r_btn'>יישום המלצה</div>
                            <div className='msg_r_btn_1'>עדכן ידנית</div>
                        </div>
                    </div>

                </div>

                <div className='fix_left_cont'>

                    <div className='right_part_cont_top_title'>תיקונים אחרונים</div>

                    <div className='btn_exp_cont'>
                        <input type="text" placeholder='חיפוש עובד לפי שם, תתפקיד, סניף, מסט״ב…' className='btn_exp_cont_input'/>
                        <div className='add_corr_btn'>הוספת חריגה</div>
                       
                        <div className='select_period'>סינון

                            <img src={filter} className='filter_icon'/>
                        </div>
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_header table_header_long'>עובד</div>
                        <div className='table_header table_header_long'>אתר</div>
                        <div className='table_header table_header_long'>שעת כניסה מדווחת</div>
                        <div className='table_header table_header_long'>שעת כניסה מתוקנת</div>
                        <div className='table_header table_header_long'>שעת יציאה מדווחת</div>
                        <div className='table_header table_header_long'>שעת יציאה מתוקנת</div>
                        <div className='table_header table_header_long'>סטטוס</div>
                    </div>

                    <div className='table_header_cont'>
                      <div className='table_row table_header_long'>
                            <img src={user_m} className='user_s' />
                            דניאל שמש
                            </div>
                        <div className='table_row table_header_long'>קניון רמת אביב</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row ' >  
                           <div className='table_row_payed'>אושר</div>
                        </div>

                    </div>


                     <div className='table_header_cont'>
                      <div className='table_row table_header_long'>
                            <img src={user_m} className='user_s' />
                            דניאל שמש
                            </div>
                        <div className='table_row table_header_long'>קניון רמת אביב</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row table_header_long' >  
                           <div className='table_row_payed_white'>אשר</div>
                           <div className='table_row_payed_black'>דחה</div>
                        </div>

                    </div>

                    <div className='table_header_cont'>
                      <div className='table_row table_header_long'>
                            <img src={user_m} className='user_s' />
                            דניאל שמש
                            </div>
                        <div className='table_row table_header_long'>קניון רמת אביב</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row table_header_long' >  
                           <div className='table_row_payed_red'>נדחה</div>
                          
                        </div>

                    </div>

                         <div className='table_header_cont'>
                      <div className='table_row table_header_long'>
                            <img src={user_m} className='user_s' />
                            דניאל שמש
                            </div>
                        <div className='table_row table_header_long'>קניון רמת אביב</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row ' >  
                           <div className='table_row_payed'>אושר</div>
                        </div>

                    </div>


                         <div className='table_header_cont'>
                      <div className='table_row table_header_long'>
                            <img src={user_m} className='user_s' />
                            דניאל שמש
                            </div>
                        <div className='table_row table_header_long'>קניון רמת אביב</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row ' >  
                           <div className='table_row_payed'>אושר</div>
                        </div>

                    </div>


                         <div className='table_header_cont'>
                      <div className='table_row table_header_long'>
                            <img src={user_m} className='user_s' />
                            דניאל שמש
                            </div>
                        <div className='table_row table_header_long'>קניון רמת אביב</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row ' >  
                           <div className='table_row_payed'>אושר</div>
                        </div>

                    </div>


                         <div className='table_header_cont'>
                      <div className='table_row table_header_long'>
                            <img src={user_m} className='user_s' />
                            דניאל שמש
                            </div>
                        <div className='table_row table_header_long'>קניון רמת אביב</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row ' >  
                           <div className='table_row_payed'>אושר</div>
                        </div>

                    </div>


                    <div className='table_header_cont'>
                        <div className='table_row table_header_long'>
                            <img src={user_m} className='user_s' />
                            דניאל שמש
                        </div>
                        <div className='table_row table_header_long'>קניון רמת אביב</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row ' >  
                           <div className='table_row_payed'>אושר</div>
                        </div>

                    </div>


                     <div className='table_header_cont'>
                        <div className='table_row table_header_long'>
                            <img src={user_m} className='user_s' />
                            דניאל שמש
                        </div>
                        <div className='table_row table_header_long'>קניון רמת אביב</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row table_header_long' >  
                           <div className='table_row_payed_red'>נדחה</div>
                          
                        </div>

                    </div>

                    <div className='table_header_cont'>
                        <div className='table_row table_header_long'>
                            <img src={user_m} className='user_s' />
                            דניאל שמש
                        </div>
                        <div className='table_row table_header_long'>קניון רמת אביב</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row ' >  
                           <div className='table_row_payed'>אושר</div>
                        </div>

                    </div>

                        <div className='table_header_cont'>
                        <div className='table_row table_header_long'>
                            <img src={user_m} className='user_s' />
                            דניאל שמש
                        </div>
                        <div className='table_row table_header_long'>קניון רמת אביב</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row table_header_long'>14:00</div>
                        <div className='table_row table_header_long'>13:55</div>
                        <div className='table_row ' >  
                           <div className='table_row_payed'>אושר</div>
                        </div>

                    </div>

                </div>

                        
            </div>:<></>}

            
            {page_selected==4?<div className='shifts_main_cont'>
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
            </div>:<></>}


            {page_selected==5?<div className='shifts_main_cont'>
                <div className='sahar_box_cont_main'>
                    <div className='sahar_box_cont'>
                        <div className='sahar_box_title_cont_main'>
                            <img src={sahar_1} />

                            <div className='sahar_box_title_cont'>
                                <div className='sahar_box_title'>כללי שיבוץ משמרות</div>
                                <div className='sahar_box_subtitle'>הגדרות לשיבוץ אוטומטי ומגבלות עבודה</div>
                            </div>
                        </div>

                        <div className='input_sahar_1_cont'>
                            <input type="text" className='input_sahar_1' placeholder='8'/>
                            <div className='input_sahar_1_text'>מינימום שעות מנוחה בין משמרות</div>
                        </div>


                        <div className='input_sahar_1_cont'>
                            <input type="text" className='input_sahar_1' placeholder='8'/>
                            <div className='input_sahar_1_text'>מקסימום שעות שבועיות</div>
                        </div>


                         <div className='input_sahar_1_cont'>
                            <input type="text" className='input_sahar_1' placeholder='8'/>
                            <div className='input_sahar_1_text'>אורך משמרת ברירת מחדל</div>
                        </div>

                        
                         <div className='input_sahar_1_cont'>
                            <input type="text" className='input_sahar_1' placeholder='8'/>
                            <div className='input_sahar_1_text'>אורך הפסקה אוטומטית</div>
                        </div>

                        <div className='input_sahar_1_cont input_sahar_1_cont_slide'>

                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>

                            <div>
                                <div className='input_sahar_1_text'>הפעל ניכוי הפסקות אוטומטי</div>
                                <div className='sahar_box_subtitle'>נכה אוטומטית זמן הפסקה מזמן העבודה</div>
                            </div>
                        </div>

                    </div>

                    <div className='sahar_box_cont'>
                        <div className='sahar_box_title_cont_main'>
                            <img src={sahar_2} />

                            <div className='sahar_box_title_cont'>
                                <div className='sahar_box_title'>כללי חישוב שכר</div>
                                <div className='sahar_box_subtitle'>הגדרות לחישוב שכר, שעות נוספות ותוספות</div>
                            </div>
                        </div>

                        <div className='input_sahar_1_cont'>
                            <input type="text" className='input_sahar_1' placeholder='150%'/>
                            <div className='input_sahar_1_text'>אחוז שעות נוספות</div>
                        </div>


                        <div className='input_sahar_1_cont'>
                            <input type="text" className='input_sahar_1' placeholder='150%'/>
                            <div className='input_sahar_1_text'>תעריך שבת/חג</div>
                        </div>


                         <div className='input_sahar_1_cont'>
                            <input type="text" className='input_sahar_1' placeholder='80%'/>
                            <div className='input_sahar_1_text'>שווי ימי מחלה</div>
                        </div>


                                 <div className='input_sahar_1_cont input_sahar_1_cont_slide'>

                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>

                            <div>
                                <div className='input_sahar_1_text'>חישוב אוטומטי של לילות</div>
                                <div className='sahar_box_subtitle'>וסף תוספת לילה אוטומטית למשמרות לילה</div>
                            </div>
                        </div>

                        
                        
                        
                        <div className='input_sahar_1_cont input_sahar_1_cont_slide'>

                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>

                            <div>
                                <div className='input_sahar_1_text'>תוספת שעות נסיעה</div>
                                <div className='sahar_box_subtitle'>הוסף תשלום עבור שעות נסיעה לאתרים מרוחקים</div>
                            </div>
                        </div>
                        
                    </div>

                    <div className='sahar_box_cont'>

                         <div className='sahar_box_title_cont_main'>
                            <img src={sahar_3} />

                            <div className='sahar_box_title_cont'>
                                <div className='sahar_box_title'>אוטומציה ותזכורות</div>
                                <div className='sahar_box_subtitle'>התראות אוטומטיות וחוקים לניהול נוכחות</div>
                            </div>
                        </div>

                        <div className='input_sahar_1_cont'>
                            <input type="text" className='input_sahar_1' placeholder='10'/>
                            <div className='input_sahar_1_text'>סף איחור להתראה (בדקות)</div>
                        </div>


                        <div className='input_sahar_1_cont'>
                            <input type="text" className='input_sahar_1' placeholder='3'/>
                            <div className='input_sahar_1_text'>מספר העדרויות לדגל</div>
                        </div>


                        <div className='input_sahar_1_cont input_sahar_1_cont_slide'>

                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>

                            <div>
                                <div className='input_sahar_1_text'>התראות אוטומטיות למאחרים</div>
                                <div className='sahar_box_subtitle'>שלח התראת SMS למנהל כאשר עובד מאחר</div>
                            </div>
                        </div>

                        <div className='input_sahar_1_cont input_sahar_1_cont_slide'>

                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>

                            <div>
                                <div className='input_sahar_1_text'>ייצר דו״ח העדרויות אוטומטי</div>
                                <div className='sahar_box_subtitle'>שלח דו״ח העדרויות שבועי למנהלים</div>
                            </div>
                        </div>

                        
                        <div className='input_sahar_1_cont input_sahar_1_cont_slide'>

                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>

                            <div>
                                <div className='input_sahar_1_text'>תזכורות למשמרות קרובות</div>
                                <div className='sahar_box_subtitle'>שלח תזכורת SMS לעובדים 2 שעות לפני משמרת</div>
                            </div>
                        </div>


              
                        <div className='input_sahar_1_cont input_sahar_1_cont_slide'>

                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>


                            <div>
                                <div className='input_sahar_1_text'>אישור אוטומטי למשמרות</div>
                                <div className='sahar_box_subtitle'>אשר אוטומטית משמרות שהושלמו ללא בעיות</div>
                            </div>
                        </div>



                    </div>

                </div>
            </div>:<></>}

        </div>

        {show_popup_shift?<Popup_shift set_show_popup_shift={set_show_popup_shift}></Popup_shift>:<></>}
    </>
  )
}

export default Shifts

