import './Popup_sup_report.css'


import close from './assets/close.png'
import more_icon from './assets/more_icon.png'
import p_details_1 from './assets/p_details_1.png'

import site_s from './assets/site_s.png'
import y_dot from './assets/y_dot.png'
import add_sup_icon from './assets/add_sup_icon.png'
import user_s_1 from './assets/user_s_1.png'
import download_s from './assets/download_s.png'
import sign from './assets/sign.png'
import { useEffect, useState } from 'react'
import axios from 'axios'

// import { useState } from 'react'

function Popup_sup_report(props:any) {

    
    const [critic] = useState(props.show_sup_report); 
    const [subjects] = useState(props.show_sup_report.subject.split('|')); 
    const [fix_criticism, set_fix_criticism] = useState([]); 

    // const [show_kaliber_popup, set_show_kaliber_popup] = useState(false); 
    // const [show_worker_popup, set_show_worker_popup] = useState(false);

    useEffect(() => {
        get_fix_criticism_by_id();
    }, []);
    
    function get_fix_criticism_by_id(){
       let payload = new FormData();
    
       payload.append("criticism_id", critic.id);

      axios({
        method: 'post',
        url: globalThis.app.current+'/get_fix_criticism_by_id',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(res => {

        if (res.data.recordset.length>0){
           set_fix_criticism(res.data.recordset);
        } 
          
      });
    }

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
      <div className='worker_popup_cont sup_report_pupop' >
        <img src={close} className='close_icon' onClick={()=>props.set_show_sup_report(false)}/>
        <div className='worker_popup_header'>
            <img src={add_sup_icon} className='user_b'/>    
            <div className='user_b_text_cont'>
                <div className='user_b_text_main_tachmoshet'>דו"ח פיקוח -{critic.place} </div>
                <div className='user_info_rep_cont'>
                    <img src={user_s_1} />
                    <div>{critic.worker}   {critic.date.split('T')[0]} </div>
                </div>
            </div>    
        </div>

        <div className='tachmoshet_info_cont report_subject_cont'>

            <img src={more_icon} className='w_more_icon'/>
            <img src={p_details_1} className='p_details_1'/>
            <div className='p_details_title'>נושאי הביקורת</div>
            
            <div className='top_btn_cont_sup_report'>
                {subjects && subjects.map((subject:any) => (
                <>
                {subject!=''?
                    <div className='top_btn top_btn_sup'>{subject}</div>:<></>}
                </>
                ))}
                {/* <div className='top_btn top_btn_sup'>דיוק בשעות</div>
                <div className='top_btn top_btn_sup'>תקינות ציוד</div> */}
            </div>


                <div className='p_details_subtitle p_details_subtitle_sup'>ציון הביקורת</div>
                <div className='sup_degree_cont'>
                    <div className='degree'>{critic.score}</div>
                    <div className='status'>סטטוס</div>
                </div>


                <div className='p_details_subtitle p_details_subtitle_sup'>הערות</div>

                <div className='p_details_subtitle_b'>{critic.comments}</div>

                <div className='p_details_subtitle_1'>מסמכים</div>

                <div className='download_doc_cont_main_sup '>
                    <div className='download_doc_cont'>
                        <img src={download_s} onClick={()=>download_file(critic.doc_path)}/>
                        <div>{critic.doc_path}</div>
                    </div>

                    {/* <div className='download_doc_cont'>
                        <img src={download_s} />
                        <div>מסמך_1.pdf</div>
                    </div>

                     <div className='download_doc_cont'>
                        <img src={download_s} />
                        <div>מסמך_1.pdf</div>
                    </div>

                     <div className='download_doc_cont'>
                        <img src={download_s} />
                        <div>מסמך_1.pdf</div>
                    </div> */}

                </div>   
                     

        </div>

        <div className='tachmoshet_info_cont tachmoshet_info_cont_fix_sup_report'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>ליקויים שעלו</div>

                {fix_criticism && fix_criticism.map((fix:any) => (
                <div className='fix_sup_report_box'>
                    <div className="def_cont_top">
                        <img src={site_s} />
                        <div>{critic.place}</div>

                        <img src={y_dot} />

                        <div>{fix.status}</div>

                        <div className="def_cont_top_date">{critic.date.split('T')[0]}</div>
                    </div>

                    <div className='fix_sup_report_text'>{fix.fix_desc}</div>

                    <div className='close_fix_rep_btn'>סגור ליקוי</div>

                </div>
                ))}

        </div>


        <div className='tachmoshet_info_cont tachmoshet_info_cont_sign tachmoshet_info_cont_p sup_report_sign_cont'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>חתימה</div>

                <div className='tachmoshet_info_type_cont_main_row'>
                    <div className='  tachmoshet_info_type_cont_main_sign_report'>
                        <div className='tachmoshet_info_type_title'>חתימת המפקח</div>   
                        <div className='tachmoshet_info_type_cont tachmoshet_info_type_row_date tachmoshet_info_type_row_sign'>
                           <img src={critic.sign} className='sign_size'/>
                        </div>
                    </div>

                </div>
        </div>



      </div>
    </>
  )}


export default Popup_sup_report