import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '50px',

    '& .MuiTextField-root': {
      margin: '5px',
      width: '35ch'
    }
  },
  filepicker: {
    border: '1px solid #d2d9d4',
    borderRadius: '3px',
    color: '#354092'
  }
}));

// function NumberFormatCustom(props) {
//   const { inputRef, onChange, ...other } = props;
//   return (
//     <NumberFormat
//       {...other}
//       getInputRef={inputRef}
//       onValueChange={(values) => {
//         onChange({
//           target: {
//             name: props.name,
//             value: values.value
//           }
//         });
//       }}
//       thousandSeparator
//       isNumericString
//       //   prefix="$"
//     />
//   );
// }

// NumberFormatCustom.propTypes = {
//   inputRef: PropTypes.func.isRequired,
//   name: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired
// };

export default function AddProductForms() {
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
        placeholder="Product Name"
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

      <input id="price" type="number" name="priceProduct" accept="image/*" placeholder="Price" />
      <input
        id="price"
        type="number"
        name="priceProduct"
        accept="image/*"
        placeholder="Sale Price"
      />
    </form>
  );
}

//    <form onSubmit={handleSubmit(onSubmit)}>
// <input {...register("firstName")} placeholder="First name" />
// <input {...register("lastName")} placeholder="Last name" />
// <select {...register("category")}>
//   <option value="">Select...</option>
//   <option value="A">Category A</option>
//   <option value="B">Category B</option>
// </select>

// <p>{result}</p>
// <input type="submit" />
// </form>

// <form className={classes.root} noValidate autoComplete="off">
//   <div>
//     {/* <Form.Group controlId="formFile" className={classes.filepicker}>
//       <Form.Control type="file" className={classes.button} />
//     </Form.Group> */}
//     <Form.Group controlId="formFileSm">
//       <Form.Control type="file" />
//     </Form.Group>
//     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//       <Form.Control size="lg" type="text" placeholder="Product Name" />
//     </Form.Group>
//     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//       <Form.Control size="lg" as="textarea" rows={5} placeholder="Product Description " />
//     </Form.Group>
//     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//       <Form.Control
//         size="lg"
//         type="number"
//         placeholder="Price"
//         onChange={handleChange}
//         InputProps={{
//           inputComponent: NumberFormatCustom
//         }}
//       />
//     </Form.Group>
//   </div>
// </form>
