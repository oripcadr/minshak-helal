
import './Certificate_authorization.css'
import close from './assets/close.png'
import comp_img from './assets/comp_img.png'
import cert_1 from './assets/cert_1.png'
import more_icon from './assets/more_icon.png'
import p_details_1 from './assets/p_details_1.png'
import { useEffect, useState } from 'react'
import upload_w from './assets/upload_w.png'
import arrow_up from './assets/arrow_up.png' 
import axios from 'axios'

function Certificate_authorization(props:any) {

    const [show_update_popup, set_show_update_popup] = useState<any>(false);
    const [cert_data, set_cert_data] = useState<any>([]);
    const [fake, set_fake] = useState<any>(false);
    
    const [show_snif, set_show_snif] = useState<any>(false);
    const [snif, set_snif] = useState([]);
    const [sites, set_sites] = useState<any>([]);
    const [workers, set_workers] = useState<any>([]);
    const [workers_to_find, set_workers_to_find] = useState<any>([]);

    const [err_msg, set_err_msg] = useState<any>([]);


    useEffect(() => {
      get_all_sites();
      get_all_workers();
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
          // set_sites_original(res.data.recordset);
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
          // set_sites_original(res.data.recordset);
        }
      })

    }

    function find_worker_func(val:any){
        let w_to_find:any=[];

        for(let i=0; i<workers.length; i++){
            if (workers[i].name.includes(val)){
                w_to_find.push(workers[i]);
            }

        }

        set_workers_to_find(w_to_find);
        set_fake(!fake);

    }


    function set_cert_data_func(val:any, type:any){
        let cert_data_t:any=cert_data;
        if(type=='worker_name'){
            cert_data_t['worker_name']=val;
        }

        if(type=='t_z'){
            cert_data_t['t_z']=val;
        }

        if(type=='area'){
            cert_data_t['area']=val;
        }

        if(type=='organization_mun'){
            cert_data_t['organization_mun']=val;
        }

        if(type=='cert_date'){
            cert_data_t['cert_date']=val;
        }
       
        debugger;
        if(type=='organization_date'){
            cert_data_t['organization_date']=val;
        }

        set_cert_data(cert_data_t);
        props.set_cert_data(cert_data_t);
        set_fake(!fake);
    }
    

    function set_selected_worker_data(worker:any){
        
        let cert_data_t:any=cert_data;
        
        cert_data_t['worker_name']=worker.name;
        cert_data_t['t_z']=worker.t_z;

        cert_data_t['area']=worker.address;

        cert_data_t['snif']=worker.snif;

        if(worker.snif){
            set_snif(worker.snif.split('|'));
        } else {
            set_snif([]);
        }
       
        set_cert_data(cert_data_t);
        props.set_cert_data(cert_data_t);

      
        set_workers_to_find([]);
        set_fake(!fake);
    }
    
    function add_selected_snif_func(val:any){
      let snif_t:any=snif;
      snif_t.push(val);

        let cert_data_t:any=cert_data;
        cert_data_t['snif']=snif_t.join('|');

        set_cert_data(cert_data_t);
        props.set_cert_data(cert_data_t);

      set_snif(snif_t);
      set_fake(!fake);
    }

    function remove_selected_snif_func(val:any){
        let snif_t:any=snif;
        let snif_n:any=[];
        for(let i=0;i<snif_t.length;i++){
          if(snif_t[i]!=val){
            snif_n.push(snif_t[i]);
          }
        }

        
        let cert_data_t:any=cert_data;
        cert_data_t['snif']=snif_n.join('|');
        
        set_cert_data(cert_data_t);
        props.set_cert_data(cert_data_t);

        
        set_snif(snif_n);
        set_fake(!fake);
    }

    function check_selected_snif_func(val:any){
        let snif_t:any=snif;
    
        for(let i=0;i<snif_t.length;i++){
          if(snif_t[i]==val){
            return true;
          }
        }
        
        return false;
    }

    function next_page(){

       if (cert_data['worker_name'] && cert_data['t_z'] && cert_data['t_z'] &&  cert_data['area'] 
        && cert_data['organization_mun'] && cert_data['cert_date'] && cert_data['organization_date'] && cert_data['snif']){
        props.set_show_certificate_of_authorization_1(true);
        props.set_show_certificate_of_authorization(false);
       } else {
        set_err_msg('נא למלא את כל השדות');
       }
    }

  return (
    <div className='cert_cont_main'>
        <div className='cert_cont_main_in'>
            <img src={close} onClick={()=>props.set_show_certificate_of_authorization(false)} className='close_icon'/>
            <div className='cert_header'>
                <img src={comp_img} className=''/>    
                <div className='user_b_text_cont'>
                    <div className='user_b_text_main_r'>הפקת תעודת הרשאה לנשק</div>
                    <div className='user_b_text_submain'>
                    לנשיאת כלי ירייה — ארגון שמירה לפי סעיף 10ג' לחוק כלי הירייה, תש"ט - 1949
                    
                    </div>
                </div>    

            </div>

            <img src={cert_1} className='cert_1'/>

            <div className='cert_info_cont'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>בחירת מאבטח</div>

                <div className='cert_info_type_cont_main_row'>
                    <div className=' cert_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title tachmoshet_info_type_title_t'>שם מלא:</div>   
                        <input type="text" className='tachmoshet_info_type_cont cert_info_type_row_date' placeholder='חיפוש עובד' value={cert_data.worker_name} onChange={(e)=>{set_cert_data_func(e.target.value,"worker_name"); find_worker_func(e.target.value)}}/>
                    </div>

                    {workers_to_find.length>0?<div className='workers_to_find_cont'>
                        {workers_to_find && workers_to_find.map((w_wo_find:any) => (
                            <div className='workers_to_find_cont_in' onClick={()=>set_selected_worker_data(w_wo_find)}>
                                {w_wo_find.name}
                            </div>
                        ))}
                    </div>:<></>}

                    <div className=' cert_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title tachmoshet_info_type_title_t'>מספר זהות:</div>   
                        <input type="text" className='tachmoshet_info_type_cont cert_info_type_row_date' placeholder='מספר זהות' value={cert_data.t_z} onChange={(e)=>set_cert_data_func(e.target.value,"t_z")}/>
                    </div>
                </div>

                <div className='cert_info_type_cont_main_row'>
                    <div className=' cert_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title tachmoshet_info_type_title_t'>אזור:</div>   
                        <input type="text" className='tachmoshet_info_type_cont cert_info_type_row_date' placeholder='אזור' value={cert_data.area} onChange={(e)=>set_cert_data_func(e.target.value,"area")}/>
                    </div>

                    <div className=' cert_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title tachmoshet_info_type_title_t'>תוקף רישיון:</div>   
                        <input type="date" className='tachmoshet_info_type_cont cert_info_type_row_date white-calendar' placeholder='תוקף הרשאה' value={cert_data.cert_date} onChange={(e)=>set_cert_data_func(e.target.value,"cert_date")} />
                    </div>
                </div>

                <div className='cert_info_type_cont_main_row'>
                    <div className=' cert_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title tachmoshet_info_type_title_t'>מספר רישיון ארגוני</div>
                        <input type="text" className='tachmoshet_info_type_cont cert_info_type_row_date ' placeholder='' value={cert_data.organization_mun} onChange={(e)=>set_cert_data_func(e.target.value,"organization_mun")}/>
                    </div>

                    <div className=' cert_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title tachmoshet_info_type_title_t'>תוקף רישיון ארגוני:</div>   
                        <input type="date" className='tachmoshet_info_type_cont cert_info_type_row_date white-calendar' placeholder=' ' value={cert_data.organization_date} onChange={(e)=>set_cert_data_func(e.target.value,"organization_date")}/>
                    </div>
                </div>

                <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>אתרים מורשים</div> 
                        <div onClick={()=>set_show_snif(true)} className='tachmoshet_info_type_cont tachmoshet_info_type_row_date'>הוסף אתר מורשה</div>  
             
                        {show_snif?<div className='site_worker_cont_main' >
                          <div className='site_worker_cont_main_title'>הוסף אתר מורשה</div>
                          <img src={arrow_up} className='arrow_up' onClick={()=>set_show_snif(false)} />
                          {sites && sites.map((site:any) => (
                          <div className='site_worker_cont'>
                            <input type="checkbox" checked={check_selected_snif_func(site.site_name)} onChange={()=>add_selected_snif_func(site.site_name)}/>
                            <div>{site.site_name}</div>
                          </div>
                          ))}
                        </div>:<></>}
                    </div>
                    
                            
                    <div className='sn_cont_main_cert'>
                      {snif && snif.map((s_n:any)=>(
                      <div className='sn_cont'>
                        <img src={close} className='close_sn' onClick={()=>remove_selected_snif_func(s_n)}/>
                        <div>{s_n}</div>
                      </div>
                      ))}
                    </div>
            </div>


            <div className='cert_info_cont_1'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>רשימת בדיקות חובה</div>

                <div className='check_cont_box'>
                    <div className='check_cont_box_title'>הצהרת בריאות נבדקה ואושרה</div>
                    <div className='check_cont_box_subtitle'>בדיקה רפואית עדכנית, כולל בדיקות פסיכולוגיות</div>
                </div>

                <div className='check_cont_box'>
                    <div className='check_cont_box_title'>אישור העדר הרשעות פליליות</div>
                    <div className='check_cont_box_subtitle'>אישור משטרה עדכני - תקף ל-6 חודשים</div>
                </div>

                <div className='cross_cont_box'>
                    <div className='check_cont_box_title'>אישור קורס וירי מתקדם</div>
                    <div className='check_cont_box_subtitle'>תעודת סיום קורס + אישור ירי מדי שנה</div>
                    <div className='cross_cont_box_in_btn' onClick={()=>set_show_update_popup(true)}>עדכן</div>
                </div>
            </div>

            {show_update_popup?<div className='update_popup_cont_cert'>
                <img src={close} className='close_icon' onClick={()=>set_show_update_popup(false)}/>
                <div className='update_popup_cont_cert_title'>אישור קורס וירי מתקדם</div>

                <div className=' cert_info_type_cont_main cert_info_type_cont_main_update'>
                    <div className='tachmoshet_info_type_title tachmoshet_info_type_title_t'>תאריך ביצוע חדש</div>
                    <input type="date" className='tachmoshet_info_type_cont cert_info_type_row_date white-calendar' placeholder='' />
                </div>
                <div className=' cert_info_type_cont_main cert_info_type_cont_main_update'>
                    <div className='tachmoshet_info_type_title tachmoshet_info_type_title_t'>תאריך תוקף</div>
                    <input type="date" className='tachmoshet_info_type_cont cert_info_type_row_date white-calendar' placeholder='' />
                </div>


                <div className=' cert_info_type_cont_main cert_info_type_cont_main_update'>
                    <div className='tachmoshet_info_type_title tachmoshet_info_type_title_t'>גורם מאשר</div>
                    <select className='select_cert_opt'>
                        <option>בחירת גורם</option>
                    </select>
                </div>

                <textarea placeholder='הערות' className='cert_comments'></textarea>

                <div className='cert_upload_cont'>
                    <img src={upload_w} className='upload_w'/>
                    <div className='upload_w_text'>גרור קבצים לכאן או לחץ להעלאה</div>
                </div>

                <div className='mefakeah_sign_cont'>
                    <input className="cert_input_sign" type="text" />
                    <div className='cert_input_sign_text'>חתימת המפקח</div>
                </div>

                <div className='update_popup_cont_cert_btn' onClick={()=>set_show_update_popup(false)}>עדכן</div>

            </div>:<></>}

            <div className='cancel_cert_btn_cont'>
                <div className="cancel_cert_btn" onClick={()=>{props.set_show_certificate_of_authorization(false)}}>ביטול</div>
                <div className="next_cert_btn" onClick={()=>{next_page()}}>הבא</div>
            </div>
            {err_msg?<div className='err_msg'>{err_msg}</div>:<></>}

       

        </div>
        
    </div>
  )
}

export default Certificate_authorization