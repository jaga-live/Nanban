import React, {Component} from 'react'


//Style
import '../../../css/nav.css'
import HamburgerIcon from '../../Navigation/HamburgerIcon/HamburgerIcon'
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer'


class Nav extends Component{

    state = {
        show: false
    }

    close = () => {
        this.setState({show: !this.state.show})
    }
    
    render(){
        return(
            <header className="Container" >
                <img src={require("../../../assets/logo/nanban.png")} alt="nanban"></img>
                <ul>
                    <li>Home</li>
                    <li>Student</li>
                    <li>Proffesor</li>
                    <li>Companies</li>
                </ul>
                <HamburgerIcon onClick={this.close} />
                <SideDrawer show={this.state.show} onClick={this.close} />
            </header>
        )
    }
} 


export default Nav