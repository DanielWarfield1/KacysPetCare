import "./Navbar.css";

export default function Navbar({ onChangeView }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 10000,
      }}
    >
      <div></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingRight: "0px",
          paddingTop: "0px",
        }}
      >
        <Hamburger onChangeView={onChangeView} />
      </div>
    </div>
  );
}

function Hamburger({ onChangeView }) {
  return (
    <>
      <label class="hamburger-menu">
        <input type="checkbox" />
      </label>
      <aside class="sidebar">
        {/* <div>
          <div class="navElem" onClick={() => onChangeView("profileView")}>
            Profile
          </div>
          <div class="navElem" onClick={() => onChangeView("hireView")}>
            Contact
          </div>
          <div class="navElem" onClick={() => onChangeView("resumeView")}>
            Resume
          </div>
        </div> */}
      </aside>
    </>
  );
}
