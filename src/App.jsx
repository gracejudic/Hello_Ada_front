import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import UserDetails from './components/UserDetails';
import PostsDetails from './components/PostsDetails';
import EditUser from './components/EditUser';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
      <div>
        <Header />
        {<ProfilePage/>}
      </div>
  );
}

export default App;