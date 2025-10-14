import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePages from './pages/HomePages';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  return (
    <div className="bg-[url('./src/assets/bgimage.svg')] bg-contain">
      <Routes>
        <Route path='/' element={<HomePages />} />
         <Route path='/login' element={<LoginPage/>} />
          <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
