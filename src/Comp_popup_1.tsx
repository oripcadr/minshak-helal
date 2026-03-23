
import './Comp_popup.css'
import g_dot from './assets/g_dot.png'
import more_icon from './assets/more_icon.png'
//import y_dot from './assets/y_dot.png'


import close from './assets/close.png'
import folder_img from './assets/folder_img.png'
import print from './assets/print.png'
import pencil from './assets/eye_w.png'
import trash_s from './assets/trash_s.png'
import { useEffect, useRef, useState } from 'react'
import p_details_1 from './assets/p_details_1.png'
import add_sup_icon from './assets/add_sup_icon.png'
import upload_w from './assets/upload_w.png'
import trash_w from './assets/trash_w.png'
import axios from 'axios'
import Show_doc from './Show_doc'

function Comp_popup_1(props:any) {

    const [show_upload_popup, set_show_upload_popup] = useState(false);

    const [company_folder_docs, set_company_folder_docs] = useState([]);
    const [company_folder_docs_original, set_company_folder_docs_original] = useState([]);
    const [fake, set_fake] = useState(false);
    const [doc_name, set_doc_name] = useState('');
    const [dac_date, set_dac_date] = useState('');
    const [doc_path, set_doc_path] = useState('');

    const [show_more, set_show_more] = useState<any>(false);
    const [delete_doc_popup, set_delete_doc_popup] = useState<any>(false);

    const [show_doc, set_show_doc] = useState<any>(false);

    useEffect(() => {
        get_company_folder_docs();
    }, []);

    function get_company_folder_docs(){
        let payload = new FormData();
               
        axios({
            method: 'post',
            url: globalThis.app.current+'/get_company_folder_docs',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(res => {
           set_company_folder_docs(res.data.recordset);
           set_company_folder_docs_original(res.data.recordset);
        }); 
    }

    const inputElement:any = useRef('');
        const focusInput = () => {
        inputElement.current.click();
    };

    function save_company_folder_func(){
        let payload = new FormData();

        payload.append('doc_name',doc_name);
        payload.append('dac_date',dac_date);
        payload.append('doc_path',doc_path);
   
        axios({
            method: 'post',
            url: globalThis.app.current+'/save_company_folder_docs',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
            set_doc_name('');
            set_dac_date('');
            set_doc_path('');
        
            set_show_upload_popup(false);
            get_company_folder_docs();
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

    function delete_doc(){
        let payload = new FormData();
               
        payload.append("id", delete_doc_popup);

        axios({
            method: 'post',
            url: globalThis.app.current+'/delete_company_folder_docs',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
           get_company_folder_docs();
        }); 
    }

    function find_file_by_name(val:any){
          let a:any=company_folder_docs_original;
        let final:any =[];

        for(let i=0; i<a.length; i++){
            if(a[i].file_name.includes(val)){
                final.push(a[i]);
            }
        }

        set_company_folder_docs(final);
        set_fake(!fake);
    }

    const handlePrint = async (file_name:any) => {
        const response = await fetch(globalThis.app.current+'/'+file_name, {
            method: "GET"
        });

        const blob = await response.blob();
        const fileURL = window.URL.createObjectURL(blob);

        const printWindow:any = window.open(fileURL);
        printWindow.onload = () => {
            printWindow.print();
        };
    };
    
  return (
    <>
    <div className='worker_popup_cont worker_popup_cont_comp'>
        <img src={close} className='close_icon'  onClick={()=>props.set_show_worker_popup(false)}/>
        <div className='worker_popup_header'>
            <img src={folder_img} className='user_b'/>    
            <div className='user_b_text_cont'>
                <div className='user_b_text_main_r'>תיק חברה – מפעל ראוי</div>
                <div className='user_b_text_submain'>
                 כל המסמכים והאישורים הרשמיים של הארגון במקום אחד. נגיש לבעל הרשיון המיוחד בלבד.
                 
                </div>
            </div>    

        </div>

        <div className='comp_search_cont'>
           <input type="text" placeholder='חיפוש מסמך' className='search_video' onChange={(e)=>find_file_by_name(e.target.value)}/>
            <div className='add_new_video_btn' onClick={()=>set_show_upload_popup(true)}>+ מסמך חדש</div>
            <div className='export_btn'>ייצוא</div>
        </div>

        {company_folder_docs && company_folder_docs.map((company_folder_doc:any) => (
            <>
            <div className='comp_row_box_cont'>
                <img src={more_icon} className='more_icon_comp' onClick={()=>set_show_more(company_folder_doc.id)}/>
                <div className='comp_row_box_title'>{company_folder_doc.file_name}</div>
                <div className='comp_row_box_subtitle_cont'>
                    <img src={g_dot} />
                    <div>בתוקף עד {company_folder_doc.valid_date.split('T')[0]}</div>
                </div>
            </div>

            {show_more==company_folder_doc.id?<div className='more_options_cont_doc'>
                <div className='more_options_row more_options_row_1' onClick={()=>{set_show_doc(company_folder_doc.file_path);set_show_more(false)}}>צפייה
                    <img src={pencil} />
                </div>
                <div className='more_options_row more_options_row_1' onClick={()=>{handlePrint(company_folder_doc.file_path);set_show_more(false)}}>הדפסה
                    <img src={print} className='print_icon_comp'/>
                </div>
                <div className='more_options_row' onClick={()=>set_delete_doc_popup(company_folder_doc.id)}>מחיקה
                    <img src={trash_s} />
                </div>
            </div>:<></>}

            {delete_doc_popup==company_folder_doc.id?<div className='delete_worker_popup_cont'>
                האם אתה בטוח רוצה למחוק? 
                <div className='delete_worker_popup_btncont'>
                    <div onClick={()=>delete_doc()}>כן</div>
                    <div onClick={()=>{set_delete_doc_popup(false);set_show_more('')}}>לא</div>
                </div>
            </div>:<></>}
            </>
        ))}
{/* 
        <div className='comp_row_box_cont'>
            <img src={more_icon} className='more_icon_comp'/>
            <div className='comp_row_box_title'>אישור מפעל ראוי – דרום</div>
            <div className='comp_row_box_subtitle_cont'>
                <img src={y_dot} />
                <div>בתוקף עד 06/2026</div>
            </div>

            <img src={refresh} className='refresh_icon'/>    
        </div>


   <div className='comp_row_box_cont'>
            <img src={more_icon} className='more_icon_comp'/>
            <div className='comp_row_box_title'>רישיון מיוחד לבעל הרשיון</div>
            <div className='comp_row_box_subtitle_cont'>
                <img src={g_dot} />
                <div>בתוקף עד 06/2026</div>
            </div>

        </div>

          <div className='comp_row_box_cont'>
            <img src={more_icon} className='more_icon_comp'/>
            <div className='comp_row_box_title'>אישור מפעל ראוי – דרום</div>
            <div className='comp_row_box_subtitle_cont'>
                <img src={y_dot} />
                <div>בתוקף עד 06/2026</div>
            </div>

            <img src={refresh} className='refresh_icon'/>    
        </div>

           <div className='comp_row_box_cont'>
            <img src={more_icon} className='more_icon_comp'/>
            <div className='comp_row_box_title'>רישיון מיוחד לבעל הרשיון</div>
            <div className='comp_row_box_subtitle_cont'>
                <img src={g_dot} />
                <div>בתוקף עד 06/2026</div>
            </div>

        </div>

          <div className='comp_row_box_cont'>
            <img src={more_icon} className='more_icon_comp'/>
            <div className='comp_row_box_title'>אישור מפעל ראוי – דרום</div>
            <div className='comp_row_box_subtitle_cont'>
                <img src={y_dot} />
                <div>בתוקף עד 06/2026</div>
            </div>

            <img src={refresh} className='refresh_icon'/>    
        </div>

    <div className='comp_row_box_cont'>
            <img src={more_icon} className='more_icon_comp'/>
            <div className='comp_row_box_title'>רישיון מיוחד לבעל הרשיון</div>
            <div className='comp_row_box_subtitle_cont'>
                <img src={g_dot} />
                <div>בתוקף עד 06/2026</div>
            </div>

        </div>

          <div className='comp_row_box_cont'>
            <img src={more_icon} className='more_icon_comp'/>
            <div className='comp_row_box_title'>אישור מפעל ראוי – דרום</div>
            <div className='comp_row_box_subtitle_cont'>
                <img src={y_dot} />
                <div>בתוקף עד 06/2026</div>
            </div>

            <img src={refresh} className='refresh_icon'/>    
        </div> */}

    </div>


    
        {show_upload_popup?<div className='upload_doc_popup_cont_site upload_doc_popup_cont_site_top'>
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
                            <div className='save_upload_doc_site_btn' onClick={()=>save_company_folder_func()}>שמור והעלה למערכת</div>
                            <div className='cancel_upload_doc_site_btn' onClick={()=>set_show_upload_popup(false)}>ביטול</div>    
                        </div>

                    </div>:<></>}

        {show_doc?<Show_doc show_doc={show_doc} set_show_doc={set_show_doc}></Show_doc>:<></>}
    </>
  )
}

export default Comp_popup_1