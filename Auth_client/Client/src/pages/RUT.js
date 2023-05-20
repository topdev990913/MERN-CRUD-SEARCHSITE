import React from "react";
import "./pages.css";
import SearchBarRUTDefault from "./SeachRUT/SearchBar_RUT_default";
import { useState } from 'react';
import SearchBarRUTPosition from "./SeachRUT/SearchBar_RUT_Position";
import SearchBarRUTPositionRegeion from "./SeachRUT/SearchBar_RUT_Position_Regeion";
import SearchBarRUTRegeion from "./SeachRUT/SearchBar_RUT_Regeion";

const RUT = ({listData, setListData}) => {
    const [showposition, SetShowposition] = useState(false);
    const handleShowposition = () => {
        SetShowposition(!showposition);
    };
    const [showposition1, SetShowposition1] = useState(false);
    const handleShowposition1 = () => {
        SetShowposition1(!showposition1);
    };
    const displaySearchRUT = () => {
        if (showposition === true & showposition1 === true) return <SearchBarRUTPositionRegeion setListData={setListData} />
        if (showposition === true & showposition1 === false) return <SearchBarRUTPosition setListData={setListData}/>
        if (showposition === false & showposition1 === true) return <SearchBarRUTRegeion setListData={setListData} />
        else return <SearchBarRUTDefault setListData={setListData}/>
      }
    console.log(showposition)
    return (
        <div className="container-fluid">
            <div className="name_title">
                Revela quién está detrás del RUT
            </div>
            <div className="name_subtitle">
                Descubre RUT e información en millones de perfiles de LinkedIn y redes sociales.
            </div>
            {displaySearchRUT()}
            
            <div className="Add_Job">
                <button className="SortSearchButton1" onClick={handleShowposition}> {showposition === false? "+COMUNA" : "-COMUNA" }</button>
                <button className="SortSearchButton1"onClick={handleShowposition1}> {showposition1 === false? "+Región" : "-Región"}  </button>
            </div>

        </div>
    );
};
export default RUT;
