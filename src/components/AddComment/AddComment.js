import React, { Component } from 'react';
import './AddComment.css'

export class AddComment extends Component {

    constructor(props){
        super(props);
        this.state ={
            keyId:0,
            strDate:'',
            comment:'',
            signed:''
        }
    }

    componentDidMount(){
        this.setState({strDate:this.buildDateString()});
    }

    saveComment = (e) => {
        e.preventDefault();
        const gc2019Comment = {
            itemKey: this.props.currentActiveId,
            strDate: this.state.strDate,
            strComment: this.state.comment,
            strSigned: this.state.signed
        }
        if( typeof this.props.onSaveComment === 'function'){
            this.props.onSaveComment(JSON.stringify(gc2019Comment));
        }else{
            console.log(typeof this.props.onSaveComment);
        }
    }

    updateDate(strVal){
        this.setState({strDate:strVal});
    }

    updateSigned(strVal){
        this.setState({signed:strVal});
    }

    updateComment(strVal){
        this.setState({comment:strVal});
    }

    buildDateString(){
        const dtNow = new Date();
        const nMonth = dtNow.getMonth()+1;
        const nDay = dtNow.getDay();
        const arrDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        const strDate = `${arrDays[nDay]}, ${dtNow.getHours()}:${dtNow.getMinutes()}  ${nMonth}/${dtNow.getDate()}/${dtNow.getFullYear()}`;
        return strDate;
    }

    render() {
        return (
            <form className="comment_form" onSubmit={e => this.saveComment(e)}>
                <section className="comment_form_element">
                    <span>{`Date: ${this.state.strDate}`}</span>
                </section>
                <section className="comment_form_element">&nbsp;</section>
                <section className="comment_form_element">
                    <label htmlFor="GET-comment"> Comment: </label>
                </section>
                <section className="comment_form_element">
                    <textarea id="GET-comment" 
                                name="GET-coment"
                                cols="33"
                                rows="10" 
                                onChange={e => this.updateComment(e.target.value)} required />
                </section>
                <section className="comment_form_element">&nbsp;</section>
                <section className="comment_form_element">&nbsp;</section>
                <section className="comment_form_element">&nbsp;</section>
                <section className="comment_form_element">&nbsp;</section>
                <section className="comment_form_element">&nbsp;</section>
                <section className="comment_form_element">
                    <label htmlFor="GET-signed">Signed: </label>
                    <input type="text" 
                            id="GET-signed" 
                            name="GET-signed"
                            onChange={e => this.updateSigned(e.target.value)} />
                </section>
                <section className="comment_form_element">&nbsp;</section>
                <section className="comment_form_element">&nbsp;</section>
                <section className="comment_form_element comment_center">
                    <input type="submit" value="Submit" />&nbsp;&nbsp;
                    <input type="button" value="Cancel" onClick={this.props.closeComment} />
                </section>
            </form>
        )
    }
}

export default AddComment
