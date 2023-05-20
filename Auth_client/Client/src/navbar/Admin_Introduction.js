import React from "react";
import "./Admin.css";
import { Link } from "react-router-dom";
const AdminIntroduction = () => {
    return (
        <div className="Admin_item_background">
            <div className="Admin_Upload_Title">
                <span>I</span><span>n</span><span>t</span><span>r</span><span>o</span><span>d</span><span>u</span><span>c</span><span>c</span><span>i</span><span>ó</span><span>n </span> <span> a</span> <span>l</span><span>o</span><span>s</span> <span>p</span><span>a</span><span>n</span><span>e</span><span>l</span><span>e</span><span>s</span> <span>d</span><span>e</span> <span>a</span><span>d</span><span>m</span><span>i</span><span>n</span><span>i</span><span>s</span><span>t</span><span>r</span><span>a</span><span>d</span><span>o</span><span>r</span>
            </div>
            <div className="Admin_Upload_text">
                Los administradores y usuarios avanzados tienen acceso a funciones de informes adicionales que les permiten evaluar la actividad de la escuela, el maestro y el estudiante en <span style={{ color: "red" }}>buscarpersona.cl</span> e invitar a usuarios adicionales a la suscripción de su escuela o distrito.
            </div>
            <div className="Admin_Bottom_text">
                Si eres administrador (o usuario avanzado), cuando ingresas a <span style={{ color: "red" }}>buscarpersona.cl</span>, puedes subir los datos de las personas a la base de datos.
            </div>
            <div className="Admin_Goto_Button">
                <div className="col-6">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Link to="/"><button className="getting_startted"> A la página de inicio </button></Link>
                    </div>
                </div>
                <div className="col-6">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Link to='/AdminEdit'><button className="getting_startted"> Para cargar la página </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AdminIntroduction;
