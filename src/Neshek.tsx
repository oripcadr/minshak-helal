

//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Neshek.css'
import RightMenu from './RightMenu'
// import Dashboard from './Dashboard'

import msg_icon from './assets/msg_icon.png'
import bell_icon from './assets/bell_icon.png'
import p_1 from './assets/p_1_w.png'
import p_2 from './assets/p_2_w.png'
import p_3 from './assets/p_3_w.png'
import p_4 from './assets/p_4_w.png'
import arrow_left from './assets/arrow_left.png'

import pencil from './assets/pencil.png'
import trash_s from './assets/trash_s.png'

import b_dot from './assets/b_dot.png'
import r_dot from './assets/r_dot.png'
import more_w from './assets/more_w.png'
import add_doc_s from './assets/add_doc_s.png'


import more_icon from './assets/more_icon.png'
import add_n from './assets/add_n.png'

import user_m_1 from './assets/user_m_1.png'
import user_m_2 from './assets/user_m_2.png'
// import user_s_2 from './assets/user_s_2.png'

import arrow_r from './assets/arrow_r.png'
import filter from './assets/filter.png'

import { useEffect, useRef, useState } from 'react'

import folder_o from './assets/folder_o_s.png'
import file_icon from './assets/file_icon.png'
import Comp_popup from './Comp_popup'
import Cert_popup from './Cert_popup'
import success_icon from './assets/success_icon.png'
import Neshek_popup from './Neshek_popup'
import p_dot from './assets/p_dot.png'
import y_dot from './assets/y_dot.png'
import axios from 'axios'

import p_details_1 from './assets/p_details_1.png'
import add_sup_icon from './assets/add_sup_icon.png'
import upload_w from './assets/upload_w.png'
import trash_w from './assets/trash_w.png'

import Edit_weapon from './Edit_weapon'
import New_neshek from './New_neshek'
import { useNavigate } from 'react-router-dom'
import Certificate_authorization from './Certificate_authorization'
import Certificate_authorization_1 from './Certificate_authorization_1'
import Certificate_authorization_2 from './Certificate_authorization_2'
import Certificate_authorization_3 from './Certificate_authorization_3'
import Comp_popup_1 from './Comp_popup_1'
import close from './assets/close.png'
import Show_doc from './Show_doc'

function Neshek() {
    
    const [show_p_box_cont_info, set_show_p_box_cont_info] = useState(false);
    const [show_work_time, set_show_work_time] = useState(false);
    const [show_filter_options, set_show_filter_options] = useState(false);

    const [show_tab, set_show_tab] = useState(1);
    const [show_tab_t, set_show_tab_t] = useState(1);
    const [show_company_popup, set_show_company_popup] = useState(false);
    const [show_cert_popup_f, set_show_cert_popup_f] = useState(false);
    const [show_success_popup, set_show_success_popup] = useState(false);

    const [show_neshek_popup, set_show_neshek_popup] = useState(false);
    
    const [show_status_opt, set_show_status_opt] = useState(0);
    const [show_update_count, set_show_update_count] = useState(false);
    const [fake, set_fake] = useState(false);
    
    const [weapons, set_weapons] = useState([]);
    const [weapons_original, set_weapons_original] = useState([]);

    const [filter_status, set_filter_status] = useState<any>(1);

    const [add_new_neshek_popup, set_add_new_neshek_popup] = useState(false);
    const [show_doc, set_show_doc] = useState('');
    

    const [edit_weapon_popup, set_edit_weapon_popup] = useState(false);
    const [show_upload_popup, set_show_upload_popup] = useState(false);

    const [show_certificate_of_authorization, set_show_certificate_of_authorization] = useState(false);
    const [show_certificate_of_authorization_1, set_show_certificate_of_authorization_1] = useState(false);
    const [show_certificate_of_authorization_2, set_show_certificate_of_authorization_2] = useState(false);
    const [show_certificate_of_authorization_3, set_show_certificate_of_authorization_3] = useState(false);
    
    const [cert_data, set_cert_data] = useState<any>([]);
    
    const [all_training, set_all_training] = useState<any>([]);
    
    const [show_more_options, set_show_more_options] = useState<any>('');
    const [delete_weapon_popup, set_delete_weapon_popup] = useState<any>('');
    
    const [in_safe, set_in_safe] = useState(0);
    const [to_fix, set_to_fix] = useState(0);
    const [belong_n, set_belong_n] = useState(0);
    const [show_comp_popup, set_show_comp_popup] = useState(false);
    const [doc_path, set_doc_path] = useState('');
    const [doc_name, set_doc_name] = useState('');
    const [doc_date, set_doc_date] = useState('');
    const [doc_type, set_doc_type] = useState('');
    const [doc_t_for, set_doc_t_for] = useState('');
    

    const [show_more, set_show_more] = useState<any>('');
    const [delete_doc_popup, set_delete_doc_popup] = useState<any>(false);
    


    const navigate = useNavigate();

    function set_show_cert_popup(){
        debugger;
        set_show_company_popup(false);
        set_show_cert_popup_f(true);
    }

    function set_show_sucess(){
        set_show_company_popup(false);
        set_show_success_popup(true);
    }

    function delete_weapon(){
        let payload = new FormData();
    
        payload.append("id", show_more_options);

        axios({
            method: 'post',
            url: globalThis.app.current+'/delete_weapon',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
            get_all_weapons();
            set_show_more_options('');
        });
    }

    useEffect(() => {
        get_all_weapons();
        get_all_training()
    }, []);


    const inputElement:any = useRef('');
            const focusInput = () => {
            inputElement.current.click();
    };
    
        
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

    function get_all_weapons(){

      let payload = new FormData();
    
      axios({
        method: 'post',
        url: globalThis.app.current+'/get_all_weapons',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(res => {

        if (res.data.recordset.length>0){
           set_weapons(res.data.recordset);
           set_weapons_original(res.data.recordset);
           let in_safe=0;
           let to_fix=0;
           let bolong_n=0

           for(let i=0; i<res.data.recordset.length; i++){
            if (res.data.recordset[i].statys=="בכספת"){
                in_safe++;
            }

            if (res.data.recordset[i].statys=="תקול"){
                to_fix++;
            }

            if (res.data.recordset[i].statys=="משוייך למאבטח"){
                bolong_n++;
            }
           }

           set_in_safe(in_safe);
           set_to_fix(to_fix);
           set_belong_n(bolong_n);

        } 
          
      });
  
    }

    function set_filter_status_func(val:any){
        let t:any=weapons_original;
        set_filter_status(val);
        let res:any=[];

        if(val==1){
            res=weapons_original;
        } else{
            for(let i=0; i<t.length; i++){
              
                if(val==2 && t[i].statys=='תקול'){
                    res.push(t[i]);
                }

                if(val==4 && t[i].statys=='משוייך למאבטח'){
                    res.push(t[i]);
                }

                if(val==5 && t[i].statys=='משוייך לאתר'){
                    res.push(t[i]);
                }

                if(val==3 && t[i].statys=='בכספת'){
                    res.push(t[i]);
                }
            }
        }
        set_weapons(res);
        set_fake(!fake);
    }

    function save_t_doc_func(){
        let payload = new FormData();

        payload.append('t_name',doc_name);
        payload.append('t_date',doc_date);
        payload.append('file_path',doc_path);
        payload.append('t_type',doc_type);
        payload.append('t_for',doc_t_for);
        
   
        axios({
            method: 'post',
            url: globalThis.app.current+'/save_t_doc',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
            set_doc_name('');
            set_doc_date('');
            set_doc_path('');
            set_doc_t_for('');
        
            set_show_upload_popup(false);
            get_all_training();
        });
    }

    function get_all_training(){
        let payload = new FormData();

        axios({
            method: 'post',
            url: globalThis.app.current+'/get_all_training',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(res => {
            set_all_training(res.data.recordset)
           // get_company_folder_docs();
        });
    }

    function delete_doc(){
        let payload = new FormData();
        payload.append("id",delete_doc_popup)

        axios({
            method: 'post',
            url: globalThis.app.current+'/delete_doc_training',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
           // set_all_training(res.data.recordset)
            get_all_training();
        });
    }

  return (
    <>
    <div className='dashboard_main_cont'>

        <RightMenu title="neshek"></RightMenu>

        <div className='top_header'>

            {/* <div className='user_cont'>
                <img src={user} />
                <div className='user_title'>
                    <div className='user_name'>ישראל ישראלי</div>
                    <div className='user_role'>מנכ"ל</div>
                </div>
            </div> */}

            {/* <div className='search_cont'>
                 <input type="text" placeholder='חפש אתר, עובד, מסמך או נשק…' className='search_input'/>   
                 <img src={msg_icon} />
                 <img src={bell_icon} />
            </div> */}
        </div>

        <div className='main_area_cont'>
            <div className='right_part_cont'>
                
                <div className='top_area_p top_area_w'>
                    <div>
                        <div className='right_part_cont_top_title'>פעולות מהירות</div>


                        <div className='p_box_action_neshek_cont'>
                            <div className='p_box_action_neshek'   onClick={()=>set_add_new_neshek_popup(true)}>
                                <img src={add_n} className='' />
                                <div className='user_add_title user_add_title_w'>הוסף נשק חדש</div>
                            </div>

                            <div className='p_box_action_neshek' onClick={()=>set_show_comp_popup(true)}>
                                <img src={folder_o} className='' />
                                <div className='user_add_title user_add_title_w'>הצגת תיק מפעל ראוי</div>
                            </div>

                            {/* <div className='p_box_action_neshek' onClick={()=>set_show_company_popup(true)}> */}
                            <div className='p_box_action_neshek' onClick={()=>set_show_certificate_of_authorization(true)}>
                                <img src={add_doc_s} className='' />
                                <div className='user_add_title user_add_title_w'>יצירת תעודת הרשאה</div>
                            </div>

                            
                            <div className='p_box_action_neshek' onClick={()=>navigate('/Munitions')}>
                                <img src={add_doc_s} className='' />
                                <div className='user_add_title user_add_title_w'>תחמושת</div>
                            </div>

                        </div>
                    </div>
                    <div className='right_part_cont_top'>
                        <div className='right_part_cont_top_title'>תמונת מצב</div>

                        <div className='btn_exp_cont'>
                            <div className='select_period'>יומי</div>
                            <div className='export_btn'>ייצוא</div>
                        </div>


                        {!show_p_box_cont_info?<div className='p_box_cont'>
                            <div className='p_box' onClick={()=>set_show_p_box_cont_info(true)}>
                                <img src={more_icon} className='more_icon' />
                                <img src={p_1} className='p_icon'/>
                                <div className='p_box_text_cont'>
                                    <div className='p_box_title'>{weapons_original.length}</div>
                                    <div className='p_box_subtitle'>סה״ב נשקים רשומים</div>
                                </div>
                            
                            </div>

                            <div className='p_box'>
                                <img src={more_icon} className='more_icon' />
                                <img src={p_2} className='p_icon'/>
                                <div className='p_box_text_cont'>
                                    <div className='p_box_title'>{belong_n*100/weapons_original.length}%</div>
                                    <div className='p_box_subtitle'>נשקים מוקצים ({belong_n})</div>
                                </div>
                            </div>

                            <div className='p_box'>

                                <img src={more_icon} className='more_icon' />
                                <img src={p_3} className='p_icon'/>
                                <div className='p_box_text_cont'>
                                    <div className='p_box_title'>{in_safe}</div>
                                    <div className='p_box_subtitle'>נשקים זמינים בכספות</div>
                                </div>

                            </div>

                            <div className='p_box'>
                                <img src={more_icon} className='more_icon' />
                                <img src={p_4} className='p_icon'/>
                                <div className='p_box_text_cont'>
                                    <div className='p_box_title'>{to_fix}</div>
                                    <div className='p_box_subtitle'>נשקים זקוקים לטיפול</div>
                                </div>

                            </div>

                        </div>: 
                        <div className='p_box_cont_2'>
                            <img src={arrow_r} className='arrow_r' onClick={()=>set_show_p_box_cont_info(false)}/>
                            <div className='p_box_cont_2_first'>
                                <img src={p_1} className='p_icon'/>
                                <div className='p_box_text_cont'>
                                    <div className='p_box_title'>82%</div>
                                    <div className='p_box_subtitle'>נוכחות</div>
                                </div>
                            </div>

                            <div className='p_box_cont_2_sec'>
                                <div className='count_p_cont'>
                                    <div className='count_p'>2</div>
                                    <div className='count_p_text'>אחמ״שים</div>
                                </div>
                                <div className='count_p_user_cont' onMouseOver={()=>set_show_work_time(true)} onMouseLeave={()=>set_show_work_time(false)}>
                                    <img src={user_m_1} />
                                    <div>יוסי כהן</div>
                                </div>

                                {show_work_time? <div className='show_work_time_cont'>
                                    <div className='show_work_time_title'>משמרת בוקר</div>
                                    <div className='show_work_time_subtitle'>6:00-14:00</div>
                                    <div className='show_work_time_subtitle'>סניף תל אביב</div>
                                </div>:<></>}

                                <div className='count_p_user_cont'>
                                    <img src={user_m_2} />
                                    <div>רועי לוי</div>
                                </div>

                            </div>


                            <div className='p_box_cont_3_sec'>
                                <div className='add_worker_btn'>הוספת עובד +</div>

                                <div className='count_p_cont'>
                                    <div className='count_p count_p_2'>9/13</div>
                                    <div className='count_p_text'>מאבטחים</div>
                                </div>

                                <div className='count_p_user_cont_main'>
                                    <div>
                                        <div className='count_p_user_cont'>
                                            <img src={user_m_1} />
                                            <div>יוסי כהן</div>
                                        </div>

                                        <div className='count_p_user_cont'>
                                            <img src={user_m_2} />
                                            <div>רועי לוי</div>
                                        </div>

                                        <div className='count_p_user_cont'>
                                            <img src={user_m_2} />
                                            <div>ספיר כהן</div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className='count_p_user_cont'>
                                            <img src={user_m_1} />
                                            <div>יוסי כהן</div>
                                        </div>

                                        <div className='count_p_user_cont'>
                                            <img src={user_m_2} />
                                            <div>רועי לוי</div>
                                        </div>

                                        <div className='count_p_user_cont'>
                                            <img src={user_m_2} />
                                            <div>ספיר כהן</div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className='count_p_user_cont'>
                                            <img src={user_m_1} />
                                            <div>יוסי כהן</div>
                                        </div>

                                        <div className='count_p_user_cont'>
                                            <img src={user_m_2} />
                                            <div>רועי לוי</div>
                                        </div>

                                        <div className='count_p_user_cont'>
                                            <img src={user_m_2} />
                                            <div>ספיר כהן</div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            
                        </div>}

                    </div>

                </div>

                <div className='right_part_cont_bottom right_part_cont_bottom_p'>
                    <div className='right_part_cont_top_title'>נשקים</div>

                    <div className='btn_exp_cont'>
                        <input type="text" placeholder='חיפוש עובד לפי שם, תתפקיד, סניף, מסט״ב…' className='btn_exp_cont_input'/>
                        <div className='select_period'>סינון

                            <img src={filter} className='filter_icon' onClick={()=>set_show_filter_options(!show_filter_options)}/>
                        </div>
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    {show_filter_options? <div className='filter_options_cont'>
                        <div className='filter_options_cont_title'>תפקיד</div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>קב״ט</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>סגן קב״ט</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>אחמ״ש</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>מאבטח</div>
                        </div>

                        <div className='filter_options_cont_title'>סניף</div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>תל אביב</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>ירושלים</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>חיפה</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>באר שבע</div>
                        </div>


                        <div className='filter_options_cont_title'>סטטוס תעסוקה</div>
                        <div className='filter_checkbox_row'>
                        <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>פעיל</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>בהכשרה</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>מושעה</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>סיים</div>
                        </div>

                        <div className='filter_options_cont_title'>מסמכים בתוקף</div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>תקין</div>
                        </div>

                        <div className='filter_checkbox_row'>
                            <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>עומד לפוג</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" />
                            <div className='filter_options_cont_subtitle'>פג תוקף</div>
                        </div>

                    </div>:<></>}

                    <div className='top_btns_cont'>
                        <div className={'top_btn ' + (filter_status==1?"top_btn_selected":"")} onClick={()=>set_filter_status_func(1)}>כל הנשקים</div>

                        <div className={'top_btn ' + (filter_status==2?"top_btn_selected":"")} onClick={()=>set_filter_status_func(2)}>תקולים</div>
                        <div className={'top_btn ' + (filter_status==3?"top_btn_selected":"")} onClick={()=>set_filter_status_func(3)}>בכספת</div>
                        <div className={'top_btn ' + (filter_status==4?"top_btn_selected":"")} onClick={()=>set_filter_status_func(4)}>משויכים למאבטחים</div>
                        <div className={'top_btn ' + (filter_status==5?"top_btn_selected":"")} onClick={()=>set_filter_status_func(5)}>משויכים לאתרים</div>

                    </div>

                    <div className='table_header_cont'>
                        <div className='table_header'>מסט״ב</div>
                        <div className='table_header'>דגם / סוג</div>
                        <div className='table_header'>סטטוס</div>
                        {/* <div className='table_header'>שיוך</div> */}

                        <div className='table_header'>מיקום נוכחי</div>
                        {/* <div className='table_header'>בדיקה אחרונה</div> */}
                        <div className='table_header'>ביקורת תקופתית</div>
                    </div>

                {weapons && weapons.map((weapon:any) => (

                    <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          {weapon.number}
                        </div>

                        <div className='table_row' onClick={()=>set_show_neshek_popup(weapon)}>{weapon.type}</div>
        
                        <div className='table_row'>
                            <div className='status_b' onClick={()=>set_show_status_opt(weapon.id)}>
                           {weapon.statys=="תקול"?<img src={r_dot} />:weapon.statys=="משוייך לאתר"?<img src={p_dot} />
                           :weapon.statys=="משוייך למאבטח"?<img src={b_dot} />:weapon.statys=="בכספת"?<img src={y_dot} />:""}
                            {weapon.statys}</div></div>

                           {show_status_opt==weapon.id?<div className='status_opt_cont status_opt_cont_neshek'>

                             <div className='status_opt_row' onClick={()=>set_show_status_opt(0)}><img src={r_dot} />
                        תקול</div>

                          <div className='status_opt_row'><img src={p_dot} />
                        משוייך לאתר</div>

                          <div className='status_opt_row'><img src={b_dot} />
                        משוייך למאבטח</div>

                        <div className='status_opt_row'><img src={y_dot} />
                        בכספת</div>

                        </div>:<></>}


                        {/* <div  className='table_row'><img src={user_s_2} className='user_s' />
                         {weapon.belong}
                        </div> */}
                            <div className='table_row'>{weapon.place}</div>

                            {/* <div className='table_row'>{weapon.last_check.split('T')[0]}</div> */}

                            <div className='table_row'>{weapon.next_check.split('T')[0]}</div>
                            
                            <img src={more_w} className='more_w more_w_p' onClick={()=>set_show_more_options(weapon.id)}/>

                            
                            {show_more_options==weapon.id?<div className='more_options_cont'>
                             
                               <div onClick={()=>{set_edit_weapon_popup(weapon);set_show_more_options('')}} className='more_options_row more_options_row_1'>עריכה
                                 <img src={pencil} />
                               </div>
                               <div onClick={()=>set_delete_weapon_popup(weapon.id)} className='more_options_row'>מחיקה
                                 <img src={trash_s} />
                               </div>
                            </div>:<></>}

                            
                            {delete_weapon_popup==weapon.id?<div className='delete_worker_popup_cont'>
                                 האם אתה בטוח רוצה למחוק? 

                                <div className='delete_worker_popup_btncont'>
                                    <div onClick={()=>delete_weapon()}>כן</div>
                                    <div onClick={()=>{set_delete_weapon_popup(false);set_show_more_options('')}}>לא</div>
                                </div>
                            </div>:<></>}
                    </div>
                ))}

                   

                    
                </div>

            </div>



            <div>
                <div className='left_part_third_cont left_part_third_cont_neshek'>
                <div className='right_part_cont_top_title right_part_cont_top_title_last '>דו״חות מוצעים</div>

                    <div className='btn_exp_cont'>
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    <div className='top_btns_cont'>
                        <div className={'top_btn ' + (show_tab_t==1?"top_btn_selected":"")} onClick={()=>set_show_tab_t(1)}>דו"ח תחמושת</div>

                        <div className={'top_btn ' + (show_tab_t==2?"top_btn_selected":"")} onClick={()=>set_show_tab_t(2)}>דו״ח תקלות ותיקונים</div>
                
                    </div>

                    {show_tab_t==1?<>
                         
                    <div className='table_header_cont'>
                        <div className='table_header'>מסט״ב</div>
                        <div className='table_header'>במלאי</div>
                        <div className='table_header'>נמסרה החודש</div>
                        <div className='table_header'>נותרה לשימוש</div>
            
                    </div>

                    <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          9mm
                        </div>

                        <div className='table_row' onClick={()=>set_show_update_count(true)}>3200</div>

                        <div className='table_row'>600</div>
                    
                            <div className='table_row'>2600</div>

                     </div>

                     {show_update_count?<div className='update_count_cont'>
                        <div className='update_count_title'>עדכון כמות</div>
                        <input type="text" className='update_count_input' placeholder='3200'/>

                        <div className="update_count_cancel" onClick={()=>set_show_update_count(false)}>ביטול</div>

                        <div className="update_count_save" onClick={()=>set_show_update_count(false)}>שמירה</div>


                     </div>:<></>}

                     
                    <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          5.56mm
                        </div>

                        <div className='table_row'>3200</div>

                        <div className='table_row'>600</div>
                     
                            <div className='table_row'>2600</div>

                     </div>
                     
                    <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          12G
                        </div>

                        <div className='table_row'>3200</div>

                        <div className='table_row'>600</div>
                     
                            <div className='table_row'>2600</div>

                     </div>
                     
                    <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          9mm
                        </div>

                        <div className='table_row'>3200</div>

                        <div className='table_row'>600</div>
                     
                            <div className='table_row'>2600</div>

                     </div>
                     
                    <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          9mm
                        </div>

                        <div className='table_row'>3200</div>

                        <div className='table_row'>600</div>
                   
                            <div className='table_row'>2600</div>

                     </div>
                     
                    <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          9mm
                        </div>

                        <div className='table_row'>3200</div>

                        <div className='table_row'>600</div>
                  
                            <div className='table_row'>2600</div>

                     </div>
                    </>:<></>}

                    {show_tab_t==2?<>
                    
                    <div className='table_header_cont'>
                        <div className='table_header'>מסט״ב</div>
                        <div className='table_header'>דגם / סוג</div>
                        <div className='table_header'>מיקום</div>
                        <div className='table_header'>סטטוס תקלה</div>
                        <div className='table_header'>תאריך דיווח</div>
                        <div className='table_header'>הערות</div>
                    </div>

                    <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          84
                        </div>

                        <div className='table_row'>M16A2</div>

                        <div className='table_row'>חיפה</div>
                        <div className='table_row'>תוקן והוחזר
                        </div>
                            <div className='table_row'>12/09/25</div>

                            <div className='table_row'>בעיית נוקר</div>

                            <img src={more_w} className='more_w more_w_s'/>
                    </div>

                       <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          84
                        </div>

                        <div className='table_row'>M16A2</div>

                        <div className='table_row'>חיפה</div>
                        <div className='table_row'>תוקן והוחזר
                        </div>
                            <div className='table_row'>12/09/25</div>

                            <div className='table_row'>בעיית נוקר</div>

                            <img src={more_w} className='more_w more_w_s'/>
                    </div>

                       <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          84
                        </div>

                        <div className='table_row'>M16A2</div>

                        <div className='table_row'>חיפה</div>
                        <div className='table_row'>תוקן והוחזר
                        </div>
                            <div className='table_row'>12/09/25</div>

                            <div className='table_row'>בעיית נוקר</div>

                            <img src={more_w} className='more_w more_w_s'/>
                    </div>

                       <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          84
                        </div>

                        <div className='table_row'>M16A2</div>

                        <div className='table_row'>חיפה</div>
                        <div className='table_row'>תוקן והוחזר
                        </div>
                            <div className='table_row'>12/09/25</div>

                            <div className='table_row'>בעיית נוקר</div>

                            <img src={more_w} className='more_w more_w_s'/>
                    </div>

                       <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          84
                        </div>

                        <div className='table_row'>M16A2</div>

                        <div className='table_row'>חיפה</div>
                        <div className='table_row'>תוקן והוחזר
                        </div>
                            <div className='table_row'>12/09/25</div>

                            <div className='table_row'>בעיית נוקר</div>

                            <img src={more_w} className='more_w more_w_s'/>
                    </div>

                       <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                          155
                        </div>

                        <div className='table_row'>M16A2</div>

                        <div className='table_row'>תל אביב</div>
                        <div className='table_row'>בהמתנה לטכנאי
                        </div>
                            <div className='table_row'>12/09/25</div>

                            <div className='table_row'>בעיית נוקר</div>

                            <img src={more_w} className='more_w more_w_s'/>
                    </div>
                    </>:<></>}

                </div>

                <div className='lecture_cont'>
                    <div className='right_part_cont_top_title right_part_cont_top_title_last '>הדרכה והסמכה</div>
                    <div className='next_page'>
                        <div>מעבר דף</div>
                        <img src={arrow_left} />
                    </div>


                    <div className='top_btns_cont'>
                        <div className={'top_btn ' + (show_tab==1?"top_btn_selected":"")} onClick={()=>set_show_tab(1)}>סרטונים</div>

                        <div className={'top_btn ' + (show_tab==2?"top_btn_selected":"")} onClick={()=>set_show_tab(2)}>מסמכים</div>

                        <div className={'top_btn ' + (show_tab==3?"top_btn_selected":"")} onClick={()=>set_show_tab(3)}>שאלונים</div>
                
                    </div>

                    {show_tab==1?<>
                    <div className='top_btns_cont'>
                        <input type="text" placeholder='חיפוש סרטון' className='search_video'/>
                        <div className='add_new_video_btn'  onClick={()=>{set_show_upload_popup(true); set_doc_type('video')}}>+ סרטון חדש</div>

                    </div>

                    <div className='videos_cont'>
                    {all_training && all_training.map((training:any) => (
                    <>
                    {training.t_type=='video'?<div className="doc_cont_in">
                        <div>

                        <video width="218" height="123" controls className='traiding_video_cont'>
                            <source src={globalThis.app.current+'/'+training.file_path} type="video/mp4"/>
                        </video>

                        <div onClick={()=>set_show_more(training.id)}>
                           
                            {training.t_name}</div>
                        </div>
                        
                            {show_more==training.id?<div className='more_options_cont_doc_training_video'>
                                {/* <div className='more_options_row more_options_row_1' onClick={()=>{set_show_doc(training.file_path);set_show_more(false)}}>צפייה
                                    <img src={pencil} />
                                </div> */}
                                <div className='more_options_row' onClick={()=>set_delete_doc_popup(training.id)}>מחיקה
                                    <img src={trash_s} />
                                </div>
                            </div>:<></>}

                            {delete_doc_popup==training.id?<div className='delete_trining_popup_cont'>
                                האם אתה בטוח רוצה למחוק? 
                                <div className='delete_worker_popup_btncont'>
                                    <div onClick={()=>delete_doc()}>כן</div>
                                    <div onClick={()=>{set_delete_doc_popup(false);set_show_more('')}}>לא</div>
                                </div>
                            </div>:<></>}
                        </div>:<></>}

                        
                        </>
                    ))}




                    </div>
                    </>:<></>}

                    {show_tab==2?<>
                    <div className='top_btns_cont'>
                        <input type="text" placeholder='חיפוש מסמך' className='search_video'/>
                        <div className='add_new_video_btn' onClick={()=>{set_show_upload_popup(true); set_doc_type('doc')}}>+ מסמך חדש</div>

                    </div>

                    <div className='videos_cont'>
                        {all_training && all_training.map((training:any) => (
                        <>
                            {training.t_type=='doc'?
                            <div className='doc_cont_in'>
                            <div className='v_b'><img src={file_icon} onClick={()=>set_show_more(training.id)}/>
                                <div>{training.t_name}</div>
                            </div>

                            {show_more==training.id?<div className='more_options_cont_doc_training'>
                                <div className='more_options_row more_options_row_1' onClick={()=>{set_show_doc(training.file_path);set_show_more(false)}}>צפייה
                                    <img src={pencil} />
                                </div>
                                <div className='more_options_row' onClick={()=>set_delete_doc_popup(training.id)}>מחיקה
                                    <img src={trash_s} />
                                </div>
                            </div>:<></>}

                            {delete_doc_popup==training.id?<div className='delete_trining_popup_cont'>
                                האם אתה בטוח רוצה למחוק? 
                                <div className='delete_worker_popup_btncont'>
                                    <div onClick={()=>delete_doc()}>כן</div>
                                    <div onClick={()=>{set_delete_doc_popup(false);set_show_more('')}}>לא</div>
                                </div>
                            </div>:<></>}
                            </div>:<></>}
                        </>
                        ))}


                    </div>
                    </>:<></>}


                    {show_tab==3?<>
                    <div className='top_btns_cont'>
                        <input type="text" placeholder='חיפוש מסמך' className='search_video'/>
                        <div className='add_new_video_btn' onClick={()=>{set_show_upload_popup(true); set_doc_type('q')}}>+ מסמך חדש</div>
                    </div>
                            
                    <div className='table_header_cont'>
                        <div className='table_header table_row_l'>שם השאלון</div>
                        <div className='table_header '>עדכון אחרון</div>
                        <div className='table_header table_row_l'>מיועד ל</div>
                    </div>

                    {all_training && all_training.map((training:any) => (
                    <>
                    {training.t_type=='q'?<>
                    <div className='table_header_cont'>
                    
                        <div className='row_b'>
                        <div  className='table_row table_row_l'>
                         {training.t_name}
                        </div>

                        <div className='table_row '>{training.t_date.split('T')[0]}</div>

                        <div className='table_row table_row_l'>{training.t_for}</div>

                        <img src={more_w} className='more_w more_w_s' onClick={()=>set_show_more(training.id)}/>
                        </div>
                    </div>
                     {show_more==training.id?<div className='more_options_cont_doc_training'>
                                <div className='more_options_row more_options_row_1' onClick={()=>{set_show_doc(training.file_path);set_show_more(false)}}>צפייה
                                    <img src={pencil} />
                                </div>
                                <div className='more_options_row' onClick={()=>set_delete_doc_popup(training.id)}>מחיקה
                                    <img src={trash_s} />
                                </div>
                            </div>:<></>}

                            {delete_doc_popup==training.id?<div className='delete_trining_popup_cont'>
                                האם אתה בטוח רוצה למחוק? 
                                <div className='delete_worker_popup_btncont'>
                                    <div onClick={()=>delete_doc()}>כן</div>
                                    <div onClick={()=>{set_delete_doc_popup(false);set_show_more('')}}>לא</div>
                                </div>
                            </div>:<></>}
                    </>
                :<></>}</>))}
{/* 

                     <div className='table_header_cont'>
                    
                        <div className='row_b row_b_n'>
                        <div  className='table_row table_row_l'>
                          מבחן ריענון נשק חם – בסיסי
                        </div>

                        <div className='table_row '>02.09.25</div>

                        <div className='table_row table_row_l'>כלל המאבטחים והקב״טים</div>

                        <img src={more_w} className='more_w more_w_s'/>
                        </div>
                    </div>

                    
                     <div className='table_header_cont'>
                    
                        <div className='row_b'>
                        <div  className='table_row table_row_l'>
                          מבחן ריענון נשק חם – בסיסי
                        </div>

                        <div className='table_row '>02.09.25</div>

                        <div className='table_row table_row_l'>כלל המאבטחים והקב״טים</div>

                        <img src={more_w} className='more_w more_w_s'/>
                        </div>
                    </div>

                    
                     <div className='table_header_cont'>
                    
                        <div className='row_b row_b_n'>
                        <div  className='table_row table_row_l'>
                          מבחן ריענון נשק חם – בסיסי
                        </div>

                        <div className='table_row '>02.09.25</div>

                        <div className='table_row table_row_l'>כלל המאבטחים והקב״טים</div>

                        <img src={more_w} className='more_w more_w_s'/>
                        </div>
                    </div> */}
                    </>:<></>}

                </div>


            </div>
        </div>

    </div>

        {show_company_popup?<Comp_popup set_show_sucess={set_show_sucess} set_show_worker_popup={set_show_company_popup} set_show_cert_popup={set_show_cert_popup}></Comp_popup>:<></>}

        {show_cert_popup_f?<Cert_popup set_show_cert_popup={set_show_cert_popup_f}></Cert_popup>:<></>}

        {show_neshek_popup?<Neshek_popup get_all_weapons={get_all_weapons}  weapon={show_neshek_popup} set_show_cert_popup={set_show_neshek_popup}></Neshek_popup>:<></>}

        {show_success_popup?<div className='success_popup_cont'>
            <img src={success_icon} className='success_icon'/>
            <div className='success_popup_title'>התעודה הונפקה בהצלחה</div>

            <div className='success_popup_btn'>הדפס</div>

            <div className='success_popup_btn'>שלח במייל</div>

            <div  className='success_popup_btn_close' onClick={()=>set_show_success_popup(false)}>סגירה</div>

        </div>:<></>}


        {add_new_neshek_popup?<New_neshek set_add_new_neshek_popup={set_add_new_neshek_popup} get_all_weapons={get_all_weapons}></New_neshek>:<></>}        
   
        {edit_weapon_popup?<Edit_weapon weapon={edit_weapon_popup} set_edit_weapon_popup={set_edit_weapon_popup} get_all_weapons={get_all_weapons}></Edit_weapon>:<></>} 
   
         {show_certificate_of_authorization?<Certificate_authorization cert_data={cert_data} set_cert_data={set_cert_data} set_show_certificate_of_authorization_1={set_show_certificate_of_authorization_1} set_show_certificate_of_authorization={set_show_certificate_of_authorization}></Certificate_authorization>:<></>}   

        {show_certificate_of_authorization_1?<Certificate_authorization_1 cert_data={cert_data} set_cert_data={set_cert_data} set_show_certificate_of_authorization_1={set_show_certificate_of_authorization_1} set_show_certificate_of_authorization={set_show_certificate_of_authorization} set_show_certificate_of_authorization_2={set_show_certificate_of_authorization_2}></Certificate_authorization_1>:<></>}   

        {show_certificate_of_authorization_2?<Certificate_authorization_2 cert_data={cert_data} set_cert_data={set_cert_data} set_show_certificate_of_authorization_3={set_show_certificate_of_authorization_3} set_show_certificate_of_authorization_1={set_show_certificate_of_authorization_1} set_show_certificate_of_authorization_2={set_show_certificate_of_authorization_2}></Certificate_authorization_2>:<></>}   


        {show_certificate_of_authorization_3?<Certificate_authorization_3 cert_data={cert_data} set_cert_data={set_cert_data} set_show_certificate_of_authorization_3={set_show_certificate_of_authorization_3} set_show_certificate_of_authorization_2={set_show_certificate_of_authorization_2}></Certificate_authorization_3>:<></>}   
   
       {show_comp_popup?<Comp_popup_1 set_show_worker_popup={set_show_comp_popup}></Comp_popup_1>:<></>}


        {show_upload_popup?<div className='upload_doc_popup_cont_site upload_doc_popup_cont_site_top'>
                        <img src={close} onClick={()=>set_show_upload_popup(false)} className='close_icon'/>
                        <div className='upload_doc_site_top'>
                            <img src={add_sup_icon} />
                            {doc_type=='video'?<div>העלה סרטון חדש</div>:<div>העלה מסמך חדש</div>}       
                        </div>

                        <div className='upload_doc_site_info_cont'>
                            
                            <img src={p_details_1} className='p_details_1'/>
                            {doc_type=='video'?<div className='p_details_title'>פרטי הסרטון</div>:<div className='p_details_title'>פרטי המסמך</div>}

                            <div className='tachmoshet_info_type_cont_main_row'>
                                <div className=' tachmoshet_info_type_cont_main'>
                                    <div className='tachmoshet_info_type_title tachmoshet_info_type_title_w'>כותרת</div>   
                                    <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date tachmoshet_info_type_cont_long'  value={doc_name} onChange={(e)=>set_doc_name(e.target.value)}/>
                                </div>
                            </div> 

                            <div className='tachmoshet_info_type_cont_main_row tachmoshet_info_type_cont_main_row_1'>
                                <div className=' tachmoshet_info_type_cont_main'>
                                    <div className='tachmoshet_info_type_title tachmoshet_info_type_title_w'>תוקף</div>   
                                    <input type="date" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date tachmoshet_info_type_row_date_sl' placeholder='תוקף' value={doc_date} onChange={(e)=>set_doc_date(e.target.value)}/>
                                </div>

                                {doc_type=='q'?
                                <div className=' tachmoshet_info_type_cont_main'>
                                    <div className='tachmoshet_info_type_title tachmoshet_info_type_title_w'>מיועד ל</div>   
                                    <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date tachmoshet_info_type_row_date_sl' placeholder='מיועד ל' value={doc_t_for} onChange={(e)=>set_doc_t_for(e.target.value)}/>
                                </div>:<></>}
                                
                            </div> 

                        </div>

                        <div className='upload_doc_site_info_cont_2'>
                            <img src={p_details_1} className='p_details_1'/>
                            {doc_type=='video'?<div className='p_details_title'>העלאת הסרטון</div>:<div className='p_details_title'>העלאת המסמך</div>}
                            <div className='upload_doc_site_info_cont_2_file' onClick={focusInput}>
                                <img src={upload_w} className=''/>
                                <input type="file" onChange={(e)=>upload_file_func(e.target.files)} ref={inputElement} className='file_input' />

                                <div>גרור קבצים לכאן או לחץ להעלאה</div>
                            </div>

                            {doc_path?<div className='uploaded_doc_row'>
                                <img src={trash_w} className='trash_w_file' onClick={()=>set_doc_path('')}/>
                                {doc_path}
                            </div>:<></>}
                        </div>

                        <div className='save_upload_doc_site_cont'>
                            <div className='save_upload_doc_site_btn' onClick={()=>save_t_doc_func()}>שמור והעלה למערכת</div>
                            <div className='cancel_upload_doc_site_btn' onClick={()=>set_show_upload_popup(false)}>ביטול</div>    
                        </div>

                    </div>:<></>}

        {show_doc?<Show_doc show_doc={show_doc} set_show_doc={set_show_doc}></Show_doc>:<></>}

    </>
  )
}

export default Neshek
