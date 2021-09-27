import { useState } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

import { ExitIcon, NavbarLeftIcon, SearchIcon, UserIcon } from '../../assets/icons/icons';

import './Navbar.scss';

const Navbar = ({links}) => {

    const [ toggle, setToggle ] = useState(false);

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
                    <button onClick={() => setToggle(true)} className="navbarBtn userIcon">
                        {
                            toggle === false ? <UserIcon /> : <ExitIcon />         
                        }
                    </button>
                    <button className="navbarBtn"><SearchIcon /></button>
               </div>
            </Router>
        </div>
    )
}

export default Navbar;