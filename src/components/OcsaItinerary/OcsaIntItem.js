import React, { Component } from 'react'

export class OcsaIntItem extends Component {
    render() {
        return (
            <div className="ocsa_grid_int_item">
                <div className="ocsa_scrolling_div_parent ocsa_scroller">
                    <div className="ocsa_scrolling_child">
                        <span>{this.props.item.strTitle}</span><br />
                        <span>{this.props.item.strDate}</span><br />
                        <span>{this.props.item.strDetails}</span>
                    </div>
                </div> 
            </div>
        )
    }
}

export default OcsaIntItem
