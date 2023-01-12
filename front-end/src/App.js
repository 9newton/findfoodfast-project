import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Restaurant from "./components/Home/Restaurant/Restaurant";
import Random from "./components/Random/Random";
import Report from "./components/Report/Report";
import Admin from "./components/Admin/Admin";
import ManageRestaurant from "./components/Admin/AdminContent/ContentAdmin";
import AdminLike from "./components/Admin/AdminLike/AdminLike";
import AdminReport from "./components/Admin/AdminReport/AdminReport";
import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";
import EditRestaurant from "./components/Admin/AdminContent/Edit";
import AddRestaurant from "./components/Admin/AdminContent/Popup";
import AddImage from "./components/Admin/AdminContent/AddImage";
import MenuAdmin from "./components/Admin/AdminMenu/MenuAdmin";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Hello world");
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="/home/restaurant/:id" element={<Restaurant />} />
            <Route path="/random" element={<Random />} />
            <Route path="/report" element={<Report />} />
            <Route path="/admin" element={<Admin />} />
            <Route
              path="/admin/manageRestaurant"
              element={<ManageRestaurant />}
            />
            <Route
              path="/admin/manageRestaurant/add"
              element={<AddRestaurant />}
            />
            <Route
              path="/admin/manageRestaurant/edit/:id"
              element={<EditRestaurant />}
            />
            <Route
              path="/admin/manageRestaurant/addImage/:id/:name/:alley"
              element={<AddImage />}
            />
            <Route path="/admin/like" element={<AdminLike />} />
            <Route
              path="/admin/report"
              component={Admin}
              element={<AdminReport />}
            />
            <Route
              path="/admin/dashboard"
              component={Admin}
              element={<AdminDashboard />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
