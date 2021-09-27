
import { Link } from 'react-router-dom';
import MediaCardArrow from '../../assets/images/icons/MediaCardArrow.svg';

import './MediaCard.scss';

const MediaCard = ({ date, title, img, icon }) => {
    return (
        <Link to="" className="MediaCard">
            
            <div className="bgimg"style={{
                background: `linear-gradient(rgba(5, 36, 91, 0.5) 0.01%, #05245B 100%), url(${img})`,
                borderRadius: '4px',
            }}>

            </div>
            <span className="MediaCard-icon">{icon}</span>
            <span className="MediaCard-date">{date}</span>
            <h4 className="MediaCard-title">{title}</h4>
            <img src={MediaCardArrow} className="MediaCard-arrow" alt="" />
        </Link>
    )
}

export default MediaCard;