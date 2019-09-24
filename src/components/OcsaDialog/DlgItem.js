import React, { Component } from 'react';
import AddComment from '../AddComment/AddComment';
import './DlgItem.css';

export class DlgItem extends Component {

    render() {
        const classStyle = this.props.active ? `dlg_item dlg_item_open` : `dlg_item dlg_item_close`; 
        return (
            <div className={classStyle}>
                <section className="dlg_item_content">
                    <AddComment />
                    <input type="button" value="Close" onClick={this.props.onCloseDlg} />
                </section>
            </div>
        )
    }
}

export default DlgItem
