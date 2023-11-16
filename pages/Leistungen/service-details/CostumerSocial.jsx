const CostumerSocial = ({ portfolio }) => {
  const socialLinks = [
    { icon: "fab fa-facebook-f", link: portfolio?.socialMedia?.facebook },
    { icon: "fab fa-instagram", link: portfolio?.socialMedia?.instagram },
    { icon: "fab fa-tiktok", link: portfolio?.socialMedia?.tiktok },
    { icon: "fab fa-linkedin-in", link: portfolio?.socialMedia?.linkedin },
    { icon: "fab fa-youtube", link: portfolio?.socialMedia?.youtube },
  ];

  const filteredSocialLinks = socialLinks.filter(link => link.link);

  return (
    <ul className="d-flex social-icon style-none pe-4">
      {filteredSocialLinks.map((link, i) => (
        <li key={i} className={i > 0 ? 'ms-5' : ''}>
          <a href={link.link} target="_blank" rel="noopener noreferrer">
            <i className={link.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CostumerSocial;
