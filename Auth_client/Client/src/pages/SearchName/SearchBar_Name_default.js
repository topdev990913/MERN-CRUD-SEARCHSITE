import React, { useState } from "react";
import "../pages.css";
// import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const SearchBarNameDefault = ({setListData}) => {
    const navigate = useNavigate();
    const [value, setValue] = useState('')
    return (
        <div className="searchbar_out">
            <div className="row">
                <div className="col-9 position-relative">
                    <input type="text" alt="search" placeholder="NOMBRE" className="input_name" value={value} onChange={(e)=>{setValue(e.target.value)}}/>
                    {/* <label className="serach-bar-placeholder">Nombre</label> */}
                </div>
                <div className="col-3" style={{paddingLeft: "10px"}}>
                    {/* <Link to='/SearchResult' style={{ display: "flex", justifyContent: "right" }}> */}
                        <button className="searchButton" onClick={()=>{
                            axios.post('http://localhost:4000/students/temp', {"name": value})
                            .then((response) => {
                               setListData(response.data)
                               console.log("response.data", response.data);
                               if(response.data.length) navigate("/SearchResult");
                               else alert("No puedo encontrar los datos")
                            })
                            .catch((e)=>{console.log(e)})
                            .finally(()=>setValue(''))
                        }}> BUSCAR </button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    );
};
export default SearchBarNameDefault;
