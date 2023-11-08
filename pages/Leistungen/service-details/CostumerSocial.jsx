const Social = () => {
  const socialLinks = [
    { icon: "fab fa-facebook-f", link: "https://www.facebook.com/GlakonIT/" },
    { icon: "fab fa-instagram", link: "https://www.instagram.com/glakon.it/" },
    { icon: "fab fa-tiktok", link: "https://www.tiktok.com/@glakonit" },
    { icon: "fab fa-linkedin-in", link: "https://de.linkedin.com/company/glakon-it-agentur" },
    { icon: "fab fa-youtube", link: "https://www.youtube.com/@glakonit2246" },
  ];

  return (
    <ul className="d-flex justify-content-between social-icon style-none pe-4">
      {socialLinks.map((link, i) => (
        <li key={i}>
          <a href={link.link} target="_blank" rel="noopener noreferrer">
            <i className={link.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
