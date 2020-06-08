import React from 'react';

import './ToolBar.css'
import ToggleButton from '../ToggleButton/ToggleButton'
import mainLogo from'../../../images/mainLogo.png'
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = props => {
  return (
    <div className='Toolbar'>
      <ToggleButton onClick = {props.onClick} />
      <div className="img">
        <img src={mainLogo} />
        <nav>
          <NavigationItems />
        </nav>
      </div>
      <h3>Nanban Connect</h3>
    </div>
  )
}

export default toolbar