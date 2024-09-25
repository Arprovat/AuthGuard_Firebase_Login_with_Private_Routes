import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Auth_context } from '../Private-auth/Private_auth';

const SignUp = () => {
  const {createUser} =useContext(Auth_context);
  const emailRef =useRef(null);
  const passwordRef = useRef(null);

  const hansdleRegister =(e)=>{
      e.preventDefault();
      const email =emailRef.current.value;
      const password = passwordRef.current.value;

      createUser(email, password)
      .then((res)=>{
        console.log(res.user);
        e.target.reset();
      })
      .catch((err)=>{
        console.log(err.message);
      })
  }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
 <h1 className='text-center text-3xl text-black font-bold drop-shadow-lg mt-3'>Register Now</h1>
      <form onSubmit={hansdleRegister} className="card-body">
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
          <input ref={emailRef} type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input ref={passwordRef} type="password" placeholder="password" className="input input-bordered" required />
         
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