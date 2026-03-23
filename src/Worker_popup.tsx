
import './Worker_popup.css'
import user_b from './assets/user_b.png'
import msg_icon from './assets/msg_icon.png'
import phone_icon from './assets/phone_icon.png'
import p_details_1 from './assets/p_details_1.png'
import more_icon from './assets/more_icon.png'
import close from './assets/close.png'
import cross from './assets/cross.png'
import g_dot from './assets/g_dot.png'
import r_dot from './assets/r_dot.png'
import exclamation from './assets/exclamation.png'
import check from './assets/check.png'
import { useState } from 'react'
import Worker_popup_2 from './Worker_popup_2'
import Worker_popup_3 from './Worker_popup_3'
import Worker_popup_4 from './Worker_popup_4'
import Worker_popup_5 from './Worker_popup_5'
import Worker_popup_6 from './Worker_popup_6'
import Worker_popup_7 from './Worker_popup_7'
import upload from './assets/upload.png'
import Worker_popup_8 from './Worker_popup_8'
import axios from 'axios'

function Worker_popup(props:any) {

    const [tab_selected, set_tab_selected] = useState(1);
    const [show_update_popup, set_show_update_popup] = useState(false);
    const [show_status_option, set_show_status_option] = useState(false);
    
    function update_worker_status(val:any){

      let payload = new FormData();
      payload.append('status',val);
      payload.append('id',props.worker.id);

      axios({
        method: 'post',
        url: globalThis.app.current+'/update_worker_status',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(() => {
        set_show_status_option(false);
        props.worker.status=val;
      })

    }

  return (
    <>
    <div className='worker_popup_cont_g'>
        <img src={close} onClick={()=>props.set_show_worker_popup(false)} className='close_icon'/>
        <div className='worker_popup_header'>
            <img src={props.worker.user_image?globalThis.app.current+'/'+props.worker.user_image:user_b} className='user_b user_b_img'/>    
            <div className='user_b_text_cont_w'>
                <div className='user_b_text_main'>{props.worker.name}</div>
                <div className='user_b_text_submain'>{props.worker.role}</div>
                <div className='user_b_text_submain'>{props.worker.snif}</div>
            </div>    
            
            <img src={msg_icon} />
            <img src={phone_icon} />
            <div className='worker_prd_btn'>הפק תיק עובד</div>

        </div>

        <div className='top_btn_cont_worker'>
            <div className={'top_btn_w ' +(tab_selected==1?"top_btn_selected":"")} onClick={()=>set_tab_selected(1)}>מידע כללי</div>
            <div className={'top_btn_w ' +(tab_selected==2?"top_btn_selected":"")} onClick={()=>set_tab_selected(2)}>כספים ותשלומים</div>
            <div className={'top_btn_w ' +(tab_selected==3?"top_btn_selected":"")} onClick={()=>set_tab_selected(3)}>מסמכים</div>
            <div className={'top_btn_w ' +(tab_selected==4?"top_btn_selected":"")} onClick={()=>set_tab_selected(4)}>סידור עבודה</div>
            <div className={'top_btn_w ' +(tab_selected==5?"top_btn_selected":"")} onClick={()=>set_tab_selected(5)}>הכשרות וריענונים</div>
            <div className={'top_btn_w ' +(tab_selected==6?"top_btn_selected":"")} onClick={()=>set_tab_selected(6)}>הרשאות</div>
            <div className={'top_btn_w ' +(tab_selected==7?"top_btn_selected":"")} onClick={()=>set_tab_selected(7)}>התראות</div>
            <div className={'top_btn_w ' +(tab_selected==8?"top_btn_selected":"")} onClick={()=>set_tab_selected(8)}>ציוד אישי</div>
        </div>


        {tab_selected==1?<>
        <div className='personal_d_cont_main'>
            <div className='personal_d_cont'>
                 <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>פרטים אישיים</div>

                <div className='settings_box_line_cont_w settings_box_line_cont_sup'>
                    <div className='settings_box_title_in'>שם מלא</div>
                    <input className='settings_box_input settings_box_input_sup' type="text" value={props.worker.name}/>
                </div>    

                <div className='settings_box_line_cont_w settings_box_line_cont_sup'>
                    <div className='settings_box_title_in'>תעודת זהות</div>
                    <input className='settings_box_input settings_box_input_sup' type="text" value={props.worker.t_z}/>
                </div> 

                <div className='settings_box_line_cont_w settings_box_line_cont_sup'>
                    <div className='settings_box_title_in'>טלפון</div>
                    <input className='settings_box_input settings_box_input_sup' type="text" value={props.worker.phone}/>
                </div> 

                 <div className='settings_box_line_cont_w settings_box_line_cont_sup'>
                    <div className='settings_box_title_in'>כתובת</div>
                    <input className='settings_box_input settings_box_input_sup' type="text" value={props.worker.address}/>
                </div> 

                 <div className='settings_box_line_cont_w settings_box_line_cont_sup'>
                    <div className='settings_box_title_in'>אימייל</div>
                    <input className='settings_box_input settings_box_input_sup' type="text" value={props.worker.email}/>
                </div> 

                <div className='settings_box_line_cont_w settings_box_line_cont_sup'>
                    <div className='settings_box_title_in'>תאריך לידה</div>
                    <input className='settings_box_input settings_box_input_sup' type="text" value={props.worker.b_date ?props.worker.b_date.split('T')[0]:""}/>
                </div>

            </div>

            <div className='personal_d_cont'>
                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>פרטים תעסוקתיים</div>


                <div className='settings_box_line_cont_w settings_box_line_cont_sup'>
                    <div className='settings_box_title_in'>פקיד</div>
                    <input className='settings_box_input settings_box_input_sup' type="text" value={props.worker.role}/>
                </div>    

                <div className='settings_box_line_cont_w settings_box_line_cont_sup'>
                    <div className='settings_box_title_in'>סניף/אתר</div>
                    <input className='settings_box_input settings_box_input_sup' type="text" value={props.worker.snif}/>
                </div>  

                <div className='settings_box_line_cont_w settings_box_line_cont_sup'>
                    <div className='settings_box_title_in'>סטטוס עובד</div>
                    <div className='settings_box_input settings_box_input_sup settings_box_input_sup_s' onClick={()=>set_show_status_option(true)}>
                       {props.worker.status=='פעיל'?<img src={g_dot} />:<img src={r_dot} />}
                       {props.worker.status}
                    </div>
                </div>   

                {show_status_option?<div className='status_option_cont'>
                    <div className='settings_box_input_sup_op' onClick={()=>update_worker_status('פעיל') }> 
                        <img src={g_dot} />
                        פעיל
                    </div>

                    <div className='settings_box_input_sup_op' onClick={()=>update_worker_status('לא פעיל')}> 
                        <img src={r_dot} />
                        לא פעיל
                    </div>
                </div>:<></>}

                <div className='settings_box_line_cont_w settings_box_line_cont_sup'>
                    <div className='settings_box_title_in'>תאריך התחלה</div>
                    <input className='settings_box_input settings_box_input_sup' type="text"/>
                </div>    

                <div className='settings_box_line_cont_w settings_box_line_cont_sup'>
                    <div className='settings_box_title_in'>ותק</div>
                    <input className='settings_box_input settings_box_input_sup' type="text"/>
                </div>    

            </div>

        </div>


        <div className='personal_d_cont_2'>
                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>סטטוס הכשרות חובה</div>

                <div className='hahshara_cont_main'>
                    <div className='hahshara_1_cont'>
                        <div className='check_cont'>
                            <img src={check} />
                            <div>
                                <div className='check_b'>ריענון ירי</div>
                                <div>בתוקף עד 15/08/2025</div>
                            </div>

                        </div>

                        <div className='update_h_btn' onClick={()=>set_show_update_popup(true)}>עדכן</div>

                    </div>

                    <div className='hahshara_2_cont'>
                        <div className='check_cont'>
                            <img src={exclamation} />
                            <div>
                                <div>תדריך בטיחות</div>
                                <div>דורש ריענון בעוד 45 ימים</div>
                            </div>
                        </div>

                        <div className='update_h_btn_2'>עדכן</div>

                    </div>

                    <div className='hahshara_3_cont'>
                        <div className='check_cont'>
                            <img src={cross} />
                            <div>
                                <div>עזרה ראשונה</div>
                                <div>פג תוקף - דורש ריענון מיידי</div>
                            </div>
                            
                        </div>
                        <div className='update_h_btn_3'>עדכן</div>

                    </div>

                </div>

            {show_update_popup?<div className='update_popup_cont'>
                <div className='update_popup_cont_title'>עדכון ריענון ירי</div>
                <img src={close} onClick={()=>set_show_update_popup(false)} className='close_icon'/>

                <div className='settings_box_line_cont_w settings_box_line_cont_sup'>
                    <div className='settings_box_title_in'>תאריך ביצוע חדש</div>
                    <input className='settings_box_input settings_box_input_sup' type="text"/>
                </div>   

                <div className='settings_box_line_cont_w settings_box_line_cont_sup'>
                    <div className='settings_box_title_in'>תאריך תוקף</div>
                    <input className='settings_box_input settings_box_input_sup' type="text"/>
                </div>  

                <div className='settings_box_line_cont_w settings_box_line_cont_sup'>
                    <div className='settings_box_title_in'>גורם מאשר</div>
                    <select className='settings_box_input settings_box_input_sup' >
                        <option>בחירת גורם</option>
                    </select>
                </div> 

                <textarea placeholder='הערות' className='comments_area'></textarea>

                <div className='tachmoshet_info_docs tachmoshet_info_docs_update'>
                    <img src={upload} className='upload_icon'/>
                    <div className='upload_icon_text'>גרור קבצים לכאן או לחץ להעלאה</div>
                </div>

                
                <input className='settings_box_input settings_box_input_sup settings_box_input_sup_update' type="text"/>
                <div className='sign_upload_text'>חתימת המפקח</div>

                <div className='update_popup_btn' onClick={()=>set_show_update_popup(false)}>עדכן</div>

            </div>:<></>}


        </div></>:<></>}


        {tab_selected==2?<Worker_popup_2 worker={props.worker}></Worker_popup_2>:<></>}

        {tab_selected==3?<Worker_popup_3 worker={props.worker}></Worker_popup_3>:<></>}

        {tab_selected==4?<Worker_popup_4></Worker_popup_4>:<></>}

        {tab_selected==5?<Worker_popup_5></Worker_popup_5>:<></>}
        {tab_selected==6?<Worker_popup_6></Worker_popup_6>:<></>}
        {tab_selected==7?<Worker_popup_7></Worker_popup_7>:<></>}

        {tab_selected==8?<Worker_popup_8  worker={props.worker} set_show_worker_popup={props.set_show_worker_popup}></Worker_popup_8>:<></>}

        {/* <div className='worker_popup_top_area'>
            <div className='worker_popup_top_area_right'>
                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>פרטים אישיים</div>

                <div className='details_cont details_cont_first'>
                    <div className='details_cont_r'>מספר טלפון:</div>   
                    <div className='details_cont_b'>050-1234567</div> 
                </div>

                <div className='details_cont'>
                    <div className='details_cont_r'>כתובת:</div>   
                    <div className='details_cont_b'>שפרינצק 30, דירה 12, חולון</div> 
                </div>

                <div className='details_cont'>
                    <div className='details_cont_r'>ותק:</div>   
                    <div className='details_cont_b'>3 שנים ו-4 חודשים</div> 
                </div>

            </div>

            <div className='worker_popup_top_area_right'>
                  <img src={more_icon} className='w_more_icon'/>
                  <img src={p_details_2} className='p_details_1'/>
                  <div className='p_details_title'>שיוך ותפקידים</div>


                <div className='details_cont details_cont_first'>
                    <div className='details_cont_r'>תפקיד נוכחי:</div>   
                    <div className='details_cont_b'>אחמ״ש</div> 
                </div>

                <div className='details_cont'>
                    <div className='details_cont_r'>יחידה/סניף:</div>   
                    <div className='details_cont_b'>סניף מרכז תל אביב</div> 
                </div>

                <div className='details_cont'>
                    <div className='details_cont_r'>מנהל ישיר:</div>   
                    <div className='details_cont_b'>יוסי כהן</div> 
                </div>

            </div>

        </div>

        <div className='worker_popup_mid_area'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_3} className='p_details_1'/>
                <div className='p_details_title'>מסמכים ורישיונות</div>

                <div className='docs_cont'>
                    <div className='docs_box' onClick={()=>set_show_cert_popup(!show_cert_popup)}>
                        <img src={download_icon} className='download_icon'/>
                        <div className='docs_box_text'> (מס׳ 20387) תעודת הרשאה</div>
                        <div className='docs_box_subtext'>בתוקף עד 06/2026
                            <img src={g_dot} />

                        </div>

                    </div>


                    <div className='docs_box'>

                          <img src={download_icon} className='download_icon'/>
                          <div className='docs_box_text'> (מס׳ 20387) תעודת הרשאה</div>

                           <div className='docs_box_subtext'>פג בעוד 7 ימים
                            <img src={y_dot} />

                        </div>

                    </div>


                    <div className='docs_box'>

                            <img src={download_icon} className='download_icon'/>
                            <div className='docs_box_text'>ריענון ירי</div>

                            <div className='docs_box_subtext'> פג לפני חודש
                                <img src={r_dot} />

                            </div>

                    </div>

                </div>
        </div>

        <div className='worker_popup_bottom_area'>
                
            <img src={p_details_4} className='p_details_1'/>
            <div className='p_details_title'>שעון נוכחות</div>

            <img src={time_grid} className='time_grid'/>

        </div> */}
    </div>

      {/* {show_cert_popup?<Cert_popup set_show_cert_popup={set_show_cert_popup}></Cert_popup>:<></>} */}
    </>
  )
}

export default Worker_popup