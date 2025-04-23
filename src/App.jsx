// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import UserDetails from './components/UserDetails';
import PostsDetails from './components/PostsDetails';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="api/posts/user/:id" element={<PostsDetails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;