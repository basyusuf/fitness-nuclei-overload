import React, {Component} from 'react';
import './StatsHeader.css';
class StatsHeader extends Component {
    render() {
        return (
            <div className="statsHeader">
                {this.props.text}
                <div className="headerLine"> </div>
            </div>
        );
    }
}

export default StatsHeader;