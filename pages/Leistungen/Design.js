import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import ProgressBar2 from "./service-details/ProgressBar-v2";

import Social from "./service-details/Social";
import Link from "next/link";

const PortfolioV1 = () => {
  return (
    <>
      <Seo pageTitle="Design" />
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
                  Design
                </div>
                <h2 className="main-title fw-500 tx-dark">
                Ästhetik mit Funktion.
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
                <h2 className="main-title tx-dark mb-30">Design.</h2>
                <p className="text-lg tx-dark">
                Von der Konzeptskizze bis zum finalen Design – lassen Sie uns Ihre Vision Wirklichkeit werden lassen.
                </p>
                
                <p>
                Wir verstehen, dass gutes Design nicht nur schön, sondern auch funktional sein muss. Jedes Detail wird durchdacht, jeder Farbton hat Bedeutung.
                Ihre Marke wird nicht nur gesehen, sondern erlebt. 
                In einer Welt, in der Aufmerksamkeit kostbar ist, setzen wir Ihre Marke in Szene und machen sie unvergesslich.
                </p>
                <div className="mt-50 lg-mt-30">
                  <div className="row gx-xxl-5">
                    <div className="col-lg-6">
                      <h4 className="sub-title mb-20 tx-dark">Unsere Leistungen</h4>
                      <ul className="style-none list-item md-mb-40">     
                        <li>Branding</li>
                        <li>Logodesign</li>
                        <li>Werbung</li>
                        <li>Textildesign</li>
                        <li>Social Media</li>
                        <li>Printdesign</li>
                        <li>3D-Design</li>
                        <li>Animation</li>
                        <li>Lyricvideos</li>
                        <li>CGI</li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <h4 className="sub-title mb-20 tx-dark">Unser Ziel</h4>
                      <p className="pe-xxl-5">
                      Unser Fokus liegt auf Ihnen – unserem geschätzten Kunden. 
                      Wir streben danach, durch nutzerzentriertes Design ein nahtloses und bereicherndes Erlebnis zu schaffen. 
                      Ihr Komfort und Ihre Zufriedenheit stehen im Mittelpunkt jeder Designentscheidung, die wir treffen.
                      Wir setzen uns das Ziel, ständig innovative Designlösungen zu schaffen. 
                      Durch kontinuierliche Entwicklung und kreative Entfaltung möchten wir stets einen Schritt voraus sein und Designs gestalten, die nicht nur Trends setzen, sondern auch Ihre Erwartungen übertreffen.
                      
                    </p>
                    </div>
                  </div>
                </div>
                <div className="mt-60 mb-20 lg-mt-30 lg-mb-10">
                  <div className="row gx-xxl-5">
                    <ProgressBar2 />
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
                      <Link href="Leistungen/Softwareentwicklung">Softwareentwicklung </Link> 
                    </li>
                    <li className="current-page">
                      <Link href="Leistungen/Design">Design</Link>
                    </li>
                    <li>
                      <Link href="Leistungen/SocialMedia">Social Media</Link>
                    </li>
                    <li>
                      <Link href="Leistungen/Videografie">Videografie</Link>
                    </li>
                    <li>
                      <Link href="Leistungen/Fotografie">Fotografie</Link>
                    </li>
                    <li>
                      <Link href="Leistungen/Systemintegration">Systemintegration</Link>
                    </li>
                    <li>
                      <Link href="Leistungen/Hosting">Hosting</Link>
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
                    alt="icon"
                    className="m-auto"
                  />
                  <p className="fw-500">
                  Design ist, wie man Dinge löst.
                  </p>
                  <div className="name">- Steve Jobs</div>
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
