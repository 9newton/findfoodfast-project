import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Random from './components/Random/Random';
import Report from './components/Report/Report';
import Admin from './components/Admin/Admin';
import Add from './components/Admin/Content';


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
            <Route path="/admin/add" element={<Add />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
