
import { Link } from 'react-router-dom';
import './LinkCard.scss';

const LinkCard = ({ img, link, title }) => {
    return (
        <Link to="" className="LinkCard">
            <img src={ img } alt="" className="LinkCard-img" />
            <span className="LinkCard-link">{ link }</span>
            <h4 className="LinkCard-title">{ title }</h4>
        </Link>
    )
}

export default LinkCard;