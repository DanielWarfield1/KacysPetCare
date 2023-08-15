import Sketch from "react-p5";
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

let height = 2500;
let frame_iter = 0;
export default (props) => {
  let { height_, width } = useWindowDimensions();

  const setup = (p5, parentRef) => {
    if (width < 800) {
      p5.createCanvas(width, height).parent(parentRef);
    } else {
      p5.createCanvas(800, height).parent(parentRef);
    }
  };

  const draw = (p5) => {
    frame_iter += 1;

    //erase all
    p5.clear();

    //clipping width to be processing canvas width
    if (width > 800) {
      width = 800;
    }

    //defining frame wise values
    let rot = p5.sin(frame_iter / 240) / 2;
    let shift = p5.sin(frame_iter / 240) * 10;

    // =====================
    // Popular Services Pond
    // =====================

    //defining horizontal offset
    let xoff;
    if (width < 600) {
      xoff = 0;
    } else {
      if (width < 800) {
        xoff = width - 600;
      } else {
        xoff = 800 - 600;
      }
    }

    let fills = ["#24B0FF", "#53C1FF", "#74CDFF"];

    for (let i = 0; i < fills.length; i++) {
      p5.fill(fills[i]);
      p5.noStroke();
      p5.beginShape();
      p5.curveVertex(0, 70 + i * (20 + shift));
      p5.curveVertex(1, 70 + i * (20 + shift));
      p5.curveVertex(300 + xoff - i * (20 + shift), 100);
      p5.curveVertex(250 + xoff - i * (20 + shift), 300 - i * (5 + shift));
      p5.curveVertex(100 + xoff - i * (20 + shift), 350 - i * (20 + shift));
      p5.curveVertex(100 + xoff - i * (20 + shift), 500 - (i + shift));
      p5.curveVertex(0, 550 - i * 10 - shift);
      p5.curveVertex(1, 550 - i * 10 - shift);
      p5.curveVertex(2, 100 - i * 10 - shift);
      p5.endShape();
    }

    p5.drawingContext.shadowOffsetX = 15;
    p5.drawingContext.shadowOffsetY = 30;
    p5.drawingContext.shadowBlur = 20;
    p5.drawingContext.shadowColor = "rgba(0, 0, 0, .1)";
    p5.drawingContext.shadowAlpha = 0.5;

    p5.fill("#1CBE0D");
    p5.arc(180 - shift + xoff / 3, 110, 20, 20, -1 + rot, 4 + rot);
    p5.arc(200 - shift + xoff / 3, 130, 30, 30, 0 + rot, 5 + rot);
    p5.arc(100 - shift, 250 + xoff / 3, 40, 40, -3 + rot, 2 + rot);
    p5.arc(70 - shift, 230 + xoff / 3, 20, 20, 0 + rot, 5 + rot);

    p5.fill(255, 255, 255);
    p5.textFont("Josefin Slab");
    p5.textSize(40);
    p5.text("Popular\nServices", 80 - shift / 2, 170);

    p5.drawingContext.shadowOffsetX = 0;
    p5.drawingContext.shadowOffsetY = 0;
    p5.drawingContext.shadowBlur = 0;
    p5.drawingContext.shadowColor = "black";

    // =====================
    // Pet Visits
    // =====================

    let yorigin = 400;
    for (let i = 0; i < fills.length; i++) {
      p5.fill(fills[i]);
      p5.noStroke();
      p5.beginShape();
      p5.curveVertex(width, yorigin);
      p5.curveVertex(width + 1, yorigin + i * (20 + shift));
      p5.curveVertex(width - 300 - xoff + i * (20 + shift), yorigin + 200);
      p5.curveVertex(width - 300 - xoff + i * (20 + shift), yorigin + 1000);
      p5.curveVertex(width - 0, yorigin + 1000 - i * (20 + shift));
      p5.curveVertex(width - 1, yorigin + 1000);
      p5.endShape();
    }

    p5.drawingContext.shadowOffsetX = 15;
    p5.drawingContext.shadowOffsetY = 30;
    p5.drawingContext.shadowBlur = 20;
    p5.drawingContext.shadowColor = "rgba(0, 0, 0, .1)";
    p5.drawingContext.shadowAlpha = 0.5;

    p5.fill("#1CBE0D");
    p5.arc(
      width + shift - 20 - xoff / 2,
      yorigin + 250,
      20,
      20,
      -1 + rot,
      4 + rot
    );
    p5.arc(
      width + shift - 50 - xoff / 2,
      yorigin + 240,
      30,
      30,
      0 + rot,
      5 + rot
    );
    p5.arc(
      width - 220 - xoff / 2 + shift / 2,
      yorigin + 205,
      40,
      40,
      -3 + rot,
      2 + rot
    );
    p5.arc(
      width - 200 - xoff / 2 + shift / 2,
      yorigin + 150,
      20,
      20,
      0 + rot,
      5 + rot
    );

    p5.fill(255, 255, 255);
    p5.textFont("Josefin Slab");
    p5.textSize(40);
    p5.text("Pet Visits", width - 200 - xoff / 2 + shift / 2, yorigin + 200);

    p5.textSize(18);
    p5.text(
      "Make sure your furry friend is safe with regular check-ins:\n\n ◦ Feeding\n ◦ Play Time\n ◦ Potty Breaks\n ◦ Cuddles and Companionship\n ◦ Pictures and Updates\n ◦ Treats\n\nRegular check-ins are $45 per/day for single check-ins or $60/day for twice a day check-ins.\n\nExtra special check-ins include:\n\n ◦ Basic Training\n ◦ 30 minute walk or play\n ◦ Specialty Home-Made Treats\n ◦ Longer Visit Times\n ◦ Pictures and Video\n ◦ Detailed Update\n\nExtra special check-ins are an additional $5 per visit.",
      width - 250 - xoff / 1.5,
      yorigin + 300,
      220 + xoff / 2,
      800
    );

    p5.drawingContext.shadowOffsetX = 0;
    p5.drawingContext.shadowOffsetY = 0;
    p5.drawingContext.shadowBlur = 0;
    p5.drawingContext.shadowColor = "black";

    // =====================
    // Over Night
    // =====================

    yorigin = 1400;

    for (let i = 0; i < fills.length; i++) {
      p5.fill(fills[i]);
      p5.noStroke();
      p5.beginShape();
      p5.curveVertex(0, 70 + i * (20 + shift) + yorigin);
      p5.curveVertex(1, 70 + i * (20 + shift) + yorigin);
      p5.curveVertex(300 + xoff - i * (20 + shift), 100 + yorigin);
      p5.curveVertex(
        300 + xoff - i * (20 + shift),
        200 - i * (5 + shift) + yorigin
      );
      p5.curveVertex(
        250 + xoff - i * (20 + shift),
        350 - i * (20 + shift) + yorigin
      );
      p5.curveVertex(
        250 + xoff - i * (20 + shift),
        1000 - i * 10 - shift + yorigin
      );
      p5.curveVertex(1, 1000 - i * 10 - shift + yorigin);
      p5.curveVertex(2, 1000 - i * 10 - shift + yorigin);
      p5.endShape();
    }

    p5.drawingContext.shadowOffsetX = 15;
    p5.drawingContext.shadowOffsetY = 30;
    p5.drawingContext.shadowBlur = 20;
    p5.drawingContext.shadowColor = "rgba(0, 0, 0, .1)";
    p5.drawingContext.shadowAlpha = 0.5;

    p5.fill("#1CBE0D");
    p5.arc(180 - shift + xoff / 3, 110, 20, 20, -1 + rot, 4 + rot);
    p5.arc(200 - shift + xoff / 3, 130, 30, 30, 0 + rot, 5 + rot);
    p5.arc(100 - shift, 250 + xoff / 3, 40, 40, -3 + rot, 2 + rot);
    p5.arc(70 - shift, 230 + xoff / 3, 20, 20, 0 + rot, 5 + rot);

    p5.fill(255, 255, 255);
    p5.textFont("Josefin Slab");
    p5.textSize(40);
    p5.text("Overnight\nSitting", 20 - shift / 2 + xoff / 2, yorigin + 170);

    p5.textSize(18);
    p5.text(
      "Make sure your furry friend is safe with regular check-ins:\n\n ◦ Feeding\n ◦ Play Time\n ◦ Potty Breaks\n ◦ Cuddles and Companionship\n ◦ Pictures and Updates\n ◦ Treats\n\nRegular check-ins are $45 per/day for single check-ins or $60/day for twice a day check-ins.\n\nExtra special check-ins include:\n\n ◦ Basic Training\n ◦ 30 minute walk or play\n ◦ Specialty Home-Made Treats\n ◦ Longer Visit Times\n ◦ Pictures and Video\n ◦ Detailed Update\n\nExtra special check-ins are an additional $5 per visit.",
      20 - shift / 2 + xoff / 2,
      yorigin + 250,
      220 + xoff / 2,
      800
    );

    p5.drawingContext.shadowOffsetX = 0;
    p5.drawingContext.shadowOffsetY = 0;
    p5.drawingContext.shadowBlur = 0;
    p5.drawingContext.shadowColor = "black";
  };

  const windowResized = (p5) => {
    if (width < 800) {
      p5.resizeCanvas(width, height);
    } else {
      p5.resizeCanvas(800, height);
    }
  };

  return (
    <div>
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </div>
  );
};
