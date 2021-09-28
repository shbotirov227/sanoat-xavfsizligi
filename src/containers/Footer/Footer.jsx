
import {
    Facebook,
    FooterLinkIcon1,
    FooterLinkIcon2,
    FooterLinkIcon3,
    FooterLinkIcon4,
    Instagram,
    Telegram,
    Twitter,
} from '../../assets/icons/icons';
import CounterImg1 from '../../assets/images/counterImg1.png';
import CounterImg2 from '../../assets/images/counterImg2.png';
import DevelopmentImg from '../../assets/images/developmentImg.png';
import BasicLogo from '../../components/BasicLogo';
import FooterLink from '../../components/FooterLink';

import './Footer.scss';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer-inner container">
                
                <div>
                    <BasicLogo elStyle="marginBottom: '0'" />

                    <div style={{width: '45%'}}>
                        <div className="footerLeft" style={{margin: '30px 0 20px 0'}}>
                            <span className="footerLeft-title">Saytni so‘nggi yangilangan vaqti:</span>
                            <h4 className="footerLeft-date" style={{marginTop: '10px'}}>22:12, 28.06.2020 (GMT+5)</h4>
                        </div>

                        <div className="footerLeft">
                            <p className="footerLeft-title">
                                Saytda xatolikni topdingizmi? Uni belgilang va <h4 className="footerLeft-date">CTLR+ENTER</h4> tugmalari orqali xabar qiling.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="footerLinks">
                    <FooterLink title="Bo‘limlar" link={[
                        "- Qo‘mita haqida",
                        "- Qo‘mita faoliyati",
                        "- Normativ hujjatlar",
                        "- Interaktiv xizmatlar",
                        "- Axborot xizmati",
                        "- Biz bilan bog‘lanish"
                    ]} />

                    <FooterLink
                        title="Foydali havolalar"
                        link={[
                            "E-Ijro",
                            "Ochiq ma’lumotlar",
                            "MY.GOV.UZ",
                            "Oliy majlis senati"
                        ]}
                    />

                </div>

                <div>
                    <div className="footerRightLinksLinks">
                        <span className="footerRightLinks-title">Biz ijtimoiy tarmoqlarda</span>

                        <a href="https://www.facebook.com" rel="noreferrer" target="_blank" className="footerRightLinks-link">
                            <Facebook />
                        </a>
                        <a href="https://www.instagram.com" rel="noreferrer" target="_blank" className="footerRightLinks-link">
                            <Instagram />
                        </a>
                        <a href="https://www.twitter.com" rel="noreferrer" target="_blank" className="footerRightLinks-link">
                            <Twitter />
                        </a>
                        <a href="https://www.telegram.org" rel="noreferrer" target="_blank" className="footerRightLinks-link">
                            <Telegram />
                        </a>
                    </div>

                    <div className="counter">
                        <span className="footerRightLinks-title">Hisoblagichlar</span>

                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                            <img src={CounterImg1} alt="" style={{marginRight: '30px'}} />
                            <img src={CounterImg2} alt="" />
                        </div>
                    </div>

                        <img src={DevelopmentImg} alt="" style={{width: '100%', marginTop: '40px'}} />

                    <div className="development">
                        <span className="development-title">Sayt yaratish</span>
                        <span className="development-title">Tizim ishlab chiqish</span>
                        <span className="development-title">Mobil ilovalar</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;