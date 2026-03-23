

//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Site_page.css'

// import Dashboard from './Dashboard'
import download_doc from './assets/download_doc.png'
import warning_site from './assets/warning_site.png'

import filter from './assets/filter.png'
import add_sup_icon from './assets/add_sup_icon.png'
import close from './assets/close.png'
import p_details_1 from './assets/p_details_1.png'
import upload_w from './assets/upload_w.png'
import trash_w from './assets/trash_w.png'


import {  useEffect, useRef, useState } from 'react'
import axios from 'axios'


function Site_page_docs() {

    const [selected_tab, set_selected_tab] = useState(1);
    const [site_docs, set_site_docs] = useState([]);
    const [site_docs_original, set_site_docs_original] = useState([]);
    const [fake, set_fake] = useState(false);
    const [doc_name, set_doc_name] = useState('');
    const [dac_date, set_dac_date] = useState('');
    const [doc_path, set_doc_path] = useState('');
    const [category, set_category] = useState('');
    
    const inputElement:any = useRef('');
        const focusInput = () => {
        inputElement.current.click();
        };

    
    
    const [show_upload_popup, set_show_upload_popup] = useState(false);

    useEffect(() => {
        get_site_docs();
    }, []);

    function download_file_func(file_name:any){
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

    function get_site_docs(){
        let payload = new FormData();
    
        axios({
            method: 'post',
            url: globalThis.app.current+'/get_site_docs',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(res => {

            if (res.data.recordset.length>0){
                set_site_docs(res.data.recordset);
                set_site_docs_original(res.data.recordset);
            } 
            
        });
    }

    function filter_docs_func(val:any){
        let site_docs_original_t:any=site_docs_original;
        let docs_t:any=[];
        for(let i=0; i<site_docs_original_t.length; i++){
            if(site_docs_original_t[i].category==val){
                docs_t.push(site_docs_original_t[i]);
            }
        }

        if(val=="כל המסמכים"){
            set_site_docs(site_docs_original_t);
        } else {
            set_site_docs(docs_t);
        }
        
        set_fake(!fake);
    }
    

    function save_site_docs_func(){
         let payload = new FormData();

         payload.append('doc_name',doc_name);
         payload.append('dac_date',dac_date);
         payload.append('doc_path',doc_path);
         payload.append('category',category)
    
        axios({
            method: 'post',
            url: globalThis.app.current+'/save_site_docs',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
            set_doc_name('');
            set_dac_date('');
            set_doc_path('');
            set_category('');
            set_show_upload_popup(false);
            get_site_docs();
        });
    }
    
  return (
    <>
    <div className='site_page_general_info_cont'>
        
          <div>
    
                <div className='site_workers_cont site_docs_cont'>
                    <div className='p_details_title'>מסמכים אחרונים</div>

                    <div className='btn_exp_cont_site_doc'>
                        <input type="text" placeholder='חיפוש נשק' className='search_input_site btn_exp_cont_input'/>
                        <div className='select_period'>סינון

                            <img src={filter} className='filter_icon'/>
                        </div>
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    <div className='upload_doc_btn_site' onClick={()=>set_show_upload_popup(true)}>+ העלאת מסמך</div>

                    {show_upload_popup?<div className='upload_doc_popup_cont_site'>
                        <img src={close} onClick={()=>set_show_upload_popup(false)} className='close_icon'/>
                        <div className='upload_doc_site_top'>
                            <img src={add_sup_icon} />
                            <div>העלה מסמך חדש</div>       
                        </div>

                        <div className='upload_doc_site_info_cont'>
                            
                            <img src={p_details_1} className='p_details_1'/>
                            <div className='p_details_title'>פרטי המסמך</div>

                            <div className='tachmoshet_info_type_cont_main_row'>
                                <div className=' tachmoshet_info_type_cont_main'>
                                    <div className='tachmoshet_info_type_title tachmoshet_info_type_title_w'>כותרת המסמך</div>   
                                    <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date tachmoshet_info_type_cont_long'  value={doc_name} onChange={(e)=>set_doc_name(e.target.value)}/>
                                </div>
                            </div> 

                            <div className='tachmoshet_info_type_cont_main_row tachmoshet_info_type_cont_main_row_1'>
                                <div className=' tachmoshet_info_type_cont_main'>
                                    <div className='tachmoshet_info_type_title tachmoshet_info_type_title_w'>תוקף המסמך</div>   
                                    <input type="date" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date tachmoshet_info_type_row_date_sl' placeholder='תוקף' value={dac_date} onChange={(e)=>set_dac_date(e.target.value)}/>
                                </div>

                                <div className=' tachmoshet_info_type_cont_main'>
                                    <div className='tachmoshet_info_type_title tachmoshet_info_type_title_w'>קטגוריה</div>   
                                    <select className='tachmoshet_info_type_cont tachmoshet_info_type_row_date tachmoshet_info_type_row_date_sl' value={category} onChange={(e)=>set_category(e.target.value)}>
                                        <option>בחירת קטגוריה</option>
                                        <option>תקנון</option>
                                        <option>בטיחות</option>
                                        <option>ציוד</option>
                                        <option>חירום</option>
                                        <option>נשקים</option>
                                        <option>כללי</option>
                                    </select>
                                </div>
                            </div> 

                        </div>

                        <div className='upload_doc_site_info_cont_2'>
                            <img src={p_details_1} className='p_details_1'/>
                            <div className='p_details_title'>העלאת המסמך</div>
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
                            <div className='save_upload_doc_site_btn' onClick={()=>save_site_docs_func()}>שמור והעלה למערכת</div>
                            <div className='cancel_upload_doc_site_btn' onClick={()=>set_show_upload_popup(false)}>ביטול</div>    
                        </div>

                    </div>:<></>}

                    <div className='top_btns_cont_site_page_neshek '>
                        <div className={'top_btn '+ (selected_tab==1?"top_btn_selected":"")} onClick={()=>{set_selected_tab(1); filter_docs_func('כל המסמכים')}}>כל המסמכים</div>
                        <div className={'top_btn '+ (selected_tab==2?"top_btn_selected":"")} onClick={()=>{set_selected_tab(2); filter_docs_func('תקנון')}}>תקנון</div>
                        <div className={'top_btn '+ (selected_tab==3?"top_btn_selected":"")} onClick={()=>{set_selected_tab(3); filter_docs_func('בטיחות')}}>בטיחות</div>
                        <div className={'top_btn '+ (selected_tab==4?"top_btn_selected":"")} onClick={()=>{set_selected_tab(4); filter_docs_func('ציוד')}}>ציוד</div>
                        <div className={'top_btn '+ (selected_tab==5?"top_btn_selected":"")} onClick={()=>{set_selected_tab(5); filter_docs_func('חירום')}}>חירום</div>
                        <div className={'top_btn '+ (selected_tab==6?"top_btn_selected":"")} onClick={()=>{set_selected_tab(6); filter_docs_func('נשקים')}}>נשקים</div>
                        <div className={'top_btn '+ (selected_tab==7?"top_btn_selected":"")} onClick={()=>{set_selected_tab(7); filter_docs_func('כללי')}}>כללי</div>
                    </div>

                    <div className='table_header_cont'>
                        <div className='table_header'>שם המסמך</div>
                        <div className='table_header'>קטגוריה</div>
                        {/* <div className='table_header'>סוג קובץ</div>
                        <div className='table_header'>גודל</div> */}
                        <div className='table_header'>תאריך</div>
                    </div>

                    {site_docs && site_docs.map((site_doc:any) => (
                    <div className='table_header_cont'>
                        <div className='table_row'>
                        {site_doc.doc_name}
                        </div>
                        <div className='table_row'><div >{site_doc.category}</div></div>
                        {/* <div className='table_row'>PDF</div>
                        <div className='table_row'>
                           2.4 mb
                        </div> */}
                        <div className='table_row'>{site_doc.dac_date.split('T')[0]}</div>
                        <div className='download_doc_cont_site'>
                            <img src={download_doc} onClick={()=>download_file_func(site_doc.doc_path)} className='download_doc'/>
                            {/* <div className='sign_cont_s'>
                                {site_doc.sign && site_doc.sign !='undefined'? <img src={site_doc.sign}/>:<>
                                <img src={warning_site} className='warning_site' />
                                חסרה חתימה</>}
                            </div> */}
                        </div>
                    </div>
                    ))}

                      {/* <div className='table_header_cont'>
                        <div className='table_row'>
                         תקנון אתר
                        </div>
                        <div className='table_row'><div >תקנון</div></div>
                        <div className='table_row'>PDF</div>
                        <div className='table_row'>
                           2.4 mb
                        </div>
                        <div className='table_row'>2025-11-15</div>
                        <div className='download_doc_cont_site'>
                            <img src={download_doc} />
                            <div className='sign_cont_s'>
                                <img src={warning_site} className='warning_site' />
                                חסרה חתימה
                            </div>
                        </div>
                    </div>

                      <div className='table_header_cont'>
                        <div className='table_row'>
                         תקנון אתר
                        </div>
                        <div className='table_row'><div >תקנון</div></div>
                        <div className='table_row'>PDF</div>
                        <div className='table_row'>
                           2.4 mb
                        </div>
                        <div className='table_row'>2025-11-15</div>
                        <div className='download_doc_cont_site'>
                            <img src={download_doc} />
                            <div className='sign_cont_s'>
                                <img src={warning_site} className='warning_site' />
                                חסרה חתימה
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>

            <div>
                <div className='fast_actions_site_cont'>
                    <div className='p_details_title'>פעולות מהירות</div>

                    <div className='btn_exp_cont_site'>
                      
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    <div className='add_meavteah_btn flame_w'>ביצוע העברה חמה</div>
                    <div className='add_meavteah_btn add_neshek_w'>הוספת נשק לאתר</div>
                     <div className='add_meavteah_btn vault'>אפסון נשק</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Site_page_docs