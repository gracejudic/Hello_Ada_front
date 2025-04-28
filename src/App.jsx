import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetails from "./components/UserDetails";
import EditUser from "./components/EditUser";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/:id/*" element={<ProfilePage />} />
          <Route path="/users/:id/updateProfile" element={<EditUser/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
