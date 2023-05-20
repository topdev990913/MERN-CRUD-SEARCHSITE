import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logoURL from "../images/header-topright.png";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./CommonStyles.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from 'react';
// import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from "react-bootstrap/Stack";
import { useDispatch } from "react-redux";
import { login } from "../actions/authActions";
<link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
/>;

const Login = () => {
    const dispatch = useDispatch()
    const [Admin_user, setAdmin_user] = useState()
    const [Admin_pass, setAdmin_pass] = useState()
    const handleChangeUser = (e) => setAdmin_user(e.target.value)
    const handleChangePass = (e) => setAdmin_pass(e.target.value)
    const onSubmit = () => {
        dispatch(login(Admin_user, Admin_pass))
    }

    return (
        <div className="container-fluid">
            <Navbar
                bg="light"
                expand="lg"
                fixed="top"
                style={{ boxShadow: "0 4px 20px 0 rgba(0.4,0.5,0.8,0.1)", opacity: "0.9" }}
            >
                <Container fluid>
                    <Stack
                        direction="horizontal"
                        gap={3}
                        sticky="top"
                        style={{
                            width: "100%",
                            justifyContent: "space-between",
                            textAlign: "center",
                        }}
                    >
                        <div className="rotate">
                            <h1 className="companyname"><img src={logoURL} alt="flag" className="iconinsert1" />buscarpersona.cl</h1>
                        </div>
                        <div className="ms-auto" style={{ marginRight: "80px" }}>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <NavLink to="" style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                        <div style={{ textDecoration: "none" }}>
                                            {" "}
                                            <Dropdown>
                                                <div className="Dropdown_button">
                                                    <div className="Button_text">
                                                        <Dropdown.Toggle variant="transparent" id="dropdown-basic" className="Button_hover">
                                                            SOLUCIONES
                                                        </Dropdown.Toggle>
                                                    </div>
                                                </div>

                                                <Dropdown.Menu style={{ backgroundColor: "white" }}>
                                                    <Dropdown.Item href="#/action-1" className="Dropdownitem">Our Impact</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2" className="Dropdownitem">Backing charities</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3" className="Dropdownitem">-Charity partners</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-4" className="Dropdownitem">Funds</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-5" className="Dropdownitem">-Connect Funds</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-6" className="Dropdownitem">-Engage Fund</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-7" className="Dropdownitem">Founded by Impetus</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-8" className="Dropdownitem">-Education Endowment Foundation</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-9" className="Dropdownitem">-Leadership Academy</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-10" className="Dropdownitem">-Youth Endowment Fund</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-11" className="Dropdownitem">-Youth Employment Group</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            {" "}
                                        </div>
                                    </NavLink>
                                    <NavLink to="#" style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                        <button className="NavbarButton"> PERECIOS </button>
                                    </NavLink>
                                    <NavLink to="#" style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                        <button className="NavbarButton"> BLOG </button>
                                    </NavLink>
                                    <NavLink to="#" style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                        <button className="NavbarButton"> APOYO </button>
                                    </NavLink>
                                    <NavLink to="#" style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                        <button className="NavbarButton"> ACCESO </button>
                                    </NavLink>
                                    <NavLink to="/" style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                        <button className="NavbarButton1"> HOGAR </button>
                                    </NavLink>

                                    <Navbar.Brand to="/"> <img src={logoURL} alt="flag" className="iconinsert" /> </Navbar.Brand>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </Stack>
                </Container>
            </Navbar>
            <div className="Login_Background">
                <div className="SignIn">
                    Iniciar sesión
                </div>
                <div className="Authen_out">
                    <input type="text" alt="user" placeholder="Correo electrónico" className="Authentification" value={Admin_user} onChange={handleChangeUser} />
                </div>
                <div className="Authen_out">
                    <input type="password" alt="pass" placeholder="Contraseña" className="Authentification" value={Admin_pass} onChange={handleChangePass} />
                </div>
                <div className="Signin_btn">
                    <button className="Signin_button" onClick={onSubmit}>Iniciar sesión</button>
                    {/* DoKabi */}
                </div>
                <div className="Signin_text">
                    ¿Olvidaste tu contraseña?
                </div>
                <div className="Signin_text">
                    Enviar un enlace de inicio de sesión único
                </div>
                <div className="Signin_text">
                    ¿No estás seguro de qué correo electrónico usaste?
                </div >
            </div>
        </div>
    );
};
export default Login;
