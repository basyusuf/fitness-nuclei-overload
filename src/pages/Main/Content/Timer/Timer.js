import React, {Component} from 'react';
import './Timer.css';
class Timer extends Component {
    render() {
        return (
            <div className="timerComponent">
                <div className="timerDescription">
                    {this.props.description}
                </div>
                <div className="timerTime">0<span className="timerValueString">s</span></div>
            </div>
        );
    }
}

export default Timer;