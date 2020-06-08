import React, { useState } from 'react'

import Auxillary from '../Auxillary/Auxillary'
import Toolbar from '../../components/Navigation/ToolBar/ToolBar'
import './Layout.css'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

const Layout = props => {

    const [show, setState] = useState(false)

    const closeSideBar = () => {
        setState(!show)
    }

    return(
        <Auxillary>
            <Toolbar onClick={closeSideBar} />
            <SideDrawer show={show} onClick={closeSideBar} />
            <main className='main'>
                {props.children}
            </main>
        </Auxillary>
    )
}

export default Layout