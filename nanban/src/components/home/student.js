import React from 'react'

import '../../css/student.css'

const student = props => {
    return (
        <div className="student" >
            <button className="button"> <p>Student</p> </button>
            <div className="flexible">
                <div> 
                    <img className="img" alt="logo" src={require('../../assets/logo/instagram.png')} />
                    <p> Welcome To Nanban Connect. Explore your dreams </p> 
                </div>
                <div> 
                    <img className="img" alt="logo" src={require('../../assets/logo/twitter.png')} />  
                    <p> Welcome To Nanban Connect. Explore your dreams </p> 
                </div>
                <div> 
                    <img className="img" alt="logo" src={require('../../assets/logo/instagram.png')} />
                    <p> Welcome To Nanban Connect. Explore your dreams </p> 
                </div>
                <div> 
                    <img className="img" alt="logo" src={require('../../assets/logo/instagram.png')} />
                    <p> Welcome To Nanban Connect. Explore your dreams </p> 
                </div>
                <div> 
                    <img className="img" alt="logo" src={require('../../assets/logo/instagram.png')} />
                    <p> Welcome To Nanban Connect. Explore your dreams </p> 
                </div>
                <div> 
                    <img className="img" alt="logo" src={require('../../assets/logo/instagram.png')} />
                    <p> Welcome To Nanban Connect. Explore your dreams </p> 
                </div>
            </div>
        </div>
    )
}

export default student