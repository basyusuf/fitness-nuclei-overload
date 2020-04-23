import React, {Component} from 'react';
import './SetTrackerBox.css';
class SetTrackerBox extends Component {

    render() {
        switch(this.props.boxType){
            case "past":
                return (
                    <div className="setTrackerBox setTrackerBoxPast">
                        {this.props.rowNumber}
                    </div>
                );
            case "now":
                return (
                    <div className="setTrackerBox setTrackerBoxNow">
                        {this.props.rowNumber}
                    </div>
                );
            case "next":
                return (
                    <div className="setTrackerBox setTrackerBoxNext">
                        {this.props.rowNumber}
                    </div>
                );
            default:
                return (
                    <div className="setTrackerBox setTrackerBoxDefault">
                        X
                    </div>
                );
        }

    }
}

export default SetTrackerBox;