import React from 'react';
import { Form, Formik, Field } from 'formik';

const Comment: React.FC = (props: any) => {
  return (
    <div className='comment'>
      {props &&
        props.postComments.map((comment: any, i: any) => {
          return (
            <div className='comment' key={i}>
              <strong>{comment.user}</strong>
              {comment.text}
              <button className='remove-comment' onClick={() => props.removeComment(props.match.params.postId, i)}>
                &times;
              </button>
            </div>
          );
        })}
      <Formik
        initialValues={{
          author: '',
          comment: ''
        }}
        onSubmit={(values: any, { resetForm }) => {
          const { postId } = props.match.params;
          const { author, comment } = values;
          props.addComment(postId, author, comment);
          resetForm();
        }}
        render={() => {
          return (
            <Form className='comment-form'>
              <Field className='form-input' type='text' name='author' placeholder='author' />
              <Field className='form-input' type='text' name='comment' placeholder='comment' />
              <Field type='submit' hidden />
            </Form>
          );
        }}
      />
    </div>
  );
};

export default Comment;
