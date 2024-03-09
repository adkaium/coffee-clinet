import React from 'react';

const CoffeeCard = ({coffee}) => {
  // const [remainDatat, setRmainData]=useState([])
    const {name,photo,taste,_id} = coffee;
    // console.log(remainDatat);
    const handeleDelet=(id) =>{
      if(id){
        alert('Are you Sure,you want to delete')
      }
      console.log(id);
      fetch(`http://localhost:5000/coffee/${id}`,{
        method: 'DELETE'
      }
      
      )
      .then(res=>res.json())
      .then(data=>
        console.log(data)
        )
    }
    
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
              <button className="btn btn-primary">View</button>
              <button className="btn btn-primary">Edith</button>
              <button onClick={()=>handeleDelet(_id)} className="btn btn-primary">X</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CoffeeCard;