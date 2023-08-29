import "../styles.css";
import DogTitle from "../Components/DogTitle.js";
import MadeByDaniel from "../Components/MadeByDaniel.js";
import React from "react";
import SilverGoldImg from "../Components/SilverGoldImg.js";
import kacyProfile from "../Assets/kacyProfile.jpeg";
import spaDay from "../Assets/wigglySpa_ds.jpg";
import petVisit from "../Assets/averyVisit.jpg";
import kacyKennel from "../Assets/kacyKennel.jpg";

/////////////////////////////////////////
//pet visit
/////////////////////////////////////////
let pv_silver = (
  <p>
    <ul
      style={{
        textAlign: "left",
        listStyleType: "circle",
        fontSize: "20px",
      }}
    >
      <li>Feeding</li>
      <li>Play Time</li>
      <li>Potty Breaks</li>
      <li>Cuddles and Companionship</li>
      <li>Pictures and Updates</li>
      <li>Treats</li>
      <br />
      $35/day, one visit per day
      <br />
      <br />
      $55/day, two visits per day
    </ul>
  </p>
);
let pv_gold = (
  <p>
    <ul
      style={{
        textAlign: "left",
        listStyleType: "circle",
        fontSize: "20px",
      }}
    >
      Everything in Silver, Plus:
      <br />
      <br />
      <li>Basic Training</li>
      <li>30 minute walk or play</li>
      <li>Specialty Home-Made Treats</li>
      <li>Longer Visit Times</li>
      <li>Pictures and Video</li>
      <li>Detailed Update</li>
      <br />
      Upgrade to gold for an additional $5/visit
    </ul>
  </p>
);
let pv_description = (
  <p>
    Make sure your furry friend is safe and cared for with regular check-ins
  </p>
);

/////////////////////////////////////////
//Overnight Sitting
/////////////////////////////////////////
let os_silver = (
  <p>
    <ul
      style={{
        textAlign: "left",
        listStyleType: "circle",
        fontSize: "20px",
      }}
    >
      <li>Feeding</li>
      <li>Play Time</li>
      <li>Potty Breaks</li>
      <li>Cuddles and Companionship</li>
      <li>Pictures and Updates</li>
      <li>Treats</li>
      <li>Morning and Evening Routines</li>
      <li>10 hours over-night sitting</li>
      <li>4 hours of day time sitting</li>
      <br />
      $75/day
    </ul>
  </p>
);
let os_gold = (
  <p>
    <ul
      style={{
        textAlign: "left",
        listStyleType: "circle",
        fontSize: "20px",
      }}
    >
      Everything in Silver, Plus:
      <br />
      <br />
      <li>Basic Training</li>
      <li>30 minute walk or play</li>
      <li>Specialty Home-Made Treats</li>
      <li>Longer Visit Times</li>
      <li>Pictures and Video</li>
      <li>Detailed Update</li>
      <br />
      Upgrade to gold for an additional $10/day
    </ul>
  </p>
);
let os_description = <p>A sleepover for your pet!</p>;

/////////////////////////////////////////
//Grooming
/////////////////////////////////////////
let vsp_silver = (
  <p>
    <ul
      style={{
        textAlign: "left",
        listStyleType: "circle",
        fontSize: "20px",
      }}
    >
      We'll pick up your dog, wash them at a private spa, trim their nails, and
      bring them back sparkling clean!
      <br />
      <br />
      $120/spa day
    </ul>
  </p>
);

let vsp_gold = (
  <p>
    <ul
      style={{
        textAlign: "left",
        listStyleType: "circle",
        fontSize: "20px",
      }}
    >
      Everything in Silver, Plus:
      <br />
      <br />
      <li>A trip to a local dog park before cleaning</li>
      <li>A 2 week supply of home made skin and coat treats</li>
      <br />
      Upgrade to gold for an additional $30
    </ul>
  </p>
);

let vsp_description = <p>Luxury treatment for your precious pup!</p>;
/////////////////////////////////////////
//Page Definition
/////////////////////////////////////////
export default function Services() {
  return (
    <div>
      <DogTitle />
      <p style={{ padding: "20px" }}>
        Additional fees may apply based on number of pets or specialty
        conditions
      </p>
      <SilverGoldImg
        serviceName="Pet Visits"
        description={pv_description}
        silverInfo={pv_silver}
        goldInfo={pv_gold}
        image={petVisit}
      />
      <SilverGoldImg
        serviceName="Overnight Sitting"
        description={os_description}
        silverInfo={os_silver}
        goldInfo={os_gold}
        image={kacyKennel}
      />
      <SilverGoldImg
        serviceName="Valet Spa Day"
        description={vsp_description}
        silverInfo={vsp_silver}
        goldInfo={vsp_gold}
        image={spaDay}
      />
      <MadeByDaniel />
    </div>
  );
}
