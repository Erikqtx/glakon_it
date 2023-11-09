const ProjectSlide = ({ portfolio }) => {
  const mediaItems = Array.isArray(portfolio?.slide) ? portfolio.slide : [];

  return (
    <div
      id="gallery-carousel"
      className="carousel slide me-xxl-5 md-mb-40"
      data-bs-ride="carousel"
      data-bs-interval="5000"
    >
      <div className="carousel-inner">
        {mediaItems.map((media, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            {media.endsWith(".webp") || media.endsWith(".jpg") || media.endsWith(".png") ? (
              <img
                src={media}
                className="d-block w-100"
                alt={`media-${index + 1}`}
              />
            ) : media.endsWith(".webm") ? (
              <video
                width={820}
                height={600}
                className="d-block w-100"
                controls
              >
                <source src={media} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            ) : media.includes("youtube.com") ? (
              <iframe
                width={820}
                height={600}
                src={media}
                title={`media-${index + 1}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            ) : null}
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
