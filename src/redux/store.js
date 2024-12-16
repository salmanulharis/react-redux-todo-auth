import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import authReducer from './authSlice';

// Save state to localStorage
const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('appState', JSON.stringify(state));
  } catch (e) {
    console.error('Could not save state', e);
  }
};

// Load state from localStorage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('appState');
    if (serializedState === null) return undefined; // If no state in localStorage, return undefined
    return JSON.parse(serializedState);
  } catch (e) {
    console.error('Could not load state', e);
    return undefined;
  }
};

// Load initial state from localStorage
const persistedState = loadFromLocalStorage();

const store = configureStore({
  reducer: {
    todo: todoReducer,
    auth: authReducer,
  },
  preloadedState: persistedState, // Use persisted state if available
});

// Subscribe to store changes and save them to localStorage
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
