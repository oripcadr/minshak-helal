import './New_worker.css'
//import add_user from './assets/add_user.png'

import close from './assets/close.png'
import more_icon from './assets/more_icon.png'
import p_details_1 from './assets/p_details_1.png'

import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import SignatureCanvas from 'react-signature-canvas'
import trash_w from './assets/trash_w.png'
import eq_del from './assets/eq_del.png'
import camera from './assets/camera.png'
import arrow_up from './assets/arrow_up.png'

function New_worker(props:any) {

    const [name, set_name] = useState('');
    const [last_name, set_last_name] = useState('');
    const [gender, set_gender] = useState('זכר');
    const [address, set_address] = useState('');
    const [t_z, set_t_z] = useState('');
    const [email, set_email] = useState('');
    const [phone, set_phone] = useState('');
    const [b_date, set_b_date] = useState('');
    const [snif, set_snif] = useState([]);
    const [role, set_role] = useState('');
    
    const [w_level, set_w_level] = useState('');
    const [salery_hour, set_salery_hour] = useState('');
    const [salery_number, set_salery_number] = useState('');
    const [work_start, set_work_start] = useState('');
    const [work_end, set_work_end] = useState('');
    const [err_msg, set_err_msg] = useState('');
    

    const [access_app, set_access_app] = useState<any>(false);
    const [access_manage, set_access_manage] = useState<any>(false);
    const [access_shifts, set_access_shifts] = useState<any>(false);
    const [access_reports, set_access_reports] = useState<any>(false);

    const [doc_1, set_doc_1] = useState<any>('');
    const [doc_2, set_doc_2] = useState<any>('');
    const [doc_3, set_doc_3] = useState<any>('');
    const [doc_1_date, set_doc_1_date] = useState<any>('');
    const [doc_2_date, set_doc_2_date] = useState<any>('');
    const [doc_3_date, set_doc_3_date] = useState<any>('');

    const [eq_obj, set_eq_obj] = useState<any>([{eq_type:'',eq_count:'',eq_num:'',eq_comments:''}]);
    const [eq_obj_worker, set_eq_obj_worker] = useState<any>([{eq_type:'',eq_count:'',eq_num:'',eq_comments:''}]);
    
    const [show_eq_popup, set_show_eq_popup] = useState<any>(false);
    const [fake, set_fake] = useState<any>(false);
    const [user_img, set_user_img] = useState<any>('');

    const [salery_type, set_salery_type] = useState<any>(0);
    const [show_snif, set_show_snif] = useState<any>(false);

    const [sites, set_sites] = useState<any>([]);
    
    const [delete_eq_popup, set_delete_eq_popup] = useState<any>('');

    useEffect(() => {
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
          // set_sites_original(res.data.recordset);
        }
      })

    }
        

    function add_eq_row(){

      let eq_obj_t={eq_type:'',eq_count:'',eq_num:'',eq_comments:''};
      let eq_obj_1=eq_obj;

      eq_obj_1.push(eq_obj_t);

      set_eq_obj(eq_obj_1);
      set_fake(!fake);

    }

    function set_eq_obj_val(value:any, type:any, index:any){
      let eq_obj_1=eq_obj;

      if(type=='eq_type'){
        eq_obj_1[index].eq_type=value;
      }
      
      if(type=='eq_count'){
        eq_obj_1[index].eq_count=value;
      }

      if(type=='eq_num'){
        eq_obj_1[index].eq_num=value;
      }
      
      if(type=='eq_comments'){
        eq_obj_1[index].eq_comments=value;
      }

      set_eq_obj(eq_obj_1);
      set_fake(!fake);
    }

    function add_selected_snif_func(val:any){
      let snif_t:any=snif;
      snif_t.push(val);
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

    function del_eq_obj(index:any){
      let eq_obj_1=eq_obj;
      let eq_obj_f:any=[];

      for(let i=0; i<eq_obj_1.length; i++){
        if (i!=index){
          eq_obj_f.push(eq_obj_1[i]);
        }
      }  

      set_delete_eq_popup('');
      set_eq_obj(eq_obj_f);
      set_fake(!fake);
    }

    function add_eq_to_worker(){
      set_eq_obj_worker(eq_obj);
      set_show_eq_popup(false);
      set_fake(!fake);
    }

    function validateEmail(email:any) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
    
    function validatePhone(phone:any) {
      const re = /^\d{10}$/;
      return re.test(phone);
    }

    function validateIsraeliID(id:any) {
      id = String(id).trim();
      if (!/^\d+$/.test(id)) return false;

      id = id.padStart(9, '0');
      if (id.length !== 9) return false;

      let sum = 0;

      for (let i = 0; i < 9; i++) {
        let num = Number(id[i]) * ((i % 2) + 1);

        if (num > 9) {
          num = num - 9; // same as summing digits
        }

        sum += num;
      }

      return sum % 10 === 0;
    }

    function check_work_start_end(){
      let s_date=new Date(work_start);
      let e_date=new Date(work_end);

      if(e_date<s_date){
        return false;
      } else {
        return true;
      }

    }

    function save_new_worker(){
      let payload = new FormData();
    
      if (!validateEmail(email)){
        set_err_msg('אימייל לא תקין');
      } else if(!validatePhone(phone)){
        set_err_msg('טלפון לא תקין');
      } else if(!validateIsraeliID(t_z)){
        set_err_msg('ת.ז לא תקין');
      } else if(!check_work_start_end()){
        set_err_msg('תחילת העסקה או סיום העסקה לא תקינים');
      } else {

        payload.append("name", name);
        payload.append("last_name", last_name);
        payload.append("gender", gender);
        payload.append("role", role);
        payload.append("snif", snif.join("|"));
        payload.append("status", 'פעיל');
        payload.append("address", address);
        payload.append("t_z", t_z);
        payload.append("email", email);
        payload.append("phone", phone);
        payload.append("b_date", b_date);
        payload.append("w_level", w_level);
        payload.append("salery_hour", salery_hour);

        payload.append("access_app", access_app);
        payload.append("access_manage", access_manage);
        payload.append("access_shifts", access_shifts);
        payload.append("access_reports", access_reports);

        payload.append("doc_1", doc_1);
        payload.append("doc_2", doc_2);
        payload.append("doc_3", doc_3);

        payload.append("doc_1_date", doc_1_date);
        payload.append("doc_2_date", doc_2_date);
        payload.append("doc_3_date", doc_3_date);
        
        payload.append("worker_equipment", JSON.stringify(eq_obj_worker));

        payload.append("sign",trimmedDataURL_1);
        payload.append("user_image",user_img);

        payload.append("salery_type",salery_type);
        payload.append("salery_number",salery_number);

        payload.append("work_start",work_start);
        payload.append("work_end",work_end);
      


        axios({
          method: 'post',
          url: globalThis.app.current+'/save_new_worker',
          data: payload,
          headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
          props.get_all_workers();
          props.set_new_worker_popup(false);
        });
      }
    }

      const inputElement:any = useRef('');
      const focusInput = () => {
        inputElement.current.click();
      };

      const inputElement2:any = useRef('');
      const focusInput2 = () => {
        inputElement2.current.click();
      };
        
      const inputElement3:any = useRef('');
      const focusInput3 = () => {
        inputElement3.current.click();
      };

      const inputElement4:any = useRef('');
      const focusInput4 = () => {
        inputElement4.current.click();
      };


    async function upload_file_func(files:any, type:any){

        if (files[0] && files[0]) {

            let payload = new FormData();

            payload.append("file", files[0]);
            
            await axios({
                method: 'post',
                url: globalThis.app.current+'/upload_file',
                data: payload,
                headers: { "Content-Type": "multipart/form-data" },
            }).then(async res => {

              if (type=="doc_1"){
                set_doc_1(res.data.fileName);
              } else if (type=="doc_2"){
                set_doc_2(res.data.fileName);
              } else {
                set_doc_3(res.data.fileName);
              }
             
                
            });

        }
    }

    async function upload_user_img(files:any){

        if (files[0] && files[0]) {

            let payload = new FormData();

            payload.append("file", files[0]);
            
            await axios({
                method: 'post',
                url: globalThis.app.current+'/upload_file',
                data: payload,
                headers: { "Content-Type": "multipart/form-data" },
            }).then(async res => {

              set_user_img(res.data.fileName);

            });

        }
    }

    const sigCanvas:any = useRef({});
    const [trimmedDataURL_1, setTrimmedDataURL_1] = useState<any>('');

    const [sign_popup_1, set_sign_popup_1] = useState(false);

    function clear () {
        sigCanvas.current.clear()
    }

    function trim () {
        if (!sigCanvas.current || sigCanvas.current.isEmpty()) return;

        setTrimmedDataURL_1(
        sigCanvas.current
            .getTrimmedCanvas()
            .toDataURL("image/png")
        );

        set_sign_popup_1(false);     

      //  console.log(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
                        
    }

  return (
    <>
      <div className='new_worker_popup_cont' >
        <img src={close} className='close_icon' onClick={()=>props.set_new_worker_popup(false)}/>
        <div className='worker_popup_header'>
            {/* <img src={add_user} className='user_b'/>     */}

            {user_img==''?<div className='user_img_cont' onClick={focusInput4}>
              <img src={camera} />
              <div>הוסף תמונה</div>
              <input type="file" onChange={(e)=>upload_user_img(e.target.files)} ref={inputElement4} className='file_input' />

            </div>:<img src={globalThis.app.current+'/'+user_img} className='user_img_cont'/>}
            <div className='user_b_text_cont'>
                <div className='user_b_text_main_tachmoshet'>הוספת עובד חדש</div>
            </div>    

        </div>

        <div className='worker_info_cont'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>פרטים אישיים</div>

                <div className='tachmoshet_info_type_cont_main_row'>
                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>שם פרטי</div>   
                        <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' placeholder='הזן שם פרטי' value={name} onChange={(e)=>set_name(e.target.value)}/>
                    </div>


                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>שם משפחה</div>   
                        <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' placeholder='הזן שם משפחה' value={last_name} onChange={(e)=>set_last_name(e.target.value)}/>
                    </div>
                   
                </div>

                <div className='tachmoshet_info_type_cont_main_row'>
                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>תעודת זהות</div>   
                        <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' placeholder='תעודת זהות' value={t_z} onChange={(e)=>set_t_z(e.target.value)}/>
                    </div>

                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>כתובת</div>   
                        <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' placeholder='הזן כתובת' value={address} onChange={(e)=>set_address(e.target.value)}/>
                    </div>
                    
                </div>

                <div className='tachmoshet_info_type_cont_main_row'>
                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>טלפון</div>   
                        <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' placeholder='טלפון' value={phone} onChange={(e)=>set_phone(e.target.value)}/>
                    </div>

                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>אימייל</div>   
                        <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' placeholder='אימייל' value={email} onChange={(e)=>set_email(e.target.value)}/>
                    </div>

                </div>

                 <div className='tachmoshet_info_type_cont_main_row'>

                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>מין</div>   

                        <div className='gender_cont'>
                          <div className={'gender ' + (gender=='זכר'? "gender_selected" : "")} onClick={()=>set_gender('זכר')}>זכר</div>
                          <div className={'gender ' + (gender=='נקבה'? "gender_selected" : "")} onClick={()=>set_gender('נקבה')}>נקבה</div>
                        </div>
                    </div>

                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>תאריך לידה</div>   
                        <input type="date" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date white-calendar' placeholder='תאריך לידה' value={b_date} onChange={(e)=>set_b_date(e.target.value)}/>
                    </div>

                 </div>

        </div>


      <div className='worker_info_cont worker_info_cont_2'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>פרטי עובד</div>

                 <div className='tachmoshet_info_type_cont_main_row'>
                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>רמת הכשרה</div>  
                        <select className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' value={w_level} onChange={(e)=>set_w_level(e.target.value)}>
                          <option>בחר הכשרה</option>
                          <option>בסיסי</option>
                          <option>קורס א</option>
                          <option>קורס ב</option>
                          <option>מתקדם</option>
                        </select>
                        {/* <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' placeholder='תעודת זהות' value={t_z} onChange={(e)=>set_t_z(e.target.value)}/> */}
                    </div>

                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>אתרים מורשים</div> 
                        <div onClick={()=>set_show_snif(true)} className='tachmoshet_info_type_cont tachmoshet_info_type_row_date'>הוסף אתר מורשה</div>  
                        {/* <select className='tachmoshet_info_type_cont tachmoshet_info_type_row_date'  value={snif} onChange={(e)=>set_snif(e.target.value)}>
                          <option>בחר אתר</option>
                          <option>מתחם הבורסה</option>
                          <option>מגדל שלום</option>
                          <option>קריית הממשלה</option>
                          <option>עזריאלי חולון</option>
                        </select> */}

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

                    <div className='sn_cont_main'>
                      {snif && snif.map((s_n:any)=>(
                      <div className='sn_cont'>
                        <img src={close} className='close_sn' onClick={()=>remove_selected_snif_func(s_n)}/>
                        <div>{s_n}</div>
                      </div>
                      ))}
                    </div>
                </div>

              <div className='tachmoshet_info_type_cont_main_row'>
                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>תפקיד</div>  
                        <select className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' value={role} onChange={(e)=>set_role(e.target.value)}>
                          <option>בחר תפקיד</option>
                          <option>מאבטח</option>
                          <option>מאבטח בכיר</option>
                          <option>אחמ"ש</option>
                          <option>קב"ט</option>
                        </select>
                        {/* <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' placeholder='תעודת זהות' value={t_z} onChange={(e)=>set_t_z(e.target.value)}/> */}
                    </div>
              
                </div>

              <div className='tachmoshet_info_type_cont_main_row'>
                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>שכר</div>  

                        <div className='salery_type_cont_main'>
                            <div className='salery_type_cont'>
                              <div className={'salery_type '+(salery_type==1?"salery_type_selected":"")} onClick={()=>set_salery_type(1)}>שעתי</div>
                              <div className={'salery_type '+(salery_type==2?"salery_type_selected":"")} onClick={()=>set_salery_type(2)}>יומי</div>
                              <div className={'salery_type '+(salery_type==3?"salery_type_selected":"")} onClick={()=>set_salery_type(3)}>גלובלי</div>
                            </div>
                        
                            <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date salery_worker_input' placeholder='שכר בשקלים' value={salery_hour} onChange={(e)=>set_salery_hour(e.target.value)}/>
                        </div>
                    </div>

                </div>

                <div className='tachmoshet_info_type_cont_main_row'>
                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>מ. מזהה בשכר</div>  
                        <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date salery_worker_input' placeholder='הזן מספר מזהה בשכר' value={salery_number} onChange={(e)=>set_salery_number(e.target.value)}/>
                    </div>
                </div>

                <div className='tachmoshet_info_type_cont_main_row'>
                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>תחילת העסקה</div>  
                        <input type="date" className='white-calendar tachmoshet_info_type_cont tachmoshet_info_type_row_date salery_worker_input' placeholder='הזן מספר מזהה בשכר' value={work_start} onChange={(e)=>set_work_start(e.target.value)}/>
                    </div>
                </div>

                <div className='tachmoshet_info_type_cont_main_row'>
                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>סיום העסקה</div>  
                        <input type="date" className='white-calendar tachmoshet_info_type_cont tachmoshet_info_type_row_date salery_worker_input' placeholder='הזן מספר מזהה בשכר' value={work_end} onChange={(e)=>set_work_end(e.target.value)}/>
                    </div>
                </div>


        </div>

        <div className='new_worker_docs_needed_cont'>
            <div className='new_worker_docs_needed'>
                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>מסמכים נדרשים</div>

                {/* <div className='.tachmoshet_info_type_cont_main'>
                    <div className='tachmoshet_info_type_title'>תעודת זהות</div>  
                    <div className='add_doc_btn'> + העלאת מסמך</div>
                </div> */}

                <div className='tachmoshet_info_type_cont_main_row_h'>
                    <div className=' tachmoshet_info_type_cont_main'>
                      <div className='tachmoshet_info_type_title'>תעודת זהות</div>  
                      <div className='add_doc_btn' onClick={focusInput}>{doc_1? doc_1 : "+ העלאת מסמך"} </div>
                      <input type="date"  value={doc_1_date} onChange={(e)=>set_doc_1_date(e.target.value)} className='white-calendar tachmoshet_info_type_cont tachmoshet_info_type_row_date tachmoshet_info_type_row_date_s' />
                      <input type="file" onChange={(e)=>upload_file_func(e.target.files,"doc_1")} ref={inputElement} className='file_input' />
                    </div>

                    <div className=' tachmoshet_info_type_cont_main'>
                      <div className='tachmoshet_info_type_title'>תעודת זהות</div>  
                      <div className='add_doc_btn' onClick={focusInput2}>{doc_2? doc_2 : "+ העלאת מסמך"}</div>
                      <input type="date"  value={doc_2_date} onChange={(e)=>set_doc_2_date(e.target.value)} className='white-calendar tachmoshet_info_type_cont tachmoshet_info_type_row_date tachmoshet_info_type_row_date_s' />
                      <input type="file" onChange={(e)=>upload_file_func(e.target.files,"doc_2")} ref={inputElement2} className='file_input'/>
                    </div>

                    <div className=' tachmoshet_info_type_cont_main'>
                      <div className='tachmoshet_info_type_title'>שכר שעתי</div>  
                      <div className='add_doc_btn'  onClick={focusInput3}>{doc_3? doc_3 : "+ העלאת מסמך"}</div>
                      <input type="date"  value={doc_3_date} onChange={(e)=>set_doc_3_date(e.target.value)} className='white-calendar tachmoshet_info_type_cont tachmoshet_info_type_row_date tachmoshet_info_type_row_date_s' />
                      <input type="file" onChange={(e)=>upload_file_func(e.target.files,"doc_3")} ref={inputElement3} className='file_input' />
                    </div>
            </div>
          </div>

          <div className='new_worker_docs_needed'>
                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>הרשאות מערכת</div>

                    <div className=' tachmoshet_info_type_cont_main'>
                      <div className='tachmoshet_info_type_title tachmoshet_info_type_title_l'>גישה לאפליקציה</div>  
                        <div className={' slide_settings_cont_w ' + (access_app?"slide_settings_cont_w_selected":"")} onClick={()=>set_access_app(!access_app)}> 
                          <div className={'slide_settings_middle ' + (access_app?"slide_settings_middle_w_selected":"")}></div>
                        </div>
                    </div>

                    <div className=' tachmoshet_info_type_cont_main'>
                      <div className='tachmoshet_info_type_title tachmoshet_info_type_title_l'>גישה למערכת ניהול</div>  
                        <div className={' slide_settings_cont_w ' + (access_manage?"slide_settings_cont_w_selected":"")} onClick={()=>set_access_manage(!access_manage)}> 
                            <div className={'slide_settings_middle ' + (access_manage?"slide_settings_middle_w_selected":"")}></div>
                        </div>
                    </div>

                    <div className=' tachmoshet_info_type_cont_main'>
                      <div className='tachmoshet_info_type_title tachmoshet_info_type_title_l'>ניהול משמרות</div>  
                        <div className={' slide_settings_cont_w ' + (access_shifts?"slide_settings_cont_w_selected":"")} onClick={()=>set_access_shifts(!access_shifts)}> 
                                <div className={'slide_settings_middle ' + (access_shifts?"slide_settings_middle_w_selected":"")}></div>
                        </div>
                    </div>


                     <div className=' tachmoshet_info_type_cont_main'>
                      <div className='tachmoshet_info_type_title tachmoshet_info_type_title_l'>הגשת דוחות</div>  
                        <div className={' slide_settings_cont_w ' + (access_reports?"slide_settings_cont_w_selected":"")} onClick={()=>set_access_reports(!access_reports)}> 
                                <div className={'slide_settings_middle ' + (access_reports?"slide_settings_middle_w_selected":"")}></div>
                        </div>
                    </div>
          </div>

        </div>


      <div className='worker_info_cont'>

          <img src={more_icon} className='w_more_icon'/>
          <img src={p_details_1} className='p_details_1'/>
          <div className='p_details_title'>ציוד אישי שהונפק לעובד</div>

          <div className='add_equipment_btn' onClick={()=>set_show_eq_popup(!show_eq_popup)}> + הוספת ציוד</div>

          <div className='table_header_cont table_header_cont_worker'>
            <div className='table_header'>פריט ציוד</div>
            <div className='table_header'>כמות</div>
            <div className='table_header'>מצב בקבלה</div>
            <div className='table_header'>הערות</div>
            <div className='table_header'>חתימה</div>
          </div>

          {eq_obj_worker && eq_obj_worker[0].eq_type!='' && eq_obj_worker.map((obj_worker:any) => (
            <div className='table_header_cont table_header_cont_worker'>
              <div className='table_row'>{obj_worker.eq_type}</div>
              <div className='table_row'>{obj_worker.eq_count}</div>
              <div className='table_row'>תקין</div>
              <div className='table_row'>{obj_worker.eq_comments}</div>
              <div className='tachmoshet_info_type_cont tachmoshet_info_type_row_sign tachmoshet_info_type_row_sign_l'><img src={trimmedDataURL_1} className='eq_sign_img' /></div>
            </div> 
          ))}

      </div>

      {show_eq_popup ?<div className='eq_popup_cont'>
        <img src={close}  className='close_icon_eq' onClick={()=>set_show_eq_popup(false)}/>
        <div className='eq_popup_title_cont'>
          <div className='eq_popup_title_s eq_popup_title_s_long'>סוג ציוד</div>
          <div className='eq_popup_title_s'>כמות</div>
          <div className='eq_popup_title_s'>מספר סידורי</div>
          <div className='eq_popup_title_s eq_popup_title_s_long'>הערות</div>
        </div>

        <div className='eq_popup_title_cont_main'>
          {eq_obj && eq_obj.map((eq_obj_r:any, index:any) => (
            <>
            <div className='eq_popup_title_cont'>
              <div className='eq_popup_title_s eq_popup_title_s_long'><input className='input_eq input_eq_long' type="text" placeholder="סוג ציוד" value={eq_obj_r.eq_type} onChange={(e)=>set_eq_obj_val(e.target.value, "eq_type", index)}/></div>
              <div className='eq_popup_title_s'><input type="text" className='input_eq' placeholder="כמות" value={eq_obj_r.eq_count} onChange={(e)=>set_eq_obj_val(e.target.value, "eq_count", index)}/></div>
              <div className='eq_popup_title_s'><input type="text" className='input_eq' placeholder="מספר סידורי" value={eq_obj_r.eq_num} onChange={(e)=>set_eq_obj_val(e.target.value, "eq_num", index)}/></div>
              <div className='eq_popup_title_s eq_popup_title_s_long'><input type="text" className='input_eq input_eq_long' placeholder="הערות" value={eq_obj_r.eq_comments} onChange={(e)=>set_eq_obj_val(e.target.value, "eq_comments", index)}/></div>
           
            <img src={eq_del} onClick={()=>{debugger; set_delete_eq_popup(index)}}/>
            </div>
              {delete_eq_popup!=='' && delete_eq_popup==index?<div className='delete_event_popup_cont'>
                  האם אתה בטוח רוצה למחוק? 

              <div className='delete_worker_popup_btncont'>
                  <div onClick={()=>del_eq_obj(delete_eq_popup)}>כן</div>
                  <div onClick={()=>{set_delete_eq_popup('')}}>לא</div>
              </div>
              </div>:<></>}
            </>
          ))}
        </div>

        <div className='add_eq_btn_in' onClick={()=>add_eq_row()}>+ הוספת פריט</div>


        <div className='sign_cont_eq'>
          <div className='sign_cont_eq_title'>חתימת המקבל</div>
       
            <div className='tachmoshet_info_type_cont tachmoshet_info_type_row_date '  onClick={()=>set_sign_popup_1(!sign_popup_1)}>
                {trimmedDataURL_1?<img src={trimmedDataURL_1} className='sign_1_img' alt="signature" />:<></>}
            </div>
        </div>

        <div className='add_eq_final_btn' onClick={()=>add_eq_to_worker()}>הוסף</div>

      </div>:<></>}

        <div className='save_t_btn_cont'>
            <div className='save_t_btn' onClick={()=>save_new_worker()}>שמירת עובד</div>
            <div className='cancel_t_btn'  onClick={()=>props.set_new_worker_popup(false)}>ביטול</div>
        </div>

        {err_msg?<div className='err_msg'>{err_msg}</div>:<></>}

      </div>

          {sign_popup_1?<div className='sign_popup_cont_eq'>
                    {/* <div className='sign_area_cont'></div> */}

                    <div onClick={()=>clear()} className='edit_sign_btn'>עריכת החתימה</div>

                    <SignatureCanvas ref={sigCanvas} penColor="white"/>

                    <div className='save_sign_cont'>
                        <img src={trash_w} onClick={()=>clear()} className='trash_w'/>
                        <div className='auto_sign'>חתימה אוטומטית</div>
                        <div className='save_sign' onClick={()=>trim()}>שמור</div>

                    </div>


                    {/* {trimmedDataURL && <img src={trimmedDataURL} alt="signature" />} */}
                </div>:<></>}
    </>
  )}

export default New_worker