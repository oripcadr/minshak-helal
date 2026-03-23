import RightMenu from "./RightMenu"

import msg_icon from './assets/msg_icon.png'
import bell_icon from './assets/bell_icon.png'
import Calendar from "react-calendar"
import close from './assets/close.png'
import add_sup_icon from './assets/add_sup_icon.png'
import more_icon from './assets/more_icon.png'
import p_details_1 from './assets/p_details_1.png'
import pencil from './assets/pencil.png'
import trash_s from './assets/trash_s.png'

import './Calendar_events.css'
import { useEffect, useState } from "react"
import axios from "axios"

// import { useEffect, useState } from "react"

// import axios from "axios"

function Calendar_events() {

    const [value, onChange] = useState<any>(new Date());
    const [events, set_events] = useState<any>([]);
    const [show_new_event_popup, set_show_new_event_popup] = useState<any>(false);
    const [show_options, set_show_options] = useState<any>(false);
    
    const [event_name, set_event_name] = useState<any>('');
    const [event_date, set_event_date] = useState<any>('');
    const [event_id, set_event_id] = useState<any>('');
    
    const [delete_event_popup, set_delete_event_popup] = useState<any>('');
    const [edit_event_popup, set_edit_event_popup] = useState<any>('');

    const [event_desc, set_event_desc] = useState<any>('');
    const [show_hover, set_show_hover] = useState<any>('');
   
    useEffect(() => {
        get_all_calendar_events();
    }, []);
     
    function set_edit_event_popup_func(event:any){
        set_edit_event_popup(true);
        set_event_name(event.name);
        set_event_date(event.event_date);
        set_event_desc(event.event_desc);
        set_event_id(event.id);
    }

    function get_all_calendar_events(){

      let payload = new FormData();
    
      axios({
        method: 'post',
        url: globalThis.app.current+'/get_all_calendar_events',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(res => {

        if (res.data.recordset.length>0){
           set_events(res.data.recordset);
          // set_sites_original(res.data.recordset);
        }
      })
    }

    function save_new_event(){

      let payload = new FormData();

      payload.append("event_name",event_name);
      payload.append("event_date",event_date);
      payload.append("event_desc",event_desc);

      axios({
        method: 'post',
        url: globalThis.app.current+'/save_new_event',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(() => {
        get_all_calendar_events();
        set_show_new_event_popup(false);
        set_event_name('');
        set_event_date('');
        set_event_desc('')
      })
    }

    function edit_event(){
        
      let payload = new FormData();

      payload.append("event_name",event_name);
      payload.append("event_date",event_date);
      payload.append("event_desc",event_desc);
      payload.append("id",event_id);

      axios({
        method: 'post',
        url: globalThis.app.current+'/edit_event',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(() => {
        get_all_calendar_events();
        set_edit_event_popup(false);
        set_event_name('');
        set_event_date('');
        set_event_desc('');
      })
    }
      
    function delete_event(){
     
      let payload = new FormData();

      payload.append("id",delete_event_popup);

      axios({
        method: 'post',
        url: globalThis.app.current+'/delete_event',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(() => {
        get_all_calendar_events();
        
        set_delete_event_popup(false);
        set_show_options('')
      })
    }

    function getEventsForDate(date_e:any){
        for(let i=0; i<events.length; i++){
            let n_date=new Date(events[i].event_date)
            if (date_e.getFullYear()==n_date.getFullYear() && date_e.getMonth()==n_date.getMonth() && date_e.getDate()==n_date.getDate()){
                return events[i]
            }
        }
    }
   
    return (
    <>
        <div className="dashboard_main_cont">
            <RightMenu title="calendar"></RightMenu>

            {/* <div className='top_header'>

                <div className='search_cont'>
                    <input type="text" placeholder='חפש אתר, עובד, מסמך או נשק…' className='search_input'/>   
                    <img src={msg_icon} />
                    <img src={bell_icon} />
                </div>
            </div> */}

            <div className="add_event_btn" onClick={()=>set_show_new_event_popup(true)}>הוסף אירוע</div>

            <Calendar className="Cal_events" locale="he-IL" onChange={onChange} value={value}
                tileContent={({ date }) => {

                    const eventsOnDate:any = getEventsForDate(date);
                    return eventsOnDate ? (
                      <>
                      <div className={"cal_event "} onClick={()=>set_show_options(eventsOnDate.id)} onMouseOver={()=>set_show_hover(eventsOnDate.id)} onMouseOut={()=>set_show_hover('')}>
                        {eventsOnDate.name}
                      </div>
                      {show_hover==eventsOnDate.id && eventsOnDate.event_desc?<div className="hover_event_cont">{eventsOnDate.event_desc}</div>:<></>}
                      {show_options==eventsOnDate.id?<div className='more_options_event_cont'>
                        <div onClick={()=>{set_edit_event_popup_func(eventsOnDate);set_show_options('')}}  className='more_options_row more_options_row_1'>עריכה
                            <img src={pencil} />
                        </div>
                        <div  onClick={()=>set_delete_event_popup(eventsOnDate.id)} className='more_options_row'>מחיקה
                            <img src={trash_s} />
                        </div>
                    </div>:<></>}


                        {delete_event_popup==eventsOnDate.id?<div className='delete_event_popup_cont'>
                            האם אתה בטוח רוצה למחוק? 

                        <div className='delete_worker_popup_btncont'>
                            <div onClick={()=>delete_event()}>כן</div>
                            <div onClick={()=>{set_delete_event_popup(false);set_show_options('')}}>לא</div>
                        </div>
                        </div>:<></>}
                      </>

                    ) : null;
                  }}/>

        
        </div>

        {show_new_event_popup?<div className="add_new_event_cont">
             <img src={close} className='close_icon' onClick={()=>set_show_new_event_popup(false)}/>
                <div className='worker_popup_header'>
                    <img src={add_sup_icon} className='user_b'/>    
                    <div className='user_b_text_cont'>
                        <div className='user_b_text_main_tachmoshet'>הוספת אירוע חדש</div>
                    </div>    
                </div>

            <div className='event_info_cont'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>פרטי אירוע</div>

                <div className='tachmoshet_info_type_cont_main_row'>
                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>שם אירוע</div>   
                        <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' placeholder=' שם אירוע' value={event_name} onChange={(e)=>set_event_name(e.target.value)}/>
                    </div>

                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>תאריך אירוע</div>   
                        <input type="date" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date white-calendar' placeholder='תאריך לידה' value={event_date} onChange={(e)=>set_event_date(e.target.value)}/>
                    </div>
                   
                </div>

                <div className='tachmoshet_info_type_cont_main_row tachmoshet_info_type_cont_main_row_2'>
                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>תיאור אירוע</div>   
                        <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date event_desc_long' placeholder='תיאור אירוע' value={event_desc} onChange={(e)=>set_event_desc(e.target.value)}/>
                    </div>

         
                   
                </div>

                <div className='save_event_btn_cont'>
                    <div className='save_t_btn' onClick={()=>save_new_event()}>צור אירוע</div>
                    <div className='cancel_t_btn'  onClick={()=>set_show_new_event_popup(false)}>ביטול</div>
                </div>


        </div>

        </div>:<></>}
     
        {edit_event_popup?<div className="add_new_event_cont">
             <img src={close} className='close_icon' onClick={()=>set_edit_event_popup(false)}/>
                <div className='worker_popup_header'>
                    <img src={add_sup_icon} className='user_b'/>    
                    <div className='user_b_text_cont'>
                        <div className='user_b_text_main_tachmoshet'>ערוך אירוע</div>
                    </div>    
                </div>

            <div className='event_info_cont'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>פרטי אירוע</div>

                <div className='tachmoshet_info_type_cont_main_row'>
                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>שם אירוע</div>   
                        <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date' placeholder='הזן שם פרטי' value={event_name} onChange={(e)=>set_event_name(e.target.value)}/>
                    </div>

                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>תאריך אירוע</div>   
                        <input type="date" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date white-calendar' placeholder='תאריך לידה' value={event_date} onChange={(e)=>set_event_date(e.target.value)}/>
                    </div>
                   
                </div>

                <div className='tachmoshet_info_type_cont_main_row tachmoshet_info_type_cont_main_row_2'>
                    <div className=' tachmoshet_info_type_cont_main'>
                        <div className='tachmoshet_info_type_title'>תיאור אירוע</div>   
                        <input type="text" className='tachmoshet_info_type_cont tachmoshet_info_type_row_date event_desc_long' placeholder='תיאור אירוע' value={event_desc} onChange={(e)=>set_event_desc(e.target.value)}/>
                    </div>
                </div>


                <div className='save_event_btn_cont'>
                    <div className='save_t_btn' onClick={()=>edit_event()}>ערוך אירוע</div>
                    <div className='cancel_t_btn' onClick={()=>set_edit_event_popup(false)}>ביטול</div>
                </div>

            </div>

        </div>:<></>}
    </>
  )
}

export default Calendar_events
