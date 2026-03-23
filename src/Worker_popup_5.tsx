
import './Worker_popup.css'

import p_details_1 from './assets/p_details_1.png'
import more_icon from './assets/more_icon.png'
import y_dot from './assets/y_dot.png'
import r_dot from './assets/r_dot.png'
import bell_w from './assets/bell_w.png'

// import { useState } from 'react'

function Worker_popup_5() {

//  const [show_upload_doc_popup, set_show_upload_doc_popup] = useState(false);

  return (
    <>
        <div className='add_mishmeret_btn'>שבץ לקורס</div>
        <div className='send_notice_btn'>
            <img src={bell_w} />
            <div>שלח תזכורת למאבטח</div>    
        </div>    

        <div className='hahshara_cont'>
            <img src={more_icon} className='w_more_icon'/>
            <img src={p_details_1} className='p_details_1'/>
            <div className='p_details_title'>ריענונים קרובים</div>


            <div className='table_header_cont table_header_cont_main_2'>
                <div className='table_header'>שם קורס</div>
                <div className='table_header'>סוג</div>
                <div className='table_header'>תאריך יעד</div>
                <div className='table_header'>סטטוס</div>
                <div className='table_header'>פעולה</div>
            </div>

            <div className='table_header_cont'>
                <div className='table_row'>ריענון ירי שנתי</div>
                <div className='table_row'>
                    <img src={r_dot} />
                    חובה</div>
                <div className='table_row'>	15/02/2025</div>
                <div className='table_row ' >  
                    <div className='table_row_payed'>משובץ</div>
                </div>
                <div className='table_row'>משובץ ל-10/01/2025</div>
            </div>

            <div className='table_header_cont'>
                <div className='table_row'>קורס עזרה ראשונה</div>
                <div className='table_row'>
                    <img src={r_dot} />
                    חובה</div>
                <div className='table_row'>	01/12/2024</div>
                <div className='table_row ' >  
                    <div className='table_row_payed_r'>איחור</div>
                </div>
                <div className='table_row'>דורש שיבוץ מיידי</div>
            </div>

            <div className='table_header_cont'>
                <div className='table_row'>הכשרה טכנולוגית</div>
                <div className='table_row'>
                    <img src={y_dot} />
                    בחירה</div>
                <div className='table_row'>	30/03/2025</div>
                <div className='table_row ' >  
                    <div className='table_row_payed_y'>ממתין</div>
                </div>
                <div className='table_row'>לא משובץ</div>
            </div>

        </div>

        <div className='hahshara_cont_2'>
            <img src={more_icon} className='w_more_icon'/>
            <img src={p_details_1} className='p_details_1'/>
            <div className='p_details_title'>היסטוריית הכשרות</div>


            <div className='table_header_cont table_header_cont_main_2'>
                <div className='table_header'>תאריך</div>
                <div className='table_header'>סוג קורס</div>
                <div className='table_header'>מדריך</div>
                <div className='table_header'>ציון</div>
                <div className='table_header'>חתימות</div>
            </div>

            <div className='table_header_cont'>
                <div className='table_row'>20/08/2024</div>
                <div className='table_row'>
                  ריענון ירי</div>
                <div className='table_row'>	יוסי לוי</div>
                  <div className='table_row'>95</div>
                <div className='table_row ' >  
                    <div className='table_row_payed'>משובץ</div>
                </div>
            </div>

            <div className='table_header_cont'>
                <div className='table_row'>20/08/2024</div>
                <div className='table_row'>
                  ריענון ירי</div>
                <div className='table_row'>	יוסי לוי</div>
                  <div className='table_row'>95</div>
                <div className='table_row ' >  
                    <div className='table_row_payed'>משובץ</div>
                </div>
            </div>

            <div className='table_header_cont'>
                <div className='table_row'>20/08/2024</div>
                <div className='table_row'>
                  ריענון ירי</div>
                <div className='table_row'>	יוסי לוי</div>
                  <div className='table_row'>95</div>
                <div className='table_row ' >  
                    <div className='table_row_payed'>משובץ</div>
                </div>
            </div>

        </div>

        <div className='hahshara_cont_2'>
            <img src={more_icon} className='w_more_icon'/>
            <img src={p_details_1} className='p_details_1'/>
            <div className='p_details_title'>תדריכי בטיחות חצי שנתיים</div>


            <div className='table_header_cont table_header_cont_main_2'>
                <div className='table_header'>תאריך תדריך</div>
                <div className='table_header'>מדריך</div>
                <div className='table_header'>חתימת מאבטח</div>
                <div className='table_header'>חתימת בעל רישיון</div>
            </div>

            <div className='table_header_cont'>
                <div className='table_row'>20/08/2024</div>
                <div className='table_row'>מנהל מוקד ביטחון - אבי שלום</div>
 
                <div className='table_row ' >  
                    <div className='table_row_payed'>חתום</div>
                </div>

                 <div className='table_row ' >  
                    <div className='table_row_payed'>חתום</div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Worker_popup_5