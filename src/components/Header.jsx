import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons'

function Header(props) {
    const { links, logo } = props;
    console.log(links);   
        
    return (
        <>
            <header>
                <div className="logo"><img src={logo} alt="Ta   sse de thé" /></div>
                <nav className="navbar">
                    <ul className="navbar__items">
                        {links.map((link, i) => (<li key={i}>
                                <a href={`./pages/${link.toLowerCase()}.html`}>{link}</a>
                            </li>))}
                    </ul>
                </nav>
                <div className="notifications">
                    <FontAwesomeIcon icon={faBell} />
                </div>
                <div className="account">
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </header>
        </>
    )   
}

export default Header;  