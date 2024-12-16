import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useNavigate, Link  } from 'react-router-dom'; 

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login'); // Redirect to login page
  };

  return (
    <header>
        <nav>
            <Link to="/todos">Todos</Link>
            <Link to="/add-todo">Add Todo</Link>
        </nav>
      <h1>Todo App</h1>
      <div>
        {user && (
            <div>
                <span>Welcome, {user.username}!</span>
                <button onClick={handleLogout}>Logout</button>
            </div>
        )}
      </div>
    </header>
  );
};

export default Header;
