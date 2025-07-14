import React, { useState } from 'react';
import './searchPage.css';
import SearchIcon from '@mui/icons-material/Search';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const suggestions = [
    {
      name: 'space',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YYh5Fk1u9VsWWr1MhkyQeOzeNbtnnMO96g&s',
      verified: false,
    },
    {
      name: 'space photography',
      img: 'https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?semt=ais_hybrid&w=740',
      verified: false,
    },
    {
      name: 'space tattoos',
      img: 'https://img.freepik.com/free-photo/fresh-autumn-leaves-reveal-vibrant-organic-pattern-generated-by-ai_188544-15037.jpg?semt=ais_hybrid&w=740',
      verified: false,
    },
    {
      name: 'spacex',
      img: 'https://media.istockphoto.com/id/1360226051/photo/tree-leafs-in-winter-detail.jpg?s=612x612&w=is&k=20&c=AFAAv7PuBc6VCdt66DJ37IBf42pbJJ7JnsgUsK4QdBo=',
      verified: true,
      username: 'SpaceX',
    },
    {
      name: 'iss',
      img: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg',
      verified: true,
      username: 'International Space Station',
    },
    {
      name: 'nasahubble',
      img: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-simon73-1266810.jpg&fm=jpg',
      verified: true,
      username: 'Hubble Space Telescope',
    },
  ];

  const filtered = suggestions.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-page">
      <div className="search-bar">
        <SearchIcon className="search-icon" />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="cancel-btn">Cancel</button>
      </div>

      <ul className="search-results">
        {filtered.map((item, index) => (
          <li key={index} className="result-item">
            <img src={item.img} alt={item.name} className="avatar" />
            <div className="text-info">
              <span className="name">
                {item.name}
                {item.verified && <span className="blue-check"> ✔</span>}
              </span>
              {item.username && (
                <span className="username">{item.username}</span>
              )}
            </div>
          </li>
        ))}
        {searchTerm && (
          <li className="see-all">
            See all results for “<b>{searchTerm}</b>”
          </li>
        )}
      </ul>
    </div>
  );
};

export default SearchPage;
