import React from 'react';

import './ToolBar.css'
import ToggleButton from '../ToggleButton/ToggleButton'

const toolbar = props => {
  return (
    <div className='Toolbar'>
      <ToggleButton onClick = {props.onClick} />
      <h3>Nanban Connect</h3>
    </div>
  )
}

export default toolbar