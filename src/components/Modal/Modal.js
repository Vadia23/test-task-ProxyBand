import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AlbumsPage from '../pages/AlbumsPage/AlbumsPage';

import './Modal.scss';

const Modal = (props) => {

    const{userName} = useSelector(state => state)

    return (
        <div className={`modal__wrapper open`} style={{...props.style}}>
            <div className="modal__body">
                <div className='modal__header'>
                    <h2>{`Albums by: ${userName}`}</h2>
                    <Link to="/"><div className="modal__close">Back to all users</div></Link>
                </div>
                <hr />
                <AlbumsPage/>
            </div>
        </div>
    );
}

export default Modal;
