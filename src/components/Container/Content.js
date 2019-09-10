import React, { Component } from 'react';
import DlgContainer from '../OcsaDialog/DlgContainer';
import DlgItem from '../OcsaDialog/DlgItem';
import './Content.css';
import OcsaCalendar from '../OcsaCalendar/OcsaCal';
import OcsaItinerary from '../OcsaItinerary/OcsaItinerary';

export class Content extends Component {

    state = {
        dlgCntClass: 'dlg_container dlg_cnt_closed',
        dlgItemClass:'dlg_item dlg_item_closed',
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

    onCloseDlg = (e) => {
        e.preventDefault();
        this.setState({dlgCntClass:'dlg_container dlg_cnt_closed'});
        this.setState({dlgItemClass:'dlg_item dlg_item_closed'});
        console.log("onCloseDlg = " + this.state['dlgItemClass']);
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
            <div className="content">
                <div className="content_container">
                    <OcsaCalendar items={this.state.items} onChangeCalDisplay={this.onChangeCalDisplay} />
                    <OcsaItinerary item={this.state.intDisplay}/>
                    <DlgContainer  className={this.state['dlgCntClass']} />
                    <DlgItem onCloseDlg={this.onCloseDlg} className={this.state['dlgItemClass']}/>
                </div>
            </div>
        )
    }
}

export default Content
