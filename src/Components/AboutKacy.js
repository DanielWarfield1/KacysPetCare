import { useRef, useEffect, useState } from "react";

import kacyProfile from "../Assets/kacyProfile.jpeg";

export default function AboutKacy() {
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
          maxWidth: "500px",
          position: "relative",
          paddingLeft: "15px",
          paddingRight: "15px",
          paddingTop: "30px",
          borderRadius: "20px",
          paddingBottom: "20px",
        }}
      >
        <div
          className="Secondary"
          style={{
            height: "110px",
            width: "110px",
            top: "-20px",
            position: "absolute",
            right: "-10px",
            borderRadius: "60px",
            overflow: "hidden",
          }}
        >
          <img style={{ maxWidth: "100%" }} src={kacyProfile} />
        </div>
        <div style={{ textAlign: "left" }}>
          <h2
            style={{
              marginRight: "100px",
              textAlign: "right",
            }}
          >
            About Kacy
          </h2>
          <p
            style={{
              marginRight: "90px",
              textAlign: "right",
              fontSize: "12px",
              padding: "8px",
            }}
          >
            Dog Lover | Kennel Tech | Dog Sitter | Transport Expert
          </p>
          <p style={{ padding: "10px" }}>
            I have over 4 years of kennel tech experience and 6 years of animal
            care experience. I’m pet first aid certified with extensive
            experience caring for both dogs and cats! I'm comfortable and
            familiar with all personality types (energetic, anxious, etc),
            breeds, and sizes! <br />
            <br />
            Caring for animals is my passion and I would love to provide a warm
            and loving environment for any of your wonderful pets!
          </p>
        </div>
      </div>
    </div>
  );
}
