import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/RectangleList.css'; // You can create your own CSS file for styling

const RectangleList = () => {
  const rectangles = [
    { id: 1, color: 'red', link: '/page1' },
    { id: 2, color: 'blue', link: '/page2' },
    { id: 3, color: 'green', link: '/page3' },
    { id: 4, color: 'purple', link: '/page4' },
  ];

  return (
    <div className="rectangle-list">
      <div className="larger-rectangle">
        {rectangles.map(rectangle => (
          <Link key={rectangle.id} to={rectangle.link} className="rectangle-link">
            <div className={`rectangle ${rectangle.color}`}>
              Rectangle {rectangle.id}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RectangleList;
