import "../styles/components/Education.scss";

const Education = () => {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="education__container">
        <div className="education__item">
          <h3>Bucheon University in Tashkent</h3>
          <span>Bachelors in IT (Ongoing)</span>
          <p>Tashkent, Uzbekistan</p>
        </div>
        <div className="education__item">
          <h3>IT-Academy Tashkent</h3>
          <span>Frontend Development Course (A+)</span>
          <p>Tashkent, Uzbekistan</p>
          <ul>
            <li>Built multiple projects using HTML, CSS, and JavaScript.</li>
            <li>
              Focused on responsive landing pages and single-page applications
              (SPAs).
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
