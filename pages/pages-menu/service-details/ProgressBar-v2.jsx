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
    title: "Der Erste Eindruck",
    description: "85% der Konsumenten geben an, dass das Design eines Produkts einen entscheidenden Einfluss auf ihre Kaufentscheidung hat.",
    value: 85,
  },
  {
    title: "Aufmerksamkeit",
    description: "80% der Internetnutzer geben an, dass sie Inhalte eher lesen, wenn sie mit ansprechenden Grafiken oder Designs präsentiert werden.",
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
