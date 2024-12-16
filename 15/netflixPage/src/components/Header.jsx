import React from 'react';

function Header(props) {
    return (
        <div>
            <header className="top-part">
            <div className="top-left">
                <div className="netflix-logo">
                    {/* <img src="images/netflix-logo.png" alt="Logo Netflix"> */}
                </div>
                <div>
                    <h4 className="date">
                        Friday July 8th
                    </h4>
                </div>
            </div>
            <div className="top-right">
                {/* <img class="search-icon" src="images/fe_search.png" alt="Search">
                <img class="avatar-icon" src="images/Ellipse 2.png" alt="Ellipse"> */}
            </div>
    </header>
        </div>
    );
}

export default Header;