/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ServicesCard = ({service}) => {
    // console.log(service)
    const {_id,img,price,title}=service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className="font-bold text-orange-500">price: ${price}</p>
    <div className="card-actions">
      <Link to={`/checkout/${_id}`}>
      <button className="btn btn-primary">Book Now</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default ServicesCard;