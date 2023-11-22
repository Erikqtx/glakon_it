/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import ParticlesBackground from "../../particles/ParticlesBackground";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ParticlesBackground />
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="BssFMkGOLvY"
        onClose={() => setOpen(false)}
      />

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
                <Image
                  src="/images/shape/shape_25.svg"
                  alt="Glakon IT Logo Ansbach Region Nürnberg"
                  className="lazy-img shapes line-shape"
                  width={200}
                  height={40}
                  color={"#f8af3c"}
                />
                Die Glakon IT-Agentur
              </h1>
              <p className="text-lg mb-30 pt-20 lg-mb-50 lg-pt-10">
                Willkommen bei der Glakon IT Agentur – wir gestalten die Zukunft
                digital!
              </p>
              <p className="text-base mb-30 pt-20 lg-mb-50 lg-pt-10">
                Unser erfahrenes Team aus Entwicklern, Designern und
                Digitalstrategen arbeitet Hand in Hand, um maßgeschneiderte
                Lösungen zu schaffen, die Ihre individuellen Anforderungen
                erfüllen. Wir verstehen die Bedeutung eines starken digitalen
                Auftritts und setzen alles daran, Ihr Unternehmen erfolgreich im
                digitalen Raum zu positionieren und ettablieren. Was uns
                auszeichnet, ist nicht nur unser Fachwissen, sondern auch unsere
                Hingabe, die Extra-Meile zu gehen. Mit uns an Ihrer Seite können
                Sie sicher sein, dass Sie nicht nur einen Dienstleister, sondern
                einen Partner haben, der mit Ihnen gemeinsam an Ihrem Erfolg
                arbeitet.
              </p>
            </div>
          </div>
          {/* End .row */}

          <div
            className="illustration-holder position-relative mt-30 lg-mt-80 xs-mt-30"
            data-aos="fade-up"
          >
            <div
              role="button"
              className="fancybox video-icon tran3s mb-25 ms-2 me-3 d-flex align-items-center justify-content-center mt-50"
              onClick={() => setOpen(true)}
            >
              <i className="fas fa-play" />
              <div className="ps-3 text-start">
                <span className="d-block">Watch</span>
                <strong className="fs-18 fw-500 tx-dark d-block">
                  BEKA - Wofür
                </strong>
              </div>
            </div>
            <div className="bg-wrapper w-100 h-100 mb-30">
              <Image
                onClick={() => setOpen(true)}
                role="button"
                src="/images/media/img_01_2.webp"
                alt="Glakon IT Logo Ansbach Region Nürnberg"
                width="1080"
                height="720"
                className="lazy-img main-screen w-100"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                }}
              />
              <div className="ps-3 text-start center">
                <strong className="fs-18 fw-500 tx-dark d-block">
                  © BEKA - Videoaufnahmen & Edit by Glakon
                </strong>
              </div>
            </div>
            {/* /.bg-wrapper */}
            <img
              src="/images/shape/shape_28_neu.svg"
              alt="Glakon IT Logo Ansbach Region Nürnberg"
              className="lazy-img shapes shape-one"
            />

            <img
              src="/images/shape/shape_29_neu.svg"
              alt="Glakon IT Logo Ansbach Region Nürnberg"
              className="lazy-img shapes shape-two"
            />
            <img
              src="/images/shape/shape_30.svg"
              alt="Glakon IT Logo Ansbach Region Nürnberg"
              className="lazy-img shapes shape-three"
              color={"e52f1e"}
            />
            <img
              src="/images/shape/shape_31.svg"
              alt="Glakon IT Logo Ansbach Region Nürnberg"
              className="lazy-img shapes shape-four"
            />
          </div>
          {/* /.illustration-holder */}
        </div>
        {/* /.container */}
      </div>
    </>
  );
};

export default Hero;
