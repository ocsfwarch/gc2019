import React, { Component } from 'react';
import './OcsaCal.css';
import OcsaCalItem from './OcsaCalItem';

export class OcsaCal extends Component {
    state = {
    }

    //onChangeCalDisplay = (value) => {
    //    console.log(`Got a click = ${this.state.items[value].desc}`);
    //}

    render() {
            const strWeather = `GC Village Temps - Curr: ${this.props.weather.curr} Hi: ${this.props.weather.hi} Lo: ${this.props.weather.lo}`;
            return (
            <div className="ocsa_grid_cal_container">
                <div className="ocsa_grid_title">November 2019</div>
                <OcsaCalItem dt_val={'Sun'} className={'ocsa_grid_cal_item_bold'} />
                <OcsaCalItem dt_val={'Mon'} className={'ocsa_grid_cal_item_bold'} />
                <OcsaCalItem dt_val={'Tue'} className={'ocsa_grid_cal_item_bold'} />
                <OcsaCalItem dt_val={'Wed'} className={'ocsa_grid_cal_item_bold'} />
                <OcsaCalItem dt_val={'Thu'} className={'ocsa_grid_cal_item_bold'} />
                <OcsaCalItem dt_val={'Fri'} className={'ocsa_grid_cal_item_bold'} />
                <OcsaCalItem dt_val={'Sat'} className={'ocsa_grid_cal_item_bold'} />
                {this.props.calItems.map((item) => (
                    <OcsaCalItem key={item.key} 
                    active={item.active} 
                    dt_val={item.date} 
                    index_val={item.key}
                    className={item.type}
                    desc={item.title}
                    onChangeCalDisplay={this.props.onChangeCalDisplay}
                    />
                ))}
                <div className="ocsa_grid_weather">{strWeather}</div>
            </div>
        );
    }
}

export default OcsaCal
