import React from 'react';

const Floor = ({ width, length, color }) => {
  const floorStyle = {
    width: `${width}px`,
    height: `${length}px`,
    backgroundColor: color,
    border: '1px solid #000',
    position: 'relative',
  };

  return <div style={floorStyle}></div>;
};

export default Floor;