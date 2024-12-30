import img1 from "../assets/image/group-users.png";
import img2 from "../assets/image/Jobs.png";
import img3 from "../assets/image/Internship.png";
import img4 from "../assets/image/degree.png";
import "./FreeTraining.css";

const FreeTraining = () => {
  return (
    <section className="container">
      <ul className="cards">
        <li className="card">
          <div className="icon_background">
            <div className="card__icon">
              <img src={img1} alt="Free Trainings" />
            </div>
          </div>
          <div className="Info_div">
            <h3 className="card__title">Free Trainings</h3>
            <p className="card__description">
              Transform your career with our comprehensive and industrial focus
              training programmes.
            </p>
          </div>
        </li>
        <li className="card">
          <div className="icon_background">
            <div className="card__icon">
              <img src={img2} alt="Free Jobs" />
            </div>
          </div>
          <div className="Info_div">
            <h3 className="card__title">Free Jobs</h3>
            <p className="card__description">
              Access various job opportunities designed to suit your skill set.
            </p>
          </div>
        </li>
        <li className="card">
          <div className="icon_background">
            <div className="card__icon">
              <img src={img3} alt="Free Internship" />
            </div>
          </div>
          <div className="Info_div">
            <h3 className="card__title">Free Internship</h3>
            <p className="card__description">
              Gain hands-on experience with our industry-focused internships.
            </p>
          </div>
        </li>
        <li className="card">
          <div className="icon_background">
            <div className="card__icon">
              <img src={img4} alt="Degree Program" />
            </div>
          </div>
          <div className="Info_div">
            <h3 className="card__title">Degree Programs</h3>
            <p className="card__description">
              Pursue accredited degree programs to advance your education.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default FreeTraining;
