import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import { useNavigate } from 'react-router-dom';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (!title) {
      alert('Please enter a title for the todo!');
      return;
    }

    // Dispatch the addTodo action
    dispatch(
      addTodo({
        id: Date.now(),
        title,
        description,
        completed: false, // New todos are incomplete by default
      })
    );

    // Clear the form and navigate to the todo list
    setTitle('');
    setDescription('');
    navigate('/todos');
  };

  return (
    <div>
      <h2>Add a New Todo</h2>
      <form onSubmit={handleAddTodo}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Todo Title"
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Todo Description"
          ></textarea>
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
