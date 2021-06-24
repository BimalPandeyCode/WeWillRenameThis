import "../../css/style.css";

import React from "react";


    const signInPage = () => {
        return ( 
          <div className="signup">
              <h1 className="signup__heading">Sign Up</h1>
              <p className="signup__paragraph">It's quick and easy</p>
              <div className="signup__inputs">
                  <input type="text" placeholder="First name" className="signup__inputs__firstname" />
                  <input type="text" placeholder="Last name" className="signup__inputs__lastname" />
                  <input type="text" placeholder="Mobile number or email" className="signup__inputs__email" />
                  <input type="text" placeholder="New password" className="signup__inputs__password" />
                  <p className="signup__paragraph">Birthday:</p>
                  <input type="date" className="signup__inputs__birthday" />
                  <p className="signup__paragraph">Gender:</p>
                  <div className="signup__inputs__gender">
                      Female  <input type="checkbox" className="signup__inputs__gender__checkbox"/>
                  </div>
                  <div className="signup__inputs__gender">
                      Male  <input type="checkbox" className="signup__inputs__gender__checkbox"/>
                  </div>
                  <div className="signup__inputs__gender">
                      custom  <input type="checkbox" className="signup__inputs__gender__checkbox"/>
                  </div>
                 <div className="btn btn-anchorgreen">
                     <button ><span className="text-white">Sign Up</span></button>
                 </div>
              
              </div>
          </div>
        
        )
      }
   



export default signInPage;