import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomLayout from "../layout/CustomLayout";
import Home from "../pages/home/Home";
import Faculty from "../pages/faculty/Faculty";
import NewsArticles from "../pages/news-articles/News-Articles";
import Article from "../pages/article/Article";

export default function RouterIndex() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<CustomLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/news-articles" element={<NewsArticles />} />
            <Route path="/article/:id" element={<Article />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
