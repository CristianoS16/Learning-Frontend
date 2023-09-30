import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavBar } from './styled';

export default function Header() {
  const clickButton = useSelector((state) => state.example.clickButton);

  return (
    <NavBar>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/exit">
        <FaSignInAlt size={24} />
      </Link>
      {clickButton ? 'Click' : 'No Click'}
    </NavBar>
  );
}
