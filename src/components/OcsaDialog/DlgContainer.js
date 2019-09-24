import React, { Component } from 'react';
import './DlgContainer.css';

export class DlgContainer extends Component {
    
    render() {
        const classStyle = this.props.active ? `dlg_container dlg_cnt_open` : `dlg_container dlg_cnt_closed`; 
        //console.log(`classStyle = ${classStyle}`);
        return (
            <div className={classStyle}>
                Dialog Container
            </div>
        )
    }

}// End class DlgContainer

export default DlgContainer
