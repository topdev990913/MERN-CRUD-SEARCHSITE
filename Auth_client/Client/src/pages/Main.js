import React from "react";
import "./pages.css";
import "../App.css";
import Header from "../navbar/navbar";
import Home from "../pages/Home";


const Main = ({listData, setListData}) => {
    return (
        <div className="background">
            <Header />
            <Home listData={listData} setListData = {setListData} />
        </div>
    );
};
export default Main;
