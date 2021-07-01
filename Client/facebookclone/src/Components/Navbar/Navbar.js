import "./Navbar.css";
import React, { useState, useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increamentByValue } from "../../redux/reducers/exampleReducers";
const Navbar = () => {
  let reduxStoreNumber = useSelector((state) => state.exampleReducers); //! this reduxNumber variable stores the redux state
  const dispatch = useDispatch(); // !this is the dispatch function

  const [open, setOpen] = useState(false);

  const Dropdown = (props) => {
    const dropdownmenu = useRef(null);

    useEffect(() => {
      function handleOutsideClick(event) {
        if (
          dropdownmenu.current &&
          !dropdownmenu.current.contains(event.target)
        ) {
          setOpen(false);
        }
      }

      document.addEventListener("click", handleOutsideClick);
    }, [dropdownmenu]);
    return (
      <div className="Dropdown" ref={dropdownmenu}>
        {props.children}
      </div>
    );
  };

  const EachNotification = () => {
    return (
      <div className="NotificationDropDown__eachNotification">
        <div className="NotificationDropDown__eachNotification__imageContainer">
          <img
            className="NotificationDropDown__eachNotification__imageContainer__image"
            src="https://scontent.fktm6-1.fna.fbcdn.net/v/t1.6435-1/c17.0.100.100a/p100x100/122283142_689463975284897_6192283090834406267_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=goY93jDts0YAX-xTF7Q&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fktm6-1.fna&tp=27&oh=bfa92c8ed539effdd621db70c1ce2f13&oe=60DC3E7E"
            alt=""
          />
        </div>
        <div className="NotificationDropDown__eachNotification__notificationText">
          <p>What the notification is about and some extra info</p>
          {/* <br /> */}
          <span>3 hours ago</span>
        </div>
      </div>
    );
  };
  return (
    <nav className="navbar">
      <div className="navbar__title">
        <img
          className="navbar__title__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/d/de/Windows_live_square.JPG"
          alt="logo"
        />
      </div>
      <div className="navbar__searchbar">
        <div className="navbar__searchbar__inputHolder">
          <input
            type="text"
            className="navbar__searchbar__inputHolder__input"
            placeholder="Search in wewillrenamethis"
            value={reduxStoreNumber.number}
          />
          <div className="navbar__searchbar__inputHolder__searchButtonContainer">
            <Button
              type="button"
              variant="contained"
              component="label"
              className="navbar__searchbar__inputHolder__searchButtonContainer__button"
              onClick={() => {
                dispatch(increamentByValue(5)); // ! redux increameantByalue function is called
              }}
            >
              <i className="fas fa-search fa-2x"></i>
            </Button>
          </div>
        </div>
      </div>
      <div className="navbar__buttonsHolder">
        <div className="navbar__buttonsHolder__div">
          <Button
            type="button"
            variant="contained"
            component="label"
            className="navbar__buttonsHolder__div__button"
          >
            <i className="fas fa-home fa-2x"></i>
          </Button>
        </div>
      </div>
      <div className="navbar__personalInfoHolder">
        <div className="navbar__personalInfoHolder__buttonHolder">
          <Button
            className="navbar__personalInfoHolder__buttonHolder__button"
            type="button"
            variant="contained"
            component="label"
          >
            {/* profile */}
            <img
              className="navbar__personalInfoHolder__buttonHolder__button__image"
              src="https://scontent.fktm6-1.fna.fbcdn.net/v/t1.6435-1/c17.0.100.100a/p100x100/122283142_689463975284897_6192283090834406267_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=goY93jDts0YAX-xTF7Q&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fktm6-1.fna&tp=27&oh=bfa92c8ed539effdd621db70c1ce2f13&oe=60DC3E7E"
              alt=""
            />
          </Button>

          <Button
            className="navbar__personalInfoHolder__buttonHolder__button"
            type="button"
            variant="contained"
            component="label"
            style={
              open === "notification"
                ? {
                    backgroundColor: "#2d86ff",
                  }
                : {}
            }
            onClick={() =>
              open === "notification" ? setOpen(false) : setOpen("notification")
            }
          >
            {/* Notification */}
            <i className="fas fa-bell fa-2x"></i>
          </Button>
          {open === "notification" ? (
            <Dropdown>
              <div className="NotificationDropDown">
                <div className="NotificationDropDown__topbar">
                  Notifications
                </div>
                <EachNotification />
                <EachNotification />
                <EachNotification />
                <EachNotification />
                <EachNotification />
                <EachNotification />
                <EachNotification />
                <EachNotification />
                <EachNotification />
                <EachNotification />
              </div>
            </Dropdown>
          ) : (
            <></>
          )}
          <Button
            className="navbar__personalInfoHolder__buttonHolder__button"
            type="button"
            variant="contained"
            component="label"
            style={
              open === "account"
                ? {
                    backgroundColor: "#2d86ff",
                  }
                : {}
            }
            onClick={() =>
              open === "account" ? setOpen(false) : setOpen("account")
            }
          >
            {/* accountinfo */}
            <i className="fas fa-sort-down fa-2x"></i>
          </Button>
          {open === "account" ? (
            <Dropdown>
              <div className="Dropdown__buttonHolder">
                <Button
                  type="button"
                  variant="contained"
                  className="Dropdown__buttonHolder__profilebutton"
                >
                  <img
                    className="Dropdown__buttonHolder__profilebutton__imageContainer__image"
                    src="https://scontent.fktm6-1.fna.fbcdn.net/v/t1.6435-1/c17.0.100.100a/p100x100/122283142_689463975284897_6192283090834406267_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=goY93jDts0YAX-xTF7Q&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fktm6-1.fna&tp=27&oh=bfa92c8ed539effdd621db70c1ce2f13&oe=60DC3E7E"
                    alt=""
                  />
                  <p className="Dropdown__buttonHolder__profilebutton__text">
                    see your profile
                  </p>
                </Button>
                <Button
                  type="button"
                  variant="contained"
                  className="Dropdown__buttonHolder__button"
                >
                  settings
                </Button>
                <Button
                  type="button"
                  variant="contained"
                  className="Dropdown__buttonHolder__button"
                >
                  Log out
                </Button>
              </div>
            </Dropdown>
          ) : (
            <></>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
