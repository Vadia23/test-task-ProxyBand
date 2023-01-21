import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Spinner from '../../spinner/Spinner';
import ErrorMessage from '../../errorMessage/ErrorMessage';

import img from '../../../resources/img/noAlbum.jpeg';
import './AlbumsPage.scss';

const AlbumsPage = () => {
    const {albums,loadingStatus} = useSelector(state => state.albums);
    const {userName} = useSelector(state => state.users);

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
        <div className={`albums__wrapper open`}>
            <div className="albums__body">
                <div className='albums__header'>
                    <h2>{`Albums by: ${userName}`}</h2>
                    <Link to="/"><div className="albums__close">Back to all users</div></Link>
                </div>
                <hr />
                {result}
            </div>
        </div>
    );
}

export default AlbumsPage;
