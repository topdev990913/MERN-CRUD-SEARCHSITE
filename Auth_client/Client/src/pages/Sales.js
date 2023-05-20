import React from "react";
import "./pages.css";
import SalesLogo from "../images/Sales.svg";
import MarketingLogo from "../images/Marketing.svg";
import recruitmentLogo from "../images/Recruiting.svg";
import Adrian from "../images/9cf9d41e3b1b282be9ca57c72afabf5d.svg";
import Update from "../images/f13edc595a6ad26f82a107f90bf859b3.svg";
import Value from "../images/ddf6b2556228806f29b7aaa8aef0700a.svg";
import ValueImage from "../images/2ff9b823001870686796aa68fbdf1a34.svg";
import PotentialImage from "../images/cfde1a4027036c7eb334d3a68eab4053.svg";
import Potential from "../images/8e115592201da4299a1d974347bf314b.svg";
import SeamlessImage from "../images/abd2adc144378419ae372ec3791f5581.svg";
import Seamless from "../images/70f9a8afc203a86b1daa71d2cbd3bf3f.svg";



const Sales = () => {
    return (
        <div className="Middle_background">
            <div className="container-fluid">
                <div className="Sales_title">
                    Miles de profesionales confían en <br /> buscarpersona para hacer crecer su negocio
                </div>
                <div className="Sales_subtitle">
                    Contactos para generar más clientes potenciales, ventas e ingresos. Aproveche nuestros <br />datos para llegar a más tomadores de decisiones en menos tiempo, a una fracción del costo.
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 card_out">
                        <div className="Sales_image">
                            <img src={SalesLogo} alt="flag" className="logoinsert" />
                        </div>
                        <div className="Sales_Title">
                            Ventas
                        </div>
                        <div className="Sales_text">
                            Busque nuevos clientes potenciales en su mercado objetivo y llegue a nuevos prospectos. Lleve su prospección y generación de prospectos al siguiente nivel con la puntuación de mejor coincidencia.
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 card_out">
                        <div className="Sales_image">
                            <img src={MarketingLogo} alt="flag" className="logoinsert" />
                        </div>
                        <div className="Sales_Title">
                            Marketing
                        </div>
                        <div className="Sales_text">
                            Ayude a identificar posibles oportunidades de asociación, periodistas, blogueros y otros socios que puedan ayudar a correr la voz acerca de su negocio.
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 card_out">
                        <div className="Sales_image">
                            <img src={recruitmentLogo} alt="flag" className="logoinsert" />
                        </div>
                        <div className="Sales_Title">
                            Reclutamiento
                        </div>
                        <div className="Sales_text">
                            Ayude a encontrar rápidamente los correos electrónicos de contacto personales y profesionales de los mejores talentos. ¡Todo lo que necesita es una página de LinkedIn y nosotros haremos el resto!
                        </div>
                    </div>

                </div>
                <div className="Sales_title">
                    Haga crecer su negocio con datos <br />de contacto
                    A una fracción del costo
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{ display: "flex", justifyContent: "center" }}>
                        <img src={Adrian} alt="flag" className="imageInsert" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{ display: "flex", justifyContent: "center" }}>
                        <div className="container List_out">
                            <div className="row">
                                <div className="col-2" style={{ display: "flex", justifyContent: "right" }}>
                                    <img src={Update} alt="flag" className="imageInsert" />
                                </div>
                                <div className="col-10" style={{ marginTop: "163px", display: "flex", justifyContent: "left" }}>
                                    <div className="UptoDate">A HOY</div>
                                </div>
                            </div>
                            <div className="Email_List">
                                crear lista de correo electronico
                            </div>
                            <div className="Email_text">
                                Reúna rápidamente listas de clientes potenciales específicas, completas con la mejor información de contacto disponible. Sus resultados se clasifican por nivel de confianza, por lo que puede pasar menos tiempo buscando y más tiempo vendiendo.
                            </div>
                            <div className="getting_started_out">
                            <button className="getting_startted"> Empezando </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{ display: "flex", justifyContent: "right" }}>
                        <div className="container List_out">
                            <div className="row">
                                <div className="col-2" style={{ display: "flex", justifyContent: "right" }}>
                                    <img src={Value} alt="flag" className="imageInsert" />
                                </div>
                                <div className="col-10" style={{ marginTop: "163px", display: "flex", justifyContent: "left" }}>
                                    <div className="UptoDate">MEJOR VALOR</div>
                                </div>
                            </div>
                            <div className="Email_List">
                                Datos esenciales, por menos
                            </div>
                            <div className="Email_text">
                                Perfecto para empresas de cualquier tamaño. Obtenga acceso a datos de calidad para conectarse a su próxima gran venta. Puede buscar por nombre, empresa, número de teléfono o perfil de LinkedIn para ayudarlo a encontrar información detallada sobre sus prospectos. Todo a una fracción del costo de las soluciones de la competencia.
                            </div>
                            <div className="getting_started_out">
                            <button className="getting_startted"> Empezando </button>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{ display: "flex", justifyContent: "center" }}>
                        <img src={ValueImage} alt="flag" className="imageInsert" />
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{ display: "flex", justifyContent: "center" }}>
                        <img src={PotentialImage} alt="flag" className="imageInsert" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{ display: "flex", justifyContent: "center"}}>
                        <div className="container List_out">
                            <div className="row">
                                <div className="col-2" style={{ display: "flex", justifyContent: "right" }}>
                                    <img src={Potential} alt="flag" className="imageInsert" />
                                </div>
                                <div className="col-10" style={{ marginTop: "163px", display: "flex", justifyContent: "left" }}>
                                    <div className="UptoDate">PERSPECTIVAS PERSPECTIVAS</div>
                                </div>
                            </div>
                            <div className="Email_List">
                                Conozca a sus clientes potenciales
                            </div>
                            <div className="Email_text">
                                Aproveche más que solo la información de contacto básica. Entiende a tus potenciales clientes y sus necesidades con amplios perfiles profesionales.

                                Ya sea que esté buscando nuevas ventas, actualizar sus listas de contactos o mejorar los datos de su empresa, lo tenemos cubierto.
                            </div>
                            <div className="getting_started_out">
                            <button className="getting_startted"> Empezando </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{ display: "flex", justifyContent: "center"}}>
                        <div className="container List_out">
                            <div className="row">
                                <div className="col-2" style={{ display: "flex", justifyContent: "right" }}>
                                    <img src={Seamless} alt="flag" className="imageInsert" />
                                </div>
                                <div className="col-10" style={{ marginTop: "163px", display: "flex", justifyContent: "left" }}>
                                    <div className="UptoDate">INTEGRACIONES PERFECTAS</div>
                                </div>
                            </div>
                            <div className="Email_List">
                                Conéctese a sus herramientas existentes
                            </div>
                            <div className="Email_text">
                                Nuestra extensión de Chrome puede ayudar a encontrar datos adicionales sobre prospectos de LinkedIn, mientras que nuestra integración de Zapier se conecta con miles de aplicaciones, desde Salesforce y Hubspot hasta Gmail y Mailchimp, sin necesidad de codificación.
                            </div>
                            <div className="getting_started_out">
                            <button className="getting_startted"> Empezando </button>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{ display: "flex", justifyContent: "center" }}>
                        <img src={SeamlessImage} alt="flag" className="imageInsert" />
                    </div>
                </div>




            </div>
        </div>
    );
};
export default Sales;
