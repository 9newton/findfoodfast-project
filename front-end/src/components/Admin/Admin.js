import React, { useState } from "react";
import "./Admin.css";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../Footer";
import MenuAdmin from "./AdminMenu/MenuAdmin";
import Content from "./AdminContent/ContentAdmin";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import AdminLike from "./AdminLike/AdminLike";
import AdminDashboard from "./AdminDashboard/AdminDashboard";

function Admin() {
  const [show, setShow] = useState(false);
  return (
    <div className="admin">
      <div className="page-container">
        <div className="content-wrap">
          <main className={show ? "space-toggle" : null}>
            <div>
              <header
                className={`header-admin ${show ? "space-toggle" : null}`}
              >
                <div className="header-toggle" onClick={() => setShow(!show)}>
                  <FaBars
                    className={`fas fa-bars ${
                      show ? "fa-solid fa-xmark" : null
                    }`}
                  />
                </div>
              </header>

              <aside className={`sidebar ${show ? "showed" : null}`}>
                <MenuAdmin />
              </aside>
              <AdminDashboard />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Admin;
