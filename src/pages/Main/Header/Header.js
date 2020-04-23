import React, {Component} from 'react';
import './Header.css';
class Header extends Component {
    render() {
        return (
            <div className="headerComponent">
                <div className="ui segment grid">
                    <div className="five wide column"><i className="fa fa-bars"> </i></div>
                    <div className="six wide column headerComponentCenter">Fitness React App</div>
                    <div className="five wide column"></div>
                </div>
            </div>
        );
    }
}

export default Header;