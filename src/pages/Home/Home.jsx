import { Link } from 'react-router-dom';

import NewsCard from '../../components/NewsCard';
import Title from '../../components/Title';
import Header from '../../containers/Header';
import CardView from '../../components/CardView';
import SocialLink from '../../components/SocialLink';
import BgImg1 from '../../assets/images/NewsCardImg1.png';
import BgImg2 from '../../assets/images/NewsCardImg2.png';
import BgImg3 from '../../assets/images/NewsCardImg3.png';
import BgImg4 from '../../assets/images/NewsCardImg4.png';
import CardViewImg1 from '../../assets/images/CardViewImg1.png';
import CardViewImg2 from '../../assets/images/CardViewImg2.png';

import './Home.scss';

import { SocialCoruptionIcon, SocialTelegramIcon } from '../../assets/icons/icons';

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <div className="container">
                <Title title="Yangiliklar" text="Barcha yangiliklar" line />
                
                <div className="cards-grid">
                    <NewsCard bgImg={BgImg1} date="19 May 2021, 12:56" title="Baxtiyor Vaxabovichning Sanoat qo‘mitasining rasmiy veb saytida ..." />
                    <NewsCard bgImg={BgImg2} date="19 May 2021, 16:32" title="Davlat rahbarining Qo‘mita tashrifi yuzasidan navbatdagi yig‘ilish o‘t..." />
                    <NewsCard bgImg={BgImg3} date="22 Avgust 2002, 12:56" title="Baxtiyor Vaxabovichning Sanoat qo‘mitasining rasmiy veb saytida ..." />
                    <img src={BgImg4} alt="" width="300" height="365" style={{cursor: 'pointer'}} />
                </div>

                <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '65px'}}>
                    <div className="card-view">
                        <CardView img={CardViewImg1} date="22 Avgust 2002, 12:56" title="Harbiylashtirlgan kon qutqaruv qismlarining tezkor tayyorgarligini monitoringi tadbiri bo‘lib o‘tdi" />
                        <CardView img={CardViewImg1} date="22 Avgust 2002, 12:56" title="Harbiylashtirlgan kon qutqaruv qismlarining tezkor tayyorgarligini monitoringi tadbiri bo‘lib o‘tdi" />
                    </div>

                    <div className="card-view">
                        <CardView img={CardViewImg2} date="22 Avgust 2002, 12:56" title="“O‘zbekiston Respublikasining Konstitutsiyaviy sudi to‘g‘risida”gi Qonunning mazmun-mohiyati" />
                        <CardView img={CardViewImg2} date="22 Avgust 2002, 12:56" title="“O‘zbekiston Respublikasining Konstitutsiyaviy sudi to‘g‘risida”gi Qonunning mazmun-mohiyati" />
                    </div>

                    <div>
                        <div className="socialTelegram">
                            <a href="https://www.telegram.org" target="_blank">
                                <SocialLink telegramClass title="Qo‘mitaning rasmiy telegram sahifasiga a’zo bo‘ling" btn="Obuna bo‘lish" icon={<SocialTelegramIcon />} />
                            </a>
                        </div>

                        <div className="socialCoruption">
                            <a href="" target="_blank">
                                <SocialLink coruptionClass title="Korrupsiya holatiga duch keldingizmi? Iltimos, darhol bizga murojaat qiling!" btn="Shikoyat yo‘llash" icon={<SocialCoruptionIcon />} />
                            </a>
                        </div>
                    </div>
                </div>


                <Title title="Faoliyat yo‘nalishlari" line/>
            </div>
        </div>
    )
}

export default Home;