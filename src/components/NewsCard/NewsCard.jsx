
import './NewsCard.scss';

const NewsCard = ({bgImg, date, title, linear}) => {
    return (
        <div className="NewsCard" style={{
                background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(5, 36, 91, 0) 0.01%, #05245B 100%), url(${bgImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                
            <span className="NewsCard-date">{date}</span>
            <h4 className="NewsCard-title">{title}</h4>
        </div>
    )
}

export default NewsCard;