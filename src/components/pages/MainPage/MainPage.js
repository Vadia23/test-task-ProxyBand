import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetched, getId, getName, fetching, fetchingError } from '../../../reducer/reducer';
import { Link } from'react-router-dom';

import Spinner from '../../spinner/Spinner'
import ErrorMessage from '../../errorMessage/ErrorMessage';

import img from '../../../resources/img/noImage.png';
import './MainPage.scss';

const MainPage = () => {
    const dispatch = useDispatch();
    const {data, loadingStatus} = useSelector(state => state);

    useEffect(() => {
        dispatch(fetching())
    fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json())
                .then((json) => dispatch(fetched(json)))
                .catch(err => dispatch(fetchingError())) 
                // eslint-disable-next-line
    }, []);
    
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
                        <Link to='/posts'><button onClick={() => {dispatch(getId(item.id)); dispatch(getName(item.name))}}>Posts</button></Link>
                        <Link to='/albums'><button onClick={() => {dispatch(getId(item.id)); dispatch(getName(item.name))}}>Albums</button></Link>
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
    const items = renderItems(data);
    const result = loadingStatus === 'loading' ? <Spinner/> : loadingStatus === 'error' ? <ErrorMessage/> : items;

    return (
        < >
            <div className="title">Users List</div>
            {result}
        </>
    )
}

export default MainPage;