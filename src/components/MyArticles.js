import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { articles } from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const MyArticles = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center">
        {pathname === "/"
          ? articles?.slice(0, 3)?.map((article, index) => (
              <div key={index} className="text-white article">
                <a target="_blank" rel="noreferrer" href={article.link}>
                  <div className="w-full h-44 overflow-hidden">
                    <img className="w-full h-full" src={article.img} alt="" />
                  </div>
                  <div className="bg-[#1E2A3A] p-3">
                    <div
                      style={{
                        borderBottom: "1px solid hsla(0,0%,100%,.05)",
                        height: "200px",
                      }}
                    >
                      <p className="text-[18px] font-bold no-underline">
                        {article.title}
                      </p>
                      <p className="my-5 text-[#919DAE] no-underline">
                        {article.description.slice(0, 200)}...
                      </p>
                    </div>
                    <div>
                      <p className="text-[#02cfb4] text-right mt-2 no-underline">
                        {article.date}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))
          : articles?.map((article, index) => (
              <div key={index} className="text-white article">
                <a target="_blank" rel="noreferrer" href={article.link}>
                  <div className="w-full h-44 overflow-hidden">
                    <img className="w-full h-full" src={article.img} alt="" />
                  </div>
                  <div className="bg-[#1E2A3A] p-3">
                    <div
                      style={{
                        borderBottom: "1px solid hsla(0,0%,100%,.05)",
                        height: "200px",
                      }}
                    >
                      <p className="text-[18px] font-bold no-underline">
                        {article.title}
                      </p>
                      <p className="my-5 text-[#919DAE] no-underline">
                        {article.description.slice(0, 200)}...
                      </p>
                    </div>
                    <div>
                      <p className="text-right mt-2 no-underline text-[#02cfb4]">
                        {article.date}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
      </div>
      {pathname.includes("/blog") || (
        <div className="w-full flex justify-center my-10">
          <div
            onClick={() => navigate("/blog")}
            className="border border-[#02cfb4] hover:bg-[#02cfb4] hover:text-white duration-300 flex items-center text-[#02cfb4] px-3 py-1"
          >
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              className="mr-2 mb-.5"
            />
            <button>See All Posts</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyArticles;
