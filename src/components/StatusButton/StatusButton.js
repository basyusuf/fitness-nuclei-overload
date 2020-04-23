import React, {Component} from 'react';
import './StatusButton.css';

class StatusButton extends Component {
    render() {
        return (
            <div className={this.props.buttonStatus?"statusButton statusButtonPositive":"statusButton statusButtonNegative"} onClick={this.props.onClick}>
                {this.props.text}
            </div>
        );
    }
}

export default StatusButton;