import React from 'react'
import NanbanIntro from '../NanbanIntro/NanbanIntro'

import '../../../css/InnerNavigation.css'

const InnerNavigation = props => {
    return (
        <div className="InnerNavigationContainer">
        <NanbanIntro />
        <div className="InnerNavigation">
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>
    )
}

export default InnerNavigation