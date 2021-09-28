
import { useState } from 'react';

import CounterImg1 from '../../assets/images/counterImg1.png';
import CounterImg2 from '../../assets/images/counterImg2.png';
import DevelopmentImg from '../../assets/images/developmentImg.png';
import UzFlag from '../../assets/images/icons/uz-flag.png';
import BasicLogo from '../../components/BasicLogo';
import FooterLink from '../../components/FooterLink';
import FooterModal from '../../components/FooterModal/FooterModal';
import {
    ExitIcon,
    Facebook,
    FooterLinkIcon1,
    FooterLinkIcon2,
    FooterLinkIcon3,
    FooterLinkIcon4,
    Instagram,
    MapSiteIcon,
    SearchIcon,
    Telegram,
    Twitter,
} from '../../assets/icons/icons';

import './Footer.scss';

const Footer = () => {

    const [ state, setState ] = useState(false);

    return (
        <div className="Footer">


            <button className="mapSite-title" onClick={() => setState(true)}><span style={{marginRight: '10px'}}><MapSiteIcon /></span> Sayt xaritasi</button>

            {
                state ? (
                    <div className="footerModal container">

                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '50px'}}>

                            <button style={{outline: 'none', border: 'none', background: 'transparent', cursor: 'pointer'}} onClick={() => setState(false)}><ExitIcon /></button>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <div style={{cursor: 'pointer'}}><SearchIcon /></div>
                                
                                <div className="footerModal-select">
                                    <label htmlFor="footermodalselect">
                                        <img src={UzFlag} alt="" />
                                    </label>
                                    <select name="modal-select" id="footermodalselect" >
                                        <option value="uzb">UZB</option>
                                        <option value="france">FR</option>
                                        <option value="english">EN</option>
                                        <option value="turkey">TR</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div style={{display: 'flex', marginBottom: '50px'}}>
                            <FooterModal
                                modalStyle="marginRight: '100px'"
                                title="Qo‘mita haqida"
                                link={[
                                    "Qo‘mita tarixi",
                                    "Hay’at",
                                    "Rahbariyat",
                                    "Tuzilma",
                                    "Markaziy apparat",
                                    "Inspeksiyalar",
                                    "Hududiy boshqarmalar",
                                    "Kon-texnika inspeksiyalari",
                                    "Idoraviy mansub tashkilotlar",
                                    "Hamkorlik",
                                    "Bo‘sh ish o‘rinlari"
                                ]}
                            />

                            <FooterModal
                                title="Axborot xizmati"
                                link={[
                                    "Qo‘mita yangiliklari",
                                    "Yoshlar siyosati",
                                    "Matbuot xizmati bilan bog‘lanish",
                                    "Media",
                                    "Tender e'lonlari va moliyaviy hisobotlar"
                                ]}
                            />

                            <FooterModal
                                title="Qo‘mita faoliyati"
                                link={[
                                    "Markaziy apparat",
                                    "Akkreditatsiya va inspeksiya nazorati",
                                    "Inspeksiyalar"
                                ]}
                            />

                            <FooterModal
                                title="Hujjatlar"
                                link={[
                                    "Normativ hujjatlar",
                                    "Qarorlar",
                                    "Rahbariyat",
                                    "Buyruqlar",
                                    "Qoidalar",
                                    "Yo‘riqnomalar",
                                    "Uslubiy qo‘llanmalar",
                                    "Davlat tilida ish yuritish tartibi",
                                    "O‘z kuchini yo‘qotgan hujjatlar",
                                    "Loyihalar",
                                    "Korrupsiyaga qarshi kurashish"
                                ]}
                            />
                        </div>

                        <div style={{display: 'flex', alignItems: 'flex-start'}}>
                            <FooterModal
                                title="Interaktiv xizmatlar"
                                link={[
                                    "Xizmatlar",
                                    "Ochiq maʼlumotlar",
                                    "Hujjat namunalari",
                                    "Savol - javob",
                                    "So‘rovnoma"
                                ]}
                            />

                            <FooterModal
                                title="Bog‘lanish"
                                link={[
                                    "Ishonch telefonlari",
                                    "Foydali havolalar"
                                ]}
                            />
                        </div>
                    </div>
                ) : undefined
            }

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
                    <FooterLink
                        title="Bo‘limlar"
                        icon1={[FooterLinkIcon1, FooterLinkIcon2, FooterLinkIcon3, FooterLinkIcon4]}
                        // icon2={<FooterLinkIcon2 />}
                        // icon3={<FooterLinkIcon3 />}
                        link={[
                            "- Qo‘mita haqida",
                            "- Qo‘mita faoliyati",
                            "- Normativ hujjatlar",
                            "- Interaktiv xizmatlar",
                            "- Axborot xizmati",
                            "- Biz bilan bog‘lanish",
                        ]}
                    />

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
                            <a href="/" target="_blank" rel="noreferrer"><img src={CounterImg1} alt="" style={{marginRight: '30px'}} /></a>
                            <a href="/" target="_blank" rel="noreferrer"><img src={CounterImg2} alt="" /></a>
                        </div>
                    </div>

                        <a href="https://uic.group/uz" target="_blank" rel="noreferrer">
                            <img src={DevelopmentImg} alt="" style={{width: '100%', marginTop: '40px'}} />
                        </a>

                    <div className="development">
                        <a href="https://uic.group/uz" className="development-title">Sayt yaratish</a>
                        <a href="https://uic.group/uz" className="development-title">Tizim ishlab chiqish</a>
                        <a href="https://uic.group/uz" className="development-title">Mobil ilovalar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;