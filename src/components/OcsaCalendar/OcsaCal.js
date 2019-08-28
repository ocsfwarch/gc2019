import React, { Component } from 'react';
import './OcsaCal.css';
import OcsaCalRow from './OcsaCalRow';
import OcsaCalItem from './OcsaCalItem';

export class OcsaCal extends Component {
    state = {
        items:[
            {key:0,active:false,date:27,type:'std',desc:''},
            {key:1,active:false,date:28,type:'std',desc:''},
            {key:2,active:false,date:29,type:'std',desc:''},
            {key:3,active:false,date:30,type:'std',desc:''},
            {key:4,active:true,date:31,type:'non_std',desc:'Travel Day'},
            {key:5,active:true,date:1,type:'non_std', desc:'Travel Day'},
            {key:6,active:true,date:2,type:'non_std', desc:'Day 1 - South Kaibab to Bright Angel, Click for details'},
            {key:7,active:true,date:3,type:'non_std', desc:'Day 2 - Bright Angel to Clear Creek, Click for details'},
            {key:8,active:true,date:4,type:'non_std', desc:'Day 3 - Clear Creek, Click for details'},
            {key:9,active:true,date:5,type:'non_std', desc:'Day 4 - Clear Creek, Click for details'},
            {key:10,active:true,date:6,type:'non_std', desc:'Day 5 - Clear Creek, Click for details'},
            {key:11,active:true,date:7,type:'non_std', desc:'Day 6 - Clear Creek, Click for details'},
            {key:12,active:true,date:8,type:'non_std', desc:'Day 7 - Clear Creek to Bright Angel, Click for details'},
            {key:13,active:true,date:9,type:'non_std', desc:'Day 8 - Bright Angel to Indian Gardens, Click for details'},
            {key:14,active:true,date:10,type:'non_std',desc:'Day 9 - Indian Garden to GC Lodge, Click for details'},
            {key:15,active:true,date:11,type:'non_std',desc:'Travel Day'},
            {key:16,active:false,date:12,type:'std',desc:''},
            {key:17,active:false,date:13,type:'std',desc:''},
            {key:18,active:false,date:14,type:'std',desc:''},
            {key:19,active:false,date:15,type:'std',desc:''},
            {key:20,active:false,date:16,type:'std',desc:''},
            {key:21,active:false,date:17,type:'std',desc:''},
            {key:22,active:false,date:18,type:'std',desc:''},
            {key:23,active:false,date:19,type:'std',desc:''},
            {key:24,active:false,date:20,type:'std',desc:''},
            {key:25,active:false,date:21,type:'std',desc:''},
            {key:26,active:false,date:22,type:'std',desc:''},
            {key:27,active:false,date:23,type:'std',desc:''},
            {key:28,active:false,date:24,type:'std',desc:''},
            {key:29,active:false,date:25,type:'std',desc:''},
            {key:30,active:false,date:26,type:'std',desc:''},
            {key:31,active:false,date:27,type:'std',desc:''},
            {key:32,active:false,date:28,type:'std',desc:''},
            {key:33,active:false,date:29,type:'std',desc:''},
            {key:34,active:false,date:30,type:'std',desc:''}
        ]
    }

    render() {
        return (
            <div className='ocsa_cal_container'>
                <OcsaCalRow />
                <OcsaCalItem dt_val={'Sun'} className={'std_bld'}/>
                <OcsaCalItem dt_val={'Mon'} className={'std_bld'} />
                <OcsaCalItem dt_val={'Tue'} className={'std_bld'} />
                <OcsaCalItem dt_val={'Wed'} className={'std_bld'} />
                <OcsaCalItem dt_val={'Thu'} className={'std_bld'} />
                <OcsaCalItem dt_val={'Fri'} className={'std_bld'} />
                <OcsaCalItem dt_val={'Sat'} className={'std_bld'} />
                {this.state['items'].map((item) => (
                    <OcsaCalItem key={item.key} active={item.active} dt_val={item.date} className={item.type} desc={item.desc} onChangeCalDisplay={this.props.onChangeCalDisplay}/>
                ))}
            </div>
        )
    }
}

export default OcsaCal
