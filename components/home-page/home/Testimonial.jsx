import React, { useRef } from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const testimonials = [
    {
      id: 1,
      text: "Klasse Team, schnelle und gute Beratung. Überragende Umsetzung und ein klasse Endergebnis. Vielen Dank und gerne wieder!",
      name: "Markus Streng",
      role: "Geschäftsführer MST Streng",
    },
    {
      id: 2,
      text: "Absolut kundenorientiert, menschlich und auf Augenhöhe. Preis/Leistungsverhältnis ist super und man fühlt sich als Kunde absolut wohl. Die Qualität von unserem Video und meine eigene Website ist 1A. Kann ich nur weiterempfehlen!",
      name: "Stefan Ordner",
      role: "Vermögensberater",
    },
    {
      id: 3,
      text: "Genailed!",
      name: "Chefket",
      role: "Künstler",
    },
  ];

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
      <div className="feedback_slider_two">
        <Slider ref={sliderRef} {...settings} arrows={false}>
          {testimonials.map((testimonial) => (
            <div className="item" key={testimonial.id}>
              <div className="feedback-block-two text-center">
                <p className="mb-80 lg-mb-40">{testimonial.text}</p>
                <h4 className="m0">{testimonial.name}</h4>
                <span className="opacity-75">{testimonial.role}</span>
              </div>
              {/* /.feedback-block-two */}
            </div>
          ))}
        </Slider>
      </div>
      {/* /.feedback_slider_two */}

      <ul className="slider-arrows slick-arrow-two d-flex justify-content-center style-none mt-35">
        <li className="prev_f2 slick-arrow tran3s" onClick={goToPrev}>
          <i className="bi bi-arrow-left" />
        </li>
        {/* End slick prev arrow end */}

        <li className="next_f2 slick-arrow tran3s" onClick={goToNext}>
          <i className="bi bi-arrow-right" />
        </li>
        {/* End slick next arrow end */}
      </ul>
    </>
  );
};

export default Testimonial;
