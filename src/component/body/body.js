import "./body.css";
import ReactFullpage from "@fullpage/react-fullpage";
import buisnes from "./img/Conact.png";
import list from "./img/Lisr.png";
import clock from "./img/clock.png";
import covid from "./img/COvid.png";
import fiver from "./img/fiver.png";
import { Link } from "react-router-dom";
import { Navbar } from "../navbar/navbar";
import { FullPage } from "react-full-page/lib";

export const Body = () => {
  return (
    <>
      <Navbar />
      <ReactFullpage
        licenseKey={FullPage}
        scrollOverflow={true}
        scrollingSpeed={1100}
        render={({ state, fullpageApi }) => {
          return (
            <>
              <div id="fullpage-wrapper">
                <div className="section section1 fp-tableCell">
                  <div className="des">
                    <h1> Hamid Ali </h1>
                    <div className="line-contaner">
                      <div className="lin"></div>
                      <div className="lin-2"></div>
                    </div>
                    <h5 className="des-h5">Web Developer</h5>
                  </div>
                </div>
                <div className="moon">
                  <h1>Portfolio</h1>
                </div>

                <div className="section section2 fp-tableCell">
                  <div className="project-section">
                    <h1>Projects</h1>
                    <div className="line-contaner">
                      <div className="lin"></div>
                      <div className="lin-2"></div>
                    </div>
                    <h5 className="project-h5">Websites</h5>
                    <Link to="/Projects">
                      <button className="butt">Show me more</button>
                    </Link>
                  </div>

                  <div className="project-overview">
                    <a
                      href="https://loving-shaw-765607.netlify.app/"
                      target="_blank"
                      rel="a/;dlwl"
                    >
                      <img src={buisnes} alt="buisness" className="image" />
                    </a>
                    <a
                      href="https://list-setup-com.netlify.app/"
                      target="_blank"
                      rel="setyup"
                    >
                      <img src={list} alt="list" className="image" />
                    </a>
                    <a
                      href="https://timer-web-appli.netlify.app/"
                      target="_blank"
                      rel="dsj/"
                    >
                      <img src={clock} className="image" alt="clock" />
                    </a>
                    <a
                      href="https://romantic-kirch-c9947e.netlify.app/"
                      target="_blank"
                      rel="dgas"
                    >
                      <img src={covid} className="image" alt="covid" />
                    </a>
                  </div>
                </div>
                {/* 3 section */}
                <div className="section section3">
                  <div className="contact-secion">
                    <h1 className="contact">Get In Touch</h1>
                    <h4 className="contact-mail">
                      hamidzainulabideen@gmail.com
                    </h4>
                    <div className="line-contaner">
                      <div className="lin"></div>
                      <div className="lin-2"></div>
                    </div>
                    <h4 className="contact-me">Wantedly</h4>
                    <a href="https://github.com/HamidAliZain" rel="hamidalioo" target="_blank">
                      <i className="fa-brands fa-github icon"></i>
                    </a>
                    <a href="https://twitter.com/HamidAliZain" rel="takwer" target="_blank">
                      <i className="fa-brands fa-twitter icon2"></i>
                    </a>
                  </div>
                  <a
                    href="https://www.fiverr.com/users/hamidali178/manage_gigs"
                    rel="laber"
                    target="_blank"
                  >
                    <img className="fiver" src={fiver} alt="fiver" />
                  </a>
                </div>
              </div>
            </>
          );
        }}
      />
      );
    </>
  );
};
