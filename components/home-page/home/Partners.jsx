const Partners = () => {
  const partnersData = [
    {
      imgSrc: "/images/logo/DVAG.png",
      imgAlt: "Die Deutsche Vermögensberatung Logo",
      divClass: "img-box bx-a",
      link: "https://www.dvag.de/dvag/index.html",
      colClasses: "col-lg-3 col-md-4 col-6",
      dataAos: "fade",
      dataAosDelay: "50",
    },
    {
      imgSrc: "/images/logo/Ecosphere.png",
      imgAlt: "Ecosphere Automations Logo",
      divClass: "img-box bx-b",
      link: "https://www.ecosphere-automation.de",
      colClasses: "col-xl-2 col-lg-3 col-md-4 col-6",
      dataAos: "fade",
      dataAosDelay: "100",
    },
    {
      imgSrc: "/images/logo/BezirkMittelfranken.png",
      imgAlt: "Bezirk Mittelfranken Logo",
      divClass: "img-box bx-c",
      link: "https://www.bezirk-mittelfranken.de",
      colClasses: "col-lg-3 col-md-4 col-6",
      dataAos: "fade",
      dataAosDelay: "150",
    },
    {
      imgSrc: "/images/logo/PiccoloMondo.png",
      imgAlt: "Piccolo Mondo Logo",
      divClass: "img-box bx-d",
      link: "https://italiener-ansbach.de",
      colClasses: "col-xl-2 col-lg-3 col-md-4 col-6",
      dataAos: "fade",
      dataAosDelay: "200",
    },
    {
      imgSrc: "/images/logo/bomhardlogo.png",
      imgAlt: "Christian von Bomhard Schule Logo",
      divClass: "img-box bx-e",
      link: "https://www.bomhardschule.de",
      colClasses: "col-xl-2 col-lg-3 col-md-4 col-6",
      dataAos: "fade",
      dataAosDelay: "250",
    },
    {
      imgSrc: "/images/logo/Grotte.png",
      imgAlt: "Die Grotte Logo",
      divClass: "img-box bx-f",
      link: "https://die-grotte.de",
      colClasses: "col-xl-4 col-lg-2 col-md-4 col-6",
      dataAos: "fade",
      dataAosDelay: "300",
    },
    {
      imgSrc: "/images/logo/chefket.png",
      imgAlt: "Chefket Logo",
      divClass: "img-box bx-g",
      link: "http://www.chefket.com",
      colClasses: "col-xl-2 col-lg-3 col-md-4 col-6",
      dataAos: "fade",
      dataAosDelay: "350",
    },
    {
      imgSrc: "/images/logo/caritaslogo.png",
      imgAlt: "Caritas Logo",
      divClass: "img-box bx-h",
      link: "https://www.caritas-nah-am-naechsten.de/de",
      colClasses: "col-xl-3 col-lg-3 col-md-4 col-6",
      dataAos: "fade",
      dataAosDelay: "400",
    },
    {
      imgSrc: "/images/logo/pvtechnik.png",
      imgAlt: "Pv-Technik Franken Logo",
      divClass: "img-box bx-i",
      link: "#",
      colClasses: "col-xl-3 col-lg-12 col-md-4 col-6 m-auto",
      dataAos: "fade",
      dataAosDelay: "450",
    },
  ];

  return (
    <div className="row">
      {partnersData.map((partner, index) => (
        <div
          key={index}
          className={partner.colClasses}
          data-aos={partner.dataAos}
          data-aos-delay={partner.dataAosDelay}
        >
          <div className={`img-box ${partner.className}`}>
            <a href="#">
              <img src={partner.imgSrc} alt="logo" className="lazy-img" />
            </a>
          </div>
          {/* /.img-box */}
        </div>
      ))}
    </div>
  );
};

export default Partners;
