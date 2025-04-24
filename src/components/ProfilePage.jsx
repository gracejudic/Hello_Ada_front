import React from "react";
import PostsDetails from "./PostsDetails";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDetails from "./UserDetails";
import EditUser from "./EditUser";

const ProfilePage = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/users/:id"
          element={
            <div className="min-h-screen flex flex-col md:flex-row gap-6 p-1 bg-rose-100 items-stretch">
              {/* Colonne UserDetails */}
              <div className="w-full md:w-1/4 h-full">
              <UserDetails />
              </div>
              {/* Colonne PostsDetails (à droite) */}
              <div className="w-full md:w-3/4">
                <PostsDetails />
              </div>
            </div>
          }

        />
        <Route path="/users/:id/updateProfile" element={<EditUser />} />
      </Routes>
    </Router>
  );
};

export default ProfilePage;
