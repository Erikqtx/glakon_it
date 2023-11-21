import Image from "next/legacy/image";

const teamMembers = [
  {
    id: 1,
    name: "Erik Glaser",
    role: "Geschäftsführer & Software-Ingenier",
    imgSrc: "/images/team/erikglaser.webp",
  },
  {
    id: 2,
    name: "Johannes Billenstein",
    role: "Systemintegrator & Systemadministrator",
    imgSrc: "/images/team/johannesbillenstein.webp",
  },
  {
    id: 3,
    name: "Philip Eschenbacher",
    role: "Chief Operation Chief",
    imgSrc: "/images/team/philipeschenbacher.webp",
  },
  {
    id: 4,
    name: "Jonas Matzenbach",
    role: "Kameramann & Fotograf",
    imgSrc: "/images/team/jonasmatzenbach.webp",
  },
  {
    id: 5,
    name: "Jonathan Kramer",
    role: "Regisseur",
    imgSrc: "/images/team/jonathankramer.webp",
  },
  {
    id: 6,
    name: "Steffen Sprinz",
    role: "Kameramann & Fotograf",
    imgSrc: "/images/team/steffensprinz.webp",
  },
  {
    id: 7,
    name: "Fabio Greco",
    role: "Junior Frontend Entwickler",
    imgSrc: "/images/team/fabiogreco.webp",
  },
  {
    id: 8,
    name: "Julius Meier",
    role: "Lead Designer",
    imgSrc: "/images/team/juliusmeier.webp",
  },
  {
    id: 10,
    name: "Alexander Fintineanu",
    role: "Designer 2D/3D",
    imgSrc: "/images/team/alexanderfintineanu.webp",
  },
  {
    id: 9,
    name: "Dominik Fintineanu",
    role: "Designer 2D/3D",
    imgSrc: "/images/team/dominikfintineanu.webp",
  },
  {
    id: 11,
    name: "Robert Gross",
    role: "Senior Backend Entwickler",
    imgSrc: "/images/team/teamplatzhalter.webp",
  },
  {
    id: 12,
    name: "Thilo Hettmer",
    role: "Senior Frontend Entwickler",
    imgSrc: "/images/team/teamplatzhalter.webp",
  },
];

const Team1 = () => {
  return (
    <>
      {teamMembers.map((member) => (
        <div
          key={member.id}
          className="col-lg-3 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={`${member.id * 100}`}
        >
          <div className="team-block-two mt-40">
            <div className="img-meta position-relative">
              <Image
                width={312}
                height={281}
                src={member.imgSrc}
                alt={member.name}
                className="lazy-img team-img w-100"
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

export default Team1;
