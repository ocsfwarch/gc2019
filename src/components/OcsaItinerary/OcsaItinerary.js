import React, { Component } from 'react';
import OcsaIntItem from './OcsaIntItem.js';
import './OcsaItinerary.css';

export class OcsaItinerary extends Component {
    render() {
        return (
            <div className="ocsa_grid_int_container">
                <section className="ocsa_grid_scroller">
                    {this.props.dispItems.map((item) => (
                        <OcsaIntItem key={item.key} 
                        dispItems={item}
                        onAddComment={this.props.onAddComment}
                        />
                    ))}
                </section>
            </div>
        )
    }
}

export default OcsaItinerary
