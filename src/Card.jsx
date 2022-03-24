import React from 'react';

const Card = ({ filteredItems }) => {

  return (
    <>
      <div className='cardsMain'>

        {filteredItems.map(item => {
          return (
            <div className='card' key={item.id}>
              <div className='imgBlock'><img src={item.image} alt="" /></div>
              <div><h3>{item.name}</h3></div>
              <div className='aboutSneak'>
                <p>Цена: {item.price}</p>
                <button>Купить</button>
              </div>
            </div>
          )
        })}

      </div>
    </>
  );
};

export default Card;