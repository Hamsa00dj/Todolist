import React from 'react'

function TODO(props) {


  return (
    <div>
        <div>
           < i className="fa-solid fa-xmark"
            aria-hidden = "true" 
            onClick={props.onSelect} />
            return <li>{props.text}</li>
           </div>
    </div>
  )
}

export default TODO