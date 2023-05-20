import React from "react";
import "./pages.css";
import EmailImage from "../images/8ad4f4caac00ecfa5b9b13a060fbdd92.svg";
import PhoneImage from "../images/fb27c4a0cb59c5057d5ae5600ce5fbc3.svg";
import DateImage from "../images/8a580064aeed1e9ec92a93d2e54ee5e7.svg";
import FaceBookImage from "../images/11a41217cc1546a4c5ca7f24078bd2ea.svg";
import LinkedInImage from "../images/8650a36783fab00c7c1354f3ed4780bc.svg";
import TwitterImage from "../images/ebc4071777ebb3bf301ef5c0ba02e754.svg";

const Footer = () => {
    return (
        <div className="Footer_background">
            <div className="container-fluid">
                <div className="name_title" style={{ margintTop: "50px" }}>
                    Cierre ventas más rápido, <br />impulsado por nuestros datos
                </div>
                <div className="name_subtitle">
                    Vea cómo tener datos de contacto más precisos al alcance de su mano puede ayudarlo <br /> a ahorrar tiempoen la prospección y dedicar más tiempo a cerrar la venta.
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button className="getting_startted"> Empezando </button>
                </div>
                <div className="row" style={{ paddingLeft: "80px", paddingRight: "70px", marginTop: "78px" }}>
                    <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12" style={{ position: "left" }}>
                        <div className="Footer_title">
                            SOBRE NOSOTRAS
                        </div>
                        <div className="Footer_item" style={{ marginTop: "20px" }}>
                            Acerca de PeopleSmart
                        </div>
                        <div className="Footer_item">
                            Afiliadas
                        </div>
                        <div className="Footer_item">
                            Blog
                        </div>
                        <div className="Footer_item">
                            Carreras
                        </div>

                    </div>
                    <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                        <div className="Footer_title">
                            SOLUCIONES
                        </div>
                        <div className="Footer_item" style={{ marginTop: "20px" }}>
                            Búsqueda de contactos
                        </div>
                        <div className="Footer_item">
                            Enriquecimiento de prospectos
                        </div>
                        <div className="Footer_item">
                            Nuestros datos
                        </div>
                        <div className="Footer_item">
                            teléfono de búsqueda inversa
                        </div>
                        <div className="Footer_item">
                            Búsqueda de correo electrónico
                        </div>
                        <div className="Footer_item">
                            Extensión de cromo
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                        <div className="Footer_title">
                            AYUDA
                        </div>
                        <div className="Footer_item" style={{ marginTop: "20px" }}>
                            Contacta con nosotras
                        </div>
                        <div className="Footer_item">
                            Centro de ayuda
                        </div>
                        <div className="Footer_item">
                            No vender mi
                        </div>
                        <div className="Footer_item">
                            Informacion personal
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div className="Footer_title">
                            NAVEGAR
                        </div>
                        <div className="Footer_item" style={{ marginTop: "20px" }}>
                            mapa del sitio
                        </div>
                        <div className="Footer_item">
                            DIRECTORIO DE EMPRESAS
                        </div>
                        <div className="Footer_item">
                            A
                            B
                            C
                            DE
                            FG
                            HI
                            JKL
                            M
                            NO
                            P
                            QR
                            S
                            T
                            UVWXYZ
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div className="Footer_title">
                            CONTACTO
                        </div>
                        <div className="Footer_item" style={{ marginTop: "20px" }}>
                            <img src={EmailImage} alt="flag" className="socialInsert" />support@peoplesmart.com
                        </div>
                        <div className="Footer_item">
                            <img src={PhoneImage} alt="flag" className="socialInsert" />1-267-846-5087
                        </div>
                        <div className="Footer_item">
                            <img src={DateImage} alt="flag" className="socialInsert" />Open daily 6 am - 11:30 pm EST.
                        </div>
                        <div className="Footer_item">
                            <img src={FaceBookImage} alt="flag" className="socialLinkInsert" /><img src={LinkedInImage} alt="flag" className="socialLinkInsert" /><img src={TwitterImage} alt="flag" className="socialLinkInsert" />
                        </div>
                    </div>
                    <div className="Footer_description">
                        En PeopleSmart, nuestra misión es ayudar a las empresas a aprovechar los datos de contactos profesionales para hacer crecer su negocio. PeopleSmart no brinda servicios de investigación privada ni informes de consumidores, y no es una agencia de informes de consumidores según se define en la Ley de informes crediticios justos. No puede utilizar nuestro servicio o la información proporcionada para tomar decisiones sobre empleo, admisión, crédito al consumo, seguros, selección de inquilinos o cualquier otro propósito que requiera el cumplimiento de la FCRA.
                    </div>
                    <div style={{marginTop: "5px"}}>
                        © 2023 PeopleSmart LLC. All rights reserved.
                    </div>
                </div>


            </div>
        </div>
    );
};
export default Footer;
