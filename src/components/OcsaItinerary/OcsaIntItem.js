import React, { Component } from 'react'

export class OcsaIntItem extends Component {
    
    onAddComment = (e) => {
        e.preventDefault();
        const nKey = e.target.id;
        if( typeof this.props.onAddComment === 'function'){
            this.props.onAddComment(nKey);
        }else{
            console.log(typeof this.props.onAddComment);
        }
    }

    render() {
        let effortClass = "ocsa_itin_item_effort_easy";
        if(this.props.dispItems.effort.indexOf('moderate') !== -1){
            effortClass = "ocsa_itin_item_effort_moderate";
        }else if(this.props.dispItems.effort.indexOf('strenuous') !== -1){
            effortClass = "ocsa_itin_item_effort_strenuous";
        }
        return (
            <div className="ocsa_itin_item">
                <section className="ocsa_itin_item_content">
                    <section className="ocsa_itin_item_title">{this.props.dispItems.title}</section>
                    <section className="ocsa_itin_item_value">{this.props.dispItems.desc}</section>
                    <section className="ocsa_itin_item_value">&nbsp;</section>
                    <section className="ocsa_itin_item_value"><span className="ocsa_itin_item_value_span">Mileage:&nbsp;</span>{this.props.dispItems.miles}</section>
                    <section className="ocsa_itin_item_value"><span className="ocsa_itin_item_value_span">Effort:&nbsp;</span><span className={effortClass}>{this.props.dispItems.effort}</span></section>
                    <section className="ocsa_itin_item_value"><span className="ocsa_itin_item_value_span">Time:&nbsp;</span>{this.props.dispItems.time}&nbsp;hours</section>
                </section>
            </div>
        )
    }
}// End class OcsaIntItem
//<div>
//<input type="button" value="Add Comment" id={this.props.dispItems.key} onClick={this.onAddComment} />
//</div>
//<section>
//Comments
//</section>

export default OcsaIntItem
