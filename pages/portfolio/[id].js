import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import SocialShare from "../../components/portfolio/portfolio-details/SocialShare";
import ProjectDetails from "../../components/portfolio/portfolio-details/ProjectDetails";
import ProjectSlide from "../../components/portfolio/portfolio-details/ProjectSlide";
import CallToAction from "../../components/portfolio/CallToAction";
import PortfolioGallery from "../../components/portfolio/portfolio-details/PortfolioGallery";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import portfolioData from "../../data/portfolio";
import PortfolioDetailsTitle from "../../components/portfolio/portfolio-details/PortfolioDetailsTitle";
import CostumerSocial from "../Leistungen/service-details/CostumerSocial";
import Link from "next/link";

const DynamicPortfolioDetails = () => {
  const router = useRouter();
  const [portfolio, setPortfolio] = useState({});
  const id = router.query.id;

  useEffect(() => {
    if (!id) return;
    setPortfolio(portfolioData.find((item) => item.id == id));
  }, [id]);

  return (
    <>
      <Seo pageTitle="Unsere Projekte" />
      <DefaulHeader />

      <PortfolioDetailsTitle portfolio={portfolio} />

      <div className="portfolio-details-two lg-pb-10 md-pt-10 ">
        <div className="project-desctiption">
          <div className="container">
            <div className="row">
              <div className="col-lg-8" data-aos="fade-right">
                <ProjectSlide portfolio={portfolio} />
              </div>

              <div className="col-lg-4" data-aos="fade-left">
                <div className="sidebar ms-xl-5">
                  <div className="row">
                    <ProjectDetails details={portfolio} />
                  </div>
                  <CostumerSocial portfolio={portfolio} />
                </div>
              </div>
            </div>

            <div className="project-pagination m-auto pt-100 lg-pt-50 sm-pt-10">
              <div className="row gx-xxl-5">
                <div className="col-sm-6">
                  <div className="arrow-block position-relative zn2 mt-20 wow fadeInLeft">
                    <img
                      src={`/images/media/img_0${
                        parseInt(id) === 1 ? 8 : parseInt(id) - 1
                      }.webp`}
                      alt="Glakon IT Logo Ansbach Region Nürnberg"
                      className="lazy-img w-100"
                    />
                    <div className="hover-content tran3s position-absolute d-flex flex-column align-items-center justify-content-center">
                      <div className="text-white fw-500 pg-title">
                        Zurück
                      </div>
                      <Link
                        href={`/Portfolio/${
                          parseInt(id) === 1 ? 8 : parseInt(id) - 1
                        }`}
                        className="arrow rounded-circle text-center tran3s"
                      >
                        <i className="bi bi-arrow-left" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="arrow-block position-relative zn2 mt-20 wow fadeInRight">
                    <img
                      src={`/images/media/img_0${
                        parseInt(id) === 8 ? 1 : parseInt(id) + 1
                      }.webp`}
                      alt="Glakon IT Logo Ansbach Region Nürnberg"
                      className="lazy-img w-100"
                    />
                    <div className="hover-content tran3s position-absolute d-flex flex-column align-items-center justify-content-center">
                      <div className="text-white fw-500 pg-title">
                        Weiter
                      </div>
                      <Link
                        href={`/Portfolio/${
                          parseInt(id) === 8 ? 1 : parseInt(id) + 1
                        }`}
                        className="arrow rounded-circle text-center tran3s"
                      >
                        <i className="bi bi-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DefaultFooter />
    </>
  );
};

export default DynamicPortfolioDetails;
