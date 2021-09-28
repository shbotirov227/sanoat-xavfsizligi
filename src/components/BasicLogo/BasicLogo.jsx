
import { Link } from 'react-router-dom';

import HeadLogo from '../../assets/images/icons/HeadLogo.png';

import './BasicLogo.scss';

const BasicLogo = ({ elStyle }) => {
    return (
        <div className="BasicLogo">
            <Link to="/" className="headerLogo" style={{elStyle}}>
                <img src={HeadLogo} alt="" />
                <h2 className="headerLogo-title">O'zbekiston Respublikasi<br></br>Sanoat xavfsizligi davlat qo'mitasi</h2>
            </Link>
        </div>
    )
}

export default BasicLogo;