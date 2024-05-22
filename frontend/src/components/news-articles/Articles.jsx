import React, { useEffect, useState } from "react";
import { articlesdata } from "../../constants/articlesdata";
import { useSelector } from "react-redux";
import { getSearchedResults } from "../../helpers/getSearchedResults";

const Articles = () => {
  const search = useSelector((state) => state.feature.search);
  const [articles, setArticles] = useState(articlesdata || []);

  useEffect(() => {
    setArticles(getSearchedResults(search, articlesdata));
  }, [search]);

  return (
    <div className="flex flex-col gap-4 text-center items-center my-10">
      <div className="text-3xl font-bold">News Articles</div>
      {articles && articles?.length > 0 ? (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center">
          {articles?.map((values, index) => {
            // if (index !== 0) {
            return (
              <div
                key={index}
                className="p-6 space-y-2 min-w-[220px] w-full max-w-[300px] hover:shadow-lg rounded-xl border border-transparent hover:border-zinc-200"
              >
                <div className="flex flex-col gap-4 items-center">
                  <img
                    src={values.image}
                    alt=""
                    className="w-[150px] h-[150px] shadow-inner object-cover rounded-full border border-zinc-200"
                  />
                  <div className="font-bold">{values.title}</div>
                  <div className="font-bold">by {values.date}</div>
                  <div className="font-bold">{values.location}</div>
                  <div className="">{values.content}</div>
                </div>
              </div>
            );
            // }
          })}
        </div>
      ) : (
        <div className="w-full text-2xl font-bold text-center">
          No Results Found!
        </div>
      )}
    </div>
  );
};

export default Articles;
