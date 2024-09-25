import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Auth_context } from "../Private-auth/Private_auth";

const Login = () => {
  const {SignInHere} = useContext(Auth_context);

  const handlesingIn=(e)=>{
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  SignInHere(email,password)
  .then((res)=>{
    console.log(res.user)
    e.target.reset();
  })
  .catch((err)=>{
    console.log(err.message)
  })
  
  }
    return (
        <div>
        <div className="hero bg-base-200 min-h-screen">
    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
        <h1 className='text-center text-3xl font-bold mt-3 drop-shadow-lg'>Login Now!</h1>
      <form onSubmit={handlesingIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className='text-center'>don't have any account ? Please <Link className='text-xl font-semibold hover:underline' to='/signUp'> Register </Link> First</p>
      </form>
    </div>
  </div>
</div>
        
    );
};

export default Login;