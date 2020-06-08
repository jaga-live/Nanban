import React, {Component} from 'react'


//Style
import '../../css/nav.css'


class Nav extends Component{
    render(){
        return(
           
            <div>
                <header >
                    <img src={require("../../assets/logo/nanban.png")} alt="nanban"></img>
                    <nav>
                        <ul>

                            <li>Home</li>
                            <li>Student</li>
                            <li>Proffesor</li>
                            <li>Companies</li>

                        </ul>
                    </nav>
                </header>

            </div>
        )
    }
} 


export default Nav