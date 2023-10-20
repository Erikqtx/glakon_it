import Link from "next/link";
import React from "react";

const footerData = [
  {
    title: "Links",
    className: "col-lg-3 col-sm-4 ms-auto mb-30",
    links: [
      { label: "Home", href: "/" },
      { label: "Über", href: "Leistungen/pricing" },
      { label: "Leistungen", href: "Leistungen/about-us-v1" },
      { label: "Portfolio", href: "/blog/blog-v2" },
      { label: "Kontakt", href: "Leistungen/service-v1" },
      { label: "Erstgespräch", href: "/blog/blog-v3" },
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
    title: "Produkte",
    className: "col-xl-2 col-lg-3 col-sm-4 mb-30",
    links: [
      { label: "Tour starten", href: "/blog/1" },
      { label: "Live chat", href: "/blog/2" },
      { label: "Kundendienst", href: "/blog/3" },
      { label: "Soziales", href: "/blog/4" },
      { label: "Kollaborationen", href: "/blog/4" },
      { label: "Kundenbewertungen", href: "/blog/5" },
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
