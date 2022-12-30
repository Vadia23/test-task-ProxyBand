import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchedAlbums, fetching, fetchingError} from '../../../reducer/reducer';

import Spinner from '../../spinner/Spinner';
import ErrorMessage from '../../errorMessage/ErrorMessage';

import img from '../../../resources/img/noAlbum.jpeg';
import './AlbumsPage.scss';

const AlbumsPage = () => {

    const dispatch = useDispatch();
    const {albums, userId, loadingStatus} = useSelector(state => state);
        useEffect(() => {
            dispatch(fetching())
            fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
                .then((response) => response.json())
                .then((json) => dispatch(fetchedAlbums(json)))
                .catch(err => dispatch(fetchingError()))
                // eslint-disable-next-line
        }, [userId])

    function renderItems(arr) {
        const items = arr.map((item) => {
            return (
                    <div className="albums__item" key={item.id}>
                        <img src={img} alt="noimage"/>
                        <span>{item.title}</span>
                    </div>
            )
        })
        return(
            <div className='albums'>
                {items}
            </div>
        )
    }
    const items = renderItems(albums);
    const result = (loadingStatus === 'loading') ? <Spinner/> : (loadingStatus === 'error') ? <ErrorMessage/> : items;

    return (
        <div>
            {result}
        </div>
    );
}

export default AlbumsPage;
