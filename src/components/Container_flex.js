import React, { Component } from 'react';
import './Container_flex.css';
import OcsaCalendar from './OcsaCalendar/OcsaCal';
import OcsaItinerary from './OcsaItinerary/OcsaItinerary';
import DlgContainer from './OcsaDialog/DlgContainer';
import OcsaMeals from './OcsaMeal/OcsaMealContainer';

import DlgItem from './OcsaDialog/DlgItem';

export class Container_flex extends Component {

    state = {
        currentActiveId:0,
        calItems:[
            {
                key:0,
                active:false,
                date:0,
                type:'',
                title:'',
                desc:'',
                miles:'',
                effort:'',
                time:''
            }
        ],
        itinItems:[
            {
                key:0,
                active:false,
                date:0,
                type:'',
                title:'',
                desc:'',
                miles:'',
                effort:'',
                time:''
            }
        ],
        dispItems:[
            {
                key:0,
                active:false,
                date:0,
                type:'',
                title:'',
                desc:'',
                miles:'',
                effort:'',
                time:''
            }
        ],
        mealItems:[
            {
                key:1,
                title:'Lunch - 1',
                ingredients:[
                    {name:'Veggie Masala',qty:'1'},
                    {name:'Rice',qty:'1'},
                ]
            },
            {
                key:2,
                title:'Lunch - 2',
                ingredients:[
                    {name:'Mac-n-Cheese',qty:'1'},
                    {name:'Pepperoni',qty:'1'},
                    {name:'Veggies',qty:'1'},
                ]
            },
            {
                key:3,
                title:'Lunch - 3',
                ingredients:[
                    {name:'Mac-n-Cheese',qty:'1'},
                    {name:'Tuna',qty:'1'},
                    {name:'Veggies',qty:'1'},
                ]
            },
            {
                key:4,
                title:'Lunch - 4',
                ingredients:[
                    {name:'Tortellinis',qty:'1'},
                    {name:'Prego Sauce',qty:'1'},
                    {name:'Mushrooms',qty:'1'},
                ]
            },
            {
                key:5,
                title:'Lunch - 5',
                ingredients:[
                    {name:'Chicken Rice',qty:'1'},
                    {name:'Chicken',qty:'1'},
                    {name:'Veggies',qty:'1'},
                ]
            },
            {
                key:6,
                title:'Lunch - 6',
                ingredients:[
                    {name:'Spanish Rice',qty:'1'},
                    {name:'Chicken',qty:'1'},
                    {name:'Veggies',qty:'1'},
                ]
            },
            {
                key:7,
                title:'Lunch - 7',
                ingredients:[
                    {name:'Teriyaki Rice',qty:'1'},
                    {name:'Chicken',qty:'1'},
                    {name:'Veggies',qty:'1'},
                ]
            },
            {
                key:8,
                title:'Lunch - 8',
                ingredients:[
                    {name:'Stuffing',qty:'1'},
                    {name:'Chicken',qty:'1'},
                    {name:'Almonds',qty:'1'},
                    {name:'Cranberry',qty:'1'},
                ]
            },
            {
                key:9,
                title:'Dinner - Chili',
                ingredients:[
                    {name:'Ground Buffalo',qty:'2lb'},
                    {name:'Bread Crumbs',qty:'1/2 cup'},
                    {name:'Onion',qty:'2'},
                    {name:'Green Pepper',qty:'1'},
                    {name:'Japapeno Peppers',qty:'4'},
                    {name:'Garlic',qty:'6'},
                    {name:'Chili Powder',qty:'3tblsp'},
                    {name:'Beans',qty:'30oz'},
                    {name:'Tomato Puree',qty:'12oz'},
                    {name:'Diced Tomatoes',qty:'20oz'}
                ]
            },
            {
                key:10,
                title:'Dinner - Goulash',
                ingredients:[
                    {name:'Elbow Macaroni',qty:'2lb'},                    
                    {name:'Diced Tomatoes',qty:'20oz'},
                    {name:'Tomato Paste',qty:'6oz'},
                    {name:'Garlic',qty:'4'},
                    {name:'Basil',qty:'1tbsp'},
                    {name:'Onion',qty:'2'},
                    {name:'Green Pepper',qty:'1'},
                    {name:'Ground Turkey',qty:'1.5lb'},

                ]
            },
            {
                key:11,
                title:'Dinner - Shepard Pie',
                ingredients:[
                    {name:'Instant Mashed Potatoes',qty:'8oz'},
                    {name:'Corn',qty:'4oz'},
                    {name:'Peas',qty:'4oz'},
                    {name:'carrots',qty:'4oz'},
                    {name:'Chicken',qty:'1.5lb'},
                ]
            },
            {
                key:12,
                title:'Dinner - Spaghetti',
                ingredients:[
                    {name:'Diane\'s Sauce',qty:'8oz'},
                    {name:'Angel Hair Pasta',qty:'4oz'}
                ]
            },
            {
                key:13,
                title:'Dinner - Chicken',
                ingredients:[
                    {name:'Chicken',qty:'8oz'},
                    {name:'Dhal',qty:'4oz'},
                    {name:'rice',qty:'4oz'}
                ]
            },
            {
                key:14,
                title:'Dinner - Chicken',
                ingredients:[
                    {name:'Chicken',qty:'8oz'},
                    {name:'Indian Sauce',qty:'4oz'},
                    {name:'peas',qty:'4oz'},
                    {name:'cauliflower',qty:'4oz'},
                    {name:'couscous',qty:'4oz'},
                ]
            }
        ],
        dlg:{
            active:false,
        }
    }

    componentDidMount() {
        
        const API_TOKEN = "910237e9-95fd-4ecf-b17b-4af6605a1f01";
        fetch('https://ocsa-api-server.herokuapp.com/gcapi/itinerary',{
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

    onSaveComment = (value) => {
        console.log(`onSaveComment = ${value}`);
        this.setState({dlg:{active:false}});
    }

    onChangeCalDisplay = (value) => {
        const tempItems = this.state.itinItems.filter((e) => e.key === Number(value));
        if(tempItems.length !== 0){
            this.setState({currentActiveId: value});
            this.setState({dispItems:tempItems.slice(0)});
        }else{
            this.setState({currentActiveId:0});
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
                    <OcsaMeals     mealItems={this.state.mealItems}/>
                    <DlgContainer  active={this.state.dlg.active} />
                    <DlgItem       active={this.state.dlg.active } currentActiveId={this.state.currentActiveId}  onSaveComment={this.onSaveComment} onCloseDlg={this.onCloseDlg} />
            
            </div>
        )
    }
}

export default Container_flex
