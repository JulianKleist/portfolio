import React from 'react'
import './card.css';

export default function Card(props) {
  return (
    <div className='container col-5 col-md-3 card_container mt-4 mx-3'>
        <div className='row text-white mx-0 mx-md-2'>
            <div className='mt-3'>
            {props.icon}
            </div>
            <h6 className='my-3'>{props.title}</h6>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
    </div>
  )
}
