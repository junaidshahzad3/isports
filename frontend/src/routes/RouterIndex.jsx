import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomLayout from "../layout/CustomLayout";
import Home from "../pages/home/Home";

export default function RouterIndex() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<CustomLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
