import React, { Component } from 'react';
import './OcsaMeal.css';

export class OcsaMealItem extends Component {
    render() {
        const nSize = this.props.mealItems.ingredients.length;
        let strClassName = "";
        if(nSize < 5){
            strClassName = "ocsa_meal_item ocsa_meal_item_small";
        }else if(nSize < 8){
            strClassName = "ocsa_meal_item ocsa_meal_item_med";
        }else{
            strClassName = "ocsa_meal_item ocsa_meal_item_large";
        }
        
        return (
            <div className={strClassName}>
                <section className="ocsa_meal_item_content">
                    <section className="meal_title">{this.props.mealItems.title}</section>
                        {this.props.mealItems.ingredients.map((item) => (
                            <section className="meal_ingredient" key={item.key}>{item.name}</section>
                        ))}
                </section>
            </div>
        )
    }
}

export default OcsaMealItem
