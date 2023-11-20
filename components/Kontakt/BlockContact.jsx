import Image from "next/legacy/image";

const BlockContact = () => {
  const addressBlocks = [
    {
      icon: "/images/icon/icon_location.png",
      title: "Standort",
      content: "Rosenbadstraße 7, 91522 Ansbach",
      delay: "100",
      href: "https://www.google.com/maps/place/GLAKON+IT+AGENTUR/@49.3012625,10.5705622,15z/data=!4m2!3m1!1s0x0:0x17abbe451e96aaef?sa=X&ved=2ahUKEwjp04jn8dKCAxVhSvEDHQ8WAsMQ_BJ6BAhBEAA",
    },
    {
      icon: "/images/icon/icon_call.png",
      title: "Telefon",
      content: "(+49) 0 981 97766644",
      delay: "200",
      href: "tel:+4998197766644",
    },
    {
      icon: "/images/icon/icon_mail.png",
      title: "E-Mail",
      content: "info@glakon.de",
      delay: "300",
      href: "mailto:info@glakon.de",
    },
  ];

  return (
    <>
      {addressBlocks.map((block, index) => (
        <div
          className="col-md-4"
          key={index}
          data-aos="fade-up"
          data-aos-delay={block.delay}
        >
          <div className="address-block-two text-center mb-40">
            <a
              href={block.href}
              taget="_blank"
              rel="noreferrer"
              className={block.href.includes("tel:") ? "call" : "webaddress"}
            >
              <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
                <Image width={30} height={30} src={block.icon} alt="icon" />
              </div>
              <h5 className="title">{block.title}</h5>
              <p>
                {block.content} <br />
              </p>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockContact;
