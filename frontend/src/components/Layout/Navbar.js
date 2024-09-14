import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { logoutUser } from '../../store/actions/authActions';

function Navbar() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const guestLinks = (
    <>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  );

  const authLinks = (
    <>
      <li>
        <Link to="/profile">{auth.user.name}</Link>
      </li>
      <li>
        <a href="/" onClick={() => dispatch(logoutUser())}>
          Logout
        </a>
      </li>
    </>
  );

  return (
    <nav>
      <h1>
        <Link to="/">Tool Sharing Platform</Link>
      </h1>
      <ul>{auth.isAuthenticated ? authLinks : guestLinks}</ul>
    </nav>
  );
}

export default Navbar;
