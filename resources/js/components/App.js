import React from 'react';
import Table from "./employeeList/Table";
import Profile from "./pages/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Dialogs from "./pages/Dialogs/Dialogs";
import Users from "./pages/Users/Users";
import News from "./pages/News/News";
import Music from "./pages/Music/Music";
import Settings from "./pages/Settings/Settings";
import Home from "./pages/Home/Home";

function App() {
    return (
        <>
            <Routes>
                <Route path='home' element={<Home />}/>
                <Route path='profile/*' element={<Profile />}/>
                <Route path='dialogs/*' element={<Dialogs />}/>
                <Route path='users/*' element={<Users />}/>
                <Route path='news' element={<News/>} />
                <Route path='music' element={<Music/>} />
                <Route path='settings' element={<Settings/>} />
                <Route path='*' element={<Table/>} />
            </Routes>
        </>
    );
}

export default App;
