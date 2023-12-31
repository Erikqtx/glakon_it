import Link from "next/link";
import Footer2 from "./Footer2";
import CopyrightFooter2 from "./CopyrightFooter2";

const DefaultFooter = () => {
  return (
    <div className="footer-style-eleven theme-basic-footer position-relative">
      <div className="bg-wrapper position-relative">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-2 footer-intro mb-40">
              <div className="logo">
                <Link href="/">
                  <img
                    src="/images/logo/GlakonLogo_115x50_black.png"
                    alt="Glakon IT Agentur Ansbach Region Nürnberg"
                  />
                </Link>
              </div>
            </div>
            {/* End .col */}

            <Footer2 />

            <div className="col-xl-4 col-lg-5 mb-30 form-widget">
              <h5 className="footer-title tx-dark fw-normal">Kontakt</h5>
              <div className="fs-15 mt-12">Glakon IT Agentur e. K.</div>
              <div className="fs-15 mt-10">
                Rosenbadstraße 7, 91522 Ansbach.
              </div>
              <div className="fs-15 mt-10">
                <a href="tel:+4998197766644"> Tel.: 0981 97766644</a>
              </div>
              <div className="fs-15 mt-10">
                <a href="mailto:info@glakon.de"> Mail: info@glakon.de</a>
              </div>
            </div>
            {/* End .col-xl-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.bg-wrapper */}
      <CopyrightFooter2 />
      {/* /.bottom-footer */}
      <img
        src="/images/shape/shape_173.svg"
        alt="shape"
        className="lazy-img shapes shape-one"
      />
    </div>
  );
};

export default DefaultFooter;
