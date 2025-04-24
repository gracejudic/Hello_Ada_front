import tailwindcss from "@tailwindcss/vite";
import React from "react";
import PostsDetails from "./PostsDetails";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


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