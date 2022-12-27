import React from "react";
import About from "../../components/About";
import CopyRight from "../../components/CopyRight";
import MyArticles from "../../components/MyArticles";
import MyWorks from "../../components/MyWorks";
import PageTitle from "../../components/PageTitle";
import ScrollUpBtn from "../../components/ScrollUpBtn";
import WhatIDo from "../../components/WhatIDo";
import WhatNext from "../../components/WhatNext";

const Intro = () => {
  return (
    <div className="p-5 flex flex-col items-center h-full">
      <PageTitle title="Home" />
      <div className="home-container">
        <div className="light-border-bottom">
          <About />
        </div>
        <div>
          <WhatIDo />
        </div>
        <div className="light-border-bottom">
          <MyWorks />
        </div>
        <div className="light-border-bottom">
          <div className="about my-10">
            <h1 className="title text-left">Some Of My Articles</h1>
            <div className="horizontal-line"></div>
          </div>
          <MyArticles />
        </div>
        <div>
          <WhatNext />
        </div>
        <ScrollUpBtn />
        <CopyRight />
      </div>
    </div>
  );
};

export default Intro;
