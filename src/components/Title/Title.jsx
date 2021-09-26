
import './Title.scss';

const Title = ({title, text, buttons, line}) => {
    return (
        <div className="Title">
            <div className="Title-inner">
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <h3 className={`Title-title ${line ? 'line' : ''}`}>{title}</h3>
                    {
                        text ? <span className="Title-text">{text}</span> : undefined
                    }
                </div>
                {
                    buttons ? (
                        <div className="Title-buttons">
                            <span className="Title-num">1</span>
                            <span className="Title-numLine"></span>
                            <span className="Title-num">4</span>
                            <button></button>
                            <button></button>
                        </div>
                    ) : undefined
                }            
            </div>
        </div>
    )
}

export default Title;