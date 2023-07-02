import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import Login from "./component/Login";
import Navbar from "./component/Navbar";
import Booking from "./component/Booking";
import Footer from "./component/Footer";
import TicketDetail from "./component/TicketDetail";
import EditProfile from "./component/EditProfile";
import AllBookingAdmin from "./component/AllBookingAdmin";
import LandingPage from "./component/Home";
import FlightDetail from "./component/FlightDetail";
import Register from "./component/Register";
import ForgotPassword from "./component/ForgotPassword";
import GlobalStyle from "./style/GlobalStyle";
import SearchResult from "./component/Search";
import NotFound from "./component/NotFound";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<LandingPage />} />
          <Route path="/search-result" element={<SearchResult />} />
          <Route
            path="/profile-admin/:id"
            element={
              <>
                <Navbar />
                <AllBookingAdmin />
                <Footer />
              </>
            }
          />
          <Route
            path="/booking/:id"
            element={
              <>
                <Navbar />
                <Booking />
                <Footer />
              </>
            }
          />
          <Route
            path="/ticket-detail/:id"
            element={
              <>
                <Navbar />
                <TicketDetail />
                <Footer />
              </>
            }
          />
          <Route
            path="/profile-edit/:id"
            element={
              <>
                <Navbar />
                <EditProfile />
                <Footer />
              </>
            }
          />
          <Route
            path="/flight"
            element={
              <>
                <Navbar />
                <FlightDetail />
              </>
            }
          />
        </Route>

        <Route path="/">
          <Route index element={<LandingPage />} />
        </Route>

        <Route path="/login">
          <Route index element={<Login />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;