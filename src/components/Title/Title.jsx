
import './Title.scss';

const Title = ({title, text, buttons, line}) => {
    return (
        <div className="Title">
            <div className="Title-inner">
                <h3 className={`Title-title ${line ? 'line' : ''}`}>{title}</h3>
                {
                    text ? <span className="Title-text">{text}</span> : undefined
                }
            </div>

                {
                    buttons ? (
                        <div className="Title-buttons">
                            <span>1</span>
                            <span></span>
                            <span>4</span>
                            <button></button>
                            <button></button>
                        </div>
                    ) : undefined
                }            
        </div>
    )
}

export default Title;