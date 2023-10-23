import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import ProgressBar1 from "./service-details/ProgressBar-v1";

import Social from "./service-details/Social";
import Link from "next/link";

const PortfolioV1 = () => {
  return (
    <>
      <Seo pageTitle="Softwareentwicklung" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />
      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  Softwareentwicklung
                </div>
                <h2 className="main-title fw-500 tx-dark">
                Code, der beeindruckt!
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_172.svg"
          alt="shap"
          className="lazy-img shapes shape-two"
        />
        <img
          src="/images/shape/shape_175.svg"
          alt="shap"
          className="lazy-img shapes shape-three"
        />
      </div>
      {/* 
			=============================================
				Service Details
			============================================== 
			*/}
      <div className="service-details position-relative mt-100 mb-170 md-mt-50 lg-mb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 order-lg-1">
              <div className="service-details-meta ps-lg-5">
                <h2 className="main-title tx-dark mb-30">Softwareentwicklung.</h2>
                <p className="text-lg tx-dark">
                Entfesseln Sie das volle Potenzial Ihrer Ideen mit unserer maßgeschneiderten Softwareentwicklung.
                </p>
                
                <p>
                Wir sind Architekten digitaler Erlebnisse, die nicht nur funktionieren, sondern begeistern. Mit einer Mischung aus Kreativität, Präzision und einem tiefen Verständnis für Ihre Bedürfnisse schaffen wir Lösungen, die nicht nur dem aktuellen Stand der Technik entsprechen, sondern ihn auch definieren. Ihre Zufriedenheit ist unser Code für Erfolg.
                </p>
                <div className="mt-50 lg-mt-30">
                  <div className="row gx-xxl-5">
                    <div className="col-lg-6">
                      <h4 className="sub-title mb-20 tx-dark">Unsere Leistungen</h4>
                      <ul className="style-none list-item md-mb-40">     
                        <li>Web & Mobile</li>
                        <li>Extended Reality</li>
                        <li>3D</li>
                        <li>Gamedesign</li>
                        <li>Data Science</li>
                        <li>Individuallösungen</li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <h4 className="sub-title mb-20 tx-dark">Unser Ziel</h4>
                      <p className="pe-xxl-5">
                      Mit einem klaren Fokus auf Zeiteffizienz sind wir stolz darauf, Projekte agil und effizient umzusetzen, um Ihre Produkte oder Dienstleistungen schnell auf den Markt zu bringen.
                      Dabei haben wir stets die Kosten und die Sicherstellung höchster Qualität im Blick.
                      Unsere Softwareentwicklung zielt darauf ab, Ihre Erwartungen zu erfüllen und einen Mehrwert für Sie und Ihr Unternehmen zu schaffen.
                    </p>
                    </div>
                  </div>
                </div>
                <div className="mt-60 mb-20 lg-mt-30 lg-mb-10">
                  <div className="row gx-xxl-5">
                    <ProgressBar1 />
                  </div>
                </div>
                
                <h3 className="tx-dark mt-100 mb-50 lg-mt-50">
                Starten Sie jetzt und gestalten Sie gemeinsam mit uns die Zukunft Ihrer digitalen Innovation!
                </h3>
              </div>
              {/* /.service-details-meta */}
            </div>
            {/* End .col-xl-9 */}

            <div className="col-xl-3 col-lg-4 col-md-8 order-lg-0">
              <div className="service-sidebar pe-xxl-5 md-mt-60">
                <div className="service-category mb-40">
                  <h4 className="tx-dark mb-15">Leistungen</h4>
                  <ul className="style-none">
                    <li className="current-page">
                      <Link href="Leistungen/service-details-v1">Softwareentwicklung </Link> 
                    </li>
                    <li>
                      <Link href="Leistungen/service-details-v2">Design</Link>
                    </li>
                    <li>
                      <Link href="Leistungen/service-details-v3">Social Media</Link>
                    </li>
                    <li>
                      <Link href="Leistungen/service-details-v4">Videografie</Link>
                    </li>
                    <li>
                      <Link href="Leistungen/service-details-v5">Fotografie</Link>
                    </li>
                    <li>
                      <Link href="Leistungen/service-details-v6">Systemintegration</Link>
                    </li>
                    <li>
                      <Link href="Leistungen/service-details-v7">Hosting</Link>
                    </li>
                  </ul>
                </div>
                {/* /.service-category */}

                <div className="sidebar-quote mb-50">
                  <img
                    src="/images/icon/icon_150.svg"
                    alt="icon"
                    className="m-auto"
                  />
                  <p className="fw-500">
                  Softwareentwicklung ist die Kunst, aus Nullen und Einsen ein Meisterwerk zu schaffen.
                  </p>
                  <div className="name">- Erik Glaser</div>
                </div>
                {/* /.sidebar-quote */}
                <h4 className="tx-dark mb-15">Kontakt.</h4>
                <Social />
              </div>
              {/* /.service-sidebar */}
            </div>
          </div>
        </div>
      </div>
      {/* /.service-details */}
      {/*
			=====================================================
				Fancy Short Banner Sixteen
			=====================================================
			*/}
      <div className="fancy-short-banner-sixteen mt-130 lg-mt-80 wow fadeInUp">
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
            <div className="row">
              <div className="col-xl-10 col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <div className="sc-title fs-18 pb-10">
                        Noch Fragen?
                      </div>
                      <h2 className="main-title fw-500 text-white m0">
                        Vereinbaren Sie Ihr kostenloses Erstgespräch.
                      </h2>
                    </div>
                  </div>
                  {/* End .col-6 */}

                  <div className="col-lg-5 ms-auto text-center text-lg-end">
                    <Link
                      href="/contact"
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

export default PortfolioV1;
