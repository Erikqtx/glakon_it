const TagList = () => {
  const tags = [
    { color: "#fbb72d", text: "Kundenzufriedenheit" },
    { color: "#e93b19", text: "Erfahren" },
    { color: "#f38426", text: "Niedrige Preise" },
    { color: "#e30a45", text: "Individuell" },
    { color: "#e81a74", text: "Vertrauenswürdig" },
    { color: "#ee505c", text: "Großartiger Support" },
    { color: "#f47a5e", text: "Sicher" },
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
