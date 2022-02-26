import "bootstrap/dist/css/bootstrap.min.css"; // Import css files to project
import './App.css';
import GlobalNavbar from './AdminApp/Navigation/Navigation';
import LandingPage from './LandingPage';
import AdminPanel from './AdminApp/AdminPanel/AdminPanel';
import UserById from './AdminApp/User/UserById';
import Login from './AdminApp/Login/Login';
import Register from './AdminApp/Login/Register';
import RestaurantById from './AdminApp/Restaurant/RestaurantById';
import Order from './EasyTapApp/Order/Order';
import TableTop from './EasyTapApp/TableTop/TableTop';
import EasyTap from './EasyTapApp/EasyTap';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <GlobalNavbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} ></Route>
                    <Route path="/AdminPanel/" element={<AdminPanel />} ></Route>
                    <Route path="/User/:id" element={<UserById />} ></Route>
                    <Route path="/Login" element={<Login />} ></Route>
                    <Route path="/Login/Register" element={<Register />} ></Route>
                    <Route path="/Restaurant/:id" element={<RestaurantById/>} ></Route>
                    <Route path="/EasyTap" element={<EasyTap />} ></Route>
                    <Route path="/EasyTap/TableTop" element={<TableTop />} ></Route>
                    <Route path="/EasyTap/Order" element={<Order />} ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;