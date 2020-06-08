import React from 'react'

import './NavigationItem.css'

const NavigationItem = props => {
    return(
        <li>
            <a href={props.to} > {props.name} </a>
        </li>
    )
}

export default NavigationItem