import React from 'react';
import './custom_button.css';

function Custom_button({name}) {
    return (
        <div className='container mb-5'>
            <div className='row mb-5'>
                <button className='col-12 col-md-4 cstm_button'>{name}</button>
            </div>
        </div>
    );
}

export default Custom_button;