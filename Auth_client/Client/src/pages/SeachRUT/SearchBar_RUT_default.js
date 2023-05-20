import React, { useState } from "react";
import "../pages.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SearchBarRUTDefault = ({ setListData }) => {
    const [value, setValue] = useState('')
    // const [show, setshow] = useState(false)
    // console.log("show", show)
    const navigate = useNavigate()
    return (
        <div className="searchbar_out">
            <div className="row">
                <div className="col-9 position-relative">
                    <input type="text" alt="search" className="input_name" placeholder="RUT" value={value} onChange={(e) => { setValue(e.target.value) }} />
                </div>
                <div className="col-3" style={{ display: "flex", justifyContent: "right", paddingLeft: "10px" }}>
                    <button className="searchButton" onClick={() => {
                        axios.post('http://localhost:4000/students/temp_RUT', { "RUT": value })
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
    );
};
export default SearchBarRUTDefault;
