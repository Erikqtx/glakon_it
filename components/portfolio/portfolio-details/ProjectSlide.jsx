import Image from "next/legacy/image";


const ProjectSlide = ({ portfolio }) => {
  const images = Array.isArray(portfolio?.image)
    ? portfolio.image
    : [];

  return (
    <div
      id="gallery-carousel"
      className="carousel slide me-xxl-5 md-mb-40"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <Image
              width={820}
              height={600}
              layout="responsive"
              src={image}
              className="d-block w-100 "
              alt={`media-${index + 1}`}
            />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#gallery-carousel"
        data-bs-slide="prev"
      >
        <i className="bi bi-chevron-left"></i>
        <span className="visually-hidden">Zurück</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#gallery-carousel"
        data-bs-slide="next"
      >
        <i className="bi bi-chevron-right"></i>
        <span className="visually-hidden">Weiter</span>
      </button>
    </div>
  );
};

export default ProjectSlide;
