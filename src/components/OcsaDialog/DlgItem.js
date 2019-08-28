import React, { Component } from 'react';
import './DlgItem.css';

export class DlgItem extends Component {

    render() {
        return (
            <div className={this.props.className}>
                <input type="button" value="Close" onClick={this.props.onCloseDlg} />
            </div>
        )
    }
}

export default DlgItem
