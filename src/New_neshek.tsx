import './New_neshek.css'
import p_2_p_n from './assets/p_2_p_n.png'

import close from './assets/close.png'
import more_icon from './assets/more_icon.png'
import p_details_1 from './assets/p_details_1.png'
import upload_w from './assets/upload_w.png'
import trash_w from './assets/trash_w.png'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import SignatureCanvas from 'react-signature-canvas'

function New_neshek(props:any) {

    const [statys, set_statys] = useState('');
    const [number, set_number] = useState('');
    const [all_kalibers, set_all_kalibers] = useState([]);
    const [all_neshek_types, set_all_neshek_types] = useState([]);
    const [creators_models, set_creators_models] = useState([]);


    const [type, set_type] = useState('');
    // const [belong, set_belong] = useState('');
    const [place, set_place] = useState('');
    // const [last_check, set_last_check] = useState('');
    const [next_check, set_next_check] = useState('');
    const [model, set_model] = useState('');
    const [kaliber, set_kaliber] = useState('');
    const [weapon_img, set_weapon_img] = useState('');
    const [form_14, set_form_14] = useState('');
  //  const [sign] = useState('');

    const [creator, set_creator] = useState('');

      const inputElement:any = useRef('');
      const focusInput = () => {
        inputElement.current.click();
      };

      const inputElement2:any = useRef('');
      const focusInput2 = () => {
        inputElement2.current.click();
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
        get_all_kalibers();
        get_all_neshek_types();
        get_creators_models();
    }, []);
        

    function get_all_neshek_types(){
        let payload = new FormData();

        axios({
            method: 'post',
            url: globalThis.app.current+'/get_all_neshek_types',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(res => {
            set_all_neshek_types(res.data.recordset);
        });
    }

    function get_all_kalibers(){
        let payload = new FormData();

      axios({
        method: 'post',
        url: globalThis.app.current+'/get_all_kalibers',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(res => {
        set_all_kalibers(res.data.recordset);
      });
    }

    
    function get_creators_models(){
         let payload = new FormData();

        axios({
            method: 'post',
            url: globalThis.app.current+'/get_creators_models',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(res => {
            set_creators_models(res.data.recordset)
        });
    }


    function save_new_neshek(){
      let payload = new FormData();
    
       payload.append("number", number);
       payload.append("type", type);
       payload.append("statys", statys);
       payload.append("place", place);
       payload.append("next_check", next_check);
       payload.append("model", model);
       payload.append("kaliber", kaliber);
       
       payload.append("creator", creator);
       payload.append("weapon_img", weapon_img);

       payload.append("form_14", form_14);
       payload.append("sign", trimmedDataURL_1);

      axios({
        method: 'post',
        url: globalThis.app.current+'/save_new_neshek',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(() => {
        props.get_all_weapons();
        props.set_add_new_neshek_popup(false);
      });
  
    }


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

              if (type=="weapon_img"){
                set_weapon_img(res.data.fileName);
              } else if (type=="form_14"){
                set_form_14(res.data.fileName);
              }
             
                
            });

        }
    }

  return (
    <>
      <div className='worker_popup_cont' >
        <img src={close} className='close_icon' onClick={()=>props.set_add_new_neshek_popup(false)}/>
        <div className='worker_popup_header'>
            <img src={p_2_p_n} className='user_b'/>    
            <div className='user_b_text_cont'>
                <div className='user_b_text_main_tachmoshet'>הוספת נשק חדש</div>
            </div>    
        </div>

        <div className='tachmoshet_info_cont_1'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>זיהוי טכני</div>

                <div className='tachmoshet_info_type_cont_main_row'>
                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title tachmoshet_info_type_title_w'>מספר סידורי</div>   
                        <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date tachmoshet_info_type_cont_long' placeholder='הזן מספר סידורי' value={number} onChange={(e)=>set_number(e.target.value)}/>
                    </div>
                </div> 


                <div className='tachmoshet_info_type_cont_main_row tachmoshet_info_type_cont_main_row_top'>
                    <div className=' tachmoshet_info_type_cont_main'>
                        <select className='select_neshek_opt' value={type} onChange={(e)=>set_type(e.target.value)}> 
                            <option>בחר סוג נשק</option>
                            {all_neshek_types && all_neshek_types.map((neshek_type:any) => (
                            <option>{neshek_type.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className=' tachmoshet_info_type_cont_main'>
                        <select className='select_neshek_opt' value={creator} onChange={(e)=>set_creator(e.target.value)}>
                            <option>בחר יצרן</option>
                                {creators_models && creators_models.map((creator_model:any) => (
                                <option>{creator_model.creator}</option>
                              ))}
                        </select>
                    </div>

                </div> 

                <div className='tachmoshet_info_type_cont_main_row tachmoshet_info_type_cont_main_row_top'>
                    <div className=' tachmoshet_info_type_cont_main'>
                        <select className='select_neshek_opt' value={model} onChange={(e)=>set_model(e.target.value)}>
                            <option>בחר דגם</option>
                            
                              {creators_models && creators_models.map((creator_model:any) => (
                                <option>{creator_model.model}</option>
                              ))}

                        </select>
                    
                    </div>

                      <div className=' tachmoshet_info_type_cont_main'>
                      {/* <input type="text" className=' tachmoshet_info_type_cont tachmoshet_info_type_row_date_kalibr' placeholder='קליבר' /> */}
                    
                        <select className='select_neshek_opt'  value={kaliber} onChange={(e)=>set_kaliber(e.target.value)}>
                            <option>בחר קליבר</option>
                            {all_kalibers && all_kalibers.map((kaliber:any) => (
                                <option>{kaliber.name}</option>
                            ))}
                        </select>

                    </div>

                </div> 
             
        </div>


            <div className='tachmoshet_info_cont_2'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>סטטוס ולוגיסטיקה</div>

                <div className='tachmoshet_info_type_cont_main_row tachmoshet_info_type_cont_main_row_top'>
                    <div className=' tachmoshet_info_type_cont_main'>
                        <select className='select_neshek_opt'  value={statys} onChange={(e)=>set_statys(e.target.value)}>
                            <option>בחר סטטוס</option>
                            <option>בכספת</option>
                            <option>בתיקון</option>
                            <option>הופקד אצל המשטרה</option>
                        </select>
                    
                    </div>

                      <div className=' tachmoshet_info_type_cont_main'>
                        <select className='select_neshek_opt'  value={place} onChange={(e)=>set_place(e.target.value)}>
                            <option>מיקום / כספת</option>
                            <option>כספת ראשית</option>
                            <option>כספת משנית</option>
                            <option>כספת סניף צפון</option>
                        </select>
                    
                    </div>

                </div> 

                
                <div className='tachmoshet_info_type_cont_main_row tachmoshet_info_type_cont_main_row_1'>
                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title tachmoshet_info_type_title_w'>תאריך ביקורת תקופתית</div>   
                        <input type="date" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date white-calendar' placeholder='תוקף'   value={next_check} onChange={(e)=>set_next_check(e.target.value)}/>
                    </div>
                </div> 

            </div>

            
            <div className='tachmoshet_info_cont_3'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>קבצים ומדיה</div>

                <div className='upload_w_neshek_cont_main'>
                    <div>
                        <div className='upload_w_neshek_cont_title'>העלה תמונת נשק</div>
                        <div className='upload_w_neshek_cont' onClick={focusInput}>
                            <img src={upload_w} className='upload_w'/>
                            <div className='upload_w_text'>גרור קבצים לכאן או לחץ להעלאה</div>
                            <input type="file" onChange={(e)=>upload_file_func(e.target.files,"weapon_img")} ref={inputElement} className='file_input' />
                            {weapon_img?<div className='img_uploaded_name'>{weapon_img}</div>:<></>}
                        </div>
                    </div>

                    <div>
                        <div className='upload_w_neshek_cont_title'>רישיון כלי ירייה / טופס 14</div>
                        <div className='upload_w_neshek_cont'  onClick={focusInput2}>
                            <img src={upload_w} className='upload_w'/>
                            <div className='upload_w_text'>גרור קבצים לכאן או לחץ להעלאה</div>
                                <input type="file" onChange={(e)=>upload_file_func(e.target.files,"form_14")} ref={inputElement2} className='file_input' />
                            {form_14?<div className='img_uploaded_name'>{form_14}</div>:<></>}
                        </div>
                    </div>

                </div>

            </div>

            <div className='tachmoshet_info_cont_4'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>חתימה</div>
                <div className='mefakeah_sign_cont_neshek'>
                  
                   

                         <div className='tachmoshet_info_type_cont tachmoshet_info_type_row_date '  onClick={()=>set_sign_popup_1(!sign_popup_1)}>
                            {trimmedDataURL_1?<img src={trimmedDataURL_1} className='sign_1_img' alt="signature" />:<></>}
                        </div> 
                        <div className='cert_input_sign_text_neshek'>חתימת מורשה</div>
                        {/* <div className='tachmoshet_info_type_cont tachmoshet_info_type_row_date tachmoshet_info_type_row_sign'>
                           
                        </div> */}

                                 
          {sign_popup_1?<div className='sign_popup_cont_eq_neshek'>
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

        <div className='save_t_btn_cont'>
            <div className='save_t_btn' onClick={()=>save_new_neshek()}>שמור נשק במערכת</div>
            <div className='cancel_t_btn'  onClick={()=>props.set_add_new_neshek_popup(false)}>ביטול</div>
        </div>

      </div>
    </>
  )}

export default New_neshek