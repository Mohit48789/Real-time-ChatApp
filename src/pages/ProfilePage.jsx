import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import assets from '../assets/assets';

const ProfilePage = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [address, setAddress] = useState('Martin Johnson');
  const [bio, setBio] = useState('Hi Everyone! I am using ChatApp');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-cover bg-no-repeat flex items-center justify-center px-4">
      <div className="w-5/6 max-w-3xl backdrop-blur-2xl bg-gray-900/60 text-gray-300 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center justify-between overflow-hidden">
        
        {/* Profile Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 p-10 flex-1 w-full sm:w-2/3"
        >
          <h3 className="text-lg font-semibold">Profile Details</h3>

          {/* Upload Profile Image */}
          <div className="flex flex-col items-center gap-3">
            <label htmlFor="avatar" className="cursor-pointer flex flex-col items-center">
              <input
                type="file"
                id="avatar"
                accept=".png,.jpg,.jpeg"
                hidden
                onChange={(e) => setSelectedImg(e.target.files[0])}
              />
              <img
                src={selectedImg ? URL.createObjectURL(selectedImg) : assets.avatar_icon}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-2 border-violet-600"
              />
              <p className="text-sm text-gray-400 mt-1">Upload profile image</p>
            </label>
          </div>

          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="address" className="text-sm">Full Name</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="bg-gray-800 rounded p-2 focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-2">
            <label htmlFor="bio" className="text-sm">Bio</label>
            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="bg-gray-800 rounded p-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-violet-600 hover:bg-violet-700 text-white py-2 px-4 rounded-lg mt-2 transition-all"
          >
            Save Profile
          </button>
        </form>

        {/* Logo Section (Beside Form) */}
        <div className="flex items-center justify-center p-10 w-full sm:w-1/3">
          <img
            src={assets.logo_icon}
            alt="App Logo"
            className="w-32 h-32 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
