import React, { Component } from 'react'
import Header from './Header';
import Content from './Content';
import './Container.css';

export class Container extends Component {

    onChangeCalDisplay = (e) => {
        console.log(`onChangeCalDisplay`);
         //console.log(`onChangeCalDisplay = ${active}`);
    }


    render() {
        return (
            <div className='main_container'>
                <Header />
                <Content onChangeCalDisplay={this.onChangeCalDisplay} />
            </div>
        )
    }
}

export default Container
