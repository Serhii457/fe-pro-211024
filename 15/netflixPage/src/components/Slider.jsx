import React from 'react';

function Slider(props) {
    return (
        <div>
             <div className="popular-this-week">
            <div>
                <h4>
                    POPULAR THIS WEEK
                </h4>
            </div>
            <div>
                <button className="button-shevron">
                    {/* <img className="left-button" src="images/Left.png" alt="Button left"> */}
                </button>
                <button className="button-shevron">
                    {/* <img className="right-button" src="images/Right.png" alt="Button right"> */}
                </button>
            </div>
        </div>
        <div className="scrolled-films">
            {/* <img className="img-box" src="images/Breaking bad.png" alt="Breaking bad">
            <img className="img-box" src="images/The Rain.png" alt="The Rain">
            <img className="img-box" src="images/Life in a year.png" alt="Life in a year">
            <img className="img-box" src="images/Money Heist.png" alt="Money Heist">
            <img className="last-img-box" src="images/Squid game.png" alt="Squid game"> */}
        </div>
        </div>
    );
}

export default Slider;