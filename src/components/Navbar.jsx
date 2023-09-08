import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import logo from '../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
  <div className='fixed top-0 left-0 w-full shadow-lg z-50'>
    <div className='flex h-screen items-start justify-between p-4  relative'>
      <div className='flex items-center'>
        <Link to='/'>
        <FontAwesomeIcon icon={faCirclePlay} flip size="3x" style={{color: "#1a5fb4",}} />
        </Link>
        {user?.email ? (
          <div>
            <Link to='/account'>
              <button className='text-white pr-4'>Account</button>
            </Link>
            <button
              onClick={handleLogout}
              className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'
            >
              Logout
            </button>
          </div>
        ) : (
          <div className='absolute right-4'>
            <Link to='/login'>
              <button className='text-white pr-4'><FontAwesomeIcon icon={faRightToBracket} size="xl" style={{color: "#c061cb",}} /></button>
            </Link>
            <Link to='/signup'>
              <button className=' px-6 py-2 rounded cursor-pointer text-white'>
              <FontAwesomeIcon icon={faUserPlus} size="xl" style={{color: "#c061cb",}} />
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  </div>
  );
};

export default Navbar;
