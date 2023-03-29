import React from 'react'
import cardstyle from './Card.module.css'
 const Card = (props)=> {
    return (
        <div className={`${cardstyle.formBox} ${props.cssClass}`}>
            {props.children}
        </div>
    )
}

export default Card;