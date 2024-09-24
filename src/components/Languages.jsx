import "../styles/components/Languages.scss";

const Languages = () => {
  return (
    <section id="languages" className="languages">
      <h2>Languages</h2>
      <div className="languages__container">
        <div className="languages__item">
          <h3>Russian</h3>
          <p>Native</p>
        </div>
        <div className="languages__item">
          <h3>Uzbek</h3>
          <p>Native</p>
        </div>
        <div className="languages__item">
          <h3>English</h3>
          <p>C1 Level (IELTS scheduled)</p>
        </div>
      </div>
    </section>
  );
};

export default Languages;
