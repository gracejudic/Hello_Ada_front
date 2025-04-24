import React from "react";
import PostsDetails from "./PostsDetails";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDetails from "./UserDetails";
import EditUser from "./EditUser";


const ProfilePage = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/users/:id" element={<UserDetails />} />
                    <Route path="/users/:id/updateProfile" element={<EditUser />} />
                    <Route path="api/posts/user/:id" element={<PostsDetails/>} />
                </Routes>
            </div>
        </Router>
    );
};
  
export default ProfilePage;