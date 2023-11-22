/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";
import ParticlesBackground from "../../components/particles/ParticlesBackground";

const HeroAG = () => {
  const [isOpen, setOpen] = useState(false);
  const icon = "fa-download";
  return (
    <>
      <ParticlesBackground />

      <div className="hero-banner-two position-relative pt-250 lg-pt-200 md-pt-150">
        <Image
          src="/images/shape/shape_26.svg"
          alt="Glakon IT Logo Ansbach Region Nürnberg"
          className="lazy-img shapes shape-left"
          width={200}
          height={200}
        />
        <Image
          src="/images/shape/shape_27.svg"
          alt="Glakon IT Logo Ansbach Region Nürnberg"
          className="lazy-img shapes shape-right"
          width={200}
          height={300}
        />

        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 col-md-9 m-auto text-center"
              data-aos="fade-up"
            >
              <h1 className="hero-heading fw-normal font-recoleta position-relative">
                Allgemeine Geschftsbedingungen
              </h1>
              <p className="text-lg mb-30 pt-20 lg-mb-50 lg-pt-10">
                Die Allgemeinen Geschäftsbedingungen der Glakon IT Agentur
              </p>
              <p className="text-base mb-30 pt-20 lg-mb-50 lg-pt-10">
                Hier finden Sie unsere Allgemeinen Geschäftsbedingungen
              </p>
              <a target="_blank" rel="noreferrer" href="/AGBS.pdf">
                <i className="fa-solid fa-download"></i>
                PDF in neuem Tab öffnen
              </a>
              <p className="text-base mb-30 pt-20 lg-mb-50 lg-pt-10">
                Hier finden Sie unseren Auftragsverarbeitungsvertrag
              </p>
              <a target="_blank" rel="noreferrer" href="/AV-Vertrag.pdf">
                <i className="fa-solid fa-download"></i>
                PDF in neuem Tab öffnen
              </a>
              <p className="text-base mb-30 pt-20 lg-mb-50 lg-pt-10">
                Hier finden Sie unseren IT Supportvertrag mit SEPA Lastschrift
              </p>
              <a target="_blank" rel="noreferrer" href="/IT-Supportvertrag.pdf">
                <i className="fa-solid fa-download"></i>
                PDF in neuem Tab öffnen
              </a>
            </div>
          </div>
          {/* End .row */}

          {/* /.illustration-holder */}
        </div>
        {/* /.container */}
      </div>
    </>
  );
};

export default HeroAG;
