import React from "react";
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
//css
import "./info.css";

function Contacto() {
    return (
       <React.Fragment>
           <div className="container">
           <div className="row justify-content-center">
           <div className="col-5 mt-5 contact">
            <div className="titleContact">
            <p className="pt-5"><FontAwesomeIcon className="fa-4x" icon={ faPaperPlane } /> </p>
            <h1 className="pb-2">¡No dudes en contactarnos!</h1>
            </div>
            <div className="infoContact mb-5">
                <p className="pl-2">Para cualquier consulta nos pueden escribir al mail o al whatsapp.</p>
                <p className="pl-2">Siempre especificando el producto al que se refiere.</p>
                <p className="pl-2">Ayuda también si se aclara tamaño, colores y cualquier otra preferencia para agilizar el proceso de consulta.</p>
                <p className="pl-2"><FontAwesomeIcon className="fa-2x" icon={ faPhone } /> +(54) 11 5932 3828</p>
                <p className="pl-2"><FontAwesomeIcon className="fa-2x" icon={ faEnvelope } />  camilamarcosgalban@gmail.com</p>
            </div>
            </div>
           </div>
           </div>
       </React.Fragment>
     );
    
   }

export default Contacto;