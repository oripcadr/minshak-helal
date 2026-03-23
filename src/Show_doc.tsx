import { useEffect, useRef, useState } from 'react';
import './Show_doc.css'
import { renderAsync } from 'docx-preview';
import * as XLSX from 'xlsx';
import { DataGrid } from 'react-data-grid'; 
import 'react-data-grid/lib/styles.css';
//import { Document, Page, Text, View, StyleSheet,  Font,Image,  PDFDownloadLink  } from '@react-pdf/renderer';

import close from './assets/close.png'
function Show_doc(props:any) {

    const [show_display_file, set_show_display_file] = useState(false);
    const [show_display_file_excel, set_show_display_file_excel] = useState(false);
    const [show_display_file_pdf, set_show_display_file_pdf] = useState(false);
    const [show_img, set_show_img] = useState(false);
     
    const [columns, setColumns] = useState([]);
    const [rows, setRows] = useState([]);
    const [PdfUrl, set_PdfUrl] = useState(''); 
      
    const containerRef = useRef<any>(null);
      
    useEffect(() => {

      view_file_func(props.show_doc)
    }, []);


      async function view_file_func(file_name:string){
    debugger;
        if(file_name.toLowerCase().endsWith('.pdf')){
          set_show_display_file_pdf(true);


          await fetch(globalThis.app.current+'/'+file_name, {
           // headers: { Authorization: "Bearer " + token }
          })
            .then(res => res.blob())
            .then(blob => {
              const url = URL.createObjectURL(blob);
              set_PdfUrl(url);
            });

        } else if(file_name.toLowerCase().endsWith('.png')){
          set_show_img(true);
        }
        else

        if (!file_name.toLowerCase().endsWith('.docx') && !file_name.toLowerCase().endsWith('.doc')) {
            view_excel_file(file_name);
        } else {
            fetch(globalThis.app.current+'/'+file_name)
                .then(response => {
                    response.blob().then(async blob => {
                                    
                        if (blob) {
                            set_show_display_file(true);
                            blob.arrayBuffer().then(buffer => {
                                renderAsync(buffer, containerRef.current);
                                
                            });
                        }
                });
            });
        }
    
    
      }
    
      function view_excel_file(file_name:string){
       fetch(globalThis.app.current+'/'+file_name)
            .then(response => {
                response.blob().then(async blob => {
                                
                    if (blob) {
    
                        const reader = new FileReader();
                        reader.onload = (e:any) => {
                        const data = new Uint8Array(e.target.result);
                        const workbook = XLSX.read(data, { type: 'array' });
    
                        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                        const jsonData:any = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    
                        const cols = jsonData[0].map((col:any, index:any) => ({
                            key: index.toString(),
                            name: col?.toString() || `Column ${index + 1}`,
                        }));
    
                        const rowData = jsonData.slice(1).map((row:any) =>
                            Object.fromEntries(
                            row.map((cell:any, i:any) => [i.toString(), cell])
                            )
                        );
    
                        setColumns(cols);
                        setRows(rowData);
                        set_show_display_file_excel(true);
                        };
    
                     reader.readAsArrayBuffer(blob);
                    }
    
                     
            });
        });
      }

    function download_doc(file_name:any){
        fetch(globalThis.app.current+'/'+file_name)
            .then(response => {
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = file_name;
                    a.click();
            });
        });
      }

    return (
        <div className='Show_doc_cont'>
            <img src={close} className='close_icon' onClick={()=>props.set_show_doc(false)}/>

            <div className='print_cert_btn_cont'>
           
            <div className="download_cert_btn" onClick={()=>download_doc(props.show_doc)}>הורד מסמך</div>        

            </div> 


      <div className='file_disp_area'>

              {show_display_file?<>
                <div className="file_display" ref={containerRef}></div>
                </>:<></>}

               {show_display_file_excel?<><div className='excel_cont_grid'>
                {rows.length > 0 ? (
                    <DataGrid columns={columns} rows={rows} />
                ) : (<></>
                   
                )}

                </div></>:<></>}


                {show_display_file_pdf?<iframe src={PdfUrl} style={{ width: "100%", height: "90%" }} />:<></>}

                {show_img?<img src={globalThis.app.current+'/'+props.show_doc} className='disp_prev_img'/>:<></>}

      </div>


        </div>
    )

    
}

export default Show_doc

