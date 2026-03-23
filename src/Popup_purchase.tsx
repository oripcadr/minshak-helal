import './Popup_purchase.css'
import tachmoshet from './assets/tachmoshet.png'

import close from './assets/close.png'
import more_icon from './assets/more_icon.png'
import p_details_1 from './assets/p_details_1.png'
 import white_dot from './assets/white_dot.png'
 import user_s_1 from './assets/user_s_1.png'
import download_s from './assets/download_s.png'
import { useState } from 'react'

// import { useState } from 'react'

function Popup_purchase(props:any) {

    // const [show_kaliber_popup, set_show_kaliber_popup] = useState(false); 
    // const [show_worker_popup, set_show_worker_popup] = useState(false);
    const [files] = useState(props.munition.files?props.munition.files.split('|'):'');
    

    

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
      <div className='worker_popup_cont purchase_popup' >
        <img src={close} className='close_icon' onClick={()=>props.set_show_purchase_popup(false)}/>
        <div className='worker_popup_header'>
            <img src={tachmoshet} className='user_b'/>    
            <div className='user_b_text_cont'>
                <div className='user_b_text_main_tachmoshet'>{props.munition.action}</div>
                <div className='text_sub_tachmoshet'>אסמכתא {props.munition.asmachta}</div>
            </div>    
        </div>

        <div className='tachmoshet_info_cont tachmoshet_info_cont_p'>

            <img src={more_icon} className='w_more_icon'/>
            <img src={p_details_1} className='p_details_1'/>
            <div className='p_details_title'>פרטי התנועה</div>
            <div className='perchase_cont perchase_cont_p'>{props.munition.action}</div>
            <div className='p_count_cont'>
                <div className='p_count'>{props.munition.count}</div>
                <div className='p_count_text'>כדורים  {props.munition.kaliber}</div>
            </div>

            <div className='perchase_cont_time'>
                <div>{props.munition.date.split('T')[0]}</div>
                <img src={white_dot} />
                <div>{props.munition.time.split('T')[1].split('.')[0]}</div>
            </div>

            <div className='worker_popup_opt worker_popup_opt_p'>{props.munition.worker} 
                <img src={user_s_1} />
            </div>

        </div>

         <div className='tachmoshet_info_cont tachmoshet_info_cont_p'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>פרטים נוספים</div>

                <div className='p_details_subtitle'>הערות</div>

                <div className='p_details_subtitle_b'>{props.munition.comments}</div>

                <div className='p_details_subtitle_1'>מסמכים</div>

                <div className='download_doc_cont_main'>

                    {files && files.map((file:any) => (
                    <>
                    {file?
                        <div className='download_doc_cont' onClick={()=>download_file(file)}>
                            <img src={download_s} />
                            <div>{file}</div>
                        </div>:<></>}
                    </>
                    ))}

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
                    </div>

                     <div className='download_doc_cont'>
                        <img src={download_s} />
                        <div>מסמך_1.pdf</div>
                    </div> */}

                </div>

        </div>

        <div className='tachmoshet_info_cont tachmoshet_info_cont_sign tachmoshet_info_cont_p'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>חתימה</div>

                <div className='tachmoshet_info_type_cont_main_row'>
                    <div className='  tachmoshet_info_type_cont_main_sign'>
                        <div className='tachmoshet_info_type_title tachmoshet_info_type_title_long'>חתימת המפקח</div>   
                        <div className='tachmoshet_info_type_cont tachmoshet_info_type_row_date tachmoshet_info_type_row_sign'>
                            <img src={props.munition.sign_1} className='sign_1_img' alt="signature" /> 
                        </div>
                    </div>

                    <div className='  tachmoshet_info_type_cont_main_sign'>
                        <div className='tachmoshet_info_type_title tachmoshet_info_type_title_long'>חתימת מקבל התחמושת</div>   
                        <div className='tachmoshet_info_type_cont tachmoshet_info_type_row_date tachmoshet_info_type_row_sign'>
                            <img src={props.munition.sign_2} className='sign_1_img' alt="signature" /> 
                        </div>
                    </div>
                </div>
        </div>


      </div>
    </>
  )}


export default Popup_purchase