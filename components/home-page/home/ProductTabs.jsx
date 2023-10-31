/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const tabData = [
  {
    id: "sp1",
    title: "Kostenloses",
    subtitle: " Erstgespräch",
    image: "/images/media/Erstgespräch.jpg",
    content: "Unser Engagement beginnt mit einem kostenlosen Erstgespräch, um nicht nur Ihre Vision, sondern auch die Feinheiten Ihres Projekts zu verstehen. In diesem Austausch tauchen wir tief in Ihre Ziele ein, um nicht nur Lösungen zu skizzieren, sondern auch die bestmöglichen Wege zu identifizieren. Ihr Erfolg beginnt mit einem Gespräch - lassen Sie uns gemeinsam die Grundlagen für eine bahnbrechende Zusammenarbeit legen!",
  },
  {
    id: "sp2",
    title: "Konzepterstellung",
    subtitle: "und Design",
    image: "/images/media/Konzept.jpg",
    content: "Unsere Experten für Konzepterstellung und Design arbeiten nicht nur eng mit Ihnen zusammen, sondern nehmen sich auch die Zeit, Ihre individuellen Ideen zu erforschen und zu verstehen. Vom ersten Konzept bis zum finalen Design legen wir Wert auf Kreativität, Präzision und vor allem darauf, Ihre Vision in jeder Nuance einzufangen. Lassen Sie uns gemeinsam eine beeindruckende digitale Identität für Ihr Projekt gestalten, die nicht nur ästhetisch ansprechend ist, sondern auch Ihre einzigartige Geschichte erzählt!",
  },
  {
    id: "sp3",
    title: "Projektdurchführung",
    subtitle: "und Zeitplan",
    image: "/images/media/Projektdurchführung.jpg",
    content: "Bei Glakon IT setzen wir nicht nur auf eine nahtlose Projektdurchführung, sondern auch auf einen transparenten und gemeinschaftlichen Ansatz. Von der detaillierten Planung bis zur präzisen Implementierung arbeiten wir zielstrebig und effizient. Unser erfahrenes Team überwacht nicht nur den Fortschritt, sondern steht Ihnen auch während des gesamten Prozesses zur Seite. So stellen wir sicher, dass Ihr Projekt nicht nur termingerecht, sondern auch in höchster Qualität abgeschlossen wird.",
  },
];

const ProductTabs = () => {
  return (
    <>
      <ul
        className="nav nav-tabs d-block d-md-flex justify-content-between wow fadeInUp"
        role="tablist"
      >
        {tabData.map((tab) => (
          <li className="nav-item" role="presentation" key={tab.id}>
            <button
              className={`nav-link ${tab.id === "sp1" ? "active" : ""}`}
              data-bs-toggle="tab"
              data-bs-target={`#${tab.id}`}
              type="button"
              role="tab"
            >
              {tab.title}
              <span className="d-none d-lg-inline-block">{tab.subtitle}</span>
            </button>
          </li>
        ))}
      </ul>
      <div
        className="tab-content position-relative mt-20 lg-mt-80"
        data-aos="fade-up"
      >
        
        <div className="shapes shape-two rounded-circle" />
        <img
          src="/images/shape/shape_33.svg"
          alt="media"
          className="lazy-img shapes shape-three"
        />
        <img
          src="/images/shape/shape_34.svg"
          alt="media"
          className="lazy-img shapes shape-four"
        />
        {tabData.map((tab) => (
          <div
            className={`tab-pane ${tab.id === "sp1" ? "active show" : ""}`}
            id={tab.id}
            key={tab.id}
          >
            <div className="flex-container">
              <img
                src={tab.image}
                 alt="media"
                className="lazy-img main-screen w-50"
              />
              <div className="text-content">
              <p>{tab.content}</p>
              
              <Link
                href="/Kontakt"
                className="btn-twentyOne fw-500 tran3s d-block text-center"
                >
                  Kostenloses Erstgespräch
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductTabs;
