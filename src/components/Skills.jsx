import "../styles/components/Skills.scss";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>
      <div className="skills__container">
        <div className="skills__item">
          <h3>HTML5 & CSS3</h3>
          <p>
            Expert in creating semantic, responsive, and accessible web pages
            using HTML5 and CSS3, including Flexbox and Grid layouts.
          </p>
        </div>
        <div className="skills__item">
          <h3>JavaScript</h3>
          <p>
            Proficient in Vanilla JS and ES6+ features. Experience with building
            interactive web applications and dynamic user interfaces.
          </p>
        </div>
        <div className="skills__item">
          <h3>React.js & SCSS</h3>
          <p>
            Skilled in building single-page applications using React.js and SCSS
            for styling. Familiar with component-based architecture and state
            management using hooks.
          </p>
        </div>
        <div className="skills__item">
          <h3>Figma & Photoshop</h3>
          <p>
            Comfortable with Figma for designing pixel-perfect interfaces and
            beginner to mid-level skills in Photoshop for image editing.
          </p>
        </div>
        <div className="skills__item">
          <h3>Git & GitHub</h3>
          <p>
            Solid understanding of version control using Git. Experience
            managing solo projects with GitHub repositories.
          </p>
        </div>
        <div className="skills__item">
          <h3>BEM Methodology</h3>
          <p>
            Familiar with BEM for organizing CSS code, ready to apply it in
            collaborative projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
