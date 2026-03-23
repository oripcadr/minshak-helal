import { useEffect, useState } from 'react';
import './Equipment_transfer_popup.css'


// import {  useState } from 'react'
import close_img from './assets/close.png'

import axios from 'axios';


function Equipment_transfer_popup(props:any) {

    const [show_popup_eq, set_show_popup_eq] = useState(false);
    const [sites, set_sites] = useState([]);
    const [eq_all, set_eq_all] = useState([]);
    const [selected_eq, set_selected_eq] = useState<any>([]);
    const [fake, set_fake] = useState(false);
    const [mouse_bg_del,set_mouse_bg_del] = useState<any>(false);
    const [from_site,set_from_site] = useState<any>('');
    const [to_site,set_to_site] = useState<any>('');
    const [count,set_count] = useState<any>('');
    const [reason,set_reason] = useState<any>('');
    const [comments,set_comments] = useState<any>('');
    const [user_name,set_user_name] = useState<any>('');
    
    useEffect(() => {
        get_all_sites();
        get_eq();
    }, []);

    function get_all_sites(){

      let payload = new FormData();
    
      axios({
        method: 'post',
        url: globalThis.app.current+'/get_all_sites',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(res => {

        if (res.data.recordset.length>0){
           set_sites(res.data.recordset);
        }
      })

    }
    
    
    function get_eq(){

      let payload = new FormData();
    
      axios({
        method: 'post',
        url: globalThis.app.current+'/get_eq',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(res => {

        if (res.data.recordset.length>0){
           set_eq_all(res.data.recordset);

        }
      })

    }

    function add_selected_eq(eq:any){
        let t:any=selected_eq;
        t.push(eq);
        set_selected_eq(t);
        set_fake(!fake);
    }

    function remove_selected_eq(eq:any){
        let t:any=selected_eq;
        let f:any=[];

        for(let i=0; i<t.length;i++){
            if(t[i].id!=eq.id){
                f.push(eq);
            }
        }

        set_selected_eq(f);
        set_fake(!fake);
    }

    function save_move_eq(){
      let payload = new FormData();

      let s_eq_name='';

      for(let i=0; i<selected_eq.length; i++){
        s_eq_name+="|"+selected_eq[i].eq_type;
      }

      payload.append('eq_name', s_eq_name);
      payload.append('from_site',from_site);
      payload.append('to_site',to_site);
      payload.append('count',count);
      payload.append('reason',reason);
      payload.append('user_name',user_name);
      payload.append('comments',comments);

      axios({
        method: 'post',
        url: globalThis.app.current+'/save_move_eq',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(() => {

      })
    }

  return (
   <><div className='layout'></div>
        <div className='eq_order_popup_cont'>
            <img src={close_img} className='close_img' onClick={()=>props.set_show_eq_transfer_popup(false)}/>
            <div className='eq_p_title'>העברת ציוד בין אתרים</div>
            {/* <img src={eq_p_1} className='eq_p_1' /> */}

            <div className='transfer_more_btn_main'>

                {selected_eq && selected_eq.map((eq:any)  => (
                <div className={'eq_icon_1_text_cont '+(mouse_bg_del.id==eq.id?"eq_icon_1_text_cont_hover":"") } onMouseOver={()=>set_mouse_bg_del(eq)} onMouseOut={()=>set_mouse_bg_del(false)}>
                    {mouse_bg_del.id==eq.id?<img src={close_img} onClick={()=>remove_selected_eq(eq)}/>:<></>}
                    <img src={globalThis.app.current+'/'+eq.img_path} className='img_path_eq'/>
                    <div>{eq.eq_type}</div>
                </div>
                ))}

                <div className='transfer_more_btn' onClick={()=>set_show_popup_eq(!show_popup_eq)}>
                    + העבר ציוד נוסף

                        {show_popup_eq?<div className='eq_type_list_cont'>
                    {eq_all && eq_all.map((eq:any)  => (
                        <div className='eq_type_list_cont_in' onClick={()=>{add_selected_eq(eq);set_show_popup_eq(false)}}>
                        {eq.eq_type} 
                        <img src={globalThis.app.current+'/'+eq.img_path} className='img_path_eq'/></div>
                    ))}
                </div>:<></>}
                </div>

            </div>

            <div className='box_t_row_main'>
                <div className='box_t_row'>
                    <div className='settings_box_subtitle_b_t'>הציוד עובר מ</div>
                    <select className='role_name_select_t' value={from_site} onChange={(e)=>set_from_site(e.target.value)}>
                        <option>בחר אתר</option>
                        {sites && sites.map((site:any)  => (
                        <option>{site.site_name}</option>
                        ))}
                    </select>
                </div>


                 <div className='box_t_row'>
                    <div className='settings_box_subtitle_b_t'>הציוד מגיע ל</div>
                    <select className='role_name_select_t'  value={to_site} onChange={(e)=>set_to_site(e.target.value)}>
                        <option>בחר אתר</option>
                         {sites && sites.map((site:any)  => (
                        <option>{site.site_name}</option>
                        ))}
                    </select>
                </div>

                <div className='box_t_row'>
                    <div className='settings_box_subtitle_b_t'>כמות להעברה</div>
                    <input type='text' className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' placeholder='1' value={count} onChange={(e)=>set_count(e.target.value)}/>
                </div>



            </div>


            <div className='box_t_row_main'>
                <div className='box_t_row'>
                    <div className='settings_box_subtitle_b_t'>סיבת העברה</div>
                    <select className='role_name_select_t'  value={reason} onChange={(e)=>set_reason(e.target.value)}>
                        <option>בחר סיבה</option>
                        <option>מחסור באתר היעד</option>
                        <option>מחסור באתר המקור</option>
                        <option>תחזוקה תקופתית</option>
                        <option>אחר</option>
                    </select>
                </div>

                <div className='box_t_row'>
                    <div className='settings_box_subtitle_b_t'>שם המעביר</div>
                    <input type='text' className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' placeholder='1' value={user_name} onChange={(e)=>set_user_name(e.target.value)}/>
                </div>

            </div>

            <div className='box_t_row_main'>
                <div className='box_t_row'>
                    <div className='settings_box_subtitle_b_t'>הערות</div>
                    <textarea  className='eq_desc_text_comments'   value={comments} onChange={(e)=>set_comments(e.target.value)}/>
                </div>

            </div>

            <div className='eq_back_btn_cont'>
                <div className='eq_back_btn' onClick={()=>{props.set_show_eq_transfer_popup(false); }}>חזור</div>
                <div className='eq_cont_btn_t' onClick={()=>{props.set_show_eq_transfer_popup(false);save_move_eq()}}>המשך</div>
            </div>

        </div>
        </>
  )
}


export default Equipment_transfer_popup