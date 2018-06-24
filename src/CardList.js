import React from 'react';
import Card from './Card';


const CardList = ({ mutants }) => {
  return (
    <div>
      {
        mutants.map((user, i) => {
          return <Card
            key={i}
            id={mutants[i].id}
            name={mutants[i].name}
            location={mutants[i].location}
            appearance={mutants[i].appearance}
          />
        })
      }
    </div>
  );
}

export default CardList;
