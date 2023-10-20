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
          alt="shape"
          className="lazy-img shapes shape-left"
          width={300}
          height={300}
        />
        <Image
          src="/images/shape/shape_27.svg"
          alt="shape"
          className="lazy-img shapes shape-right"
          width={300}
          height={400}
        />

        <div className="container">
        
          <div className="row">
            <div
              className="col-lg-8 col-md-9 m-auto text-center"
              data-aos="fade-up"
            >
              <h1 className="hero-heading fw-normal font-recoleta position-relative">
                <Image
                  src="/images/shape/shape_25.svg"
                  alt="shape"
                  className="lazy-img shapes line-shape"
                  width={200}
                  height={40}
                  color={"#f8af3c"}
                />
                Lass deiner &nbsp;
                <span
                  className="position-relative d-inline-block"
                  style={{ color: "#e4114b" }}
                >
                  Kreativität
                </span>
                freien Lauf.
              </h1>
              <p className="text-lg mb-75 pt-20 lg-mb-50 lg-pt-10">
                Glakon unterstützt dich auf deinem Weg.
              </p>
              <div className="d-sm-flex justify-content-center align-items-center">
                <Link
                  href="/contact"
                  className="tran3s fs-17 fw-500 btn-three mb-25 ms-2 me-3"
                >
                  Kontakt
                </Link>
                {/*   Intro Video Glakon hier              <div
                  role="button"
                  className="fancybox video-icon tran3s mb-25 ms-2 me-3 d-flex align-items-center justify-content-center"
                  onClick={() => setOpen(true)}
                >
                  <i className="fas fa-play" />
                  <div className="ps-3 text-start">
                    <span className="d-block">Watch</span>
                    <strong className="fs-18 fw-500 tx-dark d-block">
                      Intro video
                    </strong>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          {/* End .row */}

          <div
            className="illustration-holder position-relative mt-120 lg-mt-80 xs-mt-30"
            data-aos="fade-up"
          >
            <div
              role="button"
              className="fancybox video-icon tran3s mb-25 ms-2 me-3 d-flex align-items-center justify-content-center mt-50 center-icon-container"
              onClick={() => setOpen(true)}
            >
              <i className="fas fa-play" />
              <div className="ps-3 text-start">
                <span className="d-block">Watch</span>
                <strong className="fs-18 fw-500 tx-dark d-block">
                  Preview
                </strong>
              </div>
            </div>
            <div className="bg-wrapper w-100 h-100">
              <Image
                onClick={() => setOpen(true)}
                role="button"
                src="/images/media/beka-thumbnail.jpg"
                alt="media"
                width="1080"
                height="720"
                className="lazy-img main-screen w-100"
                style={{ position: "relative", width: "100%", height: "100%" }}
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
              alt="media"
              className="lazy-img shapes shape-one"
            />

            <img
              src="/images/shape/shape_29_neu.svg"
              alt="media"
              className="lazy-img shapes shape-two"
            />
            <img
              src="/images/shape/shape_30.svg"
              alt="media"
              className="lazy-img shapes shape-three"
              color={"e52f1e"}
            />
            <img
              src="/images/shape/shape_31.svg"
              alt="media"
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