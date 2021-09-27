
import './MediaCard.scss';

const MediaCard = ({ date, title, img, picIcon, videoIcon }) => {
    return (
        <div className="MediaCard" style={{
            background: `rgba(5, 36, 91, 0.5), url(${img})`,
            borderRadius: '4px'
        }}>
            {/* <img src={img} alt="" /> */}
            <span className="MediaCard-icon">{picIcon ? picIcon : videoIcon}</span>
            <span className="MediaCard-date">{date}</span>
            <h4 className="MediaCard-title">{title}</h4>
        </div>
    )
}

export default MediaCard;