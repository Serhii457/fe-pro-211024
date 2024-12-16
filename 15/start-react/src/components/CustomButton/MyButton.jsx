import React from 'react';
import style from './MyButton.module.css';

function MyButton(props) {
    const inlineStyle = {
        color: 'blue',
        fontSize: '30px',
        backgroundColor: 'Yellow',
        margin: '50px'
    }
    let buttonText = 'Hello'
    return (
        <div className='w-50 mx-auto'>
            <button style={inlineStyle}>
                {buttonText}
            </button>
            <button className='btn btn-primary'>
                Regular className
            </button>
            <button className={style.custom}>
                Module CSS
            </button>
        </div>
    );
}

export default MyButton;