/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import ParticlesBackground from "../../components/particles/ParticlesBackground";

const HeroIm = () => {
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
                Impressum
              </h1>
              <p className="text-lg mb-30 pt-20 lg-mb-50 lg-pt-10">
                Das Impressum der Glakon IT Agentur in Ansbach
              </p>
              <p className="text-base mb-30 pt-20 lg-mb-50 lg-pt-10"></p>
              <h1>Impressum</h1>

              <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
              <p>
                Erik Glaser
                <br />
                IT Dienstleister im Bereich Softwareentwicklung, Design, Social
                Media, Videografie, Fotografie, Systemintegration und Hosting.
                <br />
                Rosenbadstra&szlig;e 7<br />
                91522 Ansbach
              </p>

              <p>
                Handelsregister: HRA 4758
                <br />
                Registergericht: Amtsgericht Ansbach
              </p>

              <h2>Kontakt</h2>
              <p>
                Telefon: 0981 97766644
                <br />
                E-Mail: info@glakon.de
              </p>

              <h2>Postadresse</h2>
              <p>W&uuml;rzburger Stra&szlig;e 24a, 91522 Ansbach</p>
              <h2>Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
                Umsatzsteuergesetz:
                <br />
                DE363516472
              </p>

              <h2>Angaben zur Berufs&shy;haftpflicht&shy;versicherung</h2>
              <p>
                <strong>Name und Sitz des Versicherers:</strong>
                <br />
                Allianz Versicherungs-Aktiengesellschaft
                <br />
                K&ouml;niginstr. 28, 80802 M&uuml;nchen
              </p>
              <p>
                <strong>Geltungsraum der Versicherung:</strong>
                <br />
                Deutschland
              </p>

              <h2>EU-Streitschlichtung</h2>
              <p>
                Die Europ&auml;ische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>

              <h2>
                Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
              </h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle
              </p>
            </div>
          </div>
          {/* End .row */}

          <div
            className="illustration-holder position-relative mt-30 lg-mt-80 xs-mt-30"
            data-aos="fade-up"
          >
            {/* /.bg-wrapper */}
          </div>
          {/* /.illustration-holder */}
        </div>
        {/* /.container */}
      </div>
    </>
  );
};

export default HeroIm;
