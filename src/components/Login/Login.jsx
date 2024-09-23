import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
        <div className="hero bg-base-200 min-h-screen">
    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
        <h1 className='text-center text-3xl font-bold mt-3 drop-shadow-lg'>Login Now!</h1>
      <form className="card-body">
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