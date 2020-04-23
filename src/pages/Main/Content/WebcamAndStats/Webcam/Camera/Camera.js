import React, {Component} from 'react';
import './Camera.css';
class Camera extends Component {
    render() {
        return (
            <div className="exampleWebcamDiv">
                <i className="fa fa-camera"></i>Webcam
            </div>
        );
    }
}

export default Camera;