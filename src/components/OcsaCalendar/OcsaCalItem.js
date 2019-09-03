import React, { Component } from 'react';

export class OcsaCalItem extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div>{this.props.dt_val}</div>
            </div>
        );
    }
}

export default OcsaCalItem
