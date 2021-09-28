import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

import { ExitIcon, NavbarLeftIcon, SearchIcon, UserIcon } from '../../assets/icons/icons';
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import ModalBottom from '../ModalBottom/ModalBottom';

import './Navbar.scss';

const Navbar = ({links}) => {

    const [ toggle, setToggle ] = useState(false);

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
    
    return (
        <div className="Navbar">
            <Router>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <button className="navbarBtn" onClick={onClick}><NavbarLeftIcon iconStyle="opacity: '0.4'" /></button>
                    {
                        links.map(item => {
                            return <NavLink to="" className={`navbarLink`}>{item}</NavLink>
                        })
                    }

                    {
                        isActive ? (
                            <div className={`NavbarModal ${isActive ? "active" : "inactive"}`}>
                                <ModalBottom
                                    ref={dropdownRef}
                                    link={[
                                        "Qo‘mita tarixi",
                                        "Rahbariyat",
                                        "Markaziy apparat",
                                        "Inspeksiyalar",
                                        "Hududiy boshqarmalar",
                                        "Kon-texnika inspeksiyalari",
                                        "Idoraviy mansub tashkilotlar",
                                        "Hay’at",
                                        "Hamkorlik",
                                        "Bo‘sh ish o‘rinlari"
                                    ]}
                                />
                            </div>
                        ) : undefined
                    }
                </div>

                <div style={{display: 'flex', alignItems: 'center'}}>
                    <button onClick={() => setToggle(true)} className={`navbarBtn userIcon ${toggle ? 'closeBtn' : undefined}`}>
                        {
                            !toggle ? <UserIcon /> : true
                        }
                    </button>

                    <button onClick={() => setToggle(false)} className={`navbarBtn userIcon ${!toggle ? 'closeBtn' : undefined}`}>
                        {
                            toggle ? <ExitIcon /> : false
                        }
                    </button>
                    <button className="navbarBtn"><SearchIcon /></button>
                </div>

                <div className={`Modal container ${toggle ? 'visible' : undefined}`}>
                    <div className="Modal-inner">
                        <div className="Modal-block">
                            <h3 className="Modal-block-title rangli">Rangli</h3>
                        </div>

                        <div className="Modal-block rangsiz">
                            <h3 className="Modal-block-title rangsiz">RangSIZ</h3>
                        </div>

                        <div className="Modal-block invert">
                            <h3 className="Modal-block-title invert">INVERT</h3>
                        </div>
                        {/* <img src={ModalImg2} alt="" width="260" height="120" />
                        <img src={ModalImg3} alt="" width="260" height="120" /> */}
                    </div>

                    <div className="Modal-radioSection">
                        <div style={{marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <div>
                                <input type="checkbox" name="picture" id="picture" style={{cursor: 'pointer'}} />
                                <label className="Modal-radioSection-label" htmlFor="picture">Rasmsiz</label>
                            </div>

                            <div>
                                <input type="checkbox" name="voice" id="voice" style={{cursor: 'pointer'}} />
                                <label className="Modal-radioSection-label" htmlFor="voice">Ekran suxandoni</label>
                            </div>

                        </div>
                        <div>
                            <label className="Modal-radioSection-label" htmlFor="range-label" style={{display: 'block', marginLeft: '0'}}>Shrift o‘lchami</label>
                            
                            <div className="rangeSection">
                                <span className="range-size">Aa</span>
                                <div style={{borderTop: '1px solid #CCCCCC', borderBottom: '1px solid #CCCCCC', width: '80%'}}>
                                    <input type="range" name="range-label" id="range-label" className="range-label" />
                                </div>
                                <span className="range-size big">Aa</span>
                            </div>
                        </div>
                    </div>
               </div>
            </Router>
        </div>
    )
}

export default Navbar;