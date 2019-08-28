import React, { Component } from 'react';
import DlgContainer from '../OcsaDialog/DlgContainer';
import DlgItem from '../OcsaDialog/DlgItem';
import './Content.css';
import OcsaCalendar from '../OcsaCalendar/OcsaCal';

export class Content extends Component {
    state = {
        dlgCntClass: 'dlg_container dlg_cnt_closed',
        dlgItemClass:'dlg_item dlg_item_closed'
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
                <OcsaCalendar onChangeCalDisplay={this.props.onChangeCalDisplay}/>
                <DlgContainer  className={this.state['dlgCntClass']} />
                <DlgItem onCloseDlg={this.onCloseDlg} className={this.state['dlgItemClass']}/>
            </div>
        )
    }
}

export default Content
