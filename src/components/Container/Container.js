import React, { Component } from 'react'
import Header from './Header';
import Content from './Content';
import './Container.css';

export class Container extends Component {

    render() {
        return (
            <div className='main_container'>
                <Header />
                <Content />
            </div>
        )
    }
}

export default Container
