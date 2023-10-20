import Link from "next/link";
import { pagesItems, portfolioItems } from "../../data/menu";
import {
  isActiveLink,
  isActiveParent,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";

import { useRouter } from "next/router";
import Image from "next/image";

const MainMenu = () => {
  const router = useRouter();
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
                  src="/images/logo/Glakon_Logo_Black.png"
                  alt="Glakon IT Agentur Ansbach"
                  width={105}
                  height={40}
                />
              </Link>
            </div>
          </li>
          {/* End li */}

          <li className="nav-item dropdown mega-dropdown-md active">
            <Link
              className="nav-link"
              href="/"
              role="button"
              aria-expanded="false"
            >
              Home
            </Link>
          </li>
          {/* End li (home mega menu) */}
          <li className="nav-item">
            <Link
              className="nav-link"
              href="/Leistungen/UeberUns"
              role="button"
            >
              Über Uns
            </Link>
          </li>
          {/* End li (pages) */}

          <li className="nav-item  dropdown">
            <Link
              className="nav-link dropdown-toggle"
              href="/Leistungen/Softwareentwicklung"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Leistungen
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link href="/Leistungen/Softwareentwicklung" className="dropdown-item">
                  <span>Softwareentwickluung</span>
                </Link>
              </li>
              <li>
                <Link href="/Leistungen/Design" className="dropdown-item">
                  <span>Design</span>
                </Link>
              </li>
              <li>
                <Link href="/Leistungen/Social Media" className="dropdown-item">
                  <span>Social Media</span>
                </Link>
              </li>
              <li>
                <Link href="/Leistungen/Videografie" className="dropdown-item">
                  <span>Videografie</span>
                </Link>
              </li>
              <li>
                <Link href="/Leistungen/Fotografie" className="dropdown-item">
                  <span>Fotografie</span>
                </Link>
              </li>
              <li>
                <Link href="/Leistungen/Systemintegration" className="dropdown-item">
                  <span>Systemintegration</span>
                </Link>
              </li>
              <li>
                <Link href="/Leistungen/Hosting" className="dropdown-item">
                  <span>Hosting</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="dropdown-item">
                  <span>Fragen?</span>
                </Link>
              </li>
            </ul>
          </li>
          {/* End li (pages) */}

          <li className="nav-item">
            <Link
              className="nav-link"
              href="/Portfolio/Portfolio"
              role="button"
            >
              Portfolio
            </Link>
          </li>
          {/* End li (portfolio) */}

          {/*           <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Blog
            </a>
            <ul className="dropdown-menu">
              {blogItems.map((blog, index) => (
                <li key={index}>
                  <Link href={blog.link} className="dropdown-item">
                    <span>{blog.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li> */}
          {/* End li (blog) */}

          <li className="nav-item">
            <Link className="nav-link" href="/Kontakt" role="button">
              Kontakt
            </Link>
          </li>
          {/* End li (contact) */}
        </ul>
        {/* End ul */}

        {/* Mobile Content */}
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link href="/contact" className="btn-twentyOne fw-500 tran3s">
              KONTAKT
            </Link>
          </div>
        </div>
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;
