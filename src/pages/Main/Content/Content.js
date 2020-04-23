import React, {Component} from 'react';
import Timer from './Timer/Timer';
import WebcamAndStats from "./WebcamAndStats/WebcamAndStats";
class Content extends Component {
    render() {
        return (
            <div>
                <div className="ui segment">
                    <Timer />
                    <WebcamAndStats />
                </div>
            </div>
        );
    }
}

export default Content;