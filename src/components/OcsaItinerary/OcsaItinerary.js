import React, { Component } from 'react';
import OcsaIntItem from './OcsaIntItem.js';
import './OcsaItinerary.css';

export class OcsaItinerary extends Component {
    render() {
        return (
            <div className={this.props.theClass}>
                <section className={this.props.theScroller}>
                    <section className="ocsa_itin_overview">
                        <section className="ocsa_itin_item_content">
                            <section className="ocsa_itin_overview_title">
                                Itinerary
                            </section>
                        </section>
                    </section>
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
