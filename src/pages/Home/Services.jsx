import { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {

    const [services,setServices]=useState([]);


    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>{
            setServices(data)
        })
    },[])

    return (
        <div>
            <div className='text-center w-1/2 m-auto'>
            <h2 className="text-xl text-[#FF3811] font-bold">Service</h2>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service=><ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;