

//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Site_page.css'
import RightMenu from './RightMenu'
// import Dashboard from './Dashboard'

import msg_icon from './assets/msg_icon.png'
import bell_icon from './assets/bell_icon.png'
import site_m from './assets/site_m.png'

import user_s_1 from './assets/user_s_1.png'
import p_4 from './assets/p_4_w.png'
import p_1 from './assets/p_1.png'
import p_2 from './assets/p_3.png'
import p_3 from './assets/p_1.png'

import site_d_1 from './assets/site_d_1.png'
import site_d_2 from './assets/site_d_2.png'
import site_d_3 from './assets/site_d_3.png'
import site_d_4 from './assets/site_d_4.png'

import site_map from './assets/site_map.png'

import more_icon from './assets/more_icon.png'

import user_m_1 from './assets/user_m_1.png'
import user_m_2 from './assets/user_m_2.png'

import arrow_r from './assets/arrow_r.png'
import filter from './assets/filter.png'

import {  useEffect, useState } from 'react'
import Site_page_neshek from './Site_page_neshek'
import Site_page_equipment from './Site_page_equipment'
import Site_page_patrol from './Site_page_patrol'
import Site_page_work_orders from './Site_page_work_orders'
import Site_page_docs from './Site_page_docs'
import Site_page_calendar from './Site_page_calendar'
import Site_page_rep_check from './Site_page_rep_check'
import Site_page_shifts from './Site_page_shifts'
import Site_page_shifts_1 from './Site_page_shifts_1'
import { useLocation } from 'react-router-dom'
import axios from 'axios'


function Site_page() {
    const location = useLocation();

    const [site_details] = useState(location.state && location.state.site?location.state.site:"");
    
    const [show_p_box_cont_info, set_show_p_box_cont_info] = useState(false);
    const [show_work_time, set_show_work_time] = useState(false);
    const [fake, set_fake] = useState(false);
    const [show_filter_options, set_show_filter_options] = useState(false);
 
    const [selected_tab, set_selected_tab] = useState(1);
         
    const [workers, set_workers] = useState([]);
    const [workers_original, set_workers_original] = useState([]);

    const [rols, set_roles] = useState<any>([]);

    const [rol_filter, set_rol_filter] = useState<any>([]);

    const [status_filter, set_status_filter] = useState<any>([]);

    const [doc_date_filter, set_doc_date_filter] = useState<any>([]);

    useEffect(() => {
        get_all_workers();
        get_roles();
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
           set_workers_original(res.data.recordset);

        } 
          
      });
    }

    
    function search_worker(val:any){
        debugger
        let w_original:any=workers_original;
        let worker_final:any=[];

        for(let i=0; i<w_original.length; i++){
            if (w_original[i].name.includes(val)){
                worker_final.push(w_original[i])
            }else if (w_original[i].role.includes(val)){
                worker_final.push(w_original[i])
            }else if (w_original[i].snif.includes(val)){
                worker_final.push(w_original[i])
            }
        }

        set_workers(worker_final);
        set_fake(!fake);

    }
    

        
    function filter_by_role(rol:any,checked:any){
       let a:any=workers_original;
       let rol_f=rol_filter;
       if (checked==true){
            rol_f.push(rol);
       } else {
        let new_rol_f=[];
        for(let j=0;j<rol_f.length; j++){
            if (rol_f[j]!=rol){
                new_rol_f.push(rol_f[j])
            }
        } 
         rol_f=new_rol_f;
       }

        let final:any =[];

        debugger
        for(let i=0; i<a.length; i++){
            for(let j=0;j<rol_f.length; j++){
                if(a[i].role==rol_f[j]){
                    final.push(a[i]);
                } 
            }
        }

        set_rol_filter(rol_f);
        if(rol_f.length>0){
            set_workers(final);
        } else{
            set_workers(workers_original);
        }
        
        set_fake(!fake);
    }

    function filter_by_status(rol:any,checked:any){
       let a:any=workers_original;
       let rol_f=status_filter;
       if (checked==true){
            rol_f.push(rol);
       } else {
        let new_rol_f=[];
        for(let j=0;j<rol_f.length; j++){
            if (rol_f[j]!=rol){
                new_rol_f.push(rol_f[j])
            }
        } 
         rol_f=new_rol_f;
       }

        let final:any =[];

        debugger
        for(let i=0; i<a.length; i++){
            for(let j=0;j<rol_f.length; j++){
                if(a[i].status==rol_f[j]){
                    final.push(a[i]);
                } 
            }
        }

        set_status_filter(rol_f);
        if(rol_f.length>0){
            set_workers(final);
        } else{
            set_workers(workers_original);
        }
        set_fake(!fake);
    }



    function filter_by_doc_date(rol:any,checked:any){
       let a:any=workers_original;
       let rol_f=doc_date_filter;
       if (checked==true){
            rol_f.push(rol);
       } else {
        let new_rol_f=[];
        for(let j=0;j<rol_f.length; j++){
            if (rol_f[j]!=rol){
                new_rol_f.push(rol_f[j])
            }
        } 
         rol_f=new_rol_f;
       }

        let final:any =[];
        let today=new Date();

        let week_left=new Date();
        week_left.setDate(week_left.getDate() + 7);

        debugger
        for(let i=0; i<a.length; i++){
            for(let j=0;j<rol_f.length; j++){
                let d_1=new Date(a[i].doc_1_date);
                let d_2=new Date(a[i].doc_2_date);
                let d_3=new Date(a[i].doc_3_date);

                if(d_1>today && d_2> today && d_3> today && rol_f[j]==1){
                    final.push(a[i]);
                } 

                if(((d_1<week_left && d_1>today) || (d_2<week_left && d_2> today) || (d_3<week_left && d_3> today)) && rol_f[j]==2){
                    final.push(a[i]);
                } 

                if((d_1<today || d_2<today || d_3<today) && rol_f[j]==3){
                    final.push(a[i]);
                } 
            }
        }

        set_doc_date_filter(rol_f);
        
        if(rol_f.length>0){
            set_workers(final);
        } else{
            set_workers(workers_original);
        }
        set_fake(!fake);
    }

    
    function get_roles(){

      let payload = new FormData();
    
      axios({
        method: 'post',
        url: globalThis.app.current+'/get_roles',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(res => {

        if (res.data.recordset.length>0){
           set_roles(res.data.recordset);
        }
      })
        
    }
  return (
    <>
    <div className='dashboard_main_cont'>

        <RightMenu title="dashboard"></RightMenu>

       <div className='top_header'>

             {/* <div className='user_cont'>
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
    {selected_tab!=10?<>
        <div className='site_page_select_cont'>
            <img src={site_m} />
            <div className='site_page_select_text'>{site_details.site_name}</div>
        </div>

        <div className='site_g_info_cont'>
            <div className='site_g_info_in'>
                <div className='site_g_info_title'>מזהה אתר:</div>
                <div className='site_g_info_info'>{site_details.id}</div>
            </div>

            <div className='site_g_info_in'>
                <div className='site_g_info_title'>סוג אתר:</div>
                <div className='site_g_info_info'>{site_details.type}</div>
            </div>

            <div className='site_g_info_in'>
                <div className='site_g_info_title'>מנהל אתר:</div>
                <div className='site_g_info_info'>{site_details.contact_person}</div>
            </div>

            <div className='site_g_info_in'>
                <div className='site_g_info_title'>טלפון :</div>
                <div className='site_g_info_info'>{site_details.phone}</div>
            </div>
        </div>

        <div className='top_btns_cont_site_page '>
            <div className={'top_btn '+ (selected_tab==1?"top_btn_selected":"")} onClick={()=>set_selected_tab(1)}>מידע כללי</div>
            <div className={'top_btn '+ (selected_tab==2?"top_btn_selected":"")} onClick={()=>set_selected_tab(2)}>נשקים</div>
            <div className={'top_btn '+ (selected_tab==3?"top_btn_selected":"")} onClick={()=>set_selected_tab(3)}>ציוד</div>
            <div className={'top_btn '+ (selected_tab==4?"top_btn_selected":"")} onClick={()=>set_selected_tab(4)}>סיורים</div>
            <div className={'top_btn '+ (selected_tab==5?"top_btn_selected":"")} onClick={()=>set_selected_tab(5)}>נוכחות ומשמרות</div>
            <div className={'top_btn '+ (selected_tab==6?"top_btn_selected":"")} onClick={()=>set_selected_tab(6)}>דוחות ובקרה</div>
            <div className={'top_btn '+ (selected_tab==7?"top_btn_selected":"")} onClick={()=>set_selected_tab(7)}>מסמכים</div>
            <div className={'top_btn '+ (selected_tab==8?"top_btn_selected":"")} onClick={()=>set_selected_tab(8)}>הזמנות עבודה</div>
            <div className={'top_btn '+ (selected_tab==9?"top_btn_selected":"")} onClick={()=>set_selected_tab(9)}>יומן אירועים</div>
        </div>
        </>:<></>}

       {selected_tab==1?<div className='site_page_general_info_cont'>
            <div>
                <div className='site_details_cont'>
                    <div className='p_details_title'>פרטי האתר</div>

                    <div>
                        <div className='p_details_cont_main'>
                            <div className='p_details_cont'>
                                <img src={site_d_1} />
                                <div>כתובת</div>
                                
                            </div>

                            <div className='p_details_info_cont'>{site_details.address}</div>
                        </div>

                         <div className='p_details_cont_main'>
                            <div className='p_details_cont'>
                                <img src={site_d_3} />
                                <div>פרטי קשר</div>
                                
                            </div>

                            <div className='p_details_info_cont'>{site_details.phone}</div>
                            <div className='p_details_info_cont'>{site_details.email}</div>
                        </div>
                    </div>


                    <div>
                        <div className='p_details_cont_main'>
                            <div className='p_details_cont'>
                                <img src={site_d_2} />
                                <div>שעות פעילות</div>
                                
                            </div>

                            <div className='p_details_info_cont'>ראשון - חמישי: 06:00 - 23:00</div>
                            <div className='p_details_info_cont'>
                                שישי: 06:00 - 16:00
                                </div>
                            <div className='p_details_info_cont'> שבת: סגור</div>
                        </div>

                         <div className='p_details_cont_main'>
                            <div className='p_details_cont'>
                                <img src={site_d_4} />
                                <div>פרטים נוספים</div>
                                
                            </div>

                            <div className='p_details_info_cont'>אתר בעל תנועה גבוהה. נדרש תיאום </div>
                            <div className='p_details_info_cont'>עם מנהל האבטחה לכל שינוי במערך</div>
                        </div>
                    </div>
                </div>

                <div className='site_workers_cont'>
                    <div className='p_details_title'>עובדים</div>

                    <div className='btn_exp_cont_site'>
                        <input type="text"  onChange={(e)=>search_worker(e.target.value)}   placeholder='חיפוש עובד' className='search_input_site btn_exp_cont_input'/>
                        <div className='select_period'  onClick={()=>set_show_filter_options(!show_filter_options)}>סינון

                            <img src={filter} className='filter_icon' />
                        </div>
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    
                         {show_filter_options? <div className='filter_options_cont'>
                        <div className='filter_options_cont_title'>תפקיד</div>
                        {rols && rols.map((rol:any) => (
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" onClick={(e:any)=>filter_by_role(rol.role_name, e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>{rol.role_name}</div>
                        </div>
                        ))}

             


                        <div className='filter_options_cont_title'>סטטוס תעסוקה</div>
                        <div className='filter_checkbox_row'>
                        <input type="checkbox"  onClick={(e:any)=>filter_by_status('פעיל', e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>פעיל</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox"  onClick={(e:any)=>filter_by_status('בהכשרה', e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>בהכשרה</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox"  onClick={(e:any)=>filter_by_status('מושעה', e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>מושעה</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" onClick={(e:any)=>filter_by_status('סיים', e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>סיים</div>
                        </div>

                        <div className='filter_options_cont_title'>מסמכים בתוקף</div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" onClick={(e:any)=>filter_by_doc_date(1, e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>תקין</div>
                        </div>

                        <div className='filter_checkbox_row'>
                            <input type="checkbox"  onClick={(e:any)=>filter_by_doc_date(2, e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>עומד לפוג</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox"  onClick={(e:any)=>filter_by_doc_date(3, e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>פג תוקף</div>
                        </div>

                    </div>:<></>}

                    <div className='table_header_cont'>
                        <div className='table_header'>שם</div>
                        <div className='table_header'>תפקיד</div>
                        <div className='table_header'>מסט״ב נשק</div>
                        <div className='table_header'>סטטוס מסמכים</div>
                    </div>

                    {workers && workers.map((worker:any) => (
                        <>
                        {worker.snif.includes(site_details.site_name)?
                            <div className='table_header_cont'>
                                <div className='table_row'>
                                    <img src={worker.user_image?globalThis.app.current+'/'+worker.user_image:user_s_1} className='user_s user_s_img' />
                                {worker.name}
                                    </div>
                                <div className='table_row'>{worker.role}</div>
                                <div className='table_row'>תל אביב</div>
                                <div className='table_row'>כולם בתוקף</div>
                            </div>
                            :<></>}
                        </>
                    ))}

                    {/* <div className='table_header_cont'>
                        <div className='table_row'>
                            <img src={user_s_1} className='user_s' />
                            יוסי כהן
                            </div>
                        <div className='table_row'>אחמ״ש</div>
                        <div className='table_row'>תל אביב</div>
                        <div className='table_row'>כולם בתוקף</div>
                    </div>

                         <div className='table_header_cont'>
                        <div className='table_row'>
                            <img src={user_s_1} className='user_s' />
                            יוסי כהן
                            </div>
                        <div className='table_row'>אחמ״ש</div>
                        <div className='table_row'>תל אביב</div>
                        <div className='table_row'>כולם בתוקף</div>
                    </div>

                         <div className='table_header_cont'>
                        <div className='table_row'>
                            <img src={user_s_1} className='user_s' />
                            יוסי כהן
                            </div>
                        <div className='table_row'>אחמ״ש</div>
                        <div className='table_row'>תל אביב</div>
                        <div className='table_row'>כולם בתוקף</div>
                    </div> */}

                </div>
            </div>

             <div>
                <div className='site_details_cont'>
                  <div className='right_part_cont_top_right'>
                    <div className='right_part_cont_top_title'>תמונת מצב</div>

                    <div className='btn_exp_cont'>
                        <div className='select_period'>יומי</div>
                        <div className='export_btn'>ייצוא</div>
                    </div>


                    {!show_p_box_cont_info?<div className='p_box_cont'>
                        <div className='p_box' onClick={()=>set_show_p_box_cont_info(true)}>
                            <img src={more_icon} className='more_icon' />
                            <img src={p_1} className='p_icon'/>
                            <div className='p_box_text_cont'>
                                <div className='p_box_title'>82%</div>
                                <div className='p_box_subtitle'>נוכחות</div>
                            </div>
                        
                        </div>

                        <div className='p_box'>
                            <img src={more_icon} className='more_icon' />
                            <img src={p_2} className='p_icon'/>
                            <div className='p_box_text_cont'>
                                <div className='p_box_title'>22%</div>
                                <div className='p_box_subtitle'>נשקים מוקצים</div>
                            </div>
                        </div>

                        <div className='p_box'>

                            <img src={more_icon} className='more_icon' />
                            <img src={p_3} className='p_icon'/>
                            <div className='p_box_text_cont'>
                                <div className='p_box_title'>88%</div>
                                <div className='p_box_subtitle'>מסמכים בתוקף</div>
                            </div>

                        </div>

                        <div className='p_box'>
                            <img src={more_icon} className='more_icon' />
                            <img src={p_4} className='p_icon'/>
                            <div className='p_box_text_cont'>
                                <div className='p_box_title'>67%</div>
                                <div className='p_box_subtitle'>סיורים בזמן</div>
                            </div>

                        </div>

                    </div>: 
                    <div className='p_box_cont_2'>
                        <img src={arrow_r} className='arrow_r' onClick={()=>set_show_p_box_cont_info(false)}/>
                        <div className='p_box_cont_2_first'>
                            <img src={p_1} className='p_icon'/>
                            <div className='p_box_text_cont'>
                                <div className='p_box_title'>82%</div>
                                <div className='p_box_subtitle'>נוכחות</div>
                            </div>
                        </div>

                        <div className='p_box_cont_2_sec'>
                            <div className='count_p_cont'>
                                <div className='count_p'>2</div>
                                <div className='count_p_text'>אחמ״שים</div>
                            </div>
                            <div className='count_p_user_cont' onMouseOver={()=>set_show_work_time(true)} onMouseLeave={()=>set_show_work_time(false)}>
                                <img src={user_m_1} />
                                <div>יוסי כהן</div>
                            </div>

                            {show_work_time? <div className='show_work_time_cont'>
                                <div className='show_work_time_title'>משמרת בוקר</div>
                                <div className='show_work_time_subtitle'>6:00-14:00</div>
                                <div className='show_work_time_subtitle'>סניף תל אביב</div>
                            </div>:<></>}

                            <div className='count_p_user_cont'>
                                <img src={user_m_2} />
                                <div>רועי לוי</div>
                            </div>

                        </div>


                        <div className='p_box_cont_3_sec'>
                            <div className='add_worker_btn'>הוספת עובד +</div>

                            <div className='count_p_cont'>
                                <div className='count_p count_p_2'>9/13</div>
                                <div className='count_p_text'>מאבטחים</div>
                            </div>

                            <div className='count_p_user_cont_main'>
                                <div>
                                    <div className='count_p_user_cont'>
                                        <img src={user_m_1} />
                                        <div>יוסי כהן</div>
                                    </div>

                                    <div className='count_p_user_cont'>
                                        <img src={user_m_2} />
                                        <div>רועי לוי</div>
                                    </div>

                                    <div className='count_p_user_cont'>
                                        <img src={user_m_2} />
                                        <div>ספיר כהן</div>
                                    </div>
                                </div>

                                <div>
                                    <div className='count_p_user_cont'>
                                        <img src={user_m_1} />
                                        <div>יוסי כהן</div>
                                    </div>

                                    <div className='count_p_user_cont'>
                                        <img src={user_m_2} />
                                        <div>רועי לוי</div>
                                    </div>

                                    <div className='count_p_user_cont'>
                                        <img src={user_m_2} />
                                        <div>ספיר כהן</div>
                                    </div>
                                </div>

                                <div>
                                    <div className='count_p_user_cont'>
                                        <img src={user_m_1} />
                                        <div>יוסי כהן</div>
                                    </div>

                                    <div className='count_p_user_cont'>
                                        <img src={user_m_2} />
                                        <div>רועי לוי</div>
                                    </div>

                                    <div className='count_p_user_cont'>
                                        <img src={user_m_2} />
                                        <div>ספיר כהן</div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        
                    </div>}

                </div>
                </div>

                <div className='site_workers_cont site_workers_cont_left'>
                    <div className='p_details_title'>מפת אתר</div>

                    <div className='btn_exp_cont_site'>
                        <input type="text" placeholder='חיפוש עובד' className='search_input_site btn_exp_cont_input'/>
                        <div className='select_period'>סינון

                            <img src={filter} className='filter_icon' onClick={()=>set_show_filter_options(!show_filter_options)}/>
                        </div>
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    <img src={site_map} className='site_map'/>
                </div>
            </div>

            <div>
                <div className='fast_actions_site_cont'>
                    <div className='p_details_title'>פעולות מהירות</div>

                    <div className='btn_exp_cont_site'>
                      
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    <div className='add_meavteah_btn'>הוספת מאבטח לאתר</div>

                    <div className='add_meavteah_btn flame_w'>ביצוע העברה חמה</div>
                    <div className='add_meavteah_btn qr'>הוספת נקודות QR</div>
                    <div className='add_meavteah_btn exclamation_w'>דיווח אירוע חריג</div>
                    <div className='add_meavteah_btn add_neshek_w'>הוספת נשק לאתר</div>
                     {/* <div className='add_meavteah_btn add_neshek_w'>הוספת מאבטח לאתר</div> */}
                </div>
            </div>
        </div>:<></>}

        {selected_tab==2?<Site_page_neshek></Site_page_neshek>:<></>}

        {selected_tab==3?<Site_page_equipment></Site_page_equipment>:<></>}

        {selected_tab==4?<Site_page_patrol></Site_page_patrol>:<></>}

        {selected_tab==5?<Site_page_shifts set_selected_tab={set_selected_tab}></Site_page_shifts>:<></>}

        {selected_tab==6?<Site_page_rep_check></Site_page_rep_check>:<></>}

        {selected_tab==7?<Site_page_docs></Site_page_docs>:<></>}
        {selected_tab==8?<Site_page_work_orders></Site_page_work_orders>:<></>}
        {selected_tab==9?<Site_page_calendar></Site_page_calendar>:<></>}

        {selected_tab==10?<Site_page_shifts_1 set_selected_tab={set_selected_tab}></Site_page_shifts_1>:<></>}
        

    </div>
    </>
  )
}

export default Site_page
