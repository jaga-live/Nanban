import React from 'react'

import './SideDrawer.css'
import Auxillary from '../../../hoc/Auxillary/Auxillary'
import BackDrop from '../../UI/BackDrop/BackDrop'
import NavigationItems from '../NavigationItems/NavigationItems'

const sideDrawer = props => {
    
    let classNames = ['SideDrawer', props.show ? "Open" : 'Close']

    return (
        <Auxillary>
            <BackDrop show={props.show} onClick={props.onClick} />
            <div className={classNames.join(' ')} >
                <NavigationItems />
            </div>
        </Auxillary>
    )
}

export default sideDrawer