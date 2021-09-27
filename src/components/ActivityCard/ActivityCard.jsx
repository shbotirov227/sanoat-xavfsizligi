
import { Link } from 'react-router-dom';

import './ActivityCard.scss';

const ActivityCard = ({ cardIcon, cardTitle }) => {
    return (
        <Link to="" className="ActivityCard">
            <img src={cardIcon} className="ActivityCard-icon" style={{fill: '#4C81DC'}} alt="" />
            <h4 className="ActivityCard-title">{cardTitle}</h4>
        </Link>
    )
}

export default ActivityCard;