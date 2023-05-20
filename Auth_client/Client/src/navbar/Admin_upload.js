import React from "react";
import "./Admin.css";
import { useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
const AdminUpload = () => {
    const [show, setShow] = useState(false);
    const [NOMBRE, SetNOMBRE] = useState();
    const [DIRECCION, SetDIRECCION] = useState();
    const [COMUNA, SetCOMUNA] = useState();
    const [REGION, SetREGION] = useState();
    const [SALUD, SetSALUD] = useState();
    const [Fec_Nac, SetFec_Nac] = useState();
    const [CORREO, SetCORREO] = useState();
    const [CELULAR, SetCELULAR] = useState();
    const [RUT, SetRUT] = useState();
    const [DV, SetDV] = useState();
    const handleClose = () => setShow(false);
    const handleChangeNOMBRE = (e) => SetNOMBRE(e.target.value)
    const handleChangeDIRECCION = (e) => SetDIRECCION(e.target.value)
    const handleChangeCOMUNA = (e) => SetCOMUNA(e.target.value)
    const handleChangeREGION = (e) => SetREGION(e.target.value)
    const handleChangeSALUD = (e) => SetSALUD(e.target.value)
    const handleChangeFec_Nac = (e) => SetFec_Nac(e.target.value)
    const handleChangeCORREO = (e) => SetCORREO(e.target.value)
    const handleChangeCELULAR = (e) => SetCELULAR(e.target.value)
    const handleChangeRUT = (e) => SetRUT(e.target.value)
    const handleChangeDV = (e) => SetDV(e.target.value)
    console.log(NOMBRE)
    const handlesubmit = () => {
        const studentObject = {
            NOMBRE: NOMBRE,
            DIRECCION: DIRECCION,
            COMUNA: COMUNA,
            REGION: REGION,
            SALUD: SALUD,
            Fec_Nac: Fec_Nac,
            CORREO: CORREO,
            CELULAR: CELULAR,
            RUT: RUT,
            DV: DV
        };
        axios.post('http://localhost:4000/students/create-student', studentObject)
            .then(res => console.log(res.data));
        SetNOMBRE('')
        SetDIRECCION('')
        SetCOMUNA('')
        SetREGION('')
        SetSALUD('')
        SetFec_Nac('')
        SetCORREO('')
        SetCELULAR('')
        SetRUT('')
        SetDV('')
        setShow(true)
    }

    return (
        <div className="Admin_item_background">
            <div className="Admin_input_out">
                <div className="col-6" style={{ display: "flex", justifyContent: "center" }}>
                    <input type="text" alt="user" placeholder="NOMBRE" className="Admin_input_style" value={NOMBRE} onChange={handleChangeNOMBRE} />
                </div>
                <div className="col-6" style={{ display: "flex", justifyContent: "center" }}>
                    <input type="text" alt="user" placeholder="DIRECCION" className="Admin_input_style" value={DIRECCION} onChange={handleChangeDIRECCION} />
                </div>
            </div>
            <div className="Admin_input_out">
                <div className="col-6" style={{ display: "flex", justifyContent: "center" }}>
                    <input type="text" alt="user" placeholder="COMUNA" className="Admin_input_style" value={COMUNA} onChange={handleChangeCOMUNA} />
                </div>
                <div className="col-6" style={{ display: "flex", justifyContent: "center" }}>
                    <input type="text" alt="user" placeholder="REGION" className="Admin_input_style" value={REGION} onChange={handleChangeREGION} />
                </div>
            </div>
            <div className="Admin_input_out">
                <div className="col-6" style={{ display: "flex", justifyContent: "center" }}>
                    <input type="text" alt="user" placeholder="SALUD" className="Admin_input_style" value={SALUD} onChange={handleChangeSALUD} />
                </div>
                <div className="col-6" style={{ display: "flex", justifyContent: "center" }}>
                    <input type="number" alt="user" placeholder="Fec_Nac" className="Admin_input_style" value={Fec_Nac} onChange={handleChangeFec_Nac} />
                </div>
            </div>
            <div className="Admin_input_out">
                <div className="col-6" style={{ display: "flex", justifyContent: "center" }}>
                    <input type="text" alt="user" placeholder="CORREO" className="Admin_input_style" value={CORREO} onChange={handleChangeCORREO} />
                </div>
                <div className="col-6" style={{ display: "flex", justifyContent: "center" }}>
                    <input type="number" alt="user" placeholder="CELULAR" className="Admin_input_style" value={CELULAR} onChange={handleChangeCELULAR} />
                </div>
            </div>
            <div className="Admin_input_out">
                <div className="col-6" style={{ display: "flex", justifyContent: "center" }}>
                    <input type="number" alt="user" placeholder="RUT" className="Admin_input_style" value={RUT} onChange={handleChangeRUT} />
                </div>
                <div className="col-6" style={{ display: "flex", justifyContent: "center" }}>
                    <input type="text" alt="user" placeholder="DV" className="Admin_input_style" value={DV} onChange={handleChangeDV} />
                </div>
            </div>

            <div className="Admin_upload_button_out">
                <button className="Admin_upload_button" onClick={handlesubmit}> Entregar </button>
                <Modal show={show} onHide={handleClose} dialogClassName="modal_out">
                    <Modal.Header closeButton>
                        <Modal.Title>Mensaje</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                        Acabas de subir los datos a la base de datos con éxito
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="Admin_cancel_button" onClick={handleClose}> Cancelar </button>
                    </Modal.Footer>

                </Modal>

            </div>

        </div>
    );
};
export default AdminUpload;
