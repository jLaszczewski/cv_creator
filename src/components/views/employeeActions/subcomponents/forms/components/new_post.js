import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPost } from '../actions'

class NewPost extends Component {
  renderField({ label, textarea=false, placeholder, input, meta: { touched, error } }) {

    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{label}</label>
          {textarea ? (<textarea
            className="form-control"
            placeholder={placeholder}
            type="text"
            { ...input }
          />) : (<input
            className="form-control"
            placeholder={placeholder}
            type="text"
            { ...input }
          />)}
          <div className="text-help">
            {touched ? error : ''}
          </div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="title"
          placeholder="Morning story"
          label="Title"
          component={this.renderField}
        />
        <Field
          name="categories"
          placeholder="Days story"
          label="Category"
          component={this.renderField}
        />
        <Field
          name="content"
          textarea
          placeholder="Can you imagine that today morning..."
          label="Post content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

const validate =(values) => {
  const errors = {}

  if (!values.title) {
    errors.title = "Enter a title!";
  }

  if (!values.category) {
    errors.category = "Enter a category!";
  }

  if (!values.content) {
    errors.content = "Enter a content!";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'NewPostForm'
})(connect(null, { createPost })(NewPost));
