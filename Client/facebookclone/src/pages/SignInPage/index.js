import "../../css/style.css";

import React, { useState } from "react";
import axios from "axios";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    date: "",
    gender: "",
  });
  const { firstname, lastname, email, password, date } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify({
        firstname,
        lastname,
        email,
        password,
        date,
      });
      console.log(body);
      const res = await axios.post(
        "http://localhost:4000/api/user",
        body,
        config
      );
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="signup">
      <h1 className="signup__heading">Sign Up</h1>
      <p className="signup__paragraph">It's quick and easy</p>
      <form className="signup__inputs" onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="First name"
          className="signup__inputs__firstname"
          name="firstname"
          value={firstname}
          onChange={(e) => onChange(e)}
        />
        <input
          type="text"
          placeholder="Last name"
          className="signup__inputs__lastname"
          name="lastname"
          value={lastname}
          onChange={(e) => onChange(e)}
        />
        <input
          type="email"
          placeholder="Email address"
          className="signup__inputs__email"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
        />
        <input
          type="password"
          placeholder="New password"
          className="signup__inputs__password"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
        />
        <p className="signup__paragraph">Birthday:</p>
        <input
          type="date"
          className="signup__inputs__birthday"
          name="date"
          value={date}
          onChange={(e) => onChange(e)}
        />
        <p className="signup__paragraph">Gender:</p>
        <div className="signup__inputs__gender">
          Female{" "}
          <input
            type="radio"
            className="signup__inputs__gender__checkbox"
            name="gender"
            value="female"
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="signup__inputs__gender">
          Male{" "}
          <input
            type="radio"
            className="signup__inputs__gender__checkbox"
            name="gender"
            value="male"
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="signup__inputs__gender">
          custom{" "}
          <input
            type="radio"
            className="signup__inputs__gender__checkbox"
            name="gender"
            value="custom"
            onChange={(e) => onChange(e)}
          />
        </div>

        <input type="submit" className="btn btn-anchorgreen" value="Register" />
      </form>
    </div>
  );
};

export default SignInPage;
