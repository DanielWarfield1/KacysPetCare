export default function DogTitle({ onChangeView }) {
  return (
    <div
      style={{
        fontSize: "32px",
        fontStyle: "normal",
        fontWeight: "1",
        lineHeight: "normal",
      }}
    >
      <div
        className="Primary"
        style={{
          position: "absolute",
          height: "125px",
          width: "100px",
          top: "-25px",
          borderBottomRightRadius: "30px",
        }}
      ></div>
      <div
        className="Secondary"
        style={{
          marginTop: "20px",
          marginRight: "50px",
          marginLeft: "50px",
          height: "200px",
          borderRadius: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <p style={{ padding: "20px" }}>Kacy's</p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="73"
            height="47"
            viewBox="0 0 73 47"
            fill="none"
            style={{ margin: "0 auto", display: "block" }}
          >
            <g filter="url(#filter0_d_5_195)">
              <ellipse cx="36.5" cy="21.5" rx="34.5" ry="21.5" fill="#E3E2FF" />
            </g>
            <defs>
              <filter
                id="filter0_d_5_195"
                x="0"
                y="0"
                width="73"
                height="47"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_5_195"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_5_195"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <p style={{ padding: "20px" }}>Pet Services</p>
      </div>
    </div>
  );
}
