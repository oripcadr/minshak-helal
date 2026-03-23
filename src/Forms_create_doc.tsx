import RightMenu from "./RightMenu"

import './Forms_create.css'

import msg_icon from './assets/msg_icon.png'
import bell_icon from './assets/bell_icon.png'

import { useState } from 'react'

import Form_send_popup from "./Form_send_popup"
import Form_send_popup_1 from "./Form_send_popup_1"
import Form_send_popup_2 from "./Form_send_popup_2"

function Forms_create_doc() {
    const [show_send_popup, set_show_send_popup] = useState(false);
    const [next_page, set_next_page] = useState(1);

    return (
    <>
        <div className="dashboard_main_cont">
            <RightMenu title="Forms"></RightMenu>

            <div className='top_header'>

                {/* <div className='search_cont'>
                    <input type="text" placeholder='חפש אתר, עובד, מסמך או נשק…' className='search_input'/>   
                    <img src={msg_icon} />
                    <img src={bell_icon} />
                </div> */}
            </div>

            <div className="form_create_top_btn_cont">
                <div className="top_btn_publish" onClick={()=>set_show_send_popup(true)}>פרסם והפץ ולעובדים</div>
                <div className="top_btn_save_draft">שמור כטיוטה</div>
                <div className="top_btn_del">מחיקה</div>
            </div>

            <div className="form_parts_cont">
                <div className="settings_part_cont">
                    <div className="settings_part_title">הגדרות מסמך</div>
                    <div className="settings_part_subtitle">כותרת</div>

                    <input type="text" placeholder="הדרכת בטיחות בנשק - רבעון א׳" className="settings_part_input"/>
                    <div className="settings_part_subtitle">מסמך</div>
                    <div className="create_doc_upload_btn">העלה מסמך</div>
                </div>

                <div className="preview_part_cont preview_part_cont_doc">
                    <div className="preview_part_title">תצוגה מקדימה</div>

                    <div className="preview_part_in_doc">

                    </div>

                </div>    

            </div>

        </div>

        {show_send_popup && next_page==1?<Form_send_popup set_show_send_popup={set_show_send_popup} set_next_page={set_next_page}></Form_send_popup>:<></>}

        {show_send_popup && next_page==2?<Form_send_popup_1 set_show_send_popup={set_show_send_popup} set_next_page={set_next_page}></Form_send_popup_1>:<></>}

        {show_send_popup && next_page==3?<Form_send_popup_2 set_show_send_popup={set_show_send_popup} set_next_page={set_next_page}></Form_send_popup_2>:<></>}

    </>
  )
}

export default Forms_create_doc
