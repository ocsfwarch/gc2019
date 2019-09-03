import React, { Component } from 'react';
import './OcsaCal.css';
import OcsaCalItem from './OcsaCalItem';

export class OcsaCal extends Component {
    state = {
        items:[
            {date:27,type:'ocsa_grid_cal_item'},
            {date:28,type:'ocsa_grid_cal_item'},
            {date:29,type:'ocsa_grid_cal_item'},
            {date:30,type:'ocsa_grid_cal_item'},
            {date:31,type:'ocsa_grid_cal_item_mark'},
            {date:1,type:'ocsa_grid_cal_item_mark'},
            {date:2,type:'ocsa_grid_cal_item_mark'},
            {date:3,type:'ocsa_grid_cal_item_mark'},
            {date:4,type:'ocsa_grid_cal_item_mark'},
            {date:5,type:'ocsa_grid_cal_item_mark'},
            {date:6,type:'ocsa_grid_cal_item_mark'},
            {date:7,type:'ocsa_grid_cal_item_mark'},
            {date:8,type:'ocsa_grid_cal_item_mark'},
            {date:9,type:'ocsa_grid_cal_item_mark'},
            {date:10,type:'ocsa_grid_cal_item_mark'},
            {date:11,type:'ocsa_grid_cal_item_mark'},
            {date:12,type:'ocsa_grid_cal_item'},
            {date:13,type:'ocsa_grid_cal_item'},
            {date:14,type:'ocsa_grid_cal_item'},
            {date:15,type:'ocsa_grid_cal_item'},
            {date:16,type:'ocsa_grid_cal_item'},
            {date:17,type:'ocsa_grid_cal_item'},
            {date:18,type:'ocsa_grid_cal_item'},
            {date:19,type:'ocsa_grid_cal_item'},
            {date:20,type:'ocsa_grid_cal_item'},
            {date:21,type:'ocsa_grid_cal_item'},
            {date:22,type:'ocsa_grid_cal_item'},
            {date:23,type:'ocsa_grid_cal_item'},
            {date:24,type:'ocsa_grid_cal_item'},
            {date:25,type:'ocsa_grid_cal_item'},
            {date:26,type:'ocsa_grid_cal_item'},
            {date:27,type:'ocsa_grid_cal_item'},
            {date:28,type:'ocsa_grid_cal_item'},
            {date:29,type:'ocsa_grid_cal_item'},
            {date:30,type:'ocsa_grid_cal_item'}
        ]
    }

    render() {
        return (
            <div className="ocsa_grid_cal_container">
                <div className="ocsa_grid_title">November 2019</div>
                <OcsaCalItem dt_val={'Sun'} className={'ocsa_grid_cal_item_bold'}/>
                <OcsaCalItem dt_val={'Mon'} className={'ocsa_grid_cal_item_bold'} />
                <OcsaCalItem dt_val={'Tue'} className={'ocsa_grid_cal_item_bold'} />
                <OcsaCalItem dt_val={'Wed'} className={'ocsa_grid_cal_item_bold'} />
                <OcsaCalItem dt_val={'Thu'} className={'ocsa_grid_cal_item_bold'} />
                <OcsaCalItem dt_val={'Fri'} className={'ocsa_grid_cal_item_bold'} />
                <OcsaCalItem dt_val={'Sat'} className={'ocsa_grid_cal_item_bold'} />
                {this.state['items'].map((item) => (
                    <OcsaCalItem dt_val={item.date} className={item.type}/>
                ))}
            </div>
        );
    }
}

export default OcsaCal
