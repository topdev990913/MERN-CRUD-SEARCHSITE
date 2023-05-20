import React from "react";
import './Admin.css';
import Admin_option_Logo from '../images/Upload_image.png'
import { useState } from 'react';
import Admin_Back_Logo from '../images/Back.png'
import AdminUpload from "./Admin_upload";
import AdminUploadCsv from "./AdminUploadCsv";
import AdminIntroduction from "./Admin_Introduction";
import { useDispatch } from "react-redux";
import { logout } from "../actions/authActions";

const AdminPage = () => {
    const dispatch = useDispatch()
    const [AdminShow, SetAdminShow] = useState(1);
    const handleAdminShow1 = () => SetAdminShow(1);
    const handleAdminShow2 = () => SetAdminShow(2);
    const handleAdminShow3 = () => SetAdminShow(3);
    const displayAdmin = () => {
        switch (AdminShow) {
            case 1: return <AdminIntroduction />
            case 2: return <AdminUpload />
            case 3: return <AdminUploadCsv />
            default: return <AdminIntroduction />
        }
    }
    const handleSingout = () => {
        dispatch(logout())
    }
    return (
        <div>
            <div className="Admin_topbar">
                <div className="col-2">
                    <img src={Admin_Back_Logo} alt="flag" className="Admin_Back_Logo_insert" onClick={handleSingout} />
                </div>
                <div className="col-10 text_display">
                    Panel de administración
                </div>
            </div>

            <div className="row">
                <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12 Admin_option">
                    <button className="Admin_option_button" onClick={handleAdminShow1}> Introducción </button>
                    <button className="Admin_option_button" onClick={handleAdminShow2}> subiendo uno </button>
                    <button className="Admin_option_button" onClick={handleAdminShow3}> cargando CSV </button>
                    <img src={Admin_option_Logo} alt="flag" className="Admin_Option_Logo_insert" />
                </div>
                <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 Admin_items" style={{backgroundColor: "#c5dacd"}}>
                    {displayAdmin()}
                </div>
            </div>
        </div>
    );
};
export default AdminPage;
