import './App.css';
import GlobalNavbar from './Components/Global/Navigation';
import LandingPage from './Components/LandingPage';
import AdminPanel from './Components/AdminPanel';
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
                    <Route path="Login" element={<LandingPage />} ></Route>
                    <Route path="AdminPanel" element={<AdminPanel />} ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;