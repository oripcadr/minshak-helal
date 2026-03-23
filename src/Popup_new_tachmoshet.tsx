import './Popup_new_tachmoshet.css'
import tachmoshet from './assets/tachmoshet.png'

import close from './assets/close.png'
import more_icon from './assets/more_icon.png'
import p_details_1 from './assets/p_details_1.png'
import upload from './assets/upload.png'
import user_s_1 from './assets/user_s_1.png'
import trash_w from './assets/trash_w.png'

import { useRef, useState } from 'react'
import axios from 'axios'
import SignatureCanvas from 'react-signature-canvas'

function Popup_new_tachmoshet(props:any) {

    const [show_kaliber_popup, set_show_kaliber_popup] = useState(false); 
    const [show_worker_popup, set_show_worker_popup] = useState(false);

    const [asmachta, set_asmachta] = useState('');
    const [count_t, set_count_t] = useState('');
    const [time, set_time] = useState('');
    const [date, set_date] = useState('');
    const [kaliber, set_kaliber] = useState('45 מ"מ');
    const [worker, set_worker] = useState('בחירת עובד');
    const [action, set_action] = useState('העברה');
    const [comments, set_comments] = useState('');
    
    const inputElement:any = useRef('');
    const focusInput = () => {
      inputElement.current.click();
    };

    function save_new_action(){
       let payload = new FormData();
    
      payload.append("date", date);
      payload.append("time", time);
      payload.append("count", count_t);
      payload.append("action", action);
      payload.append("asmachta", asmachta);
      payload.append("kaliber", kaliber);
      payload.append("worker", worker);
      payload.append("comments", comments);
      payload.append("sign_1", trimmedDataURL_1);
      payload.append("sign_2", trimmedDataURL_2);
      payload.append("files", files_to_save);

      axios({
        method: 'post',
        url: globalThis.app.current+'/save_new_action',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(() => {

        props.get_munitions_info();
        props.set_open_popup_new_tachmoshet();
      });
  
    }

    const sigCanvas:any = useRef({});
    const sigCanvas_2:any = useRef({});

    const [trimmedDataURL_1, setTrimmedDataURL_1] = useState<any>(null);
    const [trimmedDataURL_2, setTrimmedDataURL_2] = useState<any>(null);

    const [sign_popup_1, set_sign_popup_1] = useState(false);
    const [sign_popup_2, set_sign_popup_2] = useState(false);

    const [files_to_upload, set_files_to_upload] = useState('');
    const [files_to_save, set_files_to_save] = useState('');


    
    async function upload_file_func(files:any){
        debugger;
        let f:any=files_to_upload;
        f+="|" + files[0].name;



        set_files_to_upload(f);

        if (files[0] && files[0]) {

      
            let payload = new FormData();

            payload.append("file", files[0]);
            
            await axios({
                method: 'post',
                url: globalThis.app.current+'/upload_file',
                data: payload,
                headers: { "Content-Type": "multipart/form-data" },
            }).then(async res => {

                console.log(res.data.fileName);
                let f_1=files_to_save;
                f_1+="|"+res.data.fileName
                set_files_to_save(f_1);
                    
            });

        }
    }



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

    
    function clear_2 () {
        sigCanvas_2.current.clear()
    }

    function trim_2 () {
        if (!sigCanvas_2.current || sigCanvas_2.current.isEmpty()) return;

        setTrimmedDataURL_2(
        sigCanvas_2.current
            .getTrimmedCanvas()
            .toDataURL("image/png")
        );

        set_sign_popup_2(false);     

      //  console.log(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
                        
    }


  return (
    <>
      <div className='worker_popup_cont' >
        <img src={close} className='close_icon' onClick={()=>props.set_open_popup_new_tachmoshet(false)}/>
        <div className='worker_popup_header'>
            <img src={tachmoshet} className='user_b'/>    
            <div className='user_b_text_cont'>
                <div className='user_b_text_main_tachmoshet'>תנועה חדשה בתחמושת</div>
              
            </div>    

        </div>

        <div className='tachmoshet_info_cont'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>פרטי המבצעים</div>

                <div className=' tachmoshet_info_type_cont_main'>
                    <div className='tachmoshet_info_type_title'>סוג תנועה</div>   
                    <div className='tachmoshet_info_type_cont'>
                        <div className={"tachmoshet_info_type_row " + (action=="העברה"? "tachmoshet_info_type_row_selected":"")}  onClick={()=>set_action('העברה')}>העברה</div>
                        <div className={"tachmoshet_info_type_row "+  (action=="רכישה"? "tachmoshet_info_type_row_selected":"")}  onClick={()=>set_action('רכישה')}>רכישה</div>
                        <div className={"tachmoshet_info_type_row " + (action=="גריעה"? "tachmoshet_info_type_row_selected":"")}  onClick={()=>set_action('גריעה')}>גריעה</div>
                    </div>
                </div>


                <div className='tachmoshet_info_type_cont_main_row'>
                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>תאריך</div>   
                        <input type="date" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date white-calendar' placeholder='2025-01-01' value={date} onChange={(e)=>set_date(e.target.value)}/>
                    
                    </div>

                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>שעה</div>   
                        <input type="time" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date white-calendar' placeholder='14:30' value={time} onChange={(e)=>set_time(e.target.value)}/>
                          
                    </div>
                </div>




                <div className='tachmoshet_info_type_cont_main_row tachmoshet_info_type_cont_main_row_select'>
                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>קליבר</div>   
                        <div className='select_tachmosher' onClick={()=>set_show_kaliber_popup(true)}>
                         {kaliber}
                        
                        </div>
                    </div>

                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>עובד</div>   
                        <div className='select_tachmosher select_tachmosher_l' onClick={()=>set_show_worker_popup(true)}>
                          {worker}
                        
                        </div>
                    </div>
                </div>

                {show_kaliber_popup?<div className='kaliber_popup_cont'>
                    <div className='kaliber_popup_opt' onClick={()=>{set_show_kaliber_popup(false);set_kaliber('45 מ"מ')}}>45 מ״מ</div>
                    <div className='kaliber_popup_opt' onClick={()=>{set_show_kaliber_popup(false);set_kaliber('9 מ"מ')}}>9 מ״מ</div>
                    <div className='kaliber_popup_opt' onClick={()=>{set_show_kaliber_popup(false);set_kaliber('5.56 מ"מ')}}>5.56 מ״מ</div>
                    <div className='kaliber_popup_opt' onClick={()=>{set_show_kaliber_popup(false);set_kaliber('7.62 מ"מ')}}>7.62 מ״מ</div>
                </div>:<></>}

                {show_worker_popup?<div className='show_worker_popup_cont'>
                    <div className='worker_popup_opt'  onClick={()=>set_show_worker_popup(false)}>בחירת עובד</div>

                    <div className='worker_popup_opt' onClick={()=>{set_show_worker_popup(false);set_worker('אורי אחדות')}}>
                        אורי אחדות
                        <img src={user_s_1} />
                        </div>
                    <div className='worker_popup_opt' onClick={()=>{set_show_worker_popup(false);set_worker('שחר קרן')}}>שחר קרן 
                        <img src={user_s_1} />
                    </div>
                    <div className='worker_popup_opt' onClick={()=>{set_show_worker_popup(false);set_worker('אורי אחדות')}} >אורי אחדות
                        <img src={user_s_1} />
                    </div>
                    <div className='worker_popup_opt' onClick={()=>{set_show_worker_popup(false);set_worker('עידו נוימן')}}>עידו נוימן
                        <img src={user_s_1} />
                    </div>
                </div>:<></>}

                <div className='tachmoshet_info_type_cont_main_row'>
                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>כמות</div>   
                        <input type="text"  className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' placeholder='0'  value={count_t} onChange={(e)=>set_count_t(e.target.value)}/>
                        
                    </div>

                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>אסמכתא</div>   
                        <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' placeholder='אסמכתא' value={asmachta} onChange={(e)=>set_asmachta(e.target.value)}/>
                       
                    </div>
                </div>

        </div>

         <div className='tachmoshet_info_cont'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>פרטים נוספים</div>

                <div className='tachmoshet_info_type_cont_main_row'>
                    <div className=' tachmoshet_info_type_cont_main_extra'>
                        <div className='tachmoshet_info_type_title tachmoshet_info_type_title_e'>הערות</div>   
                        <textarea className='tachmoshet_info_comments' onChange={(e)=>set_comments(e.target.value)}>
                            {comments}
                        </textarea>
                    </div>
                </div>

                 <div className='tachmoshet_info_type_cont_main_row tachmoshet_info_type_cont_main_row_2'>
                    <div className=' tachmoshet_info_type_cont_main_extra'>
                        <div className='tachmoshet_info_type_title tachmoshet_info_type_title_e'>הוספת מסמכים</div>   
                        <div className='tachmoshet_info_docs' onClick={focusInput}>
                            <img src={upload} className='upload_icon'/>
                            <div className='upload_icon_text' >גרור קבצים לכאן או לחץ להעלאה</div>
                            <input type="file" className="file_input" onChange={(e)=>upload_file_func(e.target.files)} ref={inputElement} />
                        </div>
                      
                    </div>
                     
                </div>

                 {files_to_upload?<div className='files_to_upload'>{files_to_upload}</div>:<></>}
        </div>


        <div className='tachmoshet_info_cont tachmoshet_info_cont_sign'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>חתימה</div>

                <div className='tachmoshet_info_type_cont_main_row'>
                    <div className='  tachmoshet_info_type_cont_main_sign'  onClick={()=>set_sign_popup_1(!sign_popup_1)}>
                        <div className='tachmoshet_info_type_title tachmoshet_info_type_title_long'>חתימת המפקח</div>   
                        <div className='tachmoshet_info_type_cont tachmoshet_info_type_row_date'>
                           {trimmedDataURL_1?<img src={trimmedDataURL_1} className='sign_1_img' alt="signature" />:<></>}
                        </div>
                    </div>

                    {sign_popup_1?<div className='sign_popup_cont'>
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

                    <div className='  tachmoshet_info_type_cont_main_sign'  onClick={()=>set_sign_popup_2(!sign_popup_2)}>
                        <div className='tachmoshet_info_type_title tachmoshet_info_type_title_long'>חתימת מקבל התחמושת</div>   
                        <div className='tachmoshet_info_type_cont tachmoshet_info_type_row_date'>
                           {trimmedDataURL_2?<img src={trimmedDataURL_2} className='sign_1_img' alt="signature" />:<></>}
                        </div>
                    </div>

                    {sign_popup_2?<div className='sign_popup_cont sign_popup_cont_t'>
                    {/* <div className='sign_area_cont'></div> */}

                    <div onClick={()=>clear()} className='edit_sign_btn'>עריכת החתימה</div>

                    <SignatureCanvas ref={sigCanvas_2} penColor="white"/>

                    <div className='save_sign_cont'>
                        <img src={trash_w} onClick={()=>clear_2()} className='trash_w'/>
                        <div className='auto_sign'>חתימה אוטומטית</div>
                        <div className='save_sign' onClick={()=>trim_2()}>שמור</div>

                    </div>


                    {/* {trimmedDataURL && <img src={trimmedDataURL} alt="signature" />} */}
                </div>:<></>}
                </div>
        </div>

        <div className='save_t_btn_cont'>
            <div className='save_t_btn' onClick={()=>save_new_action()}>שמירת תנועה</div>
            <div className='cancel_t_btn'  onClick={()=>props.set_open_popup_new_tachmoshet(false)}>ביטול</div>
        </div>

      </div>
    </>
  )}


export default Popup_new_tachmoshet