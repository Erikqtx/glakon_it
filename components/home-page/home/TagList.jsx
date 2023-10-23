const TagList = () => {
  const tags = [
    { color: "#", text: "Kundenzufriedenheit" },
    { color: "#", text: "Erfahrung" },
    { color: "#", text: "Innovativ" },
    { color: "#", text: "Individuell" },
    { color: "#", text: "Vertrauenswürdig" },
    { color: "#", text: "Kundenzentriert" },
    { color: "#", text: "Sicher" },
  ];

  return (
    <ul className="d-flex flex-wrap align-items-center style-none">
      {tags.map((tag, index) => (
        <li key={index}>
          <a href="#">
            <span style={{ backgroundColor: tag.color }}>{tag.text}</span>
          </a>
        </li>
      ))}
      <li>&amp; viele mehr..</li>
    </ul>
  );
};

export default TagList;
