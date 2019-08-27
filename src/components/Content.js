import React, { Component } from 'react';
import DlgContainer from './DlgContainer';
import DlgItem from './DlgItem';
import './Content.css';

export class Content extends Component {
    state = {
        dlgCntClass: 'dlg_container dlg_cnt_open',
        dlgItemClass:'dlg_item dlg_item_open'
    }

    onCloseDlg = (e) => {
        e.preventDefault();
        this.setState({dlgCntClass:'dlg_container dlg_cnt_closed'});
        this.setState({dlgItemClass:'dlg_item dlg_item_closed'});
        console.log("onCloseDlg = " + this.state['dlgItemClass']);
    }

    render() {
        return (
            <div className="content">
                <DlgContainer  className={this.state['dlgCntClass']} />
                <DlgItem onCloseDlg={this.onCloseDlg} className={this.state['dlgItemClass']}/>
            </div>
        )
    }
}

export default Content
