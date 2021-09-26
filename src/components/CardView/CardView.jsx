import { Link } from 'react-router-dom';

import './CardView.scss';

const CardView = ({ img, date, title }) => {
    return (
        <div>
            <Link to="" className="CardView">
                <img src={img} alt="" className="CardView-img" style={{marginRight: '15px'}} />

                <div>
                    <span className="CardView-date">{date}</span>
                    <h5 className="CardView-title">{title}</h5>
                </div>
            </Link>
        </div>
    )
}

export default CardView;