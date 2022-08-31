import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init'

const NavBar = () => {
  const [user] = useAuthState(auth);
  console.log(user)
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <div class="navbar bg-black sticky top-0">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About Us</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/contract'>Contract Us</NavLink></li>
            <li><NavLink to='/activity'>Activity</NavLink></li>
          </ul>
        </div>
        <h1 class="btn btn-ghost normal-case text-xl text-sky-400 nav">Gadget Mania</h1>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0 nav text-sky-400">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About Us</NavLink></li>
          <li><NavLink to='/login'>Login</NavLink></li>
          <li><NavLink to='/contract'>Contract Us</NavLink></li>
          <li><NavLink to='/activity'>Blog</NavLink></li>
        </ul>
      </div>
      <div class="navbar-end">
        <div class="flex-none">
          <div class="dropdown dropdown-end">
            {
              user && (
                <>
                  <ul class="menu menu-horizontal p-2 nav text-sky-400">
                    <li><NavLink to="orders">My Item</NavLink></li>
                  </ul>
                </>

              )
            }
          </div>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                {user && (<img src={user.photoURL} alt="" />)}
              </div>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li> <div>
                {user ? <h1 className='nav-btn px-3 py-2 rounded-md text-sm font-medium'>{user.displayName}</h1>
                  : 'User'
                }
              </div></li>
              {
                user ? <button onClick={handleSignOut}>Logout</button> : <button onClick={() => navigate('/login')}>Login</button>
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;