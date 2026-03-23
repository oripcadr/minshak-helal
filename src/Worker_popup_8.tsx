
import './Worker_popup.css'

import p_details_1 from './assets/p_details_1.png'

import more_icon from './assets/more_icon.png'
import r_dot from './assets/r_dot.png'
import g_dot from './assets/g_dot.png'
import eq_del from './assets/eq_del.png'

import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
// import { useState } from 'react'

function Worker_popup_8(props:any) {

    const [show_status_opt, set_show_status_opt] = useState(false);
    const [show_status_opt_2, set_show_status_opt_2] = useState(false);
    const [show_eq_popup, set_show_eq_popup] = useState<any>(false);
    const [fake, set_fake] = useState<any>(false);

    const [eq_obj, set_eq_obj] = useState<any>([{eq_type:'',eq_count:'',eq_num:'',eq_comments:''}]);
    const [eq_obj_worker, set_eq_obj_worker] = useState<any>([{eq_type:'',eq_count:'',eq_num:'',eq_comments:''}]);

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
        get_worker_equipment();
    }, []);

    function get_worker_equipment(){
      let payload = new FormData();

      payload.append("id", props.worker.id);

      axios({
        method: 'post',
        url: globalThis.app.current+'/get_worker_equipment',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(res => {

        debugger;
        if (res.data.recordset.length>0){
          set_eq_obj_worker(res.data.recordset);
          set_eq_obj(res.data.recordset);
          setTrimmedDataURL_1(res.data.recordset[0].sign);
        }
       
      });

    }

    
    function add_eq_to_worker(){
      set_eq_obj_worker(eq_obj);
      set_show_eq_popup(false);
      set_fake(!fake);
    }


    
    function add_eq_row(){

      let eq_obj_t={eq_type:'',eq_count:'',eq_num:'',eq_comments:''};
      let eq_obj_1=eq_obj;

      eq_obj_1.push(eq_obj_t);

      set_eq_obj(eq_obj_1);
      set_fake(!fake);

    }

    function set_eq_obj_val(value:any, type:any, index:any){
      let eq_obj_1=eq_obj;

      if(type=='eq_type'){
        eq_obj_1[index].eq_type=value;
      }
      
      if(type=='eq_count'){
        eq_obj_1[index].eq_count=value;
      }

      if(type=='eq_num'){
        eq_obj_1[index].eq_num=value;
      }
      
      if(type=='eq_comments'){
        eq_obj_1[index].eq_comments=value;
      }

      set_eq_obj(eq_obj_1);
      set_fake(!fake);
    }

    function del_eq_obj(index:any){
      let eq_obj_1=eq_obj;
      let eq_obj_f:any=[];

      for(let i=0; i<eq_obj_1.length; i++){
        if (i!=index){
          eq_obj_f.push(eq_obj_1[i]);
        }
      }  

      set_eq_obj(eq_obj_f);
      set_fake(!fake);
    }


    function update_eq(){
      let payload = new FormData();

      payload.append("worker_id", props.worker.id);

      payload.append("worker_equipment", JSON.stringify(eq_obj_worker));

      payload.append("sign",trimmedDataURL_1);
      
      axios({
        method: 'post',
        url: globalThis.app.current+'/update_eq',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(() => {
       // props.get_all_workers();
       // props.set_new_worker_popup(false);
        props.set_show_worker_popup(0)
      });
  
    }

  return (
    <>
  
        <div className='personal_d_cont_main_2'>
            <img src={more_icon} className='w_more_icon'/>
            <img src={p_details_1} className='p_details_1'/>
            <div className='p_details_title'>ציוד אישי שהונפק לעובד</div>

            <div className='add_payment_btn_note add_payment_btn_note_equ' onClick={()=>set_show_eq_popup(!show_eq_popup)}>הוספת ציוד +</div>

                <div className='table_header_cont table_header_cont_equ'>
                            <div className='table_header'>
                                פריט ציוד
                            </div>

                            <div className='table_header'>
                               כמות
                            </div>

                            <div className='table_header'>
                               מצב בקבלה
                            </div>

                            <div className='table_header'>
                             מצב בהחזרה
                            </div>

                            <div className='table_header'>
                            הערות
                            </div>

                            <div className='table_header'>
                           חתימה
                            </div>
                        </div>

                        {eq_obj_worker && eq_obj_worker[0].eq_type!='' && eq_obj_worker.map((obj_worker:any) => (
                            <div className='table_header_cont '>
                            <div className='table_row'>{obj_worker.eq_type}</div>
                            <div className='table_row'>{obj_worker.eq_count}</div>
                            <div className='table_row'>תקין</div>
                            <div className='table_row'>תקין</div>
                            <div className='table_row'>{obj_worker.eq_comments}</div>
                            <div className='tachmoshet_info_type_cont tachmoshet_info_type_row_sign'><img src={trimmedDataURL_1} className='eq_sign_img' /></div>
                            </div> 
                        ))}

                        {/* <div className='table_header_cont '>
                            <div className='table_row'>מכשיר קשר</div>
                            <div className='table_row'>1</div>
                            <div className='table_row'>
                                <div className='status_e' onClick={()=>set_show_status_opt(!show_status_opt)}>תקין <img src={g_dot} /></div>
                        
                            </div>

                              
                            {show_status_opt?<div className='status_e_cont'>
                                <div onClick={()=>set_show_status_opt(!show_status_opt)}>תקין <img src={g_dot} /></div>
                                <div onClick={()=>set_show_status_opt(!show_status_opt)}>תקול <img src={r_dot} /></div>
                            </div>:<></>}
                        
                            <div className='table_row'>
                                <div className='status_e'  onClick={()=>set_show_status_opt_2(!show_status_opt_2)}>תקול <img src={r_dot} /></div>
                            </div>

                            {show_status_opt_2?<div className='status_e_cont_2'>
                                <div onClick={()=>set_show_status_opt_2(!show_status_opt_2)}>תקין <img src={g_dot} /></div>
                                <div onClick={()=>set_show_status_opt_2(!show_status_opt_2)}>תקול <img src={r_dot} /></div>
                            </div>:<></>}

                            <div className='table_row'>על חשבון התלוש</div>
                            <div className='table_row'><div className='sign_box'></div> </div>
                        </div>


                        <div className='table_header_cont '>
                            <div className='table_row'>פנס</div>
                            <div className='table_row'>1</div>
                            <div className='table_row'>
                                <div className='status_e'>תקין <img src={g_dot} /></div>
                            </div>

                            <div className='table_row'>
                                <div className='status_e'>תקין <img src={g_dot} /></div>
                            </div>

                            <div className='table_row'>על חשבון התלוש</div>
                            <div className='table_row'><div className='sign_box'></div> </div>
                        </div> */}

                           

        
      {show_eq_popup ?<div className='eq_popup_cont_8'>

        <div className='eq_popup_title_cont'>
          <div className='eq_popup_title_s eq_popup_title_s_long'>סוג ציוד</div>
          <div className='eq_popup_title_s'>כמות</div>
          <div className='eq_popup_title_s'>מספר סידורי</div>
          <div className='eq_popup_title_s eq_popup_title_s_long'>הערות</div>
        </div>

        <div className='eq_popup_title_cont_main'>
          {eq_obj && eq_obj.map((eq_obj_r:any, index:any) => (
            <div className='eq_popup_title_cont'>
              <div className='eq_popup_title_s eq_popup_title_s_long'><input className='input_eq input_eq_long' type="text" placeholder="סוג ציוד" value={eq_obj_r.eq_type} onChange={(e)=>set_eq_obj_val(e.target.value, "eq_type", index)}/></div>
              <div className='eq_popup_title_s'><input type="text" className='input_eq' placeholder="כמות" value={eq_obj_r.eq_count} onChange={(e)=>set_eq_obj_val(e.target.value, "eq_count", index)}/></div>
              <div className='eq_popup_title_s'><input type="text" className='input_eq' placeholder="מספר סידורי" value={eq_obj_r.eq_num} onChange={(e)=>set_eq_obj_val(e.target.value, "eq_num", index)}/></div>
              <div className='eq_popup_title_s eq_popup_title_s_long'><input type="text" className='input_eq input_eq_long' placeholder="הערות" value={eq_obj_r.eq_comments} onChange={(e)=>set_eq_obj_val(e.target.value, "eq_comments", index)}/></div>
           
            <img src={eq_del} onClick={()=>del_eq_obj(index)}/>
            </div>
          ))}
        </div>

        <div className='add_eq_btn_in' onClick={()=>add_eq_row()}>+ הוספת פריט</div>


        <div className='sign_cont_eq'>
          <div className='sign_cont_eq_title'>חתימת המקבל</div>
       
            <div className='tachmoshet_info_type_cont tachmoshet_info_type_row_date '  onClick={()=>set_sign_popup_1(!sign_popup_1)}>
                {trimmedDataURL_1?<img src={trimmedDataURL_1} className='sign_1_img' alt="signature" />:<></>}
            </div>
        </div>

        <div className='add_eq_final_btn' onClick={()=>add_eq_to_worker()}>הוסף</div>

      </div>:<></>}

        </div>

        <div className='save_t_btn save_t_btn_eq' onClick={()=>update_eq()}>עדכן ציוד</div>    

    </>
  )
}

export default Worker_popup_8