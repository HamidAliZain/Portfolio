import "./nav.css";

export const Navbar = () => {
  return (
    <>
      <div className="overlay-content">
        <a
          href="https://github.com/HamidAliZain"
          style={{ textDecoration: "none" }}
          target="_blank"
          ref="navid"
          >
          <h3 className="name-tag">Hamid Ali</h3>
        </a>
        <div className="nav-icon">
          <a
            className="ican-a"
            href="https://twitter.com/HamidAliZain"
            target="_blank"
            ref="navclass"
          >
            <i className="fa-brands fa-twitter nav-logo"></i>
          </a>
          <a
            className="ican-a"
            href="https://www.linkedin.com/in/hamid-ali-973382219/"
            target="_blank"
            ref="ffs"
          >
            <i className="fa-brands fa-linkedin-in nav-logo2"></i>
          </a>
        </div>
      </div>
    </>
  );
};
