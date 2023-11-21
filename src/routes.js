import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Explorer from "./pages/explorer";
import Home from "./pages/home";
import Header from "./components/header";
import NoPage from "./pages/noPage";
import ExploreDetail from "./pages/exploreDetail";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explorer />} />
        <Route path="/explore/:id" element={<ExploreDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
