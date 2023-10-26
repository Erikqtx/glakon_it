import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const styles = buildStyles({
  pathColor: "#ff3294",
  textColor: "#000F5C",
  textSize: "20px",
  trailColor: "#EFF4F7",
});

const data = [
  {
    title: "Reduzierung von Ausfallzeiten",
    description: "Durch IT-Supportsysteme kann die Ausfallzeit bei Kunden um durchschnittlich 78% reduziert werden.",
    value: 78,
  },
  {
    title: "Beschleunigung von Geschäftsprozessen",
    description: "IT-Lösungen können dazu beigetragen, dass Unternehmen ihre Geschäftsprozesse um 67% beschleunigen konnten.",
    value: 67,
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
