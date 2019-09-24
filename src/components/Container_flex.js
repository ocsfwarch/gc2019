import React, { Component } from 'react';
import './Container_flex.css';
import OcsaCalendar from './OcsaCalendar/OcsaCal';
import OcsaItinerary from './OcsaItinerary/OcsaItinerary';
import DlgContainer from './OcsaDialog/DlgContainer';
import DlgItem from './OcsaDialog/DlgItem';

export class Container_flex extends Component {

    state = {
        intDisplay:{
            nId:0,
            strDetails:`This is where the trip information will go`},
        calItems:[
            {
                key:0,
                active:false,
                date:0,
                type:'',
                desc:''
            }
        ],
        itinItems:[
            {
                key:0,
                active:false,
                date:0,
                type:'',
                desc:''
            }
        ],
        dispItems:[
            {
                key:0,
                active:false,
                date:0,
                type:'',
                desc:''
            }
        ],
        dlg:{
            active:false,
        }
    }

    componentDidMount() {
        const API_TOKEN = "910237e9-95fd-4ecf-b17b-4af6605a1f01";
        fetch('https://ocsa-api-server.herokuapp.com/itinerary',{
            headers:{
                Authorization: `Bearer ${API_TOKEN}`,
            },
        })
          .then(response => response.json())
          //.then(data => this.setState({ calItems: data }));
          .then((data) => {
                // Initially both itinerary arrays are the same
                // the display array will change based on the user
                // selection. 
                const tempItin = data.filter((e) => e.active === true);
                return this.setState({ calItems: data, itinItems:tempItin, dispItems:tempItin });
          });
    }

    onCloseDlg = (e) => {
        e.preventDefault();
        this.setState({dlg:{active:false}});
    }

    onAddComment = (value) => {
        this.setState({dlg:{active:true}});
        console.log(`onAddComment = ${value}`);
    }

    onChangeCalDisplay = (value) => {
        const tempItems = this.state.itinItems.filter((e) => e.key === Number(value));
        if(tempItems.length !== 0){
            this.setState({dispItems:tempItems.slice(0)});
        }else{
            //this.setState({intDisplay:{nId:0,strDetails:`Sorry that is inactive`}});
            this.setState({dispItems:this.state.itinItems.slice(0)});
        }
        console.log(`onChangeCalDisplay key = ${this.state.dispItems[0].key}`);
        //console.log(`the size = ${this.state.dispItems.length}`);
        //for(let nIndex = 0; nIndex < this.state.itinItems.length; nIndex++){
        //    console.log(`key = ${this.state.itinItems[nIndex].key}, date = ${this.state.itinItems[nIndex].date}`);
       // }
        //const tempItem = this.state.initItems.filter((e) => e.key === value);
        //if(tempItem[0].active){
        //    this.setState({dispItems:this.state.itinItems.filter((e) => e.key === value)});
            //this.setState({intDisplay:{
            //    nId: this.state.itinItems[value-1].key,
            //    strDetails:this.state.itinItems[value-1].desc}});
        //}else{
        //}
        //console.log(`Got a click = ${value}`);
        //console.log(`Num of dispItems = ${this.state.itinItems.length}`);
    }

    render() {
        return (
            
            <div className="parent">
                    <OcsaCalendar  calItems={this.state.calItems}   onChangeCalDisplay={this.onChangeCalDisplay} />
                    <OcsaItinerary dispItems={this.state.dispItems} onAddComment={this.onAddComment}/>
                    <DlgContainer  active={this.state.dlg.active} />
                    <DlgItem       active={this.state.dlg.active }  onCloseDlg={this.onCloseDlg} />
            
            </div>
        )
    }
}

export default Container_flex
