import "bootstrap/dist/css/bootstrap.min.css"; // Import css files to project
import "./App.css";
import GlobalNavbar from "./AdminApp/Navigation/Navigation";
import LandingPage from "./LandingPage";
import AdminPanel from "./AdminApp/AdminPanel/AdminPanel";
import UserById from "./AdminApp/User/UserById";
import Login from "./AdminApp/Login/Login";
import LoginResult from "./AdminApp/Login/LoginResult";
import Register from "./AdminApp/Login/Register";
import RestaurantById from "./AdminApp/Restaurant/RestaurantById";
import Order from "./EasyTapApp/Order/Order";
import TableTop from "./EasyTapApp/TableTop/TableTop";
import EasyTap from "./EasyTapApp/EasyTap";
import Layout from "./EasyTapApp/RestaurantLayout/RestaurantOverview";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { authentication } from "./Stores/AuthenticationStore";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { isAuthenticated } = useAuth0();
  const [role, setRole] = useState("");
  const [pin, setPin] = useState(0);
  if( isAuthenticated ) {
    if(pin === 0 || pin === undefined) {
      setInterval(() => {
        setPin(authentication.getPin());
      }, 2000)
    }

    if(role === "" || role === undefined) {
        setInterval(() => {
          setRole(authentication.getRole());
        }, 2000)
    }
  }
  return (
    <div className="App">
      { role !== "waiter" && (
      <GlobalNavbar role={role} />
      )}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage role={role} />}/>
          <Route path="/AdminPanel/" element={<AdminPanel />}/>
          <Route path="/User/:email" element={<UserById />}/>
          <Route path="/Login" element={
          <Login role={role} />
          } />
          <Route path="/Login/Register" element={<Register />}/>
          <Route path="/Login/LoginResult" element={
          <LoginResult role={role} setRole={setRole} pin={pin} setPin={setPin} />
          }/>
          <Route path="/Restaurant/:id" element={<RestaurantById />}/>
          <Route path="/EasyTap" element={<EasyTap role={role} pin={pin}/>}/>
          <Route path="/EasyTap/TableTop" element={<TableTop />}/>
          <Route path="/EasyTap/Order/:id" element={<Order />}/>
          <Route path="/EasyTap/Layout" element={<Layout />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default observer(App);
