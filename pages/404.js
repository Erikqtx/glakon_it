import Link from "next/link";
import Seo from "../components/common/Seo";
import DefaulHeader from "../components/header/DefaulHeader";

const Pricing = () => {
  return (
    <>
      <Seo pageTitle="404" />

      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
			=============================================
			Error Page
			============================================== 
			*/}
      <div className="error-page-content d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-7 m-auto">
              <h3>Hoppla!</h3>
              <p className="me-xxl-5 ms-xxl-5 pt-15 pb-20">
                Genau wie unsere Fahrradfahrerin hier, sind wir gerade etwas vom
                Weg abgekommen. Ihr gesuchter Webpfad hat leider den Lenker
                verloren. Aber keine Sorge, Sie müssen nicht ins Straucheln
                geraten – wir bringen Sie schnell zurück auf die richtige Route!
              </p>
              <Link href="/" className="btn-twentyOne fw-500 tran3s">
                Zur Startseite
              </Link>
            </div>
          </div>
          <img src="/images/assets/ils_06.svg" alt="" className="m-auto" />
        </div>
        {/* End .container */}

        <img
          src="/images/shape/shape_178.svg"
          alt="Glakon IT Logo Ansbach Region Nürnberg"
          className="shapes shape-one w-100"
        />
      </div>
      {/* /.error-page-content */}
    </>
  );
};

export default Pricing;
