import React from 'react'
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';



export default function Pdf_Admin(props) {
    return (
        <div>

            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div style={stylePdf}>
                    <Viewer fileUrl={props.Link} />
                    {/* <Viewer fileUrl="/assets/Administración_de_cuentas_de_cobro.pdf" /> */}
                </div>
            </Worker>
        </div>
    )
}




const stylePdf = {
    border: '5px solid rgba(0, 0, 0, 0.3)',
    height: '800 px',
}