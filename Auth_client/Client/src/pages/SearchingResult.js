import React from "react";
import "./pages.css";
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logoURL from "../images/header-topright.png";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./CommonStyles.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from "react-bootstrap/Stack";

const SearchingResult = ({ listData, setListData }) => {
  console.log("listData in search", listData)
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
              <h1 className="companyname">
                <img src={logoURL} alt="flag" className="iconinsert1" />buscarpersona.cl</h1>
            </div>
            <div className="ms-auto" style={{ marginRight: "80px" }}>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavLink to="/" style={{ paddingLeft: "5px", paddingRight: "5px" }}>
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
                  <Link to="/LOGIN" style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                    <button className="NavbarButton1"> Empezar </button>
                  </Link>

                  <Navbar.Brand to="/"> <img src={logoURL} alt="flag" className="iconinsert" /> </Navbar.Brand>

                </Nav>
              </Navbar.Collapse>
            </div>
          </Stack>
        </Container>
      </Navbar>
      <div>
        <Table striped bordered hover style={{marginTop: "94px"}}>
          <thead>
            <tr>
              <th>NOMBRE</th>
              <th>DIRECCION</th>
              <th>COMUNA</th>
              <th>REGION</th>
              <th>SALUD</th>
              <th>Fec_Nac</th>
              <th>CORREO</th>
              <th>CELULAR</th>
              <th>RUT</th>
              <th>DV</th>
            </tr>
          </thead>
          <tbody>
            {
              listData?.map((item, index) => {
                return (
                  <tr key={index}>
                    <th>{item?.NOMBRE}</th>
                    <th>{item?.DIRECCION}</th>
                    <th>{item?.COMUNA}</th>
                    <th>{item?.REGION}</th>
                    <th>{item?.SALUD}</th>
                    <th>{item?.Fec_Nac}</th>
                    <th>{item?.CORREO}</th>
                    <th>{item?.CELULAR}</th>
                    <th>{item?.RUT}</th>
                    <th>{item?.DV}</th>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>

    </div>
  );
};
export default SearchingResult;
