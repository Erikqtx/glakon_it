import Link from "next/link";

const FeatureData = [
  {
    id: 1,
    iconSrc: "/images/icon/icon_13.svg",
    title: "Softwareentwicklung",
    description:
      "Maßgeschneiderte Software, die Ihre Ideen in leistungsstarke Lösungen umsetzt und Ihr Unternehmen vorantreibt.",
  },
  {
    id: 2,
    iconSrc: "/images/icon/icon_14.svg",
    title: "Design",
    description:
      "Ansprechende Designs, die Eindruck hinterlassen und Ihre Botschaft prägnant vermitteln.",
  },
  {
    id: 3,
    iconSrc: "/images/icon/icon_15.svg",
    title: "Videografie",
    description:
      "Kreative Werbespots und inspirierende Tutorials, die Ihre Zielgruppe begeistern.",
  },
  {
    id: 4,
    iconSrc: "/images/icon/icon_16.svg",
    title: "Social Media",
    description:
      "Wir erreichen Ihre Zielgruppe, fördern Engagement und präsentieren Ihre Marke optimal auf Plattformen.",
  },
  {
    id: 5,
    iconSrc: "/images/icon/icon_17.svg",
    title: "Fotografie",
    description:
      "Von Produktaufnahmen bis zu Unternehmensporträts, verleihen wir Ihrer Identität Leben.",
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
              <img src={feature.iconSrc} alt="icon" className="lazy-img" />
            </div>
            <h4 className="mt-25 mb-20">{feature.title}</h4>
            <p className="mb-50">{feature.description}</p>
            <Link href="/pages-menu/service-details">
              <img
                src="/images/icon/icon_18.svg"
                alt="icon"
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
