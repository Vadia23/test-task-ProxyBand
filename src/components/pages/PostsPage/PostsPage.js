import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Spinner from '../../spinner/Spinner';
import ErrorMessage from '../../errorMessage/ErrorMessage';

import img from '../../../resources/img/noImage2.png';
import './PostsPage.scss';

const PostsPage = () => {
    const {posts, loadingStatus} = useSelector(state => state.posts);
    const {userName} = useSelector(state => state.users);

    if (loadingStatus === 'loading') {
        return <Spinner/>
    } else if (loadingStatus === 'error') {
        return <ErrorMessage/> 
    }

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
    const items = renderItems(posts);
         
    return (
        <div>
            <div className='posts__header'>
            <div className="title">{`Posts by: ${userName}`}</div>
            <Link to='/'><span>Back to all users</span></Link>
            </div>
            {items}
        </div>
    );
}

export default PostsPage;