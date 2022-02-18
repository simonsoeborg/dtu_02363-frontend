import './App.css';
import GlobalNavbar from './Components/Global/Navigation';
import LandingPage from './Components/LandingPage';
import AdminPanel from './Components/AdminPanel';
import UserById from './Components/UserById';
import PlaceOrder from './Components/PlaceOrder';
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
                    <Route path="/User/:id" element={<UserById />} ></Route>
                    <Route path="Login" element={<LandingPage />} ></Route>
                    <Route path="AdminPanel" element={<AdminPanel />} ></Route>
                    <Route path="PlaceOrder" element={<PlaceOrder />} ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;