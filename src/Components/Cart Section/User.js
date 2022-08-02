import React from 'react'

export default function User(props) {
  return (
    <div className='media border-bottom border-secondary my-4 py-3 '>
    <img style={props.style}  className='img mr-4 rounded-circle align-self-start' src={props.img} alt="...p"  id='image'/>
    <div className='media-body'>
        <div className='row'>
            <div className='col-6'>
                <p ><span className='font-weight-bold'>{props.product}</span><br/>{props.message}</p>
                <small className='muted'>#{!props.id?"doesn't attach id":props.id}</small>
            </div>
            <div className='col-4 ml-auto text-end align-self-center mt-4'>
               <p>${props.price}</p>
            </div>
        </div>
    </div>
    
</div>
  )
}
