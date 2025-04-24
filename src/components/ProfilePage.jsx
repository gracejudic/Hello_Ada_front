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
                    <Route path="/users/:id" element={ 
                        <div><div><UserDetails/></div>
                    <div><PostsDetails/></div><div/>
                    </div>
                    }/>
                    <Route path="/users/:id/updateProfile" element={<EditUser />} />
                </Routes>
            </div>
        </Router>
    );
};
  
export default ProfilePage;