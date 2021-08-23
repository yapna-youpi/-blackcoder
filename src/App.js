import React from 'react';
import Menu from './Menu';
import {Redirect,Route,Switch} from 'react-router-dom';
import {Home} from './page/Home'; 
import {Service} from './page/Service'; 
import {Portfolio} from './page/Portfolio'; 
import {About} from './page/About'; 
import {Contact} from './page/Contact'; 


 
function App() {
    return(
        <div className={`App `}>
            <Menu />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Service" component={Service} />
                <Route exact path="/Portfolio" component={Portfolio} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Contact" component={Contact} />
                <Redirect to="/" />
            </Switch> 
            
            
            
        </div>
    )
}

export default App;