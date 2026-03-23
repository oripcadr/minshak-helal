
import './Certificate_authorization.css'
import close from './assets/close.png'
import comp_img from './assets/comp_img.png'
import cert_3 from './assets/cert_3.png'
import more_icon from './assets/more_icon.png'
import p_details_1 from './assets/p_details_1.png'
import checkbox_empty from './assets/checkbox_empty.png'
import checkbox_full from './assets/checkbox_full.png'
import { useState } from 'react'

function Certificate_authorization_2(props:any) {

    const [docs_1, set_docs_1] = useState(false);
    const [docs_2, set_docs_2] = useState(false);
    const [cert_data, set_cert_data] = useState<any>(props.cert_data);
    const [fake, set_fake] = useState(false);
    const [err_msg, set_err_msg] = useState<any>([]);

    function set_cert_data_func(val:any, type:any){
        let cert_data_t:any=cert_data;
        debugger;
        if(type=='doc_1'){
            cert_data_t['mns']=val;
        }

        if(type=='doc_2'){
            cert_data_t['approved_docs']=val;
        }

       

        set_cert_data(cert_data_t);
        props.set_cert_data(cert_data_t);
        set_fake(!fake);
    }


    function next_page(){
        if (cert_data['mns'] && cert_data['approved_docs'] ){
            props.set_show_certificate_of_authorization_3(true);
            props.set_show_certificate_of_authorization_2(false);
        } else {
            set_err_msg('נא למלא את כל השדות');
        }
    }
   

  return (
    <div className='cert_cont_main'>
        <div className='cert_cont_main_in'>
            <img src={close} onClick={()=>props.set_show_certificate_of_authorization_2(false)} className='close_icon'/>
            <div className='cert_header'>
                <img src={comp_img} className=''/>    
                <div className='user_b_text_cont'>
                    <div className='user_b_text_main_r'>הפקת תעודת הרשאה לנשק</div>
                    <div className='user_b_text_submain'>
                    לנשיאת כלי ירייה — ארגון שמירה לפי סעיף 10ג' לחוק כלי הירייה, תש"ט - 1949
                    
                    </div>
                </div>    

            </div>

            <img src={cert_3} className='cert_1'/>

            {/* <div className='cert_info_cont_4'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>חתימה על מסמכי חובה</div>

                <div className='cert_sign_box'>
                    <div className='cert_sign_box_title_cont'>
                        {trimmedDataURL_1 && trimmedDataURL_2?<div className='check_done'><img src={check} />
                        <div className='cert_sign_box_title'>ראיון אישי</div></div>:
                        <>
                        <div className='cert_sign_box_title'>ראיון אישי</div>
                        <div className='cert_sign_box_subtitle'>ממתין ל-{trimmedDataURL_1==null && trimmedDataURL_2==null?2:trimmedDataURL_1==null || trimmedDataURL_2==null?1:0} חתימות</div></>}
                    </div>

                    <div>
                        <div className='details_cont_b details_cont_b_cont' onClick={()=>set_sign_popup_1(!sign_popup_1)}>{trimmedDataURL_1?<img src={trimmedDataURL_1} className='sign_1_img' alt="signature" />:<></>}</div> 
                        {sign_1_date_time?<div className='sign_date_time'>{sign_1_date_time.split(' ')[1]+ '|'+sign_1_date_time.split(' ')[0] }</div>:""}
                        <div className='cert_input_sign_text'>חתימת בעל הרישיון המיוחד</div>
                    </div>

                    <div>
                        <div className='details_cont_b details_cont_b_cont' onClick={()=>set_sign_popup_2(!sign_popup_2)}>{trimmedDataURL_2?<img src={trimmedDataURL_2} className='sign_1_img' alt="signature" />:<></>}</div> 
                        {sign_2_date_time?<div className='sign_date_time'>{sign_2_date_time.split(' ')[1]+ '|'+sign_2_date_time.split(' ')[0] }</div>:""}

                        <div className='cert_input_sign_text'>חתימת העובד</div>
                    </div>

                </div>

                  <div className='cert_sign_box'>
                    <div className='cert_sign_box_title_cont'>
                    
                        {trimmedDataURL_3 && trimmedDataURL_4?<div className='check_done'><img src={check} />
                        <div className='cert_sign_box_title'>תדריך בטיחות</div></div>:
                        <>
                        <div className='cert_sign_box_title'>תדריך בטיחות</div>
                        <div className='cert_sign_box_subtitle'>ממתין ל-{trimmedDataURL_3==null && trimmedDataURL_4==null?2:trimmedDataURL_3==null || trimmedDataURL_4==null?1:0} חתימות</div></>}
                    </div>

                    <div>
                        <div className='details_cont_b details_cont_b_cont' onClick={()=>set_sign_popup_3(!sign_popup_3)}>{trimmedDataURL_3?<img src={trimmedDataURL_3} className='sign_1_img' alt="signature" />:<></>}</div> 
                        {sign_3_date_time?<div className='sign_date_time'>{sign_3_date_time.split(' ')[1]+ '|'+sign_3_date_time.split(' ')[0] }</div>:""}

                        <div className='cert_input_sign_text'>חתימת בעל הרישיון המיוחד</div>
                    </div>

                    <div>
                        <div className='details_cont_b details_cont_b_cont' onClick={()=>set_sign_popup_4(!sign_popup_4)}>{trimmedDataURL_4?<img src={trimmedDataURL_4} className='sign_1_img' alt="signature" />:<></>}</div> 
                        {sign_4_date_time?<div className='sign_date_time'>{sign_4_date_time.split(' ')[1]+ '|'+sign_4_date_time.split(' ')[0] }</div>:""}

                        <div className='cert_input_sign_text'>חתימת העובד</div>
                    </div>

                </div>


                  <div className='cert_sign_box'>
                    <div className='cert_sign_box_title_cont'>
                       
                        {trimmedDataURL_5 && trimmedDataURL_6?<div className='check_done'><img src={check} />
                        <div className='cert_sign_box_title'>התחייבות התקנת כספת</div></div>:
                        <>
                        <div className='cert_sign_box_title'>התחייבות התקנת כספת</div>
                        <div className='cert_sign_box_subtitle'>ממתין ל-{trimmedDataURL_5==null && trimmedDataURL_6==null?2:trimmedDataURL_5==null || trimmedDataURL_6==null?1:0} חתימות</div></>}
                    </div>

                    <div>
                        <div className='details_cont_b details_cont_b_cont' onClick={()=>set_sign_popup_5(!sign_popup_5)}>{trimmedDataURL_5?<img src={trimmedDataURL_5} className='sign_1_img' alt="signature" />:<></>}</div> 
                        {sign_5_date_time?<div className='sign_date_time'>{sign_5_date_time.split(' ')[1]+ '|'+sign_5_date_time.split(' ')[0] }</div>:""}

                        <div className='cert_input_sign_text'>חתימת בעל הרישיון המיוחד</div>
                    </div>

                    <div>
                        <div className='details_cont_b details_cont_b_cont' onClick={()=>set_sign_popup_6(!sign_popup_6)}>{trimmedDataURL_6?<img src={trimmedDataURL_6} className='sign_1_img' alt="signature" />:<></>}</div> 
                        {sign_6_date_time?<div className='sign_date_time'>{sign_6_date_time.split(' ')[1]+ '|'+sign_6_date_time.split(' ')[0] }</div>:""}

                        <div className='cert_input_sign_text'>חתימת העובד</div>
                    </div>

                </div>


                {sign_popup_3?<div className='sign_popup_cont sign_popup_cont_cert'>
                    <div onClick={()=>clear_3()} className='edit_sign_btn'>עריכת החתימה</div>

                    <SignatureCanvas ref={sigCanvas_3} penColor="white"/>
                    <div className='save_sign_cont'>
                        <img src={trash_w} onClick={()=>clear_3()} />
                        <div className='auto_sign'>חתימה אוטומטית</div>
                        <div className='save_sign'  onClick={()=>trim_3()}>שמור</div>
                    </div>
                </div>:<></>}


                {sign_popup_2?<div className='sign_popup_cont sign_popup_cont_2 sign_popup_cont_cert'>
                      <div onClick={()=>clear_2()} className='edit_sign_btn'>עריכת החתימה</div>

                    <SignatureCanvas ref={sigCanvas_2} penColor="white"/>
                    <div className='save_sign_cont'>
                        <img src={trash_w} onClick={()=>clear_2()} />
                        <div className='auto_sign'>חתימה אוטומטית</div>
                        <div className='save_sign' onClick={()=>trim_2()}>שמור</div>

                    </div>
                </div>:<></>}


                {sign_popup_1?<div className='sign_popup_cont sign_popup_cont_1 sign_popup_cont_cert'>

                    <div onClick={()=>clear()} className='edit_sign_btn'>עריכת החתימה</div>

                    <SignatureCanvas ref={sigCanvas} penColor="white"/>

                    <div className='save_sign_cont'>
                        <img src={trash_w} onClick={()=>clear()} className='trash_w'/>
                        <div className='auto_sign'>חתימה אוטומטית</div>
                        <div className='save_sign' onClick={()=>trim()}>שמור</div>

                    </div>


                </div>:<></>}



                {sign_popup_4?<div className='sign_popup_cont sign_popup_cont_1 sign_popup_cont_cert'>

                    <div onClick={()=>clear_4()} className='edit_sign_btn'>עריכת החתימה</div>

                    <SignatureCanvas ref={sigCanvas_4} penColor="white"/>

                    <div className='save_sign_cont'>
                        <img src={trash_w} onClick={()=>clear_4()} className='trash_w'/>
                        <div className='auto_sign'>חתימה אוטומטית</div>
                        <div className='save_sign' onClick={()=>trim_4()}>שמור</div>

                    </div>


                </div>:<></>}
                

                

                {sign_popup_5?<div className='sign_popup_cont sign_popup_cont_1 sign_popup_cont_cert'>

                    <div onClick={()=>clear_5()} className='edit_sign_btn'>עריכת החתימה</div>

                    <SignatureCanvas ref={sigCanvas_5} penColor="white"/>

                    <div className='save_sign_cont'>
                        <img src={trash_w} onClick={()=>clear_5()} className='trash_w'/>
                        <div className='auto_sign'>חתימה אוטומטית</div>
                        <div className='save_sign' onClick={()=>trim_5()}>שמור</div>

                    </div>


                </div>:<></>}



                {sign_popup_6?<div className='sign_popup_cont sign_popup_cont_1 sign_popup_cont_cert'>

                    <div onClick={()=>clear_6()} className='edit_sign_btn'>עריכת החתימה</div>

                    <SignatureCanvas ref={sigCanvas_6} penColor="white"/>

                    <div className='save_sign_cont'>
                        <img src={trash_w} onClick={()=>clear_6()} className='trash_w'/>
                        <div className='auto_sign'>חתימה אוטומטית</div>
                        <div className='save_sign' onClick={()=>trim_6()}>שמור</div>

                    </div>


                </div>:<></>}

            </div> */}


            <div className='cert_info_cont_5'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>בדיקת MNS ומסמכים</div>

                <div className={'cert_docs_check_cont '} onClick={()=>{set_docs_1(!docs_1);set_cert_data_func(!docs_1,"doc_1")}}>
                    {!docs_1?<img src={checkbox_empty} />:<img src={checkbox_full} />}
                    <div className={'cert_docs_check '  + (docs_1?"cert_docs_check_cont_selected":"")}>
                        <div className='cert_docs_check_title'>הנני מצהיר כי העובד אינו מחזיק בנשק ארגוני באף גוף אחר</div>
                        <div className='cert_docs_check_subtitle'>כולל המשרד לביטחון פנים (MNS)</div>
                    </div>

                </div>

                
                <div className='cert_docs_check_cont' onClick={()=>{set_docs_2(!docs_2);set_cert_data_func(!docs_2,"doc_2")}}>
                    {!docs_2?<img src={checkbox_empty} />:<img src={checkbox_full} />}
                    <div className={'cert_docs_check '  + (docs_2?"cert_docs_check_cont_selected":"")}>
                        <div className='cert_docs_check_title'>כל המסמכים אומתו ונבדקו</div>
                        <div className='cert_docs_check_subtitle'>תעודת זהות, הצהרת בריאות, ספח</div>
                    </div>

                </div>


            </div>

                   <div className='cert_info_cont_6_cont'>
            <div className='cert_info_cont_6'>

                {/* <img src={more_icon} className='w_more_icon'/> */}
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>פרטי המאבטח</div>

                <div className='cert_info_cont_6_title_cont cert_info_cont_6_title_cont_top'>
                    <div className='cert_info_cont_6_title'>
                        שם מלא:
                    </div>
                    <div className='cert_info_cont_6_info'>{cert_data.worker_name}</div>
                </div>

                <div className='cert_info_cont_6_title_cont'>
                    <div className='cert_info_cont_6_title'>
                       ת.ז:
                    </div>
                    <div className='cert_info_cont_6_info'>{cert_data.t_z}</div>
                </div>

                <div className='cert_info_cont_6_title_cont'>
                    <div className='cert_info_cont_6_title'>
                    רישיון נשק ארגוני:
                    </div>
                    <div className='cert_info_cont_6_info'>{cert_data.organization_mun}</div>
                </div>

                <div className='cert_info_cont_6_title_cont'>
                    <div className='cert_info_cont_6_title'>
                    תוקף:
                    </div>
                    <div className='cert_info_cont_6_info'>{cert_data.cert_date ? cert_data.cert_date.split('T')[0]:""}</div>
                </div>

                <div className='cert_info_cont_6_title_cont'>
                    <div className='cert_info_cont_6_title'>
                    אתרים:
                    </div>
                    <div className='cert_info_cont_6_info'>{cert_data.snif}</div>
                </div>

            </div>


            <div className='cert_info_cont_6'>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>פרטי הנשק</div>


                <div className='cert_info_cont_6_title_cont cert_info_cont_6_title_cont_top'>
                    <div className='cert_info_cont_6_title'>
                      מספר סידורי:
                    </div>
                    <div className='cert_info_cont_6_info'>{cert_data.neshek ? cert_data.neshek.number:""}</div>
                </div>

                <div className='cert_info_cont_6_title_cont'>
                    <div className='cert_info_cont_6_title'>
                      סוג:
                    </div>
                    <div className='cert_info_cont_6_info'>
                       {cert_data.neshek ?cert_data.neshek.type:""}</div>
                </div>

                <div className='cert_info_cont_6_title_cont'>
                    <div className='cert_info_cont_6_title'>
                    קליבר:
                    </div>
                    <div className='cert_info_cont_6_info'>{cert_data.neshek ?cert_data.neshek.kaliber:""}mm</div>
                </div>

                <div className='cert_info_cont_6_title_cont'>
                    <div className='cert_info_cont_6_title'>
                   כספת:
                    </div>
                    <div className='cert_info_cont_6_info'>{cert_data.neshek ?cert_data.neshek.place:""}</div>
                </div>

                <div className='cert_info_cont_6_title_cont'>
                    <div className='cert_info_cont_6_title'>
                   מספר מחסניות:
                    </div>
                    <div className='cert_info_cont_6_info'>{cert_data.mahsanit_count ?cert_data.mahsanit_count:""}</div>
                </div>
                
                
                <div className='cert_info_cont_6_title_cont'>
                    <div className='cert_info_cont_6_title'>
                  מספר כדורים:
                    </div>
                    <div className='cert_info_cont_6_info'>{cert_data.kadurim_count}</div>
                </div>

            </div>

            <div className='cert_info_cont_8'>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>תקופת הרשאה</div>


                <div className='cert_info_cont_6_title_cont cert_info_cont_6_title_cont_top'>
                    <div className='cert_info_cont_6_title'>
                   תאריך התחלה:
                    </div>
                    <div className='cert_info_cont_6_info'>{cert_data.cert_start}</div>
                </div>

                <div className='cert_info_cont_6_title_cont'>
                    <div className='cert_info_cont_6_title'>
                    תאריך סיום:
                    </div>
                    <div className='cert_info_cont_6_info'>{cert_data.cert_end}</div>
                </div>


            </div>


        </div>

       
            <div className='cancel_cert_btn_cont cancel_cert_btn_cont_2'>
                <div className="cancel_cert_btn" onClick={()=>{props.set_show_certificate_of_authorization_1(true);props.set_show_certificate_of_authorization_2(false)}}>חזור</div>
                <div className="next_cert_btn" onClick={()=>next_page()}>הבא</div>
            </div>

            {err_msg?<div className='err_msg'>{err_msg}</div>:<></>}
        </div>
        
    </div>
  )
}

export default Certificate_authorization_2