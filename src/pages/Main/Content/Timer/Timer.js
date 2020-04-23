import React, {Component} from 'react';
import './Timer.css';
class Timer extends Component {
    render() {
        return (
            <div className="timerComponent">
                0<span className="timerDescription">s</span>
            </div>
        );
    }
}

export default Timer;