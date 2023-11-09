import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebookF,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const DisplayContainer = () => {
  return (
    <>
      <div className="display-container">
        <div className="display-banner-image"></div>
        <div className="profile-img-container display-img-container">
          <div className="profile-img-wrapper display-img-wrapper"></div>
        </div>
        <div className="display-text">
          <p className="text-xl py-1.5 no-underline">Ruman Islam</p>
          <p className="no-underline">
            Hi, my name is Ruman Islam and I'm a front end web developer.
            Welcome to my personal website!
          </p>
        </div>
      </div>
      <div className="social-icon-container display-flex">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/zayedkhan.ruman"
        >
          <span className="social-icon display-flex">
            <FontAwesomeIcon icon={faFacebookF} className="item" />
          </span>
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/ruman-islam-6a567016a/"
        >
          <span className="social-icon display-flex">
            <FontAwesomeIcon icon={faLinkedinIn} className="item" />
          </span>
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Ruman-Islam"
        >
          <span className="social-icon display-flex">
            <FontAwesomeIcon icon={faGithub} className="item" />
          </span>
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/@rumanislam7528"
        >
          <span className="social-icon display-flex">
            <FontAwesomeIcon icon={faYoutube} className="item" />
          </span>
        </a>
      </div>
    </>
  );
};

export default DisplayContainer;
