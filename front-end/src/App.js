import React, { useEffect, useRef } from "react";
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
import Login from "./components/Login/Login";
import { RequireAuth } from "./services/authService";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getApiUrl } from "./api.js";

function App() {
  const hasCountedVisits = useRef(false);

  const countVisits = async () => {
    try {
      await axios.post(`https://${getApiUrl()}/countVisitsWeb`);
    } catch (error) {
      console.error(error);
    }
  };

  const infoWebSite = () => {
    toast.info(
      "เว็บไซต์นี้จัดทำขึ้นเพื่อการพัฒนาสำหรับการศึกษาจึงขออนุญาตเข้าถึงข้อมูล อาจจะมีบางเนื้อหาที่ต้องมีการปรับปรุงแก้ไขเพื่อให้ถูกต้องตามกฏหมายของการใช้งานเว็บไซต์ทั่วไป",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      }
    );
  };

  useEffect(() => {
    if (!hasCountedVisits.current) {
      hasCountedVisits.current = true;
      infoWebSite();
      countVisits();
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/teamLogin" element={<Login />} />
          <Route path="/home/restaurant/:id" element={<Restaurant />} />
          <Route path="/random" element={<Random />} />
          <Route path="/report" element={<Report />} />
          <Route
            path="/admin"
            element={
              <RequireAuth>
                <Admin />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/manageRestaurant"
            element={
              <RequireAuth>
                <ManageRestaurant />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/manageRestaurant/add"
            element={
              <RequireAuth>
                <AddRestaurant />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/manageRestaurant/edit/:id"
            element={
              <RequireAuth>
                <EditRestaurant />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/manageRestaurant/addImage/:id/:name/:alley"
            element={
              <RequireAuth>
                <AddImage />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/like"
            element={
              <RequireAuth>
                <AdminLike />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/report"
            component={Admin}
            element={
              <RequireAuth>
                <AdminReport />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/dashboard"
            component={Admin}
            element={
              <RequireAuth>
                <AdminDashboard />
              </RequireAuth>
            }
          />
          <Route path="*" index element={<Home />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
