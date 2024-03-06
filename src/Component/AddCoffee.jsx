const AddCoffee = () => {
    const handeAddCoffee = e =>{
        e.preventDefault();
       const form = e.target;
       
       const name = form.name.value;
       const quantity = form.quantity.value;
       const category = form.category.value;
       const photo = form.photo.value;
       const taste = form.taste.value;
       const details = form.details.value;

       const newCoffee = {name, quantity, category, photo, taste, details};
       console.log(newCoffee);
         
       fetch("http://localhost:5000/coffee",{
          method:'POST',
          headers: {
            'content-type': 'application/json'
          },
          body:JSON.stringify(newCoffee)
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data);
       })

    }
  return (
    <div className="bg-[#F4F3F0]">
      <h3>Add New Coffee</h3>
      <div>
        <form onSubmit={handeAddCoffee}>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Coffee Name</span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Avable Quantity</span>
              </div>
              <input
                type="text"
                name="quantity"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <input
                type="text"
                name="category"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Photo</span>
              </div>
              <input
                type="text"
                name="photo"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Taste</span>
              </div>
              <input
                type="text"
                name="taste"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Details</span>
              </div>
              <input
                type="text"
                name="details"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <input type="submit" className="btn btn-block" name="" id="" />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
