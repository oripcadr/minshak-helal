

//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Workers.css'
import RightMenu from './RightMenu'
// import Dashboard from './Dashboard'

import msg_icon from './assets/msg_icon.png'
import bell_icon from './assets/bell_icon.png'
import p_1 from './assets/p_1_w.png'
import p_2 from './assets/p_2_w.png'
import p_3 from './assets/p_3_w.png'
import p_4 from './assets/p_4_w.png'
import l_2 from './assets/l_2.png'
import l_3 from './assets/l_3.png'
import more_w from './assets/more_w.png'
import employee_icon from './assets/user_add.png'

import user_m from './assets/user_m.png'


import g_dot from './assets/g_dot.png'


import more_icon from './assets/more_icon.png'
import user_add from './assets/user_add.png'

import user_m_1 from './assets/user_m_1.png'
import user_m_2 from './assets/user_m_2.png'

import arrow_r from './assets/arrow_r.png'
import filter from './assets/filter.png'
import pencil from './assets/pencil.png'
import trash_s from './assets/trash_s.png'

import { useEffect, useState } from 'react'

//import Patrol_popup from './Patrol_popup'
import folder_o from './assets/folder_o.png'
import Comp_popup_1 from './Comp_popup_1'
import axios from 'axios'
import New_worker from './New_worker'
import Edit_worker from './Edit_worker'
import Worker_popup from './Worker_popup'
import Show_doc from './Show_doc'

function Workers() {
    
    const [show_p_box_cont_info, set_show_p_box_cont_info] = useState(false);
    const [show_work_time, set_show_work_time] = useState(false);
    const [show_filter_options, set_show_filter_options] = useState(false);
    const [show_worker_popup, set_show_worker_popup] = useState(false);
    const [show_comp_popup, set_show_comp_popup] = useState(false);
    const [new_worker_popup, set_new_worker_popup] = useState(false);
    const [edit_worker_popup, set_edit_worker_popup] = useState(false);
    const [fake, set_fake] = useState(false);
    const [delete_worker_popup, set_delete_worker_popup] = useState(false);
    
    
    const [workers, set_workers] = useState([]);
    const [workers_original, set_workers_original] = useState([]);
    const [show_more_options, set_show_more_options] = useState<any>('');
    const [sites, set_sites] = useState<any>([]);
    const [rols, set_roles] = useState<any>([]);
    
    const [snif_filter, set_snif_filter] = useState<any>([]);
    const [rol_filter, set_rol_filter] = useState<any>([]);

    const [status_filter, set_status_filter] = useState<any>([]);

    const [doc_date_filter, set_doc_date_filter] = useState<any>([]);
    const [show_doc, set_show_doc] = useState<any>(false);
    
    useEffect(() => {
        get_all_workers();
        get_all_sites();
        get_roles();
    }, []);

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

    function get_all_sites(){

      let payload = new FormData();
    
      axios({
        method: 'post',
        url: globalThis.app.current+'/get_all_sites',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(res => {

        if (res.data.recordset.length>0){
           set_sites(res.data.recordset);
        }
      })

    }
        

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

    


    function delete_worker(){
        let payload = new FormData();
    
        payload.append("id", show_more_options);

        axios({
            method: 'post',
            url: globalThis.app.current+'/delete_worker',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
            get_all_workers();
            set_show_more_options('');
        });
    }

    function find_worker(val:any){
        let a:any=workers_original;
        let final:any =[];

        for(let i=0; i<a.length; i++){
            if(a[i].name.includes(val)){
                final.push(a[i]);
            }
        }

        set_workers(final);
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
        set_workers(final);
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
        set_workers(final);
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
        set_workers(final);
        set_fake(!fake);
    }

    function filter_by_snif(snif:any,checked:any){
        let a:any=workers_original;
        let final:any =[];

        let rol_f=snif_filter;
       if (checked==true){
            rol_f.push(snif);
       } else {
        let new_rol_f=[];
        for(let j=0;j<rol_f.length; j++){
            if (rol_f[j]!=snif){
                new_rol_f.push(rol_f[j])
            }
        } 
         rol_f=new_rol_f;
       }

        for(let i=0; i<a.length; i++){
            for(let j=0;j<rol_f.length; j++){
                if(a[i].snif.includes(rol_f[j])){
                    let exist=false;
                    for(let k=0;k<final.length; k++){
                        if(a[i].id==final[k].id){
                            exist=true;
                        }
                    }
                    if(exist==false){
                        final.push(a[i]);
                    }
                } 
            }
        }

        set_snif_filter(rol_f);
        set_workers(final);
        set_fake(!fake);
    }

  return (
    <>
    <div className='dashboard_main_cont'>

        <RightMenu title="workers"></RightMenu>

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

        <div className='main_area_cont'>
            <div className='right_part_cont'>
                
                <div className='top_area_p top_area_w'>
                    <div>
                        <div className='right_part_cont_top_title'>פעולות מהירות</div>


                        <div className='p_box_cont p_box_cont_p'>
                            <div className='p_box_action p_box_action_w' onClick={()=>set_new_worker_popup(true)}>
                                <img src={user_add} className='' />
                                <div className='user_add_title user_add_title_w'>הוסף עובד חדש</div>

                            </div>

                            <div className='p_box_action p_box_action_w' onClick={()=>set_show_comp_popup(true)}>
                                <img src={folder_o} className='' />
                                <div className='user_add_title user_add_title_w'>תיק חברה (מפעל ראוי)</div>

                            </div>

                        </div>
                    </div>
                    <div className='right_part_cont_top'>
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
                                    <div className='p_box_title'>420</div>
                                    <div className='p_box_subtitle'>עובדים רשומים</div>
                                </div>
                            
                            </div>

                            <div className='p_box'>
                                <img src={more_icon} className='more_icon' />
                                <img src={p_2} className='p_icon'/>
                                <div className='p_box_text_cont'>
                                    <div className='p_box_title'>380</div>
                                    <div className='p_box_subtitle'>עובדים פעילים</div>
                                </div>
                            </div>

                            <div className='p_box'>

                                <img src={more_icon} className='more_icon' />
                                <img src={p_3} className='p_icon'/>
                                <div className='p_box_text_cont'>
                                    <div className='p_box_title'>15</div>
                                    <div className='p_box_subtitle'>בהכשרה</div>
                                </div>

                            </div>

                            <div className='p_box'>
                                <img src={more_icon} className='more_icon' />
                                <img src={p_4} className='p_icon'/>
                                <div className='p_box_text_cont'>
                                    <div className='p_box_title'>12</div>
                                    <div className='p_box_subtitle'>חסרים מסמכים</div>
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

                <div className='right_part_cont_bottom right_part_cont_bottom_p'>
                    <div className='right_part_cont_top_title'>עובדים</div>

                    <div className='btn_exp_cont'>
                        <input type="text" placeholder='חיפוש עובד לפי שם, תתפקיד, סניף, מסט״ב…' className='btn_exp_cont_input' onChange={(e)=>find_worker(e.target.value)}/>
                        <div className='select_period'>סינון

                            <img src={filter} className='filter_icon' onClick={()=>set_show_filter_options(!show_filter_options)}/>
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

                        <div className='filter_options_cont_title'>סניף</div>
                         {sites && sites.map((site:any) => (
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" onClick={(e:any)=>filter_by_snif(site.site_name, e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>{site.site_name}</div>
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
                        <div className='table_header'>סניף</div>
                        <div className='table_header'>סטטוס תעסוקה</div>
                        <div className='table_header'>מסמכים</div>
                    </div>

                    {workers && workers.map((worker:any) => (
                        <div className='table_header_cont'>
                        
                            <div  className='table_row' onClick={()=>set_show_worker_popup(worker)}>
                                <img src={worker.user_image?globalThis.app.current+'/'+worker.user_image:user_m} className='user_s user_s_img_w' />
                           {worker.name}
                            </div>

                            <div className='table_row'  onClick={()=>set_show_worker_popup(worker)}> {worker.role}</div>
                            <div className='table_row'  onClick={()=>set_show_worker_popup(worker)}> {worker.snif}</div>

                            <div className='table_row'  onClick={()=>set_show_worker_popup(worker)}>
                                <img src={g_dot} />
                                {worker.status}</div>

                                <div className='doc_btn_cont_main'>
                                    {worker.doc_1?<div className='doc_btn_cont' onClick={()=>set_show_doc(worker.doc_1)}>
                                        <div className='doc_btn_cont_title'>{worker.doc_1.slice( -17)}</div>
                                        <div className='doc_btn_cont_subtitle'>בתוקף עד {worker.doc_1_date?worker.doc_1_date.split('T')[0]:""}</div>
                                    </div>:<div className='doc_btn_cont'></div>}

                                    {worker.doc_2?<div className='doc_btn_cont' onClick={()=>set_show_doc(worker.doc_2)}>
                                        <div className='doc_btn_cont_title'>{worker.doc_2.slice(-17)}</div>
                                        <div className='doc_btn_cont_subtitle'>בתוקף עד {worker.doc_2 && worker.doc_2_date?worker.doc_2_date.split('T')[0]:""}</div>
                                    </div>:<div className='doc_btn_cont'></div>}

                                    {worker.doc_3?<div className='doc_btn_cont' onClick={()=>set_show_doc(worker.doc_3)}>
                                        <div className='doc_btn_cont_title'>{worker.doc_3.slice( -17)}</div>
                                        <div className='doc_btn_cont_subtitle'>בתוקף עד {worker.doc_3 && worker.doc_3_date?worker.doc_3_date.split('T')[0]:""}</div>
                                    </div>:<div className='doc_btn_cont'></div>}

                                </div>

                                <img src={more_w} className='more_worker more_w_p' onClick={()=>set_show_more_options(worker.id)}/>

                                {show_more_options==worker.id?<div className='more_options_cont'>
                                    <div onClick={()=>{set_edit_worker_popup(worker);set_show_more_options('')}}  className='more_options_row more_options_row_1'>עריכה
                                        <img src={pencil} />
                                    </div>
                                    <div  onClick={()=>set_delete_worker_popup(worker.id)} className='more_options_row'>מחיקה
                                        <img src={trash_s} />
                                    </div>
                                </div>:<></>}

                                {delete_worker_popup==worker.id?<div className='delete_worker_popup_cont'>
                                 האם אתה בטוח רוצה למחוק? 

                                <div className='delete_worker_popup_btncont'>
                                    <div onClick={()=>delete_worker()}>כן</div>
                                    <div onClick={()=>{set_delete_worker_popup(false);set_show_more_options('')}}>לא</div>
                                </div>
                                </div>:<></>}

                        </div>

                    ))}

                    
                </div>

            </div>



            <div className='left_part_third_cont left_part_third_cont_p'>
                <div className='right_part_cont_top_title right_part_cont_top_title_last '>התראות אחרונות</div>

                    <div className='btn_exp_cont'>
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    <div className='alert_box'> 
                        <img src={l_2} className='alert_img'/>        
                        <div className='alert_box_title_s'>מסמך עומד לפוג</div>
                        <div className='alert_box_title_s_l'>לפני 2 דק׳</div>

                        <div className='alert_box_title'>האישור הרפואי של יוסי כהן פג בעוד 5 ימים</div>

                        <div className='send_msg_btn'>שלח תזכורת</div>
                        <div className='view_msg_btn'>צפה במסמכים</div>
                        
                    </div>    

                    
                    <div className='alert_box'> 
                        <img src={l_3} className='alert_img'/>        
                        <div className='alert_box_title_s'>ריענון ירי</div>
                        <div className='alert_box_title_s_l'>לפני 2 דק׳</div>

                        <div className='alert_box_title'>ריענון ירי של ספיר כהן פג היום</div>

                        <div className='send_msg_btn'>שלח תזכורת</div>
                        <div className='view_msg_btn'>צפה במסמכים</div>
                        
                    </div>    


                    <div className='alert_box'> 
                        <img src={l_3} className='alert_img'/>        
                        <div className='alert_box_title_s'>עובד חדש נוסף</div>
                        <div className='alert_box_title_s_l'>לפני 2 דק׳</div>

                        <div className='alert_box_title'>נוסף עובד חדש – דניאל שמש (סגן קב״ט)</div>

                        <div className='send_msg_btn'>שלח תזכורת</div>
                        <div className='view_msg_btn'>צפה במסמכים</div>
                        
                    </div>    

                    
                    <div className='alert_box'> 
                        <img src={employee_icon} className='alert_img employee_icon'/>        
                        <div className='alert_box_title_s'>עובד חדש נוסף</div>
                        <div className='alert_box_title_s_l'>לפני 2 דק׳</div>

                        <div className='alert_box_title'>נוסף עובד חדש – דניאל שמש (סגן קב״ט)</div>

                        <div className='send_msg_btn'>שלח תזכורת</div>
                        <div className='call_msg_btn'>התקשר</div>
                        
                    </div>    


                    <div className='alert_box'> 
                        <img src={l_3} className='alert_img'/>        
                        <div className='alert_box_title_s'>עובד חדש נוסף</div>
                        <div className='alert_box_title_s_l'>לפני 2 דק׳</div>

                        <div className='alert_box_title'>נוסף עובד חדש – דניאל שמש (סגן קב״ט)</div>

                        <div className='send_msg_btn'>שלח תזכורת</div>
                        <div className='view_msg_btn'>צפה במסמכים</div>
                        
                    </div>    

                    
                    <div className='alert_box'> 
                        <img src={employee_icon} className='alert_img employee_icon'/>        
                        <div className='alert_box_title_s'>עובד חדש נוסף</div>
                        <div className='alert_box_title_s_l'>לפני 2 דק׳</div>

                        <div className='alert_box_title'>נוסף עובד חדש – דניאל שמש (סגן קב״ט)</div>

                        <div className='send_msg_btn'>שלח תזכורת</div>
                        <div className='call_msg_btn'>התקשר</div>
                        
                    </div>  
            </div>
        </div>

    </div>

    {/* {show_worker_popup?<Patrol_popup set_show_worker_popup={set_show_worker_popup}></Patrol_popup>:<></>} */}
    {show_worker_popup?<Worker_popup worker={show_worker_popup} set_show_worker_popup={set_show_worker_popup}></Worker_popup>:<></>}

    {show_comp_popup?<Comp_popup_1 set_show_worker_popup={set_show_comp_popup}></Comp_popup_1>:<></>}

    {new_worker_popup?<New_worker set_new_worker_popup={set_new_worker_popup} get_all_workers={get_all_workers}></New_worker>:<></>}                        
    
    {edit_worker_popup?<Edit_worker worker={edit_worker_popup} set_edit_worker_popup={set_edit_worker_popup} get_all_workers={get_all_workers}></Edit_worker>:<></>}
   
   {show_doc?<Show_doc show_doc={show_doc} set_show_doc={set_show_doc}></Show_doc>:<></>}
    </>
  )
}

export default Workers
