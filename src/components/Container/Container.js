import React, { Component } from 'react'
import { Route } from "react-router-dom";
import './Container.css';
import '../../OcsaStd.css';
import ContainerFlex from '../ContainerFlex';
import OcsaMenu from '../Menu/OcsaMenu';

export class Container extends Component {
    constructor(props){
        super(props);
        this.state = {
            display:{
            strCalClassName:'ocsa_grid_cal_container',
            strItinClassName:'ocsa_grid_int_container',
            strItinScroller:'ocsa_grid_scroller',
            strMealClassName:'ocsa_grid_meal_container',
            strMealScroller:'ocsa_grid_meal_scroller'
            },
        }
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    handleMenuClick(e){
        e.preventDefault();
        const strTarget = e.target.value;
        if(strTarget === "Home"){
            this.setState({
                display:{
                    strCalClassName  : 'ocsa_grid_cal_container',
                    strItinClassName : 'ocsa_grid_int_container',
                    strItinScroller  :'ocsa_grid_scroller',
                    strMealClassName : 'ocsa_grid_meal_container',
                    strMealScroller  :'ocsa_grid_meal_scroller'
                }            
            });
        }else if(strTarget === "Itinerary"){
            this.setState({
                display:{
                    strCalClassName  : 'ocsa_hide',
                    strItinClassName : 'ocsa_grid_int_container',
                    strItinScroller  :'ocsa_grid_scroller',
                    strMealClassName : 'ocsa_hide',
                    strMealScroller  :'ocsa_grid_meal_scroller'
                }            
            });
        }else if(strTarget === "Meals"){
            this.setState({
                display:{
                    strCalClassName  : 'ocsa_hide',
                    strItinClassName : 'ocsa_hide',
                    strItinScroller  :'ocsa_grid_scroller',
                    strMealClassName : 'ocsa_grid_meal_container',
                    strMealScroller  :'ocsa_grid_meal_scroller'
                }            
            });
        }
    }

    render() {
        return (
            <div className='main_container'>
                <OcsaMenu handleMenuClick={this.handleMenuClick}/>
                <Route path='/' exact 
                    render={ (props) => <ContainerFlex {...props} display={this.state.display} />} />
            </div>
        )
    }
}

export default Container
