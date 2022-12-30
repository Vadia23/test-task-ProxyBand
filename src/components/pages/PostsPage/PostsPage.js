import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetched, fetching, fetchingError } from '../../../reducer/reducer';

import Spinner from '../../spinner/Spinner';
import ErrorMessage from '../../errorMessage/ErrorMessage';

import img from '../../../resources/img/noImage2.png';
import './PostsPage.scss';

const PostsPage = () => {

    const dispatch = useDispatch();
    const {data, userId, userName, loadingStatus} = useSelector(state => state);
    useEffect(() => {
        dispatch(fetching())
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then((response) => response.json())
            .then((json) => dispatch(fetched(json)))
            .catch(err => dispatch(fetchingError())) 
            // eslint-disable-next-line
    }, [userId])

    function renderItems(arr) {
        const items = arr.map((item) => {
            return (
                <div className="card mb-3 posts__item" key={item.id}>
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title posts__title">{item.title}</h5>
                        <p className="card-text posts__body">{item.body}</p>
                    </div>
                </div>
            )
        })
        return(
            <div className='posts'>
                {items}
            </div>
        )
    }
    const items = renderItems(data);
    const result = loadingStatus === 'loading' ? <Spinner/> : loadingStatus === 'error' ? <ErrorMessage/> : items;
         
    return (
        <div>
            <div className='posts__header'>
            <div className="title">{`Posts by: ${userName}`}</div>
            <Link to='/'><span>Back to all users</span></Link>
            </div>
            {result}
        </div>
    );
}



export default PostsPage;
