import React from "react";
import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default function SilverGoldImg(props) {
  let { height, width } = useWindowDimensions();

  let isH = width > 600;

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="Secondary"
        style={{
          margin: "20px",
          width: "100%",
          position: "relative",
          paddingLeft: "10px",
          paddingRight: "10px",
          paddingTop: "30px",
          borderRadius: "20px",
          paddingBottom: "20px",
        }}
      >
        <h2>{props.serviceName}</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ padding: "20px", width: "200px" }}>
            {props.description}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: isH === true ? "row" : "column",
          }}
        >
          <div style={{ width: isH === true ? "50%" : "auto" }}>
            <div
              style={{
                backgroundColor: "silver",
                position: "relative",
                marginLeft: "5%",
                marginRight: "5%",
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              <b>Silver</b>
            </div>
            <div style={{ padding: "40px" }}>{props.silverInfo}</div>
          </div>
          <div
            style={{
              displat: "flex",
              justifyContent: "center",
            }}
          >
            <img
              style={{
                maxHeight: "400px",
                maxWidth: "80%",
                borderRadius: "100px",
                marginBottom: "40px",
                flexGrow: 4,
              }}
              src={props.image}
            />
          </div>
          <div style={{ width: isH === true ? "50%" : "auto" }}>
            <div
              style={{
                backgroundColor: "gold",
                position: "relative",
                marginLeft: "5%",
                marginRight: "5%",
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              <b>Gold</b>
            </div>
            <div style={{ padding: "40px" }}>{props.goldInfo}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
