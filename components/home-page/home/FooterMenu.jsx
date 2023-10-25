import Link from "next/link";
import React from "react";

const footerData = [
  {
    title: "Links",
    className: "col-lg-3 col-sm-4 ms-auto mb-30",
    links: [
      { label: "Home", href: "/" },
      { label: "Über", href: "Leistungen/UeberUns" },
      { label: "Leistungen", href: "Leistungen/UnsereLeistungen" },
      { label: "Portfolio", href: "/Portfolio/Portfolio" },
      { label: "Kontakt", href: "/Kontakt" },
      { label: "Erstgespräch", href: "/Kontakt" },
    ],
  },
  {
    title: "Rechtliches",
    className: "col-lg-3 col-sm-4 mb-30",
    links: [
      { label: "Nutzungserklärung", href: "Leistungen/faq" },
      { label: "Geschäftsbedingungen", href: "Leistungen/faq" },
      { label: "Datenschutzbedingungen", href: "Leistungen/faq" },
      { label: "Cookie-Richtlinien", href: "Leistungen/faq" },
      { label: "Impressum", href: "Leistungen/faq" },

    ],
  },
  {
    title: "Leistungen",
    className: "col-xl-2 col-lg-3 col-sm-4 mb-30",
    links: [
      { label: "Softwareentwicklung", href: "/Leistungen/Softwareentwicklung" },
      { label: "Design", href: "/Leistungen/Design" },
      { label: "Social Media", href: "/Leistungen/SocialMedia" },
      { label: "Videografie", href: "/Leistungen/Videografie" },
      { label: "Fotografie", href: "/Leistungen/Fotografie" },
      { label: "Videografie", href: "/Leistungen/Videografie" },
      { label: "Systemintegration", href: "/Leistungen/Systemintegration" },
      { label: "Hosting", href: "/Leistungen/Hosting" },
    ],
  },
];

const FooterLinks = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 footer-intro mb-40">
            <div className="logo">
              <Link href="/">
                <img src="/images/logo/GlakonLogo_113x50_black.png" alt="logo" width={113} height={50}/>
              </Link>
            </div>
            <a href="#" className="email tran3s fs-18 mt-35 mb-15 md-mt-10">
              info@glakon.de
            </a>
            <br />
            <a href="#" className="mobile tran3s fs-20 fw-500">
              01511 1004177
            </a>
          </div>
          {footerData.map(({ title, className, links }) => (
            <div className={className} key={title}>
              <h5 className="footer-title tx-dark fw-500">{title}</h5>
              <ul className="footer-nav-link style-none">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterLinks;
