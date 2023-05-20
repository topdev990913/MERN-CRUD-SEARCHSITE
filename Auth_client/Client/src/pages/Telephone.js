import React, { useState } from "react";
import "./pages.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Telephone = ({ listData, setListData }) => {
    const [value, setValue] = useState()
    const navigate = useNavigate()
    return (
        <div className="container-fluid" style={{ height: "500px" }}>
            <div className="name_title">
                Revelar quién llama
            </div>
            <div className="name_subtitle">
                ¡Reúna información más profunda sobre quienes están detrás del número: <br />nombre del propietario, historial laboral, educación, perfiles sociales y mucho más!
            </div>
            <div className="searchbar_out">
                <div className="row">
                    <div className="col-9 position-relative">
                        {/* <input type="text" alt="search" className="input_name" /> */}
                        <input type="number" pattern="[0-9]*" inputmode="numeric" placeholder="Teléfono" value={value} onChange={(e) => { setValue(e.target.value) }} alt="search" className="input_name" />
                    </div>
                    <div className="col-3" style={{ display: "flex", justifyContent: "right", paddingLeft: "10px" }}>
                        <button className="searchButton" onClick={() => {
                            axios.post('http://localhost:4000/students/temp_telephone', { "telephone": value })
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
        </div>
    );
};
export default Telephone;
