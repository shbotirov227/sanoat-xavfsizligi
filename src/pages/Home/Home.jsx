import NewsCard from '../../components/NewsCard';
import Title from '../../components/Title';
import Header from '../../containers/Header';
import CardView from '../../components/CardView';
import SocialLink from '../../components/SocialLink';
import ActivityCard from '../../components/ActivityCard';
import MediaCard from '../../components/MediaCard';
import LinkCard from '../../components/LinkCard';
import Footer from '../../containers/Footer';
import InteractiveBtn from '../../components/InteractiveBtn';
import BgImg1 from '../../assets/images/NewsCardImg1.png';
import BgImg2 from '../../assets/images/NewsCardImg2.png';
import BgImg3 from '../../assets/images/NewsCardImg3.png';
import BgImg4 from '../../assets/images/NewsCardImg4.png';
import CardViewImg1 from '../../assets/images/CardViewImg1.png';
import CardViewImg2 from '../../assets/images/CardViewImg2.png';
import MediaCardImg1 from '../../assets/images/MediaCardBg1.png';
import MediaCardImg2 from '../../assets/images/MediaCardBg2.png';
import MediaCardImg3 from '../../assets/images/MediaCardBg3.png';
import MediaCardImg4 from '../../assets/images/MediaCardBg4.png';
import LinkCardIcon1 from '../../assets/images/icons/LinkCardIcon1.svg';
import LinkCardIcon2 from '../../assets/images/icons/LinkCardIcon2.svg';

import {
    SocialCoruptionIcon,
    SocialTelegramIcon,
    ActivityCardIcon1,
    ActivityCardIcon2,
    ActivityCardIcon3,
    ActivityCardIcon4,
    ActivityCardIcon5,
    ActivityCardIcon6,
    ActivityCardIcon7,
    ActivityCardIcon8,
    ActivityCardIcon9,
    ActivityCardIcon10,
    ActivityCardIcon11,
    ActivityCardIcon12,
    PicIcon,
    VideoIcon,
    UIC,
} from '../../assets/icons/icons';

import './Home.scss';


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
                    <div className="card-view" style={{width: '47%'}}>
                        <CardView img={CardViewImg1} date="22 Avgust 2002, 12:56" title="Harbiylashtirlgan kon qutqaruv qismlarining tezkor tayyorgarligini monitoringi tadbiri bo‘lib o‘tdi" />
                        <CardView img={CardViewImg1} date="22 Avgust 2002, 12:56" title="Harbiylashtirlgan kon qutqaruv qismlarining tezkor tayyorgarligini monitoringi tadbiri bo‘lib o‘tdi" />
                    </div>

                    <div className="card-view" style={{width: '47%'}}>
                        <CardView img={CardViewImg2} date="22 Avgust 2002, 12:56" title="“O‘zbekiston Respublikasining Konstitutsiyaviy sudi to‘g‘risida”gi Qonunning mazmun-mohiyati" />
                        <CardView img={CardViewImg2} date="22 Avgust 2002, 12:56" title="“O‘zbekiston Respublikasining Konstitutsiyaviy sudi to‘g‘risida”gi Qonunning mazmun-mohiyati" />
                    </div>

                    <div style={{width: '27%'}}>
                        <div className="socialTelegram" style={{width: '100%'}}>
                            <a href="https://www.telegram.org" rel="noreferrer" target="_blank">
                                <SocialLink telegramClass title="Qo‘mitaning rasmiy telegram sahifasiga a’zo bo‘ling" btn="Obuna bo‘lish" icon={<SocialTelegramIcon />} />
                            </a>
                        </div>

                        <div className="socialCoruption" style={{width: '100%'}}>
                            <a href="/" rel="noreferrer" target="_blank">
                                <SocialLink coruptionClass title="Korrupsiya holatiga duch keldingizmi? Iltimos, darhol bizga murojaat qiling!" btn="Shikoyat yo‘llash" icon={<SocialCoruptionIcon />} />
                            </a>
                        </div>
                    </div>
                </div>


                <Title title="Faoliyat yo‘nalishlari" line/>

                <div className="activityCards">
                    <ActivityCard
                        cardIcon={<ActivityCardIcon1 />}
                        cardTitle="Ko‘mir, kon-ruda va noruda sohalarida sanoat xavfsizligi inspeksiyasi"
                    />

                    <ActivityCard
                        cardIcon={<ActivityCardIcon2 />}
                        cardTitle="Geologiya-qidiruv ishlarini olib borishda sanoat xavfsizligi inspeksiyasi"
                    />

                    <ActivityCard
                        cardIcon={<ActivityCardIcon3 />}
                        cardTitle="Kimyo, neft-kimyo va metallurgiya sohalarida sanoat xavfsizligi inspeksiyasi"
                    />

                    <ActivityCard
                        cardIcon={<ActivityCardIcon4 />}
                        cardTitle="Gaz xo‘jaligida sanoat xavfsizligi inspeksiyasi"
                    />

                    <ActivityCard
                        cardIcon={<ActivityCardIcon5 />}
                        cardTitle="Donni saqlash va qayta ishlashda sanoat xavfsizligi inspeksiyasi"
                    />

                    <ActivityCard
                        cardIcon={<ActivityCardIcon6 />}
                        cardTitle="Istrohat bog‘lari attraksionlarini nazorat qilish inspeksiyasi"
                    />

                    <ActivityCard
                        cardIcon={<ActivityCardIcon7 />}
                        cardTitle="Bug‘ qozonxonalari, ko‘tarish inshootlari sanoat xafsizligi inspeksiyasi"
                    />

                    <ActivityCard
                        cardIcon={<ActivityCardIcon8 />}
                        cardTitle="Temir yo‘l transportida tashishda xavfli yuklarni yuklash, tushirish va saqlashda sanoat xavfsizligi inspeksiyasi"
                    />

                    <ActivityCard
                        cardIcon={<ActivityCardIcon9 />}
                        cardTitle="Kimyoviy va bakteriologik qurollarni taqiqlash to‘g‘risidagi konvensiyaning ijrosini nazorat qilish inspeksiyasi"
                    />

                    <ActivityCard
                        cardIcon={<ActivityCardIcon10 />}
                        cardTitle="Neft va gaz sohasida sanoat xavfsizligi inspeksiyasi"
                    />

                    <ActivityCard
                        cardIcon={<ActivityCardIcon11 />}
                        cardTitle="Akkreditatsiya va inspeksiya nazorati bo‘limi"
                    />

                    <ActivityCard
                        cardIcon={<ActivityCardIcon12 />}
                        cardTitle="Burg‘ulash va portlatish ishlari bo‘yicha"
                    />
                </div>

                <Title title="Interaktiv xizmatlar" line />

                <div style={{marginBottom: '65px'}}>
                    <InteractiveBtn title={[
                        "Fuqarolar murojaati",
                        "Ochiq ma’lumotlar",
                        "Korrupsiyaga qarshi kurash",
                        "Ishonch telefonlari",
                        "Tender e’lonlari",
                        "Bo‘sh ish o‘rinlari"
                    ]} />
                </div>

                <Title title="Media" buttons line />
                
                <div style={{marginBottom: '65px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <MediaCard
                        date="03 Yanvar 2020, 09:41"
                        title="Harbiylashtirilgan kon qutqaruv qismlarining tezkor tayyorgarligini monitoringi tadbiri bo‘lib o‘tdi"
                        img={MediaCardImg1}
                        icon={<PicIcon />}
                    />
                    
                    <MediaCard
                        date="03 Yanvar 2020, 09:41"
                        title="Harbiylashtirilgan kon qutqaruv qismlarining tezkor tayyorgarligini monitoringi tadbiri bo‘lib o‘tdi"
                        img={MediaCardImg2}
                        icon={<VideoIcon />}
                    />

                    <MediaCard
                        date="03 Yanvar 2020, 09:41"
                        title="Harbiylashtirilgan kon qutqaruv qismlarining tezkor tayyorgarligini monitoringi tadbiri bo‘lib o‘tdi"
                        img={MediaCardImg3}
                        icon={<VideoIcon />}
                    />

                    <MediaCard
                        date="03 Yanvar 2020, 09:41"
                        title="Harbiylashtirilgan kon qutqaruv qismlarining tezkor tayyorgarligini monitoringi tadbiri bo‘lib o‘tdi"
                        img={MediaCardImg4}
                        icon={<PicIcon />}
                    />
                </div>

                <Title title="Foydali havolalar" buttons />

                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '55px'}}>
                    <LinkCard img={LinkCardIcon1} link="www.president.uz" title="O‘zbekiston respublikasi Prezidentining matbuot xizmati" />
                    <LinkCard img={LinkCardIcon2} link="www.president.uz" title="O‘zbekiston respublikasi Prezidentining matbuot xizmati" />
                    <LinkCard img={LinkCardIcon1} link="www.president.uz" title="O‘zbekiston respublikasi Prezidentining matbuot xizmati" />
                    <LinkCard img={LinkCardIcon1} link="www.president.uz" title="O‘zbekiston respublikasi Prezidentining matbuot xizmati" />
                    <LinkCard img={LinkCardIcon1} link="www.president.uz" title="O‘zbekiston respublikasi Prezidentining matbuot xizmati" />
                </div>

            </div>
                <Footer />
                    
                <div className="copyright" style={{border: '0.5px solid #E1E1E1', boxSizing: 'border-box'}}>
                    <div className="container" style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '20px 0',
                        }}>
                        <span className="copyright-left">O‘zbekiston Respublikasi Sanoat xavfsizligi davlat qo‘mitasi © 2020 Barcha huquqlar qonun bilan himoyalangan.</span>
                        <span className="copyright-right">Designed and developed by <span style={{marginLeft: '5px'}}><UIC /></span></span>
                    </div>
                </div>                
        </div>
    )
}

export default Home;