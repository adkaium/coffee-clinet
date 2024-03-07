import React from 'react';

const CoffeeCard = ({coffee}) => {
    const {name,photo,taste} = coffee;
    console.log(coffee);
    return (
      <div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src={photo} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{taste}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CoffeeCard;