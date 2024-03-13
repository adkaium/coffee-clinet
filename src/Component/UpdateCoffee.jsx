import {useLoaderData} from "react-router-dom";

const UpdateCoffee = () => {
  const coffees = useLoaderData();
  console.log(coffees);
  const {_id} = coffees;
  const handelUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const updatedCoffee = {name, quantity, category, photo, taste, details};
    console.log(updatedCoffee);
    fetch(`http://localhost:5001/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h1> coffee Name: {coffees.name}</h1>
      <h1>Updated From</h1>
      <div>
        <form onSubmit={handelUpdateCoffee}>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Coffee Name</span>
              </div>
              <input
                type="text"
                name="name"
                defaultValue={coffees.name}
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
                defaultValue={coffees.quantity}
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
                defaultValue={coffees.category}
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
                defaultValue={coffees.photo}
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
                defaultValue={coffees.taste}
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
                defaultValue={coffees.details}
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

export default UpdateCoffee;
