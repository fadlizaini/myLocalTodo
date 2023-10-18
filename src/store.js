import {configureStore} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import {notesReducers} from './reducers';

const store = configureStore({
  reducer: {
    notesState: notesReducers,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([thunkMiddleware]),
});

export default store;
