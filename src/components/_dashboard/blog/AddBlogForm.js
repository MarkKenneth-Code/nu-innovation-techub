import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useForm } from 'react-hook-form';
import Axios from 'axios';

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
  const onSubmit = async (data) => {
    console.log(data);
    const image = data.image[0];
    const title = data.name;
    const description = data.description;

    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'kbusolgc');
    await Axios.post('https://api.cloudinary.com/v1_1/dy5g3pexw/image/upload', formData).then(
      (response, err) => {
        if (!err) {
          console.log(response.data.secure_url);
          const obj = {
            imagePath: response.data.secure_url,
            articleTitle: title,
            articleDescription: description,
            articleDate: `${new Date().getUTCMonth()}/${new Date().getUTCDate()}/${new Date().getUTCFullYear()}`
          };
          Axios.post('http://localhost:3001/article/addArticle', obj).then((response) => {
            console.log(response);
          });
        }
      }
    );
  };
  const classes = useStyles();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
      <input id="image" type="file" name="picture" accept="image/*" {...register('image')} />
      {/* use aria-invalid to indicate field contain error */}

      <input
        id="name"
        aria-invalid={errors.name ? 'true' : 'false'}
        {...register('name', { required: true, maxLength: 10000 })}
        placeholder="Title"
      />
      <input
        id="description"
        aria-invalid={errors.name ? 'true' : 'false'}
        {...register('description', { required: true, maxLength: 1000000 })}
        placeholder="Description"
      />
      {/* use role="alert" to announce the error message */}
      {errors.name && errors.name.type === 'required' && (
        <span role="alert">Please fill out the form.</span>
      )}
      {errors.name && errors.name.type === 'maxLength' && (
        <span role="alert">Max length exceeded</span>
      )}
      <input type="submit" />
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
