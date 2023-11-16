const logos = [
  {
    src: "/images/logo/Glakon_Icon.png",
    width: "180px",
    height: "193px",
    className: "",
    shape: "10px",
  },
  {
    src: "/images/logo/Fotografie_Icon.png",
    width: "60px",
    height: "60px",
    className: "shapes logo-one",
    shape: "10px",
  },
  {
    src: "/images/logo/3D_Icon.png",
    width: "105px",
    height: "105px",
    className: "shapes logo-two",
    shape: "10px",
  },
  {
    src: "/images/logo/Design_Icon.png",
    width: "80px",
    height: "80px",
    className: "shapes logo-three",
    shape: "10px",
  },
  {
    src: "/images/logo/Webdesign_Icon.png",
    width: "148px",
    height: "148px",
    className: "shapes logo-four",
    shape: "10px",
  },
  {
    src: "/images/logo/Videografie_Icon.png",
    width: "105px",
    height: "105px",
    className: "shapes logo-five",
    shape: "10px",
  },
];

const ScreenHolder = () => {
  return (
    <div className="screen-holder-one d-flex align-items-center justify-content-center">
      {logos.map((logo, index) => (
        <div
          key={index}
          className={`round-bg d-flex align-items-center justify-content-center ${logo.className}`}
          style={{ width: logo.width+logo.shape, height: logo.height+logo.shape }}
        >
          <img src={logo.src} alt={`logo ${index}`} className="lazy-img" />
        </div>
      ))}
      <img
        src="/images/shape/shape_32.svg"
        alt="Glakon IT Logo Ansbach Region Nürnberg"
        className="lazy-img shapes shape-one"
      />
    </div>
  );
};

export default ScreenHolder;
