import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="text-center mt-150 lg-mt-100" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-7 m-auto">
          <h2 className="tx-dark">Leidenschaft & Expertise</h2>
        </div>
      </div>
      {/* End .row */}
      <p className="cr-text text-lg tx-dark mt-30 mb-50 md-mt-20">
        Unser hochmotiviertes Team ist bereit, Sie bei jedem Projekt tatkräftig
        zu unterstützen.
      </p>
      <Link href="/Kontakt" className="btn-twentyOne fw-500 tran3s">
        Kostenloses Erstgespräch vereinbaren
      </Link>
    </div>
  );
};

export default CallToAction;
