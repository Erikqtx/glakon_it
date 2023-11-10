const ProjectDetails = ({ details }) => {
  if (!details || !details.projectInfo) {
    return null; // or a message indicating that there are no project details
  }

  return (
    <>
    
    <h3 className="mb-20">{details.category}</h3>
                  <p className="border-bottom pb-40 mb-35 lg-pb-20">
                    {details.projectInfo.content}
                  </p>
      <div className="col-12 mb-35">
        <div className="pt-title fw-bold tx-dark text-uppercase">
          Kunde
        </div>
        <div className="pt-text">{details.projectInfo.clientName}</div>
      </div>
      {/* End .col-12 */}

      <div className="col-12 mb-50">
        <div className="pt-title fw-bold tx-dark text-uppercase">
          Leistung
        </div>
        <div className="pt-text">{details.category}</div>
      </div>
      {/* End .col-12 */}
    </>
  );
};

export default ProjectDetails;
