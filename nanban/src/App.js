import React,{ Component} from 'react';

//Components
import Nav from './components/fixed/ToolBar/nav'
import Student from './components/home/student'

//Style
import './App.css'
import InnerNavigation from './components/home/InnerNavigation';

class App extends Component{
  render(){
    return(
      <div>
        <Nav />
        <InnerNavigation />
        <Student />
      </div>
    )
  }
}

export default App;