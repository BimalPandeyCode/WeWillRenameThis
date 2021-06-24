import React from 'react';
import img from '../../img/pexels-pixabay-60597.jpg';

const Photos = () => {
    return (
        <div className="profile_container-1">
        <h1 className="profile__photos__heading">Photos</h1>
        <div className="row ">
            <div className="col-1-of-3 ">
                <img src={img} alt="images" className="profile__photos" />
            </div>
            <div className="col-1-of-3">
                <img src={img} alt="images" className="profile__photos" />
            </div>
            <div className="col-1-of-3">
                <img src={img} alt="images" className="profile__photos" /> 
              </div>
        </div>
        <div className="row ">
            <div className="col-1-of-3 ">
                <img src={img} alt="images" className="profile__photos" />
            </div>
            <div className="col-1-of-3">
                <img src={img} alt="images" className="profile__photos" />
            </div>
            <div className="col-1-of-3">
                <img src={img} alt="images" className="profile__photos" /> 
              </div>
        </div>
        <div className="row ">
        <div className="row ">
            <div className="col-1-of-3 ">
                <img src={img} alt="images" className="profile__photos" />
            </div>
            <div className="col-1-of-3">
                <img src={img} alt="images" className="profile__photos" />
            </div>
            <div className="col-1-of-3">
                <img src={img} alt="images" className="profile__photos" /> 
              </div>
        </div>
        </div>
    </div>
    )
}

export default Photos
