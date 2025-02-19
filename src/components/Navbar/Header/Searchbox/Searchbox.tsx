import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Searchbox: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-end items-center border-2 border-gray-300 rounded-sm px-2 py-1 w-80 bg-gray-100">
        <button className="text-gray-700">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <input
          type="text"
          placeholder="Search Rooms"
          className="flex-grow py-1 px-1 bg-transparent border-none outline-none text-gray-700 text-lg"
        />
      </div>
    </div>
  );
};

export default Searchbox;
