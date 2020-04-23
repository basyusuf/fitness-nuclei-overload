import React, {Component} from 'react';
import SetTrackerBox from "./SetTrackerBox/SetTrackerBox";
import './SetTrackerBoxesWrapper.css'
class SetTrackerBoxesWrapper extends Component {
    render() {
        return (
            <div className="setTrackerBoxes">
                <SetTrackerBox rowNumber={1}  boxType="past"/>
                <SetTrackerBox rowNumber={2}  boxType="past"/>
                <SetTrackerBox rowNumber={3}  boxType="past"/>
                <SetTrackerBox rowNumber={4}  boxType="past"/>
                <SetTrackerBox rowNumber={5}  boxType="now"/>
                <SetTrackerBox rowNumber={6}  boxType="next"/>
                <SetTrackerBox rowNumber={7}  boxType="next"/>
                <SetTrackerBox rowNumber={8}  boxType="next"/>
            </div>
        );
    }
}

export default SetTrackerBoxesWrapper;