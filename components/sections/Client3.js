export default function Client3() {
  const logos = [
    "/assets/images/new-images/img1.webp",
    "/assets/images/new-images/img4.webp",
    "/assets/images/new-images/img1.webp",
    "/assets/images/new-images/img2.webp",
  ];

  // Duplicate for seamless infinite scroll
  const sliderLogos = [...logos, ...logos, ...logos];

  return (
    <section
      className="client-section"
      style={{
        background: "#f9fafb",
        overflow: "hidden",
      }}
    >
      <div className="pd_top_190" />

      <div className="container-fluid">
        {/* Heading Center */}
        <div className="row">
          <div className="col-12">
            <div style={{ textAlign: "center", marginBottom: "35px" }}>
              <h2
                style={{
                  fontSize: "34px",
                  fontWeight: "800",
                  marginBottom: "10px",
                }}
              >
                Trusted by Leading Companies
              </h2>
              <p
                style={{
                //   maxWidth: "650px",
                  margin: "0 auto",
                  color: "#6c757d",
                  fontSize: "16px",
                  lineHeight: "26px",
                }}
              >
                We’re proud to work with brands that value quality, reliability,
                and long-term partnerships.
              </p>
            </div>
          </div>
        </div>

        {/* Slider Wrapper */}
        <div
          style={{
            width: "100%",
            overflow: "hidden",
            position: "relative",
            padding: "10px 0",
          }}
        >
          {/* Track */}
          <div
            className="logo-track"
            style={{
              display: "flex",
              gap: "18px",
              width: "max-content",
              animation: "clientScroll 18s linear infinite",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.animationPlayState = "paused";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animationPlayState = "running";
            }}
          >
            {sliderLogos.map((src, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  padding: "18px 22px",
                  minWidth: "210px",
                  height: "95px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 18px rgba(0,0,0,0.05)",
                }}
              >
                <img
                  src={src}
                  alt={`client-logo-${i}`}
                  loading="lazy"
                  style={{
                    maxHeight: "70px",
                    maxWidth: "160px",
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    filter: "grayscale(100%)",
                    opacity: "0.9",
                    transition: "0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "grayscale(0%)";
                    e.currentTarget.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = "grayscale(100%)";
                    e.currentTarget.style.opacity = "0.9";
                  }}
                />
              </div>
            ))}
          </div>

          {/* Inline Keyframes (no external CSS) */}
          <style>
            {`
              @keyframes clientScroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-33.33%); }
              }
            `}
          </style>
        </div>
      </div>

      <div className="pd_bottom_60" />
    </section>
  );
}