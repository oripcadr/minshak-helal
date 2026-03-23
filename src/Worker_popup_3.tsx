
import './Worker_popup.css'

import p_details_1 from './assets/p_details_1.png'

import more_icon from './assets/more_icon.png'
import download_icon from './assets/download_icon.png'
import refresh from './assets/refresh.png'
import g_dot from './assets/g_dot.png'
import r_dot from './assets/r_dot.png'
import y_dot from './assets/y_dot.png'
import upload from './assets/upload.png'

 import { useState } from 'react'

function Worker_popup_3(props:any) {

  const [show_upload_doc_popup, set_show_upload_doc_popup] = useState(false);


  
      function download_file(file_name:any){
        fetch(globalThis.app.current+'/'+file_name)
            .then(response => {
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = file_name;
                    a.click();
            });
        });
      }

  return (
    <>
        <div className='personal_d_cont_main_3'>
            <img src={more_icon} className='w_more_icon'/>
            <img src={p_details_1} className='p_details_1'/>
            <div className='p_details_title'>מסמכים אישיים</div>

            <div className='upload_doc_btn' onClick={()=>set_show_upload_doc_popup(true)}>העלאת מסמך</div>
         
         <div className='doc_box_cont_main'>
            <div className='doc_box_cont'>
                <img src={download_icon} className='download_icon' onClick={()=>download_file(props.worker.doc_1)}/>
                <div className='doc_box_title'>{props.worker.doc_1}</div>
                <div className='doc_box_subtitle'>{props.worker.doc_1_date.split('T')[0]}</div>
                <img src={refresh} className='refresh_icon'/>
            </div>

            <div className='doc_box_cont'>
                <img src={download_icon} className='download_icon'  onClick={()=>download_file(props.worker.doc_2)}/>
                <div className='doc_box_title'>{props.worker.doc_2}</div>
                <div className='doc_box_subtitle'>{props.worker.doc_2_date.split('T')[0]}</div>
                <img src={refresh} className='refresh_icon'/>
            </div>

            <div className='doc_box_cont'>
                <img src={download_icon} className='download_icon'  onClick={()=>download_file(props.worker.doc_3)}/>
                <div className='doc_box_title'>{props.worker.doc_3}</div>
                <div className='doc_box_subtitle'>{props.worker.doc_3_date.split('T')[0]}</div>
                <img src={refresh} className='refresh_icon'/>
            </div>

            <div className='doc_box_cont'>
                <img src={download_icon} className='download_icon'/>
                <div className='doc_box_title'> </div>
                <div className='doc_box_subtitle'></div>
                <img src={refresh} className='refresh_icon'/>
            </div>

         </div>

        </div>


        <div className='personal_d_cont_main_3'>
            <img src={more_icon} className='w_more_icon'/>
            <img src={p_details_1} className='p_details_1'/>
            <div className='p_details_title'>מסמכי רישוי</div>

            <div className='upload_doc_btn' onClick={()=>set_show_upload_doc_popup(true)}>העלאת מסמך</div>

     
         <div className='doc_box_cont_main'>
            <div className='doc_box_cont'>
                <img src={download_icon} className='download_icon'/>
                <div className='doc_box_title'>תעודת הרשאה לנשק</div>
                <div className='doc_box_subtitle'>
                    <img src={g_dot} />
                    בתוקף עד 06/2026

                </div>
                <img src={refresh} className='refresh_icon'/>
            </div>

            <div className='doc_box_cont'>
                <img src={download_icon} className='download_icon'/>
                <div className='doc_box_title'>טופס תדריך בטיחות</div>
                <div className='doc_box_subtitle'>
                     <img src={r_dot} />
                    פג תוקף</div>
                <img src={refresh} className='refresh_icon'/>
            </div>

            <div className='doc_box_cont'>
                <img src={download_icon} className='download_icon'/>
                <div className='doc_box_title'>ריענון ירי</div>
                <div className='doc_box_subtitle'>
                    <img src={g_dot} />
                    בתוקף עד 06/2026</div>
                <img src={refresh} className='refresh_icon'/>
            </div>

            <div className='doc_box_cont'>
                <img src={download_icon} className='download_icon'/>
                <div className='doc_box_title'>אישור העסקה</div>
                <div className='doc_box_subtitle'>
                     <img src={y_dot} />
                    יפוג תוקף בעוד 27 יום</div>
                <img src={refresh} className='refresh_icon'/>
            </div>

         </div>

        </div>

        {show_upload_doc_popup?<div className='upload_doc_popup_cont'>
            
                <div className='settings_box_line_cont_w_d settings_box_line_cont_sup'>
                    <div className='settings_box_title_in'>שם המסמך</div>
                    <input className='settings_box_input settings_box_input_sup settings_box_input_doc' type="text" />
                </div>   

                <div className='settings_box_line_cont_w_d settings_box_line_cont_sup'>
                    <div className='settings_box_title_in'>תוקף המסמך</div>
                    <input className='settings_box_input settings_box_input_sup settings_box_input_doc' type="text" />
                </div>  


                <div className='settings_box_line_cont_w_d settings_box_line_cont_sup'>
                    <div className='settings_box_title_in'>תייג מסמך כ</div>
                    <div className='top_btn'>תעודת השראה</div>
                    <div className='top_btn'>ריענון ירי</div>

                </div>  

                
                <div className='settings_box_line_cont_w_d settings_box_line_cont_sup'>
                    <div className='top_btn'>קורס</div>
                    <div className='top_btn'>תעודה מזהה</div>
                    <div className='top_btn'>ספח</div>

                </div>  

                <div className='upload_file_cont'>
                    <img src={upload} className='upload_file_img'/>
                    <div className='upload_file_cont_text'>לחץ להעלאת קבצים או גרור לכאן
PDF, DWG, PNG עד 10MB</div>
                </div>

                    <div className='upload_docfile_btn' onClick={()=>set_show_upload_doc_popup(false)}>העלה מסמך</div>



        </div>:<></>}

    </>
  )
}

export default Worker_popup_3