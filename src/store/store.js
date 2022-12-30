import  {configureStore} from '@reduxjs/toolkit';
import reducer from '../reducer/reducer';


const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production'
})

export default store;