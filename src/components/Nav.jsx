import { useState } from 'react';

function Nav() {
    const [menuExpanded, setMenuExpanded] = useState(false);

    const toggleMenu = () => {
        setMenuExpanded(!menuExpanded)
    }

    return (
        <section>
            {/* collapsed */}
            <div className="nav-collapsed" onClick={toggleMenu}>
                <div id="name">A</div>
                <div id="menu-icon">☰</div>
            </div>

            {/* expanded */}
            <div className={`nav-expanded ${menuExpanded ? '' : 'hidden'}`}>
                <div className="left"></div>
                <div className="right">
                    <button>Home</button>
                    <button>Portfolio</button>
                    <button>About</button>
                    <button>Resume</button>
                </div>
            </div>
        </section>
    );
};

export default Nav;