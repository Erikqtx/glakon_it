import Link from "next/link";
import { pagesItems, portfolioItems } from "../../data/menu";
import {
  isActiveLink,
  isActiveParent,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/legacy/image";

const MainMenu = () => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const isActive = (href) => {
    if (href === "/") {
      return router.pathname === href ? " active" : "";
    }
    return router.pathname.startsWith(href) ? " active" : "";
  };

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <Image
                  src="/images/logo/GlakonLogo_115x50_black.png"
                  alt="Glakon IT Agentur Ansbach"
                  width={105}
                  height={40}
                />
              </Link>
            </div>
          </li>
          {/* End li */}

          <li className={`nav-item${isActive("/")}`}>
            <Link
              className="nav-link"
              href="/"
              role="button"
              aria-expanded="false"
            >
              Home
            </Link>
          </li>
          <li className={`nav-item dropdown${isActive("/Leistungen")}`}>
            <Link
              className="nav-link dropdown-toggle"
              href="/Leistungen/UnsereLeistungen"
              role="button"
              aria-expanded={dropdownOpen}
            >
              Leistungen
            </Link>
            <ul className="dropdown-menu">
              <li className={`${isActive("/Leistungen/Softwareentwicklung")}`}>
                <Link
                  href="/Leistungen/Softwareentwicklung"
                  className="dropdown-item"
                >
                  <span>Softwareentwickluung</span>
                </Link>
              </li>
              <li className={`${isActive("/Leistungen/Design")}`}>
                <Link href="/Leistungen/Design" className="dropdown-item">
                  <span>Design</span>
                </Link>
              </li>
              <li className={`${isActive("/Leistungen/SocialMedia")}`}>
                <Link href="/Leistungen/SocialMedia" className="dropdown-item">
                  <span>Social Media</span>
                </Link>
              </li>
              <li className={`${isActive("/Leistungen/Videografie")}`}>
                <Link href="/Leistungen/Videografie" className="dropdown-item">
                  <span>Videografie</span>
                </Link>
              </li>
              <li className={`${isActive("/Leistungen/Fotografie")}`}>
                <Link href="/Leistungen/Fotografie" className="dropdown-item">
                  <span>Fotografie</span>
                </Link>
              </li>
              <li className={`${isActive("/Leistungen/Systemintegration")}`}>
                <Link
                  href="/Leistungen/Systemintegration"
                  className="dropdown-item"
                >
                  <span>Systemintegration</span>
                </Link>
              </li>
              <li className={`${isActive("/Leistungen/Hosting")}`}>
                <Link href="/Leistungen/Hosting" className="dropdown-item">
                  <span>Hosting</span>
                </Link>
              </li>
              <li>
                <Link href="/Kontakt" className="dropdown-item">
                  <span>Fragen?</span>
                </Link>
              </li>
            </ul>
          </li>
          {/* End li (pages) */}

          <li className={`nav-item${isActive("/portfolio/Portfolio")}`}>
            <Link
              className="nav-link"
              href="/portfolio/Portfolio"
              role="button"
            >
              Portfolio
            </Link>
          </li>
          <li className={`nav-item${isActive("/Leistungen/UeberUns")}`}>
            <Link
              className="nav-link"
              href="/Leistungen/UeberUns"
              role="button"
            >
              Über Uns
            </Link>
          </li>
          <li className={`nav-item${isActive("/Kontakt")}`}>
            <Link className="nav-link" href="/Kontakt" role="button">
              Kontakt
            </Link>
          </li>
        </ul>
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link href="/Kontakt" className="btn-twentyOne fw-500 tran3s">
              KONTAKT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainMenu;
