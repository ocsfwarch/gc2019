import React, { Component } from 'react';
import OcsaMealItem from './OcsaMealItem';
import './OcsaMeal.css';

export class OcsaMealContainer extends Component {
    render() {
        return (
            <div className="ocsa_grid_meal_container">
                <section className="ocsa_grid_meal_scroller">
                    {this.props.mealItems.map((item) => (
                        <OcsaMealItem key={item.key} 
                        mealItems={item}
                        />
                    ))}
                </section>
            </div>
        )
    }
}

export default OcsaMealContainer
