import RightMenu from "./RightMenu"

import './Forms_create.css'

import msg_icon from './assets/msg_icon.png'
import bell_icon from './assets/bell_icon.png'
import text_i from './assets/text_i.png'


import poll_i from './assets/poll_i.png'

import play_i from './assets/play_i.png'
import picture_i from './assets/picture_i.png'
// import user_s_2 from './assets/user_s_2.png'

import quiz from './assets/quiz.png'
import question_i from './assets/question_i.png'

import { useState } from 'react'

import horizontal_i from './assets/horizontal_i.png'
import pencil_i from './assets/pencil_i.png'
import prev_image from './assets/prev_image.png'
import check_empty from './assets/check_empty.png'

import sign_i from './assets/sign_i.png'
import form_i_f from './assets/form_i_f.png'
import Form_send_popup from "./Form_send_popup"
import Form_send_popup_1 from "./Form_send_popup_1"
import Form_send_popup_2 from "./Form_send_popup_2"


function Forms_create() {

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

                    <div className="settings_part_subtitle">ציון עובר</div>
                    <input type="text" placeholder="70" className="settings_part_input" />
                    
                    <div className="settings_part_title">רכיבים</div>

                    <div className="big_btn_cont_main">
                        <div className="big_btn_cont">
                            <img src={text_i} />
                            כותרת
                        </div>

                        <div className="big_btn_cont">
                            <img src={poll_i} />
                            פסקה
                        </div>

                        <div className="big_btn_cont">
                            <img src={play_i} />
                            סרטון
                        </div>

                        <div className="big_btn_cont">
                            <img src={picture_i} />
                            תמונה
                        </div>


                        <div className="big_btn_cont">
                            <img src={quiz} />
                            שאלה אמריקאית            
                        </div>

                        <div className="big_btn_cont">
                            <img src={question_i} />
                           שאלה פתוחה          
                        </div>

                        <div className="big_btn_cont">
                            <img src={horizontal_i} />
                          קו מפריד        
                        </div>
                        
                        <div className="big_btn_cont">
                            <img src={pencil_i} />
                         חתימה      
                        </div>

                    </div>

                </div>

                <div className="preview_part_cont">
                    <div className="preview_part_title">תצוגה מקדימה</div>

                    <div className="preview_in_part_cont">
                        <div className="preview_in_part_title">הכנס כאן כותרת</div>
                        <div className="preview_in_part_text">ברוכים הבאים להדרכת בטיחות בנשק. הדרכה זו חובה על כל מאבטח לפני תחילת העבודה.</div>
                    
                        <div className="preview_in_part_img">
                            <div className="preview_in_part_img_title">מדריך נשק הדרכה מעשית</div>
                            <img src={prev_image} />
                        </div>

                        <div className="preview_in_part_select">
                            <div className="preview_in_part_img_title">מהו הכלל הראשון בבטיחות בנשק?</div>
                            <div className="part_select_box">
                                <img src={check_empty} />
                                <div className="part_select_box_text">נשק הוא נשק טעון עד שווידוא אחרת</div>
                            </div>

                             <div className="part_select_box">
                                <img src={check_empty} />
                                <div className="part_select_box_text">לא להפנות נשק כלפי אדם</div>
                            </div>

                             <div className="part_select_box">
                                <img src={check_empty} />
                                <div className="part_select_box_text">האצבע לא נוגעת בהדק עד רגע הירי</div>
                            </div>

                             <div className="part_select_box">
                                <img src={check_empty} />
                                <div className="part_select_box_text">נשק הוא כלי נהדר לחיטוט באף</div>
                            </div>
                        </div>

                        
                        <div className="preview_in_part_select">
                            <div className="preview_in_part_img_title">זאת שאלה פתוחה</div>
                            <textarea placeholder="כאן תופיע התשובה" className="review_in_part_textarea">
                            </textarea>
                        </div>

                        <div className="sep_line"></div>

                        <div className="preview_in_part_select">
                            <div className="preview_in_part_img_title">חתימה דיגיטלית</div>
                            <div className="sign_i_box">
                                <img src={sign_i} />
                                <div className="sign_i_text">כאן יהיה מקום לחתום</div>
                            </div>
                        </div>


                        <div className="preview_in_part_img">
                            <div className="preview_in_part_img_title">כותרת לתמונה (לא חובה)</div>
                            <img src={form_i_f} />
                        </div>
                        

                    </div>
                </div>    


                <div className="object_part_cont">
                    <div className="obj_part_title">הגדרות רכיב</div>

                </div>

            </div>

        
        </div>

        {show_send_popup && next_page==1?<Form_send_popup set_show_send_popup={set_show_send_popup} set_next_page={set_next_page}></Form_send_popup>:<></>}

        {show_send_popup && next_page==2?<Form_send_popup_1 set_show_send_popup={set_show_send_popup} set_next_page={set_next_page}></Form_send_popup_1>:<></>}

        {show_send_popup && next_page==3?<Form_send_popup_2 set_show_send_popup={set_show_send_popup} set_next_page={set_next_page}></Form_send_popup_2>:<></>}

    </>
  )
}

export default Forms_create
