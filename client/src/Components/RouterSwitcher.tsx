import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Movies from "../Pages/Movies";
import ManageCatalog from "../Pages/ManageCatalog";

function RouterSwitcher() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/manage-catalog" element={<ManageCatalog />} />
    </Routes>
  );
}

export default RouterSwitcher;
