import "../styles/components/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1>Igamberdiev Asad Sadievich</h1>
      <p>Junior Frontend Developer</p>
      <nav>
        <a href="#profile">Profile</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#languages">Languages</a>
        <a href="#availability">Availability</a>
      </nav>
    </header>
  );
};

export default Header;
