
import './Certificate_authorization.css'
import close from './assets/close.png'
import comp_img from './assets/comp_img.png'
import cert_4 from './assets/cert_4.png'
import more_icon from './assets/more_icon.png'
import p_details_1 from './assets/p_details_1.png'
import { useRef, useState } from 'react'
import axios from 'axios'
import SignatureCanvas from 'react-signature-canvas'
import trash_w from './assets/trash_w.png'
import check from './assets/check.png'
import check_p from './assets/check_p.png'
import dot_p from './assets/dot_p.png'

import { Document, Page, Text, View, StyleSheet, Image, Font, PDFViewer  } from '@react-pdf/renderer';

import n_r from './fonts/NotoSansHebrew-Regular.ttf'
import n_bold from './fonts/NotoSansHebrew-Bold.ttf'

import n_r1 from './fonts/Rubik-Regular.ttf'
import n_bold1 from './fonts/Rubik-Bold.ttf'

function Certificate_authorization_3(props:any) {


        const [sign_popup_1, set_sign_popup_1] = useState(false);
        const [sign_popup_2, set_sign_popup_2] = useState(false);
        const [sign_popup_3, set_sign_popup_3] = useState(false);
        const [sign_popup_4, set_sign_popup_4] = useState(false);
        const [sign_popup_5, set_sign_popup_5] = useState(false);
        const [sign_popup_6, set_sign_popup_6] = useState(false);

        const [sign_popup_7, set_sign_popup_7] = useState(false);
        const [sign_popup_8, set_sign_popup_8] = useState(false);

        const [cert_data, set_cert_data] = useState<any>(props.cert_data);
        const [fake, set_fake] = useState(false);

        const sigCanvas:any = useRef({});
        const sigCanvas_2:any = useRef({});
        const sigCanvas_3:any = useRef({});
        const sigCanvas_4:any = useRef({});
        const sigCanvas_5:any = useRef({});
        const sigCanvas_6:any = useRef({});

        const sigCanvas_7:any = useRef({});
        const sigCanvas_8:any = useRef({});
        
        const [trimmedDataURL_1, setTrimmedDataURL_1] = useState<any>(null);
        const [trimmedDataURL_2, setTrimmedDataURL_2] = useState<any>(null);
        const [trimmedDataURL_3, setTrimmedDataURL_3] = useState<any>(null);
        
        const [trimmedDataURL_4, setTrimmedDataURL_4] = useState<any>(null);
        const [trimmedDataURL_5, setTrimmedDataURL_5] = useState<any>(null);
        const [trimmedDataURL_6, setTrimmedDataURL_6] = useState<any>(null);
        const [trimmedDataURL_7, setTrimmedDataURL_7] = useState<any>(null);
        const [trimmedDataURL_8, setTrimmedDataURL_8] = useState<any>(null);
        
    
        const [sign_1_date_time, set_sign_1_date_time] = useState('');
        const [sign_2_date_time, set_sign_2_date_time] = useState('');
        const [sign_3_date_time, set_sign_3_date_time] = useState('');
        const [sign_4_date_time, set_sign_4_date_time] = useState('');
        const [sign_5_date_time, set_sign_5_date_time] = useState('');
        const [sign_6_date_time, set_sign_6_date_time] = useState('');

        const [sign_7_date_time, set_sign_7_date_time] = useState('');
        const [sign_8_date_time, set_sign_8_date_time] = useState('');

        const [show_preview_cert, set_show_preview_cert] = useState(false);
        const [err_msg, set_err_msg] = useState<any>([]);

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
    
            let cert_data_t:any=cert_data;
            cert_data_t['sign_1']=sigCanvas.current
                .getTrimmedCanvas()
                .toDataURL("image/png");
    
                let today:any=new Date();
                let t=(today.getFullYear() +"-"+ ((today.getMonth()+1)<10?String(today.getMonth()+1).padStart(2, '0'):today.getMonth()+1) +"-"+ (today.getDate()<10?'0'+today.getDate():today.getDate()) +" " + (today.getHours()<10?'0'+today.getHours():today.getHours())+":"+(today.getMinutes()<10?'0'+today.getMinutes():today.getMinutes())+":"+(today.getSeconds()<10?'0'+today.getSeconds():today.getSeconds()))
    
                debugger;
                set_sign_1_date_time(t);
    
                cert_data_t['sign_1_d_t']=t;
    
            set_cert_data(cert_data_t);
            props.set_cert_data(cert_data_t);
            set_fake(!fake);
          //  console.log(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
                            
        }
    
    
        function clear_2 () {
            sigCanvas_2.current.clear()
        }
    
        function trim_2 () {
            if (!sigCanvas_2.current || sigCanvas_2.current.isEmpty()) return;
    
            setTrimmedDataURL_2(
            sigCanvas_2.current
                .getTrimmedCanvas()
                .toDataURL("image/png")
            );
    
            set_sign_popup_2(false);     
    
            let cert_data_t:any=cert_data;
            cert_data_t['sign_1_w']=sigCanvas_2.current
                .getTrimmedCanvas()
                .toDataURL("image/png");
    
            let today:any=new Date();
            let t=(today.getFullYear() +"-"+ ((today.getMonth()+1)<10?String(today.getMonth()+1).padStart(2, '0'):today.getMonth()+1) +"-"+ (today.getDate()<10?'0'+today.getDate():today.getDate()) +" " + (today.getHours()<10?'0'+today.getHours():today.getHours())+":"+(today.getMinutes()<10?'0'+today.getMinutes():today.getMinutes())+":"+(today.getSeconds()<10?'0'+today.getSeconds():today.getSeconds()))
    
            set_sign_2_date_time(t);
    
            cert_data_t['sign_2_d_t']=t;
    
            set_cert_data(cert_data_t);
            props.set_cert_data(cert_data_t);
            set_fake(!fake);
          //  console.log(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
                            
        }
    
    
        
        function clear_3 () {
            sigCanvas_3.current.clear()
        }
    
        function trim_3 () {
            if (!sigCanvas_3.current || sigCanvas_3.current.isEmpty()) return;
    
            setTrimmedDataURL_3(
            sigCanvas_3.current
                .getTrimmedCanvas()
                .toDataURL("image/png")
            );
    
            set_sign_popup_3(false);     
    
            let cert_data_t:any=cert_data;
            cert_data_t['sign_2']=sigCanvas_3.current
                .getTrimmedCanvas()
                .toDataURL("image/png");
    
                 let today:any=new Date();
            let t=(today.getFullYear() +"-"+ ((today.getMonth()+1)<10?String(today.getMonth()+1).padStart(2, '0'):today.getMonth()+1) +"-"+ (today.getDate()<10?'0'+today.getDate():today.getDate()) +" " + (today.getHours()<10?'0'+today.getHours():today.getHours())+":"+(today.getMinutes()<10?'0'+today.getMinutes():today.getMinutes())+":"+(today.getSeconds()<10?'0'+today.getSeconds():today.getSeconds()))
    
            set_sign_3_date_time(t);
    
            cert_data_t['sign_3_d_t']=t;
    
            set_cert_data(cert_data_t);
            props.set_cert_data(cert_data_t);
            set_fake(!fake);
    
          //  console.log(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
                            
        }
    
    
            
        function clear_4 () {
            sigCanvas_4.current.clear()
        }
    
        function trim_4 () {
            if (!sigCanvas_4.current || sigCanvas_4.current.isEmpty()) return;
    
            setTrimmedDataURL_4(
            sigCanvas_4.current
                .getTrimmedCanvas()
                .toDataURL("image/png")
            );
    
            set_sign_popup_4(false);  
            
            let cert_data_t:any=cert_data;
            cert_data_t['sign_2_w']=sigCanvas_4.current
                .getTrimmedCanvas()
                .toDataURL("image/png");
    
            let today:any=new Date();
            let t=(today.getFullYear() +"-"+ ((today.getMonth()+1)<10?String(today.getMonth()+1).padStart(2, '0'):today.getMonth()+1) +"-"+ (today.getDate()<10?'0'+today.getDate():today.getDate()) +" " + (today.getHours()<10?'0'+today.getHours():today.getHours())+":"+(today.getMinutes()<10?'0'+today.getMinutes():today.getMinutes())+":"+(today.getSeconds()<10?'0'+today.getSeconds():today.getSeconds()))
    
            set_sign_4_date_time(t);
    
            cert_data_t['sign_4_d_t']=t;
    
            set_cert_data(cert_data_t);
            props.set_cert_data(cert_data_t);
            set_fake(!fake);
    
    
          //  console.log(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
                            
        }
    
    
             
        function clear_5 () {
            sigCanvas_5.current.clear()
        }
    
        function trim_5 () {
            if (!sigCanvas_5.current || sigCanvas_5.current.isEmpty()) return;
    
            setTrimmedDataURL_5(
            sigCanvas_5.current
                .getTrimmedCanvas()
                .toDataURL("image/png")
            );
    
            set_sign_popup_5(false);     
    
            let cert_data_t:any=cert_data;
            cert_data_t['sign_3']=sigCanvas_5.current
                .getTrimmedCanvas()
                .toDataURL("image/png");
    
            let today:any=new Date();
            let t=(today.getFullYear() +"-"+ ((today.getMonth()+1)<10?String(today.getMonth()+1).padStart(2, '0'):today.getMonth()+1) +"-"+ (today.getDate()<10?'0'+today.getDate():today.getDate()) +" " + (today.getHours()<10?'0'+today.getHours():today.getHours())+":"+(today.getMinutes()<10?'0'+today.getMinutes():today.getMinutes())+":"+(today.getSeconds()<10?'0'+today.getSeconds():today.getSeconds()))
    
            set_sign_5_date_time(t);
    
            cert_data_t['sign_5_d_t']=t;
    
    
            set_cert_data(cert_data_t);
            props.set_cert_data(cert_data_t);
            set_fake(!fake);
    
          //  console.log(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
                            
        }
    
                
        function clear_6 () {
            sigCanvas_6.current.clear()
        }
    
        function trim_6 () {
            if (!sigCanvas_6.current || sigCanvas_6.current.isEmpty()) return;
    
            setTrimmedDataURL_6(
            sigCanvas_6.current
                .getTrimmedCanvas()
                .toDataURL("image/png")
            );
    
            set_sign_popup_6(false);     
    
            let cert_data_t:any=cert_data;
            cert_data_t['sign_3_w']=sigCanvas_6.current
                .getTrimmedCanvas()
                .toDataURL("image/png");
    
            let today:any=new Date();
            let t=(today.getFullYear() +"-"+ ((today.getMonth()+1)<10?String(today.getMonth()+1).padStart(2, '0'):today.getMonth()+1) +"-"+ (today.getDate()<10?'0'+today.getDate():today.getDate()) +" " + (today.getHours()<10?'0'+today.getHours():today.getHours())+":"+(today.getMinutes()<10?'0'+today.getMinutes():today.getMinutes())+":"+(today.getSeconds()<10?'0'+today.getSeconds():today.getSeconds()))
    
            set_sign_6_date_time(t);
    
            cert_data_t['sign_6_d_t']=t;
    
            set_cert_data(cert_data_t);
            props.set_cert_data(cert_data_t);
            set_fake(!fake);
    
          //  console.log(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
                            
        }



                 
        function clear_7 () {
            sigCanvas_7.current.clear()
        }
    
        function trim_7 () {
            if (!sigCanvas_7.current || sigCanvas_7.current.isEmpty()) return;
    
            setTrimmedDataURL_7(
            sigCanvas_7.current
                .getTrimmedCanvas()
                .toDataURL("image/png")
            );
    
            set_sign_popup_7(false);     
    
            let cert_data_t:any=cert_data;
            cert_data_t['sign_7_w']=sigCanvas_7.current
                .getTrimmedCanvas()
                .toDataURL("image/png");
    
            let today:any=new Date();
            let t=(today.getFullYear() +"-"+ ((today.getMonth()+1)<10?String(today.getMonth()+1).padStart(2, '0'):today.getMonth()+1) +"-"+ (today.getDate()<10?'0'+today.getDate():today.getDate()) +" " + (today.getHours()<10?'0'+today.getHours():today.getHours())+":"+(today.getMinutes()<10?'0'+today.getMinutes():today.getMinutes())+":"+(today.getSeconds()<10?'0'+today.getSeconds():today.getSeconds()))
    
            set_sign_7_date_time(t);
    
            cert_data_t['sign_7_d_t']=t;
    
            set_cert_data(cert_data_t);
            props.set_cert_data(cert_data_t);
            set_fake(!fake);
    
          //  console.log(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
                            
        }


        
                 
        function clear_8 () {
            sigCanvas_8.current.clear()
        }
    
        function trim_8 () {
            if (!sigCanvas_8.current || sigCanvas_8.current.isEmpty()) return;
    
            setTrimmedDataURL_8(
            sigCanvas_8.current
                .getTrimmedCanvas()
                .toDataURL("image/png")
            );
    
            set_sign_popup_8(false);     
    
            let cert_data_t:any=cert_data;
            cert_data_t['sign_8_w']=sigCanvas_8.current
                .getTrimmedCanvas()
                .toDataURL("image/png");
    
            let today:any=new Date();
            let t=(today.getFullYear() +"-"+ ((today.getMonth()+1)<10?String(today.getMonth()+1).padStart(2, '0'):today.getMonth()+1) +"-"+ (today.getDate()<10?'0'+today.getDate():today.getDate()) +" " + (today.getHours()<10?'0'+today.getHours():today.getHours())+":"+(today.getMinutes()<10?'0'+today.getMinutes():today.getMinutes())+":"+(today.getSeconds()<10?'0'+today.getSeconds():today.getSeconds()))
    
            set_sign_8_date_time(t);
    
            cert_data_t['sign_8_d_t']=t;
    
            set_cert_data(cert_data_t);
            props.set_cert_data(cert_data_t);
            set_fake(!fake);
    
          //  console.log(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
                            
        }
    function save_cert_neshek(){
        
       let payload = new FormData();
    
       payload.append("worker_name", cert_data.worker_name);
       payload.append("t_z", cert_data.t_z);
       payload.append("area", cert_data.area);
       payload.append("cert_date", cert_data.cert_date);
       payload.append("organization_mun", cert_data.organization_mun);
       payload.append("organization_date", cert_data.organization_date);
       payload.append("neshek_id", cert_data.neshek_id);
       payload.append("cert_start", cert_data.cert_start);
       payload.append("cert_end", cert_data.cert_end);

       payload.append("sign_1", cert_data.sign_1);
       payload.append("sign_2", cert_data.sign_2);
       payload.append("sign_3", cert_data.sign_3);

       payload.append("sign_1_w", cert_data.sign_1_w);
       payload.append("sign_2_w", cert_data.sign_2_w);
       payload.append("sign_3_w", cert_data.sign_3_w);

       payload.append("mns", cert_data.mns);
       payload.append("approved_docs", cert_data.approved_docs);

       payload.append("mahsanit_count", cert_data.mahsanit_count);
       payload.append("kadurim_count", cert_data.kadurim_count);

       payload.append("sign_1_d_t", cert_data.sign_1_d_t);
       payload.append("sign_2_d_t", cert_data.sign_2_d_t);
       payload.append("sign_3_d_t", cert_data.sign_3_d_t);
       
       payload.append("sign_4_d_t", cert_data.sign_4_d_t);
       payload.append("sign_5_d_t", cert_data.sign_5_d_t);
       payload.append("sign_6_d_t", cert_data.sign_6_d_t);
       
       payload.append("sign_4", cert_data.sign_7_w);
       payload.append("sign_4_w", cert_data.sign_8_w);

       payload.append("sign_7_d_t", cert_data.sign_7_d_t);
       payload.append("sign_8_d_t", cert_data.sign_8_d_t);


       axios({
        method: 'post',
        url: globalThis.app.current+'/save_cert_neshek',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(() => {
        
      });

    }

    function next_page(){
        if (cert_data.sign_1 && cert_data.sign_2 && cert_data.sign_3 && cert_data.sign_1_w &&
            cert_data.sign_2_w && cert_data.sign_3_w && cert_data.sign_7_w && cert_data.sign_8_w
        ){
            save_cert_neshek();
            props.set_show_certificate_of_authorization_3(false);            
        } else{
              set_err_msg('נא למלא את כל השדות');
        }

    }

    function next_page_1(){

        if (cert_data.sign_1 && cert_data.sign_2 && cert_data.sign_3 && cert_data.sign_1_w &&
            cert_data.sign_2_w && cert_data.sign_3_w && cert_data.sign_7_w && cert_data.sign_8_w
        ){
            set_show_preview_cert(true)      
        } else{
              set_err_msg('נא למלא את כל השדות');
        }
       
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
    
    section_img: {
        // margin: 10,
        padding: 10,
        flexGrow: 1,
        textAlign:'center',
        marginLeft:50
    },
    section_top_cont:{
        flexDirection: 'row',
    },
    section_top_cont_en:{
        flexDirection: 'row-reverse',
    },
    checkbox_line:{
        display:'flex',
        flexDirection: 'row-reverse',
    },
    checkbox_line_input:{
        width:'100%',
        borderBottomWidth: 1,
    },
    check_p:{
        width:8,
        height:8,
        marginTop:4,
        marginLeft:5
    },
    dot_p:{
        width:4,
        height:4,
        marginTop:4,
        marginLeft:4,
        marginRight:4
    },
    title_text:{
        fontSize: 10,
        width:'50%',
        textAlign: 'center',
        fontWeight:'bold',
        color:'#283654',
        textDecoration:'underline',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:10,
        direction:'rtl'
    },

    title_text_s:{
       fontSize: 10,
        width:'100%',
        textAlign: 'center',
        color:'#283654'
    },

    title_text_s_r:{
       fontSize: 10,
        width:'100%',
        textAlign: 'right',
        color:'#283654',
         direction:'rtl'
    },

    title_text_s_r_bottom:{
       fontSize: 10,
        width:'100%',
        textAlign: 'center',
        color:'#283654',
        marginTop:-13
        //  direction:'rtl'
    },

    
    title_text_s_r_s:{
       fontSize: 8,
        width:'100%',
        textAlign: 'right',
        color:'#283654',
         direction:'rtl'
    },

    sign_box:{
        width:110,
        borderTopWidth:1,
        borderTopColor:'#707070'
    },

    sign_img:{
        height: 15,
        maxWidth:30,
        marginRight:'auto',
        marginLeft:'auto',
        marginTop:-14
    },
    sign_box_cont_b:{
        width:110,
    },
    sign_box_cont:{
        display:'flex',
        flexDirection: 'row-reverse',
        gap:20,
        marginTop:15,
        marginBottom:5
    },

    sign_box_text:{
        fontSize:10,
        fontWeight:'bold',
        color:'#283654',
        textAlign:'center'
    },

    title_text_s_r_bold:{
        fontSize: 10,
        width:'100%',
        textAlign: 'right',
        color:'#283654',
        direction:'rtl',
        fontWeight:'bold',
   
    },

    sub_title:{
        marginTop:10,
        marginRight:12
    },

    sub_title_b:{
        marginRight:12
    },

    title_text_s_b_first:{
        fontSize: 10,
        width:'100%',
        textAlign: 'right',
        marginTop:20,
        color:'#283654',
          direction:'rtl',
        alignItems: 'flex-end' ,
        // display:'flex',
        // flexDirection: 'row-reverse'
    },

    title_text_s_b:{
        fontSize: 10,
        width:'100%',
        textAlign: 'right',
        color:'#283654',
         direction:'rtl'
    },

    title_text_s_underline:{
    //    fontWeight:'bold',
       // textDecoration: 'underline' ,
        //  borderBottomColor:'black',
        //   borderBottomWidth: 1,
        // fontFamily:'pop',
        
        borderBottomWidth: 1,
        borderBottomColor: '#283654',
        paddingBottom: 1,
       //  height:12
        //  marginBottom: 1
    },
table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
  },
  row: {
    flexDirection: 'row-reverse',
  },
  cell: {
    flexGrow: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    padding: 2,
    width:200,
    color:'#283654',
    fontSize:10,
    textAlign:'right'
  },
cell_h: {
    flexGrow: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    padding: 2,
    width:200,
    color:'#283654',
    fontSize:10,
    textAlign:'right',
    fontWeight:'bold'
  },
  cell_l:{
    flexGrow: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    padding: 2,
    width:400,
    color:'#283654',
    fontSize:10,
    textAlign:'right'
  },
  lastCell: {
    borderRightWidth: 0,
  },

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
                    <Text style={styles.title_text_s}>שם ארגון השמירה: מוקד מטרה</Text>
                    <Text style={styles.title_text_s}>מספר ארגון: 043600642</Text>
                    <Text style={styles.title_text_s}> מספר טלפון: 03-9313193</Text>

                  <Text style={styles.title_text}>תעודת הרשאה מס' 240 לנשיאת כלי ירייה
            ארגון שמירה לפי סעיף 10ג' לחוק כלי הירייה, תש"ט - 1949</Text>

              
                    <Text style={styles.title_text_s_b_first}>
                      
                        <Text style={styles.title_text_s_r}> אני מר/גב’</Text>
                        <Text style={styles.title_text_s_underline}> כהן אורי. </Text>
                        <Text style={styles.title_text_s_r}> מס’ ת.ז.</Text>
                        <Text style={styles.title_text_s_underline}> 201456472 </Text>
                        <Text style={styles.title_text_s_r}> המשמש/ת בתפקיד בעל הרשיון המיוחד בארגון שמירה 
                             מספר ארגון </Text>
                        <Text style={styles.title_text_s_underline}> 043600642 </Text>
                        <Text style={styles.title_text_s_r}> תוקף הרשיון המיוחד</Text>
                        <Text style={styles.title_text_s_underline}> 30/06/2027 </Text>
                    </Text>


                    <Text style={styles.title_text_s_b}>
                       <Text style={styles.title_text_s_r}>   מרשה את:</Text>
                    </Text>
                    <Text style={styles.title_text_s_b}>
                        <Text style={styles.title_text_s_r}> 
                            מר/גב’: 
                            <Text style={styles.title_text_s_underline}>{cert_data.worker_name}.</Text> 
                           מספר זהות</Text> 
                        <Text style={styles.title_text_s_underline}> {cert_data.t_z} </Text>  
                    </Text>    

                    <Text style={styles.title_text_s_b}>
                        <Text style={styles.title_text_s_r}>  לשאת כלי ירייה שפרטיו מפורטים להלן, לצורך מילוי תפקידו בלבד באזור / מקום </Text>
                        <Text style={styles.title_text_s_underline}> {cert_data.snif}</Text>                                                       
                    </Text> 

                    <Text style={styles.title_text_s_b}> 
                        <Text style={styles.title_text_s_r}>תוקף תעודת הרשאה זו עד ליום</Text>
                        <Text style={styles.title_text_s_underline}> {cert_data.cert_data} </Text>  
                    </Text>     

                    <Text style={styles.title_text_s_b}> 
                        <Text style={styles.title_text_s_r}>  מס’ רישיון ארגוני לנשיאת כלי יריה</Text>
                        <Text style={styles.title_text_s_underline}> {cert_data.organization_mun} .</Text> 
                        <Text style={styles.title_text_s_r}>   בתוקף עד ליום </Text>
                        <Text style={styles.title_text_s_underline}> {cert_data.organization_date}. </Text>  
                    </Text>

                   <View style={styles.table}>
                        <View style={styles.row}>
                            <Text style={styles.cell_h}>סוג הכלי</Text>
                            <Text style={styles.cell_h}>יצרן</Text>
                            <Text style={styles.cell_h}>תוצרת</Text>
                            <Text style={styles.cell_h}>מספר הכלי</Text>
                            <Text style={styles.cell_h}>קליבר</Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.cell}>{cert_data.neshek.type}</Text>
                            <Text style={styles.cell}>{cert_data.neshek.model}</Text>
                            <Text style={styles.cell}>{cert_data.neshek.creator}</Text>
                            <Text style={styles.cell}>{cert_data.neshek.number}</Text>
                            <Text style={styles.cell}>{cert_data.neshek.kaliber}</Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.cell}>כמות כדורים</Text>
                            <Text style={styles.cell}></Text>
                            <Text style={styles.cell}>במילים</Text>
                            <Text style={styles.cell_l}>בספרות: {cert_data.kadurim_count}</Text>
                        
                        </View>
                    </View>


                     <Text style={styles.title_text}>שיטת נשיאת כלי הירייה:</Text>

                     <View style={styles.checkbox_line}>
                        <Image src={check_p} style={styles.check_p}/>
                        <Text style={styles.title_text_s_r}>נשיאת כלי הירייה גם מחוץ לשעות הפעילות כולל החזקה בבית, בכפוף לאחסון כלי הירייה בכספת ביתית- יש לפרט את הסיבה למתן ההיתר</Text>
                     </View>
                      <View style={styles.checkbox_line_input}></View>

                      <View style={styles.checkbox_line}>
                        <Image src={check_p} style={styles.check_p}/>
                        <Text style={styles.title_text_s_r}>נשיאת כלי הירייה אך ורק במסגרת פעילות מורשה ואחסון בתום הפעילות בכספת החברה (השיטה והכספת יאושרו ע”י משטרת ישראל ופקיד הרישוי)</Text>
                     </View>

                      <View style={styles.checkbox_line}>
                        <Image src={check_p} style={styles.check_p}/>
                        <Text style={styles.title_text_s_r}>נשיאת כלי הירייה אך ורק במסגרת פעילות מורשה ואחסון בתום הפעילות בכספת אישית באתר החמוש( ) (השיטה והכספת יאושרו ע”י משטרת ישראל ופקיד הרישוי)</Text>
                     </View>
 
                      <View style={styles.checkbox_line}>
                        <Image src={check_p} style={styles.check_p}/>
                        <Text style={styles.title_text_s_r}>העברה חמה בין המורשים (השיטה והכספת יאושרו ע”י משטרת ישראל ופקיד הרישוי)</Text>
                     </View>

                      <View style={styles.sub_title}><Text style={styles.title_text_s_r}>תנאים והגבלות של בעל הרישיון המיוחד להרשאה:</Text></View>              

                      <View style={styles.sub_title_b}><Text style={styles.title_text_s_r_bold}>הוראות והגבלות:</Text></View>  
               
                    <View style={styles.checkbox_line}>
                        <Image src={dot_p} style={styles.dot_p}/>
                        <Text style={styles.title_text_s_r_s}>הרשאה זו הינה אישית ולא ניתנת להעברה.</Text>
                    </View>

                    <View style={styles.checkbox_line}>
                        <Image src={dot_p} style={styles.dot_p}/>
                        <Text style={styles.title_text_s_r_s}>הרשאה זו מתירה למורשה שפרטיו מופיעים לעיל נשיאת כלי ירייה לצורך מילוי תפקידו מטעם ארגון השמירה, בהתאם לצורך שנקבע ע”י בעל הרישיון המיוחד ובכלי ירייה שעל שם ארגון השמירה בלבד</Text>
                    </View>

                    <View style={styles.checkbox_line}>
                        <Image src={dot_p} style={styles.dot_p}/>
                        <Text style={styles.title_text_s_r_s}>חל איסור על המורשה לעשות שימוש בכלי הירייה על שם ארגון השמירה לצרכים אחרים שלא הוגדרו ברישיון ארגון השמירה.</Text>
                    </View>

                    <View style={styles.checkbox_line}>
                        <Image src={dot_p} style={styles.dot_p}/>
                        <Text style={styles.title_text_s_r_s}>מחזיק תעודת ההרשאה נדרש לשתף פעולה עם נציגי אגף רישוי כלי ירייה ושוטרי משטרת ישראל בכל עת, בקשר למילוי תנאי הרישיון והוראות החוק.</Text>
                    </View>

                    <View style={styles.checkbox_line}>
                        <Image src={dot_p} style={styles.dot_p}/>
                        <Text style={styles.title_text_s_r_s}>במקרה של אובדן/ גניבה של כלי הירייה חייב המורשה להודיע על כך מיד לבעל הרישיון המיוחד בארגון השמירה ולמשטרת ישראל.</Text>
                    </View>

                    <View style={styles.checkbox_line}>
                        <Image src={dot_p} style={styles.dot_p}/>
                        <Text style={styles.title_text_s_r_s}>בסיום הפעילות יוחזר כלי הירייה להפקדה בחדר הנשק של ארגון השמירה, אלא אם כן סבור בעל הרישיון המיוחד כי ישנה סיבה להתיר למורשה לשאת את כלי הירייה גם מחוץ לתחומי האתר ו/או פעילותו ויציין זאת בכתב על גבי התעודה. ההיתר מותנה בכך שכלי הירייה יאוחסן בכספת ביתית מותאמת לסוג כלי הירייה ובכפוף להנחיות בעל הרישיון המיוחד ומשטרת ישראל.</Text>
                    </View>

                    <View style={styles.checkbox_line}>
                        <Image src={dot_p} style={styles.dot_p}/>
                        <Text style={styles.title_text_s_r_s}>האישור לנשיאת כלי הירייה מטעם ארגון השמירה יחודש לאחר קבלת תדריך לפחות פעם בחצי שנה (תוך חתימתו על התחייבותו לפעול לפי נוסח התדריך, אשר יתוייק בתיקו האישי).</Text>
                    </View>

                    
                    <View style={styles.checkbox_line}>
                        <Image src={dot_p} style={styles.dot_p}/>
                        <Text style={styles.title_text_s_r_s}>נשיאת כלי הירייה מטעם ארגון השמירה בהתאם לצורך שנקבע ע”י בעל הרישיון המיוחד ואחסון כלי הירייה בכספת ביתית (למקרים בהם המאבטח נושא את כלי הירייה לביתו) ניתן בכפוף לתדריך המאבטח ע”י בעל הרישיון המיוחד בדבר הוראות האחסון והשימוש בכלי הירייה ורק לאחר שתוחזק בביתו של המורשה כספת המקובעת לקיר או לרצפה לפי הנחיות משטרת ישראל, ובכפוף לחתימה על הצהרה והתחייבות להלן:</Text>
                    </View>

                     <View style={styles.checkbox_line}>
                        <Image src={dot_p} style={styles.dot_p}/>
                        <Text style={styles.title_text_s_r_s}>הנני מאשר/ת כי קיבלתי מבעל הרישיון המיוחד תדריך לגבי הוראות אחסון כלי הירייה ואחזקתו בבית, וכן בדרך אל הבית וממנו.</Text>
                    </View>

                    <View style={styles.checkbox_line}>
                        <Image src={dot_p} style={styles.dot_p}/>
                        <Text style={styles.title_text_s_r_s}>הריני מצהיר/ה בזאת כי מותקנת בביתי כספת, המתאימה לאחסון מוגן של כלי הירייה שפרטיו מצוינים בתעודת הרשאה זו, וניתן לי על ידי בעל הרישיון המיוחד. הכספת הותקנה במקום מוסתר המצוי בשליטתי, באופן מקובע היטב המיועד למנוע עקירתה ממקומה, ואני מתחייב/ת כי היא תשמש להחסנת כלי הירייה הנמצא בחזקתי, באופן שלא תתאפשר לאדם אחר, לרבות יתר דיירי הבית, גישה אל כלי הירייה.</Text>
                    </View>

                    <View style={styles.checkbox_line}>
                        <Image src={dot_p} style={styles.dot_p}/>
                        <Text style={styles.title_text_s_r_s}>הנני מתחייב/ת לאחסן בכספת הזו רק את כלי הירייה שפרטיו מצוינים לעיל, לנעול את כלי הירייה בתוך הכספת מיד עם הגעתי לביתי, ולהשאירו נעול בתוך הכספת.</Text>
                    </View>


                    <View style={styles.checkbox_line}>
                        <Image src={dot_p} style={styles.dot_p}/>
                        <Text style={styles.title_text_s_r_s}>אני מתחייב/ת להחזיר את כלי הירייה לבעל הרישיון המיוחד בארגון השמירה בכל יציאה לחופשה מעבודתי, בארץ/ בחו”ל.</Text>
                    </View>


                    <View style={styles.checkbox_line}>
                        <Image src={dot_p} style={styles.dot_p}/>
                        <Text style={styles.title_text_s_r_s}>הנני מודע/ת לכך, כי הפרת התחייבות זו כמוה כהפרת תנאי מתנאי רישיון להחזקת כלי ירייה, על כל המשתמע מכך.</Text>
                    </View>


                    <View style={styles.checkbox_line}>
                        <Image src={dot_p} style={styles.dot_p}/>
                        <Text style={styles.title_text_s_r_s}>תעודת הרשאה זו תקפה רק כשהיא מוצמדת לתעודה מזהה/רישיון לנשיאת כלי ירייה ארגוני ואישור על הכשרה כמטווח בתוקף לשנה כקבוע בתקנות כלי הירייה (התשע”ח-2018. עבור כלי הירייה אותו נושא המורשה בהרשאה, חתום ע”י מנהל המטווח ומדריך הירי).</Text>
                    </View>
                    
                    <View style={styles.checkbox_line}>
                        <Image src={dot_p} style={styles.dot_p}/>
                        <Text style={styles.title_text_s_r_s}>תוקף הרשאה זו הוא עד למועד תוקפו של הרישיון המיוחד שניתן לארגון השמירה או לתקופה קצרה יותר בהתאם לשיקול דעתו של בעל הרישיון המיוחד.</Text>
                    </View>
                    
                    <View style={styles.checkbox_line}>
                        <Image src={dot_p} style={styles.dot_p}/>
                        <Text style={styles.title_text_s_r_s}>כל שינוי או מחיקה בתעודת הרשאה זו עלולים להביא לביטול ההרשאה.</Text>
                    </View>


                    <View style={styles.sign_box_cont}>

                        <View style={styles.sign_box_cont_b}>
                            <Image src={trimmedDataURL_7} style={styles.sign_img}/>
                            <View style={styles.sign_box}>
                                <Text style={styles.sign_box_text}>חתימת בעל הרישיון המיוחד</Text> 
                            </View>
                        </View>

                        <View style={styles.sign_box_cont_b}>
                            {/* <Image src={trimmedDataURL_7} style={styles.sign_img}/> */}
                            <View style={styles.sign_box}>
                                <Text style={styles.sign_box_text}>חתימת ארגון השמירה</Text> 
                            </View>
                        </View>

                        <View style={styles.sign_box_cont_b}>
                            <Image src={trimmedDataURL_8} style={styles.sign_img}/>
                            <View style={styles.sign_box}>
                                <Text style={styles.sign_box_text}>חתימת נושא התעודה</Text> 
                            </View>
                        </View>

                       <View style={styles.sign_box_cont_b}>
                            <Text style={styles.title_text_s_r_bottom}>{cert_data.cert_start}</Text>
                            <View style={styles.sign_box}>
                            <Text style={styles.sign_box_text}>תאריך מסירה</Text> 
                            </View>
                        </View>
                    </View>

                    
                    <View style={styles.checkbox_line}>
                        <Image src={dot_p} style={styles.dot_p}/>
                        <Text style={styles.title_text_s_r_s}>תעודה זו תודפס בשני עותקים: מקור למורשה נושא כלי הירייה ועותק בתיק המורשה בארגון.</Text>
                    </View>

                </View>

            </View>

    </Page>
  </Document>
);


  return (
    <>
    <div className='cert_cont_main'>
        <div className='cert_cont_main_in'>
            <img src={close} onClick={()=>props.set_show_certificate_of_authorization_3(false)} className='close_icon'/>
            <div className='cert_header'>
                <img src={comp_img} className=''/>    
                <div className='user_b_text_cont'>
                    <div className='user_b_text_main_r'>הפקת תעודת הרשאה לנשק</div>
                    <div className='user_b_text_submain'>
                    לנשיאת כלי ירייה — ארגון שמירה לפי סעיף 10ג' לחוק כלי הירייה, תש"ט - 1949
                    
                    </div>
                </div>    

            </div>

            <img src={cert_4} className='cert_1'/>



            <div className='cert_info_cont_4'>

                <img src={more_icon} className='w_more_icon'/>
                <img src={p_details_1} className='p_details_1'/>
                <div className='p_details_title'>חתימה על מסמכי חובה</div>

                <div className='cert_sign_box'>
                    <div className='cert_sign_box_title_cont'>
                        {trimmedDataURL_1 && trimmedDataURL_2?<div className='check_done'><img src={check} />
                        <div className='cert_sign_box_title'>ראיון אישי</div></div>:
                        <>
                        <div className='cert_sign_box_title'>ראיון אישי</div>
                        <div className='cert_sign_box_subtitle'>ממתין ל-{trimmedDataURL_1==null && trimmedDataURL_2==null?2:trimmedDataURL_1==null || trimmedDataURL_2==null?1:0} חתימות</div></>}
                    </div>

                    <div>
                        <div className='details_cont_b details_cont_b_cont' onClick={()=>set_sign_popup_1(!sign_popup_1)}>{trimmedDataURL_1?<img src={trimmedDataURL_1} className='sign_1_img' alt="signature" />:<></>}</div> 
                        {sign_1_date_time?<div className='sign_date_time'>{sign_1_date_time.split(' ')[1]+ '|'+sign_1_date_time.split(' ')[0] }</div>:""}
                        <div className='cert_input_sign_text'>חתימת בעל הרישיון המיוחד</div>
                    </div>

                    <div>
                        <div className='details_cont_b details_cont_b_cont' onClick={()=>set_sign_popup_2(!sign_popup_2)}>{trimmedDataURL_2?<img src={trimmedDataURL_2} className='sign_1_img' alt="signature" />:<></>}</div> 
                        {sign_2_date_time?<div className='sign_date_time'>{sign_2_date_time.split(' ')[1]+ '|'+sign_2_date_time.split(' ')[0] }</div>:""}

                        <div className='cert_input_sign_text'>חתימת העובד</div>
                    </div>

                </div>

                  <div className='cert_sign_box'>
                    <div className='cert_sign_box_title_cont'>
                    
                        {trimmedDataURL_3 && trimmedDataURL_4?<div className='check_done'><img src={check} />
                        <div className='cert_sign_box_title'>תדריך בטיחות</div></div>:
                        <>
                        <div className='cert_sign_box_title'>תדריך בטיחות</div>
                        <div className='cert_sign_box_subtitle'>ממתין ל-{trimmedDataURL_3==null && trimmedDataURL_4==null?2:trimmedDataURL_3==null || trimmedDataURL_4==null?1:0} חתימות</div></>}
                    </div>

                    <div>
                        <div className='details_cont_b details_cont_b_cont' onClick={()=>set_sign_popup_3(!sign_popup_3)}>{trimmedDataURL_3?<img src={trimmedDataURL_3} className='sign_1_img' alt="signature" />:<></>}</div> 
                        {sign_3_date_time?<div className='sign_date_time'>{sign_3_date_time.split(' ')[1]+ '|'+sign_3_date_time.split(' ')[0] }</div>:""}

                        <div className='cert_input_sign_text'>חתימת בעל הרישיון המיוחד</div>
                    </div>

                    <div>
                        <div className='details_cont_b details_cont_b_cont' onClick={()=>set_sign_popup_4(!sign_popup_4)}>{trimmedDataURL_4?<img src={trimmedDataURL_4} className='sign_1_img' alt="signature" />:<></>}</div> 
                        {sign_4_date_time?<div className='sign_date_time'>{sign_4_date_time.split(' ')[1]+ '|'+sign_4_date_time.split(' ')[0] }</div>:""}

                        <div className='cert_input_sign_text'>חתימת העובד</div>
                    </div>

                </div>


                  <div className='cert_sign_box'>
                    <div className='cert_sign_box_title_cont'>
                       
                        {trimmedDataURL_5 && trimmedDataURL_6?<div className='check_done'><img src={check} />
                        <div className='cert_sign_box_title'>התחייבות התקנת כספת</div></div>:
                        <>
                        <div className='cert_sign_box_title'>התחייבות התקנת כספת</div>
                        <div className='cert_sign_box_subtitle'>ממתין ל-{trimmedDataURL_5==null && trimmedDataURL_6==null?2:trimmedDataURL_5==null || trimmedDataURL_6==null?1:0} חתימות</div></>}
                    </div>

                    <div>
                        <div className='details_cont_b details_cont_b_cont' onClick={()=>set_sign_popup_5(!sign_popup_5)}>{trimmedDataURL_5?<img src={trimmedDataURL_5} className='sign_1_img' alt="signature" />:<></>}</div> 
                        {sign_5_date_time?<div className='sign_date_time'>{sign_5_date_time.split(' ')[1]+ '|'+sign_5_date_time.split(' ')[0] }</div>:""}

                        <div className='cert_input_sign_text'>חתימת בעל הרישיון המיוחד</div>
                    </div>

                    <div>
                        <div className='details_cont_b details_cont_b_cont' onClick={()=>set_sign_popup_6(!sign_popup_6)}>{trimmedDataURL_6?<img src={trimmedDataURL_6} className='sign_1_img' alt="signature" />:<></>}</div> 
                        {sign_6_date_time?<div className='sign_date_time'>{sign_6_date_time.split(' ')[1]+ '|'+sign_6_date_time.split(' ')[0] }</div>:""}

                        <div className='cert_input_sign_text'>חתימת העובד</div>
                    </div>

                </div>



                  <div className='cert_sign_box'>
                    <div className='cert_sign_box_title_cont'>
                       
                        {trimmedDataURL_7 && trimmedDataURL_8?<div className='check_done'><img src={check} />
                        <div className='cert_sign_box_title'>חתימה על תעודת ההרשאה</div></div>:
                        <>
                        <div className='cert_sign_box_title'>חתימה על תעודת ההרשאה</div>
                        <div className='cert_sign_box_subtitle'>ממתין ל-{trimmedDataURL_7==null && trimmedDataURL_7==null?2:trimmedDataURL_8==null || trimmedDataURL_8==null?1:0} חתימות</div></>}
                    </div>

                    <div>
                        <div className='details_cont_b details_cont_b_cont' onClick={()=>set_sign_popup_7(!sign_popup_7)}>{trimmedDataURL_7?<img src={trimmedDataURL_7} className='sign_1_img' alt="signature" />:<></>}</div> 
                        {sign_7_date_time?<div className='sign_date_time'>{sign_7_date_time.split(' ')[1]+ '|'+sign_7_date_time.split(' ')[0] }</div>:""}

                        <div className='cert_input_sign_text'>חתימת בעל הרישיון המיוחד</div>
                    </div>

                    <div>
                        <div className='details_cont_b details_cont_b_cont' onClick={()=>set_sign_popup_8(!sign_popup_8)}>{trimmedDataURL_8?<img src={trimmedDataURL_8} className='sign_1_img' alt="signature" />:<></>}</div> 
                        {sign_8_date_time?<div className='sign_date_time'>{sign_8_date_time.split(' ')[1]+ '|'+sign_8_date_time.split(' ')[0] }</div>:""}

                        <div className='cert_input_sign_text'>חתימת העובד</div>
                    </div>

                </div>


                {sign_popup_3?<div className='sign_popup_cont sign_popup_cont_cert'>
                    <div onClick={()=>clear_3()} className='edit_sign_btn'>עריכת החתימה</div>

                    <SignatureCanvas ref={sigCanvas_3} penColor="#808080"/>
                    <div className='save_sign_cont'>
                        <img src={trash_w} onClick={()=>clear_3()} />
                        <div className='auto_sign'>חתימה אוטומטית</div>
                        <div className='save_sign'  onClick={()=>trim_3()}>שמור</div>
                    </div>
                </div>:<></>}


                {sign_popup_2?<div className='sign_popup_cont sign_popup_cont_2 sign_popup_cont_cert'>
                      <div onClick={()=>clear_2()} className='edit_sign_btn'>עריכת החתימה</div>

                    <SignatureCanvas ref={sigCanvas_2} penColor="#808080"/>
                    <div className='save_sign_cont'>
                        <img src={trash_w} onClick={()=>clear_2()} />
                        <div className='auto_sign'>חתימה אוטומטית</div>
                        <div className='save_sign' onClick={()=>trim_2()}>שמור</div>

                    </div>
                </div>:<></>}


                {sign_popup_1?<div className='sign_popup_cont sign_popup_cont_1 sign_popup_cont_cert'>

                    <div onClick={()=>clear()} className='edit_sign_btn'>עריכת החתימה</div>

                    <SignatureCanvas ref={sigCanvas} penColor="#808080"/>

                    <div className='save_sign_cont'>
                        <img src={trash_w} onClick={()=>clear()} className='trash_w'/>
                        <div className='auto_sign'>חתימה אוטומטית</div>
                        <div className='save_sign' onClick={()=>trim()}>שמור</div>

                    </div>

                </div>:<></>}



                {sign_popup_4?<div className='sign_popup_cont sign_popup_cont_1 sign_popup_cont_cert'>

                    <div onClick={()=>clear_4()} className='edit_sign_btn'>עריכת החתימה</div>

                    <SignatureCanvas ref={sigCanvas_4} penColor="#808080"/>

                    <div className='save_sign_cont'>
                        <img src={trash_w} onClick={()=>clear_4()} className='trash_w'/>
                        <div className='auto_sign'>חתימה אוטומטית</div>
                        <div className='save_sign' onClick={()=>trim_4()}>שמור</div>

                    </div>

                </div>:<></>}
                

                {sign_popup_5?<div className='sign_popup_cont sign_popup_cont_1 sign_popup_cont_cert'>

                    <div onClick={()=>clear_5()} className='edit_sign_btn'>עריכת החתימה</div>

                    <SignatureCanvas ref={sigCanvas_5} penColor="#808080"/>

                    <div className='save_sign_cont'>
                        <img src={trash_w} onClick={()=>clear_5()} className='trash_w'/>
                        <div className='auto_sign'>חתימה אוטומטית</div>
                        <div className='save_sign' onClick={()=>trim_5()}>שמור</div>

                    </div>

                </div>:<></>}



                {sign_popup_6?<div className='sign_popup_cont sign_popup_cont_1 sign_popup_cont_cert'>

                    <div onClick={()=>clear_6()} className='edit_sign_btn'>עריכת החתימה</div>

                    <SignatureCanvas ref={sigCanvas_6} penColor="#808080"/>

                    <div className='save_sign_cont'>
                        <img src={trash_w} onClick={()=>clear_6()} className='trash_w'/>
                        <div className='auto_sign'>חתימה אוטומטית</div>
                        <div className='save_sign' onClick={()=>trim_6()}>שמור</div>

                    </div>

                </div>:<></>}


                {sign_popup_7?<div className='sign_popup_cont sign_popup_cont_1 sign_popup_cont_cert'>

                    <div onClick={()=>clear_7()} className='edit_sign_btn'>עריכת החתימה</div>

                    <SignatureCanvas ref={sigCanvas_7} penColor="#808080"/>

                    <div className='save_sign_cont'>
                        <img src={trash_w} onClick={()=>clear_7()} className='trash_w'/>
                        <div className='auto_sign'>חתימה אוטומטית</div>
                        <div className='save_sign' onClick={()=>trim_7()}>שמור</div>

                    </div>

                </div>:<></>}


                {sign_popup_8?<div className='sign_popup_cont sign_popup_cont_1 sign_popup_cont_cert'>

                    <div onClick={()=>clear_8()} className='edit_sign_btn'>עריכת החתימה</div>

                    <SignatureCanvas ref={sigCanvas_8} penColor="#808080" />

                    <div className='save_sign_cont'>
                        <img src={trash_w} onClick={()=>clear_8()} className='trash_w'/>
                        <div className='auto_sign'>חתימה אוטומטית</div>
                        <div className='save_sign' onClick={()=>trim_8()}>שמור</div>

                    </div>

                </div>:<></>}
            </div> 
       
            <div className='cancel_cert_btn_cont cancel_cert_btn_cont_3'>
                <div className="cancel_cert_btn" onClick={()=>{props.set_show_certificate_of_authorization_2(true);props.set_show_certificate_of_authorization_3(false)}}>חזור</div>
                <div className="next_cert_btn next_cert_btn_preview"   onClick={()=>{next_page_1()}} >תצוגה מקדימה</div>
                {/* <PDFDownloadLink document={<MyDocument />} fileName={"certification.pdf"}>
                <div className="next_cert_btn" >vpe</div>
                    
                </PDFDownloadLink> */}

                <div className="next_cert_btn" onClick={()=>{next_page()}}>הפקת תעודה</div> 
            </div>
            {err_msg?<div className='err_msg'>{err_msg}</div>:<></>}

        </div>
        
    </div>

    {show_preview_cert?<div className='preview_cert_cont'>
        <img src={close} className='close_icon' onClick={()=>set_show_preview_cert(false)}/>

        {/* <div className='print_cert_btn_cont'>
            <PDFDownloadLink document={<MyDocument />} fileName={"certification.pdf"}>
                <div className="download_cert_btn" >הורד מסמך</div>        
            </PDFDownloadLink>

            <div className="print_cert_btn" >הדפסה</div>
        </div> */}

        <PDFViewer className="PDFViewer_cont">
            <MyDocument />
        </PDFViewer>

    </div>:<></>}
    </>
  )
}

export default Certificate_authorization_3