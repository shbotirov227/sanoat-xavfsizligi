
import { Link } from 'react-router-dom';

import './ActivityCard.scss';

const ActivityCard = ({ cardIcon, cardTitle }) => {
    return (
        <Link to="" className="ActivityCard">
            <div className="ActivityCard-icon">{ cardIcon }</div>
            <h4 className="ActivityCard-title">{cardTitle}</h4>
        </Link>
    )
}

export default ActivityCard;