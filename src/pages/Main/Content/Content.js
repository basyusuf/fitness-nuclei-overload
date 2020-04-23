import React, {Component} from 'react';
import Timer from './Timer/Timer';
import WebcamAndStats from "./WebcamAndStats/WebcamAndStats";
class Content extends Component {
    render() {
        return (
            <div>
                <div className="ui segment">
                    <Timer description="Set" />
                    <WebcamAndStats />
                </div>
            </div>
        );
    }
}

export default Content;