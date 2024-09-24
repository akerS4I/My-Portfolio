/* eslint-disable react/no-unescaped-entities */
import "../styles/components/Profile.scss";
import placeholder from "../../public/hero-headshot.png";

const Profile = () => {
  return (
    <section id="profile" className="profile">
      <div className="profile__container">
        <img src={placeholder} alt="Profile" className="profile__image" />
        <div className="profile__info">
          <h2>Hi, I'm Asad 👋</h2>
          <p>
            Aspiring Frontend Developer with a strong foundation in HTML5, CSS3,
            and JavaScript, including hands-on experience in building websites
            and single-page applications. Passionate about creating clean,
            responsive, and accessible websites with a focus on performance and
            user experience. Skilled in React and SCSS, with a dedication to
            continuous learning and applying industry best practices like BEM. A
            fast learner eager to contribute to real-world projects in a
            professional setting.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
