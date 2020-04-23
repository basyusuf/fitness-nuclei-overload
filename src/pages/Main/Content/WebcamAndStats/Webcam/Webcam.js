import React, {Component} from 'react';
import './Webcam.css';
import Camera from "./Camera/Camera";
import TimerButtons from "./TimerButtons/TimerButtons";
class Webcam extends Component {
    render() {
        return (
            <div className="six wide column">
                <Camera />
                <TimerButtons />
            </div>
        );
    }
}

export default Webcam;