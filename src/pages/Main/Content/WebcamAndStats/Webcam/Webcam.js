import React, {Component} from 'react';
import './Webcam.css';
class Webcam extends Component {
    render() {
        return (
            <div className="six wide column">
                <div className="exampleWebcamDiv">
                    <i className="fa fa-camera"></i>Webcam
                </div>
            </div>
        );
    }
}

export default Webcam;