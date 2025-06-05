import React from 'react';
import '../index.css';

const CometLoader: React.FC = () => {
  return (
    <div className="loader">
      <div className="cometa-container">
        <div className="cauda"></div>
        <div className="cometa"></div>
      </div>
    </div>
  );
};

export default CometLoader;