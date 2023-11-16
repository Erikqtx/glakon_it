const PortfolioDetailsTitle = ({ portfolio }) => {
  return (
    <div className="fancy-feature-fiftyOne position-relative mt-200">
      <div className="container">
        <div className="row">
          <div className="col-lg-7" data-aos="fade-right">
            <div className="title-style-five mb-65 lg-mb-20">
              <div className="sc-title-two fst-italic position-relative">
                {portfolio?.category}
              </div>
              <h2 className="main-title fw-500 tx-dark">{portfolio && portfolio.projectInfo && portfolio.projectInfo.clientName}</h2>
            </div>
          </div>
        </div>
      </div>
      {/* /.container */}
      <img
        src="/images/shape/shape_172.svg"
        alt="Glakon IT Logo Ansbach Region Nürnberg"
        className="lazy-img shapes shape-two"
      />
      <img
        src="/images/shape/shape_175.svg"
        alt="Glakon IT Logo Ansbach Region Nürnberg"
        className="lazy-img shapes shape-three"
      />
    </div>
  );
};

export default PortfolioDetailsTitle;
