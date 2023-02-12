import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import SignUp from './components/Start/signup';
import SignIn from './components/Start/signin';
import PhilPage from './components/Philanthrophis/philPage';
import Search from './components/Philanthrophis/search';
import PhilVideo from './components/Philanthrophis/video';
import RoomPage from './components/Room/RoomPage';
import Home from './components/Start/home';
import NGOPage from './components/NGO/ngoPage';
import NGOVideo from './components/NGO/video';
import TieUp from './components/NGO/tieUp';
import Update from './components/NGO/update';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/ngoPage" element={<NGOPage/>}/>
      <Route path="/philPropile" element={<PhilPage />} />
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/video" element={<PhilVideo/>}/>
      <Route path='/room/:roomID' element={<RoomPage/>}/>
      <Route path="/ngovideo" element={<NGOVideo/>}/>
      <Route path="/tie" element={<TieUp/>}/>
      <Route path="/update" element={<Update/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
