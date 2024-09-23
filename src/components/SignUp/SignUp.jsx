import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
 <h1 className='text-center text-3xl text-black font-bold drop-shadow-lg mt-3'>Register Now</h1>
      <form className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Enter your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p className='text-center'>Already have account ? Please <Link className='text-xl font-semibold hover:underline' to='/login'>Login</Link></p>
      </form>
    </div>
  </div>
</div>
    );
};

export default SignUp;