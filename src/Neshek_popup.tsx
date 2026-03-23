
import './Neshek_popup.css'
import p_details_1 from './assets/p_details_1.png'
import more_icon from './assets/more_icon.png'


import close from './assets/close.png'
import r_dot from './assets/r_dot.png'
import valid from './assets/valid_icon.png'
import trash_w from './assets/trash_w.png'
import not_valid from './assets/not_valid.png'
import g_dot from './assets/g_dot.png'
import y_dot from './assets/y_dot.png'
import user_m_1 from './assets/user_m_1.png'
import logo_pdf from './assets/logo_pdf.png'
import warning_pdf from './assets/warning_pdf.png'
import marker_r from './assets/marker_r.png'
import bullet_r from './assets/bullet_r.png'
import calendar_r_pdf from './assets/calendar_r_pdf.png'
import last_check_r from './assets/last_check_r.png'
import check_pdf from './assets/check_pdf.png'
import check_not_pdf from './assets/check_not_pdf.png'

import { useRef, useState } from 'react'
import SignatureCanvas from 'react-signature-canvas'
import axios from 'axios'


import { Document, Page, Text, View, StyleSheet, Image, Font, PDFViewer  } from '@react-pdf/renderer';

import n_r from './fonts/NotoSansHebrew-Regular.ttf'
import n_bold from './fonts/NotoSansHebrew-Bold.ttf'

import n_r1 from './fonts/Rubik-Regular.ttf'
import n_bold1 from './fonts/Rubik-Bold.ttf'


function Neshek_popup(props:any) {

    const [show_status_opt, set_show_status_opt] = useState(false);
    const [show_haavara_popup, set_show_haavara_popup] = useState(false);
    const [neshek_tab, set_neshek_tab] = useState(1);
    const [selected_t, set_selected_t] = useState(1);

    const [belong, set_belong] = useState('');
    const [date, set_date] = useState('');
    const [time, set_time] = useState('');

    const [create_t_z_neshek, set_create_t_z_neshek] = useState(false);
    

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

    function save_hot_move(){
        let payload = new FormData();
    
        payload.append("weapon_id", props.weapon.id);

        if(selected_t==1){
            payload.append("move_to", "מאבטח");
        } else{
            payload.append("move_to", "כספת");
        }

        payload.append("belong", belong);
        payload.append("date", date);
        payload.append("time", time);
        payload.append("sign", trimmedDataURL_1);
        
        axios({
            method: 'post',
            url: globalThis.app.current+'/save_hot_move',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
            props.get_all_weapons();
            props.set_show_cert_popup(false)
        });
    }


    
    const styles = StyleSheet.create({
    body: {
        paddingTop: 15,
        paddingBottom: 10,
        paddingHorizontal: 35,
        fontFamily:'nato'
    },
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
       
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    section_2:{
        display:'flex',
        flexDirection: 'row'
    },

    logo:{
        width:100,
        marginLeft:10
    },
    section_top_cont:{
        flexDirection: 'row',
    },
    logo_pdf:{
        marginLeft:'auto',
        marginRight:'auto',
        width:40,
        height:40
    },
    logo_pdf_text:{
        color:'#283654',
        fontSize:10,
        textAlign:'center',
        marginTop:15
    },
     logo_pdf_title:{
        color:'#283654',
        fontSize:20,
        textAlign:'center',
        marginTop:5
    },
    logo_pdf_subtitle:{
        color:'#283654',
        fontSize:12,
        textAlign:'center',
        marginTop:0
    },
    top_info_cont:{
        width:'100%',
        height:87,
        backgroundColor:'#939aa831',
        borderRadius:26,
        marginTop:20,
        display:'flex',
        flexWrap: 'wrap',
        flexDirection: 'row-reverse',
        paddingRight:30,
        paddingLeft:30,
        paddingTop:20
    },
    title_doc:{
        color:'#283654',
        fontSize:15,
        textAlign:'center',
        marginTop:15
    },
    warning_pdf_cont:{
        display:'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        gap:5,
        marginTop:5
    },
    warning_pdf_img:{
       width:13,
       height:12 
    },
    check_pdf:{
       width:16,
       height:16 
    },
    docs_cont:{
        width:'100%',
        height:196,
        borderColor:'#D6D6D6',
        borderWidth:1,
        borderRadius:26,
        marginTop:5,
        display:'flex',
        flexWrap: 'wrap',
        flexDirection: 'row-reverse',
        paddingRight:20,
        paddingLeft:20,
        paddingTop:20
    },
    errors_cont:{
        width:'100%',
        height:196,
        borderColor:'#46557E',
        borderWidth:1,
        borderRadius:26,
        marginTop:5,
        marginBottom:30
    },
    footer:{
        fontSize:10,
        color:'#28365496',
        textAlign:'center'
    },
    footer_2:{
        fontSize:10,
        color:'#28365496',
        textAlign:'center',
        marginTop:100
    },
    marker_r:{
        width:10,
        height:12
    },
    bullet_r:{
        width:4,
        height:12,
        marginLeft:3,
        marginRight:3
    },
    calendar_r_pdf:{
        width:12,
        height:12
    },
    marker_r_text_b:{
        color:'#283654',
        fontSize:12,
        fontWeight:'bold',
    
    },
    marker_r_text:{
        color:'#283654',
        fontSize:12,
    },
    marker_r_text_cont:{
        display:'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        gap:10,
        width:210,
        marginBottom:10
    },
    docs_cont_title:{
        color:'#283654',
        fontSize:10,
        fontWeight:'bold'
    },
    docs_cont_text:{
        color:'#283654',
        fontSize:10,
    },
    docs_cont_text_main:{
        display:'flex',
        flexDirection: 'row-reverse',
        gap:10,
        alignItems: 'center',
    },
    docs_cont_text_main_box:{
        display:'flex',
        fleDirection: 'column',
        alignItems: 'flex-end',
        gap:5,
        width:220,
        marginBottom:20
    },
    errors_cont_h:{
        color:'white',
        fontSize:12,
        fontWeight:'bold',
        width:100,
        textAlign:'right'
    },
      errors_cont_h_s:{
        color:'white',
        fontSize:8,
        fontWeight:'bold',
        width:100,
        textAlign:'right'
    },
    errors_cont_h_l:{
        color:'white',
        fontSize:12,
        fontWeight:'bold',
        width:150,
        textAlign:'right'
    },
    errors_cont_t:{
        color:'#283654',
        fontSize:10,
        width:100,
        textAlign:'right'
    },
    errors_cont_t_s:{
        color:'#283654',
        fontSize:8,
        width:100,
        textAlign:'right'
    },
    errors_cont_t_es:{
        color:'#283654',
        fontSize:6,
        width:100,
        textAlign:'right'
    },
    errors_cont_t_l:{
        color:'#283654',
        fontSize:10,
        width:150,
        textAlign:'right'
    },
    errors_cont_h_m:{
        backgroundColor:'#283654',
        height:41,
        borderTopRightRadius:26,
        borderTopLeftRadius:26,
        display:'flex',
        flexDirection: 'row-reverse',
        paddingRight:20,
        paddingTop:10
    },
    errors_cont_t_m:{
     //   backgroundColor:'#283654',
        height:30,
        borderTopRightRadius:26,
        borderTopLeftRadius:26,
        display:'flex',
        flexDirection: 'row-reverse',
        paddingRight:20,
        paddingTop:10,
        borderBottomColor:'#283654',
        borderBottomWidth:1
    },
    errors_cont_t_m_last:{
        height:30,
        borderTopRightRadius:26,
        borderTopLeftRadius:26,
        display:'flex',
        flexDirection: 'row-reverse',
        paddingRight:20,
        paddingTop:10,
    //    borderBottomColor:'#283654',
     //   borderBottomWidth:1
    },
    errors_cont_t_cont:{
        display:'flex',
        flexDirection: 'row-reverse',
        gap:5,
      //  alignItems: 'center'
    }


});

    Font.register({
        family: 'nato',
        fonts: [
            {
                src: n_r
            },
            {
                src: n_bold,
                fontWeight: 'bold'
            }
        ]
    });
    

    Font.register({
        family: 'pop',
        fonts: [
            {
                src: n_r1
            },
            {
                src: n_bold1,
                fontWeight: 'bold'
            }
        ]
    });


    const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.body}>

            <View style={styles.section_top_cont}>

                <View style={styles.section}>

                   <View>
                       <Image src={logo_pdf} style={styles.logo_pdf}/>
                       <Text style={styles.logo_pdf_text}>ביטחון ושליטה</Text>
                       <Text style={styles.logo_pdf_title}>תעודת זהות נשק</Text>
                       <Text style={styles.logo_pdf_subtitle}>מסט״ב GNC10585</Text>
                   </View>

                   <View style={styles.top_info_cont}>
                        <View style={styles.marker_r_text_cont}>
                             <Image src={marker_r} style={styles.marker_r}/>
                             <Text  style={styles.marker_r_text_b}>:מיקום נוכחי</Text>
                             <Text  style={styles.marker_r_text}>סניף תל אביב</Text>
                        </View>

                          <View style={styles.marker_r_text_cont}>
                             <Image src={bullet_r} style={styles.bullet_r}/>
                             <Text  style={styles.marker_r_text_b}>:תחמושת</Text>
                             <Text  style={styles.marker_r_text}>28 כדורים</Text>
                        </View>

                        <View style={styles.marker_r_text_cont}>
                             <Image src={calendar_r_pdf} style={styles.calendar_r_pdf}/>
                             <Text  style={styles.marker_r_text_b}>:תוקף רישיון</Text>
                             <Text  style={styles.marker_r_text}>12 בפברואר 2027</Text>
                        </View>

                        <View style={styles.marker_r_text_cont}>
                             <Image src={last_check_r} style={styles.calendar_r_pdf}/>
                             <Text  style={styles.marker_r_text_b}>:בדיקה הבאה</Text>
                             <Text  style={styles.marker_r_text}>23 ביולי 2026</Text>
                        </View>
                    
                   </View>

                   <Text style={styles.title_doc}>מסמכים ורישיונות</Text>

                   <View style={styles.warning_pdf_cont}>
                        <Image src={warning_pdf} style={styles.warning_pdf_img}/>
                        <Text style={styles.logo_pdf_subtitle}>חסרה תעודת הרשאה לנשק</Text>
                   </View>

                   <View style={styles.docs_cont}>
                        <View style={styles.docs_cont_text_main_box}>
                            <Text style={styles.docs_cont_title}>טופס רישום נשק (מסמך זהות נשק)</Text>
                            <View style={styles.docs_cont_text_main}>
                                <Image src={check_pdf} style={styles.check_pdf}/>
                                <Text style={styles.docs_cont_text}>קיים</Text>
                                <Text style={styles.docs_cont_text}>בתוקף עד 06/2026</Text>
                            </View>
                        </View>

                        <View style={styles.docs_cont_text_main_box}>
                            <Text style={styles.docs_cont_title}>אישור רפואי</Text>
                            <View style={styles.docs_cont_text_main}>
                                <Image src={check_pdf} style={styles.check_pdf}/>
                                <Text style={styles.docs_cont_text}>קיים</Text>
                                <Text style={styles.docs_cont_text}>בתוקף עד 06/2026</Text>
                            </View>
                        </View>


                        <View style={styles.docs_cont_text_main_box}>
                            <Text style={styles.docs_cont_title}>טופס קבלה/מסירה בכספת</Text>
                            <View style={styles.docs_cont_text_main}>
                                <Image src={check_pdf} style={styles.check_pdf}/>
                                <Text style={styles.docs_cont_text}>קיים</Text>
                                <Text style={styles.docs_cont_text}>בתוקף עד 06/2026</Text>
                            </View>
                        </View>

                          <View style={styles.docs_cont_text_main_box}>
                            <Text style={styles.docs_cont_title}>אישור ריענון ירי</Text>
                            <View style={styles.docs_cont_text_main}>
                                <Image src={check_pdf} style={styles.check_pdf}/>
                                <Text style={styles.docs_cont_text}>קיים</Text>
                                <Text style={styles.docs_cont_text}>בתוקף עד 06/2026</Text>
                            </View>
                        </View>

                          <View style={styles.docs_cont_text_main_box}>
                            <Text style={styles.docs_cont_title}>אישור רישוי ארגוני</Text>
                            <View style={styles.docs_cont_text_main}>
                                <Image src={check_not_pdf} style={styles.check_pdf}/>
                                <Text style={styles.docs_cont_text}>חסר</Text>
                                <Text style={styles.docs_cont_text}>בתוקף עד 06/2026</Text>
                            </View>
                        </View>

                          <View style={styles.docs_cont_text_main_box}>
                            <Text style={styles.docs_cont_title}>טופס חתימת בעל הרשיון המיוחד</Text>
                            <View style={styles.docs_cont_text_main}>
                                <Image src={check_pdf} style={styles.check_pdf}/>
                                <Text style={styles.docs_cont_text}>קיים</Text>
                                <Text style={styles.docs_cont_text}>בתוקף עד 06/2026</Text>
                            </View>
                        </View>

                   </View>

                   <Text style={styles.title_doc}>היסטוריה - תקלות</Text>
                  
                  <View style={styles.errors_cont}>
                    <View style={styles.errors_cont_h_m}>
                        <Text style={styles.errors_cont_h}>תאריך</Text>
                        <Text style={styles.errors_cont_h_l}>פרטים</Text>
                        <Text style={styles.errors_cont_h}>דווח על ידי</Text>
                        <Text style={styles.errors_cont_h}>טופל על ידי</Text>
                        <Text style={styles.errors_cont_h}>סטטוס</Text>
                    </View>

                     <View style={styles.errors_cont_t_m}>
                        <Text style={styles.errors_cont_t}>10/10/2025</Text>
                        <Text style={styles.errors_cont_t_l}>מחסנית לא יוצאת מהנשק</Text>
                        <Text style={styles.errors_cont_t}>דוד לוי (מאבטח)</Text>
                        <Text style={styles.errors_cont_t}>יוסי רוקח (מפקח)</Text>
                       <View style={styles.errors_cont_t_cont}>
                            <Image src={check_pdf} style={styles.check_pdf}/>
                            <Text style={styles.errors_cont_t}>הושלם</Text>
                        </View>
                    </View>

                     <View style={styles.errors_cont_t_m}>
                        <Text style={styles.errors_cont_t}>10/10/2025</Text>
                        <Text style={styles.errors_cont_t_l}>מחסנית לא יוצאת מהנשק</Text>
                        <Text style={styles.errors_cont_t}>דוד לוי (מאבטח)</Text>
                        <Text style={styles.errors_cont_t}>יוסי רוקח (מפקח)</Text>
                        <View style={styles.errors_cont_t_cont}>
                            <Image src={check_not_pdf} style={styles.check_pdf}/>
                            <Text style={styles.errors_cont_t}>הושבת</Text>
                        </View>
                    </View>
                     <View style={styles.errors_cont_t_m}>
                        <Text style={styles.errors_cont_t}>10/10/2025</Text>
                        <Text style={styles.errors_cont_t_l}>מחסנית לא יוצאת מהנשק</Text>
                        <Text style={styles.errors_cont_t}>דוד לוי (מאבטח)</Text>
                        <Text style={styles.errors_cont_t}>יוסי רוקח (מפקח)</Text>
                        <View style={styles.errors_cont_t_cont}>
                            <Image src={check_pdf} style={styles.check_pdf}/>
                            <Text style={styles.errors_cont_t}>הושלם</Text>
                        </View>
                    </View>
                     <View style={styles.errors_cont_t_m}>
                        <Text style={styles.errors_cont_t}>10/10/2025</Text>
                        <Text style={styles.errors_cont_t_l}>מחסנית לא יוצאת מהנשק</Text>
                        <Text style={styles.errors_cont_t}>דוד לוי (מאבטח)</Text>
                        <Text style={styles.errors_cont_t}>יוסי רוקח (מפקח)</Text>
                        <View style={styles.errors_cont_t_cont}>
                            <Image src={check_pdf} style={styles.check_pdf}/>
                            <Text style={styles.errors_cont_t}>הושלם</Text>
                        </View>
                    </View>

                     <View style={styles.errors_cont_t_m_last}>
                        <Text style={styles.errors_cont_t}>10/10/2025</Text>
                        <Text style={styles.errors_cont_t_l}>מחסנית לא יוצאת מהנשק</Text>
                        <Text style={styles.errors_cont_t}>דוד לוי (מאבטח)</Text>
                        <Text style={styles.errors_cont_t}>יוסי רוקח (מפקח)</Text>
                        <View style={styles.errors_cont_t_cont}>
                            <Image src={check_pdf} style={styles.check_pdf}/>
                            <Text style={styles.errors_cont_t}>הושלם</Text>
                        </View>
                    </View>

                   </View>

                   <Text style={styles.footer}>הופק ע״י מערכת ביטחון ושליטה</Text>
                   <Text style={styles.footer}>עמוד 1 מתוך 2</Text>


                    <View>
                       <Image src={logo_pdf} style={styles.logo_pdf}/>
                       <Text style={styles.logo_pdf_text}>ביטחון ושליטה</Text>
                       <Text style={styles.logo_pdf_title}>דוח ביצוע סיור - פירוט מלא</Text>
                       <Text style={styles.logo_pdf_subtitle}>תיעוד מלא של נקודות סריקה, חריגות ותצלומים</Text>
                    </View>


                   <Text style={styles.title_doc}>היסטוריה - מסירות</Text>
                  
                    <View style={styles.errors_cont}>
                        <View style={styles.errors_cont_h_m}>
                            <Text style={styles.errors_cont_h_s}>תאריך</Text>
                            <Text style={styles.errors_cont_h_s}>שעה</Text>
                            <Text style={styles.errors_cont_h_s}>שם</Text>
                            <Text style={styles.errors_cont_h_s}>משפחה</Text>
                            <Text style={styles.errors_cont_h_s}>מספר זהות</Text>
                            <Text style={styles.errors_cont_h_s}>מספר תעודת הרשאה</Text>
                            <Text style={styles.errors_cont_h_s}>מספר מחסניות</Text>
                            <Text style={styles.errors_cont_h_s}>מספר כדורים</Text>
                            <Text style={styles.errors_cont_h_s}>חתימת המורשה</Text>
                        </View>

                        <View style={styles.errors_cont_t_m}>
                            <Text style={styles.errors_cont_t_s}>10/10/2025</Text>
                            <Text style={styles.errors_cont_t_s}>18:30</Text>
                            <Text style={styles.errors_cont_t_s}>אורי</Text>
                            <Text style={styles.errors_cont_t_s}>אחדות</Text>
                            <Text style={styles.errors_cont_t_s}>123456789</Text>
                            <Text style={styles.errors_cont_t_s}>123456789</Text>
                            <Text style={styles.errors_cont_t_s}>2</Text>
                            <Text style={styles.errors_cont_t_s}>56</Text>
                            <Text style={styles.errors_cont_t_es}>19:00 | 26/1/26</Text>
                            
                        </View>
                          <View style={styles.errors_cont_t_m}>
                            <Text style={styles.errors_cont_t_s}>10/10/2025</Text>
                            <Text style={styles.errors_cont_t_s}>18:30</Text>
                            <Text style={styles.errors_cont_t_s}>אורי</Text>
                            <Text style={styles.errors_cont_t_s}>אחדות</Text>
                            <Text style={styles.errors_cont_t_s}>123456789</Text>
                            <Text style={styles.errors_cont_t_s}>123456789</Text>
                            <Text style={styles.errors_cont_t_s}>2</Text>
                            <Text style={styles.errors_cont_t_s}>56</Text>
                            <Text style={styles.errors_cont_t_es}>19:00 | 26/1/26</Text>
                            
                        </View>
                          <View style={styles.errors_cont_t_m}>
                            <Text style={styles.errors_cont_t_s}>10/10/2025</Text>
                            <Text style={styles.errors_cont_t_s}>18:30</Text>
                            <Text style={styles.errors_cont_t_s}>אורי</Text>
                            <Text style={styles.errors_cont_t_s}>אחדות</Text>
                            <Text style={styles.errors_cont_t_s}>123456789</Text>
                            <Text style={styles.errors_cont_t_s}>123456789</Text>
                            <Text style={styles.errors_cont_t_s}>2</Text>
                            <Text style={styles.errors_cont_t_s}>56</Text>
                            <Text style={styles.errors_cont_t_es}>19:00 | 26/1/26</Text>
                            
                        </View>
                          <View style={styles.errors_cont_t_m}>
                            <Text style={styles.errors_cont_t_s}>10/10/2025</Text>
                            <Text style={styles.errors_cont_t_s}>18:30</Text>
                            <Text style={styles.errors_cont_t_s}>אורי</Text>
                            <Text style={styles.errors_cont_t_s}>אחדות</Text>
                            <Text style={styles.errors_cont_t_s}>123456789</Text>
                            <Text style={styles.errors_cont_t_s}>123456789</Text>
                            <Text style={styles.errors_cont_t_s}>2</Text>
                            <Text style={styles.errors_cont_t_s}>56</Text>
                            <Text style={styles.errors_cont_t_es}>19:00 | 26/1/26</Text>
                            
                        </View>
                          <View style={styles.errors_cont_t_m_last}>
                            <Text style={styles.errors_cont_t_s}>10/10/2025</Text>
                            <Text style={styles.errors_cont_t_s}>18:30</Text>
                            <Text style={styles.errors_cont_t_s}>אורי</Text>
                            <Text style={styles.errors_cont_t_s}>אחדות</Text>
                            <Text style={styles.errors_cont_t_s}>123456789</Text>
                            <Text style={styles.errors_cont_t_s}>123456789</Text>
                            <Text style={styles.errors_cont_t_s}>2</Text>
                            <Text style={styles.errors_cont_t_s}>56</Text>
                            <Text style={styles.errors_cont_t_es}>19:00 | 26/1/26</Text>
                            
                        </View>
                    </View>

                    <Text style={styles.title_doc}>היסטוריה - החזרות</Text>
                  
                    <View style={styles.errors_cont}>
                        <View style={styles.errors_cont_h_m}>
                            <Text style={styles.errors_cont_h_s}>תאריך</Text>
                            <Text style={styles.errors_cont_h_s}>שעה</Text>
                            <Text style={styles.errors_cont_h_s}>מספר מחסניות</Text>
                            <Text style={styles.errors_cont_h_s}>מספר כדורים</Text>
                       
                            <Text style={styles.errors_cont_h_s}>חתימת בעל הרשיון המיוחד</Text>
                        </View>

                        <View style={styles.errors_cont_t_m}>
                            <Text style={styles.errors_cont_t_s}>10/10/2025</Text>
                            <Text style={styles.errors_cont_t_s}>18:30</Text>
                            <Text style={styles.errors_cont_t_s}>2</Text>
                            <Text style={styles.errors_cont_t_s}>28</Text>
                     
                            <Text style={styles.errors_cont_t_es}>19:00 | 26/1/26</Text>
                            
                        </View>
                        <View style={styles.errors_cont_t_m}>
                            <Text style={styles.errors_cont_t_s}>10/10/2025</Text>
                            <Text style={styles.errors_cont_t_s}>18:30</Text>
                            <Text style={styles.errors_cont_t_s}>2</Text>
                            <Text style={styles.errors_cont_t_s}>28</Text>
                     
                            <Text style={styles.errors_cont_t_es}>19:00 | 26/1/26</Text>
                            
                        </View>
                        <View style={styles.errors_cont_t_m}>
                            <Text style={styles.errors_cont_t_s}>10/10/2025</Text>
                            <Text style={styles.errors_cont_t_s}>18:30</Text>
                            <Text style={styles.errors_cont_t_s}>2</Text>
                            <Text style={styles.errors_cont_t_s}>28</Text>
                     
                            <Text style={styles.errors_cont_t_es}>19:00 | 26/1/26</Text>
                            
                        </View>
                        <View style={styles.errors_cont_t_m}>
                            <Text style={styles.errors_cont_t_s}>10/10/2025</Text>
                            <Text style={styles.errors_cont_t_s}>18:30</Text>
                            <Text style={styles.errors_cont_t_s}>2</Text>
                            <Text style={styles.errors_cont_t_s}>28</Text>
                     
                            <Text style={styles.errors_cont_t_es}>19:00 | 26/1/26</Text>
                            
                        </View>
                        <View style={styles.errors_cont_t_m}>
                            <Text style={styles.errors_cont_t_s}>10/10/2025</Text>
                            <Text style={styles.errors_cont_t_s}>18:30</Text>
                            <Text style={styles.errors_cont_t_s}>2</Text>
                            <Text style={styles.errors_cont_t_s}>28</Text>
                     
                            <Text style={styles.errors_cont_t_es}>19:00 | 26/1/26</Text>
                            
                        </View>
                        <View style={styles.errors_cont_t_m_last}>
                            <Text style={styles.errors_cont_t_s}>10/10/2025</Text>
                            <Text style={styles.errors_cont_t_s}>18:30</Text>
                            <Text style={styles.errors_cont_t_s}>2</Text>
                            <Text style={styles.errors_cont_t_s}>28</Text>
                     
                            <Text style={styles.errors_cont_t_es}>19:00 | 26/1/26</Text>
                            
                        </View>
                    </View>
                   

                    <Text style={styles.footer_2}>הופק ע״י מערכת ביטחון ושליטה</Text>
                   <Text style={styles.footer}>עמוד 2 מתוך 2</Text>

                </View>
            </View>

    </Page>
  </Document>
);


  return (
    <>
    <div className='worker_popup_cont'>
        <img src={close} className='close_icon' onClick={()=>props.set_show_cert_popup(false)}/>
        <div className='worker_popup_header_neshek'>
            {/* <img src={comp_img} className='user_b'/>     */}
            <div className='user_b_text_cont'>
                <div className='user_b_text_main_r'>נשק #{props.weapon.number} — {props.weapon.type}</div>


                <div className='user_b_text_submain_n'>
                    <span>  סדרה: GNC10585</span>
                     <span> יוצר: 12/03/2022</span>
                     <span>
                        <img src={valid} className='valid_icon'/>
                       {props.weapon.statys}
                     </span>

                </div>
     
            </div>    


            <div className='create_neshek_id_btn_f' onClick={()=>set_show_haavara_popup(!show_haavara_popup)}>
                העברה חמה
            </div>

            <div className='create_neshek_id_btn' onClick={()=>set_create_t_z_neshek(true)}>
                הפק ת.ז נשק
            </div>

        </div>

          {create_t_z_neshek?<div className='preview_cert_cont_t_z'>
            <img src={close} className='close_icon' onClick={()=>set_create_t_z_neshek(false)}/>

            <PDFViewer className="PDFViewer_cont">
                <MyDocument />
            </PDFViewer>

        </div>:<></>}
        
    

        {show_haavara_popup?<div className='haavara_popup_cont'>
            <div className='haavara_popup_title'>הנשק מוקצה כרגע ל-</div>
            <div className='haavara_popup_user'>
                <img src={user_m_1} />
                <div>{props.weapon.belong}</div>
            </div>
            <div className='haavara_popup_title'>הנשק עובר ל -</div>
            <div className='meavteah_toggle'>
                <div className={'meavteah_toggle_in '+ (selected_t==1?"meavteah_toggle_in_selected":"")} onClick={()=>set_selected_t(1)}>מאבטח</div>
                <div className={'meavteah_toggle_in '+ (selected_t==2?"meavteah_toggle_in_selected":"")} onClick={()=>set_selected_t(2)}>כספת</div>
            </div>

            {selected_t==1?<input type='text' placeholder='חפש מאבטח' className='haavara_popup_input' value={belong} onChange={(e)=>set_belong(e.target.value)}/>:<></>}

            <div className='haavara_popup_title'>זמן העברה</div>
            <div>
                <input type='text' placeholder='2025-01-01' className='haavara_popup_input_s' value={date} onChange={(e)=>set_date(e.target.value)}/>
                <input type='text' placeholder='14:30' className='haavara_popup_input_s' value={time} onChange={(e)=>set_time(e.target.value)}/>
            </div>

            <div className='haavara_popup_title'>חתימת ממונה</div>
            <div className='tachmoshet_info_type_cont tachmoshet_info_type_row_date tachmoshet_info_type_row_date_sign'  onClick={()=>set_sign_popup_1(!sign_popup_1)}>
                {trimmedDataURL_1?<img src={trimmedDataURL_1} className='sign_1_img' alt="signature" />:<></>}
            </div>
             


            <div className='haavara_popup_btn' onClick={()=>{set_show_haavara_popup(false); save_hot_move()}}>ביצוע העברה חמה</div>



                    {sign_popup_1?<div className='sign_popup_cont'>
                    {/* <div className='sign_area_cont'></div> */}

                    <div onClick={()=>clear()} className='edit_sign_btn'>עריכת החתימה</div>

                    <SignatureCanvas ref={sigCanvas} penColor="white"/>

                    <div className='save_sign_cont'>
                        <img src={trash_w} onClick={()=>clear()} className='trash_w'/>
                        <div className='auto_sign'>חתימה אוטומטית</div>
                        <div className='save_sign' onClick={()=>trim()}>שמור</div>

                    </div>


                    {/* {trimmedDataURL && <img src={trimmedDataURL} alt="signature" />} */}
                </div>:<></>}
                
        </div>:<></>}


           <div className='worker_popup_top_area'>
            <div className='worker_popup_top_area_right worker_popup_top_area_right_sign worker_popup_top_area_right_sign_n'>

            <div className='comp_cols_cont'>
                <div className='details_cont_h_main'>
                    <div className='details_cont details_cont_h'> 
                        <div className='details_cont_r details_cont_h_b'>{props.weapon.next_check?props.weapon.next_check.split('T')[0]:""}</div>   
                        <div className='details_cont_r'>בדיקה הבאה</div>   
                       
                    </div>


                    {/* <div className='details_cont details_cont_h'> 
                         <div className='details_cont_r details_cont_h_b'>{props.weapon.last_check?props.weapon.last_check.split('T')[0]:""}</div>  
                        <div className='details_cont_r'>בדיקה אחרונה</div>   
                        
                      
                    </div> */}

                    <div className='details_cont details_cont_h'>  
                        <div className='details_cont_r details_cont_h_b'>{props.weapon.belong}</div>   
                        <div className='details_cont_r'>מוקצה ל</div>   
                      
                  
                    </div>

                    <div className='details_cont details_cont_h'> 
                         <div className='details_cont_r details_cont_h_b'>{props.weapon.place}</div>   
                        <div className='details_cont_r'>מיקום נוכחי</div>   
                      
                    </div>

                </div>
     
            </div>


            </div>

            

        </div>



        <div className='worker_popup_top_area'>
            <div className='worker_popup_top_area_right worker_popup_top_area_right_neshek'>
                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>מסמכים ורישיונות</div>
                <div className='warning_msg'> 
                      <img src={r_dot} />
                      חסרה תעודת הרשאה לנשק
                </div>
                <div className='upload_doc_btn'>העלאת מסמך</div>

                <div className='neshek_doc_box_cont_main'>

                    <div className='neshek_doc_box_cont'>
                        <img src={more_icon} className='more_icon_neshek_doc_box'/>
                        <div className='neshek_doc_box_title'>טופס רישום נשק (מסמך זהות נשק)</div>
                        <div className='neshek_doc_box_title_sub'>
                            <img src={valid} />
                            <div>קיים</div>
                            <div>בתוקף עד 06/2026</div>
                        </div>
                    </div>

                    <div className='neshek_doc_box_cont'>
                        <img src={more_icon} className='more_icon_neshek_doc_box'/>
                        <div className='neshek_doc_box_title'>אישור רפואי</div>
                        <div className='neshek_doc_box_title_sub'>
                            <img src={not_valid} />
                            <div>חסר</div>
                            <div className='upload_file_btn'>העלאת מסמך</div>
                        </div>
                    </div>


                    <div className='neshek_doc_box_cont'>
                        <img src={more_icon} className='more_icon_neshek_doc_box'/>
                        <div className='neshek_doc_box_title'>טופס קבלה/מסירה בכספת</div>
                        <div className='neshek_doc_box_title_sub'>
                            <img src={valid} />
                            <div>קיים</div>
                            <div>בתוקף עד 06/2026</div>
                        </div>
                    </div>


                    <div className='neshek_doc_box_cont'>
                        <img src={more_icon} className='more_icon_neshek_doc_box'/>
                        <div className='neshek_doc_box_title'>אישור ריענון ירי</div>
                        <div className='neshek_doc_box_title_sub'>
                            <img src={valid} />
                            <div>קיים</div>
                            <div>בתוקף עד 06/2026</div>
                        </div>
                    </div>


                    <div className='neshek_doc_box_cont'>
                        <img src={more_icon} className='more_icon_neshek_doc_box'/>
                        <div className='neshek_doc_box_title'>טופס רישום נשק (מסמך זהות נשק)</div>
                        <div className='neshek_doc_box_title_sub'>
                            <img src={valid} />
                            <div>קיים</div>
                            <div>בתוקף עד 06/2026</div>
                        </div>
                    </div>


                    <div className='neshek_doc_box_cont'>
                        <img src={more_icon} className='more_icon_neshek_doc_box'/>
                        <div className='neshek_doc_box_title'>טופס רישום נשק (מסמך זהות נשק)</div>
                        <div className='neshek_doc_box_title_sub'>
                            <img src={valid} />
                            <div>קיים</div>
                            <div>בתוקף עד 06/2026</div>
                        </div>
                    </div>




                </div>


            </div>

        </div>


        <div className='worker_popup_top_area'>
            <div className='worker_popup_top_area_right worker_popup_top_area_right_neshek_s'>
                {/* <img src={more_icon} className='w_more_icon'/> */}
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>פרטי תחמושת</div>
                <div className='neshek_s_title'>
                    15 כדורים (9mm)
                </div>

                <div className='update_count_btn'>עדכן כמות</div>
            </div>
        </div>

        <div className='worker_popup_top_area'>
            <div className='worker_popup_top_area_right worker_popup_top_area_right_neshek'>
                {/* <img src={more_icon} className='w_more_icon'/> */}
               
                <div className='select_period select_period_h'>סינון</div>
                <div className='export_btn export_btn_h'>ייצוא</div>
                

                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>הסטוריה</div>


                <div className='btn_cont_top'>
                    <div className={"top_btn " + (neshek_tab==1?"top_btn_selected":"")} onClick={()=>set_neshek_tab(1)}>תקלות</div>
                    <div className={"top_btn " + (neshek_tab==2?"top_btn_selected":"")} onClick={()=>set_neshek_tab(2)}>הקצאות</div>
                    <div className={"top_btn " + (neshek_tab==3?"top_btn_selected":"")} onClick={()=>set_neshek_tab(3)}>החזרות</div>
                </div>

            {neshek_tab==1?<>
                <div className='history_info_cont'>
                    <div className='history_info_title'>תאריך</div>
                    <div className='history_info_title'>סוג אירוע</div>
                    <div className='history_info_title'>פרטים</div>
                    <div className='history_info_title'>בוצע על ידי</div>
                     <div className='history_info_title'>הערות</div>
                    <div className='history_info_title'>סטטוס</div>

                </div>

                <div className='history_info_cont'>
                    <div className='history_info_title history_info_title_r'>10/01/25</div>
                    <div className='history_info_title history_info_title_r'>הקצאה</div>
                    <div className='history_info_title history_info_title_r'>הוקצה ל־יוסי כהן (אתר קניון TLV)</div>
                    <div className='history_info_title history_info_title_r'>קב״ט רועי לוי</div>
                    <div className='history_info_title history_info_title_r'>12/09/25</div>
                    <div className='history_info_title history_info_title_r'>
                        <div className='status_cont' onClick={()=>set_show_status_opt(true)}>
                            <img src={g_dot} />
                            <div>הושלם</div>
                        </div>

                        {show_status_opt?<div className='status_opt_cont status_opt_cont_h'>

                             <div className='status_opt_row' onClick={()=>set_show_status_opt(false)}><img src={g_dot} />
                        הושלם</div>

                          <div className='status_opt_row'><img src={y_dot} />
                        בטיפול</div>

                          <div className='status_opt_row'><img src={r_dot} />
                        הושבת</div>
                        </div>:<></>}
                    </div>

                </div>

                <div className='history_info_cont'>
                    <div className='history_info_title history_info_title_r'>10/01/25</div>
                    <div className='history_info_title history_info_title_r'>הקצאה</div>
                    <div className='history_info_title history_info_title_r'>הוקצה ל־יוסי כהן (אתר קניון TLV)</div>
                    <div className='history_info_title history_info_title_r'>קב״ט רועי לוי</div>
                    <div className='history_info_title history_info_title_r'>12/09/25</div>
                    <div className='history_info_title history_info_title_r'>
                        <div className='status_cont'>
                            <img src={g_dot} />
                            <div>הושלם</div>
                        </div>
                    </div>

                </div>

                <div className='history_info_cont'>
                    <div className='history_info_title history_info_title_r'>10/01/25</div>
                    <div className='history_info_title history_info_title_r'>הקצאה</div>
                    <div className='history_info_title history_info_title_r'>הוקצה ל־יוסי כהן (אתר קניון TLV)</div>
                    <div className='history_info_title history_info_title_r'>קב״ט רועי לוי</div>
                    <div className='history_info_title history_info_title_r'>12/09/25</div>
                    <div className='history_info_title history_info_title_r'>
                        <div className='status_cont'>
                            <img src={g_dot} />
                            <div>הושלם</div>
                        </div>
                    </div>

                </div>

                <div className='history_info_cont'>
                    <div className='history_info_title history_info_title_r'>10/01/25</div>
                    <div className='history_info_title history_info_title_r'>הקצאה</div>
                    <div className='history_info_title history_info_title_r'>הוקצה ל־יוסי כהן (אתר קניון TLV)</div>
                    <div className='history_info_title history_info_title_r'>קב״ט רועי לוי</div>
                    <div className='history_info_title history_info_title_r'>12/09/25</div>
                    <div className='history_info_title history_info_title_r'>
                        <div className='status_cont'>
                            <img src={g_dot} />
                            <div>הושלם</div>
                        </div>
                    </div>

                </div>

                <div className='history_info_cont'>
                    <div className='history_info_title history_info_title_r'>10/01/25</div>
                    <div className='history_info_title history_info_title_r'>הקצאה</div>
                    <div className='history_info_title history_info_title_r'>הוקצה ל־יוסי כהן (אתר קניון TLV)</div>
                    <div className='history_info_title history_info_title_r'>קב״ט רועי לוי</div>
                    <div className='history_info_title history_info_title_r'>12/09/25</div>
                    <div className='history_info_title history_info_title_r'>
                        <div className='status_cont'>
                            <img src={g_dot} />
                            <div>הושלם</div>
                        </div>
                    </div>

                </div>

                <div className='history_info_cont'>
                    <div className='history_info_title history_info_title_r'>10/01/25</div>
                    <div className='history_info_title history_info_title_r'>הקצאה</div>
                    <div className='history_info_title history_info_title_r'>הוקצה ל־יוסי כהן (אתר קניון TLV)</div>
                    <div className='history_info_title history_info_title_r'>קב״ט רועי לוי</div>
                    <div className='history_info_title history_info_title_r'>12/09/25</div>
                    <div className='history_info_title history_info_title_r'>
                        <div className='status_cont'>
                            <img src={g_dot} />
                            <div>הושלם</div>
                        </div>
                    </div>

                </div>

                <div className='history_info_cont'>
                    <div className='history_info_title history_info_title_r'>10/01/25</div>
                    <div className='history_info_title history_info_title_r'>הקצאה</div>
                    <div className='history_info_title history_info_title_r'>הוקצה ל־יוסי כהן (אתר קניון TLV)</div>
                    <div className='history_info_title history_info_title_r'>קב״ט רועי לוי</div>
                    <div className='history_info_title history_info_title_r'>12/09/25</div>
                    <div className='history_info_title history_info_title_r'>
                        <div className='status_cont'>
                            <img src={g_dot} />
                            <div>הושלם</div>
                        </div>
                    </div>

                </div>
            </>:<></>}

            {neshek_tab==2?<>
                <div className='history_info_cont'>
                    <div className='history_info_title'>תאריך</div>
                    <div className='history_info_title'>שעה</div>
                    <div className=''>
                        <div className='line_title'><span className='line_h'></span>
                            פרטי המורשה
                            <span className='line_h'></span>
                        </div>
                        <div className='history_info_title_name'>
                            <div className='history_info_title'>שם</div>
                            <div className='history_info_title'>משפחה</div>
                            <div className='history_info_title'>מספר זהות</div>
                        </div>
                    </div>
                    <div className='history_info_title'>מספר תעודת הרשאה</div>
                    <div className='history_info_title'>מספר מחסניות שנמסרו</div>
                    <div className='history_info_title'>מספר כדורים שנמסרו</div>
                    <div className='history_info_title'>חתימת המורשה</div>

                </div>

                <div className='history_info_cont'>
                    <div className='history_info_title history_info_title_r'>10/10/2025</div>
                    <div className='history_info_title history_info_title_r'>18:30</div>

                    <div className='history_info_title_name'>
                        <div className='history_info_title history_info_title_r'>אורי</div>
                        <div className='history_info_title history_info_title_r'>אחדות</div>
                        <div className='history_info_title history_info_title_r'>123456789</div>
                    </div>

                    <div className='history_info_title history_info_title_r'>1234</div>
                    <div className='history_info_title history_info_title_r'>2</div>
                    <div className='history_info_title history_info_title_r'>28</div>
                    <div className='history_info_title history_info_title_r'>
                        <div className='sign_div_cont'></div>
                    </div>
                </div>

                   <div className='history_info_cont'>
                    <div className='history_info_title history_info_title_r'>10/10/2025</div>
                    <div className='history_info_title history_info_title_r'>18:30</div>

                    <div className='history_info_title_name'>
                        <div className='history_info_title history_info_title_r'>אורי</div>
                        <div className='history_info_title history_info_title_r'>אחדות</div>
                        <div className='history_info_title history_info_title_r'>123456789</div>
                    </div>

                    <div className='history_info_title history_info_title_r'>1234</div>
                    <div className='history_info_title history_info_title_r'>2</div>
                    <div className='history_info_title history_info_title_r'>28</div>
                    <div className='history_info_title history_info_title_r'>
                        <div className='sign_div_cont'></div>
                    </div>
                </div>


                   <div className='history_info_cont'>
                    <div className='history_info_title history_info_title_r'>10/10/2025</div>
                    <div className='history_info_title history_info_title_r'>18:30</div>

                    <div className='history_info_title_name'>
                        <div className='history_info_title history_info_title_r'>אורי</div>
                        <div className='history_info_title history_info_title_r'>אחדות</div>
                        <div className='history_info_title history_info_title_r'>123456789</div>
                    </div>

                    <div className='history_info_title history_info_title_r'>1234</div>
                    <div className='history_info_title history_info_title_r'>2</div>
                    <div className='history_info_title history_info_title_r'>28</div>
                    <div className='history_info_title history_info_title_r'>
                        <div className='sign_div_cont'></div>
                    </div>
                </div>


                   <div className='history_info_cont'>
                    <div className='history_info_title history_info_title_r'>10/10/2025</div>
                    <div className='history_info_title history_info_title_r'>18:30</div>

                    <div className='history_info_title_name'>
                        <div className='history_info_title history_info_title_r'>אורי</div>
                        <div className='history_info_title history_info_title_r'>אחדות</div>
                        <div className='history_info_title history_info_title_r'>123456789</div>
                    </div>

                    <div className='history_info_title history_info_title_r'>1234</div>
                    <div className='history_info_title history_info_title_r'>2</div>
                    <div className='history_info_title history_info_title_r'>28</div>
                    <div className='history_info_title history_info_title_r'>
                        <div className='sign_div_cont'></div>
                    </div>
                </div>


                   <div className='history_info_cont'>
                    <div className='history_info_title history_info_title_r'>10/10/2025</div>
                    <div className='history_info_title history_info_title_r'>18:30</div>

                    <div className='history_info_title_name'>
                        <div className='history_info_title history_info_title_r'>אורי</div>
                        <div className='history_info_title history_info_title_r'>אחדות</div>
                        <div className='history_info_title history_info_title_r'>123456789</div>
                    </div>

                    <div className='history_info_title history_info_title_r'>1234</div>
                    <div className='history_info_title history_info_title_r'>2</div>
                    <div className='history_info_title history_info_title_r'>28</div>
                    <div className='history_info_title history_info_title_r'>
                        <div className='sign_div_cont'></div>
                    </div>
                </div>


                
            </>:<></>}


            {neshek_tab==3?<>
                <div className='history_info_cont'>
                    <div className='history_info_title history_info_title_l'>תאריך</div>
                    <div className='history_info_title history_info_title_l'>שעה</div>
                    <div className='history_info_title history_info_title_l'>מספר מחסניות שהוחזרו</div>
                    <div className='history_info_title history_info_title_l'>מספר כדורים שהוחזרו</div>
                    <div className='history_info_title history_info_title_l'>חתימת בעל הרישיון המיוחד</div>
                </div>

                
                <div className='history_info_cont'>
                    <div className='history_info_title history_info_title_r history_info_title_l'>10/01/25</div>
                    <div className='history_info_title history_info_title_r history_info_title_l'>18:30</div>
                    <div className='history_info_title history_info_title_r history_info_title_l'>2</div>
                    <div className='history_info_title history_info_title_r history_info_title_l'>2</div>
                    <div className='history_info_title history_info_title_r history_info_title_l'>
                        <div className='sign_div_cont'></div>
                    </div>
                </div>

                <div className='history_info_cont'>
                    <div className='history_info_title history_info_title_r history_info_title_l'>10/01/25</div>
                    <div className='history_info_title history_info_title_r history_info_title_l'>18:30</div>
                    <div className='history_info_title history_info_title_r history_info_title_l'>2</div>
                    <div className='history_info_title history_info_title_r history_info_title_l'>2</div>
                    <div className='history_info_title history_info_title_r history_info_title_l'>
                        <div className='sign_div_cont'></div>
                    </div>
                </div>

                <div className='history_info_cont'>
                    <div className='history_info_title history_info_title_r history_info_title_l'>10/01/25</div>
                    <div className='history_info_title history_info_title_r history_info_title_l'>18:30</div>
                    <div className='history_info_title history_info_title_r history_info_title_l'>2</div>
                    <div className='history_info_title history_info_title_r history_info_title_l'>2</div>
                    <div className='history_info_title history_info_title_r history_info_title_l'>
                        <div className='sign_div_cont'></div>
                    </div>
                </div>

                <div className='history_info_cont'>
                    <div className='history_info_title history_info_title_r history_info_title_l'>10/01/25</div>
                    <div className='history_info_title history_info_title_r history_info_title_l'>18:30</div>
                    <div className='history_info_title history_info_title_r history_info_title_l'>2</div>
                    <div className='history_info_title history_info_title_r history_info_title_l'>2</div>
                    <div className='history_info_title history_info_title_r history_info_title_l'>
                        <div className='sign_div_cont'></div>
                    </div>
                </div>

                <div className='history_info_cont'>
                    <div className='history_info_title history_info_title_r history_info_title_l'>10/01/25</div>
                    <div className='history_info_title history_info_title_r history_info_title_l'>18:30</div>
                    <div className='history_info_title history_info_title_r history_info_title_l'>2</div>
                    <div className='history_info_title history_info_title_r history_info_title_l'>2</div>
                    <div className='history_info_title history_info_title_r history_info_title_l'>
                        <div className='sign_div_cont'></div>
                    </div>
                </div>
        
            </>:<></>}

            </div>
        </div>

    </div>

    </>
  )
}

export default Neshek_popup