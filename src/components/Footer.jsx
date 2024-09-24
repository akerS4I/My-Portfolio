import "../styles/components/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Igamberdiev Asad Sadievich. All rights
        reserved.
      </p>
      <p>
        Contact: <a href="mailto:recrentic@gmail.com">recrentic@gmail.com</a> |
        Telegram: <a href="https://t.me/akeraminai">@akeraminai</a>
      </p>
    </footer>
  );
};

export default Footer;
