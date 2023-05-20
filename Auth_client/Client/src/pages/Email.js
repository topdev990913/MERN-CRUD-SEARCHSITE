import React, { useState } from "react";
import "./pages.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import logo from "../images/bff-robot.png";
// import main_pic from "../images/circle-main-pic.webp";
// import pic_1 from "../images/circle-pic-1.webp";
// import pic_2 from "../images/circle-pic-2.webp";
// import pic_3 from "../images/circle-pic-3.webp";
// import pic_4 from "../images/circle-pic-4.webp";
// import pic_5 from "../images/circle-pic-5.webp";
// import pic_6 from "../images/circle-pic-6.webp";
// import pic_7 from "../images/circle-pic-7.webp";

const Email = ({ listData, setListData }) => {
    const [value, setValue] = useState()
    const navigate = useNavigate()
    return (
        <div className="container-fluid" style={{ height: "500px" }}>
            <div className="name_title">
                Busque millones de direcciones <br />de correo electrónico
            </div>
            <div className="name_subtitle">
                Obtenga más información sobre la persona detrás del correo <br />electrónico: información de contacto, historial profesional y más.
            </div>
            <div className="searchbar_out">
                <div className="row">
                    <div className="col-9 position-relative">
                        <input type="text" alt="search" className="input_name" placeholder="Correo electrónico" value={value} onChange={(e) => { setValue(e.target.value) }} />
                    </div>
                    <div className="col-3" style={{ display: "flex", justifyContent: "right", paddingLeft: "10px" }}>
                        <button className="searchButton" onClick={() => {
                            axios.post('http://localhost:4000/students/temp_Email', { "Email": value })
                                .then((response) => {
                                    setListData(response.data)
                                    console.log("response.data", response.data);
                                    if (response.data.length) navigate("/SearchResult");
                                    else alert("No puedo encontrar los datos")
                                })
                                .catch((e) => { console.log(e) })
                                .finally(() => setValue(''))
                        }}> BUSCAR </button>
                    </div>
                </div>
            </div>
            <div className="bottom_description1">
                Ejemplo: johndoe@gmail.com
            </div>

        </div>
    );
};
export default Email;
