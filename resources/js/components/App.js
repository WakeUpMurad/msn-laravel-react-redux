import React from 'react';
import Table from "./employeeList/Table";
import Profile from "./pages/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Dialogs from "./pages/Dialogs/Dialogs";
import Users from "./pages/Users/Users";
import News from "./pages/News/News";
import Music from "./pages/Music/Music";
import Settings from "./pages/Settings/Settings";

function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <Routes>
                    <Route path='profile/*' element={<Profile />}/>
                    <Route path='dialogs/*' element={<Dialogs />}/>
                    <Route path='users/*' element={<Users />}/>
                    <Route path='home' element={<Table />}/>
                    <Route path='news' element={<News/>} />
                    <Route path='music' element={<Music/>} />
                    <Route path='settings' element={<Settings/>} />
                    <Route path='*' element={<Table/>} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
