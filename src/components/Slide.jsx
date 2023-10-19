import React from 'react';
import './Slide.css';

function Slide ({number}) {

    return (
        <div className='container main_slide col-1'>
            <div className='col'>
                <div className={number ? 'one' : 'circle'}></div>
                <div className='line ms-2'></div>
                <div className={number ? 'two' : 'circle'}></div>
                <div className='line ms-2'></div>
                <div className={number ? 'three' : 'circle'}></div>
            </div>
        </div>
    );
}

export default Slide;