const columns = [
  {
    title: "Links",
    links: [
      { label: "Home", url: "/" },
      { label: "Über Uns", url: "Leistungen/about-us-v1" },
      { label: "Leistungen", url: "Leistungen/service-v1" },
      { label: "Portfolio", url: "/portfolio/Portfolio" },
      { label: "Kontakt", url: "/contact" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Nutzungserklärung", url: "/" },
      { label: "Geschäftsbedingungen", url: "/" },
      { label: "Datenschutzerklärungen", url: "/" },
      { label: "Cookie-Richtlinien", url: "/" },
      { label: "Impressum", url: "/" },
    ],
  },
  {
    title: "Leistungen",
    links: [
      { label: "Softwareentwicklung", url: "Leistungen/service-details-v1" },
      { label: "Design", url: "Leistungen/service-details-v2" },
      { label: "Social Media", url: "Leistungen/service-details-v3" },
      { label: "Videografie", url: "Leistungen/service-details-v4" },
      { label: "Fotografie", url: "Leistungen/service-details-v5" },
      { label: "Systemintegration", url: "Leistungen/service-details-v6" },
      { label: "Hosting", url: "Leistungen/service-details-v7" },
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
