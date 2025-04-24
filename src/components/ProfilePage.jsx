import React from "react";
import PostsDetails from "./PostsDetails";
import { BrowserRouter as Route, Routes } from 'react-router-dom';
import UserDetails from "./UserDetails";
import EditUser from "./EditUser";


const ProfilePage = () => {
    return (
            <div>
                <Routes>
                    <Route path="/" element={ 
                        <div><div><UserDetails/></div>
                    <div><PostsDetails/></div><div/>
                    </div>
                    }/>
                    <Route path="/users/:id/updateProfile" element={<EditUser />} />
                </Routes>
            </div>
    );
};
  
export default ProfilePage;