import React from 'react';
import './Slide.css';

function Slide () {
    return (
        <div className='container col-1'>
            <div className='col'>
                <div className='circle'></div>
                <div className='line ms-2'></div>
                <div className='circle'></div>
                <div className='line ms-2'></div>
                <div className='circle'></div>
            </div>
        </div>
    );
}

export default Slide;