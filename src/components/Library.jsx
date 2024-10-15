import React, { useState } from 'react';
import Images from './Images';
import Videos from './Videos';
import Books from './Books'; 
import '../css/Library.css';

const Library = ({ setCart }) => {  // Nhận setCart từ props
  const [activeTab, setActiveTab] = useState('images');

  return (
    <div className="library">
      <h1 className="library__header">My Library</h1>
      
      {/* Tabs để chuyển đổi giữa các phần */}
      <div className="library__tabs">
        <button 
          className={`library__tab-button ${activeTab === 'images' ? 'active' : ''}`} 
          onClick={() => setActiveTab('images')}>
          Images
        </button>
        <button 
          className={`library__tab-button ${activeTab === 'videos' ? 'active' : ''}`} 
          onClick={() => setActiveTab('videos')}>
          Videos
        </button>
        <button 
          className={`library__tab-button ${activeTab === 'books' ? 'active' : ''}`} 
          onClick={() => setActiveTab('books')}>
          Books
        </button>
      </div>
      
      {/* Hiển thị nội dung tương ứng với tab đang được chọn */}
      <div className="library__content">
        {activeTab === 'images' && <Images />}
        {activeTab === 'videos' && <Videos />}
        {activeTab === 'books' && <Books setCart={setCart} />}  {/* Truyền setCart vào Books */}
      </div>
    </div>
  );
};

export default Library;
