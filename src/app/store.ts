import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import counterReducer from '../features/counter/counterSlice';
import { history } from '../utils';


const rootReducer = combineReducers({
  router: connectRouter(history),
  couter: counterReducer
})


export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
