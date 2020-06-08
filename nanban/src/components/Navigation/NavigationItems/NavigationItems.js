import React from 'react'

import NavigationItem from './NavigationItem/NavigationItem'
import './NavigationItems.css'

const NavigationItems = props => {

    const Items = ["Home", "Top", "Bottom", "Center"]

    return (
        <ul className="ul" >
            {Items.map((item, index) => {
                return <NavigationItem key={index} name={item} to="#" />
            })}
        </ul>
    )
}

export default NavigationItems