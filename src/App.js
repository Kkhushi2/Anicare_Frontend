
import DashBoard from './admin/component/Dashboard';

import { Login } from '../public/Login';
import { Routes, BrowserRouter as Router, Route } from "react-router-dom"
function App() {
  return (
    <div>
     <Router>
        <Routes>
         
          <Route element={<DashBoard />} path={"/dashboard"} />
          <Route element={<Login/>} path={"/Login"} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
