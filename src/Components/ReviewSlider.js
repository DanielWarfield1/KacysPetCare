// Ref: https://codesandbox.io/s/throbbing-sound-c9w9b1

import { useRef, useEffect, useState, useLayoutEffect } from "react";
import Card from "./Card.js";
import { reviews } from "../Assets/DogReviews/reviewIndex.js";

export default function ReviewSlider(props) {
  const ref = useRef(null);
  const [containerWidth, setWidth] = useState(100 + "%");
  const [animationState, setPlay] = useState("paused");
  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.scrollWidth + "px");
      setPlay("running");
    }
  }, []);

  //randomly shuffling
  let rdisp = reviews
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  const renderCards = rdisp.map((el, index) => {
    return (
      <Card key={index} cardName={el.name} img={el.img} review={el.review} />
    );
  });

  return (
    <div className="ReviewSlider">
      <div
        className={props.isRight ? "d-flex-right" : "d-flex"}
        ref={ref}
        style={{
          width: `${containerWidth}`,
          animationPlayState: animationState,
        }}
      >
        {renderCards}
        {renderCards}
        {renderCards}
        {renderCards}
        {renderCards}
      </div>
    </div>
  );
}
