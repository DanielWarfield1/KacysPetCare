import "../styles.css";
import DogTitle from "../Components/DogTitle.js";
import WindowSize from "../Components/WindowSize";
import ReviewSlider from "../Components/ReviewSlider";
import PopularServices from "../Components/PopularServices.js";
import SpecialtyServices from "../Components/SpecialtyServices.js";
import AboutKacy from "../Components/AboutKacy.js";
import ServicePriceButton from "../Components/ServicePriceButton.js";
import Certifications from "../Components/Certifications.js";
import Contact from "../Components/Contact.js";
import MadeByDaniel from "../Components/MadeByDaniel.js";

export default function HomePage() {
  return (
    <div>
      <DogTitle />
      <p style={{ padding: "20px" }}>
        Proudly Serving the Austin - Round Rock - Pflugerville Area
      </p>
      <ReviewSlider />
      <ReviewSlider isRight={true} />
      <PopularServices />
      <SpecialtyServices />
      <div style={{ height: "60px" }} />
      <ServicePriceButton />
      <div style={{ height: "20px" }} />
      <AboutKacy />
      <Certifications />
      <Contact />
      <MadeByDaniel />
    </div>
  );
}
