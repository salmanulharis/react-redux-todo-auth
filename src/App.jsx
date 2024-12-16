import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Login from './components/Login';

const App = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/todos"
          element={user ? <TodoList /> : <Navigate to="/login" />}
        />
        <Route
          path="/add-todo"
          element={user ? <AddTodo /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
