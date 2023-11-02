const TagList = () => {
  const tags = [
    { color: "#", text: "Effizienz" },
    { color: "#", text: "Kompetenz" },
    { color: "#", text: "Innovation" },
    { color: "#", text: "Transparenz" },
    { color: "#", text: "Professionalität" },
    { color: "#", text: "Fairness" },
    { color: "#", text: "Kundenorientierung" },
    { color: "#", text: "Sicherheit" },
  ];

  return (
    <ul className="d-flex flex-wrap align-items-center style-none">
      {tags.map((tag, index) => (
        <li key={index}>
          <a href="../Leistungen/UeberUns">
            <span style={{ backgroundColor: tag.color }}>{tag.text}</span>
          </a>
        </li>
      ))}
      <li>&amp; viele mehr..</li>
    </ul>
  );
};

export default TagList;
