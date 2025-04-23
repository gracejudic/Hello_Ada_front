// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;