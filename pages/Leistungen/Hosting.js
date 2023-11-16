import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import ProgressBar7 from "./service-details/ProgressBar-v7";

import Social from "./service-details/Social";
import Link from "next/link";

const PortfolioV1 = () => {
  return (
    <>
      <Seo pageTitle="Hosting" />
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
                  Hosting
                </div>
                <h2 className="main-title fw-500 tx-dark">
                Sicherheit & Zuverlässigkeit.
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_172.svg"
          alt="Glakon IT Logo Ansbach Region Nürnberg"
          className="lazy-img shapes shape-two"
        />
        <img
          src="/images/shape/shape_175.svg"
          alt="Glakon IT Logo Ansbach Region Nürnberg"
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
                <h2 className="main-title tx-dark mb-30">Hosting.</h2>
                <p className="text-lg tx-dark">
                Vertrauen Sie uns Ihr Hosting an – wir bieten sichere und skalierbare Lösungen, damit Ihre Website immer in Bestform ist.
                </p>
                <p>
                Ihre digitale Präsenz verdient mehr als nur Speicherplatz – sie verdient ein Zuhause, das sicher, zuverlässig und skalierbar ist. 
                Unser Hosting-Service geht über die Standardangebote hinaus. 
                Wir verstehen, dass Ihre Website das Gesicht Ihres Unternehmens ist, und deshalb bieten wir maßgeschneiderte Hosting-Lösungen, die Ihre individuellen Anforderungen erfüllen. 
                Mit modernster Technologie, regelmäßigen Sicherheitsüberprüfungen und einem engagierten Support-Team stellen wir sicher, dass Ihre Website nicht nur online ist, sondern auch herausragend performt. 
                Wir sind nicht nur Ihr Hosting-Provider, sondern Ihr Partner für digitale Exzellenz.</p>
                <div className="mt-50 lg-mt-30">
                  <div className="row gx-xxl-5">
                    <div className="col-lg-6">
                      <h4 className="sub-title mb-20 tx-dark">Unsere Leistungen</h4>
                      <ul className="style-none list-item md-mb-40">     
                        <li>Hosting</li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <h4 className="sub-title mb-20 tx-dark">Unser Ziel</h4>
                      <p className="pe-xxl-5">
                      Unser Ziel ist es, Hosting-Dienstleistungen anzubieten, auf die Sie sich jederzeit verlassen können. Wir setzen auf erstklassige Serverinfrastrukturen, um sicherzustellen, dass Ihre Online-Präsenz immer erreichbar ist.
                    </p>
                    </div>
                  </div>
                </div>
                <div className="mt-60 mb-20 lg-mt-30 lg-mb-10">
                  <div className="row gx-xxl-5">
                    <ProgressBar7 />
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
                  <li>
                      <Link href="/Leistungen/Softwareentwicklung">Softwareentwicklung </Link> 
                    </li>
                    <li>
                      <Link href="/Leistungen/Design">Design</Link>
                    </li>
                    <li>
                      <Link href="/Leistungen/SocialMedia">Social Media</Link>
                    </li>
                    <li>
                      <Link href="/Leistungen/Videografie">Videografie</Link>
                    </li>
                    <li>
                      <Link href="/Leistungen/Fotografie">Fotografie</Link>
                    </li>
                    <li>
                      <Link href="/Leistungen/Systemintegration">Systemintegration</Link>
                    </li>
                    <li className="current-page">
                      <Link href="/Leistungen/Hosting">Hosting</Link>
                    </li>
                    <li>
                      <Link href="/Leistungen/Fragen">Fragen</Link>
                    </li>
                  </ul>
                </div>
                {/* /.service-category */}

                <div className="sidebar-quote mb-50">
                  <img
                    src="/images/icon/icon_150.svg"
                    alt="Glakon IT Logo Ansbach Region Nürnberg"
                    className="m-auto"
                  />
                  <p className="fw-500">
                  In der digitalen Welt ist zuverlässiges Hosting der Grundstein, auf dem Unternehmensvisionen aufbauen.
                  </p>
                  <div className="name">- Michael Goldenberg</div>
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
