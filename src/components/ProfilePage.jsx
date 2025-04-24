import React from "react";
import PostsDetails from "./PostsDetails";
import { BrowserRouter as Route, Routes } from 'react-router-dom';
import UserDetails from "./UserDetails";
import EditUser from "./EditUser";

const ProfilePage = () => {

  return (
    
    <div>
      <Routes>
    
        <Route
          path="/" element={
            <div className="min-h-screen flex flex-col md:flex-row gap-6 p-1 bg-rose-100 items-stretch">
              <div className="w-full md:w-1/4 h-full">
              <UserDetails />
              </div> 
              <div className="w-full md:w-3/4">
                <PostsDetails />
              </div>
            </div>} 
             />
        <Route path="/users/:id/updateProfile" element={<EditUser />} />
      </Routes>
        </div>
  );

};

export default ProfilePage;
