import "./Navbar.css";

import React, { useLayoutEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default function Navbar({ onChangeView }) {
  const [width, height] = useWindowSize();

  var pos = 20;
  if (width > 800) {
    pos += Math.round((width - 800) / 2);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        top: 0,
        top: "20px",
        right: pos + "px",
        zIndex: 10000,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingRight: "0px",
          paddingTop: "0px",
        }}
      >
        <Hamburger onChangeView={onChangeView} />
      </div>
    </div>
  );
}

function Hamburger() {
  const navigate = useNavigate();

  //uncheck the css element controlling the side menu
  function unCheck() {
    var x = document.getElementsByClassName("checkbox");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].checked = false;
    }
  }

  const scrollDownHandler = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 500);
  };

  return (
    <>
      <label class="hamburger-menu">
        <input class="checkbox" type="checkbox" />
      </label>
      <aside class="sidebar">
        <div class="menu">
          <h1
            class="menuItem"
            onClick={() => {
              navigate("/home");
              unCheck();
            }}
          >
            Home
          </h1>
          <h1
            class="menuItem"
            onClick={() => {
              navigate("/services");
              unCheck();
            }}
          >
            Prices and Services
          </h1>
          <h1
            class="menuItem"
            onClick={() => {
              navigate("/");
              unCheck();
              scrollDownHandler();
              // window.scrollTo({
              //   top: document.documentElement.scrollHeight,
              //   behavior: "smooth",
              // });
            }}
          >
            Contact
          </h1>
        </div>
      </aside>
    </>
  );
}
