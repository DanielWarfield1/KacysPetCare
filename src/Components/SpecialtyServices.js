export default function SpecialtyServices() {
  return (
    <div style={{ position: "relative" }}>
      <div
        className="Secondary"
        style={{
          height: "40px",
          width: "60px",
          position: "absolute",
          bottom: "-30px",
          right: "50px",
          borderBottomLeftRadius: "60px",
          borderBottomRightRadius: "60px",
        }}
      ></div>
      <div
        className="Secondary"
        style={{
          height: "60px",
          width: "60px",
          top: "30px",
          position: "absolute",
          right: "20px",
          borderRadius: "60px",
        }}
      ></div>
      <div style={{ height: "60px" }} />
      <div
        className="Secondary"
        style={{ marginRight: "50px", borderTopRightRadius: "40px" }}
      >
        <div
          style={{
            maxWidth: "400px",
            marginRight: "0px",
            marginLeft: "auto",
          }}
        >
          <h2 style={{ padding: "20px" }}>Specialty Services</h2>
          <p
            style={{
              paddingRight: "60px",
              paddingBottom: "40px",
            }}
          >
            <ul
              style={{
                textAlign: "right",
                listStyleType: "circle",
                fontSize: "20px",
                direction: "rtl",
              }}
            >
              <li>Senior Dog Care</li>
              <li>Large Dog Care</li>
              <li>Temperamental Pet Care</li>
              <li>Multi-Pet Care</li>
              <li>Enrichment Activities</li>
              <li>Homemade Treats</li>
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
          right: "50px",
          boxShadow: "None",
        }}
      />
    </div>
  );
}
