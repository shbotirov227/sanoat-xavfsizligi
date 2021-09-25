import { BrowserRouter as Router, Link } from 'react-router-dom';

import './Navbar.scss';

const Navbar = ({links}) => {
    return (
        <div className="Navbar">
            <Router>
                {
                    links.map(item => {
                        return <Link to="">{item}</Link>
                    })
                }

            <button>iconUser</button>
            <button>IconSearch</button>
            </Router>
        </div>
    )
}

export default Navbar;