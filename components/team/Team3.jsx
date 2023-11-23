import Image from "next/legacy/image";

const teamMembers = [
  {
    id: 1,
    name: "Erik Glaser",
    role: "CEO & Software-Ingenieur",
    imgSrc: "/images/team/erikglaser.webp",
  },
  {
    id: 2,
    name: "Johannes Billenstein",
    role: "Systemintegrator",
    imgSrc: "/images/team/johannesbillenstein.webp",
  },
  {
    id: 3,
    name: "Jonathan Kramer",
    role: "Videograf & Regisseur",
    imgSrc: "/images/team/jonathankramer.webp",
  },
  {
    id: 4,
    name: "Alexander Fintineanu",
    role: "Designer",
    imgSrc: "/images/team/alexanderfintineanu.webp",
  },
];

const Team3 = () => {
  return (
    <>
      {teamMembers.map((member) => (
        <div
          key={member.id}
          className="col-12 col-sm-6 col-lg-3" // Adjusted for full width on extra small to small devices
          data-aos="fade-up"
          data-aos-delay={`${member.id * 100}`}
          style={{ display: "flex", justifyContent: "center" }} // Inline style for demonstration
        >
          <div className="team-block-two mt-40">
            <div className="img-meta position-relative">
              <Image
                width={312}
                height={281}
                src={member.imgSrc}
                alt={member.name}
                className="lazy-img team-img w-100 mx-auto" // mx-auto to center the image
              />
              <div className="info text-center">
                <h5 className="tx-dark fs-20 mb-5">{member.name}</h5>
                <div className="tx-dark opacity-75">{member.role}</div>
              </div>
              {/* /.info */}
            </div>
            {/* /.img-meta */}
          </div>
          {/* /.team-block-two */}
        </div>
        /* End .col-3 */
      ))}
    </>
  );
};

export default Team3;
