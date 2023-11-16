import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const styles = buildStyles({
  pathColor: "#fbb72d",
  textColor: "#000F5C",
  textSize: "20px",
  trailColor: "#fbb72d",
});

const data = [
  {
    title: "Zeit ist Geld",
    description: "Durch den Einsatz agiler IT-Lösungen erreichen Kunden eine 85% schnellere Markteinführung neuer Produkte oder Dienstleistungen.",
    value: 85,
  },
  {
    title: "Sicherheit erhöhen",
    description: "Kunden profitieren von einer um 80% verbesserten Sicherheit ihrer digitalen Infrastruktur durch professionelle IT-Sicherheitsdienstleistungen.",
    value: 80,
  },
];

const ProgressBar = () => {
  return (
    <>
      {data.map((item, index) => (
        <div className="col-xl-6 col-lg-12 col-md-6" key={index}>
          <div className="block-style-eight mb-30">
            <div className="d-flex align-items-center">
              <div className="text">
                <h6>{item.title}</h6>
                <p>{item.description}</p>
                
              </div>
              {/* /.text */}
              <div style={{ width: 100, height: 100 }}>
                <CircularProgressbar
                  value={item.value}
                  strokeWidth={5}
                  text={`${item.value}%`}
                  styles={styles}
                />
              </div>
            </div>
          </div>
          {/* /.block-style-eight */}
        </div>
      ))}
    </>
  );
};

export default ProgressBar;
