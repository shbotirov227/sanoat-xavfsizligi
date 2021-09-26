
import './SocialLink.scss';

const SocialLink = ({ title, btn, icon, bgColor, telegramClass, coruptionClass }) => {
    return (
        <div className={`SocialLink ${telegramClass ? 'telegramClass' : undefined} ${coruptionClass ? 'coruptionClass' : undefined}`} style={{background: `${bgColor}`}}>
            <h5 className="SocialLink-title">{title}</h5>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <button className="SocialLink-btn">{btn}</button>
                <div>{icon}</div>
            </div>
        </div>
    )
}

export default SocialLink;