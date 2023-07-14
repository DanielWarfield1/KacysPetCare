import "./styles.css";
import Navbar from "./Components/Navbar.js";
import DogTitle from "./Components/DogTitle.js";

function onChangeView(view) {
  window.scrollTo(0, 0);
  setCurrentView(view);
  console.log("Changed View To Home");
}

export default function App() {
  return (
    <div className="App">
      <div>
        <Navbar onChangeView={onChangeView} />
      </div>
      <DogTitle />
      <div style={{ height: "1000px" }}></div>
    </div>
  );
}
