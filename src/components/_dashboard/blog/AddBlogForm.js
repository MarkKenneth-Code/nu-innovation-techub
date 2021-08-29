import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '70px',
    // marginLeft: '60px',

    '& .MuiTextField-root': {
      margin: '5px',
      width: '35ch'
    }
  },
  filepicker: {
    border: '1px solid #d2d9d4',
    borderRadius: '3px'
    // color: '#354092'
  }
}));

export default function AddBlogForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const classes = useStyles();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
      <input type="file" name="picture" accept="image/*" />
      {/* use aria-invalid to indicate field contain error */}
      <input
        id="name"
        aria-invalid={errors.name ? 'true' : 'false'}
        {...register('name', { required: true, maxLength: 30 })}
        placeholder="Title"
      />
      <input
        id="description"
        aria-invalid={errors.name ? 'true' : 'false'}
        {...register('desription', { required: true, maxLength: 30 })}
        placeholder="Description"
      />
      {/* use role="alert" to announce the error message */}
      {errors.name && errors.name.type === 'required' && <span role="alert">tite</span>}
      {errors.name && errors.name.type === 'maxLength' && (
        <span role="alert">Max length exceeded</span>
      )}
    </form>
  );
}

{
  /* <form className={classes.root} noValidate autoComplete="off">
      <div>
        <Form.Group controlId="formFileSm">
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control size="lg" type="text" placeholder="Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control size="lg" as="textarea" rows={7} placeholder="Description" />
        </Form.Group>
      </div>
    </form> */
}
