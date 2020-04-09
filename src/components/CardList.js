import React from 'react';
import Card from './Card.js';

function CardList( { mechs } ) {
  // if (1)
  //   throw new Error('LUUK IM UR FATHER');
  return (
    <div>
      {
        mechs.map((user, i) => {
          return (
            <Card
              key={i} 
              id={mechs[i].id} 
              username={mechs[i].username} 
              name={mechs[i].name}
              email={mechs[i].email}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;