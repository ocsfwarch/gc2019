import React, { Component } from 'react';
import OcsaMealItem from './OcsaMealItem';
import './OcsaMeal.css';

export class OcsaMealContainer extends Component {
    render() {
        return (
            <div className="ocsa_grid_meal_container">
                <section className="ocsa_grid_meal_scroller">
                    <section className="ocsa_meal_overview">
                        <section className="ocsa_itin_item_content">
                            <section className="ocsa_meal_overview_title">
                                Meals
                            </section>
                        </section>
                    </section>
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
