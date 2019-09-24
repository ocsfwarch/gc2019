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
        return (
            <div className="ocsa_itin_item">
                <section className="ocsa_itin_item_content">
            <span>{this.props.dispItems.desc}</span>
            <div>
                <input type="button" value="Add Comment" id={this.props.dispItems.key} onClick={this.onAddComment} />
            </div>
            <section>
                Comments
            </section>
            </section>
        </div>
        )
    }
}// End class OcsaIntItem

export default OcsaIntItem
