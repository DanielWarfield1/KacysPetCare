import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

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

export default function WindowSize() {
  const { height, width } = useWindowDimensions();

  return (
    <div style={{ zIndex: 0 }}>
      width: {width} ~ height: {height} ~ ratio: {height / width} ~ should be around 1.77
    </div>
  );
}
