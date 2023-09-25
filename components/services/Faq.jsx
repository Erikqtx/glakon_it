const accordionItems = [
  {
    id: 1,
    title: "Softwareentwicklung",
    content:
      "Unsere maßgeschneiderte Softwareentwicklung setzt Ihre Ideen in leistungsstarke digitale Lösungen um. Wir bieten innovative und zuverlässige Software, die Ihre Geschäftsprozesse optimiert und Ihr Unternehmen vorantreibt.",
  },
  {
    id: 2,
    title: "Design",
    content:
      "Unser Design-Team kreiert visuelle Meisterwerke, die Ihre Marke erstrahlen lassen. Wir gestalten ansprechende Designs, die Eindruck hinterlassen und Ihre Botschaft auf den Punkt bringen.",
  },
  {
    id: 3,
    title: "Social Media",
    content:
      "Steigern Sie Ihre Online-Präsenz mit unserer Social-Media-Expertise. Wir entwickeln Strategien, um Ihre Zielgruppe zu erreichen, Engagement zu fördern und Ihre Marke auf Plattformen wie nie zuvor zu präsentieren.",
  },
  {
    id: 4,
    title: "Videografie",
    content:
      "Unsere Videografen verwandeln Ideen in bewegende Bilder. Von kreativen Werbespots bis hin zu informativen Tutorials, wir schaffen Videos, die Ihre Zielgruppe begeistern und inspirieren.",
  },
  {
    id: 5,
    title: "Fotografie",
    content:
      "Unsere Fotografen fangen die Essenz Ihrer Marke in beeindruckenden Bildern ein. Von Produktaufnahmen bis hin zu Unternehmensporträts, wir verleihen Ihrer visuellen Identität Leben.",
  },
  {
    id: 6,
    title: "Systemintegration",
    content:
      "Unsere Systemintegrationslösungen sorgen für reibungslose Abläufe. Wir optimieren Ihre IT-Infrastruktur, um Datenfluss und Effizienz zu steigern und Ihr Geschäft zu unterstützen.",
  },
  {
    id: 7,
    title: "Hosting",
    content:
      "Unser Hosting-Service gewährleistet Sicherheit und Leistung. Wir bieten zuverlässige Hosting-Lösungen, damit Ihre Website stets verfügbar ist und Ihre Daten sicher geschützt sind.",
  },
];

const Faq = () => {
  return (
    <div className="accordion accordion-style-two md-mt-60" id="accordionOne">
      {accordionItems.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button ${item.id === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={item.id === 1 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              {item.title}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse${
              item.id === 1 ? " show" : ""
            }`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
