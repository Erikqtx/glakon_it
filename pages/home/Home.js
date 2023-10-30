import React from "react";
import Seo from "../../components/common/Seo";
import Header from "../../components/home-page/home/Header";
import Hero from "../../components/home-page/home/Hero";
import ScreenHolder from "../../components/home-page/home/ScreenHolder";
import Link from "next/link";
import ProductTabs from "../../components/home-page/home/ProductTabs";
import TagList from "../../components/home-page/home/TagList";
import Features from "../../components/home-page/home/Features";
import Testimonial from "../../components/home-page/home/Testimonial";
import CircleBgShape from "../../components/home-page/home/CircleBgShape";
import Partners from "../../components/home-page/home/Partners";
import FooterMenu from "../../components/home-page/home/FooterMenu";
import CopyrightFooter2 from "../../components/footer/CopyrightFooter2";
import ParticlesBackground from "../../components/particles/ParticlesBackground";

const Home = () => {
  return (
    <>
      <Seo pageTitle="Glakon IT Agentur" />
      {/* <!-- 
      =============================================
        Theme Default Menu
        ============================================== 	
      --> */}
      <ParticlesBackground />
      <Header />

      {/* /* 
        =============================================
        Theme Hero Banner
        ==============================================  */}

      <Hero />

      {/* 
        =============================================
        Feature Section Three
        ============================================== 
        */}
      <div className="fancy-feature-three pt-70 lg-pt-200 md-pt-170 sm-pt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md">
              <div
                className="block-style-two pe-xxl-5 md-mb-50"
                data-aos="fade-right"
              >
                <div className="title-style-three">
                  <div className="sc-title text-uppercase">
                    Integriere dich digital
                  </div>
                  <h2 className="main-title fw-500">
                    Erfolgreich im digitalen Zeitalter
                  </h2>
                </div>
                {/* /.title-style-three */}
                <p className="text-sm mt-25 mb0 lg-mb-40">
                  Unser Team besteht aus hochqualifizierten Experten, die ihre umfassende Erfahrung und
                  ihr tiefes Verständnis innovativer Technologien einsetzen, um
                  maßgeschneiderte Lösungen zu entwickeln, die genau auf Ihre
                  individuellen Geschäftsanforderungen zugeschnitten sind. Bei
                  Uns werden Sie nicht nur von einer beeindruckenden
                  Bandbreite an technologischen und kreativen Lösungen
                  profitieren, sondern auch von einem engagierten und
                  professionellen Team, das Sie auf Ihrem Weg in die digitale
                  Zukunft begleiten wird.
                </p>
                <Link
                  href="/Leistungen/UnsereLeistungen"
                  className="btn-four fw-500"
                >
                  Erfahre mehr
                </Link>
              </div>
              {/* /.block-style-two */}
            </div>
            {/* End .col-lg-5 */}

            <div
              className="col-xl col-lg-7 col-md ms-auto"
              data-aos="fade-left"
            >
              <ScreenHolder />
            </div>
            {/* End .col-xl */}
          </div>
        </div>
        {/* /.container */}
      </div>

      {/* 
        =============================================
        Feature Section Four
        ============================================== 
        */}
      

      {/* 
        =============================================
        Feature Section Five
        ============================================== 
        */}
      <div className="fancy-feature-five pt-150 lg-pt-140">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md order-md-last ms-auto">
              <div
                className="block-style-two pe-xxl-5 sm-mb-50"
                data-aos="fade-left"
              >
                <div className="title-style-three">
                  <div className="sc-title text-uppercase">
                    Was uns wichtig ist.
                  </div>
                  <h2 className="main-title fw-500">
                    Unser Fokus
                  </h2>
                </div>
                {/* /.title-style-three */}
                <p className="text-base mt-20 mb-40 lg-mt-40 lg-mb-50">
                Unser Hauptfokus liegt darauf, Ihre Zufriedenheit zu gewährleisten. Keine Herausforderung ist uns zu groß – wir meistern jede Aufgabe mit Erfolg.
                Wir gehen mit Leidenschaft an jede Aufgabe heran, setzen innovative Lösungen ein und kombinieren Kreativität mit Fachkenntnissen, um optimale Ergebnisse zu erzielen.<br></br>
                Keine Aufgabe ist zu komplex, keine Herausforderung zu groß – gemeinsam meistern wir jede Anforderung mit Erfolg.

                </p>
                <Link
                  href="/Kontakt"
                  className="btn-four fw-500"
                >
                  Kostenloses Erstgespräch
                </Link>
              </div>
              {/* /.block-style-two */}
            </div>
            {/* End .col-lg-5 */}

            <div className="col-md order-md-first" data-data-aos="fade-right">
              <div className="tags-wrapper position-relative">
                <img
                  src="/images/shape/shape_35.svg"
                  alt="shape"
                  className="lazy-img shapes shape-one"
                />
                <div className="h3 m0 fw-30 tx-dark">Die Bausteine</div>
                <p className="text-lg  opacity-50 pb-25 lg-pb-10">
                  der Glakon IT
                </p>
                <TagList />
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>

      {/* 
        =============================================
        Feature Section Six
        ============================================== 
        */}
      <div className="fancy-feature-six position-relative mt-100 lg-mt-100 xs-mt-80">
        <div className="container">
          <div className="row gx-xxl-5 align-items-center">
            <div className="col-lg-4 col-md mt-40" data-aos="fade-up">
              <div className="title-style-three mb5 lg-mb-40">
                <h2 className="main-title fw-500">
                Entdecke unsere Leistungen
                </h2>
              </div>
              {/* /.title-style-three */}
              
            </div>
            <Features />
          </div>
        </div>
        {/* End .container */}

        <div className="shapes shape-one rounded-circle" />
        <img
          src="/images/shape/shape_36.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
        <div className="shapes shape-three rounded-circle" />
      </div>
      {/* /.fancy-feature-six */}

      {/*
        =====================================================
        Feedback Section Two
        =====================================================
        */}
        <div className="fancy-feature-four pt-150 lg-pt-120">
        <div className="container">
          <div className="row">
            <div
              className="col-xxl-7 col-md-8 m-auto text-center"
              data-aos="fade-up"
            >
              <div className="title-style-three">
                <h2 className="main-title fw-500">
                  Kostenloses Erstgespräch!
                </h2>
              </div>
              
              {/* /.title-style-three */}
              <p className="text-lg mt-20 mb-40 lg-mt-20 lg-mb-50">
              In diesem unverbindlichen Gespräch haben Sie die Chance, uns kennenzulernen und mehr über unsere Leistungen zu erfahren. 
              </p>
              
            </div>
          </div>
          {/* End .row */}

          <ProductTabs />
          <div className="col-lg-5 ms-auto text-center text-lg-end">
                    <Link
                      href="/contact"
                      className="btn-twentyOne fw-500 tran3s"
                    >
                      Kostenloses Erstgespräch
                    </Link>
                  </div>
          {/* /.tab-content */}
        </div>
        {/* /.container */}
      </div>
      <div
        className="feedback-section-two position-relative mt-170 pt-150 pb-150 lg-mt-100 lg-pt-100 lg-pb-100 sm-pt-10 sm-pb-10"
        data-data-aos="fade-up"
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl col-lg-7 col-md-8 col-sm-10 m-auto">
              <div className="title-style-three text-center mb-70 lg-mb-40">
                <div
                  className="icon d-flex align-items-center justify-content-center rounded-circle"
                  style={{ background: "#fbb72d" }}
                >
                  <img
                    src="/images/icon/icon_19.svg"
                    alt="icon"
                    className="lazy-img"
                  />
                </div>
                <h2 className="main-title fw-500">
                  Was unsere &nbsp;
                  <span className="d-inline-block position-relative">
                    Kunden &nbsp;
                    <span
                      className="mark-bg"
                      style={{ backgroundColor: "#ffebe5" }}
                    />
                  </span>
                  über uns sagen
                </h2>
              </div>
              {/* /.title-style-three */}
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-xl-7 col-lg-9 m-auto">
              <Testimonial />
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

        <CircleBgShape />
      </div>

      {/* 
        =============================================
        Partner Section One
        ============================================== 
        */}
      <div className="partner-section-one position-relative mt-225 lg-mt-100">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <div
                className="title-style-three text-center mb-100 lg-mb-30"
                data-aos="fade-up"
              >
                <div className="sc-title text-uppercase">Unsere Partner</div>
                <h2 className="main-title fw-500">
                  Unsere vertrauenswürdigen Partner &nbsp;
                  <span className="d-inline-block position-relative">
                    unterstützen &nbsp;
                    <span
                      className="mark-bg"
                      style={{ backgroundColor: "#ffebe5" }}
                    />
                  </span>
                  wir immer.
                </h2>
              </div>
              {/* /.title-style-three */}
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="row align-items-center">
                <Partners />
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}

        <img
          src="/images/shape/shape_38.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
        <img
          src="/images/shape/shape_39.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      {/*
        =====================================================
        Pricing Section One
        =====================================================
        
      <div className="pricing-section-one position-relative mt-200 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div
                className="title-style-three text-center mb0 lg-mb-40"
                data-aos="fade-up"
              >
                <div className="sc-title text-uppercase">Pricng Plan</div>
                <h2 className="main-title fw-500">
                  No hidden charges!
                  <span className="d-inline-block position-relative">
                    choose
                    <span
                      className="mark-bg"
                      style={{ backgroundColor: "#FFE1FB" }}
                    />
                  </span>
                  your plan.
                </h2>
              </div>
              {/* /.title-style-three 
            </div>
          </div>
          <Pricing />
          {/* /.pricing-table-area-one 
        </div>
        {/* End .container 

        <div className="shapes shape-one rounded-circle" />
        <img
          src="/images/shape/shape_40.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
        <img
          src="/images/shape/shape_41.svg"
          alt="shape"
          className="lazy-img shapes shape-three"
        />
      </div>
*/}
      {/*
        =====================================================
        Fancy Short Banner Two
        =====================================================
        */}
      

      {/*
        =====================================================
        Fancy Short Banner Three
        =====================================================
        */}
      <div className="fancy-short-banner-three mt-180 mb-200 lg-mt-100 lg-mb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-lg-8 col-md-9 m-auto text-center">
              <div
                className="title-style-three text-center"
                data-data-aos="fade-up"
              >
                <h2 className="main-title fw-500">
                  Bereit in die &nbsp;
                  <span className="d-inline-block position-relative">
                    Zukunft &nbsp;
                    <span
                      className="mark-bg"
                      style={{ backgroundColor: "*" }}
                    />
                  </span>
                  zu starten?
                </h2>
              </div>
              {/* /.title-style-three */}
              
              <p
                className="text-lg tx-dark pt-30 pb-55 lg-pb-30 "
                data-aos="fade-up"
              >
              
                Dein erster Schritt zu einer erfolgreichen Zusammenarbeit – unverbindlich und kostenfrei.<br></br>
                Jetzt Termin vereinbaren und den Grundstein für deinen Erfolg legen!
              </p>
              <Link
                  href="/Kontakt"
                  className="btn-four fw-500"
                >
                  Kostenloses Erstgespräch vereinbaren.
                </Link>
{/*               <div
                className="subscribe-form m-auto"
                data-data-aos="fade-up"
                data-aos-delay="200"
              >
                <Subscribe />
                <p className="m0 pt-20">
                  Already a member?
                  <Link
                    href="/login"
                    className="tx-dark text-decoration-underline"
                  >
                    Sign in.
                  </Link>
                </p>
              </div> */}
              {/* /.subscribe-form */}
            </div>
          </div>
        </div>
      </div>

      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className="footer-style-two theme-basic-footer">
        <div className="top-footer position-relative">
          <div className="container">
            <div className="inner-wrapper m-auto">
              <div className="row">
                <FooterMenu />
              </div>
            </div>
            {/* /.inner-wrapper */}
          </div>
          <div className="shapes shape-one rounded-circle" />
          <div className="shapes shape-two rounded-circle" />
          <img
            src="/images/shape/shape_42.svg"
            alt="shape"
            className="lazy-img shapes shape-three"
          />
          <img
            src="/images/shape/shape_43.svg"
            alt="shape"
            className="lazy-img shapes shape-four"
          />
        </div>
        {/* /.top-footer */}
        <CopyrightFooter2 />
      </div>
      {/* /.footer-style-two */}
    </>
  );
};

export default Home;
