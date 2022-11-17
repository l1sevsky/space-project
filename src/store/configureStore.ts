import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ApodSlice } from './slices';

const rootReducer = combineReducers({
  apod: ApodSlice.apodReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type TState = ReturnType<typeof store.getState>;