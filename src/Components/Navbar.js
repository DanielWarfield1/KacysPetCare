import "./Navbar.css";

import React, { useLayoutEffect, useState } from "react";

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

function Hamburger({ onChangeView }) {
  return (
    <>
      <label class="hamburger-menu">
        <input type="checkbox" />
      </label>
      <aside class="sidebar">
        {/* <div>
          <div class="navElem" onClick={() => onChangeView("profileView")}>
            Profile
          </div>
          <div class="navElem" onClick={() => onChangeView("hireView")}>
            Contact
          </div>
          <div class="navElem" onClick={() => onChangeView("resumeView")}>
            Resume
          </div>
        </div> */}
      </aside>
    </>
  );
}
