import Seo from "../components/common/Seo";
import Header from "../components/home-page/home/Header";
import DefaultFooter from "../components/footer/DefaultFooter";
import Partners from "../components/services/Partners";
import Faq from "../components/services/Faq";

import Block from "../components/services/Block";
import Team3 from "../components/team/Team3";
import Link from "next/link";
import Counter from "../components/about/Counter";

const AboutUsV1 = () => {
  const features = [
    { text: "Kundenzentrierte Herangehensweise." },
    { text: "Kreativität  & Innovation." },
    { text: "Vielseitige Expertise" },
  ];

  const starRating = Array(5)
    .fill()
    .map((_, index) => (
      <li key={index}>
        <i className="fa-solid fa-star" />
      </li>
    ));

  return (
    <>
      <Seo pageTitle="Über Uns" />
      <Header />

      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 md-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  Über Uns.
                </div>
                <h2 className="main-title fw-500 tx-dark">Glakon IT</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 ms-auto align-self-center">
              <img
                src="/images/team/team_hochkant.webp"
                alt="Glakon IT Logo Ansbach Region Nürnberg"
                className="lazy-img shapes shape-one img-fluid"
              />
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="ps-xxl-5" data-aos="fade-left">
                <h6 className="mb-30">Glakon IT Agentur</h6>
                <p className="text-lg tx-dark">
                  Herzlich willkommen bei der Glakon IT Agentur, Ihrem
                  innovativen IT-Partner im Raum Nürnberg. Wir sind Ihr
                  Vertrauenspartner für hochwertige IT-Lösungen. Unsere
                  Leidenschaft für Technologie und Kundenzufriedenheit bilden
                  das Fundament unserer Arbeit. <br></br>Bei Glakon IT
                  unterstützen wir unsere Kunden bei digitalen Herausforderungen
                  mit maßgeschneiderten Lösungen.
                </p>
                <div className="row">
                  <Counter />
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/images/shape/shape_171.svg"
          alt="Glakon IT Logo Ansbach Region Nürnberg"
          className="lazy-img shapes shape-one"
        />
        <img
          src="/images/shape/shape_172.svg"
          alt="Glakon IT Logo Ansbach Region Nürnberg"
          className="lazy-img shapes shape-two"
        />
      </div>
      {/* /.fancy-feature-fiftyOne */}

      {/* <!-- 
			=============================================
				Feature Section Fifty Two
			============================================== 
			--> */}
      {/* <VideoBlock /> */}

      {/* <!-- /.fancy-feature-fiftyTwo --> */}

      {/* 
			=============================================
				Feature Section Thirty Seven
			============================================== 
			*/}
      <div className="fancy-feature-thirtySeven mt-225 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="block-style-four pe-xxl-5 me-xxl-4 md-mb-70"
                data-aos="fade-right"
              >
                <div className="title-style-six">
                  <div className="sc-title-two text-uppercase">
                    Ihre Erste Wahl für
                  </div>
                  <h2 className="main-title fw-500 tx-dark">
                    Digitale Exzellenz
                  </h2>
                </div>
                {/* /.title-style-ten */}
                <p className="fs-20 pt-20 pb-30 lg-pt-10 lg-pb-20">
                  Warum sollten Sie sich für uns entscheiden? Hier sind einige
                  überzeugende Gründe:.
                </p>
                <ul className="style-none list-item">
                  {features.map((feature, index) => (
                    <li key={index}>{feature.text}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* End .col */}

            <div className="col-xxl-5 col-lg-6 ms-auto">
              <Block />
            </div>
            {/* End .col */}
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-thirtySeven */}

      {/*
			=====================================================
				Team Section Two
			=====================================================
			*/}
      <div className="team-section-two position-relative pt-200 lg-pt-120">
        <div className="container">
          <div className="wrapper position-relative">
            <div className="row align-items-center">
              <div className="col-lg-5" data-aos="fade-right">
                <div className="title-style-six text-center text-lg-start pb-40 lg-pb-20 md-pb-10">
                  <h2 className="main-title fw-500 tx-dark">Unser Team</h2>
                </div>
                {/* /.title-style-six */}
              </div>
            </div>
            {/* /.row */}
            <div className="row">
              <Team3 />
            </div>
            {/* /.row */}

            <p
              className="cr-text text-center text-lg tx-dark mt-75 lg-mt-50"
              data-aos="fade-up"
            >
              Kombinierte &nbsp;
              <span className="text-decoration-underline fw-500">30+</span>
              &nbsp; Jahre Erfahrung zu Ihrer Verfügung.
            </p>
            <div className="text-center md-mt-20">
              <Link
                href="/Leistungen/Team"
                className="btn-twentyTwo fw-500 tran3s"
                data-aos="fade-left"
              >
                Das gesamte Team
              </Link>
            </div>
          </div>
          {/* /.wrapper */}
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_172.svg"
          alt="Glakon IT Logo Ansbach Region Nürnberg"
          className="lazy-img shapes shape-one d-none d-xl-inline-block"
        />
      </div>
      {/* /.team-section-two */}

      {/*
			=====================================================
				Feedback Section Eleven
			=====================================================
			*/}
      <div
        className="feedback-section-eleven position-relative mt-50 pt-100 pb-70 lg-pt-70 lg-pb-50"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="title-style-one text-center mb-50 lg-mb-20">
            <h2 className="main-title fw-500 tx-dark m0">
              Innovativ | Kreativ | Zuverlässig
            </h2>
          </div>
        </div>
        {/* End .container */}
        <div className="inner-content">
          <div className="slider-wrapper">
            <div className="feedback_slider_seven"></div>
            {/* /.feedback_slider_seven */}
          </div>
          {/* /.slider-wrapper */}
        </div>
        {/* /.inner-content */}
      </div>
      {/* /.feedback-section-eleven */}

      {/* 
			=============================================
				Feature Section Thirty Eight
			============================================== 
			*/}
      <div className="fancy-feature-thirtyEight mt-180 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="block-style-seven" data-aos="fade-right">
                <div className="title-style-six">
                  <div className="sc-title-two text-uppercase">
                    Ihr Top-Partner für
                  </div>
                  <h2 className="main-title fw-500 tx-dark">Spitzenleistung</h2>
                </div>
                {/* /.title-style-ten */}
                <p className="fs-20 pt-10 pb-30 lg-pb-20">
                  Glakon IT Agentur bietet eine beeindruckende Bandbreite an
                  IT-Dienstleistungen.
                  <br></br>Unser hochqualifiziertes Team versteht die speziellen
                  Anforderungen von Unternehmen und bietet maßgeschneiderte
                  Lösungen. Unsere Kreativität und Innovation ermöglichen es,
                  einzigartige Inhalte zu erstellen, die Ihre Marke hervorheben.
                  <br></br>Wir legen großen Wert auf kundenorientierte Lösungen
                  und den Aufbau nachhaltiger Partnerschaften. Kontaktieren Sie
                  uns heute und profitieren Sie von unserer Expertise für
                  digitale Exzellenz.
                </p>
                <div>
                  <Link
                    href="Leistungen/about-us-v1"
                    className="btn-four fw-500"
                  >
                    Kostenloses Erstgespräch
                  </Link>
                </div>
              </div>
              {/* /.block-style-seven */}
            </div>
            {/* End .col-lg-5 */}
            <div className="col-lg-6 ms-auto" data-aos="fade-left">
              <Faq />
            </div>
          </div>
        </div>
        {/* /.container */}

        <div className="partner-section-six position-relative mt-130 lg-mt-80">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <h3 className="title tx-dark text-center text-lg-start md-pb-10 m0">
                  <span>50+</span> Zufriedene Kunden
                </h3>
              </div>
              <div className="col-xl-6 col-lg-7 ms-auto">
                <div className="logo-wrapper text-center d-flex justify-content-center justify-content-lg-between flex-wrap">
                  <Partners />
                </div>
                {/* /.logo-wrapper */}
              </div>
            </div>
          </div>
          {/* /.container */}
        </div>
      </div>
      {/* /.partner-section-six */}

      {/*
			=====================================================
				Fancy Short Banner Sixteen
			=====================================================
			*/}
      <div
        className="fancy-short-banner-sixteen mt-130 lg-mt-80"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
            <div className="row">
              <div className="col-xl-10 col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <div className="sc-title fs-18 pb-10">Noch Fragen?</div>
                      <h2 className="main-title fw-500 text-white m0">
                        Vereinbaren Sie Ihr kostenloses Erstgespräch.
                      </h2>
                    </div>
                  </div>
                  {/* End .col-6 */}

                  <div className="col-lg-5 ms-auto text-center text-lg-end">
                    <Link
                      href="/Kontakt"
                      className="btn-twentyOne fw-500 tran3s"
                    >
                      Kostenloses Erstgespräch
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
      {/* /.fancy-short-banner-sixteen */}

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default AboutUsV1;
