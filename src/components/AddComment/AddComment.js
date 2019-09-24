import React, { Component } from 'react';
import './AddComment.css'

export class AddComment extends Component {
    render() {
        return (
            <form>
                <section className="comment_form_element">
                    <span className="">Date: 10-01-2019 10:00am PST</span>
                </section>
                <section className="comment_form_element">
                    <label htmlFor="GET-comment"> Comment: </label>
                </section>
                <section className="comment_form_element">
                    <textarea id="GET-comment" name="GET-coment" />
                </section>
                <section className="comment_form_element">
                    <label htmlFor="GET-signed">Signed: </label>
                    <input type="text" id="GET-signed" name="GET-signed" />
                </section>
            </form>
        )
    }
}

export default AddComment
