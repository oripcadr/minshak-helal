
import './Worker_popup.css'
import close from './assets/close.png'
import arrow_r_w from './assets/arrow_r_w.png'
import cert from './assets/cert.png'
import zoom_out from './assets/zoom_out.png'
import zoom_in from './assets/zoom_in.png'


function Cert_popup(props:any) {

  return (
    <div className='worker_popup_cont'>
        <img src={close} className='close_icon' onClick={()=>props.set_show_cert_popup(false)}/>

        <div className='download_doc_btn_cont'>
            <img src={arrow_r_w} />
            <div className='download_doc_btn'>
                הורד מסמך
            </div>

            <div  className='print_doc_btn'>
                הדפסה
            </div>

        </div>

        <img src={cert} className='cert_img'/>

        <div className='zoom_cont'>
            <img src={zoom_out} />
            <div>100%</div>
            <img src={zoom_in} />
        </div>
    </div>
  )
}

export default Cert_popup