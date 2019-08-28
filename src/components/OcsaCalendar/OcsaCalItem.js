import React, { Component } from 'react'

export class OcsaCalItem extends Component {

     render() {
        return (
            <div className={this.props.className} title={this.props.desc} onClick={
                this.props.onChangeCalDisplay} >
                <div className="use_blank">&nbsp;</div>
                <div>{this.props.dt_val}</div>
            </div>
        )
    }
} 

export default OcsaCalItem
