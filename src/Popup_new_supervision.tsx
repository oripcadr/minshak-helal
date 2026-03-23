import './Popup_new_supervision.css'

import close from './assets/close.png'
import more_icon from './assets/more_icon.png'
import p_details_1 from './assets/p_details_1.png'

import upload from './assets/upload.png'
import add_sup_icon from './assets/add_sup_icon.png'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import SignatureCanvas from 'react-signature-canvas'
import trash_w from './assets/trash_w.png'
// import { useState } from 'react'

function Popup_new_supervision(props:any) {

    const [date, set_date] = useState(''); 
    const [worker, set_worker] = useState('');
    const [type_1, set_type_1] = useState(false);
    const [type_2, set_type_2] = useState(false);
    const [type_3, set_type_3] = useState(false);
    const [type_4, set_type_4] = useState(false);
    const [type_5, set_type_5] = useState(false);
    const [type_6, set_type_6] = useState(false);
    const [fake, set_fake] = useState(false);
    
    const [place, set_place] = useState('');
    const [score, set_score] = useState('');
    const [comments, set_comments] = useState('');
    const [selected_type, set_selected_type] = useState('אתר');
    const [fix_status, set_fix_status] = useState('לא דחוף');
    const [fix_comments, set_fix_comments_t] = useState<any>('');
    const [controller, set_controller] = useState('');

    const [doc_path, set_doc_path] = useState('');
    const [add_title, set_add_title] = useState(false);
    

    const [fix_obj, set_fix_obj] = useState<any>([]);

    const [workers, set_workers] = useState<any>([]);

    const [sites, set_sites] = useState<any>([]);
    const [extra_types, set_extra_types] = useState<any>([]);
    const [show_del_type, set_show_del_type] = useState<any>(false);
    

    const inputElement:any = useRef('');
    const focusInput = () => {
        inputElement.current.click();
    };
           
    
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
        
    useEffect(() => {
        get_all_workers();
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
        //   set_workers_original(res.data.recordset);

        } 
          
      });
    }

    function save_critics(){
        let types='';
        if(type_1){
            types+="נוכחות"+"|"
        }
        if(type_2){
            types+="דיוק בשעות"+"|"
        }
        if(type_3){
            types+="תקינות ציוד"+"|"
        }
        if(type_4){
            types+="מדים ומראה חיצוני"+"|"
        }
        if(type_5){
            types+="משמעת והתנהגות"+"|"
        }
        if(type_6){
            types+="עמידה בנהלים"+"|"
        }

        types+=extra_types.join("|");

        let payload = new FormData();

        payload.append("date", date);
        payload.append("type", selected_type);
        if(selected_type=='type'){
            payload.append("place", place);
        } else{
            payload.append("place", worker);  
        }
     
        payload.append("worker", controller);
        payload.append("subject", types);
        payload.append("score", score);
        payload.append("comments", comments);
        payload.append("status", 'מצויין');

        payload.append("fix_criticism", JSON.stringify(fix_obj));
        payload.append("sign", trimmedDataURL_1);

        payload.append("doc_path", doc_path);
        
        axios({
            method: 'post',
            url: globalThis.app.current+'/save_critics',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
            props.get_all_criticism();
        });

    }

    async function upload_file_func(files:any){

        if (files[0] && files[0]) {

            let payload = new FormData();

            payload.append("file", files[0]);
            
            await axios({
                method: 'post',
                url: globalThis.app.current+'/upload_file',
                data: payload,
                headers: { "Content-Type": "multipart/form-data" },
            }).then(async res => {
                set_doc_path(res.data.fileName);
                
            });

        }
    }

    function save_fix(){
        
        if (fix_comments){
            let f_obj:any={comment:fix_comments, status:fix_status}
            let t=fix_obj;
            t.push(f_obj);

            set_fix_obj(t);
            debugger;
            
            set_fix_status('לא דחוף');

            set_fix_comments_t('');

            set_fake(!fake);
        }
    }

    function add_to_types(val:any){
        let e_t=extra_types;

        e_t.push(val);
        set_extra_types(e_t);

        set_add_title(false);
        set_fake(!fake);
    }

    function del_extra_type(index:any){
        let e_t=extra_types;
        let e_t_final:any=[];

        for(let i=0; i<e_t.length; i++){
            if(index!=i){
                e_t_final.push(e_t[i]);
            }    
        }

        set_extra_types(e_t_final);

       
        set_fake(!fake);

    }
    
  return (
    <>
      <div className='worker_popup_cont sup_pupop' >
        <img src={close} className='close_icon' onClick={()=>props.set_show_new_supervision(false)}/>
        <div className='worker_popup_header'>
            <img src={add_sup_icon} className='user_b'/>    
            <div className='user_b_text_cont'>
                <div className='user_b_text_main_tachmoshet'>הוספת ביקורת חדשה</div>
            </div>    
        </div>

        <div className='tachmoshet_info_cont sup_info_cont'>

            <img src={more_icon} className='w_more_icon'/>
            <img src={p_details_1} className='p_details_1'/>
            <div className='p_details_title'>פרטי הביקורת</div>
            
            <div className='settings_box_line_cont settings_box_line_cont_sup'>
                <div className='settings_box_title_in'>סוג הביקורת</div>
                <div className='settings_box_input settings_box_input_sup' >
                    <div className={'settings_box_input_sup_type settings_box_input_sup_type_site ' + (selected_type=='אתר' ? "type_selected" : "") } onClick={()=>set_selected_type('אתר')} >אתר</div>
                    <div className={'settings_box_input_sup_type settings_box_input_sup_type_worker ' + (selected_type=='עובד' ? "type_selected" : "")} onClick={()=>set_selected_type('עובד')}>עובד</div>
                </div>
               {selected_type=='אתר'? <select className='settings_box_input settings_box_input_select' value={place} onChange={(e)=>set_place(e.target.value)}>
                    <option>
                    בחר אתר
                    </option>
                    {sites && sites.map((site:any) => (
                        <option>
                       {site.site_name}
                        </option>
                    ))}
                </select>:
                <select className='settings_box_input settings_box_input_select' value={worker} onChange={(e)=>set_worker(e.target.value)}>
                   <option>
                    בחר עובד
                    </option>
                    {workers && workers.map((worker:any) => (
                        <option>
                       {worker.name}
                        </option>
                    ))}
                </select>}

            </div>    

            <div className='settings_box_line_cont settings_box_line_cont_sup'>
                <div className='settings_box_title_in'>תאריך הביקורת</div>
                <input className='settings_box_input settings_box_input_sup white-calendar' type="date" placeholder='2026-01-01' value={date} onChange={(e)=>set_date(e.target.value)}/>
                 <select className='settings_box_input settings_box_input_select' value={controller} onChange={(e)=>set_controller(e.target.value)}>
                   <option>
                    בחר מפקח
                    </option>
                    {workers && workers.map((worker:any) => (
                        <option>
                       {worker.name}
                        </option>
                    ))}
                </select>

            </div>    
                     

        </div>

         <div className='tachmoshet_info_cont tachmoshet_info_cont_sup'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>תוכן הביקורת</div>

                <div className='sup_type_options'>
                    <div className={"top_btn " + (type_1 ?"top_btn_selected" : "") } onClick={()=>set_type_1(!type_1)}>נוכחות</div>
                    <div className={"top_btn " + (type_2 ?"top_btn_selected" : "") } onClick={()=>set_type_2(!type_2)}>דיוק בשעות</div>
                    <div className={"top_btn " + (type_3 ?"top_btn_selected" : "") } onClick={()=>set_type_3(!type_3)}>תקינות ציוד</div>
                    <div className={"top_btn " + (type_4 ?"top_btn_selected" : "") } onClick={()=>set_type_4(!type_4)}>מדים ומראה חיצוני</div>
                    <div className={"top_btn " + (type_5 ?"top_btn_selected" : "") } onClick={()=>set_type_5(!type_5)}>משמעת והתנהגות</div>
                    <div className={"top_btn " + (type_6 ?"top_btn_selected" : "") } onClick={()=>set_type_6(!type_6)}>עמידה בנהלים</div>
                    
                     {extra_types && extra_types.map((e_t:any,index:any) => (
                        <div className={"top_btn top_btn_selected top_btn_extra_type"} onMouseOver={()=>set_show_del_type(index)} onMouseOut={()=>set_show_del_type(false)}>{e_t}
                        {show_del_type===index?<img src={close} onClick={()=>del_extra_type(index)} className='close_extra_type'/>:<></>}
                        </div>
                     ))}

                    {add_title?<div className={"top_btn "} ><input type="text" className='add_title_input' onBlur={(e)=>add_to_types(e.target.value)} placeholder='הכנס נושא כאן'/></div>:<></>}
                    
                    <div className="top_btn top_btn_selected_add" onClick={()=>set_add_title(true)}>הוספת נושא + </div>
                </div>

            <div className='settings_box_line_cont settings_box_line_cont_sup'>
                <div className='settings_box_title_in'>ציון הביקורת</div>
                <input className='settings_box_input settings_box_input_sup' type="text" value={score} onChange={(e)=>set_score(e.target.value)}/>
            </div>    


            <div className='settings_box_line_cont settings_box_line_cont_sup'>
                <div className='settings_box_title_in'>הערות</div>
                <textarea className='sup_comments_textarea' onChange={(e)=>set_comments(e.target.value)}>{comments}</textarea>
            </div>   

                <div className='settings_box_line_cont settings_box_line_cont_sup'>
                 
                        <div className='settings_box_title_in'>הוספת מסמכים</div>   
                        <div className='tachmoshet_info_docs'  onClick={focusInput}>
                            <img src={upload} className='upload_icon'/>
                            <div className='upload_icon_text'>גרור קבצים לכאן או לחץ להעלאה</div>
                            <input type="file" onChange={(e)=>upload_file_func(e.target.files)} ref={inputElement} className='file_input' />
                            {doc_path?<div className='logo_path_text'>{doc_path}</div>:<></>}
                        </div>
              
                </div>

        </div>

        <div className='tachmoshet_info_cont tachmoshet_info_cont_fix_sup'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>ליקויים לתיקון</div>

                <div className='settings_box_line_cont settings_box_line_cont_sup'>
                    <div className='settings_box_title_in'>תיאור הליקוי</div>
                    <textarea className='sup_comments_textarea_desc' onChange={(e)=>set_fix_comments_t(e.target.value)} value={fix_comments}></textarea>
                </div>


                <div className='save_sup_desc_btn_cont'>
                    <div className={'top_btn ' + (fix_status=='דחוף' ? "top_btn_selected":"")} onClick={()=>set_fix_status('דחוף')}>דחוף</div>
                    <div className={'top_btn ' + (fix_status=='לא דחוף' ? "top_btn_selected":"")} onClick={()=>set_fix_status('לא דחוף')}>לא דחוף</div>
                    <div className='save_sup_desc_btn' onClick={()=>save_fix()}>שמירה</div>
                </div>

                
                {fix_obj && fix_obj.map((fix_obj_one:any) => (
                    <div className='fix_obj_one'>
                        {fix_obj_one.comment} - {fix_obj_one.status}
                    </div>
                ))}
        </div>


        <div className='tachmoshet_info_cont tachmoshet_info_cont_sign tachmoshet_info_cont_p sup_sign_cont'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>חתימה</div>

                <div className='tachmoshet_info_type_cont_main_row'>
                    <div className='  tachmoshet_info_type_cont_main_sign'>
                        <div className='tachmoshet_info_type_title'>חתימת המפקח</div>   

                        <div className='tachmoshet_info_type_cont tachmoshet_info_type_row_date '  onClick={()=>set_sign_popup_1(!sign_popup_1)}>
                            {trimmedDataURL_1?<img src={trimmedDataURL_1} className='sign_1_img' alt="signature" />:<></>}
                        </div>
                        {/* <div className='tachmoshet_info_type_cont tachmoshet_info_type_row_date tachmoshet_info_type_row_sign'>
                           
                        </div> */}

                                 
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
                    </div>

                </div>

       
        </div>

        <div className='save_sup_final_cont'>
            <div className='save_sup_final_btn' onClick={()=>{save_critics();props.set_show_new_supervision(false)}}>שמירת ביקורת</div>
            <div className='cancel_sup_final_btn'  onClick={()=>props.set_show_new_supervision(false)}>ביטול</div>
        </div>


      </div>
    </>
  )}


export default Popup_new_supervision