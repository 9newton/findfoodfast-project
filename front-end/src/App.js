import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Random from './components/Random/Random';
import Report from './components/Report/Report';
import Admin from './components/Admin/Admin';
import AdminAdd from './components/Admin/ContentAdmin';
import AdminLike from './components/Admin/AdminLike';
import AdminReport from './components/Admin/AdminReport';
import AdminDashboard from './components/Admin/AdminDashboard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="/random" element={<Random />} />
            <Route path="/report" element={<Report />} />

            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/add" element={<AdminAdd />} />
            <Route path="/admin/like" element={<AdminLike />} />
            <Route path="/admin/report" element={<AdminReport />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;