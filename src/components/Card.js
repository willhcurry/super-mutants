import React from 'react';

const Card = ({name, location, appearance, id}) => {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt="Super Mutant" src={`https://robohash.org/${id}?set=set2`}/>
      <div>
        <h2>{name}</h2>
        <p>{location}</p>
        <p>{appearance}</p>
      </div>
    </div>
  );
}

export default Card;
