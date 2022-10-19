import React from 'react'
import call from './images/call.webp'
import mail from './images/mail.png'
function Contact(props) {
  return (
    <div className="contact-card">
    <img src={props.image}/>
    <h3>{props.name}</h3>
    <div className="info-group">
        <img src={call}/>
        <p>{props.phone}</p>
    </div>
    <div className="info-group">
        <img src={mail}/>
        <p>{props.email}</p>
    </div>
</div>
  )
}

export default Contact
