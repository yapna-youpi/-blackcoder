import React, { Fragment } from 'react'
import {Link, NavLink} from 'react-router-dom';
import './components/style/menu.css';

const Menu = React.forwardRef((props, ref) => {

    console.log(ref)

    return (
        <Fragment>
            <div className={`menu container-fluid`} ref={ref}>
                <div className="row">
                    <div className={`logo pr-sm-2 col-md-3 d-none d-sm-block text-md-center pl-sm-2 p-3 `}>
                    @black<span className="Or">Coders</span>
                    </div>
                    <div className={`navigation col-12 col-md-9  text-center`}>
                        <NavLink to="/"><i className="fas fa-home"></i> Home</NavLink>
                        <Link to="/Service"> Service</Link>
                        <Link to="/Portfolio">Portfolio</Link>
                        <Link to="/About">About</Link>
                        <Link to="/Contact"> Contact</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
});

export default Menu;
