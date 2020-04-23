import React, {Component} from 'react';
import StatusButton from "../../../../../../components/StatusButton/StatusButton";
import './TimerButtons.css';
class TimerButtons extends Component {
    render() {
        return (
            <div className="ui grid">
                <div className="eight wide column">
                <StatusButton buttonStatus={true} text="Start set" onClick={()=>{alert('Started set')}} />
                <StatusButton buttonStatus={false} text="Stop set" />
                </div>
                <div className="eight wide column timerButtonsRight">
                    <StatusButton buttonStatus={true} text="Start rest" />
                    <StatusButton buttonStatus={false} text="Stop rest" />
                </div>
            </div>
        );
    }
}

export default TimerButtons;