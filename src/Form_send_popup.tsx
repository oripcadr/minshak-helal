import './Form_send_popup.css'


// import {  useState } from 'react'
import close_img from './assets/close.png'
import form_p_i from './assets/form_p_i.png'
import arrow_down_w from './assets/arrow_down_w.png'
import check_empty from './assets/check_empty.png'
import { useState } from 'react';

function Form_send_popup(props:any) {

   const [selected_tab, set_selected_tab] = useState(1);
   const [show_more_details, set_show_more_details] = useState(false);
    
  return (
   <><div className='layout'></div>
        <div className='eq_order_popup_cont'>
            <img src={close_img} className='close_img' onClick={()=>props.set_show_send_popup(false)}/>
            <div className='eq_p_title'>פרסום והפצה</div>
            <img src={form_p_i} className='eq_p_1' />

            <div className='form_toggle_cont'>
                <div className={'form_toggle_cont_in ' + (selected_tab==1?"form_toggle_cont_in_selected":'')} onClick={()=>set_selected_tab(1)}>לפי אתרים</div>
                <div className={'form_toggle_cont_in ' + (selected_tab==2?"form_toggle_cont_in_selected":'') }  onClick={()=>set_selected_tab(2)}>לפי עובדים</div>
            </div>    

           {selected_tab==1?<input type='text' placeholder='חיפוש אתרים' className='search_site_form' />:
            <input type='text' placeholder='חיפוש עובדים' className='search_site_form' />}

           {selected_tab==1? <div className='sites_form_cont'>
                <div className='sites_form_box'>
                    <img src={check_empty} className='check_empty_form'/>
                    <div className='sites_form_box_text'>קניון עזריאלי תל אביב</div>
                    <div className='sites_form_box_sub'>12 עובדים</div>

                    <img src={arrow_down_w} className='arrow_down_w' onClick={()=>set_show_more_details(!show_more_details)}/>

                    {show_more_details?<div>
                        <div className='more_details_title'>בחר קבוצה לתפוצה (ניתן לבחור כמה)</div>
                        <div className='more_details_type_cont'>
                            <div className='more_details_type'>כל העובדים</div>
                            <div className='more_details_type'>אחמ״שים</div>
                            <div className='more_details_type'>מאבטחים</div>
                            <div className='more_details_type'>סיירים</div>
                        </div>
                    </div>:<></>}
                </div>

                <div className='sites_form_box'>
                    <img src={check_empty} className='check_empty_form'/>
                    <div className='sites_form_box_text'>בורסה רמת גן</div>
                    <div className='sites_form_box_sub'>12 עובדים</div>

                    <img src={arrow_down_w} className='arrow_down_w'/>
                </div>

                <div className='sites_form_box'>
                    <img src={check_empty} className='check_empty_form'/>
                    <div className='sites_form_box_text'>מגדלי הקרייה</div>
                    <div className='sites_form_box_sub'>12 עובדים</div>

                    <img src={arrow_down_w} className='arrow_down_w'/>
                </div>

            </div>:<></>}

             {selected_tab==2? <div className='sites_form_cont'>
                <div className='sites_form_box_worker'>
                    <img src={check_empty} className='check_empty_form'/>
                    <div className='sites_form_box_text'>דוד כהן</div>
                    <div className='sites_form_box_subtext'>מאבטח בכיר • קניון עזריאלי תל אביב • מגדל שלום • מרכז עזריאלי</div>

                    <div className='sites_form_box_phone'>
                        <div>050-1234567</div>
                        <div>david@example.com</div>
                    </div>
                </div>

                <div className='sites_form_box_worker'>
                    <img src={check_empty} className='check_empty_form'/>
                    <div className='sites_form_box_text'>דוד כהן</div>
                    <div className='sites_form_box_subtext'>מאבטח בכיר • קניון עזריאלי תל אביב • מגדל שלום • מרכז עזריאלי</div>

                    <div className='sites_form_box_phone'>
                        <div>050-1234567</div>
                        <div>david@example.com</div>
                    </div>
                </div>

                <div className='sites_form_box_worker'>
                    <img src={check_empty} className='check_empty_form'/>
                    <div className='sites_form_box_text'>דוד כהן</div>
                    <div className='sites_form_box_subtext'>מאבטח בכיר • קניון עזריאלי תל אביב • מגדל שלום • מרכז עזריאלי</div>

                    <div className='sites_form_box_phone'>
                        <div>050-1234567</div>
                        <div>david@example.com</div>
                    </div>
                </div>

                <div className='sites_form_box_worker'>
                    <img src={check_empty} className='check_empty_form'/>
                    <div className='sites_form_box_text'>דוד כהן</div>
                    <div className='sites_form_box_subtext'>מאבטח בכיר • קניון עזריאלי תל אביב • מגדל שלום • מרכז עזריאלי</div>

                    <div className='sites_form_box_phone'>
                        <div>050-1234567</div>
                        <div>david@example.com</div>
                    </div>
                </div>

            </div>:<></>}

            <div className='eq_cont_btn form_cont_btn' onClick={()=>props.set_next_page(2)}>המשך</div>

        </div>
        </>
  )
}


export default Form_send_popup