import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movieReducer from "../features/Movies/MoviesSlice";
import userReducer from "../features/userSlice/userSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer,
  },
});
