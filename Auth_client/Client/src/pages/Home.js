import React from "react";
import { useState } from 'react';
import "./pages.css";
import Name from "./Name.js";
import Telephone from "./Telephone.js";
import Email from "./Email.js";
import RUT from "./RUT.js";
import Sales from "./Sales.js";
import Footer from "./Footer.js";

const Home = ({listData, setListData}) => {
  const [show, SetShow] = useState(1);
  const handleShow1 = () => SetShow(1);
  const handleShow2 = () => SetShow(2);
  const handleShow3 = () => SetShow(3);
  const handleShow4 = () => SetShow(4);
  console.log(show)
  const displayCase = () => {
    switch (show) {
      case 1: return <Name listData={listData} setListData = {setListData}/>
      case 2: return <Telephone listData={listData} setListData = {setListData}/>
      case 3: return <Email listData={listData} setListData = {setListData}/>
      case 4: return <RUT listData={listData} setListData = {setListData}/>
      default: return <Name listData={listData} setListData = {setListData}/>
    }
  }

  return (
      <div className="container-fluid">
        <div className="SortSearchType">
          <button className="SortSearchButton" onClick={handleShow1}> Nombre </button>
          <button className="SortSearchButton" onClick={handleShow2}> Teléfono </button>
          <button className="SortSearchButton" onClick={handleShow3}> Email </button>
          <button className="SortSearchButton" onClick={handleShow4}> RUT </button>
        </div>
        <div className="Select_sort_out">
          {displayCase()}
        </div>
        <hr/>
        <div className="Sales_out">
          <Sales />
        </div>   
        <div className="footer">
          <Footer />          
        </div>  
      </div>
      );
};
      export default Home;
