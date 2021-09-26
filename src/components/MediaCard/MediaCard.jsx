
import './MediaCard.scss';

const MediaCard = ({ date, title, icon }) => {
    return (
        <div className="MediaCard">
            <span className="MediaCard-date">{date}</span>
            <h4 className="MediaCard-title">{title}</h4>
        </div>
    )
}

export default MediaCard;