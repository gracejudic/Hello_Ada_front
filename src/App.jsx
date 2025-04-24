import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/:id/*" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
