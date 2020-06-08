import React, { Fragment } from 'react';

// import Logo from '../../Logo/Logo';
import '../../../css/SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = ( props ) => {

    let attachedClasses = ['SideDrawer', props.show ? 'Open' : 'Close']
    
    return (
        <Fragment>
            <Backdrop show={props.show} onClick={props.onClick}/>
            <div className={attachedClasses.join(' ')} >
                {/* <div className={Logo}>
                    <Logo />
                </div> */}
                <ul>
                    <li>Home</li>
                    <li>Student</li>
                    <li>Proffesor</li>
                    <li>Companies</li>
                </ul>
            </div>
        </Fragment>
    );
};

export default sideDrawer;