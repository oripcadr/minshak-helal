
import './Certificate_authorization.css'
import close from './assets/close.png'
import comp_img from './assets/comp_img.png'
import cert_2 from './assets/cert_2.png'
import more_icon from './assets/more_icon.png'
import p_details_1 from './assets/p_details_1.png'
import cert_check_empty from './assets/cert_check_empty.png'
import cert_check_full from './assets/cert_check_full.png'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Certificate_authorization_1(props:any) {

    const [full, set_full] = useState(false);
    const [cert_data, set_cert_data] = useState<any>(props.cert_data);
    const [cert_start, set_cert_start] = useState<any>();
    const [cert_end, set_cert_end] = useState<any>();
    const [weapons, set_weapons] = useState([]);
    const [weapons_original, set_weapons_original] = useState([]);

    const [fake, set_fake] = useState(false);
    const [mahsanit_count, set_mahsanit_count] = useState('');

    const [kadurim_count, set_kadurim_count] = useState('');

    const [show_filter, set_show_filter] = useState(false);

    const [rol_filter, set_rol_filter] = useState<any>([]);
    const [place_filter, set_place_filter] = useState<any>([]);

    const [err_msg, set_err_msg] = useState<any>([]);

    useEffect(() => {
        get_all_weapons();
        let today=new Date();

        let t=(today.getFullYear() +"-"+ ((today.getMonth()+1)<10?String(today.getMonth()+1).padStart(2, '0'):today.getMonth()+1) +"-"+ (today.getDate()<10?'0'+today.getDate():today.getDate()) )
        debugger;
        set_cert_start(t);
        let d_1=new Date(cert_data['cert_date']);
        let d_2=new Date(cert_data['organization_date']);
        debugger;
        if (d_1>d_2){
            let t1=(d_2.getFullYear() +"-"+ ((d_2.getMonth()+1)<10?String(d_2.getMonth()+1).padStart(2, '0'):d_2.getMonth()+1) +"-"+ (d_2.getDate()<10?'0'+d_2.getDate():d_2.getDate()) )

            set_cert_end(t1);
        } else{
            let t2=(d_1.getFullYear() +"-"+ ((d_1.getMonth()+1)<10?String(d_1.getMonth()+1).padStart(2, '0'):d_1.getMonth()+1) +"-"+ (d_1.getDate()<10?'0'+d_1.getDate():d_1.getDate()) )

            set_cert_end(t2); 
        }

        set_fake(!fake);

    }, []);

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
        }

      });
    }

     function set_cert_data_func(val:any, type:any){
        let cert_data_t:any=cert_data;
        if(type=='neshek_id'){
            cert_data_t['neshek']=val;
            cert_data_t['neshek_id']=val.id;
        }

        if(type=='mahsanit_count'){
            cert_data_t['mahsanit_count']=val;
        }

        if(type=='kadurim_count'){
            cert_data_t['kadurim_count']=val;
        }
        
        cert_data_t['cert_start']=cert_start;
        cert_data_t['cert_end']=cert_end;  
        
        set_cert_data(cert_data_t);
        props.set_cert_data(cert_data_t);
        set_fake(!fake);
    }

    function search_neshek_func(val:any){
        let weapons_original_t:any=weapons_original;
        let neshek_f:any=[];

        for(let i=0; i<weapons_original_t.length; i++){
            if (weapons_original_t[i].number.includes(val) || weapons_original_t[i].type.includes(val)){
                neshek_f.push(weapons_original_t[i]);
            }

        }

        set_weapons(neshek_f);
        set_fake(!fake);
    }

    function filter_by_type(rol:any,checked:any){
       let a:any=weapons_original;
       let rol_f=rol_filter;
       if (checked==true){
            rol_f.push(rol);
       } else {
        let new_rol_f=[];
        for(let j=0;j<rol_f.length; j++){
            if (rol_f[j]!=rol){
                new_rol_f.push(rol_f[j])
            }
        } 
         rol_f=new_rol_f;
       }

        let final:any =[];

        debugger
        for(let i=0; i<a.length; i++){
            for(let j=0;j<rol_f.length; j++){
                if(a[i].type==rol_f[j]){
                    final.push(a[i]);
                } 
            }
        }

        set_rol_filter(rol_f);
        set_weapons(final);
        set_fake(!fake);
    }

    function filter_by_place(rol:any,checked:any){
       let a:any=weapons_original;
       let rol_f=place_filter;
       if (checked==true){
            rol_f.push(rol);
       } else {
        let new_rol_f=[];
        for(let j=0;j<rol_f.length; j++){
            if (rol_f[j]!=rol){
                new_rol_f.push(rol_f[j])
            }
        } 
         rol_f=new_rol_f;
       }

        let final:any =[];

        debugger
        for(let i=0; i<a.length; i++){
            for(let j=0;j<rol_f.length; j++){
                if(a[i].place==rol_f[j]){
                    final.push(a[i]);
                } 
            }
        }

        set_place_filter(rol_f);
        set_weapons(final);
        set_fake(!fake);
    }

    function next_page(){

        if (cert_data['neshek_id'] && cert_data['mahsanit_count'] && cert_data['kadurim_count'] && cert_data['cert_start']
            && cert_data['cert_end']
        ){
            props.set_show_certificate_of_authorization_2(true);
            props.set_show_certificate_of_authorization_1(false);
        } else {
            set_err_msg('נא למלא את כל השדות');
        }
    }
      
  return (
    <div className='cert_cont_main'>
        <div className='cert_cont_main_in'>
            <img src={close} onClick={()=>props.set_show_certificate_of_authorization_1(false)} className='close_icon'/>
            <div className='cert_header'>
                <img src={comp_img} className=''/>    
                <div className='user_b_text_cont'>
                    <div className='user_b_text_main_r'>הפקת תעודת הרשאה לנשק</div>
                    <div className='user_b_text_submain'>
                    לנשיאת כלי ירייה — ארגון שמירה לפי סעיף 10ג' לחוק כלי הירייה, תש"ט - 1949
                    
                    </div>
                </div>    

            </div>

            <img src={cert_2} className='cert_1'/>

            <div className='cert_info_cont_2'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>בחירת נשק</div>

                <div className='cert_filter_cont'>
                    <input type="text" placeholder='חיפוש נשק' className='cert_search_neshek' onChange={(e)=>search_neshek_func(e.target.value)}/>
                    <div className='cert_filter' onClick={()=>set_show_filter(!show_filter)}>סינון</div>
                </div>

                {show_filter? <div className='filter_options_cont'>
                        <div className='filter_options_cont_title'>דגם</div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox"  onClick={(e:any)=>filter_by_type('אקדח', e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>אקדח</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" onClick={(e:any)=>filter_by_type('רובה סער', e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>רובה סער</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" onClick={(e:any)=>filter_by_type('נשק לא קטלני', e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>נשק לא קטלני</div>
                        </div>
                
                        <div className='filter_options_cont_title'>מיקום</div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox"  onClick={(e:any)=>filter_by_place('תל אביב', e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>תל אביב</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox"  onClick={(e:any)=>filter_by_type('ירושלים', e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>ירושלים</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox"  onClick={(e:any)=>filter_by_place('חיפה', e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>חיפה</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox"  onClick={(e:any)=>filter_by_place('כספת ראשית', e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>כספת ראשית</div>
                        </div>

                    </div>:<></>}

                <div className='cert_neshek_header_cont'>
                    <div className='cert_neshek_header'>מסט״ב</div>
                    <div className='cert_neshek_header'>דגם / סוג</div>
                    <div className='cert_neshek_header'>מיקום נוכחי</div>
                    {/* <div className='cert_neshek_header'>בדיקה אחרונה</div> */}
                    <div className='cert_neshek_header'>ביקורת תקופתית</div>
                </div>


                {weapons && weapons.map((weapon:any) => (
                <>
                {weapon.place.includes('כספת')?
                <div className='cert_neshek_header_cont'>
                     {full!=weapon.id?<img src={cert_check_empty} className='cert_check_empty' onClick={()=>{set_full(weapon.id);set_cert_data_func(weapon,"neshek_id")}}/>:  <img src={cert_check_full} className='cert_check_empty' onClick={()=>set_full(weapon.id)}/>}
                    <div className='cert_neshek_line'>
                       
                        {weapon.number}</div>
                    <div className='cert_neshek_line'>{weapon.type}</div>
                    <div className='cert_neshek_line'>{weapon.place}</div>
                    <div className='cert_neshek_line'>{weapon.next_check.split('T')[0]}</div>
                    {/* <div className='cert_neshek_line'>12/12/2025</div> */}
                </div>:<></>}
                </>
                ))}

                 {/* <div className='cert_neshek_header_cont'>
                     <img src={cert_check_full} className='cert_check_empty'/>
                    <div className='cert_neshek_line'>
                       
                        203</div>
                    <div className='cert_neshek_line'>M16A2</div>
                    <div className='cert_neshek_line'>כספת באר שבע</div>
                    <div className='cert_neshek_line'>12/12/2024</div>
                    <div className='cert_neshek_line'>18/9/2025</div>
                </div>


                <div className='cert_neshek_header_cont'>
                     <img src={cert_check_empty} className='cert_check_empty'/>
                    <div className='cert_neshek_line'>
                       
                        117</div>
                    <div className='cert_neshek_line'>Glock 17</div>
                    <div className='cert_neshek_line'>כספת תל אביב</div>
                    <div className='cert_neshek_line'>12/12/2024</div>
                    <div className='cert_neshek_line'>12/12/2025</div>
                </div>

                 <div className='cert_neshek_header_cont'>
                     <img src={cert_check_full} className='cert_check_empty'/>
                    <div className='cert_neshek_line'>
                       
                        203</div>
                    <div className='cert_neshek_line'>M16A2</div>
                    <div className='cert_neshek_line'>כספת באר שבע</div>
                    <div className='cert_neshek_line'>12/12/2024</div>
                    <div className='cert_neshek_line'>18/9/2025</div>
                </div>


                <div className='cert_neshek_header_cont'>
                     <img src={cert_check_empty} className='cert_check_empty'/>
                    <div className='cert_neshek_line'>
                       
                        117</div>
                    <div className='cert_neshek_line'>Glock 17</div>
                    <div className='cert_neshek_line'>כספת תל אביב</div>
                    <div className='cert_neshek_line'>12/12/2024</div>
                    <div className='cert_neshek_line'>12/12/2025</div>
                </div>

                 <div className='cert_neshek_header_cont'>
                    <img src={cert_check_full} className='cert_check_empty'/>
                    <div className='cert_neshek_line'>
                       
                        203</div>
                    <div className='cert_neshek_line'>M16A2</div>
                    <div className='cert_neshek_line'>כספת באר שבע</div>
                    <div className='cert_neshek_line'>12/12/2024</div>
                    <div className='cert_neshek_line'>18/9/2025</div>
                </div> */}


            </div>

            
            <div className='cert_info_cont_3'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>מחסניות וכדורים</div>


                <div className='cert_info_type_cont_main_row'>
                    <div className=' cert_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title tachmoshet_info_type_title_t'>מספר מחסניות</div>   
                        <input type="text" className='tachmoshet_info_type_cont cert_info_type_row_date' placeholder='' value={mahsanit_count} onChange={(e)=>{set_mahsanit_count(e.target.value);set_cert_data_func(e.target.value,"mahsanit_count")}}/>
                    </div>

                    <div className=' cert_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title tachmoshet_info_type_title_t'>מספר כדורים</div>   
                        <input type="text" className='tachmoshet_info_type_cont cert_info_type_row_date' placeholder='' value={kadurim_count} onChange={(e)=>{set_kadurim_count(e.target.value);set_cert_data_func(e.target.value,"kadurim_count")}}/>
                    </div>
                </div>

            </div>

            <div className='cert_info_cont_3'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>תקופת הרשאה</div>

                <div className='cert_info_type_cont_main_row'>
                    <div className=' cert_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title tachmoshet_info_type_title_t'>תאריך תחילה</div>   
                        <input type="date" className='tachmoshet_info_type_cont cert_info_type_row_date white-calendar' placeholder='' value={cert_start} onChange={(e)=>set_cert_start(e.target.value)}/>
                    </div>

                    <div className=' cert_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title tachmoshet_info_type_title_t'>תאריך סיום</div>   
                        <input type="date" className='tachmoshet_info_type_cont cert_info_type_row_date white-calendar' placeholder='' value={cert_end} onChange={(e)=>set_cert_end(e.target.value)}/>
                    </div>
                </div>

            </div>

       

            <div className='cancel_cert_btn_cont cancel_cert_btn_cont_2'>
                <div className="cancel_cert_btn" onClick={()=>{props.set_show_certificate_of_authorization(true);props.set_show_certificate_of_authorization_1(false)}}>חזור</div>
                <div className="next_cert_btn" onClick={()=>{next_page()}}>הבא</div>
            </div>

            {err_msg?<div className='err_msg'>{err_msg}</div>:<></>}
        </div>
        
    </div>
  )
}

export default Certificate_authorization_1