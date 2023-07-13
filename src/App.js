import "./styles.css";
import Navbar from "./Components/Navbar.js";

function onChangeView(view) {
  window.scrollTo(0, 0);
  setCurrentView(view);
  console.log("Changed View To Home");
}

export default function App() {
  return (
    <div className="App" style={{ margin: 0, padding: 0 }}>
      <Navbar onChangeView={onChangeView} />
    </div>
  );
}
