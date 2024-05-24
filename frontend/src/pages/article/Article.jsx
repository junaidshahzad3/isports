import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { articlesdata } from "../../constants/articlesdata";

const Article = () => {
  const navigate = useNavigate();
  const param = useParams();
  const newData = articlesdata.find(
    (article) => Number(article.id) === Number(param.id)
  );
  let relatedPosts = articlesdata
    .slice(0, 10)
    .filter((article) => Number(article.id) !== Number(param.id));

  if (newData) {
    return (
      <div className="flex justify-center">
        <div className="w-full max-w-[1200px] p-6 flex flex-col gap-4 justify-center">
          <div className="text-3xl font-bold">{newData.title}</div>
          <img
            src={newData.image}
            alt={`${newData.id}`}
            className="w-full h-full max-h-[700px] object-cover"
          />
          <div>
            by: <b>{newData.by}</b>
          </div>
          <div>{newData.content}</div>
          <br />
          <div className="text-3xl font-bold">Related Posts</div>
          <div className="overflow-x-auto flex gap-4 p-4">
            {(relatedPosts || [])?.map((values, index) => (
              <div
                key={index}
                className="group overflow-hidden cursor-pointer w-full min-w-[200px] hover:shadow-lg hover:rounded"
                onClick={() => navigate(`/article/${values.id}`)}
              >
                <div className="relative">
                  <img
                    className="w-full h-[150px] object-cover shadow-inner rounded"
                    src={values.image}
                    alt={values.title}
                  />
                </div>
                <div className="py-4 px-4">
                  <p className="text-gray-700 text-sm">{`by ${values.by}`}</p>
                  <div className="font-bold mb-2">{values.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    <div className="text-center text-3xl">No page found</div>;
  }
};

export default Article;
