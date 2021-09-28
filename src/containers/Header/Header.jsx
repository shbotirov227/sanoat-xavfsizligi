
import HeaderItems from '../../components/HeaderItems';
import HeaderTopTitle from '../../components/HeaderTopTitle/HeaderTopTitle';
import Navbar from '../../components/Navbar/Navbar';

import './Header.scss';

const Header = () => {
    return (
        <div className="Header">
            <HeaderTopTitle />
    
            <div className="container">
                <HeaderItems />
                <Navbar links={[ "qo‘mita haqida", "Qo‘mita faoliyati", "hujjatlar", "Interaktiv xizmatlar", "axborot xizmati", "bog‘lanish" ]}/>
            </div>
        </div>
    )
}

export default Header;