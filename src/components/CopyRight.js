import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const CopyRight = () => {
  const year = new Date().getFullYear();
  return (
    <div className="copy-right about">
      <p className="no-underline mb-2">
        Follow me in
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Ruman-Islam"
        >
          <FontAwesomeIcon icon={faGithub} className="text-[#02cfb4] mx-1" />
        </a>
        &amp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ruman-islam-6a567016a/"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="text-[#02cfb4] mx-1"
          />
        </a>
        &amp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/@rumanislam7528"
        >
          <FontAwesomeIcon icon={faYoutube} className="text-[#02cfb4] mx-1" />
        </a>
      </p>
      <p className="no-underline text-[16px]">
        Design &amp; Build by
        <a href="https://github.com/Ruman-Islam" className="mx-1">
          Ruman Islam
        </a>
        | &copy; {year} All rights reserved
      </p>
    </div>
  );
};

export default CopyRight;
