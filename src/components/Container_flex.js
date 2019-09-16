import React, { Component } from 'react';
import './Container_flex.css';
import OcsaCalendar from './OcsaCalendar/OcsaCal';
import OcsaItinerary from './OcsaItinerary/OcsaItinerary';

export class Container_flex extends Component {

    state = {
        intDisplay:{
            strTitle:`Hello World`,
            strDate:`November 1, 2019`,
            strDetails:`This is where the trip information will go`},
        items:[
        ]
    }

    componentDidMount() {
        fetch('https://ocsa-api-server.herokuapp.com/itinerary')
          .then(response => response.json())
          .then(data => this.setState({ items: data }));
    }

    onChangeCalDisplay = (value) => {
        if(this.state.items[value].active){
            this.setState({intDisplay:{strDetails:this.state.items[value-1].desc}});
        }else{
            this.setState({intDisplay:{strDetails:`Sorry that is inactive`}});
        }
        console.log(`Got a click = ${value}`);
    }

    render() {
        return (
            <div className="parent">
                    <OcsaCalendar items={this.state.items} onChangeCalDisplay={this.onChangeCalDisplay} />
                    <OcsaItinerary item={this.state.intDisplay}/>
            </div>
        )
    }
}

export default Container_flex
