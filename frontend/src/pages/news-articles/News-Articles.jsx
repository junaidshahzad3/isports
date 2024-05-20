import React from "react";
import Articles from "../../components/news-articles/Articles";

const NewsArticles = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col justify-center">
        <Articles />
      </div>
    </div>
  );
};

export default NewsArticles;
