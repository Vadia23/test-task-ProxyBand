import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from'react-router-dom';
import { fetchPosts } from '../PostsPage/postsSlice';
import { fetchAlbums} from '../AlbumsPage/albumsSlice';
import { fetchUsers, getName } from './usersSlice';

import Spinner from '../../spinner/Spinner'
import ErrorMessage from '../../errorMessage/ErrorMessage';

import img from '../../../resources/img/noImage.png';
import './MainPage.scss';

const MainPage = () => {
    const dispatch = useDispatch();
    const {users, loadingStatus} = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
            // eslint-disable-next-line
    }, []);

    if (loadingStatus === 'loading') {
        return <Spinner/>
    } else if (loadingStatus === 'error') {
        return <ErrorMessage/> 
    }
    
    function renderItems(arr) {
        const items = arr.map(item => {
            return (
                <div 
                className='users__item' 
                key={item.id}
                >
                    <img src={img} alt={item.name} />
                    <div className="users__name">{item.name}</div>
                    <div className="users__btns">
                        <Link to='/posts'><button onClick={() => {dispatch(fetchPosts(item.id)); dispatch(getName(item.name))}}>Posts</button></Link>
                        <Link to='/albums'><button onClick={() => {dispatch(fetchAlbums(item.id)); dispatch(getName(item.name))}}>Albums</button></Link>
                    </div>
                </div>
            )
        })
        return(
            <ul className='users'>
                {items}
            </ul>
        )
    }
    const items = renderItems(users);

    return (
        < >
            <div className="title">Users List</div>
            {items}
        </>
    )
}

export default MainPage;