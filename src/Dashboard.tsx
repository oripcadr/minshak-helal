

//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Dashboard.css'
import RightMenu from './RightMenu'
// import Dashboard from './Dashboard'

import msg_icon from './assets/msg_icon.png'
import bell_icon from './assets/bell_icon.png'
import p_1 from './assets/p_1.png'
import p_2 from './assets/p_2.png'
import p_3 from './assets/p_3.png'
import p_4 from './assets/p_4.png'
import user_s_1 from './assets/user_s_1.png'
//import user_s_2 from './assets/user_s_2.png'

import u_1_icon from './assets/u_1_icon.png'
import u_2_icon from './assets/u_2_icon.png'

import more_icon from './assets/more_icon.png'
import user_add from './assets/user_add.png'
import place_1 from './assets/place_1.png'
// import place_2 from './assets/place_2.png'
// import place_3 from './assets/place_3.png'
// import place_4 from './assets/place_4.png'

import user_m_1 from './assets/user_m_1.png'
import user_m_2 from './assets/user_m_2.png'
import n_1 from './assets/n_1.png'
import n_2 from './assets/n_2.png'
import l_1 from './assets/l_1.png'
import l_2 from './assets/l_2.png'
import l_3 from './assets/l_3.png'
import l_4 from './assets/l_4.png'
import arrow_r from './assets/arrow_r.png'
import filter from './assets/filter.png'


import { useEffect, useState } from 'react'
import Worker_popup from './Worker_popup'
import { useNavigate } from 'react-router-dom'
import New_worker from './New_worker'
import axios from 'axios'

function Dashboard() {

    const navigate = useNavigate();
    const [show_p_box_cont_info, set_show_p_box_cont_info] = useState(false);
    const [show_p_box_cont_info_2, set_show_p_box_cont_info_2] = useState(false);
    const [show_p_box_cont_info_3, set_show_p_box_cont_info_3] = useState(false);
    
    const [show_work_time, set_show_work_time] = useState(false);
    const [show_filter_options, set_show_filter_options] = useState(false);
    const [show_filter_options_sites, set_show_filter_options_sites] = useState(false);
    
    const [show_worker_popup, set_show_worker_popup] = useState(false);
    const [new_worker_popup, set_new_worker_popup] = useState(false);
    const [fake, set_fake] = useState(false);
    
    const [workers, set_workers] = useState([]);
    const [workers_original, set_workers_original] = useState([]);

    const [sites, set_sites] = useState([]);
    const [sites_original, set_sites_original] = useState([]);

    const [rols, set_roles] = useState<any>([]);
    
    const [snif_filter, set_snif_filter] = useState<any>([]);
    const [rol_filter, set_rol_filter] = useState<any>([]);

    const [status_filter, set_status_filter] = useState<any>([]);
    const [status_filter_sites, set_status_filter_sites] = useState<any>([]);

    const [doc_date_filter, set_doc_date_filter] = useState<any>([]);

    useEffect(() => {
      get_all_workers();
      get_all_sites();
      get_roles();
    }, []);

    function get_roles() {
      let payload = new FormData();

      axios({
        method: "post",
        url: globalThis.app.current + "/get_roles",
        data: payload,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => {
        if (res.data.recordset.length > 0) {
          set_roles(res.data.recordset);
        }
      });
    }

    function get_all_sites() {
      let payload = new FormData();

      axios({
        method: "post",
        url: globalThis.app.current + "/get_all_sites",
        data: payload,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => {
        if (res.data.recordset.length > 0) {
          set_sites(res.data.recordset);
          set_sites_original(res.data.recordset);
        }
      });
    }

    function get_all_workers() {
      let payload = new FormData();

      axios({
        method: "post",
        url: globalThis.app.current + "/get_all_workers",
        data: payload,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => {
        if (res.data.recordset.length > 0) {
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

      function search_site(val:any){
        debugger
        let w_original:any=sites_original;
        let worker_final:any=[];

        for(let i=0; i<w_original.length; i++){
            if (w_original[i].site_name && w_original[i].site_name.includes(val)){
                worker_final.push(w_original[i])
            }else if (w_original[i].address && w_original[i].address.includes(val)){
                worker_final.push(w_original[i])
            }
        }

        set_sites(worker_final);
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

    function filter_by_status_site(rol:any,checked:any){
       let a:any=sites_original;
       let rol_f=status_filter_sites;
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

        set_status_filter_sites(rol_f);
        if(rol_f.length>0){
            set_sites(final);
        } else{
            set_sites(sites_original);
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
        if(rol_f.length>0){
            set_workers(final);
        } else{
            set_workers(workers_original);
        }
        set_fake(!fake);
    }
  return (
    <>
    <div className='dashboard_main_cont'>

        <RightMenu title="dashboard"></RightMenu>

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
                 <input type="text" placeholder='חפש אתר, עובד, מסמך או נשק…' className='search_input' />   
                 <img src={msg_icon} />
                 <img src={bell_icon} />
            </div> */}
        </div>

        <div className='main_area_cont'>
            <div className='right_part_cont'>
                <div className='right_part_cont_top'>
                    <div className='right_part_cont_top_title'>תמונת מצב</div>

                    <div className='btn_exp_cont'>
                        <div className='select_period'>יומי</div>
                        <div className='export_btn'>ייצוא</div>
                    </div>


                    {!show_p_box_cont_info && !show_p_box_cont_info_2 && !show_p_box_cont_info_3?<div className='p_box_cont'>
                        <div className='p_box' onClick={()=>set_show_p_box_cont_info(true)}>
                            <img src={more_icon} className='more_icon' />
                            <img src={p_1} className='p_icon'/>
                            <div className='p_box_text_cont'>
                                <div className='p_box_title'>82%</div>
                                <div className='p_box_subtitle'>נוכחות</div>
                            </div>
                        
                        </div>

                        <div className='p_box'>
                            <img src={more_icon} className='more_icon'  onClick={()=>set_show_p_box_cont_info_2(true)}/>
                            <img src={p_2} className='p_icon'/>
                            <div className='p_box_text_cont'>
                                <div className='p_box_title'>92%</div>
                                <div className='p_box_subtitle'>נשקים מוקצים</div>
                            </div>
                        </div>

                        <div className='p_box'>

                            <img src={more_icon} className='more_icon'  onClick={()=>set_show_p_box_cont_info_3(true)}/>
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

                    </div>: <></>}

                    {show_p_box_cont_info?<div className='p_box_cont_2'>
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

                        
                    </div>:<></>}


                     {show_p_box_cont_info_2?<div className='p_box_cont_2'>
                        <img src={arrow_r} className='arrow_r' onClick={()=>set_show_p_box_cont_info_2(false)}/>
                        <div className='p_box_cont_2_first'>
                            <img src={p_2} className='p_icon'/>
                            <div className='p_box_text_cont_n'>
                                <div className='p_box_title'>92%</div>
                                <div className='p_box_subtitle'>נשקים בשימוש</div>
                            </div>
                        </div>

                        <div className='p_box_cont_3_sec_n'>
                           
                            <div className='count_p_cont'>
                                <div className='count_p count_p_2'>27</div>
                                <div className='count_p_text'>נשקים בשימוש</div>
                            </div>

                            <div className='count_p_user_cont_main'>
                                <div>
                                    <div className='count_p_user_cont'>
                                        <div>1176589</div>
                                        <div>אצל</div>
                                        <img src={user_m_1} />
                                        <div>יוסי כהן</div>
                                    </div>

                                    <div className='count_p_user_cont'>
                                        <div>1176589</div>
                                        <div>אצל</div>
                                        <img src={user_m_2} />
                                        <div>רועי לוי</div>
                                    </div>

                                    <div className='count_p_user_cont'>
                                        <div>1176589</div>
                                        <div>אצל</div>
                                        <img src={user_m_2} />
                                        <div>ספיר כהן</div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className='p_box_cont_3_sec_n_2'>
                           
                            <div className='count_p_cont'>
                                <div className='count_p count_p_2'>7</div>
                                <div className='count_p_text'>נשקים בכספת</div>
                            </div>

                            <div className='count_p_user_cont_main'>
                                <div>
                                    <div className='count_p_user_cont count_p_user_cont_2'>
                                        <div>1176589</div>
                                        <div>בכספת תל אביב</div>
                                       
                                    </div>

                                    <div className='count_p_user_cont count_p_user_cont_2'>
                                        <div>1176589</div>
                                        <div>בכספת תל אביב</div>
                                       
                                    </div>

                                    <div className='count_p_user_cont count_p_user_cont_2'>
                                        <div>1176589</div>
                                        <div>בכספת תל אביב</div>
                                       
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className='p_box_cont_3_sec_n_3'>
                           
                            <div className='count_p_cont'>
                                <div className='count_p count_p_2'>7</div>
                                <div className='count_p_text'>נשקים בטיפול</div>
                            </div>

                            <div className='count_p_user_cont_main'>
                                <div>
                                    <div className='count_p_user_cont count_p_user_cont_2'>
                                        <div>1176589</div>
                                        <div>נשקייה מרכזית</div>
                                       
                                    </div>

                                    <div className='count_p_user_cont count_p_user_cont_2'>
                                        <div>1176589</div>
                                        <div>נשקייה מרכזית</div>
                                       
                                    </div>

                                    <div className='count_p_user_cont count_p_user_cont_2'>
                                        <div>1176589</div>
                                        <div>נשקייה מרכזית</div>
                                       
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>:<></>}


                    {show_p_box_cont_info_3?<div className='p_box_cont_2'>
                        <img src={arrow_r} className='arrow_r' onClick={()=>set_show_p_box_cont_info_3(false)}/>
                        <div className='p_box_cont_2_first'>
                            <img src={p_3} className='p_icon'/>
                            <div className='p_box_text_cont_n'>
                                <div className='p_box_title'>88%</div>
                                <div className='p_box_subtitle'>מסמכים בתוקף</div>
                            </div>
                        </div>

                        <div className='p_box_cont_3_sec_n'>
                           
                            <div className='count_p_cont'>
                                <div className='count_p count_p_2'>27</div>
                                <div className='count_p_text'>מסמכים לא בתוקף</div>
                            </div>

                            <div className='count_p_user_cont_main'>
                                <div>
                                    <div className='count_p_user_cont_3'>
                                        <div>רישיון ירי גיורא</div>
                                        <div>פג תוקף לפני 3 ימים</div>
                                        <div className='count_p_user_cont_upload_btn'>העלאת מסמך חדש</div>
                                    </div>

                                    <div className='count_p_user_cont_3'>
                                        <div>רישיון ירי גיורא</div>
                                        <div>פג תוקף לפני 3 ימים</div>
                                        <div className='count_p_user_cont_upload_btn'>העלאת מסמך חדש</div>
                                    </div>

                                    <div className='count_p_user_cont_3'>
                                        <div>רישיון ירי גיורא</div>
                                        <div>פג תוקף לפני 3 ימים</div>
                                        <div className='count_p_user_cont_upload_btn'>העלאת מסמך חדש</div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    

                    </div>:<></>}

                </div>

                <div className='right_part_cont_bottom'>
                    <div className='right_part_cont_top_title'>עובדים</div>

                    <div className='btn_exp_cont'>
                        <input type="text" onChange={(e)=>search_worker(e.target.value)}  placeholder='חיפוש עובד לפי שם, תפקיד, סניף…' className='btn_exp_cont_input'/>
                        <div className='select_period' onClick={()=>set_show_filter_options(!show_filter_options)}>סינון

                            <img src={filter} className='filter_icon'/>
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
                        <div className='table_header'>מסט״ב נשק</div>
                        <div className='table_header'>תוקף מסמכים</div>
                    </div>


                    {workers && workers.map((worker:any) => (
                    <div className='table_header_cont' onClick={()=>set_show_worker_popup(worker)}>
                        <div className='table_row table_row_user' >
                            <img src={worker.user_image?globalThis.app.current+'/'+worker.user_image:user_s_1} className='user_s user_s_img' />
                           {worker.name}
                            </div>
                        <div className='table_row'>{worker.role}</div>
                        <div className='table_row'>{worker.snif}</div>
                        <div className='table_row'>1176589</div>
                        <div className='table_row table_row_date'><div className='table_row_date'>{worker.doc_1_date ? worker.doc_1_date.split('T')[0]:""}</div>
                            <img src={u_1_icon} className='user_s' />
                            <img src={u_2_icon} className='user_s' />
                        </div>
                    </div>

                    ))}
{/* 
                    <div className='table_header_cont'>
                        <div className='table_row' onClick={()=>set_show_worker_popup(!show_worker_popup)}>
                            <img src={user_s_2} className='user_s' />
                           נועה ברק
                            </div>
                        <div className='table_row'>קב״ט</div>
                        <div className='table_row'>ירושלים</div>
                        <div className='table_row'>1176589</div>
                        <div className='table_row'>12/2025
                            <img src={u_1_icon} className='user_s' />
                            <img src={u_2_icon} className='user_s' />

                        </div>
                    </div> */}

                </div>

            </div>

            <div className='left_part_cont'>

                <div>
                    <div className='right_part_cont_top_title'>פעולות מהירות</div>


                    <div className='p_box_cont'>
                        <div className='p_box_action' onClick={()=>set_new_worker_popup(true)}>
                            <img src={user_add} className='user_add_icon' />
                            <div className='user_add_title'>הוסף עובד</div>

                            <div className='user_add_text'>הוספת עובד חדש למערכת עם פרטים אישיים, שיוך לסניף והעלאת מסמכים ראשוניים.</div>
                        
                        </div>

                        <div className='p_box_action'>
                            <img src={user_add} className='user_add_icon' />
                            <div className='user_add_title'>הקצה נשק</div>

                            <div className='user_add_text'>הקצאת נשק לעובד כולל בדיקת מסמכים בתוקף וחתימה דיגיטלית ביומן הקצאות.</div>
                        
                        </div>

                        <div className='p_box_action'>
                            <img src={user_add} className='user_add_icon' />
                            <div className='user_add_title'>הפק דו״ח PDF</div>

                            <div className='user_add_text'>הפקת דו״ח נוכחות, נשק, או סיור כקובץ PDF מוכן להדפסה או שליחה.</div>
                        
                        </div>

                    </div>
                </div>


                <div className='places_cont'>
                    <div className='right_part_cont_top_title'>אתרים</div>

                    <div className='btn_exp_cont'>
                        <input type="text" placeholder='חיפוש לפי שם אתר' className='btn_exp_cont_input'  onChange={(e)=>search_site(e.target.value)}  />
                        <div className='select_period' onClick={()=>set_show_filter_options_sites(!show_filter_options_sites)}>סינון
                            <img src={filter} className='filter_icon'/>
                        </div>
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    {show_filter_options_sites? <div className='filter_options_cont'>
                   
                        <div className='filter_options_cont_title'>סטטוס</div>
                        <div className='filter_checkbox_row'>
                        <input type="checkbox"  onClick={(e:any)=>filter_by_status_site('פעיל', e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>פעיל</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox"  onClick={(e:any)=>filter_by_status_site('לא פעיל', e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>לא פעיל</div>
                        </div>

                    </div>:<></>}

                    <div className='place_box_cont'>

                        {sites && sites.map((site:any) => (
                        <div className='place_box'>
                            <img src={place_1} className='place_img'/>
                            <div className='place_box_title'>{site.site_name}</div>

                            <div className='place_box_users_cont'>
                                <div className='place_box_user_cont'>
                                    <img src={user_m_1} />
                                    <div>
                                        <div className='place_box_user_cont_name'>{site.contact_person}</div>
                                        <div className='place_box_user_cont_role'>קב״ט</div>
                                    </div>
                                </div>

                                {/* <div className='place_box_user_cont'>
                                    <img src={user_m_2} />
                                    <div>
                                        <div className='place_box_user_cont_name'>דניאל שמש</div>
                                        <div className='place_box_user_cont_role'>ס. קב״ט</div>
                                    </div>
                                </div> */}

                            </div>

                            <div className='neshek_cont'>
                                <div className='neshek_cont_r'>
                                    <img src={n_1} />
                                    <div>4 נשקים מוקצים</div>
                                </div>

                                 <div className='neshek_cont_r'> 
                                    <img src={n_2} />
                                    <div>36 מאבטחים</div>
                                </div>


                                 <div className='neshek_cont_r'>
                                    <img src={n_2} />
                                    <div>36 מאבטחים</div>
                                </div>



                            </div>

                            <div className='place_details_btn' onClick={()=>navigate("/Site_page",{ state: { site: site } })}>
                                פרטי אתר
                            </div>

                        </div>
                        ))}

{/* 
                         <div className='place_box'>
                            <img src={place_2} className='place_img'/>
                            <div className='place_box_title'>קניון עזריאלי</div>

                            <div className='place_box_users_cont'>
                                <div className='place_box_user_cont'>
                                    <img src={user_m_1} />
                                    <div>
                                        <div className='place_box_user_cont_name'>יוסי כהן</div>
                                        <div className='place_box_user_cont_role'>קב״ט</div>
                                    </div>
                                </div>

                                <div className='place_box_user_cont'>
                                    <img src={user_m_2} />
                                    <div>
                                        <div className='place_box_user_cont_name'>דניאל שמש</div>
                                        <div className='place_box_user_cont_role'>ס. קב״ט</div>
                                    </div>
                                </div>

                            </div>

                            <div className='neshek_cont'>
                                <div className='neshek_cont_r'>
                                    <img src={n_1} />
                                    <div>4 נשקים מוקצים</div>
                                </div>

                                 <div className='neshek_cont_r'> 
                                    <img src={n_2} />
                                    <div>36 מאבטחים</div>
                                </div>


                                 <div className='neshek_cont_r'>
                                    <img src={n_2} />
                                    <div>36 מאבטחים</div>
                                </div>



                            </div>

                            <div className='place_details_btn'>
                                פרטי אתר
                            </div>

                        </div>

                        <div className='place_box'>
                            <img src={place_3} className='place_img'/>
                            <div className='place_box_title'>קניון עזריאלי</div>

                            <div className='place_box_users_cont'>
                                <div className='place_box_user_cont'>
                                    <img src={user_m_1} />
                                    <div>
                                        <div className='place_box_user_cont_name'>יוסי כהן</div>
                                        <div className='place_box_user_cont_role'>קב״ט</div>
                                    </div>
                                </div>

                                <div className='place_box_user_cont'>
                                    <img src={user_m_2} />
                                    <div>
                                        <div className='place_box_user_cont_name'>דניאל שמש</div>
                                        <div className='place_box_user_cont_role'>ס. קב״ט</div>
                                    </div>
                                </div>

                            </div>

                            <div className='neshek_cont'>
                                <div className='neshek_cont_r'>
                                    <img src={n_1} />
                                    <div>4 נשקים מוקצים</div>
                                </div>

                                 <div className='neshek_cont_r'> 
                                    <img src={n_2} />
                                    <div>36 מאבטחים</div>
                                </div>


                                 <div className='neshek_cont_r'>
                                    <img src={n_2} />
                                    <div>36 מאבטחים</div>
                                </div>



                            </div>

                            <div className='place_details_btn'>
                                פרטי אתר
                            </div>

                        </div>

                        <div className='place_box'>
                            <img src={place_4} className='place_img'/>
                            <div className='place_box_title'>קניון עזריאלי</div>

                            <div className='place_box_users_cont'>
                                <div className='place_box_user_cont'>
                                    <img src={user_m_1} />
                                    <div>
                                        <div className='place_box_user_cont_name'>יוסי כהן</div>
                                        <div className='place_box_user_cont_role'>קב״ט</div>
                                    </div>
                                </div>

                                <div className='place_box_user_cont'>
                                    <img src={user_m_2} />
                                    <div>
                                        <div className='place_box_user_cont_name'>דניאל שמש</div>
                                        <div className='place_box_user_cont_role'>ס. קב״ט</div>
                                    </div>
                                </div>

                            </div>

                            <div className='neshek_cont'>
                                <div className='neshek_cont_r'>
                                    <img src={n_1} />
                                    <div>4 נשקים מוקצים</div>
                                </div>

                                 <div className='neshek_cont_r'> 
                                    <img src={n_2} />
                                    <div>36 מאבטחים</div>
                                </div>


                                 <div className='neshek_cont_r'>
                                    <img src={n_2} />
                                    <div>36 מאבטחים</div>
                                </div>



                            </div>

                            <div className='place_details_btn'>
                                פרטי אתר
                            </div>

                        </div> */}


                    </div>

                </div>

            </div>


            <div className='left_part_third_cont'>
                <div className='right_part_cont_top_title right_part_cont_top_title_last'>התראות אחרונות</div>

                    <div className='btn_exp_cont'>
                   
                        <div className='export_btn'>ייצוא</div>
                    </div>


                    <div className='last_box_alert'>
                        <img src={l_1} className='last_box_alert_icon'/>
                        <div className='last_box_alert_time'>לפני 2 דק׳</div>

                        <div>
                            <div className='last_box_alert_title'>
                                אתר תחנת רכבת
                            </div>

                            <div className='last_box_alert_text'>
                            מאבטח איחר לנקודת QR
                            </div>
                        </div>

                    </div>


                     <div className='last_box_alert'>
                        <img src={l_2} className='last_box_alert_icon'/>
                        <div className='last_box_alert_time'>לפני 2 דק׳</div>

                        <div>
                            <div className='last_box_alert_title'>
                                אתר תחנת רכבת
                            </div>

                            <div className='last_box_alert_text'>
                            מאבטח איחר לנקודת QR
                            </div>
                        </div>

                    </div>



                     <div className='last_box_alert'>
                        <img src={l_3} className='last_box_alert_icon'/>
                        <div className='last_box_alert_time'>לפני 2 דק׳</div>

                        <div>
                            <div className='last_box_alert_title'>
                               אתר קניון עזריאלי
                            </div>

                            <div className='last_box_alert_text'>
                           בדיקת נשק קרובה
                            </div>
                        </div>

                    </div>

                    <div className='last_box_alert'>
                        <img src={l_4} className='last_box_alert_icon'/>
                        <div className='last_box_alert_time'>לפני 2 דק׳</div>

                        <div>
                            <div className='last_box_alert_title'>
                              אתר הבורסה
                            </div>

                            <div className='last_box_alert_text'>
                           חוסר אחמ״ש במשמרת
                            </div>
                        </div>

                    </div>



                    <div className='last_box_alert'>
                        <img src={l_1} className='last_box_alert_icon'/>
                        <div className='last_box_alert_time'>לפני 2 דק׳</div>

                        <div>
                            <div className='last_box_alert_title'>
                                אתר תחנת רכבת
                            </div>

                            <div className='last_box_alert_text'>
                            מאבטח איחר לנקודת QR
                            </div>
                        </div>

                    </div>


                     <div className='last_box_alert'>
                        <img src={l_2} className='last_box_alert_icon'/>
                        <div className='last_box_alert_time'>לפני 2 דק׳</div>

                        <div>
                            <div className='last_box_alert_title'>
                                אתר תחנת רכבת
                            </div>

                            <div className='last_box_alert_text'>
                            מאבטח איחר לנקודת QR
                            </div>
                        </div>

                    </div>



                     <div className='last_box_alert'>
                        <img src={l_3} className='last_box_alert_icon'/>
                        <div className='last_box_alert_time'>לפני 2 דק׳</div>

                        <div>
                            <div className='last_box_alert_title'>
                               אתר קניון עזריאלי
                            </div>

                            <div className='last_box_alert_text'>
                           בדיקת נשק קרובה
                            </div>
                        </div>

                    </div>

                    <div className='last_box_alert'>
                        <img src={l_4} className='last_box_alert_icon'/>
                        <div className='last_box_alert_time'>לפני 2 דק׳</div>

                        <div>
                            <div className='last_box_alert_title'>
                              אתר הבורסה
                            </div>

                            <div className='last_box_alert_text'>
                           חוסר אחמ״ש במשמרת
                            </div>
                        </div>

                    </div>




                    <div className='last_box_alert'>
                        <img src={l_1} className='last_box_alert_icon'/>
                        <div className='last_box_alert_time'>לפני 2 דק׳</div>

                        <div>
                            <div className='last_box_alert_title'>
                                אתר תחנת רכבת
                            </div>

                            <div className='last_box_alert_text'>
                            מאבטח איחר לנקודת QR
                            </div>
                        </div>

                    </div>


                     <div className='last_box_alert'>
                        <img src={l_2} className='last_box_alert_icon'/>
                        <div className='last_box_alert_time'>לפני 2 דק׳</div>

                        <div>
                            <div className='last_box_alert_title'>
                                אתר תחנת רכבת
                            </div>

                            <div className='last_box_alert_text'>
                            מאבטח איחר לנקודת QR
                            </div>
                        </div>

                    </div>



                     <div className='last_box_alert'>
                        <img src={l_3} className='last_box_alert_icon'/>
                        <div className='last_box_alert_time'>לפני 2 דק׳</div>

                        <div>
                            <div className='last_box_alert_title'>
                               אתר קניון עזריאלי
                            </div>

                            <div className='last_box_alert_text'>
                           בדיקת נשק קרובה
                            </div>
                        </div>

                    </div>

                    <div className='last_box_alert'>
                        <img src={l_4} className='last_box_alert_icon'/>
                        <div className='last_box_alert_time'>לפני 2 דק׳</div>

                        <div>
                            <div className='last_box_alert_title'>
                              אתר הבורסה
                            </div>

                            <div className='last_box_alert_text'>
                           חוסר אחמ״ש במשמרת
                            </div>
                        </div>

                    </div>


                    <div className='last_box_alert'>
                        <img src={l_1} className='last_box_alert_icon'/>
                        <div className='last_box_alert_time'>לפני 2 דק׳</div>

                        <div>
                            <div className='last_box_alert_title'>
                                אתר תחנת רכבת
                            </div>

                            <div className='last_box_alert_text'>
                            מאבטח איחר לנקודת QR
                            </div>
                        </div>

                    </div>


            </div>
        </div>

    </div>

    {show_worker_popup?<Worker_popup worker={show_worker_popup} set_show_worker_popup={set_show_worker_popup}></Worker_popup>:<></>}
    {new_worker_popup?<New_worker set_new_worker_popup={set_new_worker_popup} get_all_workers={get_all_workers}></New_worker>:<></>}                        

    </>
  )
}

export default Dashboard
