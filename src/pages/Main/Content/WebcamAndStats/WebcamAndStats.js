import React, {Component} from 'react';
import AvgStats from "./AvgStats/AvgStats";
import Webcam from "./Webcam/Webcam";
import FreshStats from "./FreshStats/FreshStats";

class WebcamAndStats extends Component {
    render() {
        return (
            <div className="ui grid">
                <AvgStats />
                <Webcam />
                <FreshStats />
            </div>
        );
    }
}

export default WebcamAndStats;