import React, { useRef, useState } from "react";
import "./Admin.css";
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import CSVImage from '../images/CSV_image.png'
const AdminUploadCsv = () => {
    const [show, setShow] = useState(false);
    const fileRef = useRef()
    const [data, setData] = useState()
    console.log(data)

    const onClick = () => {
        fileRef.current.click()
    }
    const handleFileParse = (e) => {
        const files = e.target.files;
        console.log(files);
        if (files) {
            const formData = new FormData()
            formData.append('csv', files[0]);
            setData(formData)
        }
    }
    const handleFileSend = () => {
        axios.post('http://localhost:4000/students/read-file', data, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
            .then(res => console.log(res.data));
        setShow(true)
    }
    const handleClose = () => setShow(false);
    return (
        <div className="ImageBackground">
            <div className="Admin_Upload_Title">
                carga masiva de miles de datos
            </div>
            <div className="Admin_Upload_text">
                Esta es una página que puede cargar archivos de datos a la base de datos.
                puede cargar muchos datos como CSV aquí.
            </div>
            <div className="CSV_image_out">
                <img src={CSVImage} alt="flag" className="CSV_logoinsert" />
            </div>
            <div className="Admin_Uploadcsv_Button_out">
                <div className="col-6">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button className="getting_startted" onClick={onClick}> importar CSV </button>
                        <input type="file" style={{ display: 'none' }} ref={fileRef} onChange={handleFileParse} />
                    </div>
                </div>
                <div className="col-6">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button className="getting_startted" onClick={handleFileSend}> cargando </button>
                        <Modal show={show} onHide={handleClose} dialogClassName="modal_out">
                            <Modal.Header closeButton>
                                <Modal.Title>Mensaje</Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                                acaba de cargar el archivo de Excel seleccionado a la base de datos con éxito.
                            </Modal.Body>
                            <Modal.Footer>
                                <button className="Admin_cancel_button" onClick={handleClose}> Cancelar </button>
                            </Modal.Footer>

                        </Modal>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default AdminUploadCsv;
