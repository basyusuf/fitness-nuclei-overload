import React, {Component} from 'react';
import './Main.css';

import Header from './Header/Header';
import Content from "./Content/Content";
class Main extends Component {
    render() {
        return (
            <div className="main">
                <div>
                    <Header />
                    <Content />
                </div>
            </div>
        );
    }
}

export default Main;