import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';
// const axios = require('axios/dist/node/axios.cjs');

const Login = () => {

  const {signIn}=useContext(AuthContext)
  const navigate=useNavigate();
  const location=useLocation();
  
    const handleLogin=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email?.value;
        const password=form.password.value;
        console.log(email,password)
       
        signIn(email,password)
        .then(result=>{
          const loggedInUser=result.user;
          console.log(loggedInUser)
          const user={email}
          // get access token
          axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
          .then(res=>{
            console.log(res.data)
            if(res.data.success){
               navigate(location?.state ? location.state : '/')
            }
          })
        })
        .catch(error=>{
          console.log(error)
        })
    }


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-12">
        <div className=" w-1/2 ">
         <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-4xl text-center font-bold">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>
          <p className='font-bold text-center mb-8'>New to Car Doctors <Link to='/signup' className='text-orange-600'>Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
