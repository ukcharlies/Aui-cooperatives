// src/AnnouncementPage.js
import React, { useState } from 'react';

const AnnouncementPage = () => {
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: 'Announcement 1', content: 'Content for announcement 1', imageUrl: './src/images/dummy profile.jpeg' },
    { id: 2, title: 'Announcement 2', content: 'Content for announcement 2', imageUrl: './src/images/dummy profile.jpeg' },
    { id: 3, title: 'Announcement 3', content: 'Content for announcement 3', imageUrl: './src/images/dummy profile.jpeg' },
  ]);

  const refreshAnnouncements = () => {
    // Logic to refresh announcements goes here
    console.log('Refreshing announcements...');
  };

  return (
    <div className="max-w-sm mx-auto p-4">
      <header className="flex justify-between items-center mb-4">
        <h5 className="text-lg font-semibold">Announcements</h5>
        <button 
          className="flex items-center px-4 py-2 bg-blue-500 text-black font-semibold rounded hover:bg-blue-700" 
          onClick={refreshAnnouncements}
        >
          <img src="./src/images/refresh.png" alt="Refresh" className="w-5 h-5 mr-2" />
          Refresh
        </button>
      </header>
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="border p-4 rounded shadow flex items-center overflow-hidden">
            <img src={announcement.imageUrl} alt={announcement.title} className="w-12 h-12 rounded-full mr-4" />
            <div className="flex-1">
              <h2 className="text-xl font-semibold break-words">{announcement.title}</h2>
              <p className="text-sm mt-2 break-words">{announcement.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementPage;
