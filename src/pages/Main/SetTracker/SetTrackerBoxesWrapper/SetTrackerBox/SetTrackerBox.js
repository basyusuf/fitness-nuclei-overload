import React, {Component} from 'react';
import './SetTrackerBox.css';
class SetTrackerBox extends Component {

    render() {
        switch(this.props.boxType){
            case "past":
                return (
                    <div className="setTrackerBox setTrackerBoxPast">
                        <div>{this.props.rowNumber}</div>
                        <div className="setTrackerIcons"><i className="fa fa-check-circle"></i></div>

                    </div>
                );
            case "now":
                return (
                    <div className="setTrackerBox setTrackerBoxNow">
                        <div>{this.props.rowNumber}</div>
                        <div className="setTrackerIcons"><div className="ui active centered inline loader"></div></div>
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