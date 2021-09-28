
import { Link } from 'react-router-dom';
import './FooterLink.scss';

const FooterLink = ({ title, link, icon, icon2, icon3 }) => {
    return (
        <div className="FooterLink">
            <h4 className="FooterLink-title">{ title }</h4>
            {
                link.map(item => {
                    return <Link to="" className="FooterLink-link">{ item }</Link>
                })
            }
        </div>
    )
}

export default FooterLink;