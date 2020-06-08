import React from 'react';

import '../../../css/Backdrop.css';

const backdrop = (props) => (
    props.show ? <div className='Backdrop' onClick={props.onClick}></div> : null
);

export default backdrop;