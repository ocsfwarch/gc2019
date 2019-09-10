import React, { Component } from 'react';

export class OcsaCalItem extends Component {

    changeCalendarItem = (e) => {
        e.preventDefault();
        const nKey = e.target.id;
        if( typeof this.props.onChangeCalDisplay === 'function'){
            this.props.onChangeCalDisplay(nKey);
        }else{
            console.log(typeof this.props.onChangeCalDisplay);
        }
    }


    render() {
        return (
            <div className={this.props.className}
                id={this.props.index_val}
                title={this.props.desc}
                onClick={this.changeCalendarItem}>
                <div id={this.props.index_val}>{this.props.dt_val}</div>
            </div>
        );
    }
}

export default OcsaCalItem
