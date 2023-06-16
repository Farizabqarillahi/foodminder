import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { sendOutline } from 'ionicons/icons';

const data = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Fig',
  'Grape',
  'Honeydew',
  'Kiwi',
  'Lemon',
  'Mango',
  'Nectarine',
  'Orange',
  'Papaya',
  'Quince',
  'Raspberry',
  'Strawberry',
  'Tangerine',
  'Ugli Fruit',
  'Vanilla',
  'Watermelon',
  'Xigua',
  'Yellow Passion Fruit',
  'Zucchini',
];

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const filteredData = data.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredData);
    // Perform search action here
    alert(`Found ${filteredData.length} results for "${searchTerm}"`);
  };

  return (
    <div className="p-8 SearchPage">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <IonIcon
          icon={sendOutline}
          className="absolute transform -translate-y-1/2 cursor-pointer top-1/2 right-2 hover:text-blue-500"
          onClick={handleSearch}
        />
      </div>
      <ul className="mt-4">
        {data
          .filter((item) =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item, index) => (
            <li key={index} className="px-4 py-2 border-b border-gray-200">
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchPage;
