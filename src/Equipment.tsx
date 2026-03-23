import RightMenu from "./RightMenu"

import msg_icon from './assets/msg_icon.png'
import bell_icon from './assets/bell_icon.png'
import filter from './assets/filter.png'
import arrow_left_w from './assets/arrow_left_w.png'

import user_m_2 from './assets/user_m_2.png'


import site_s from './assets/site_s.png'
import close from './assets/close.png'
import more_icon from './assets/more_icon.png'
import p_details_1 from './assets/p_details_1.png'
import pencil from './assets/pencil.png'
import trash_s from './assets/trash_s.png'
import camera from './assets/camera.png'
import more_w from './assets/more_w.png'


import './Equipment.css'
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import Popup_eq from "./Popup_eq"
import Equipment_transfer_popup from "./Equipment_transfer_popup"
// import { useEffect, useState } from "react"

// import axios from "axios"

function Equipment() {

    const [show_add_eq, set_show_add_eq] = useState(false);
    const [show_eq_transfer_popup, set_show_eq_transfer_popup] = useState(false);
    
    const [snif, set_snif] = useState(''); 
    const [eq_type, set_eq_type] = useState(''); 
    const [catogory, set_catogory] = useState(''); 
    const [supplier, set_supplier] = useState(''); 
    const [price, set_price] = useState(''); 
    const [description, set_description] = useState(''); 
    
    
    
    
    const [count_total, set_count_total] = useState(''); 

    const [count_in_use, set_count_in_use] = useState(''); 
    const [in_mahsan, set_in_mahsan] = useState('');
    const [eq_img, set_eq_img] = useState(''); 

    const [takul, set_takul] = useState(''); 
    const [sites, set_sites] = useState([]); 
    const [eq_all, set_eq_all] = useState<any>([]); 
    const [eq_site_row, set_eq_site_row] = useState([{site_name:'', valid_count:0, in_use:0, takul:0}]); 
    
    const [eq_all_original, set_eq_all_original] = useState([]); 
    const [show_more_options, set_show_more_options] = useState(''); 
    const [delete_eq_popup, set_delete_eq_popup] = useState<any>('');
    const [edit_eq_popup, set_edit_eq_popup] = useState<any>(false);
    const [fake, set_fake] = useState(false);
    const [eq_id, set_eq_id] = useState(''); 
    const [selected_site, set_selected_site] = useState<any>('all'); 
    const [popup_eq, set_popup_eq] = useState(false);
    
    const inputElement4:any = useRef('');
    const focusInput4 = () => {
        inputElement4.current.click();
    };

    useEffect(() => {
        get_all_sites();
        get_eq();
    }, []);


       async function upload_user_img(files:any){

        if (files[0] && files[0]) {

            let payload = new FormData();

            payload.append("file", files[0]);
            
            await axios({
                method: 'post',
                url: globalThis.app.current+'/upload_file',
                data: payload,
                headers: { "Content-Type": "multipart/form-data" },
            }).then(async res => {

              set_eq_img(res.data.fileName);

            });

        }
    }

    function get_eq_sites(){

      let payload = new FormData();
      payload.append('eq_id', eq_id)
    
      axios({
        method: 'post',
        url: globalThis.app.current+'/get_eq_sites',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(res => {

        if (res.data.recordset.length>0){
           set_eq_site_row(res.data.recordset);
          // set_sites_original(res.data.recordset);
        }
      })

    }


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
          // set_sites_original(res.data.recordset);
        }
      })

    }

    function set_show_edit_eq_popup(eq:any){
        set_edit_eq_popup(true);
        set_snif(eq.snif);
        set_catogory(eq.catogory);
        set_eq_img(eq.img_path);
        set_supplier(eq.supplier);
        set_price(eq.price);
        set_description(eq.description)
        set_eq_type(eq.eq_type);
        set_count_total(eq.count_total);
        set_count_in_use(eq.count_in_use);
        set_in_mahsan(eq.in_mahsan);
        set_takul(eq.takul);
        set_show_add_eq(true);
        set_eq_id(eq.id);
          set_fake(!fake);
        get_eq_sites();
        
      
    }

    function delete_eq(){
        let payload = new FormData();
        payload.append("id", delete_eq_popup)
    
        axios({
            method: 'post',
            url: globalThis.app.current+'/delete_eq',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
            set_delete_eq_popup('');
            get_eq();
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
           set_eq_all_original(res.data.recordset);
          // set_sites_original(res.data.recordset);
        }
      })

    }
    
    function save_eq(){

      let payload = new FormData();
      payload.append('snif', snif);
      payload.append('eq_type', eq_type);
      payload.append('count_total', count_total);
      payload.append('count_in_use', count_in_use);
      payload.append('in_mahsan', in_mahsan);
      payload.append('takul', takul);
      payload.append('catogory', catogory);
      payload.append('supplier', supplier);
      payload.append('description', description);
      payload.append('price', price);
      payload.append('img_path', eq_img);

      payload.append('eq_in_site', JSON.stringify(eq_site_row));

      axios({
        method: 'post',
        url: globalThis.app.current+'/save_eq',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then( () => {

        set_show_add_eq(false);
        get_eq();
          
      });

    }


    function edit_eq(){

      let payload = new FormData();
      payload.append('snif', snif);
      payload.append('eq_type', eq_type);
      payload.append('count_total', count_total);
      payload.append('count_in_use', count_in_use);
      payload.append('in_mahsan', in_mahsan);
      payload.append('takul', takul);
      payload.append('id', eq_id);
      payload.append('catogory', catogory);
      payload.append('supplier', supplier);
      payload.append('description', description);
      payload.append('price', price);
      payload.append('img_path', eq_img);

      payload.append('eq_in_site', JSON.stringify(eq_site_row));

      axios({
        method: 'post',
        url: globalThis.app.current+'/edit_eq',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then( () => {

        set_show_add_eq(false);
        get_eq();
          
      });

    }

    function find_eq(val:any){
        let a:any=eq_all_original;
        let final:any =[];

        for(let i=0; i<a.length; i++){
            if(a[i].eq_type.includes(val)){
                final.push(a[i]);
            }
        }

        set_eq_all(final);
        set_fake(!fake);
    }

    function filter_by_site(val:any){
        let a:any=eq_all_original;
        let final:any =[];

        for(let i=0; i<a.length; i++){
            if(a[i].snif==val){
                final.push(a[i]);
            }
        }

        if(val=='all'){
            final=a;
        }

        set_eq_all(final);
        set_fake(!fake);
    }

    function add_new_eq_site_row(){
        let eq_site_row_t=eq_site_row;
        eq_site_row_t.push({site_name:'', valid_count:0, in_use:0, takul:0});
        set_eq_site_row(eq_site_row_t);
        set_fake(!fake);
    }

    function del_eq_site_row(index:any){
        let eq_site_row_t=eq_site_row;
        let final=[];
        
        for(let i=0; i<eq_site_row_t.length; i++){
            if (i!=index){
                final.push(eq_site_row_t[i]);
            }
        }

        set_eq_site_row(final);
        set_fake(!fake);
    } 

    function set_eq_site_data (index:any, type:any, val:any){
        let t=eq_site_row;
        if(type=='site_name'){
            t[index].site_name=val;
        }
        if(type=='valid_count'){
            t[index].valid_count=val;
        }
        if(type=='in_use'){
            t[index].in_use=val;
        }
        if(type=='takul'){
            t[index].takul=val;
        }

        set_eq_site_row(t);

        set_fake(!fake);

    }

    return (
    <>
        <div className="dashboard_main_cont">
            <RightMenu title="Equipment"></RightMenu>

            {/* <div className='top_header'>

       
                <div className='search_cont'>
                    <input type="text" placeholder='חפש אתר, עובד, מסמך או נשק…' className='search_input'/>   
                    <img src={msg_icon} />
                    <img src={bell_icon} />
                </div>
            </div> */}

       
       <div className="cont_bottom_eq_main">

            
            <div className='right_part_cont_bottom right_part_cont_bottom_eq'>
                    <div className='right_part_cont_top_title'>מצבת ציוד</div>

                    <div className="eq_to_user_btn" onClick={()=>set_show_eq_transfer_popup(true)}>העברת ציוד</div>

                    <div className="eq_to_site_btn" onClick={()=>set_show_add_eq(true)}>הוספת ציוד חדש</div>

                    <div className='btn_exp_cont'>
                        <input type="text" placeholder='חיפוש ציוד…' className='btn_exp_cont_input btn_exp_cont_input_eq' onChange={(e)=>find_eq(e.target.value)}/>
                        <div className='select_period'>סינון

                            <img src={filter} className='filter_icon'/>
                        </div>
                        <div className='export_btn'>ייצוא</div>
                    </div>



                    <div className='top_btns_cont'>
                        <div className={'top_btn '+ (selected_site=='all'?'top_btn_selected':'')} onClick={()=>{set_selected_site('all'); filter_by_site('all')}}>כל האתרים</div>


                        {sites && sites.map((site:any)  => (
                            <div className={'top_btn '+ (selected_site==site.site_name?'top_btn_selected':'')}  onClick={()=>{set_selected_site(site.site_name); filter_by_site(site.site_name)}}>{site.site_name}</div>
                        ))}
                    

                    </div>

                    <div className='table_header_cont'>
                        <div className='table_header'>שם הציוד</div>
                        <div className='table_header'>קטגוריה</div>
                        <div className='table_header'>סה"כ</div>
                        <div className='table_header'>זמין</div>

                        <div className='table_header'>בשימוש</div>
                        <div className='table_header'>תקול</div>
                        <div className='table_header'>מספר אתרים</div>
                        <div className='table_header'>פעולות</div>
                    </div>

                    {eq_all && eq_all.map((eq_one:any) => (
                    <>
                    <div className='table_header_cont' >
                    
                        <div className='table_row_r' onClick={()=>set_popup_eq(eq_one)}><img src={globalThis.app.current+'/'+eq_one.img_path} className='img_path_eq' />
                        {eq_one.eq_type}
                        </div>
                        <div  className='table_row_r'>
                            <div className="eq_cat_cont">
                                {eq_one.catogory}
                            </div>
                        </div>

                        <div className='table_row_r' onClick={()=>set_popup_eq(eq_one)}>{parseInt(eq_one.in_mahsan)+parseInt(eq_one.count_in_use)+parseInt(eq_one.takul)}</div>
                        <div className='table_row_r' onClick={()=>set_popup_eq(eq_one)}><div className="valid_eq_cont">{eq_one.in_mahsan}</div></div>
                        <div className='table_row_r' onClick={()=>set_popup_eq(eq_one)}><div className="in_use_eq_cont">{eq_one.count_in_use}</div></div>

                        
                        <div className='table_row_r' onClick={()=>set_popup_eq(eq_one)}><div className="takul_eq_cont">{eq_one.takul}</div></div>

                        <div className='table_row_r' onClick={()=>set_popup_eq(eq_one)}><div className="site_eq_num_cont">{eq_one.site_count}</div></div>

                        <div className='table_row_r'><div className="site_eq_move_cont">העברת ציוד</div></div>
                            
                        <img src={more_w} className='more_w more_w_s' onClick={()=>set_show_more_options(eq_one.id)}/>
                    </div>

                          {show_more_options==eq_one.id?<div className='more_options_cont'>
                                        
                                <div onClick={()=>{set_show_edit_eq_popup(eq_one);set_show_more_options('')}} className='more_options_row more_options_row_1'>עריכה
                                    <img src={pencil} />
                                </div>
                                <div onClick={()=>set_delete_eq_popup(eq_one.id)} className='more_options_row'>מחיקה
                                    <img src={trash_s} />
                                </div>
                            </div>:<></>}

                                {delete_eq_popup==eq_one.id?<div className='delete_worker_popup_cont'>
                                האם אתה בטוח רוצה למחוק? 

                                <div className='delete_worker_popup_btncont'>
                                    <div onClick={()=>delete_eq()}>כן</div>
                                    <div onClick={()=>{set_delete_eq_popup(false);set_show_more_options('')}}>לא</div>
                                </div>
                            </div>:<></>}

                            </>
                        ))}

                </div>

          
            <div className='right_part_cont_bottom left_part_cont_bottom_eq'>
                    <div className='right_part_cont_top_title'>יומן ציוד</div>

                    <div className="eq_to_user_btn">תנועה חדשה</div>


                    <div className='btn_exp_cont'>
                        <input type="text" placeholder='חיפוש ציוד…' className='btn_exp_cont_input btn_exp_cont_input_eq'/>
                        <div className='select_period'>סינון

                            <img src={filter} className='filter_icon'/>
                        </div>
                        <div className='export_btn'>ייצוא</div>
                    </div>



                    <div className='top_btns_cont'>
                        <div className='top_btn top_btn_selected'>כל הזמנים</div>

                        <div className='top_btn'>השבוע</div>
                        <div className='top_btn'>החודש</div>
                        <div className='top_btn'>השנה</div>
                        <div className='top_btn'>בחירת טווח תאריכים</div>

                    </div>

                    <div className='table_header_cont'>
                        <div className='table_header'>תאריך ושעה</div>
                        <div className='table_header'>סוג פעולה</div>
                        <div className='table_header'>סוג ציוד</div>
                        <div className='table_header'>כמות</div>

                        <div className='table_header'>ישויות</div>
                   
                    </div>


                    <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                             18:0010/09/2025
                        </div>
                        <div  className='table_row'>
                        מסירה לעובד
                        </div>

                        <div className='table_row' >ביגוד</div>
                            
                        <div className='table_row'> 32</div>


                        <div className='table_row'>
                            <img src={site_s} className='user_s_eq' />
                         קניון עזריאלי
                            <img src={arrow_left_w} />

                            <img src={user_m_2} className='user_s_eq' />
                        אורי אחדות
                        </div>
                            
                    </div>

                  
                    <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                             18:0010/09/2025
                        </div>
                        <div  className='table_row'>
                        מסירה לעובד
                        </div>

                        <div className='table_row' >ביגוד</div>
                            
                        <div className='table_row'> 32</div>


                        <div className='table_row'>
                            <img src={site_s} className='user_s_eq' />
                         קניון עזריאלי
                            <img src={arrow_left_w} />

                            <img src={user_m_2} className='user_s_eq' />
                        אורי אחדות
                        </div>
                            
                      
                    </div>
                    
                    <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                             18:0010/09/2025
                        </div>
                        <div  className='table_row'>
                        מסירה לעובד
                        </div>

                        <div className='table_row' >ביגוד</div>
                            
                        <div className='table_row'> 32</div>


                        <div className='table_row'>
                            <img src={site_s} className='user_s_eq' />
                         קניון עזריאלי
                            <img src={arrow_left_w} />

                            <img src={user_m_2} className='user_s_eq' />
                        אורי אחדות
                        </div>
                            
                      
                    </div>
                    
                    <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                             18:0010/09/2025
                        </div>
                        <div  className='table_row'>
                        מסירה לעובד
                        </div>

                        <div className='table_row' >ביגוד</div>
                            
                        <div className='table_row'> 32</div>


                        <div className='table_row'>
                            <img src={site_s} className='user_s_eq' />
                         קניון עזריאלי
                            <img src={arrow_left_w} />

                            <img src={user_m_2} className='user_s_eq' />
                        אורי אחדות
                        </div>
                            
                      
                    </div>
                    
                    <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                             18:0010/09/2025
                        </div>
                        <div  className='table_row'>
                        מסירה לעובד
                        </div>

                        <div className='table_row' >ביגוד</div>
                            
                        <div className='table_row'> 32</div>


                        <div className='table_row'>
                            <img src={site_s} className='user_s_eq' />
                         קניון עזריאלי
                            <img src={arrow_left_w} />

                            <img src={user_m_2} className='user_s_eq' />
                        אורי אחדות
                        </div>
                            
                      
                    </div>
                    
                    <div className='table_header_cont'>
                    
                        <div  className='table_row'>
                             18:0010/09/2025
                        </div>
                        <div  className='table_row'>
                        מסירה לעובד
                        </div>

                        <div className='table_row' >ביגוד</div>
                            
                        <div className='table_row'> 32</div>


                        <div className='table_row'>
                            <img src={site_s} className='user_s_eq' />
                         קניון עזריאלי
                            <img src={arrow_left_w} />

                            <img src={user_m_2} className='user_s_eq' />
                        אורי אחדות
                        </div>
                            
                      
                    </div>

                </div>
        </div>

        
        </div>

        {show_add_eq?<div className="worker_popup_cont">
            <img src={close} className='close_icon' onClick={()=>set_show_add_eq(false)}/>

            {!eq_img?<div className='user_img_cont' onClick={focusInput4}>
              <img src={camera} />
              <div>הוסף תמונה</div>
              <input type="file" onChange={(e)=>upload_user_img(e.target.files)} ref={inputElement4} className='file_input' />


            </div> :<div className='' onClick={focusInput4}><img src={globalThis.app.current+'/'+eq_img} className='user_img_cont' />
             <input type="file" onChange={(e)=>upload_user_img(e.target.files)} ref={inputElement4} className='file_input' /></div>}   

            <input type="text" placeholder="שם הציוד" className="eq_name_input" value={eq_type} onChange={(e)=>set_eq_type(e.target.value)}/>  

            <div className='worker_info_cont_eq'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>פרטי הציוד</div>

                <div className='tachmoshet_info_type_cont_main_row'>
                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>קטגוריה</div>   

                        <select className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' value={catogory} onChange={(e)=>set_catogory(e.target.value)}>
                            <option>בחר קטגוריה</option>
                            <option>ביגוד מגן</option>
                            <option>ביגוד טקטי</option>
                            <option>תקשורת</option>
                            <option>תיעוד</option>
                        </select>
                        {/* <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' placeholder='אתר' value={snif} onChange={(e)=>set_snif(e.target.value)}/> */}
                    </div>


                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>ספק</div>   
                        <input type="text" value={supplier} onChange={(e)=>set_supplier(e.target.value)} className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' placeholder='שם הספק' />
                    </div>
                   
                </div>

                <div className='tachmoshet_info_type_cont_main_row'>
                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>מחיר ליחידה</div>   
                        <input type="number" value={price} onChange={(e)=>set_price(e.target.value)}  className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' placeholder='₪0' />
                    </div>

              
                </div>

                <div className='tachmoshet_info_type_cont_main_row'>
                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>תיאור</div>   
                        <textarea className='tachmoshet_info_type_cont tachmoshet_info_type_row_date eq_desc_text' value={description} onChange={(e)=>set_description(e.target.value)} placeholder='אפוד טקטי מחומר בליסטי ברמת הגנה III-A, כולל כיסים מרובים לציוד ומערכת MOLLE להרחבה.' />
                    </div>

                </div>


        </div>

           <div className='cout_eq_box_cont'>
            <div className='cout_eq_box'>
                <div>זמינים במחסן</div>
                <input type="text" placeholder="0" className="valid_eq_input" value={in_mahsan} onChange={(e)=>set_in_mahsan(e.target.value)}/>
            </div>

            <div className='cout_eq_box'>
                <div>בשימוש</div>
                <input type="text" placeholder="0" className="valid_eq_input"  value={count_in_use} onChange={(e)=>set_count_in_use(e.target.value)}/>
            </div>

            <div className='cout_eq_box'>
                <div>תקולים</div>
                 <input type="text" placeholder="0" className="valid_eq_input" value={takul} onChange={(e)=>set_takul(e.target.value)}/>
            </div>

        </div>


         <div className='tachmoshet_info_cont eq_places_cont'>

            <img src={more_icon} className='w_more_icon'/>
            <img src={p_details_1} className='p_details_1'/>
            <div className='p_details_title'>מיקומים</div>
            

            <div className='table_header_cont table_header_cont_eq_in'>
                <div className='table_header table_row_r_long'>שם אתר</div>
           
                <div className='table_header'>סה"כ</div>
                <div className='table_header'>זמין</div>

                <div className='table_header'>בשימוש</div>
                <div className='table_header'>תקול</div>

            </div>

            {eq_site_row && eq_site_row.map((site_row:any, index:any) => (   
            <div className='table_header_cont' >
                
                <div  className='table_row_r table_row_r_long'>
                <select className="add_eq_site_select" value={site_row.site_name} onChange={(e)=>set_eq_site_data(index,'site_name',e.target.value )} >
                    <option>
                        בחר אתר
                    </option>
                    {sites && sites.map((site:any) => (
                        <option>
                           {site.site_name}
                        </option>
                    ))}
                </select>
                </div>

                <div className='table_row_r'><input type="text" placeholder="0" className="eq_total_input" value={parseInt(site_row.valid_count)+parseInt(site_row.in_use)+parseInt(site_row.takul)}/></div>
                <div className='table_row_r'><input type="text" placeholder="0" className="eq_valid_input" value={site_row.valid_count} onChange={(e)=>set_eq_site_data(index,'valid_count',e.target.value )}/></div>
                <div className='table_row_r'><input type="text" placeholder="0" className="eq_in_use_input" value={site_row.in_use} onChange={(e)=>set_eq_site_data(index,'in_use',e.target.value )}/></div>
                
                <div className='table_row_r'><input type="text" placeholder="0" className="eq_takul_input" value={site_row.takul} onChange={(e)=>set_eq_site_data(index,'takul',e.target.value )}/></div>
                 <img src={close} onClick={()=>del_eq_site_row(index)}/>   
            </div>
            ))}

            <div className="add_new_row_eq" onClick={()=>add_new_eq_site_row()}>+ הוספת שורה</div>

        </div>


        {!edit_eq_popup?<div className='save_t_btn_cont'>
            <div className='save_t_btn_eq_t' onClick={()=>save_eq()}>צור ציוד חדש</div>
            <div className='cancel_t_btn'   onClick={()=>set_show_add_eq(false)}>ביטול</div>
        </div>:
        <div className='save_t_btn_cont'>
            <div className='save_t_btn_eq_t' onClick={()=>edit_eq()}>ערוך ציוד</div>
            <div className='cancel_t_btn'   onClick={()=>set_show_add_eq(false)}>ביטול</div>
        </div>}

        </div>:<></>}

        {popup_eq?<Popup_eq popup_eq={popup_eq} set_popup_eq={set_popup_eq}></Popup_eq>:<></>}

        {show_eq_transfer_popup?<Equipment_transfer_popup set_show_eq_transfer_popup={set_show_eq_transfer_popup}></Equipment_transfer_popup>:<></>}
     
    </>
  )
}

export default Equipment
