import React,{useState, useEffect, useRef} from 'react';
import Menu from './Menu';
import {Redirect,Route,Switch} from 'react-router-dom';
import {Home} from './page/Home'; 
import {Service} from './page/Service'; 
import {Portfolio} from './page/Portfolio'; 
import {About} from './page/About'; 
import {Contact} from './page/Contact'; 
import ico1 from './components/assets/image/icons/icons8_Menu.ico'
import ico2 from './components/assets/image/icons/icons8_Delete.ico'
 
function App() {

    const [visible, setVisible] = useState(false);
    const ref = useRef();
    const showNavigation = () => {
        setVisible( visible => !visible)
        ref.current.classList.add('menu-petit');
    }     

    useEffect(() => {
        if (ref) {
            
        }
    }, [visible])

    const nav = visible ? <img src={ico2} alt="icon navig1"/> : <img src={ico1} alt="icon navig2"/>


    return(
        <div className={`App `}>
            <Menu ref={ref}/>
            <span className="text-light position-relative " id="menu-nav" onClick={showNavigation}>{nav}</span>
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