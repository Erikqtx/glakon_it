import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import ProgressBar8 from "./service-details/ProgressBar-v8";

import Social from "./service-details/Social";
import Link from "next/link";
import ContactForm from "../../components/contact/contactForm";

const PortfolioV1 = () => {
  return (
    <>
      <Seo pageTitle="Fragen" />
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
                  Unsere Leistungen
                </div>
                <h2 className="main-title fw-500 tx-dark">
                Fragen? Wir haben die Antworten!
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
      <div className="service-details position-relative mt-100 mb-100 md-mt-50 lg-mb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 order-lg-1">
              <div className="service-details-meta ps-lg-5">
                <h2 className="main-title tx-dark mb-40">Fragen?</h2>
                <p className="text-lg tx-dark">
                Bei Glakon IT setzen wir uns intensiv dafür ein, die tieferen Herausforderungen unserer Kunden zu verstehen.
                </p>
                
                <p>
                Unser Fokus liegt nicht nur auf der Lösung von Problemen, sondern auch auf der Entdeckung neuer Möglichkeiten. 
                Wenn Sie nach einer Agentur suchen, die nicht nur Antworten liefert, sondern auch die richtigen Fragen stellt, um Ihre Ziele zu erreichen, dann sind Sie bei Glakon IT genau richtig. 
                Wir transformieren Fragen in Chancen und Herausforderungen in Erfolge.
                </p>
                <div className="mt-60 lg-mt-30">
                  <div className="row gx-xxl-5">
                    
                    <div className="col-lg-6">
                      <h4 className="sub-title mb-20 tx-dark">Ihr kostenloses Erstgespräch:</h4>
                      <ContactForm />
                    </div>
                    <div className="col-lg-6">
                      <ul className="style-none list-item md-mb-40">     
                        <li>Kontaktformular ausfüllen</li>
                        <p>
                        Füllen Sie unser einfaches Kontaktformular aus, um uns mehr über Ihre Anforderungen und Ziele zu erzählen. 
                        Je mehr Details Sie uns geben, desto besser können wir uns auf unser Gespräch vorbereiten.
                        </p>
                        <li>Experten-Dialog</li>
                        <p>
                        Wir möchten Ihre Vision verstehen, Herausforderungen kennenlernen und gemeinsam Chancen erkunden. 
                        Dieses Gespräch gibt uns die Möglichkeit, Ihre Ziele zu klären und Ihnen Einblicke in unsere Herangehensweise zu geben.
                        </p>
                        <li>Maßgeschneiderte Empfehlungen</li>
                        <p>
                        Nach dem Gespräch erhalten Sie von uns maßgeschneiderte Empfehlungen und Lösungsansätze. Wir erklären Ihnen, wie unsere Dienstleistungen Ihren individuellen Anforderungen gerecht werden können.
                        </p>
                      </ul>
                    </div>
                  </div>
                </div>
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
                      <Link href="/Leistungen/Social Media">Social Media</Link>
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
                    <li className="current-page">
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
                  Die Fragen von heute sind die Grundlagen für die Innovationen von morgen. 
                  </p>
                  <div className="name">- Erik Glaser (CEO)</div>
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
      <div className="fancy-short-banner-sixteen mt-100 lg-mt-80 wow fadeInUp">
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
