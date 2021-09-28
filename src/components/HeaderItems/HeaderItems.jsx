import { Facebook, Instagram, Twitter, Telegram, TelIcon } from '../../assets/icons/icons';
import UzbLogo from '../../assets/images/Uzb.png';
import BasicLogo from '../BasicLogo';

import './HeaderItems.scss';

const HeaderItems = () => {
    return (
        <div className="HeaderItems">
            <div className="header-inner">

                <div className="header-left">
                    
                    <BasicLogo />
                    <div className="blockquote">
                        <blockquote className="blockquote-title">Sanoat xavfsizligini ta’minlash,<br></br>kelajakda yuksalish demakdir.</blockquote>
                        <figcaption className="blockquote-auth">G.B.Vahabovich</figcaption>
                    </div>
                </div>

                <div className="header-right">
                    <div className="selectSection">
                        <div>
                            <h3 className="header-right-tel" style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>+998 71 244 23 53 <span style={{marginLeft: 5}}><TelIcon /></span> </h3>
                            <span className="header-right-text">O‘zbekiston hududida qo‘ng‘iroq qilish bepul</span>
                        </div>

                        <select name="" id="" className="header-right-select">
                            <option value="uzb">UZB</option>
                            <option value="france">FR</option>
                            <option value="english">EN</option>
                            <option value="turkey">TR</option>
                        </select>
                    </div>

                    <img src={UzbLogo} alt="" className="header-right-img" />

                    <div className="header-right-links">
                        <a href="https://www.facebook.com" rel="noreferrer" target="_blank" className="header-right-link">
                            <Facebook />
                        </a>
                        <a href="https://www.instagram.com" rel="noreferrer" target="_blank" className="header-right-link">
                            <Instagram />
                        </a>
                        <a href="https://www.twitter.com" rel="noreferrer" target="_blank" className="header-right-link">
                            <Twitter />
                        </a>
                        <a href="https://www.telegram.org" rel="noreferrer" target="_blank" className="header-right-link">
                            <Telegram />
                        </a>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default HeaderItems;