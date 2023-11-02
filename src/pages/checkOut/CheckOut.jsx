import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const CheckOut = () => {
  const services = useLoaderData();
  const { _id, title, price, img } = services;
  const {user}=useContext(AuthContext)

  const handleBookService=(e)=>{
     e.preventDefault();
     const form=e.target;
     const name=form.name.value;
     const date=form.date.value;
     const email=user?.email;
     const booking={
       customerName:name,
       email,
       date,
       img,
       service:title,
       serviceId:_id,
       price:price
     }

     console.log(booking)

     fetch('http://localhost:5000/bookings',{
       method:'POST',
       headers:{
        'content-type':'application/json'
       },
       body:JSON.stringify(booking)
     })
     .then(res=>res.json())
     .then(data=>{
      console.log(data)
      if(data.insertedId){
        alert("Service Booked Successfully")
      }
     })
  }
  return (
    <div>
      <h2 className="text-center text-3xl">Book Services:{title} </h2>
            <form onSubmit={handleBookService} className="card-body">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  defaultValue={user?.displayName}
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due Amount</span>
                </label>
                <input
                  type="text"
                  defaultValue={'$'+price}
                  className="input input-bordered"
                  required
                />
              </div>
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary btn-block" value="Order Confirm" />
              </div>
            </form>
    </div>
  );
};

export default CheckOut;