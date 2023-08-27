import mg from '../static/images/ai_music.jpg';
import pg from '../static/images/portfolio.png';
import lg from '../static/images/music-logic.png';
import cg from '../static/images/chess.jpg';
import gb from '../static/images/groove_blocks.png';
import wh from '../static/images/walk-home.png';
import bio from '../static/images/bio.png';

// PreloadImages.js

import React, { useEffect } from 'react';

function PreloadImages() {
  useEffect(() => {
    // Array of image URLs to preload
    const imageUrls = [
      {mg}, {pg}, {lg}, {cg}, {gb}, {wh}, {bio}
      // Add more image URLs as needed
    ];

    // Preload the images
    imageUrls.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
    });
  }, []);

  return null; // This component doesn't render anything to the DOM
}

export default PreloadImages;
