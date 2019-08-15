import React from 'react';
import { Form, Formik, Field } from 'formik';
const Comment: React.FC = (props: any) => {
  const { postComments, addComment, removeComment } = props;
  const { postId } = props.match.params;
  
  return (
    <div className='comment'>
      {postComments.map((comment, i) => (
        <div className='comment' key={i}>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className='remove-comment' onClick={() => removeComment(postId, i)}>
            &times;
          </button>
        </div>
      ))}
      <Formik
        initialValues={{ author: '', comment: '' }}
        onSubmit={(values, { resetForm }) => {
          const { author, comment } = values;
          addComment(postId, author, comment);
          resetForm();
        }}
        render={() => (
          <Form className='comment-form'>
            <Field className='form-input' type='text' name='author' placeholder='author' />
            <Field className='form-input' type='text' name='comment' placeholder='comment' />
            <Field type='submit' hidden />
          </Form>
        )}
      />
    </div>
  );
};
export default Comment;
