import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { NavbarLeftIcon, SearchIcon, UserIcon } from '../../assets/icons/icons';

import './Navbar.scss';

const Navbar = ({links}) => {
    return (
        <div className="Navbar">
            <Router>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <button className="navbarBtn"><NavbarLeftIcon iconStyle="opacity: '0.4'" /></button>
                    {
                        links.map(item => {
                            return <NavLink to="" className="navbarLink">{item}</NavLink>
                        })
                    }
                </div>

               <div style={{display: 'flex', alignItems: 'center'}}>
                    <button className="navbarBtn"><UserIcon/></button>
                    <button className="navbarBtn"><SearchIcon /></button>
               </div>
            </Router>
        </div>
    )
}

export default Navbar;