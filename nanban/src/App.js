import React,{ Component} from 'react';

//Components
import Nav from './components/fixed/ToolBar/nav'

//Style
import './App.css'
import InnerNavigation from './components/home/InnerNavigation';

class App extends Component{
  render(){
    return(
      <div>
        <Nav />
        <InnerNavigation />
      </div>
    )
  }
}

export default App;