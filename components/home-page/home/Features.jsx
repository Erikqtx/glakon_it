import Link from "next/link";

const FeatureData = [
  {
    id: 1,
    iconSrc: "/images/icon/Icon-Softwareentwicklung.svg",
    title: "Softwareentwicklung",
    description:
      "Maßgeschneiderte Software, die Ihre Ideen in leistungsstarke Lösungen umsetzt und Ihr Unternehmen vorantreibt.",
      
  },
  {
    id: 2,
    iconSrc: "/images/icon/Icon-Design.svg",
    title: "Design",
    description:
      "Ansprechende Designs, die Eindruck hinterlassen und Ihre Botschaft prägnant vermitteln.",
  },
  {
    id: 3,
    iconSrc: "/images/icon/Icon-SocialMedia.svg",
    title: "SocialMedia",
    description:
      "Wir erreichen Ihre Zielgruppe, fördern Engagement und präsentieren Ihre Marke optimal auf Plattformen.",
  },
  {
    id: 4,
    iconSrc: "/images/icon/Icon-Videografie.svg",
    title: "Videografie",
    description:
      "Kreative Werbespots und inspirierende Tutorials, die Ihre Zielgruppe begeistern.",
  },
  {
    id: 5,
    iconSrc: "/images/icon/Icon-Fotografie.svg",
    title: "Fotografie",
    description:
      "Von Produktaufnahmen bis zu Unternehmensporträts, verleihen wir Ihrer Identität Leben.",
  },
  {
    id: 6,
    iconSrc: "/images/icon/Icon-Systemintegration.svg",
    title: "Systemintegration",
    description:
      "Wir optimieren Prozesse, erhöhen die Effizienz und sorgen dafür, dass Ihre Systeme reibungslos zusammenarbeiten.",
  },
  {
    id: 7,
    iconSrc: "/images/icon/Icon-Hosting.svg",
    title: "Hosting",
    description:
      "Mit zuverlässigen Hosting-Lösungen bieten wir nicht nur Speicherplatz, sondern auch Sicherheit und Geschwindigkeit.",
  },
  {
    id: 8,
    iconSrc: "/images/icon/Icon-Fragen.svg",
    title: "Fragen",
    description:
      " Keine Sorge, wir sind hier, um Ihnen zu helfen. Unser Expertenteam steht bereit, um all Ihre Fragen zu beantworten.",
  },
];

const Features = () => {
  return (
    <>
      {FeatureData.map((feature) => (
        <div
          key={feature.id}
          className="col-lg-4 col-md-6 mt-40"
          data-aos="fade-up"
          data-aos-delay={feature.id * 100}
        >
          <div className="card-style-three">
            <div className="icon d-flex align-items-end">
              <img src={feature.iconSrc} alt="Glakon IT Logo Ansbach Region Nürnberg" className="lazy-img" />
            </div>
            <h4 className="mt-25 mb-20">{feature.title}</h4>
            <p className="mb-10">{feature.description}</p>
            
            <Link href={`/Leistungen/${feature.title}`}>
              
                <img
                  src="/images/icon/icon_18.svg"
                  alt="Glakon IT Logo Ansbach Region Nürnberg"
                  className="lazy-img"
                />
              
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;
