// Ref: https://codesandbox.io/s/throbbing-sound-c9w9b1

import { useRef, useEffect, useState, useLayoutEffect } from "react";
import Card from "./Card.js";
import { all_reviews } from "../Assets/DogReviews/reviewIndex.js";

export default function ReviewSlider(props) {
  const ref = useRef(null);
  const [containerWidth, setWidth] = useState(100 + "%");
  const [animationState, setPlay] = useState("paused");

  //filtering review list based on isRight
  const half = Math.ceil(all_reviews.length / 2);
  let reviews;
  if (props.isRight) {
    reviews = all_reviews.slice(0, half);
  } else {
    reviews = all_reviews.slice(half);
  }

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
        {renderCards}
        {renderCards}
        {renderCards}
        {renderCards}
      </div>
    </div>
  );
}
