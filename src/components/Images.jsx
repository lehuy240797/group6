import React, { useState, useEffect } from 'react';
import '../css/Images.css';

const Images = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  
  // Danh sách hình ảnh theo từng chủ đề với tên chú thích
  const imageGroups = {
    "Galaxies": [
      { src: '/assets/images/library/galaxies/milky-way.webp', title: 'Milky Way' },
      { src: '/assets/images/library/galaxies/andromeda.webp', title: 'Andromeda' },
      { src: '/assets/images/library/galaxies/ngc_1300.webp', title: 'NGC 1300' },
      { src: '/assets/images/library/galaxies/sombrero.webp', title: 'Sombrero' },
      { src: '/assets/images/library/galaxies/whirlpool.webp', title: 'Whirlpool' },
      { src: '/assets/images/library/galaxies/ugc5829.webp', title: 'UGC 5829' },
      { src: '/assets/images/library/galaxies/eso420g013.webp', title: 'ESO 420-G013' },
      { src: '/assets/images/library/galaxies/ngc6951.webp', title: 'NGC 6951' },
      { src: '/assets/images/library/galaxies/ngc5283.webp', title: 'NGC 5823' },
      { src: '/assets/images/library/galaxies/ngc_3239.webp', title: 'NGC 3239' },
    ],
    "Planets": [
      { src: '/assets/images/library/planets/toi700e.webp', title: 'TOI 700 e' },
      { src: '/assets/images/library/planets/GJ1252b.webp', title: 'GJ 1252 b' },
      { src: '/assets/images/library/planets/2rockyplanets.webp', title: 'HD 260655 b & HD 260655 c' },
      { src: '/assets/images/library/planets/TOI1231b.webp', title: 'TOI 1231 b' },
      { src: '/assets/images/library/planets/gj15abc.webp', title: 'GJ 15 A b & c' },
      { src: '/assets/images/library/planets/hat-p-7b.webp', title: 'HAT-P-7B' },
      { src: '/assets/images/library/planets/wasp12b.webp', title: 'WASP-12b' },
      { src: '/assets/images/library/planets/gj504b.webp', title: 'GJ 504 b' },
      { src: '/assets/images/library/planets/red-kappa.webp', title: 'Kappa And b' },
      { src: '/assets/images/library/planets/TOI_1452b.webp', title: 'TOI 1452 b' },
    ],
    "Nebula": [
      { src: '/assets/images/library/nebulas/keyhole.webp', title: 'Keyhole' },
      { src: '/assets/images/library/nebulas/carina.webp', title: 'The Carina' },
      { src: '/assets/images/library/nebulas/butterfly.webp', title: 'The Butterfly' },
      { src: '/assets/images/library/nebulas/helix.webp', title: 'Helix' },
      { src: '/assets/images/library/nebulas/orion.webp', title: 'The Orion' },
      { src: '/assets/images/library/nebulas/crabmosaic.webp', title: 'The Crab' },
      { src: '/assets/images/library/nebulas/ring.webp', title: 'The Ring' },
      { src: '/assets/images/library/nebulas/birthofstars.webp', title: 'The Eagle' },
      { src: '/assets/images/library/nebulas/cats-paw.webp', title: 'Cat’s Paw' },
      { src: '/assets/images/library/nebulas/pacman.webp', title: 'The Pacman' },
    ]
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  // Xử lý khi nhấn phím ESC để đóng ảnh phóng to
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleImageLoad = (e) => {
    const maxWidth = 800; // Maximum width for the resized image
    const maxHeight = 600; // Maximum height for the resized image
    const { naturalWidth, naturalHeight } = e.target;

    let width = naturalWidth;
    let height = naturalHeight;

    if (naturalWidth > maxWidth || naturalHeight > maxHeight) {
      const widthRatio = maxWidth / naturalWidth;
      const heightRatio = maxHeight / naturalHeight;
      const ratio = Math.min(widthRatio, heightRatio);

      width = naturalWidth * ratio;
      height = naturalHeight * ratio;
    }

    setImageDimensions({ width, height });
  };

  return (
    <div className="library__images">
      <h2 className="library__title">Images</h2>
      
      {/* Duyệt qua các nhóm hình ảnh */}
      {Object.keys(imageGroups).map((category) => (
        <div key={category}>
          <h3 className="category-title">{category}</h3>
          <div className="image-grid">
            {imageGroups[category].map((item, index) => (
              <div key={index} className="image-item">
                <img
                  src={item.src}
                  alt={item.title}
                  className="image-grid__item"
                  onClick={() => handleImageClick(item.src)} // Sự kiện click vào ảnh
                />
                <div className="image-caption">{item.title}</div> {/* Hiển thị tên hình ảnh dưới hình */}
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedImage && (
        <div className="image-overlay">
          <button className="close-button" onClick={closeImage}>X</button>
          <img
            src={selectedImage}
            alt="Selected"
            className="image-overlay__img"
            onLoad={handleImageLoad}
            style={{ width: imageDimensions.width, height: imageDimensions.height }}
          />
        </div>
      )}
    </div>
  );
};

export default Images;
