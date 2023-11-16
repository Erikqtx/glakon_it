import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import ProgressBar3 from "./service-details/ProgressBar-v3";

import Social from "./service-details/Social";
import Link from "next/link";

const PortfolioV1 = () => {
  return (
    <>
      <Seo pageTitle="Social Media" />
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
                  Social Media
                </div>
                <h2 className="main-title fw-500 tx-dark">
                Verbindungen schaffen.
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
                <h2 className="main-title tx-dark mb-30">Social Media.</h2>
                <p className="text-lg tx-dark">
                Steigern Sie Ihre Präsenz mit unserer Social-Media-Expertise – wir machen Ihre Marke sichtbar und unvergesslich.</p>
                <p>
                In einer digital vernetzten Welt ist Social Media mehr als nur Plattformen und Posts – es ist eine lebendige Geschichte, die erzählt werden muss. 
                Unsere Experten verstehen die Dynamik von sozialen Netzwerken und bringen Ihre Marke in die Herzen Ihrer Zielgruppe. 
                Wir setzen nicht nur Trends, sondern bauen langfristige Verbindungen auf. 
                Von der Strategie bis zur Ausführung – wir sind Ihre Partner auf dem Weg zum Social-Media-Erfolg.</p>
                <div className="mt-50 lg-mt-30">
                  <div className="row gx-xxl-5">
                    <div className="col-lg-6">
                      <h4 className="sub-title mb-20 tx-dark">Unsere Leistungen</h4>
                      <ul className="style-none list-item md-mb-40">     
                        <li>Management</li>
                        <li>Marketing</li>
                        <li>Werbung</li>
                        <li>Leedgenerierung</li>
                        <li>Thunnels</li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <h4 className="sub-title mb-20 tx-dark">Unser Ziel</h4>
                      <p className="pe-xxl-5">
                      Unser vorrangiges Ziel ist es, Ihr Unternehmen in den sozialen Medien optimal zu positionieren und echte Verbindungen zu Ihrer Zielgruppe aufzubauen.
                      Durch maßgeschneiderte Inhalte und Strategien möchten wir sicherstellen, dass Sie in den relevanten Kanälen sichtbar sind.
                      Wir setzen uns dafür ein, nicht nur Ihre Sichtbarkeit, sondern auch die positive Wahrnehmung Ihrer Marke in den sozialen Medien zu fördern.
                    </p>
                    </div>
                  </div>
                </div>
                <div className="mt-60 mb-20 lg-mt-30 lg-mb-10">
                  <div className="row gx-xxl-5">
                    <ProgressBar3 />
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
                    <li className="current-page">
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
                    <li>
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
                  Soziale Medien bieten nicht nur eine weitere Möglichkeit; sie bieten eine andere Welt.
                  </p>
                  <div className="name">- Amy Jo Martin</div>
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
