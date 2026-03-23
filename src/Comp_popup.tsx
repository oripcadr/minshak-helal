
import './Comp_popup.css'
import p_details_1 from './assets/p_details_1.png'
import more_icon from './assets/more_icon.png'
import trash_w from './assets/trash_w.png'

import close from './assets/close.png'
import comp_img from './assets/comp_img.png'
import { useRef, useState } from 'react'
import SignatureCanvas from 'react-signature-canvas'
import axios from 'axios'



function Comp_popup(props:any) {

    const [sign_popup, set_sign_popup] = useState(false);
    const [sign_popup_1, set_sign_popup_1] = useState(false);
    const [sign_popup_2, set_sign_popup_2] = useState(false);


    const [org_patrol, set_org_patrol] = useState('');
    const [org_tz, set_org_tz] = useState('');
    const [org_role, set_org_role] = useState('');
    const [org_number, set_org_number] = useState('');
    const [org_phone, set_org_phone] = useState('');
    const [valid_date, set_valid_date] = useState('');
    const [m_name, set_m_name] = useState('');
    const [m_tz, set_m_tz] = useState('');
    const [m_role, set_m_role] = useState('');
    const [m_area, set_m_area] = useState('');
    const [m_org_num, set_m_org_num] = useState('');
    const [w_create, set_w_create] = useState('');
    const [kaliber, set_kaliber] = useState('');
    const [w_number, set_w_number] = useState('');
    const [w_type, set_w_type] = useState('');
    const [bullets_num, set_bullets_num] = useState('');
    const [bulets_num_text, set_bulets_num_text] = useState('');
    const [general_carring, set_general_carring] = useState<any>(false);
    const [carring_active_only, set_carring_active_only] = useState<any>(false);
    const [carring_safe, set_carring_safe] = useState<any>(false);
    const [pass_murshim, set_pass_murshim] = useState<any>(false);
    

    const sigCanvas:any = useRef({});
    const sigCanvas_2:any = useRef({});
    const sigCanvas_3:any = useRef({});
    
    const [trimmedDataURL_1, setTrimmedDataURL_1] = useState<any>(null);
    const [trimmedDataURL_2, setTrimmedDataURL_2] = useState<any>(null);
    const [trimmedDataURL_3, setTrimmedDataURL_3] = useState<any>(null);


    function save_new_cert(){
        let payload = new FormData();
    
      payload.append("org_patrol", org_patrol);
      payload.append("org_tz", org_tz);
      payload.append("org_role", org_role);
      payload.append("org_number", org_number);
      payload.append("org_phone", org_phone);
      payload.append("valid_date", valid_date);
      payload.append("m_name", m_name);
      payload.append("m_tz", m_tz);
      payload.append("m_role", m_role);
      payload.append("m_area", m_area);
      payload.append("m_org_num", m_org_num);
      payload.append("w_create", w_create);
      payload.append("kaliber", kaliber);
      payload.append("w_number", w_number);
      payload.append("w_type", w_type);

      payload.append("bullets_num", bullets_num);
      payload.append("bulets_num_text", bulets_num_text);
      payload.append("general_carring", general_carring);
      payload.append("carring_active_only", carring_active_only);
      payload.append("carring_safe", carring_safe);
      payload.append("pass_murshim", pass_murshim);
      payload.append("sing_1", trimmedDataURL_1);
      payload.append("sign_2", trimmedDataURL_2);
      payload.append("sign_3", trimmedDataURL_3);

      axios({
        method: 'post',
        url: globalThis.app.current+'/save_new_cert',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(() => {
        // props.get_all_workers();
        // props.set_edit_worker_popup(false);
      });
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


    
    function clear_3 () {
        sigCanvas_3.current.clear()
    }

    function trim_3 () {
        if (!sigCanvas_3.current || sigCanvas_3.current.isEmpty()) return;

        setTrimmedDataURL_3(
        sigCanvas_3.current
            .getTrimmedCanvas()
            .toDataURL("image/png")
        );

        set_sign_popup(false);     

      //  console.log(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
                        
    }

  return (
    <>
    <div className='worker_popup_cont'>
        <img src={close} className='close_icon' onClick={()=>props.set_show_worker_popup(false)}/>
        <div className='worker_popup_header'>
            <img src={comp_img} className='user_b'/>    
            <div className='user_b_text_cont'>
                <div className='user_b_text_main_r'>תיק נשק</div>
                <div className='user_b_text_submain'>
                  לנשיאת כלי ירייה — ארגון שמירה לפי סעיף 10ג' לחוק כלי הירייה, תש"ט - 1949
                 
                </div>
            </div>    

        </div>

        <div className='worker_popup_top_area'>
            <div className='worker_popup_top_area_right worker_popup_top_area_right_l'>
                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>נתוני המנפיק</div>

            <div className='comp_cols_cont'>
                <div>
                    <div className='details_cont details_cont_first'>
                        <div className='details_cont_r'> מבצע סיור:</div>   
                        <input type="text" className='details_cont_b details_cont_b_cont' placeholder='יוסי כהן' value={org_patrol} onChange={(e)=>set_org_patrol(e.target.value)}/>
                    </div>

                    <div className='details_cont'>
                        <div className='details_cont_r'>ת.ז:</div>   
                         <input type="text" className='details_cont_b details_cont_b_cont'  placeholder=''  value={org_tz} onChange={(e)=>set_org_tz(e.target.value)}/>
                    </div>

                    <div className='details_cont'>
                        <div className='details_cont_r'>תפקיד:</div>   
                         <input type="text" className='details_cont_b details_cont_b_cont'  placeholder=''  value={org_role} onChange={(e)=>set_org_role(e.target.value)}/>
                    </div>

                </div>


                <div>
                    <div className='details_cont details_cont_first'>
                        <div className='details_cont_r'>מספר ארגון:</div>   
                        <input type="text" className='details_cont_b details_cont_b_cont'  placeholder=''  value={org_number} onChange={(e)=>set_org_number(e.target.value)}/>
                    </div>

                    <div className='details_cont'>
                        <div className='details_cont_r'>טלפון ארגוני:</div>   
                        <input type="text" className='details_cont_b details_cont_b_cont'  placeholder='' value={org_phone} onChange={(e)=>set_org_phone(e.target.value)}/>
                    </div>

                    <div className='details_cont'>
                        <div className='details_cont_r'>תוקף רישיון:</div>   
                        <input type="text" className='details_cont_b details_cont_b_cont'  placeholder='' value={valid_date} onChange={(e)=>set_valid_date(e.target.value)} />
                    </div>

                </div>      
            </div>




            </div>

        </div>


     <div className='worker_popup_top_area'>
            <div className='worker_popup_top_area_right worker_popup_top_area_right_l'>
                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>פרטי המורשה</div>

            <div className='comp_cols_cont'>
                <div>
                    <div className='details_cont details_cont_first'>
                        <div className='details_cont_r'>שם מלא:</div>   
                        <input type="text" className='details_cont_b details_cont_b_cont'  placeholder='חיפוש עובד ..' value={m_name} onChange={(e)=>set_m_name(e.target.value)}/>
                    </div>

                    <div className='details_cont'>
                        <div className='details_cont_r'>מספר זהות:</div>   
                         <input type="text" className='details_cont_b details_cont_b_cont'  placeholder='' value={m_tz} onChange={(e)=>set_m_tz(e.target.value)}/>
                    </div>

                    <div className='details_cont'>
                        <div className='details_cont_r'>תפקיד:</div>   
                        <input type="text" className='details_cont_b details_cont_b_cont'  placeholder=''  value={m_role} onChange={(e)=>set_m_role(e.target.value)}/>
                    </div>

                </div>


                <div>
                    <div className='details_cont details_cont_first'>
                        <div className='details_cont_r'>איזור:</div>   
                         <input type="text" className='details_cont_b details_cont_b_cont'  placeholder=''  value={m_area} onChange={(e)=>set_m_area(e.target.value)}/>
                    </div>

                    <div className='details_cont'>
                        <div className='details_cont_r'>מספר רישוי ארגוני:</div>   
                         <input type="text" className='details_cont_b details_cont_b_cont'  placeholder=''  value={m_org_num} onChange={(e)=>set_m_org_num(e.target.value)}/>
                    </div>

       

                </div>      
            </div>




            </div>

        </div>


        <div className='worker_popup_top_area'>
            <div className='worker_popup_top_area_right worker_popup_top_area_right_el'>
                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>פרטי כלי הנשק</div>

            <div className='comp_cols_cont'>
                <div>
                    <div className='details_cont details_cont_first'>
                        <div className='details_cont_r'>יצרן:</div>   
                        <input type="text" className='details_cont_b details_cont_b_cont'  placeholder='חיפוש יצרן ..'  value={w_create} onChange={(e)=>set_w_create(e.target.value)}/>
                    </div>

                    <div className='details_cont'>
                        <div className='details_cont_r'>קליבר:</div>   
                         <input type="text" className='details_cont_b details_cont_b_cont'  placeholder=''  value={kaliber} onChange={(e)=>set_kaliber(e.target.value)}/>
                    </div>

                    <div className='details_cont'>
                        <div className='details_cont_r'>מספר הכלי:</div>   
                         <input type="text" className='details_cont_b details_cont_b_cont'  placeholder=''   value={w_number} onChange={(e)=>set_w_number(e.target.value)}/>
                    </div>

                    <div className='details_cont'>
                        <div className='details_cont_r'>סוג הכלי:</div>   
                         <input type="text" className='details_cont_b details_cont_b_cont'  placeholder=''  value={w_type} onChange={(e)=>set_w_type(e.target.value)}/>
                    </div>

                </div>


                <div>
                    <div className='details_cont details_cont_first'>
                        <div className='details_cont_r'>כמות כדורים (בספרות):</div>   
                         <input type="text" className='details_cont_b details_cont_b_cont'  placeholder=''  value={bullets_num} onChange={(e)=>set_bullets_num(e.target.value)}/>
                    </div>

                    <div className='details_cont'>
                        <div className='details_cont_r'>כמות כדורים (במילים):</div>   
                        <input type="text" className='details_cont_b details_cont_b_cont'  placeholder=''  value={bulets_num_text} onChange={(e)=>set_bulets_num_text(e.target.value)} />
                    </div>

       

                </div>      
            </div>




            </div>

        </div>


     <div className='worker_popup_top_area'>
            <div className='worker_popup_top_area_right worker_popup_top_area_right_l'>
                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>שיטת נשיאה</div>

            <div className='comp_cols_cont comp_cols_cont_checkbox'>
                <div>
                   <div className='checkbox_com_cont'>
                        <input type="checkbox"  checked={general_carring} onChange={()=>set_general_carring(!general_carring)}/>
                        <div className='details_cont_r_l'>נשיאה כללית (כולל מחוץ לשעות הפעילות)</div>
                   </div>

                    <div className='checkbox_com_cont'>
                        <input type="checkbox"  checked={carring_active_only} onChange={()=>set_carring_active_only(!carring_active_only)}/>
                        <div className='details_cont_r_l'>נשיאה רק במסגרת פעילות מורשה (חייב החזרה לכספת בסיום)</div>
                   </div>

                </div>


                <div>
                    <div className='checkbox_com_cont'>
                        <input type="checkbox"  checked={carring_safe} onChange={()=>set_carring_safe(!carring_safe)}/>
                        <div className='details_cont_r_l'>נשיאה רק לכספת אישית באתר החמוש</div>
                   </div>

                    <div className='checkbox_com_cont'>
                        <input type="checkbox" checked={pass_murshim} onChange={()=>set_pass_murshim(!pass_murshim)}/>
                        <div className='details_cont_r_l'>העברה חמה בין מורשים</div>
                   </div>
                </div>      
            </div>




            </div>

        </div>


        <div className='worker_popup_top_area'>
            <div className='worker_popup_top_area_right worker_popup_top_area_right_sign'>
                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>חתימות</div>

            <div className='comp_cols_cont'>
                <div className='details_cont_h_main'>

                    <div className='details_cont details_cont_h' onClick={()=>set_sign_popup_1(!sign_popup_1)}>
                        <div className='details_cont_r'>חתימת בעל הרישיון המיוחד / ממלא מקומו:</div>   
                        <div className='details_cont_b details_cont_b_cont'>{trimmedDataURL_1?<img src={trimmedDataURL_1} className='sign_1_img' alt="signature" />:<></>}</div> 
                    </div>

                    <div className='details_cont details_cont_h' onClick={()=>set_sign_popup_2(!sign_popup_2)}>
                        <div className='details_cont_r'>חותמת ארגון השמירה</div>   
                        <div className='details_cont_b details_cont_b_cont'>{trimmedDataURL_2?<img src={trimmedDataURL_2} className='sign_1_img' alt="signature" />:<></>}</div> 
                    </div>

                    <div className='details_cont details_cont_h' onClick={()=>set_sign_popup(!sign_popup)}>
                        <div className='details_cont_r'>חתימת נושא התעודה</div>   
                        <div className='details_cont_b details_cont_b_cont' >{trimmedDataURL_3?<img src={trimmedDataURL_3} className='sign_1_img' alt="signature" />:<></>}</div> 
                    </div>

                </div>

                {sign_popup?<div className='sign_popup_cont'>
                    <div onClick={()=>clear_3()} className='edit_sign_btn'>עריכת החתימה</div>

                    <SignatureCanvas ref={sigCanvas_3} penColor="white"/>
                    <div className='save_sign_cont'>
                        <img src={trash_w} onClick={()=>clear_3()} />
                        <div className='auto_sign'>חתימה אוטומטית</div>
                        <div className='save_sign'  onClick={()=>trim_3()}>שמור</div>
                    </div>
                </div>:<></>}


                {sign_popup_2?<div className='sign_popup_cont sign_popup_cont_2'>
                      <div onClick={()=>clear_2()} className='edit_sign_btn'>עריכת החתימה</div>

                    <SignatureCanvas ref={sigCanvas_2} penColor="white"/>
                    <div className='save_sign_cont'>
                        <img src={trash_w} onClick={()=>clear_2()} />
                        <div className='auto_sign'>חתימה אוטומטית</div>
                        <div className='save_sign' onClick={()=>trim_2()}>שמור</div>

                    </div>
                </div>:<></>}


                {sign_popup_1?<div className='sign_popup_cont sign_popup_cont_1'>
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

        <div className='bottom_btns_cont'>
            <div className='create_sert_btn'  onClick={()=>{props.set_show_sucess(); save_new_cert()}}>הנפק תעודה</div>
            <div className='save_sert_btn'>שמור טיוטה</div>
            <div className='save_sert_btn' onClick={()=>props.set_show_cert_popup()}>תצוגה מקדימה</div>
        </div>

    </div>

    </>
  )
}

export default Comp_popup