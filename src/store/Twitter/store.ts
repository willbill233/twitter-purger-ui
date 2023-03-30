import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import tweetsReducer from './reducer';

const rootReducer = combineReducers({
  tweets: tweetsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({ reducer: { tweets: tweetsReducer }});
