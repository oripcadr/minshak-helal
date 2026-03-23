import './Settings.css'
import RightMenu from './RightMenu'
import pencil_eq from './assets/pencil_eq.png'

import upload from './assets/upload.png'
import arrow_s_left from './assets/arrow_s_left.png'
import { useEffect, useRef, useState } from 'react'
import filter from './assets/filter.png'
import user_s_1 from './assets/user_s_1.png'
import more_w from './assets/more_w.png'
import add_icon from './assets/add_icon.png'
import site_bg from './assets/site_bg.png'
import user_m_1 from './assets/user_m_1.png'
import n_1 from './assets/n_1.png'
import n_2 from './assets/n_2.png'
import axios from 'axios'
import New_user from './New_user'
import pencil from './assets/pencil.png'
import trash_s from './assets/trash_s.png'
import Edit_user from './Edit_user'
import close from './assets/close.png'
import trash_w from './assets/trash_w.png'
// import Popup_new_tachmoshet from './Popup_new_tachmoshet'
// import Popup_purchase from './Popup_purchase'

function Settings() {

    // const [open_popup_new_tachmoshet, set_open_popup_new_tachmoshet] = useState(false);
     const [settings_tab, set_settings_tab] = useState(1);
     const [users, set_users] = useState([]);
     const [users_original, set_users_original] = useState([]);

     const [selected_role, set_selected_role] = useState<any>('all');
     const [email, set_email] = useState('');
     const [site_name, set_site_name] = useState('');
     const [site_type, set_site_type] = useState('');
     const [site_address, set_site_address] = useState('');
     const [site_contact_person, set_site_contact_person] = useState('');
     const [site_phone, set_site_phone] = useState('');
     const [sites, set_sites] = useState([]);
    // const [sites_original, set_sites_original] = useState([]);
     const [edit_site, set_edit_site] = useState(false);
     const [site_id, set_site_id] = useState('');
     const [delete_site, set_delete_site] = useState('');

     const [company_name, set_company_name] = useState('');
     const [phone, set_phone] = useState('');
     const [phone_1, set_phone_1] = useState('');
     const [email_company, set_email_company] = useState('');
     const [company_id, set_company_id] = useState('');

     const [logo_path, set_logo_path] = useState('');
     const [logo_img, set_logo_img] = useState('');

     const [language, set_language] = useState('');
     const [time_zone, set_time_zone] = useState('');
     const [start_time, set_start_time] = useState('');
     const [end_time, set_end_time] = useState('');
     const [system_id, set_system_id] = useState('');
     const [show_add_user_popup, set_show_add_user_popup] = useState(false);
     const [show_more_options, set_show_more_options] = useState<any>('');

     const [show_edit_user_popup, set_show_edit_user_popup] = useState(false);
     const [delete_user_popup, set_delete_user_popup] = useState<any>(false);

     const [show_new_neshek_model, set_show_new_neshek_model] = useState(false);
     const [edit_kaliber, set_edit_kaliber] = useState(false);
     const [edit_neshek_type, set_edit_neshek_type] = useState(false);
     

     const [new_kaliber, set_new_kaliber] = useState('');
     const [new_neshek_type, set_new_neshek_type] = useState('');
     
     const [all_kalibers, set_all_kalibers] = useState([]);
     const [del_kaliber_popup, set_del_kaliber_popup] = useState<any>(false);
     
     const [all_neshek_types, set_all_neshek_types] = useState([]);
     const [del_neshek_type_popup, set_del_neshek_type_popup] = useState<any>(false);

     const [creator, set_creator] = useState('');
     const [model, set_model] = useState('');
     const [selected_kaliber, set_selected_kaliber] = useState('');
     const [creators_models, set_creators_models] = useState([]);
     
     const [show_more_options_creator_model, set_show_more_options_creator_model] = useState<any>(false);
     const [show_edit_creator_model_popup, set_show_edit_creator_model_popup] = useState<any>(false);
     const [delete_creator_model_popup, set_delete_creator_model_popup] = useState<any>(false);
     const [fake, set_fake] = useState<any>(false);

     const [sent_auto, set_sent_auto] = useState<any>(false);
     const [tachmoshet_num, set_tachmoshet_num] = useState<any>('');   
     const [role_permissions, set_role_permissions] = useState([]);

     const [role_name, set_role_name] = useState<any>(false);
     const [del_role_popup, set_del_role_popup] = useState<any>(false);

     const [status_filter, set_status_filter] = useState<any>([]);

     const [edit_role, set_edit_role] = useState<any>('');

     const [roles, set_roles] = useState<any>([]);
   //  const [roles_original, set_roles_original] = useState<any>([]);

     const [role_name_val, set_role_name_val] = useState<any>('');

     const [show_filter_options, set_show_filter_options] = useState<any>(false);

    const inputElement:any = useRef('');
    const focusInput = () => {
        inputElement.current.click();
    };
           

    useEffect(() => {
        get_rols();
    }, []);

    function get_rols(){
        let payload = new FormData();
               
        axios({
            method: 'post',
            url: globalThis.app.current+'/get_roles',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(res => {
           set_roles(res.data.recordset);
        //   set_roles_original(res.data.recordset)
        }); 
    }

    function delete_role_func(){
        let payload = new FormData();
        payload.append("id", del_role_popup)
               
        axios({
            method: 'post',
            url: globalThis.app.current+'/delete_role',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
           get_rols();
        }); 

    }

    function edit_kaliber_func(id:any){
        let payload = new FormData();

        payload.append("name", new_kaliber);
          payload.append("id", id);
        
        axios({
            method: 'post',
            url: globalThis.app.current+'/update_new_kaliber',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
            get_all_kalibers();
            set_new_kaliber('');
            set_edit_kaliber(false);
        });
    }

    function add_role(){
        let payload = new FormData();
        payload.append("role_name", role_name_val)
               
        axios({
            method: 'post',
            url: globalThis.app.current+'/add_role',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
           get_rols();
           set_role_name_val('');
        }); 
    }

    function edit_role_func(){
        let payload = new FormData();
        payload.append("role_name", role_name_val)
        payload.append("id", edit_role)
               
        axios({
            method: 'post',
            url: globalThis.app.current+'/edit_role',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
           get_rols();
           set_role_name_val('');
           set_edit_role('');
        }); 
    }


    function get_role_permissions(val:any){

        let id='';

        for(let i=0; i<roles.length; i++){
            if(val==roles[i].role_name || roles[i].id==val){
                id=roles[i].id
            }
        }

        let payload = new FormData();
        payload.append("id",id);

        axios({
            method: 'post',
            url: globalThis.app.current+'/get_role_permissions',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(res => {
           set_role_permissions(res.data.recordset);
        }); 

    }
    

    function delete_user(){

        let payload = new FormData();
        
        payload.append("id", delete_user_popup);
       
        axios({
            method: 'post',
            url: globalThis.app.current+'/delete_user',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
           get_all_users();
           set_delete_user_popup(false);
           set_show_more_options('')
        });
    }

    async function upload_file_func(files:any){

        if (files[0] && files[0]) {

            let payload = new FormData();

            payload.append("file", files[0]);
            
            await axios({
                method: 'post',
                url: globalThis.app.current+'/upload_file',
                data: payload,
                headers: { "Content-Type": "multipart/form-data" },
            }).then(async res => {
                set_logo_path(res.data.fileName);
                
            });

        }
    }

     function save_new_site(){
        let payload = new FormData();
        
        payload.append("site_name", site_name);
        payload.append("type", site_type);
        payload.append("address", site_address);
        payload.append("contact_person", site_contact_person);
        payload.append("phone", site_phone);
        payload.append("email", email);

        axios({
            method: 'post',
            url: globalThis.app.current+'/save_new_site',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
           get_all_sites();
           clear_site_fields();
        });
  
     }

     function update_site(){
            let payload = new FormData();
        
        payload.append("site_name", site_name);
        payload.append("type", site_type);
        payload.append("address", site_address);
        payload.append("contact_person", site_contact_person);
        payload.append("phone", site_phone);
        payload.append("email", email);
         payload.append("id", site_id);

        axios({
            method: 'post',
            url: globalThis.app.current+'/update_site',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
           get_all_sites();
           clear_site_fields();
           set_edit_site(false);

        });
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

     function clear_site_fields(){
        set_site_name('');
        set_site_type('');
        set_site_address('');
        set_site_contact_person('');
        set_site_phone('');
        set_email('');

     }
   
    useEffect(() => {
        get_all_users();
        get_all_sites();
        get_company();
        get_system();
        get_all_kalibers();
        get_all_neshek_types();
        get_creators_models();
        get_alert_tachmoshet();
       // get_role_permissions();
    }, []);

 

    function get_all_users(){

      let payload = new FormData();
    
      axios({
        method: 'post',
        url: globalThis.app.current+'/get_all_users',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(res => {

        if (res.data.recordset.length>0){
           set_users(res.data.recordset);
           set_users_original(res.data.recordset);
        } 
          
      });

    }

    function get_alert_tachmoshet(){
            let payload = new FormData();
    
      axios({
        method: 'post',
        url: globalThis.app.current+'/get_alert_tachmoshet',
        data: payload,
        headers: { "Content-Type": "multipart/form-data" }, 
      }).then(res => {

        if (res.data.recordset.length>0){
           set_tachmoshet_num(res.data.recordset[0].tachmoshet_num);
           set_sent_auto(res.data.recordset[0].send_auto);
        } 
          
      });
    }

    function delete_site_func(){
        let payload = new FormData();

        payload.append("id", delete_site);
        
        axios({
            method: 'post',
            url: globalThis.app.current+'/delete_site',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
            get_all_sites()
        });
    }

    function add_new_creator_model_func(){
        let payload = new FormData();

        payload.append("creator", creator);
        payload.append("model", model);
        payload.append("kaliber", selected_kaliber);
        
        axios({
            method: 'post',
            url: globalThis.app.current+'/add_new_creator_model',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
            get_creators_models();
            set_show_new_neshek_model(false);
        });
    }

    function get_creators_models(){
         let payload = new FormData();

        axios({
            method: 'post',
            url: globalThis.app.current+'/get_creators_models',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(res => {
            set_creators_models(res.data.recordset)
        });
    }

    function add_new_kaliber(){
        let payload = new FormData();

        payload.append("name", new_kaliber);
        
        axios({
            method: 'post',
            url: globalThis.app.current+'/add_new_kaliber',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
            get_all_kalibers();
            set_new_kaliber('');
        });
    }

     function add_new_neshek_type(){
        let payload = new FormData();

        payload.append("name", new_neshek_type);
        
        axios({
            method: 'post',
            url: globalThis.app.current+'/add_new_neshek_type',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
            get_all_neshek_types();
            set_new_neshek_type('');
        });
    }

    function edit_neshek_type_func(id:any){
        let payload = new FormData();

        payload.append("name", new_neshek_type);
        payload.append("id", id);
        
        axios({
            method: 'post',
            url: globalThis.app.current+'/edit_new_neshek_type',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
            get_all_neshek_types();
            set_new_neshek_type('');
            set_edit_neshek_type(false);
        });
    }
    function get_all_kalibers(){
        let payload = new FormData();

        axios({
            method: 'post',
            url: globalThis.app.current+'/get_all_kalibers',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(res => {
            set_all_kalibers(res.data.recordset);
        });
    }

    function get_all_neshek_types(){
        let payload = new FormData();

        axios({
            method: 'post',
            url: globalThis.app.current+'/get_all_neshek_types',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(res => {
            set_all_neshek_types(res.data.recordset);
        });
    }

    function delete_kaliber_func(){
        let payload = new FormData();

        payload.append("id", del_kaliber_popup)

        axios({
            method: 'post',
            url: globalThis.app.current+'/delete_kaliber',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
            get_all_kalibers();
        });
    }

    function delete_neshek_type_func(){
        let payload = new FormData();

        payload.append("id", del_neshek_type_popup)

        axios({
            method: 'post',
            url: globalThis.app.current+'/delete_neshek_type',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
            get_all_neshek_types();
        });
    }

    function delete_creator_model(){
        let payload = new FormData();

        payload.append("id", show_more_options_creator_model)

        axios({
            method: 'post',
            url: globalThis.app.current+'/delete_creator_model',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
            get_creators_models();
        });
    }

    function set_edit_site_func(site:any){
        set_edit_site(true);

        set_site_name(site.site_name);
        set_site_type(site.type);
        set_site_address(site.address);
        set_site_contact_person(site.contact_person);
        set_site_phone(site.phone);
        set_email(site.email);
        set_site_id(site.id);
    }

    function save_company_func(){
        let payload = new FormData();

        payload.append("company_name", company_name);
        payload.append("phone", phone);
        payload.append("phone_1", phone_1);
        payload.append("email", email_company);

        payload.append("logo_path", logo_path);
        
        if (company_id!=''){
            axios({
                method: 'post',
                url: globalThis.app.current+'/update_company',
                data: payload,
                headers: { "Content-Type": "multipart/form-data" }, 
            }).then(() => {
                get_company();
                set_logo_path('')
            });
        } else {
            axios({
                method: 'post',
                url: globalThis.app.current+'/save_company',
                data: payload,
                headers: { "Content-Type": "multipart/form-data" }, 
            }).then(() => {
                get_company();
                set_logo_path('')
            });
        }
    }

    function save_system_settings(){
        let payload = new FormData();

        payload.append("language", language);
        payload.append("time_zone", time_zone);
        payload.append("start_time", start_time);
        payload.append("end_time", end_time);
    
        debugger;
        if (system_id!=''){
            axios({
                method: 'post',
                url: globalThis.app.current+'/update_system',
                data: payload,
                headers: { "Content-Type": "multipart/form-data" }, 
            }).then(() => {
                get_system();
            });
        } else {
            axios({
                method: 'post',
                url: globalThis.app.current+'/save_system',
                data: payload,
                headers: { "Content-Type": "multipart/form-data" }, 
            }).then(() => {
                get_system();
            });
        }
    }

    function get_company(){
        
        let payload = new FormData();

        payload.append("id", '1');
        
        axios({
            method: 'post',
            url: globalThis.app.current+'/get_company',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(res => {
            set_company_name(res.data.recordset[0].company_name);
            set_phone(res.data.recordset[0].phone);
            set_phone_1(res.data.recordset[0].phone_1);

            set_email_company(res.data.recordset[0].email);
            set_logo_img(res.data.recordset[0].logo_path);
            set_company_id(res.data.recordset[0].id);
        });

    }

    function get_system(){

        let payload = new FormData();

        payload.append("id", '1');

        axios({
            method: 'post',
            url: globalThis.app.current+'/get_system',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(res => {
            set_language(res.data.recordset[0].language);
            set_time_zone(res.data.recordset[0].time_zone);
    
            set_start_time(res.data.recordset[0].start_time.split('T')[1].split('.')[0]);
            set_end_time(res.data.recordset[0].end_time.split('T')[1].split('.')[0]);
            set_system_id(res.data.recordset[0].id);
        });
    }

    function set_edit_creator_model(val:any, type:any){
        let t=show_edit_creator_model_popup;
        if(type=='model'){
            t.model=val;
        }
        if(type=='creator'){
            t.creator=val;
        }
        if(type=='kaliber'){
            t.kaliber=val;
        }
        set_show_edit_creator_model_popup(t);
        set_fake(!fake);
    }

    function update_creator_model_func(){
        
        let payload = new FormData();

        payload.append("id", show_edit_creator_model_popup.id);
        payload.append("creator", show_edit_creator_model_popup.creator);
        payload.append("model", show_edit_creator_model_popup.model);
        payload.append("kaliber", show_edit_creator_model_popup.kaliber);

        axios({
            method: 'post',
            url: globalThis.app.current+'/update_creator_model',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
            set_show_edit_creator_model_popup('');
            set_show_more_options_creator_model('')
        })
    }

    function update_alert_tachmoshet(type:any){
        
        let payload = new FormData();

        payload.append("tachmoshet_num", tachmoshet_num);
        if(type=='sent_auto'){
            let t:any=!sent_auto; 
            payload.append("send_auto", t); 
        }else{
             payload.append("send_auto", sent_auto); 
        }
     

        axios({
            method: 'post',
            url: globalThis.app.current+'/update_alert_tachmoshet',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
  
        })
    }

    function set_role_permission_func(val:any, id:any, type:any, role_id:any){
        let payload = new FormData();
        let val_s=''
        if(val=="true"){
            val_s="false";
        } else {
            val_s="true";
        }

        payload.append("id", id);
        
        if(type=='view_opt'){
          payload.append("view_opt", val_s);   
        }
          if(type=='edit_opt'){
          payload.append("edit_opt", val_s);   
        }

        if(type=='delete_opt'){
          payload.append("delete_opt", val_s);   
        }

        payload.append("role_name", role_name);   

        payload.append("type", type);   
        debugger;
        
        axios({
            method: 'post',
            url: globalThis.app.current+'/set_role_permission',
            data: payload,
            headers: { "Content-Type": "multipart/form-data" }, 
        }).then(() => {
            get_role_permissions(role_id);
        })

    }

     function filter_by_role(val:any){
        let a:any=users_original;
        let final:any =[];

        for(let i=0; i<a.length; i++){
            if(a[i].role_name==val){
                final.push(a[i]);
            }
        }

        if(val=='all'){
            final=a;
        }

        set_users(final);
        set_fake(!fake);
    }


    function find_user(val:any){
        let a:any=users_original;
        let final:any =[];

        for(let i=0; i<a.length; i++){
            if(a[i].firstname.includes(val)){
                final.push(a[i]);
            } else if(a[i].lastname.includes(val)){
                final.push(a[i]);
            } else if(a[i].tz.includes(val)){
                final.push(a[i]);
            }

        }

        set_users(final);
        set_fake(!fake);

    }

    function filter_by_gender(rol:any,checked:any){
      let a:any=users_original;
       let rol_f=status_filter;
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
                if(a[i].gender==rol_f[j]){
                    final.push(a[i]);
                } 
            }
        }

        set_status_filter(rol_f);
        set_users(final);
        set_fake(!fake);
    }

    return (
    <>
        <div className='dashboard_main_cont'>

            <RightMenu title="settings"></RightMenu>

            <div className='top_header'>
{/* 
                <div className='user_cont'>
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

            <input type="text" placeholder='חיפוש הגדרות' className='search_settings_input'/>

            <div className='top_btns_cont top_btns_cont_settings'>
                <div className={'top_btn ' + (settings_tab==1?"top_btn_selected":"")} onClick={()=>set_settings_tab(1)}>הגדרות כלליות</div>

                <div className={'top_btn ' + (settings_tab==2?"top_btn_selected":"")} onClick={()=>set_settings_tab(2)}>משתמשים והרשאות</div>
                <div className={'top_btn ' + (settings_tab==3?"top_btn_selected":"")} onClick={()=>set_settings_tab(3)}>אתרים וסניפים</div>
                <div className={'top_btn ' + (settings_tab==4?"top_btn_selected":"")} onClick={()=>set_settings_tab(4)}>נשקים ותחמושת</div>
                <div className={'top_btn ' + (settings_tab==5?"top_btn_selected":"")} onClick={()=>set_settings_tab(5)}>אפליקציית שטח</div>
                <div className={'top_btn ' + (settings_tab==6?"top_btn_selected":"")} onClick={()=>set_settings_tab(6)}>מסמכים ותבניות</div>
                <div className={'top_btn ' + (settings_tab==7?"top_btn_selected":"")} onClick={()=>set_settings_tab(7)}>התראות</div>
                <div className={'top_btn ' + (settings_tab==8?"top_btn_selected":"")} onClick={()=>set_settings_tab(8)}>אבטחה</div>
                <div className={'top_btn ' + (settings_tab==9?"top_btn_selected":"")} onClick={()=>set_settings_tab(9)}>אינטגרציות</div>

            </div>


            {settings_tab==1?
            <div className='settings_box_cont_main'>
                <div className='settings_box_cont'>
                    <div className='settings_box_title'>חברה</div>
                    <div className='settings_box_line_cont'>
                        <div className='settings_box_title_in'>שם החברה</div>
                        <input className='settings_box_input' type="text" placeholder='חברת האבטחה המובילה בע״מ' value={company_name} onChange={(e)=>set_company_name(e.target.value)} />
                    </div>    
                    
                    <div className='settings_box_line_cont'>
                        <div className='settings_box_title_in'>טלפון</div>
                        <input className='settings_box_input' type="text" placeholder='052-1234567' value={phone} onChange={(e)=>set_phone(e.target.value)} />
                    </div>  

                    <div className='settings_box_line_cont'>
                        <div className='settings_box_title_in'>טלפון נוסף</div>
                        <input className='settings_box_input' type="text" placeholder='052-1234567' value={phone_1} onChange={(e)=>set_phone_1(e.target.value)}/>
                    </div>  

                    <div className='settings_box_line_cont'>
                        <div className='settings_box_title_in'>דוא"ל</div>
                        <input className='settings_box_input' type="text" placeholder='yossi@security.co.il' value={email_company} onChange={(e)=>set_email_company(e.target.value)}/>
                    </div>  

                    <div className='settings_box_line_cont'>
                        <div className='settings_box_title_in'>לוגו</div>
                        
                        <div className='upload_logo_cont'  onClick={focusInput}>
                            {logo_img?<img src={ globalThis.app.current+'/'+logo_img} className='logo_img'/>:<>
                            <img src={upload} className='upload_icon_settings'/>
                            <div className='upload_logo_text'>גרור קבצים לכאן או לחץ להעלאה</div></>}
                            <input type="file" onChange={(e)=>upload_file_func(e.target.files)} ref={inputElement} className='file_input' />
                        {logo_path?<div className='logo_path_text'>{logo_path}</div>:<></>}
                        </div>

                    </div>

                    <div className='save_settings_btn' onClick={()=>save_company_func()}>שמור הגדרות</div>

                </div>

                <div className='settings_box_cont'>
                    <div className='settings_box_title'>מערכת</div>

                    <div className='settings_box_line_cont'>
                        <div className='settings_box_title_in'>שפת מערכת</div>
                        <select className='settings_box_input' value={language} onChange={(e)=>set_language(e.target.value)}>
                             <option>
                                בחר שפה
                            </option>
                            <option>
                                עברית
                            </option>
                            <option>
                               عربيت
                            </option>
                            <option>
                                English
                            </option>
                            <option>
                                Русский
                            </option>

                        </select>
                    </div>    
                    
                    <div className='settings_box_line_cont'>
                        <div className='settings_box_title_in'>איזור זמן</div>
                       <select className='settings_box_input' value={time_zone} onChange={(e)=>set_time_zone(e.target.value)}>
                            <option>
                               בחר איזור זמן
                            </option>
                            <option>
                                ירושלים (GMT+2)
                            </option>

                        </select>
                    </div>  

                    <div className='settings_box_line_cont'>
                        <div className='settings_box_title_in'>שעות פעילות</div>
                        <input className='settings_box_input settings_box_input_s' type="text" placeholder='08:00' value={start_time} onChange={(e)=>set_start_time(e.target.value)}/>
                        <img src={arrow_s_left} className='arrow_s_left'/>
                        <input className='settings_box_input settings_box_input_s' type="text" placeholder='18:00' value={end_time} onChange={(e)=>set_end_time(e.target.value)}/>
                    </div>  



                    <div className='save_settings_btn save_settings_btn_2' onClick={()=>save_system_settings()}>שמור הגדרות</div>

                </div>
            </div>:<></>}


            {settings_tab==2?
            <div className='settings_box_cont_main'>
                <div>
                    <div className='settings_box_cont settings_box_cont_l'>
                        <div className='settings_box_title'>משתמשי המערכת</div>

                            <div className='btn_exp_cont'>
                                <div className='add_new_btn_user' onClick={()=>set_show_add_user_popup(true)}>הוספת משתמש</div> 
                                <input type="text" placeholder='חיפוש עובד לפי שם, ת.ז' className='btn_exp_cont_input search_input_s' onChange={(e)=>find_user(e.target.value)}/>
                                <div className='select_period' onClick={()=>set_show_filter_options(!show_filter_options)}>סינון

                                    <img src={filter} className='filter_icon' />
                                </div>
                                <div className='export_btn'>ייצוא</div>
                            </div>



                    {show_filter_options? <div className='filter_options_cont'>
                       
                        <div className='filter_options_cont_title'>מין</div>
                        <div className='filter_checkbox_row'>
                        <input type="checkbox"  onClick={(e:any)=>filter_by_gender('זכר', e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>זכר</div>
                        </div>
                        <div className='filter_checkbox_row'>
                            <input type="checkbox"  onClick={(e:any)=>filter_by_gender('נקבה', e.target.checked)}/>
                            <div className='filter_options_cont_subtitle'>נקבה</div>
                        </div>
                        
                    </div>:<></>}

                            <div className='top_btns_cont'>
                                <div className={'top_btn '+(selected_role=='all'?"top_btn_selected":"")} onClick={()=>{set_selected_role('all');filter_by_role('all')}} >כל התפקידים</div>
                                {roles && roles.map((rol:any, index:any) => (
                                     <div className={'top_btn '+(selected_role==index?"top_btn_selected":"")} onClick={()=>{set_selected_role(index);filter_by_role(rol.role_name)}}>{rol.role_name}</div>
                                ))}
{/* 
                                <div className={'top_btn '+(selected_role==2?"top_btn_selected":"")} onClick={()=>set_selected_role(2)}>מנהל מערכת</div>
                                <div className={'top_btn '+(selected_role==3?"top_btn_selected":"")} onClick={()=>set_selected_role(3)}>מפקח</div>
                                <div className={'top_btn '+(selected_role==4?"top_btn_selected":"")} onClick={()=>set_selected_role(4)}>מאבטח</div> */}

                            </div>

                            <div className='table_header_cont'>
                                <div className='table_header'>שם מלא</div>
                                <div className='table_header'>תפקיד</div>
                                <div className='table_header'>ת.ז</div>
                                <div className='table_header'>כתובת</div>
                                <div className='table_header'>טלפון</div>
                           
                            </div>

                {users && users.map((user:any) => (
                        <div className='table_header_cont'>
                            <div className='table_row'>
                                <img src={user_s_1} className='user_s' />
                            {user.firstname +' '+user.lastname}
                                </div>
                            <div className='table_row'>{user.role_name}</div>
                            <div className='table_row '>{user.tz}</div>
                            <div className='table_row '>{user.address}</div>
                           <div className='table_row '>{user.phone}</div>
                            <div className='table_row'>
                                <img src={more_w} className='user_s'  onClick={()=>set_show_more_options(user.id)}/>
                            
                            </div>
                            
                            {show_more_options==user.id?<div className='more_options_cont'>
                                        
                                <div onClick={()=>{set_show_edit_user_popup(user);set_show_more_options('')}} className='more_options_row more_options_row_1'>עריכה
                                    <img src={pencil} />
                                </div>
                                <div onClick={()=>set_delete_user_popup(user.id)} className='more_options_row'>מחיקה
                                    <img src={trash_s} />
                                </div>
                            </div>:<></>}

                            {delete_user_popup==user.id?<div className='delete_worker_popup_cont'>
                                    האם אתה בטוח רוצה למחוק? 

                                    <div className='delete_worker_popup_btncont'>
                                        <div onClick={()=>delete_user()}>כן</div>
                                        <div onClick={()=>{set_delete_user_popup(false);set_show_more_options('')}}>לא</div>
                                    </div>
                                </div>:<></>}
                        </div>
                ))}
                
                    
                        
                    </div>

                    <div className='settings_box_cont settings_box_cont_l settings_box_cont_l_1'>
                        <div className='settings_box_title'>ניהול תפקידים</div>
                        <div className='btn_exp_cont'>
                            <input type="text" placeholder='חיפוש עובד' className='btn_exp_cont_input search_input_s'/>
                            <div className='select_period'>סינון

                                <img src={filter} className='filter_icon' />
                            </div>
                            <div className='export_btn'>ייצוא</div>
                        </div>

                        <div className='settings_box_subtitle_b'>הוספת תפקיד</div>

                        <div className='add_role_cont'>
                            <input type="text" className='add_role_input' value={role_name_val} onChange={(e)=>set_role_name_val(e.target.value)}/>
                            {edit_role==''?<div className='add_role_btn' onClick={()=>add_role()}>הוספה</div>:
                            <div className='add_role_btn' onClick={()=>edit_role_func()}>עריכה</div>}
                        </div>

                        <div className='settings_box_subtitle_b'>תפקידים קיימים</div>

                        {roles && roles.map((role:any) => (
                            <>
                            <div className='role_cont'>{role.role_name}
                                <img src={trash_w} onClick={()=>set_del_role_popup(role.id)} className='trash_w_role'/>
                                <img src={pencil_eq} className='pencil_eq_role' onClick={()=>{set_edit_role(role.id);set_role_name_val(role.role_name)}}/>
                            
                            </div>
                       
                            {del_role_popup==role.id?<div className='delete_worker_popup_cont'>
                                 האם אתה בטוח רוצה למחוק? 

                                <div className='delete_worker_popup_btncont'>
                                    <div onClick={()=>delete_role_func()}>כן</div>
                                    <div onClick={()=>{set_del_role_popup(false);}}>לא</div>
                                </div>
                            </div>:<></>}
                            </>
                       ))}

                     

                    </div>

                </div>

                <div className='settings_box_cont'>
                <div className='settings_box_title'>ניהול הרשאות לפי תפקיד</div>

                <div>
                    <select value={role_name} onChange={(e)=>{set_role_name(e.target.value); get_role_permissions(e.target.value)}} className='role_name_select'>
                        <option>
                            בחר תפקיד
                        </option>

                        {roles && roles.map((role:any) => (
                        <option>
                            {role.role_name}
                        </option>
                        ))}

                
                    </select>
                </div>

                {role_permissions && role_permissions.map((role_permission:any) => (
                    <div className='settings_by_role_cont'>
                        <div className='settings_by_role_text'>{role_permission.permission_name}</div>

                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>צפייה</div>
                            <div className={' slide_settings_cont_w ' + (role_permission.view_opt=='true'?"slide_settings_cont_w_selected":"")} onClick={()=>set_role_permission_func(role_permission.view_opt,role_permission.id,'view_opt',role_permission.role_id)}> 
                                <div className={'slide_settings_middle ' + (role_permission.view_opt=='true'?"slide_settings_middle_w_selected":"")}></div>
                            </div>
                        </div>

                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>עריכה</div>
                             <div className={' slide_settings_cont_w ' + (role_permission.edit_opt=='true'?"slide_settings_cont_w_selected":"")} onClick={()=>set_role_permission_func(role_permission.edit_opt,role_permission.id,'edit_opt',role_permission.role_id)}> 
                                <div className={'slide_settings_middle ' + (role_permission.edit_opt=='true'?"slide_settings_middle_w_selected":"")}></div>
                            </div>
                        </div>

                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>מחיקה</div>
                            <div className={' slide_settings_cont_w ' + (role_permission.delete_opt=='true'?"slide_settings_cont_w_selected":"")} onClick={()=>set_role_permission_func(role_permission.delete_opt,role_permission.id,'delete_opt',role_permission.role_id)}> 
                                <div className={'slide_settings_middle ' + (role_permission.delete_opt=='true'?"slide_settings_middle_w_selected":"")}></div>
                            </div>
                        </div>

                    </div>
                ))}
                
{/* 
                      <div className='settings_by_role_cont'>
                        <div className='settings_by_role_text'>ניהול נשקים</div>

                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>צפייה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>


                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>עריכה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>


                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>מחיקה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>



                    </div>

                      <div className='settings_by_role_cont'>
                        <div className='settings_by_role_text'>דוחות פיקוח</div>

                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>צפייה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>


                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>עריכה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>


                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>מחיקה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>



                    </div>

                      <div className='settings_by_role_cont'>
                        <div className='settings_by_role_text'>ניהול מלאי</div>

                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>צפייה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>


                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>עריכה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>


                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>מחיקה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>



                    </div>


                    <div className='settings_by_role_cont'>
                        <div className='settings_by_role_text'>מנהל מערכת</div>

                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>צפייה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>


                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>עריכה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>


                        <div className='slide_settings_cont_main'>
                            <div className='slide_settings_cont_text'>מחיקה</div>
                            <div className='slide_settings_cont'> 
                                <div className='slide_settings_middle'></div>
                            </div>
                        </div>



                    </div> */}


                </div>
            </div>:<></>}



            {settings_tab==3?
            <div className='settings_box_cont_main'>
                <div className='settings_box_cont settings_box_cont_l'>
                    <div className='settings_box_title'>אתרים</div>

                        <div className='btn_exp_cont'>
                            <img src={add_icon} className='settings_add_icon'/>
                            <input type="text" placeholder='חיפוש עובד' className='btn_exp_cont_input search_input_s'/>
                            <div className='select_period'>סינון

                            <img src={filter} className='filter_icon' />
                            </div>
                            <div className='export_btn'>ייצוא</div>

                        </div>

                        <div className='site_cont_main'>
                      
                       {sites && sites.map((site:any) => (
                            <div className='site_cont'>
                                <img src={site_bg}  className='site_bg' />
                                <div className='site_cont_title'>{site.site_name}</div>

                                <div className='site_cont_name_box_main'>
                                
                                    <div className='site_cont_name_box'>
                                        <img src={user_m_1} className='n_1'/>
                                        <div className='site_cont_name_cont'>
                                            <div className='site_cont_name'>{site.contact_person}</div>
                                            <div className='site_cont_role'>קב"ט</div>
                                        </div>

                                    </div>

                                </div>

                                <div className='neshek_site_cont'>
                                    <div className='neshek_site_cont_in'>
                                        <img src={n_1} />
                                        <div>4 נשקים מוקצים</div>
                                    </div>

                                    <div className='neshek_site_cont_in'>
                                        <img src={n_2} />
                                        <div>36 מאבטחים</div>
                                    </div>

                                    <div className='neshek_site_cont_in'>
                                        <img src={n_2} />
                                        <div>36 מאבטחים</div>
                                    </div>

                                </div>

                                <div className='edit_btn' onClick={()=>set_edit_site_func(site)}>עריכה</div>
                                <div className='edit_btn' onClick={()=>set_delete_site(site.id)}>מחיקה</div>


                                {delete_site==site.id?<div className='delete_worker_popup_cont'>
                                    האם אתה בטוח רוצה למחוק? 

                                    <div className='delete_worker_popup_btncont'>
                                        <div onClick={()=>delete_site_func()}>כן</div>
                                        <div onClick={()=>{set_delete_site('')}}>לא</div>
                                    </div>
                                </div>:<></>}
                            </div>
                        ))}

                               {/* <div className='site_cont'>
                                <img src={site_bg}  className='site_bg' />
                                <div className='site_cont_title'>קניון עזריאלי</div>

                                <div className='site_cont_name_box_main'>
                                    <div className='site_cont_name_box'>
                                        <img src={user_m_1} className='n_1'/>
                                        <div className='site_cont_name_cont'>
                                            <div className='site_cont_name'>יוסי כהן</div>
                                            <div className='site_cont_role'>קב"ט</div>
                                        </div>

                                    </div>

                                      <div className='site_cont_name_box'>
                                        <img src={user_m_1} className='n_1'/>
                                        <div className='site_cont_name_cont'>
                                            <div className='site_cont_name'>דניאל שמש</div>
                                            <div className='site_cont_role'>קב"ט</div>
                                        </div>

                                    </div>

                                </div>

                                <div className='neshek_site_cont'>
                                    <div className='neshek_site_cont_in'>
                                        <img src={n_1} />
                                        <div>4 נשקים מוקצים</div>
                                    </div>

                                    <div className='neshek_site_cont_in'>
                                        <img src={n_2} />
                                        <div>36 מאבטחים</div>
                                    </div>

                                    <div className='neshek_site_cont_in'>
                                        <img src={n_2} />
                                        <div>36 מאבטחים</div>
                                    </div>

                                </div>

                                <div className='edit_btn'>עריכה</div>

                            </div>

                               <div className='site_cont'>
                                <img src={site_bg}  className='site_bg' />
                                <div className='site_cont_title'>קניון עזריאלי</div>

                                <div className='site_cont_name_box_main'>
                                    <div className='site_cont_name_box'>
                                        <img src={user_m_1} className='n_1'/>
                                        <div className='site_cont_name_cont'>
                                            <div className='site_cont_name'>יוסי כהן</div>
                                            <div className='site_cont_role'>קב"ט</div>
                                        </div>

                                    </div>

                                      <div className='site_cont_name_box'>
                                        <img src={user_m_1} className='n_1'/>
                                        <div className='site_cont_name_cont'>
                                            <div className='site_cont_name'>דניאל שמש</div>
                                            <div className='site_cont_role'>קב"ט</div>
                                        </div>

                                    </div>

                                </div>

                                <div className='neshek_site_cont'>
                                    <div className='neshek_site_cont_in'>
                                        <img src={n_1} />
                                        <div>4 נשקים מוקצים</div>
                                    </div>

                                    <div className='neshek_site_cont_in'>
                                        <img src={n_2} />
                                        <div>36 מאבטחים</div>
                                    </div>

                                    <div className='neshek_site_cont_in'>
                                        <img src={n_2} />
                                        <div>36 מאבטחים</div>
                                    </div>

                                </div>

                                <div className='edit_btn'>עריכה</div>

                            </div>


                               <div className='site_cont'>
                                <img src={site_bg}  className='site_bg' />
                                <div className='site_cont_title'>קניון עזריאלי</div>

                                <div className='site_cont_name_box_main'>
                                    <div className='site_cont_name_box'>
                                        <img src={user_m_1} className='n_1'/>
                                        <div className='site_cont_name_cont'>
                                            <div className='site_cont_name'>יוסי כהן</div>
                                            <div className='site_cont_role'>קב"ט</div>
                                        </div>

                                    </div>

                                      <div className='site_cont_name_box'>
                                        <img src={user_m_1} className='n_1'/>
                                        <div className='site_cont_name_cont'>
                                            <div className='site_cont_name'>דניאל שמש</div>
                                            <div className='site_cont_role'>קב"ט</div>
                                        </div>

                                    </div>

                                </div>

                                <div className='neshek_site_cont'>
                                    <div className='neshek_site_cont_in'>
                                        <img src={n_1} />
                                        <div>4 נשקים מוקצים</div>
                                    </div>

                                    <div className='neshek_site_cont_in'>
                                        <img src={n_2} />
                                        <div>36 מאבטחים</div>
                                    </div>

                                    <div className='neshek_site_cont_in'>
                                        <img src={n_2} />
                                        <div>36 מאבטחים</div>
                                    </div>

                                </div>

                                <div className='edit_btn'>עריכה</div>

                            </div> */}
                        </div>

                </div>

                <div className='settings_box_cont'>
                    <div className='settings_box_title'>הוספת אתר חדש</div>

                     <div className='settings_box_line_cont'>
                        <div className='settings_box_title_in'>שם האתר</div>
                        <input className='settings_box_input' type="text" placeholder='לדוגמה: קניון עופר חיפה' value={site_name} onChange={(e)=>set_site_name(e.target.value)}/>
                    </div>    
                    
                    <div className='settings_box_line_cont'>
                        <div className='settings_box_title_in'>סוג האתר</div>
                        <input className='settings_box_input' type="text" placeholder='קניון/משרדים/מפעל' value={site_type} onChange={(e)=>set_site_type(e.target.value)}/>
                    </div>  

                    <div className='settings_box_line_cont'>
                        <div className='settings_box_title_in'>כתובת</div>
                        <input className='settings_box_input' type="text" placeholder='רחוב, מספר, עיר' value={site_address} onChange={(e)=>set_site_address(e.target.value)}/>
                    </div>  

                    <div className='settings_box_line_cont'>
                        <div className='settings_box_title_in'>איש קשר</div>
                        <input className='settings_box_input' type="text" placeholder='איש קשר'  value={site_contact_person} onChange={(e)=>set_site_contact_person(e.target.value)}/>
                    </div>  

                    <div className='settings_box_line_cont'>
                        <div className='settings_box_title_in'>טלפון</div>
                        <input className='settings_box_input' type="text" placeholder='050-1234567' value={site_phone} onChange={(e)=>set_site_phone(e.target.value)}/>
                    </div>  

                    <div className='settings_box_line_cont'>
                        <div className='settings_box_title_in'>דוא"ל</div>
                        <input className='settings_box_input' type="text" placeholder='yossi@security.co.il' value={email}  onChange={(e)=>set_email(e.target.value)} />
                    </div>  


                    <div className='settings_box_line_cont'>
                        <div className='settings_box_title_in'>תמונה של האתר</div>
                        
                        <div className='upload_logo_cont'>
                            <img src={upload} className='upload_icon_settings'/>
                            <div className='upload_logo_text'>גרור קבצים לכאן או לחץ להעלאה</div>
                        </div>

                    </div>


                    <div className='save_settings_btn_cont'>
                        {edit_site?<div className='save_settings_btn_site' onClick={()=>update_site()}>ערוך אתר</div>:
                        <div className='save_settings_btn_site' onClick={()=>save_new_site()}>שמור אתר</div>}

                        <div className='clean_settings_btn_site' onClick={()=>clear_site_fields()}>ניקוי טופס</div>
                    </div>

                </div>
            </div>:<></>}


            {settings_tab==4?
            <div className='settings_box_cont_main'>
                <div className='kalibr_settings_cont'>
                    <div className='settings_box_title'>ניהול קליברים</div>

                    {all_kalibers && all_kalibers.map((kaliber:any) => (
                        <div className='kaliber_row_cont'>
                            <img src={close} className='close_kaliber' onClick={()=>set_del_kaliber_popup(kaliber.id)}/>
                            <img src={pencil_eq} className='edit_kaliber' onClick={()=>{set_new_kaliber(kaliber.name); set_edit_kaliber(kaliber.id)}}/>
                            <div>{kaliber.name}</div>

                            {del_kaliber_popup==kaliber.id?<div className='delete_worker_popup_cont'>
                                    האם אתה בטוח רוצה למחוק? 

                                <div className='delete_worker_popup_btncont'>
                                    <div onClick={()=>delete_kaliber_func()}>כן</div>
                                    <div onClick={()=>{set_del_kaliber_popup(false);set_show_more_options('')}}>לא</div>
                                </div>
                            </div>:<></>}

                        </div>
                    ))}

  
              
            
                    <div className='add_kaliber_btn'>
                        {!edit_kaliber?
                        <img src={add_icon} className='add_icon_kaliber' onClick={()=>add_new_kaliber()}/>:<div className='add_icon_kaliber_text' onClick={()=>edit_kaliber_func(edit_kaliber)}>עדכן</div>}
                        <input type="text" placeholder='הזן קליבר חדש' className='add_kaliber_btn_input' value={new_kaliber} onChange={(e)=>set_new_kaliber(e.target.value)}/>
                    </div>

                </div>

                <div className='kalibr_settings_cont'>
                    <div className='settings_box_title'>סוגי נשק</div>

                    
                     {all_neshek_types && all_neshek_types.map((neshek_type:any) => (
                        <div className='kaliber_row_cont'>
                            <img src={close} className='close_kaliber' onClick={()=>set_del_neshek_type_popup(neshek_type.id)}/>
                            <img src={pencil_eq} className='edit_kaliber' onClick={()=>{set_new_neshek_type(neshek_type.name); set_edit_neshek_type(neshek_type.id)}}/>

                            <div>{neshek_type.name}</div>

                            {del_neshek_type_popup==neshek_type.id?<div className='delete_worker_popup_cont'>
                                    האם אתה בטוח רוצה למחוק? 

                                <div className='delete_worker_popup_btncont'>
                                    <div onClick={()=>delete_neshek_type_func()}>כן</div>
                                    <div onClick={()=>{set_del_neshek_type_popup(false);set_show_more_options('')}}>לא</div>
                                </div>
                            </div>:<></>}

                        </div>
                    ))}

                    <div className='add_kaliber_btn'>
                        {!edit_neshek_type?<img src={add_icon} className='add_icon_kaliber' onClick={()=>add_new_neshek_type()}/>
                       :<div className='add_icon_kaliber_text' onClick={()=>edit_neshek_type_func(edit_neshek_type)}>עדכן</div>}
                        <input type="text" placeholder='הזן נשק חדש' className='add_kaliber_btn_input' value={new_neshek_type} onChange={(e)=>set_new_neshek_type(e.target.value)}/>
                    </div> 


                </div>

                <div className='kalibr_settings_cont_main'>
                    <div className='kalibr_settings_cont_top'>
                        <div className='settings_box_title'>התראות מלאי תחמושת</div>
                        <div className='settings_box_subtitle'>התראה על מלאי תחמושת נמוך מתחת ל-</div>
                        <input type="text" placeholder='הכנס מספר' className='tahmoshet_alert_input' value={tachmoshet_num} onChange={(e)=>set_tachmoshet_num(e.target.value)} onBlur={()=>update_alert_tachmoshet('tachmoshet_num')}/>

                        <div>
                            <div className='slide_settings_cont_main_4'>
                                <div className='slide_settings_cont_text_4'>שלח התראה לקב״ט באופן אוטומטי</div>
                                 <div className={' slide_settings_cont_w ' + (sent_auto?"slide_settings_cont_w_selected":"")} onClick={()=>{set_sent_auto(!sent_auto);update_alert_tachmoshet('sent_auto')}}> 
                                    <div className={'slide_settings_middle ' + (sent_auto?"slide_settings_middle_w_selected":"")}></div>
                                </div>
                            </div>

                        </div> 

                    </div>

                     <div className='kalibr_settings_cont_bottom'>
                        <div className='settings_box_title'>יצרנים ודגמים</div>

                        <div className='add_new_neshek_model_btn' onClick={()=>set_show_new_neshek_model(true)}>+ הוספת דגם חדש</div>

                        {show_new_neshek_model?<div className='new_neshek_model_cont'>
                            <div className='new_neshek_model_title'>שם יצרן</div>
                            <input type="text" placeholder='לדוגמה: Glock, IWI, Colt' className='new_neshek_model_input' value={creator} onChange={(e)=>set_creator(e.target.value)}/>

                            <div className='new_neshek_model_title'>שם הדגם</div>
                            <input type="text" placeholder='לדוגמה: Glock 19 Gen 5' className='new_neshek_model_input' value={model} onChange={(e)=>set_model(e.target.value)}/>

                            <div className='new_neshek_model_title'>קליבר משוייך</div>
                            
                            <select className='new_neshek_model_select' value={selected_kaliber} onChange={(e)=>set_selected_kaliber(e.target.value)}>
                                <option>בחר קליבר</option>
                                {all_kalibers && all_kalibers.map((kaliber:any) => (
                                <option>{kaliber.name}</option>
                                ))}
                                {/* <option>5.56 מ״מ</option>
                                <option>7.62 מ״מ</option>
                                <option>0.22 אינץ׳</option> */}
                            </select>

                            <div className='add_model_btn_cont'>
                                <div className='add_model_btn' onClick={()=>add_new_creator_model_func()}>הוסף דגם</div>
                                <div className='cancel_model_btn' onClick={()=>set_show_new_neshek_model(false)}>ביטול</div>
                            </div>

                        </div>:<></>}

                        {show_edit_creator_model_popup?<div className='new_neshek_model_cont'>
                            <div className='new_neshek_model_title'>שם יצרן</div>
                            <input type="text" placeholder='לדוגמה: Glock, IWI, Colt' className='new_neshek_model_input' value={show_edit_creator_model_popup.creator} onChange={(e)=>set_edit_creator_model(e.target.value,"creator")}/>

                            <div className='new_neshek_model_title'>שם הדגם</div>
                            <input type="text" placeholder='לדוגמה: Glock 19 Gen 5' className='new_neshek_model_input' value={show_edit_creator_model_popup.model} onChange={(e)=>set_edit_creator_model(e.target.value,"model")}/>

                            <div className='new_neshek_model_title'>קליבר משוייך</div>
                            
                            <select className='new_neshek_model_select' value={show_edit_creator_model_popup.kaliber} onChange={(e)=>set_edit_creator_model(e.target.value,"kaliber")}>
                                <option>בחר קליבר</option>
                                {all_kalibers && all_kalibers.map((kaliber:any) => (
                                <option>{kaliber.name}</option>
                                ))}
                                {/* <option>5.56 מ״מ</option>
                                <option>7.62 מ״מ</option>
                                <option>0.22 אינץ׳</option> */}
                            </select>

                            <div className='add_model_btn_cont'>
                                <div className='add_model_btn' onClick={()=>update_creator_model_func()}>ערוך דגם</div>
                                <div className='cancel_model_btn' onClick={()=>set_show_edit_creator_model_popup(false)}>ביטול</div>
                            </div>

                        </div>:<></>}

                        <div className='neshek_c_header_cont'>
                            <div className='neshek_c_header'>שם יצרן</div>
                            <div className='neshek_c_header'>דגם</div>
                            <div className='neshek_c_header'>קליבר משוייך</div>
                        </div>

                        {creators_models && creators_models.map((creator_model:any) => (
                            <div className='neshek_c_header_cont'>
                                <div className='neshek_c_header_b'>{creator_model.creator}</div>
                                <div className='neshek_c_header_b'>{creator_model.model}</div>
                                <div className='neshek_c_header_b'>{creator_model.kaliber}</div>
                                <img src={more_w} onClick={()=>set_show_more_options_creator_model(creator_model.id)}/>

                                {show_more_options_creator_model==creator_model.id?<div className='more_options_cont'>
                                            
                                    <div onClick={()=>{set_show_edit_creator_model_popup(creator_model);set_show_more_options('')}} className='more_options_row more_options_row_1'>עריכה
                                        <img src={pencil} />
                                    </div>
                                    <div onClick={()=>set_delete_creator_model_popup(creator_model.id)} className='more_options_row'>מחיקה
                                        <img src={trash_s} />
                                    </div>
                                </div>:<></>}

                                {delete_creator_model_popup==creator_model.id?<div className='delete_worker_popup_cont'>
                                 האם אתה בטוח רוצה למחוק? 

                                <div className='delete_worker_popup_btncont'>
                                    <div onClick={()=>delete_creator_model()}>כן</div>
                                    <div onClick={()=>{set_delete_creator_model_popup(false);set_show_more_options_creator_model('')}}>לא</div>
                                </div>
                            </div>:<></>}
                            </div>
                        ))}


                        {/* <div className='neshek_c_header_cont'>
                            <div className='neshek_c_header_b'>Glock</div>
                            <div className='neshek_c_header_b'>Glock 19 Gen 3</div>
                            <div className='neshek_c_header_b'>9 מ״מ</div>
                            <img src={more_w}/>
                        </div>

                        <div className='neshek_c_header_cont'>
                            <div className='neshek_c_header_b'>Glock</div>
                            <div className='neshek_c_header_b'>Glock 19 Gen 3</div>
                            <div className='neshek_c_header_b'>9 מ״מ</div>
                            <img src={more_w}/>
                        </div> */}

                    </div>
                </div>

            </div>:<></>}

        </div>

      {show_add_user_popup?<New_user get_all_users= {get_all_users} set_show_add_user_popup={set_show_add_user_popup}></New_user>:<></>}

      {show_edit_user_popup?<Edit_user get_all_users= {get_all_users} user= {show_edit_user_popup} set_show_add_user_popup={set_show_edit_user_popup}></Edit_user>:<></>}
    
    
    </>

    )

}

export default Settings