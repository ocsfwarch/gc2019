import React, { Component } from 'react';
import OcsaIntItem from './OcsaIntItem.js';
import './OcsaItinerary.css';

export class OcsaItinerary extends Component {
    render() {
        return (
            <div className="ocsa_grid_int_container">
                <OcsaIntItem item={this.props.item} />
            </div>
        )
    }
}

export default OcsaItinerary
