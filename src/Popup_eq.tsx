import './Popup_sup_report.css'


import close from './assets/close.png'
import more_icon from './assets/more_icon.png'
import p_details_1 from './assets/p_details_1.png'

import b_1 from './assets/b_1.png'
import { useEffect, useState } from 'react'
import axios from 'axios'


// import { useState } from 'react'

function Popup_eq(props:any) {

    const [eq_in_site, set_eq_in_site] = useState([]);

    useEffect(() => {
        get_eq_sites();
    }, []);
    
    function get_eq_sites(){

      let payload = new FormData();
      payload.append('eq_id', props.popup_eq.id)
    
      axios({
        method: 'post',
        url: globalThis.app.current+'/get_eq_sites',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(res => {

        if (res.data.recordset.length>0){
           set_eq_in_site(res.data.recordset);
          // set_sites_original(res.data.recordset);
        }
      })

    }


  return (
    <>
      <div className='worker_popup_cont sup_report_pupop eq_pupop' >
        <img src={close} className='close_icon' onClick={()=>props.set_popup_eq(false)}/>
        <div className='worker_popup_header'>
            {props.popup_eq.img_path?<img src={globalThis.app.current+'/'+props.popup_eq.img_path} className='user_b eq_img_pop'/>:<></>}    
            <div className='user_b_text_cont'>
                <div className='user_b_text_main_tachmoshet'>{props.popup_eq.eq_type}</div>
                
            </div>    
        </div>

        <div className='move_eq_btn_cont'>
            <div className='move_eq_btn'>העברת מלאי בין ישויות</div>
            <div className='export_eq_btn'>ייצוא דו"ח</div>
        </div>

        <div className='tachmoshet_info_cont eq_info_cont'>

            <img src={more_icon} className='w_more_icon'/>
            <img src={p_details_1} className='p_details_1'/>
            <div className='p_details_title'>פרטי הציוד</div>
            
                <div className='tachmoshet_info_type_cont_main_row'>
                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>קטגוריה</div>   
                                            
                        <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date tachmoshet_info_type_row_date_eq' value={props.popup_eq.catogory} />
                        
                    </div>

                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>ספק</div>   
                        <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date tachmoshet_info_type_row_date_eq' value={props.popup_eq.supplier} />
                    </div>
                </div>


                <div className='tachmoshet_info_type_cont_main_row'>
                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>מחיר</div>   
                        <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date tachmoshet_info_type_row_date_eq'  value={props.popup_eq.price} />
                    </div>

                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>שווי כולל</div>   
                        <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date tachmoshet_info_type_row_date_eq'  value={props.popup_eq.price} />
                    </div>
                </div>


                <div className='tachmoshet_info_type_cont_main_row'>
                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>תיאור</div>   
                        <textarea className='tachmoshet_info_type_cont tachmoshet_info_type_row_date eq_desc_text' placeholder='אפוד טקטי מחומר בליסטי ברמת הגנה III-A, כולל כיסים מרובים לציוד ומערכת MOLLE להרחבה.'  value={props.popup_eq.description} />
                    </div>
                </div>

        </div>

        <div className='cout_eq_box_cont'>
            <div className='cout_eq_box'>
                <div>זמינים במחסן</div>
                <div className='eq_count_valid'>{props.popup_eq.in_mahsan}</div>
            </div>

            <div className='cout_eq_box'>
                <div>בשימוש</div>
                <div className='eq_count_in_use'>{props.popup_eq.count_in_use}</div>
            </div>

            <div className='cout_eq_box'>
                <div>תקולים</div>
                <div className='eq_count_takul'>{props.popup_eq.takul}</div>
            </div>

        </div>

         <div className='tachmoshet_info_cont eq_places_cont'>

            <img src={more_icon} className='w_more_icon'/>
            <img src={p_details_1} className='p_details_1'/>
            <div className='p_details_title'>מיקומים</div>
            

            <div className='table_header_cont table_header_cont_eq_in'>
                <div className='table_header'>שם אתר</div>
           
                <div className='table_header'>סה"כ</div>
                <div className='table_header'>זמין</div>

                <div className='table_header'>בשימוש</div>
                <div className='table_header'>תקול</div>
                
                <div className='table_header'>פעולות</div>
            </div>


        {eq_in_site && eq_in_site.map((site:any)  => (
               <div className='table_header_cont' >
                    
                        <div  className='table_row_r'><img src={b_1} className='user_s' />
                      {site.site_name}
                        </div>
                      

                        <div className='table_row_r' >{parseInt(site.valid_count)+parseInt(site.in_use)+parseInt(site.takul)}</div>
                        <div className='table_row_r'><div className="valid_eq_cont">{site.valid_count}</div></div>
                        <div className='table_row_r'><div className="in_use_eq_cont">{site.in_use}</div></div>

                        
                        <div className='table_row_r'><div className="takul_eq_cont">{site.takul}</div></div>

                      

                        <div className='table_row_r'><div className="site_eq_move_cont">העברת ציוד</div></div>
                            
                        {/* <img src={more_w} className='more_w more_w_s' onClick={()=>set_show_more_options(eq_one.id)}/> */}
                    </div>

                 

        ))}

        </div>

      </div>
    </>
  )}


export default Popup_eq