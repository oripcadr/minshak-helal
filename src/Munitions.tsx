import './Munitions.css'
import RightMenu from './RightMenu'

import msg_icon from './assets/msg_icon.png'
import bell_icon from './assets/bell_icon.png'
import b_1 from './assets/b_1.png'
import more_w from './assets/more_w.png'
import pencil from './assets/pencil.png'
import trash_s from './assets/trash_s.png'
import user_s_1 from './assets/user_s_1.png'
import { useEffect, useState } from 'react'
import Popup_new_tachmoshet from './Popup_new_tachmoshet'
import Popup_purchase from './Popup_purchase'
import axios from 'axios'
import Popup_edit_tachmoshet from './Popup_edit_tachmoshet'
import filter_icon from './assets/filter.png'


function Munitions() {

    const [open_popup_new_tachmoshet, set_open_popup_new_tachmoshet] = useState(false);
    const [show_purchase_popup, set_show_purchase_popup] = useState(false);
    const [munitions_info, set_munitions_info] = useState<any>([]);
    const [munitions_info_original, set_munitions_info_original] = useState([]);
    
    const [show_more_options, set_show_more_options] = useState<any>('');
    const [delete_weapon_popup, set_delete_weapon_popup] = useState<any>('');
    const [edit_weapon_popup, set_edit_weapon_popup] = useState(false);
    const [selected_period_filter, set_selected_period_filter] = useState(1);
    const [fake, set_fake] = useState(false);
    const [show_filter, set_show_filter] = useState(false);
    
    
    const [rol_filter, set_rol_filter] = useState<any>([]);
    const [place_filter, set_place_filter] = useState<any>([]);

    useEffect(() => {
        get_munitions_info();
    }, []);


    function get_munitions_info(){

      let payload = new FormData();
    
      axios({
        method: 'post',
        url: globalThis.app.current+'/get_munitions_info',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(res => {

        if (res.data.recordset.length>0){
           set_munitions_info(res.data.recordset);
           set_munitions_info_original(res.data.recordset);
        } 
          
      });
  
    }

    function delete_munition(){
        let payload = new FormData();
    
        payload.append("id", show_more_options);

        axios({
            method: 'post',
            url: globalThis.app.current+'/delete_munition',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
            get_munitions_info();
            set_show_more_options('');
        });
    }   

    function filter_data(type:any){
        debugger;
        let t_m:any=munitions_info_original;
        let temp=[];
        if(type==1){
            set_munitions_info(t_m);
        }
        if (type==2){
            let week_start;
            const today = new Date();
            const day = today.getDay(); 
            const diff = today.getDate() - day; 
           
            week_start= new Date(today.setDate(diff));
            week_start.setHours(0, 0, 0, 0);

            const saturday = new Date(today);
            saturday.setDate(today.getDate() + (6 - day));
            saturday.setHours(0, 0, 0, 0);
            let end_start=saturday;

            for(let i=0; i<t_m.length; i++){
                let t_date=new Date(t_m[i].date);
                if (t_date>=week_start && t_date<=end_start){
                    temp.push(t_m[i]);
                }
            }
           
            set_munitions_info(temp);
        }

        if (type==3){
            let week_start;
            const today = new Date();
            const month = today.getMonth()+1; 
          
            week_start= new Date(today.getFullYear()+'-'+month+'-'+'01');
            week_start.setHours(0, 0, 0, 0);
            
            let end_start= new Date(today.getFullYear()+'-'+month+'-'+'31');
            end_start.setHours(0, 0, 0, 0);

            for(let i=0; i<t_m.length; i++){
                let t_date=new Date(t_m[i].date);
                if (t_date>=week_start && t_date<=end_start){
                    temp.push(t_m[i]);
                }
            }
           
            set_munitions_info(temp);
        }

        if (type==4){
            let week_start;
            const today = new Date();
          
            week_start= new Date(today.getFullYear()+'-'+'01'+'-'+'01');
            week_start.setHours(0, 0, 0, 0);
            
            let end_start= new Date(today.getFullYear()+'-'+'12'+'-'+'31');
            end_start.setHours(0, 0, 0, 0);

            for(let i=0; i<t_m.length; i++){
                let t_date=new Date(t_m[i].date);
                if (t_date>=week_start && t_date<=end_start){
                    temp.push(t_m[i]);
                }
            }
           
            set_munitions_info(temp);
        }


        set_fake(!fake);
    }

    
    function filter_by_type(rol:any,checked:any){
       let a:any=munitions_info_original;
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
                if(a[i].action==rol_f[j]){
                    final.push(a[i]);
                } 
            }
        }

        set_rol_filter(rol_f);
        set_munitions_info(final);
        set_fake(!fake);
    }

    function filter_by_kaliber(rol:any,checked:any){
       let a:any=munitions_info_original;
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
                if(a[i].kaliber==rol_f[j]){
                    final.push(a[i]);
                } 
            }
        }

        set_place_filter(rol_f);
        set_munitions_info(final);
        set_fake(!fake);
    }

    return (
    <>
        <div className='dashboard_main_cont'>

            <RightMenu title="munitions"></RightMenu>

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

                <div className='main_area_top_cont'>
                    <div className='right_part_cont_top_title'>יתרת תחמושת</div>
                    <div className='btn_exp_cont'>
                        <div className='select_period'>יומי</div>
                        <div className='export_btn'>ייצוא</div>
                    </div>

                    <div className='count_tahmoshet_cont'>
                        <div className='count_tahmoshet_box'>
                            <div className='count_tahmoshet_box_title_cont'>
                                <img src={b_1} />
                                <div className='count_tahmoshet_box_title'>קניון איילון</div>
                            </div>

                            <div className='count_tahmoshet_box_select'>
                                45 מ״מ
                            </div>

                            <div className='count_tahmoshet_box_count'>
                                17,000
                            </div>

                        </div>


                          <div className='count_tahmoshet_box'>
                            <div className='count_tahmoshet_box_title_cont'>
                                <img src={b_1} />
                                <div className='count_tahmoshet_box_title'>מתחם הבורסה</div>
                            </div>

                            <div className='count_tahmoshet_box_select'>
                                45 מ״מ
                            </div>

                            <div className='count_tahmoshet_box_count'>
                                3,500
                            </div>

                        </div>



                          <div className='count_tahmoshet_box'>
                            <div className='count_tahmoshet_box_title_cont'>
                                <img src={b_1} />
                                <div className='count_tahmoshet_box_title'>קניון עזריאלי</div>
                            </div>

                            <div className='count_tahmoshet_box_select'>
                                45 מ״מ
                            </div>

                            <div className='count_tahmoshet_box_count'>
                                1,700
                            </div>

                        </div>

                        <div className='count_tahmoshet_box'>
                            <div className='count_tahmoshet_box_title_cont'>
                                <img src={b_1} />
                                <div className='count_tahmoshet_box_title'>קניון עזריאלי</div>
                            </div>

                            <div className='count_tahmoshet_box_select'>
                                45 מ״מ
                            </div>

                            <div className='count_tahmoshet_box_count'>
                                1,700
                            </div>

                        </div>

                               <div className='count_tahmoshet_box'>
                            <div className='count_tahmoshet_box_title_cont'>
                                <img src={b_1} />
                                <div className='count_tahmoshet_box_title'>קניון עזריאלי</div>
                            </div>

                            <div className='count_tahmoshet_box_select'>
                                45 מ״מ
                            </div>

                            <div className='count_tahmoshet_box_count'>
                                1,700
                            </div>

                        </div>

                               <div className='count_tahmoshet_box'>
                            <div className='count_tahmoshet_box_title_cont'>
                                <img src={b_1} />
                                <div className='count_tahmoshet_box_title'>קניון עזריאלי</div>
                            </div>

                            <div className='count_tahmoshet_box_select'>
                                45 מ״מ
                            </div>

                            <div className='count_tahmoshet_box_count'>
                                1,700
                            </div>

                        </div>

                               <div className='count_tahmoshet_box'>
                            <div className='count_tahmoshet_box_title_cont'>
                                <img src={b_1} />
                                <div className='count_tahmoshet_box_title'>קניון עזריאלי</div>
                            </div>

                            <div className='count_tahmoshet_box_select'>
                                45 מ״מ
                            </div>

                            <div className='count_tahmoshet_box_count'>
                                1,700
                            </div>

                        </div>

                               <div className='count_tahmoshet_box'>
                            <div className='count_tahmoshet_box_title_cont'>
                                <img src={b_1} />
                                <div className='count_tahmoshet_box_title'>קניון עזריאלי</div>
                            </div>

                            <div className='count_tahmoshet_box_select'>
                                45 מ״מ
                            </div>

                            <div className='count_tahmoshet_box_count'>
                                1,700
                            </div>

                        </div>

                               <div className='count_tahmoshet_box'>
                            <div className='count_tahmoshet_box_title_cont'>
                                <img src={b_1} />
                                <div className='count_tahmoshet_box_title'>קניון עזריאלי</div>
                            </div>

                            <div className='count_tahmoshet_box_select'>
                                45 מ״מ
                            </div>

                            <div className='count_tahmoshet_box_count'>
                                1,700
                            </div>

                        </div>

                    </div>

                    <div className='tahmoshet_list_cont'>
                        <div className='right_part_cont_top_title'>רשימת תחמושת</div>
                        <div className='btn_exp_cont'> 
                            <div className='add_new_btn' onClick={()=>set_open_popup_new_tachmoshet(true)}>תנועה חדשה בתחמושת</div>
                            <input type="text" placeholder='חיפוש ביקורת' className='search_video'/>
                            <div className='select_period' onClick={()=>set_show_filter(!show_filter)}>סינון
                                <img src={filter_icon} className='filter_icon' />
                            </div>
                            <div className='export_btn'>ייצוא</div>
                            
                        </div>

                    {show_filter? <div className='filter_options_cont'>
                        <div className='filter_options_cont_title'>דגם</div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox"  onClick={(e:any)=>filter_by_type('העברה', e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>העברה</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" onClick={(e:any)=>filter_by_type('גריעה', e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>גריעה</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox" onClick={(e:any)=>filter_by_type('רכישה', e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>רכישה</div>
                        </div>
                
                        <div className='filter_options_cont_title'>קליבר</div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox"  onClick={(e:any)=>filter_by_kaliber('45 מ"מ', e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>45 מ"מ</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox"  onClick={(e:any)=>filter_by_kaliber('9 מ"מ', e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>9 מ"מ</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox"  onClick={(e:any)=>filter_by_kaliber('5.56 מ"מ', e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>5.56 מ"מ</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox"  onClick={(e:any)=>filter_by_kaliber('7.62 מ"מ', e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>7.62 מ"מ</div>
                        </div>

                    </div>:<></>}

                        <div className='top_btns_cont'>
                            <div className={'top_btn ' + (selected_period_filter==1?"top_btn_selected":"")} onClick={()=>{set_selected_period_filter(1);filter_data(1)}}>כל הזמנים</div>

                            <div className={'top_btn ' + (selected_period_filter==2?"top_btn_selected":"")} onClick={()=>{set_selected_period_filter(2); filter_data(2)}}>השבוע</div>
                            <div className={'top_btn ' + (selected_period_filter==3?"top_btn_selected":"")} onClick={()=>{set_selected_period_filter(3); filter_data(3)}}>החודש</div>
                            <div className={'top_btn ' + (selected_period_filter==4?"top_btn_selected":"")} onClick={()=>{set_selected_period_filter(4); filter_data(4)}}>השנה</div>
                            {/* <div className={'top_btn ' + (selected_period_filter==5?"top_btn_selected":"")} onClick={()=>{set_selected_period_filter(5); filter_data(5)}}>בחירת טווח תאריכים</div> */}

                        </div>

                        <div className='table_header_cont'>
                            <div className='table_header'>
                                תאריך
                            </div>

                            <div className='table_header'>
                                שעה
                            </div>
                            <div className='table_header'>
                                פעולה
                            </div>

                            <div className='table_header'>
                                כמות
                            </div>

                             <div className='table_header'>
                                    קליבר
                            </div>

                            <div className='table_header'>
                                יתרה לאחר פעולה
                            </div>

                            <div className='table_header'>
                                עובד
                            </div>

                            <div className='table_header'>
                               אתר / כספת	
                            </div>

                            <div className='table_header'>
                             אסמכתא
                            </div>

                            <div className='table_header'>
                             אסמכתא
                            </div>
                            
                            {/* <img src={more_w} /> */}

                        </div>

                        {munitions_info && munitions_info.map((munition:any) => (
                        <div className='table_header_cont table_header_cont_tahmoshet'  onClick={()=>set_show_purchase_popup(munition)}>
                            <div className='table_row' >{munition.date.split('T')[0]}</div>
                            <div className='table_row'>{munition.time.split('T')[1].split('.')[0]}</div>
                            <div className='table_row'>
                                <div className='perchase_cont'>{munition.action}</div>
                            </div>
                            <div className='table_row'>{munition.count}</div>
                            <div className='table_row'>{munition.kaliber}</div>
                            <div className='table_row'>{munition.count_left}</div>
                            <div className='table_row'>
                                <img src={user_s_1} className='user_s' />
                                {munition.worker}  
                            </div>

                            <div className='table_row'>
                                <img src={b_1} className='user_s' />
                                  {munition.place}  
                            </div>

                            <div className='table_row'>{munition.asmachta}</div>
                 
                            <div className='table_row'>{munition.asmachta_type}</div>
                     
                            <img src={more_w} onClick={()=>set_show_more_options(munition.id)} className='more_w_p'/>

                            {show_more_options==munition.id?<div className='more_options_cont'>
                             
                               <div onClick={()=>{set_edit_weapon_popup(munition);set_show_more_options('')}} className='more_options_row more_options_row_1'>עריכה
                                 <img src={pencil} />
                               </div>
                               <div onClick={()=>set_delete_weapon_popup(munition.id)} className='more_options_row'>מחיקה
                                 <img src={trash_s} />
                               </div>
                            </div>:<></>}

                            
                            {delete_weapon_popup==munition.id?<div className='delete_worker_popup_cont'>
                                 האם אתה בטוח רוצה למחוק? 

                                <div className='delete_worker_popup_btncont'>
                                    <div onClick={()=>delete_munition()}>כן</div>
                                    <div onClick={()=>{set_delete_weapon_popup(false);set_show_more_options('')}}>לא</div>
                                </div>
                            </div>:<></>}

                        </div>

                        
                        ))}

                          
                       

                    </div>

                </div>

            </div>
        </div>

        {open_popup_new_tachmoshet?<Popup_new_tachmoshet get_munitions_info={get_munitions_info} set_open_popup_new_tachmoshet={set_open_popup_new_tachmoshet}></Popup_new_tachmoshet>:<></>}
        {show_purchase_popup?<Popup_purchase munition={show_purchase_popup} set_show_purchase_popup={set_show_purchase_popup}></Popup_purchase>:<></>}
        {edit_weapon_popup?<Popup_edit_tachmoshet munition={edit_weapon_popup} get_munitions_info={get_munitions_info} set_edit_weapon_popup={set_edit_weapon_popup}></Popup_edit_tachmoshet>:<></>}

    </>
    )

}

export default Munitions