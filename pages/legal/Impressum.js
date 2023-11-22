import React from "react";
import Seo from "../../components/common/Seo";
import Header from "../../components/home-page/home/Header";
import HeroIm from "../../components/legal-page/HeroIm";
import FooterMenu from "../../components/home-page/home/FooterMenu";
import CopyrightFooter2 from "../../components/footer/CopyrightFooter2";
import ParticlesBackground from "../../components/particles/ParticlesBackground";

const Impressum = () => {
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

      <HeroIm />

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
            alt="Glakon IT Logo Ansbach Region Nürnberg"
            className="lazy-img shapes shape-three"
          />
          <img
            src="/images/shape/shape_43.svg"
            alt="Glakon IT Logo Ansbach Region Nürnberg"
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

export default Impressum;
