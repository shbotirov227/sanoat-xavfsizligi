
import { Link } from 'react-router-dom';
import './FooterLink.scss';

const FooterLink = ({ title, link, icon1, icon2, icon3 }) => {
    return (
        <div className="FooterLink">
            <h4 className="FooterLink-title">{ title }</h4>
            <ul>
                {
                    link.map(item => {
                        return <li><Link to="" className="FooterLink-link">{ item }</Link></li>
                    })
                }
            </ul>
        </div>
    )
}

export default FooterLink;