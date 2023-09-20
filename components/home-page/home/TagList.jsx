const TagList = () => {
  const tags = [
    { color: "rgba(255, 130, 130, 0.13)", text: "Kundenzufriedenheit" },
    { color: "rgba(73, 230, 213, 0.13)", text: "Erfahren" },
    { color: "rgba(73, 179, 230, 0.13)", text: "Niedrige Preise" },
    { color: "rgba(251, 208, 80, 0.15)", text: "Individuell" },
    { color: "rgba(213, 126, 255, 0.15)", text: "Vertrauenswürdig" },
    { color: "rgba(189, 231, 122, 0.15)", text: "Großartiger Support" },
    { color: "rgba(255, 152, 152, 0.15)", text: "Sicher" },
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
