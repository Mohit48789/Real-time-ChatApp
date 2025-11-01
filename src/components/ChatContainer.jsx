import React, { useRef, useEffect } from 'react';
import assets from '../assets/assets';

const messagesDummyData = [
  {
    senderId: '680f50e4f10f3cd28382ecf9',
    text: 'Hey there! How are you?',
    createdAt: '10:20 AM',
  },
  {
    senderId: 'user2',
    text: 'I’m good, just working on the project!',
    createdAt: '10:22 AM',
  },
  {
    senderId: '680f50e4f10f3cd28382ecf9',
    image: assets.profile_martin,
    createdAt: '10:25 AM',
  },
  {
    senderId: 'user2',
    text: 'Looks great 👍',
    createdAt: '10:26 AM',
  },
];

export function formatMessageTime(date) {
  const parsed = new Date(date);
  if (!isNaN(parsed.getTime())) {
    return parsed.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  }
  return date;
}

const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  const scrollEnd = useRef();

  useEffect(() => {
    if (scrollEnd.current) {
      scrollEnd.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedUser]);

  if (!selectedUser) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center text-white">
        <img src={assets.logo_icon} className="w-16 mb-3" alt="Logo" />
        <p className="text-lg font-medium">Chat anytime, anywhere</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[100vh] backdrop-blur-lg text-white">
      {/* --- Header --- */}
      <div className="flex items-center gap-3 py-3 px-4 border-b border-stone-500 flex-none">
        <img
          src={selectedUser.profilePic || assets.avatar_icon}
          alt={selectedUser.fullName}
          className="w-8 h-8 rounded-full object-cover"
        />
        <p className="flex-1 text-lg flex items-center gap-2">
          {selectedUser.fullName}
          <span
            className={`w-2 h-2 rounded-full ${
              selectedUser.isOnline ? 'bg-green-500' : 'bg-gray-500'
            }`}
          ></span>
        </p>
        <img
          onClick={() => setSelectedUser(null)}
          src={assets.arrow_icon}
          alt="back"
          className="md:hidden w-7 cursor-pointer"
        />
        <img
          src={assets.help_icon}
          alt="help"
          className="max-md:hidden w-5 cursor-pointer"
        />
      </div>

      {/* --- Scrollable Chat Body --- */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-3 scroll-smooth scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
        {messagesDummyData.map((msg, index) => (
          <div
            key={index}
            className={`flex items-end gap-2 ${
              msg.senderId === '680f50e4f10f3cd28382ecf9'
                ? 'justify-end'
                : 'justify-start'
            }`}
          >
            {msg.image ? (
              <img
                src={msg.image}
                alt=""
                className="max-w-[230px] border border-gray-700 rounded-lg overflow-hidden"
              />
            ) : (
              <p
                className={`p-2 max-w-[200px] text-sm font-light rounded-lg break-all bg-violet-500/30 text-white ${
                  msg.senderId === '680f50e4f10f3cd28382ecf9'
                    ? 'rounded-br-none'
                    : 'rounded-bl-none'
                }`}
              >
                {msg.text}
              </p>
            )}
            <div className="text-center text-xs">
              <img
                src={
                  msg.senderId === '680f50e4f10f3cd28382ecf9'
                    ? assets.avatar_icon
                    : assets.profile_martin
                }
                alt="profile"
                className="w-7 h-7 rounded-full mx-auto"
              />
              <p className="text-gray-500">{formatMessageTime(msg.createdAt)}</p>
            </div>
          </div>
        ))}
        <div ref={scrollEnd}></div>
      </div>

      {/* --- Input Bar --- */}
      <div className="flex items-center gap-3 p-3 border-t border-gray-700 bg-gray-900 flex-none">
        <div className="flex flex-1 items-center bg-gray-800 rounded-full px-3">
          <input type="file" id="image" accept="image/png, image/jpeg" hidden />
          <label htmlFor="image" className="cursor-pointer">
            <img
              src={assets.gallery_icon}
              alt="Gallery"
              className="w-5 mr-3 opacity-80 hover:opacity-100"
            />
          </label>

          <input
            type="text"
            placeholder="Send a message"
            className="flex-1 text-sm bg-transparent text-white placeholder-gray-400 outline-none p-2"
          />
        </div>

        <img
          src={assets.send_button}
          alt="Send"
          className="w-7 cursor-pointer hover:opacity-80"
        />
      </div>
    </div>
  );
};

export default ChatContainer;
