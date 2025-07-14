import React from 'react';
import './explore.css';

const exploreItems = new Array(20).fill(0).map((_, index) => `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQOL13MSvAp5rzxLXN7ltynTt2zIx7K66KlA&s,${index}`);

const Explore = () => {
  return (
    <div className="explore-container">
      <input className="explore-search" type="text" placeholder="Search" />
      <div className="explore-tags">
        <span>halloween makeup</span>
        <span>fairy makeup</span>
        <span>nails design</span>
      </div>
      <div className="explore-grid">
        {exploreItems.map((src, i) => (
          <img key={i} src={src} alt={`explore-${i}`} className="explore-img" />
        ))}
      </div>
    </div>
  );
};

export default Explore;