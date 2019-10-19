import React, { Component } from 'react';
import './OcsaMenu.css';

export class OcsaMenu extends Component {

    render() {
        return (
            <header className="ocsa_header">
                <section>
                    <input type="button" value="Home" onClick={this.props.handleMenuClick}></input>&nbsp;&nbsp;
                    <input type="button" value="Itinerary" onClick={this.props.handleMenuClick}></input>&nbsp;&nbsp;
                    <input type="button" value="Meals" onClick={this.props.handleMenuClick}></input>
                </section>
            </header>
        );
    }
}

export default OcsaMenu
