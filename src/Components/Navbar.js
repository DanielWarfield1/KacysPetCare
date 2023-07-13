import "./Navbar.css";

export default function Navbar({ onChangeView }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 10000,
      }}
    >
      <div></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingRight: "10px",
          paddingTop: "10px",
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
        <div>
          <div class="navElem" onClick={() => onChangeView("profileView")}>
            Profile
          </div>
          <div class="navElem" onClick={() => onChangeView("hireView")}>
            Contact
          </div>
          <div class="navElem" onClick={() => onChangeView("resumeView")}>
            Resume
          </div>
        </div>
      </aside>
    </>
  );
}
