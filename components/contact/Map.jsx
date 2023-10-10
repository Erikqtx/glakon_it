const Map = () => {
  return (
    <div className="map-area-one p-30 mt-120 lg-mt-80 wow fadeInUp">
      <div className="box-layout">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10406.750025707857!2d10.5705622!3d49.3012625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4798bbe865df0831%3A0x17abbe451e96aaef!2sGLAKON%20IT%20AGENTUR!5e0!3m2!1sde!2sde!4v1696953151085!5m2!1sde!2sde"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;