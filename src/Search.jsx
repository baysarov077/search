import React, { useState } from 'react';
import loop from './img/loop.png'
import { sneakers } from './State';
import Card from './Card';
const Search = () => {
  const [value, setValue] = useState('')
  const filteredItems = sneakers.filter(item => {
    return item.name.toLowerCase().includes(value.toLowerCase())
  })
  return (
    <div>
      <header>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <button ><img style={{ width: '20px' }} src={loop} alt="" /></button>
      </header>
      <Card filteredItems={filteredItems} />
    </div>
  );
};

export default Search;