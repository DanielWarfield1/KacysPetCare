export default function Certifications() {
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
        <h2>Certifications</h2>
        <ul
          style={{
            textAlign: "left",
            listStyleType: "circle",
            fontSize: "20px",
            paddingTop: "20px",
            paddingLeft: "50px",
            paddingRight: "50px",
            paddingBottom: "10px",
          }}
        >
          <li>CareCheck certified</li>
          <li>Care.com 5 star rating</li>
          <li>A.K.C. S.A.F.E. Grooming Certified</li>
          <li>Pet First Aid Certified</li>
        </ul>
      </div>
    </div>
  );
}
