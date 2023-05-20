import React from "react";
import "../pages.css";

const SearchBarName126 = () => {
    return (
        <div className="searchbar_out">
            <div className="row">
                <div className="col-6 position-relative" style={{paddingRight: "5px"}}>
                    <input type="text" alt="search" className="input_name" />
                    <label className="serach-bar-placeholder">Nombre</label>
                </div>
                <div className="col-6 position-relative" style={{paddingLeft: "5px"}}>
                    <input type="text" alt="search" className="input_name" />
                    <label className="serach-bar-placeholder">DIRECCION</label>
                </div>                
            </div>
            <div className="row" style={{marginTop: "20px"}}>
                <div className="col-6 position-relative" style={{paddingRight: "5px"}}>
                    <input type="text" alt="search" className="input_name" />
                    <label className="serach-bar-placeholder">Comuna</label>
                </div>
                <div className="col-6 position-relative" style={{paddingLeft: "5px"}}>
                    <input type="text" alt="search" className="input_name" />
                    <label className="serach-bar-placeholder">DV</label>
                </div>                
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                <button className="searchButton1"> BUSCAR </button>
            </div>

        </div>
    );
};
export default SearchBarName126;
