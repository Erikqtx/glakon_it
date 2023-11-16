const Partners = () => {
  const partners = [
    { name: "Bezirk Mittelfranken", url: "https://bezirk-mittelfranken.de", className: "br-name" },
    { name: "Die Grotte", url: "https://die-grotte.de", className: "br-name" },
    { name: "Ecosphere Automation", url: "https://ecosphere-automation.de", className: "br-name" },
    { name: "PV-Technik", url: "https://pv-technik-franken.de", className: "br-name" },
  ];

  return (
    <>
      {partners.map((partner, index) => (
        <a key={index} href={partner.url} target="_blank" rel="noopener noreferrer" className={partner.className}>
          {partner.name}
        </a>
      ))}
    </>
  );
};

export default Partners;
