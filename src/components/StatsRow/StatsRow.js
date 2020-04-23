import React, {Component} from 'react';
import './StatsRow.css';
class StatsRow extends Component {
    render() {
        return (
            <div className="ui grid statsRow">
                <div className="thirteen wide column">{this.props.text}</div>
                <div className={this.props.timeStatus?"three wide column statsRowTime timeStatusTrue":"three wide column statsRowTime timeStatusFalse"}>
                    {this.props.time}
                </div>
            </div>
        );
    }
}

export default StatsRow;