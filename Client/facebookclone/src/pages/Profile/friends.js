import React from 'react';
import img from '../../img/pexels-pixabay-60597.jpg';

const Friends = () => {
    return (
        <div className="profile_container-2">
        <h1 className="profile__photos__heading">Friends</h1>
        <p className="profile__photos__paragraph">1918</p>
        <div className="row ">
            <div className="col-1-of-3 ">
                <img src={img} alt="images" className="profile__photos" />
                <h4 className="profile__photos__profile-name">Hello world</h4>
            </div>
            <div className="col-1-of-3">
                <img src={img} alt="images" className="profile__photos" />
                <h4 className="profile__photos__profile-name">Hello world</h4>
            </div>
            <div className="col-1-of-3">
                <img src={img} alt="images" className="profile__photos" /> 
                <h4 className="profile__photos__profile-name">Hello world</h4>
              </div>
        </div>
        <div className="row ">
            <div className="col-1-of-3 ">
                <img src={img} alt="images" className="profile__photos" />
                <h4 className="profile__photos__profile-name">Hello world</h4>
            </div>
            <div className="col-1-of-3">
                <img src={img} alt="images" className="profile__photos" />
                <h4 className="profile__photos__profile-name">Hello world</h4>
            </div>
            <div className="col-1-of-3">
                <img src={img} alt="images" className="profile__photos" /> 
                <h4 className="profile__photos__profile-name">Hello world</h4>
              </div>
        </div>
        <div className="row ">
            <div className="col-1-of-3 ">
                <img src={img} alt="images" className="profile__photos" />
                <h4 className="profile__photos__profile-name">Hello world</h4>
            </div>
            <div className="col-1-of-3">
                <img src={img} alt="images" className="profile__photos" />
                <h4 className="profile__photos__profile-name">Hello world</h4>
            </div>
            <div className="col-1-of-3">
                <img src={img} alt="images" className="profile__photos" /> 
                <h4 className="profile__photos__profile-name">Hello world</h4>
              </div>
        </div>
    </div>
    )
}

export default Friends;
