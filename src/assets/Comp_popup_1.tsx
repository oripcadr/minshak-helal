
import './Comp_popup.css'
import g_dot from './assets/g_dot.png'
import more_icon from './assets/more_icon.png'
import y_dot from './assets/y_dot.png'


import close from './assets/close.png'
import folder_img from './assets/folder_img.png'
import refresh from './assets/refresh.png'



function Comp_popup_1(props:any) {
  return (
    <>
    <div className='worker_popup_cont worker_popup_cont_comp'>
        <img src={close} className='close_icon'  onClick={()=>props.set_show_worker_popup(false)}/>
        <div className='worker_popup_header'>
            <img src={folder_img} className='user_b'/>    
            <div className='user_b_text_cont'>
                <div className='user_b_text_main_r'>תיק חברה – מפעל ראוי</div>
                <div className='user_b_text_submain'>
                 כל המסמכים והאישורים הרשמיים של הארגון במקום אחד. נגיש לבעל הרשיון המיוחד בלבד.
                 
                </div>
            </div>    

        </div>

        <div className='comp_search_cont'>
           <input type="text" placeholder='חיפוש מסמך' className='search_video'/>
            <div className='add_new_video_btn'>+ מסמך חדש</div>
            <div className='export_btn'>ייצוא</div>
        </div>

        <div className='comp_row_box_cont'>
            <img src={more_icon} className='more_icon_comp'/>
            <div className='comp_row_box_title'>רישיון מיוחד לבעל הרשיון</div>
            <div className='comp_row_box_subtitle_cont'>
                <img src={g_dot} />
                <div>בתוקף עד 06/2026</div>
            </div>

        </div>

          <div className='comp_row_box_cont'>
            <img src={more_icon} className='more_icon_comp'/>
            <div className='comp_row_box_title'>אישור מפעל ראוי – דרום</div>
            <div className='comp_row_box_subtitle_cont'>
                <img src={y_dot} />
                <div>בתוקף עד 06/2026</div>
            </div>

            <img src={refresh} className='refresh_icon'/>    
        </div>


   <div className='comp_row_box_cont'>
            <img src={more_icon} className='more_icon_comp'/>
            <div className='comp_row_box_title'>רישיון מיוחד לבעל הרשיון</div>
            <div className='comp_row_box_subtitle_cont'>
                <img src={g_dot} />
                <div>בתוקף עד 06/2026</div>
            </div>

        </div>

          <div className='comp_row_box_cont'>
            <img src={more_icon} className='more_icon_comp'/>
            <div className='comp_row_box_title'>אישור מפעל ראוי – דרום</div>
            <div className='comp_row_box_subtitle_cont'>
                <img src={y_dot} />
                <div>בתוקף עד 06/2026</div>
            </div>

            <img src={refresh} className='refresh_icon'/>    
        </div>

           <div className='comp_row_box_cont'>
            <img src={more_icon} className='more_icon_comp'/>
            <div className='comp_row_box_title'>רישיון מיוחד לבעל הרשיון</div>
            <div className='comp_row_box_subtitle_cont'>
                <img src={g_dot} />
                <div>בתוקף עד 06/2026</div>
            </div>

        </div>

          <div className='comp_row_box_cont'>
            <img src={more_icon} className='more_icon_comp'/>
            <div className='comp_row_box_title'>אישור מפעל ראוי – דרום</div>
            <div className='comp_row_box_subtitle_cont'>
                <img src={y_dot} />
                <div>בתוקף עד 06/2026</div>
            </div>

            <img src={refresh} className='refresh_icon'/>    
        </div>

    <div className='comp_row_box_cont'>
            <img src={more_icon} className='more_icon_comp'/>
            <div className='comp_row_box_title'>רישיון מיוחד לבעל הרשיון</div>
            <div className='comp_row_box_subtitle_cont'>
                <img src={g_dot} />
                <div>בתוקף עד 06/2026</div>
            </div>

        </div>

          <div className='comp_row_box_cont'>
            <img src={more_icon} className='more_icon_comp'/>
            <div className='comp_row_box_title'>אישור מפעל ראוי – דרום</div>
            <div className='comp_row_box_subtitle_cont'>
                <img src={y_dot} />
                <div>בתוקף עד 06/2026</div>
            </div>

            <img src={refresh} className='refresh_icon'/>    
        </div>

    </div>

    </>
  )
}

export default Comp_popup_1