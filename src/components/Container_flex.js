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
        weather:{
            curr:0,
            hi:0,
            lo:0,
        },
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
                    {key:100,name:'Veggie Masala',qty:'1'},
                    {key:101,name:'Rice',qty:'1'},
                ]
            },
            {
                key:2,
                title:'Lunch - 2',
                ingredients:[
                    {key:102,name:'Mac-n-Cheese',qty:'1'},
                    {key:103,name:'Pepperoni',qty:'1'},
                    {key:104,name:'Veggies',qty:'1'},
                ]
            },
            {
                key:3,
                title:'Lunch - 3',
                ingredients:[
                    {key:105,name:'Mac-n-Cheese',qty:'1'},
                    {key:106,name:'Tuna',qty:'1'},
                    {key:107,name:'Veggies',qty:'1'},
                ]
            },
            {
                key:4,
                title:'Lunch - 4',
                ingredients:[
                    {key:108,name:'Tortellinis',qty:'1'},
                    {key:109,name:'Prego Sauce',qty:'1'},
                    {key:110,name:'Mushrooms',qty:'1'},
                ]
            },
            {
                key:5,
                title:'Lunch - 5',
                ingredients:[
                    {key:111,name:'Chicken Rice',qty:'1'},
                    {key:112,name:'Chicken',qty:'1'},
                    {key:113,name:'Veggies',qty:'1'},
                ]
            },
            {
                key:6,
                title:'Lunch - 6',
                ingredients:[
                    {key:114,name:'Spanish Rice',qty:'1'},
                    {key:115,name:'Chicken',qty:'1'},
                    {key:116,name:'Veggies',qty:'1'},
                ]
            },
            {
                key:7,
                title:'Lunch - 7',
                ingredients:[
                    {key:117,name:'Teriyaki Rice',qty:'1'},
                    {key:118,name:'Chicken',qty:'1'},
                    {key:119,name:'Veggies',qty:'1'},
                ]
            },
            {
                key:8,
                title:'Lunch - 8',
                ingredients:[
                    {key:120,name:'Stuffing',qty:'1'},
                    {key:121,name:'Chicken',qty:'1'},
                    {key:122,name:'Almonds',qty:'1'},
                    {key:123,name:'Cranberry',qty:'1'},
                ]
            },
            {
                key:9,
                title:'Dinner 1 - Chili',
                ingredients:[
                    {key:124,name:'Ground Buffalo',qty:'2lb'},
                    {key:125,name:'Bread Crumbs',qty:'1/2 cup'},
                    {key:126,name:'Onion',qty:'2'},
                    {key:127,name:'Green Pepper',qty:'1'},
                    {key:128,name:'Japapeno Peppers',qty:'4'},
                    {key:129,name:'Garlic',qty:'6'},
                    {key:130,name:'Chili Powder',qty:'3tblsp'},
                    {key:131,name:'Beans',qty:'30oz'},
                    {key:132,name:'Tomato Puree',qty:'12oz'},
                    {key:133,name:'Diced Tomatoes',qty:'20oz'}
                ]
            },
            {
                key:10,
                title:'Dinner 2 - Goulash',
                ingredients:[
                    {key:134,name:'Elbow Macaroni',qty:'2lb'},                    
                    {key:135,name:'Diced Tomatoes',qty:'20oz'},
                    {key:136,name:'Tomato Sauce',qty:'6oz'},
                    {key:137,name:'Garlic',qty:'4'},
                    {key:138,name:'Basil',qty:'1tbsp'},
                    {key:139,name:'Onion',qty:'2'},
                    {key:140,name:'Green Pepper',qty:'1'},
                    {key:141,name:'Ground Turkey',qty:'1.5lb'},

                ]
            },
            {
                key:11,
                title:'Dinner 3 - Shepard Pie',
                ingredients:[
                    {key:142,name:'Mashed Potatoes',qty:'8oz'},
                    {key:143,name:'Corn',qty:'4oz'},
                    {key:144,name:'Peas',qty:'4oz'},
                    {key:145,name:'carrots',qty:'4oz'},
                    {key:146,name:'Chicken',qty:'1.5lb'},
                ]
            },
            {
                key:12,
                title:'Dinner 4 - Spaghetti',
                ingredients:[
                    {key:147,name:'Diane\'s Sauce',qty:'8oz'},
                    {key:148,name:'Angel Hair Pasta',qty:'4oz'}
                ]
            },
            {
                key:13,
                title:'Dinner 5 - Chicken',
                ingredients:[
                    {key:149,name:'Chicken',qty:'8oz'},
                    {key:150,name:'Dhal',qty:'4oz'},
                    {key:151,name:'rice',qty:'4oz'}
                ]
            },
            {
                key:14,
                title:'Dinner 6 - Chicken',
                ingredients:[
                    {key:152,name:'Chicken',qty:'8oz'},
                    {key:153,name:'Indian Sauce',qty:'4oz'},
                    {key:154,name:'peas',qty:'4oz'},
                    {key:155,name:'cauliflower',qty:'4oz'},
                    {key:156,name:'couscous',qty:'4oz'},
                ]
            },
            {
                key:15,
                title:'Dinner 7 - Kung Pao',
                ingredients:[
                    {key:157,name:'Chicken',qty:'8oz'},
                    {key:158,name:'Rice',qty:'4oz'},
                    {key:159,name:'Vegetarian Soup',qty:'4oz'},
                    {key:160,name:'Peanuts',qty:'4oz'},
                    {key:161,name:'Red Pepper',qty:'4oz'},
                ]
            },
            {
                key:16,
                title:'Dinner 8 - Beef Stew',
                ingredients:[
                    {key:162,name:'Stew Beef',qty:'8oz'},
                    {key:163,name:'Onion',qty:'4oz'},
                    {key:164,name:'Carrots',qty:'4oz'},
                    {key:165,name:'Potatoes',qty:'4oz'},
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

        fetch('https://ocsa-api-server.herokuapp.com/wthrapi/getWeather',{
            headers:{
                Authorization: `Bearer ${API_TOKEN}`,
            },
        })
          .then(response => response.json())
          .then((data) => {
                return this.setState({weather:{curr:Math.round(data.current_temperature),hi:Math.round(data.max_temperature),lo:Math.round(data.min_temperature)}});
          });
        
        
    }// End componentDidMount()

    onCloseDlg = (e) => {
        e.preventDefault();
        this.setState({dlg:{active:false}});
    }

    onAddComment = (value) => {
        this.setState({dlg:{active:true}});
        //console.log(`onAddComment = ${value}`);
    }

    onSaveComment = (value) => {
        //console.log(`onSaveComment = ${value}`);
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
        //console.log(`onChangeCalDisplay key = ${this.state.dispItems[0].key}`);
    }

    render() {
        return (
            
            <div className="parent">
                    <OcsaCalendar  calItems={this.state.calItems} weather={this.state.weather}  onChangeCalDisplay={this.onChangeCalDisplay} />
                    <OcsaItinerary dispItems={this.state.dispItems} onAddComment={this.onAddComment}/>
                    <OcsaMeals     mealItems={this.state.mealItems}/>
                    <DlgContainer  active={this.state.dlg.active} />
                    <DlgItem       active={this.state.dlg.active } currentActiveId={this.state.currentActiveId}  onSaveComment={this.onSaveComment} onCloseDlg={this.onCloseDlg} />           
            </div>
        )
    }
}

export default Container_flex
