
import { Facebook, Instagram, Twitter, Telegram } from '../../assets/icons/icons';
import HeaderTopTitle from '../../components/HeaderTopTitle/HeaderTopTitle';
import HeadLogo from '../../assets/images/icons/HeadLogo.png';
import UzbLogo from '../../assets/images/Uzb.png';
import Navbar from '../../components/Navbar/Navbar';

import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="Header">
            <HeaderTopTitle />
            <div className="container">
                <div className="header-inner">

                    <div className="header-left">
                        <div className="headerLogo">
                                <img src={HeadLogo} alt="" />
                            <h2 className="headerLogo-title">O'zbekiston Respublikasi<br></br>Sanoat xavfsizligi davlat qo'mitasi</h2>
                        </div>

                        <div className="blockquote">
                            <blockquote className="blockquote-title">Sanoat xavfsizligini ta’minlash,<br></br>kelajakda yuksalish demakdir.</blockquote>
                            <figcaption className="blockquote-auth">G.B.Vahabovich</figcaption>
                        </div>
                    </div>

                    <div className="header-right">
                        <div className="selectSection">
                            <div>
                                <h3 className="header-right-tel">+998 71 244 23 53</h3>
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
                                <a href="https://www.facebook.com" target="_blank" className="header-right-link">
                                    <Facebook />
                                </a>
                                <a href="https://www.instagram.com" target="_blank" className="header-right-link">
                                    <Instagram />
                                </a>
                                <a href="https://www.twitter.com" target="_blank" className="header-right-link">
                                    <Twitter />
                                </a>
                                <a href="https://www.telegram.org" target="_blank" className="header-right-link">
                                    <Telegram />
                                </a>
                            </div>
                    </div>

                </div>

            {/* <Navbar links={[
                "qo‘mita haqida",
                "Qo‘mita faoliyati",
                "hujjatlar",
                "Interaktiv xizmatlar",
                "axborot xizmati",
                "bog‘lanish"
            ]}/> */}
            
            </div>
            

        </div>
    )
}

export default Header;