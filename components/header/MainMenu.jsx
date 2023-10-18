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
            <a
              className="nav-link"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Home
            </a>
          </li>
          {/* End li (home mega menu) */}
          <li className="nav-item  dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Über
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link href="/pages-menu/about-us-v1" className="dropdown-item">
                  <span>Über Uns</span>
                </Link>
              </li>
              <li>
                <Link href="/pages-menu/testimonials" className="dropdown-item">
                  <span>Team</span>
                </Link>
              </li>
              <li>
                <Link href="/pages-menu/testimonials" className="dropdown-item">
                  <span>Partner</span>
                </Link>
              </li>
            </ul>
          </li>
          {/* End li (pages) */}

          <li className="nav-item  dropdown">
            <Link
              className="nav-link dropdown-toggle"
              href="/pages-menu/service-v1"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Leistungen
            </Link>
            <ul className="dropdown-menu">
              {pagesItems.map((item, index) => (
                <li className="dropdown-submenu dropdown" key={index}>
                  <a
                    className="dropdown-item dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                    href="#"
                  >
                    <span>{item.title}</span>
                  </a>
                  <ul className="dropdown-menu">
                    {item.subItems.map((subMenu, i) => (
                      <li key={i}>
                        <Link href={subMenu.link} className="dropdown-item">
                          <span>{subMenu.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li>
                <Link href="/pages-menu/testimonials" className="dropdown-item">
                  <span>Hosting</span>
                </Link>
              </li>
              <li>
                <Link href="/pages-menu/pricing" className="dropdown-item">
                  <span>Fragen?</span>
                </Link>
              </li>
              <li>
                <Link href="/pages-menu/testimonials" className="dropdown-item">
                  <span>Kundenstimmen</span>
                </Link>
              </li>
            </ul>
          </li>
          {/* End li (pages) */}

          <li className="nav-item">
            <Link
              className="nav-link"
              href="/portfolio/portfolio-v1"
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
            <Link className="nav-link" href="/contact" role="button">
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
