import React from 'react'
import './card.css';

export default function Card() {
  return (
    <div className='container col-5 col-md-3 card_container mt-4 mx-3'>
        <div className='row text-white'>
            <span>X</span>
            <h6>Git Version Control</h6>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
    </div>
  )
}
