export default function Contact() {
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
          width: "500px",
          position: "relative",
          paddingLeft: "10px",
          paddingRight: "10px",
          paddingTop: "30px",
          borderRadius: "20px",
          paddingBottom: "20px",
        }}
      >
        <h2>Contact</h2>
        <div
          style={{
            position: "relative",
            textAlign: "center",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "5px",
            paddingBottom: "5px",
          }}
        >
          <p>
            <br />
            Serving the Austin, Round Rock, and Pflugerville Areas
          </p>
          <p style={{ fontSize: "25px", padding: "20px" }}>
            Text: 512-931-4584
          </p>
          <p style={{ textAlign: "left" }}>Base Rates on Popular Services:</p>
        </div>
        <ul
          style={{
            textAlign: "left",
            listStyleType: "circle",
            paddingLeft: "40px",
            paddingRight: "20px",
            paddingTop: "5px",
            paddingBottom: "5px",
          }}
        >
          <li>2 Visit Pet Sit: $55/day</li>
          <li>Overnight: $75/day</li>
          <li>Transportation: $150 in area</li>
        </ul>
        <p
          style={{
            textAlign: "left",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "5px",
            paddingBottom: "5px",
          }}
        >
          Additional rates may apply for abnormal or specialty conditions
        </p>
      </div>
    </div>
  );
}
