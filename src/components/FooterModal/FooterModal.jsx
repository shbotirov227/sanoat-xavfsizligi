
import { Link } from 'react-router-dom';
import './FooterModal.scss';

const FooterModal = ({ title, link, modalStyle }) => {
    return (
        <div className="FooterModal" style={{marginRight: '120px'}}>
            <h4 className="FooterModal-title">{title}</h4>

            {
                link.map(item => {
                    return <Link to="" className="FooterModal-link">{item}</Link>
                })
            }
        </div>
    )
}

export default FooterModal;