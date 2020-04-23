import React, {Component} from 'react';
import './SetTracker.css';
import SetTrackerBoxesWrapper from "./SetTrackerBoxesWrapper/SetTrackerBoxesWrapper";
class SetTracker extends Component {
    render() {
        return (
            <div className="ui segment">
                <div className="setTrackerHeader">Set's</div>
                <SetTrackerBoxesWrapper setCount={8} />
            </div>
        );
    }
}

export default SetTracker;