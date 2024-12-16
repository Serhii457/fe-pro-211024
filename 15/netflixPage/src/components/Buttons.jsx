import React from 'react';

function Buttons(props) {
    return (
        <div>
            <div className="buttons">
            <div>
                <button className="stream-now">
                    STREAM NOW <i className="fa-solid fa-circle-play fa-lg"></i>
                </button>
            </div>
            <div className="button-all-episods">
                <button className="all-episods">
                    ALL EPISODES
                </button>
            </div>
        </div>
        </div>
    );
}

export default Buttons;