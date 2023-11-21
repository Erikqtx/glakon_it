const columns = [
  {
    title: "Links",
    links: [
      { label: "Home", url: "/" },
      { label: "Leistungen", url: "/Leistungen/UnsereLeistungen" },
      { label: "Portfolio", url: "/portfolio/Portfolio" },
      { label: "Über Uns", url: "/UeberUns" },
      { label: "Kontakt", url: "/Kontakt" },
      { label: "Fernwartung", url: "/Fernwartung.exe" },
    ],
  },
  {
    title: "Leistungen",
    links: [
      { label: "Softwareentwicklung", url: "/Leistungen/Softwareentwicklung" },
      { label: "Design", url: "/Leistungen/Design" },
      { label: "Social Media", url: "/Leistungen/SocialMedia" },
      { label: "Videografie", url: "/Leistungen/Videografie" },
      { label: "Fotografie", url: "/Leistungen/Fotografie" },
      { label: "Systemintegration", url: "/Leistungen/Systemintegration" },
      { label: "Hosting", url: "/Leistungen/Hosting" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Geschäftsbedingungen", url: "/legal/agbs" },
      { label: "Datenschutzerklärungen", url: "/legal/Datenschutz" },
      { label: "Impressum", url: "/legal/Impressum" },
    ],
  },
];

const Footer2 = () => {
  return (
    <>
      {columns.map((column, index) => (
        <div className="col-xl-2 col-lg-3 col-sm-4 mb-30" key={index}>
          <h5 className="footer-title tx-dark fw-normal">{column.title}</h5>
          <ul className="footer-nav-link style-none">
            {column.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Footer2;
