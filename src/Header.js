import React, { Component } from 'react';
import DynamicText from './page/DynamicText';
import './components/style/header.css';

class Header extends Component {
    render() {
        return (
            <div className="banner">
                <div className={`banner_content`}>
                    <h1 className={`mb-4 mt-5`}>welcome ! ! !</h1>
                    <hr className="ligne" />
                    <div className={`bouton`}>login</div>
                </div>
                
                <div className="home-main">
                    <div className="min-content">
                        <h1>@Black<span style={{color:'#ffd32a'}}>Coder</span></h1>
                        <h2><DynamicText /></h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
