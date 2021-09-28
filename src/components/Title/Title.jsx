import { TitleBtnIcon } from '../../assets/icons/icons';

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
                            <div className="Title-numLine"></div>
                            <span className="Title-num" style={{marginRight: '20px'}}>4</span>
                            <button className="Title-btn" style={{marginRight: '15px'}}><TitleBtnIcon /></button>
                            <button className="Title-btn" style={{transform: 'rotate(180deg)', paddingTop: '5px'}}><TitleBtnIcon /></button>
                        </div>
                    ) : undefined
                }            
            </div>
        </div>
    )
}

export default Title;