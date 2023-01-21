import  {configureStore, combineReducers} from '@reduxjs/toolkit';
import posts from '../components/pages/PostsPage/postsSlice';
import albums from '../components/pages/AlbumsPage/albumsSlice';
import users from '../components/pages/MainPage/usersSlice';


const store = configureStore({
  reducer: combineReducers({posts, albums, users}),
  devTools: process.env.NODE_ENV !== 'production'
})

export default store;