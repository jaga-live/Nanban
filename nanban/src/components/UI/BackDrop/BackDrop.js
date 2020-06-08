import React from 'react'

import Auxillary from '../../../hoc/Auxillary/Auxillary'
import './BackDrop.css'

const backDrop = props => {

    let backDrop = null
    if(props.show){
        backDrop = <div className='BackDrop' onClick={props.onClick}  ></div>
    }

    return(
        <Auxillary>
            {backDrop} 
        </Auxillary>       
    )
}

export default backDrop