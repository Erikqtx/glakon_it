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
    title: "Zeit ist Geld",
    description: " Die Integration automatisierter Prozesse und optimierter Software führt zu erheblichen Zeitersparnissen, wie von 85% der Unternehmen berichtet wird.",
    value: 85,
  },
  {
    title: "Kundenbindung",
    description: "75% der Verbraucher geben an, dass sie Unternehmen bevorzugen, die innovative und benutzerfreundliche Softwarelösungen anbieten.",
    value: 75,
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
