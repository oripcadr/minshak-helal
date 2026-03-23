import RightMenu from "./RightMenu"

import msg_icon from './assets/msg_icon.png'
import bell_icon from './assets/bell_icon.png'
import filter from './assets/filter.png'
import add_doc from './assets/add_doc.png'
import more_icon from './assets/more_icon.png'
import p_1 from './assets/p_5.png'
import p_2 from './assets/p_6.png'
import p_3 from './assets/p_7.png'
import p_4 from './assets/p_8.png'
import more_w from './assets/more_w.png'
import user_s_2 from './assets/user_s_2.png'
import site_s from './assets/site_s.png'
import r_dot from './assets/r_dot.png'
import y_dot from './assets/y_dot.png'
import g_dot from './assets/g_dot.png'

import './Supervision.css'
import { useEffect, useState } from "react"
import Popup_new_supervision from "./Popup_new_supervision"
import Popup_sup_report from "./Popup_sup_report"
import axios from "axios"

function Supervision() {

    const [show_new_supervision, set_show_new_supervision] = useState(false);
    const [show_sup_report, set_show_sup_report] = useState(false);
    const [criticism, set_criticism] = useState<any>([]);
    const [criticism_original, set_criticism_original] = useState<any>([]);
    
    const [selected_period_filter, set_selected_period_filter] = useState(1);
    const [fake, set_fake] = useState(false);
    const [show_filter, set_show_filter] = useState(false);
    const [rol_filter, set_rol_filter] = useState<any>([]);


    const [sites, set_sites] = useState<any>([]);

    
    const [snif_filter, set_snif_filter] = useState<any>([]);

    useEffect(() => {
        get_all_criticism();
        get_all_sites();
    }, []);

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

    function get_all_criticism(){

      let payload = new FormData();
    
      axios({
        method: 'post',
        url: globalThis.app.current+'/get_all_criticism',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(res => {

        if (res.data.recordset.length>0){
           set_criticism(res.data.recordset);
           set_criticism_original(res.data.recordset);
        } 
          
      });

    }

    
    function filter_data(type:any){
        debugger;
        let t_m:any=criticism_original;
        let temp=[];
        if(type==1){
            set_criticism(t_m);
        }
        if (type==2){
            let week_start;
            const today = new Date();
            const day = today.getDay(); 
            const diff = today.getDate() - day; 
           
            week_start= new Date(today.setDate(diff));
            week_start.setHours(0, 0, 0, 0);

            const saturday = new Date(today);
            saturday.setDate(today.getDate() + (6 - day));
            saturday.setHours(0, 0, 0, 0);
            let end_start=saturday;

            for(let i=0; i<t_m.length; i++){
                let t_date=new Date(t_m[i].date);
                if (t_date>=week_start && t_date<=end_start){
                    temp.push(t_m[i]);
                }
            }
           
            set_criticism(temp);
        }

        if (type==3){
            let week_start;
            const today = new Date();
            const month = today.getMonth()+1; 
          
            week_start= new Date(today.getFullYear()+'-'+month+'-'+'01');
            week_start.setHours(0, 0, 0, 0);
            
            let end_start= new Date(today.getFullYear()+'-'+month+'-'+'31');
            end_start.setHours(0, 0, 0, 0);

            for(let i=0; i<t_m.length; i++){
                let t_date=new Date(t_m[i].date);
                if (t_date>=week_start && t_date<=end_start){
                    temp.push(t_m[i]);
                }
            }
           
            set_criticism(temp);
        }

        if (type==4){
            let week_start;
            const today = new Date();
          
            week_start= new Date(today.getFullYear()+'-'+'01'+'-'+'01');
            week_start.setHours(0, 0, 0, 0);
            
            let end_start= new Date(today.getFullYear()+'-'+'12'+'-'+'31');
            end_start.setHours(0, 0, 0, 0);

            for(let i=0; i<t_m.length; i++){
                let t_date=new Date(t_m[i].date);
                if (t_date>=week_start && t_date<=end_start){
                    temp.push(t_m[i]);
                }
            }
           
            set_criticism(temp);
        }


        set_fake(!fake);
    }


    function filter_by_type(rol:any,checked:any){
       let a:any=criticism_original;
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
                if(a[i].score>rol_f[j]){
                    final.push(a[i]);
                } 
            }
        }

        set_rol_filter(rol_f);
        set_criticism(final);
        set_fake(!fake);
    }

    function filter_by_snif(snif:any,checked:any){
        let a:any=criticism_original;
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
                if(a[i].place.includes(rol_f[j])){
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
        set_criticism(final);
        set_fake(!fake);
    }

    
    function find_sup(val:any){
        let a:any=criticism_original;
        let final:any =[];

        for(let i=0; i<a.length; i++){
            if(a[i].worker.includes(val)){
                final.push(a[i]);
            } else if(a[i].place.includes(val)){
                final.push(a[i]);
            }

        }

        set_criticism(final);
        set_fake(!fake);
    
    }

    return (
    <>
        <div className="dashboard_main_cont">
            <RightMenu title="supervision"></RightMenu>

            <div className='top_header'>
{/* 
                <div className='user_cont'>
                    <img src={user} />
                    <div className='user_title'>
                        <div className='user_name'>ישראל ישראלי</div>
                        <div className='user_role'>מנכ"ל</div>
                    </div>
                </div> */}
{/* 
                <div className='search_cont'>
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


                            <div className='p_box_action_neshek_cont'>
                                <div className='add_supervision_box'  onClick={()=>set_show_new_supervision(true)}>
                                    <img src={add_doc} className='add_doc' />
                                    <div className='user_add_title user_add_title_add_doc'>הוספת ביקורת חדשה</div>
                                </div>

                            </div>

                        </div>
                        <div className='right_part_cont_top'>
                            <div className='right_part_cont_top_title'>תמונת מצב</div>

                            <div className='btn_exp_cont'>
                                <div className='select_period'>יומי</div>
                                <div className='export_btn'>ייצוא</div>
                            </div>


                            <div className='p_box_cont'>
                                <div className='p_box'>
                                    <img src={more_icon} className='more_icon' />
                                    <img src={p_1} className='p_icon'/>
                                    <div className='p_box_text_cont'>
                                        <div className='p_box_title'>12</div>
                                        <div className='p_box_subtitle'>מפקחים פעילים</div>
                                    </div>
                                
                                </div>

                                <div className='p_box'>
                                    <img src={more_icon} className='more_icon' />
                                    <img src={p_2} className='p_icon'/>
                                    <div className='p_box_text_cont'>
                                        <div className='p_box_title'>94%</div>
                                        <div className='p_box_subtitle'>דו״חות בזמן</div>
                                    </div>
                                </div>

                                <div className='p_box'>

                                    <img src={more_icon} className='more_icon' />
                                    <img src={p_3} className='p_icon'/>
                                    <div className='p_box_text_cont'>
                                        <div className='p_box_title'>8</div>
                                        <div className='p_box_subtitle'>ליקויים חוזרים</div>
                                    </div>

                                </div>

                                <div className='p_box'>
                                    <img src={more_icon} className='more_icon' />
                                    <img src={p_4} className='p_icon'/>
                                    <div className='p_box_text_cont'>
                                        <div className='p_box_title'>5</div>
                                        <div className='p_box_subtitle'>ביקורות היום</div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className='right_part_cont_bottom right_part_cont_bottom_p'>
                    <div className='right_part_cont_top_title'>ביקורות</div>

                    <div className='btn_exp_cont'>
                        <input type="text" placeholder='חיפוש לפי מפקח, אתר ' className='btn_exp_cont_input' onChange={(e)=>find_sup(e.target.value)}/>
                        <div className='select_period' onClick={()=>set_show_filter(!show_filter)}>סינון

                            <img src={filter} className='filter_icon' />
                        </div>
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    {show_filter? <div className='filter_options_cont'>
                        <div className='filter_options_cont_title'>ציון</div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox"  onClick={(e:any)=>filter_by_type('20', e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>מעל 20</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" onClick={(e:any)=>filter_by_type('50', e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>מעל 50</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" onClick={(e:any)=>filter_by_type('80', e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>מעל 80</div>
                        </div>
                

                    <div className='filter_options_cont_title'>סניף</div>
                         {sites && sites.map((site:any) => (
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" onClick={(e:any)=>filter_by_snif(site.site_name, e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>{site.site_name}</div>
                        </div>
                        ))}

                    </div>:<></>}

                    <div className='top_btns_cont'>
                        <div className={'top_btn ' + (selected_period_filter==1?"top_btn_selected":"")} onClick={()=>{set_selected_period_filter(1);filter_data(1)}}>כל הזמנים</div>

                        <div className={'top_btn ' + (selected_period_filter==2?"top_btn_selected":"")} onClick={()=>{set_selected_period_filter(2); filter_data(2)}}>השבוע</div>
                        <div className={'top_btn ' + (selected_period_filter==3?"top_btn_selected":"")} onClick={()=>{set_selected_period_filter(3); filter_data(3)}}>החודש</div>
                        <div className={'top_btn ' + (selected_period_filter==4?"top_btn_selected":"")} onClick={()=>{set_selected_period_filter(4); filter_data(4)}}>השנה</div>


                    </div>

                    <div className='table_header_cont'>
                        <div className='table_header'>תאריך</div>
                        <div className='table_header'>מפקח</div>
                        <div className='table_header'>סוג ביקורת</div>
                        <div className='table_header'>אתר/עובד</div>

                        <div className='table_header'>ציון</div>
                        <div className='table_header'>סטטוס</div>
                        <div className='table_header'>בדיקה הבאה</div>
                    </div>

                    {criticism && criticism.map((critic:any) => (
                    
                    <div className='table_header_cont' onClick={()=>set_show_sup_report(critic)}>
                    
                        <div  className='table_row'>
                         {critic.date.split('T')[0]}
                        </div>
                        <div  className='table_row'><img src={user_s_2} className='user_s' />
                          {critic.worker}
                        </div>

                        <div className='table_row' >{critic.type}</div>
                      
                   
                            <div className='table_row'>
                                <img src={site_s} className='user_s' />
                                {critic.place}</div>

                            <div className='table_row'>
                                <div className="degree">
                                {critic.score}
                                </div>    
                            </div>
                            <div className='table_row'>
                                <div className="status">
                                מצויין
                                </div>
                            </div>

                            <div className='table_row'>12/12/2025</div>
                            
                            <img src={more_w} className='more_w'/>
                    </div>
                    ))}

                       {/* <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          01/11/2025
                        </div>
                        <div  className='table_row'><img src={user_s_2} className='user_s' />
                          דניאל שמש
                        </div>

                        <div className='table_row' >ביקורת אתר</div>
                      
                   
                            <div className='table_row'>
                                <img src={site_s} className='user_s' />
                                קניון עזריאלי</div>

                            <div className='table_row'>
                                <div className="degree">
                                95
                                </div>    
                            </div>
                            <div className='table_row'>
                                <div className="status">
                                מצויין
                                </div>
                            </div>

                            <div className='table_row'>12/12/2025</div>
                            
                            <img src={more_w} className='more_w'/>
                    </div>

                       <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          01/11/2025
                        </div>
                        <div  className='table_row'><img src={user_s_2} className='user_s' />
                          דניאל שמש
                        </div>

                        <div className='table_row' >ביקורת אתר</div>
                      
                   
                            <div className='table_row'>
                                <img src={site_s} className='user_s' />
                                קניון עזריאלי</div>

                            <div className='table_row'>
                                <div className="degree">
                                95
                                </div>    
                            </div>
                            <div className='table_row'>
                                <div className="status">
                                מצויין
                                </div>
                            </div>

                            <div className='table_row'>12/12/2025</div>
                            
                            <img src={more_w} className='more_w'/>
                    </div>

                       <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          01/11/2025
                        </div>
                        <div  className='table_row'><img src={user_s_2} className='user_s' />
                          דניאל שמש
                        </div>

                        <div className='table_row' >ביקורת אתר</div>
                      
                   
                            <div className='table_row'>
                                <img src={site_s} className='user_s' />
                                קניון עזריאלי</div>

                            <div className='table_row'>
                                <div className="degree">
                                95
                                </div>    
                            </div>
                            <div className='table_row'>
                                <div className="status">
                                מצויין
                                </div>
                            </div>

                            <div className='table_row'>12/12/2025</div>
                            
                            <img src={more_w} className='more_w'/>
                    </div>

                       <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          01/11/2025
                        </div>
                        <div  className='table_row'><img src={user_s_2} className='user_s' />
                          דניאל שמש
                        </div>

                        <div className='table_row' >ביקורת אתר</div>
                      
                   
                            <div className='table_row'>
                                <img src={site_s} className='user_s' />
                                קניון עזריאלי</div>

                            <div className='table_row'>
                                <div className="degree">
                                95
                                </div>    
                            </div>
                            <div className='table_row'>
                                <div className="status">
                                מצויין
                                </div>
                            </div>

                            <div className='table_row'>12/12/2025</div>
                            
                            <img src={more_w} className='more_w'/>
                    </div>

                       <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          01/11/2025
                        </div>
                        <div  className='table_row'><img src={user_s_2} className='user_s' />
                          דניאל שמש
                        </div>

                        <div className='table_row' >ביקורת אתר</div>
                      
                   
                            <div className='table_row'>
                                <img src={site_s} className='user_s' />
                                קניון עזריאלי</div>

                            <div className='table_row'>
                                <div className="degree">
                                95
                                </div>    
                            </div>
                            <div className='table_row'>
                                <div className="status">
                                מצויין
                                </div>
                            </div>

                            <div className='table_row'>12/12/2025</div>
                            
                            <img src={more_w} className='more_w'/>
                    </div>

                    <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          01/11/2025
                        </div>
                        <div  className='table_row'><img src={user_s_2} className='user_s' />
                          דניאל שמש
                        </div>

                        <div className='table_row' >ביקורת אתר</div>
                      
                   
                            <div className='table_row'>
                                <img src={site_s} className='user_s' />
                                קניון עזריאלי</div>

                            <div className='table_row'>
                                <div className="degree">
                                95
                                </div>    
                            </div>
                            <div className='table_row'>
                                <div className="status">
                                מצויין
                                </div>
                            </div>

                            <div className='table_row'>12/12/2025</div>
                            
                            <img src={more_w} className='more_w'/>
                    </div> */}

                </div>

                </div>

       
                   
                <div className='left_part_third_cont left_part_third_cont_neshek left_part_third_cont_sup'>
                    <div className='right_part_cont_top_title right_part_cont_top_title_last '>מעקב ליקויים</div>

                    <div className='btn_exp_cont'>
                        <div className='select_period'>סינון
                            <img src={filter} className='filter_icon'/>
                        </div>
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    <div className='top_btns_cont'>
                        <div className={'top_btn top_btn_selected'} >כל הליקויים</div>

                        <div className={'top_btn '} >דחוף</div>

                        <div className={'top_btn '} >לא דחוף</div>

                        <div className={'top_btn '} >תוקן</div>
                
                    </div>

                    <div className="def_cont">
                        <div className="def_cont_top">
                            <img src={site_s} />
                            <div>קניון עזריאלי</div>

                            <img src={r_dot} />

                            <div>דחוף</div>

                            <div className="def_cont_top_date">29/10/2025</div>
                        </div>

                        <div className="def_cont_text">תיקון ציוד אבטחה בחדר מאבטחים</div>

                        <div className="def_cont_btn_main">
                            <div className="def_cont_btn">סגור ליקוי</div>
                            <div className="def_cont_btn"> צפה בדו"ח</div>
                        </div>

                    </div>

                            <div className="def_cont">
                        <div className="def_cont_top">
                            <img src={site_s} />
                            <div>קניון עזריאלי</div>

                            <img src={y_dot} />

                            <div>לא דחוף</div>

                            <div className="def_cont_top_date">29/10/2025</div>
                        </div>

                        <div className="def_cont_text">תיקון ציוד אבטחה בחדר מאבטחים</div>

                        <div className="def_cont_btn_main">
                            <div className="def_cont_btn">סגור ליקוי</div>
                            <div className="def_cont_btn"> צפה בדו"ח</div>
                        </div>
                        
                    </div>


                    <div className="def_cont">
                        <div className="def_cont_top">
                            <img src={site_s} />
                            <div>קניון עזריאלי</div>

                            <img src={g_dot} />

                            <div>תוקן</div>

                            <div className="def_cont_top_date">29/10/2025</div>
                        </div>

                        <div className="def_cont_text">תיקון ציוד אבטחה בחדר מאבטחים</div>

                        <div className="def_cont_btn_main">
                            <div className="def_cont_btn def_cont_btn_closed">נסגר</div>
                            <div className="def_cont_btn"> צפה בדו"ח</div>
                        </div>
                        
                    </div>


                    <div className="def_cont">
                        <div className="def_cont_top">
                            <img src={site_s} />
                            <div>קניון עזריאלי</div>

                            <img src={r_dot} />

                            <div>דחוף</div>

                            <div className="def_cont_top_date">29/10/2025</div>
                        </div>

                        <div className="def_cont_text">תיקון ציוד אבטחה בחדר מאבטחים</div>

                        <div className="def_cont_btn_main">
                            <div className="def_cont_btn">סגור ליקוי</div>
                            <div className="def_cont_btn"> צפה בדו"ח</div>
                        </div>
                        
                    </div>


                    <div className="def_cont">
                        <div className="def_cont_top">
                            <img src={site_s} />
                            <div>קניון עזריאלי</div>

                            <img src={g_dot} />

                            <div>תוקן</div>

                            <div className="def_cont_top_date">29/10/2025</div>
                        </div>

                        <div className="def_cont_text">תיקון ציוד אבטחה בחדר מאבטחים</div>

                        <div className="def_cont_btn_main">
                            <div className="def_cont_btn def_cont_btn_closed">נסגר</div>
                            <div className="def_cont_btn"> צפה בדו"ח</div>
                        </div>
                        
                    </div>


                    <div className="def_cont">
                        <div className="def_cont_top">
                            <img src={site_s} />
                            <div>קניון עזריאלי</div>

                            <img src={g_dot} />

                            <div>תוקן</div>

                            <div className="def_cont_top_date">29/10/2025</div>
                        </div>

                        <div className="def_cont_text">תיקון ציוד אבטחה בחדר מאבטחים</div>

                        <div className="def_cont_btn_main">
                            <div className="def_cont_btn def_cont_btn_closed">נסגר</div>
                            <div className="def_cont_btn"> צפה בדו"ח</div>
                        </div>
                        
                    </div>


                </div>    
                
            </div>


        
        </div>

        {show_new_supervision?<Popup_new_supervision get_all_criticism={get_all_criticism} set_show_new_supervision={set_show_new_supervision}></Popup_new_supervision>:<></>}

        {show_sup_report?<Popup_sup_report set_show_sup_report={set_show_sup_report} show_sup_report={show_sup_report}></Popup_sup_report>:<></>}

    </>
  )
}

export default Supervision
