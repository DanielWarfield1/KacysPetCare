export default function PopularServices() {
  return (
    <div style={{ position: "relative" }}>
      <div
        className="Secondary"
        style={{
          height: "40px",
          width: "60px",
          position: "absolute",
          bottom: "-30px",
          left: "50px",
          borderBottomLeftRadius: "60px",
          borderBottomRightRadius: "60px",
        }}
      ></div>
      <div
        className="Secondary"
        style={{
          height: "60px",
          width: "60px",
          position: "relative",
          top: "30px",
          left: "20px",
          borderRadius: "60px",
        }}
      ></div>

      <div
        className="Secondary"
        style={{ marginLeft: "50px", borderTopLeftRadius: "40px" }}
      >
        <div style={{ maxWidth: "400px" }}>
          <h2 style={{ padding: "20px" }}>Popular Services</h2>
          <p
            style={{
              paddingLeft: "60px",
              paddingBottom: "40px",
            }}
          >
            <ul
              style={{
                textAlign: "left",
                listStyleType: "circle",
                fontSize: "20px",
              }}
            >
              <li>Visits</li>
              <li>Sitting/Overnight</li>
              <li>Dog Walking</li>
              <li>Boarding</li>
              <li>Excursions</li>
              <li>Grooming</li>
              <li>Transportation</li>
            </ul>
          </p>
        </div>
      </div>
      <div
        className="Secondary"
        style={{
          height: "20px",
          width: "80px",
          position: "absolute",
          bottom: "0px",
          left: "50px",
          boxShadow: "None",
        }}
      />
    </div>
  );
}
