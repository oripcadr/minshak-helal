import './New_neshek.css'
//import p_2_p_b from './assets/p_2_p_b.png'
import p_2_p_n from './assets/p_2_p_n.png'
import close from './assets/close.png'
import more_icon from './assets/more_icon.png'
import p_details_1 from './assets/p_details_1.png'
import upload_w from './assets/upload_w.png'

import { useEffect, useState } from 'react'
import axios from 'axios'

function Edit_weapon(props:any) {

    const [statys, set_statys] = useState(props.weapon.statys);
    const [number, set_number] = useState(props.weapon.number);
    const [type, set_type] = useState(props.weapon.type);
  //  const [belong, set_belong] = useState(props.weapon.belong);
    const [place, set_place] = useState(props.weapon.place);
   // const [last_check, set_last_check] = useState(props.weapon.last_check.split('T')[0]);
    const [next_check, set_next_check] = useState(props.weapon.next_check.split('T')[0]);
 //   const [country_created, set_country_created] = useState(props.weapon.country_created);
    const [model, set_model] = useState(props.weapon.model);
    const [kaliber, set_kaliber] = useState(props.weapon.kaliber);
    const [creator, set_creator] = useState(props.weapon.creator);
    const [weapon_img, set_weapon_img] = useState(props.weapon.weapon_img);
    const [form_14, set_form_14] = useState(props.weapon.form_14);
    const [sign, set_sign] = useState(props.weapon.sign);

    const [all_kalibers, set_all_kalibers] = useState([]);
    const [all_neshek_types, set_all_neshek_types] = useState([]);
    const [creators_models, set_creators_models] = useState([]);

    function edit_neshek(){
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
       payload.append("sign", sign);

        payload.append("id", props.weapon.id);

      axios({
        method: 'post',
        url: globalThis.app.current+'/edit_neshek',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(() => {
        props.get_all_weapons();
        props.set_edit_weapon_popup(false);
      });
  
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
                        <input type="date" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date ' placeholder='תוקף'   value={next_check} onChange={(e)=>set_next_check(e.target.value)}/>
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
                        <div className='upload_w_neshek_cont'>
                            <img src={upload_w} className='upload_w'/>
                            <div className='upload_w_text'>גרור קבצים לכאן או לחץ להעלאה</div>
                        </div>
                    </div>

                    <div>
                        <div className='upload_w_neshek_cont_title'>רישיון כלי ירייה / טופס 14</div>
                        <div className='upload_w_neshek_cont'>
                            <img src={upload_w} className='upload_w'/>
                            <div className='upload_w_text'>גרור קבצים לכאן או לחץ להעלאה</div>
                        </div>
                    </div>

                </div>

            </div>

            <div className='tachmoshet_info_cont_4'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>חתימה</div>
                <div className='mefakeah_sign_cont_neshek'>
                    <input className="cert_input_sign" type="text" />
                    <div className='cert_input_sign_text_neshek'>חתימת מורשה</div>
                </div>

            </div>

        <div className='save_t_btn_cont'>
            <div className='save_t_btn' onClick={()=>edit_neshek()}>שמור נשק במערכת</div>
            <div className='cancel_t_btn'  onClick={()=>props.set_add_new_neshek_popup(false)}>ביטול</div>
        </div>

      </div>
    </>
  )}

export default Edit_weapon