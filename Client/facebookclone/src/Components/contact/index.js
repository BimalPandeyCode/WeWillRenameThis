import React from 'react'
import img from '../../img/pexels-pixabay-60597.jpg';
import "../../css/style.css";


const Contact = () => {
    return (
        <div className="contact">
        <img src={img} alt="img" className="contact__image" />
        <h7 className="contact__name">Pasang sherpa</h7>
    </div>
    )
}

export default Contact;
