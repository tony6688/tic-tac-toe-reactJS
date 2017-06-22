import React, { Component } from 'react';
import './squre.css';

class Squre extends Component {

    render() {
        return (
            <div className="squre" onClick={this.props.onClick}>
                <span>
                    {this.props.player}
                </span>
            </div>

        );
    }
}

export default Squre;