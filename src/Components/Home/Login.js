import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (gUser) {
      navigate(from, { replace: true });
    }
  }, [gUser, from, navigate]);

  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                class="input input-bordered"
              />
              <label class="label">
                <a href="/" class="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
            <div>        
                <p className="text-center ">Don't Have A Account</p>
                <Link to='/signup'><h1 className="text-end underline">Sign-Up</h1>
                </Link>
              
            </div>
            <div class="divider">OR</div>
            <button onClick={() => signInWithGoogle()} class="btn btn-outline">
              Signin With Google
            </button>
            <button class="btn btn-outline btn-secondary">
              Signin With MicroSoft
            </button>
            <button class="btn btn-outline btn-accent">
              Signin With Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
