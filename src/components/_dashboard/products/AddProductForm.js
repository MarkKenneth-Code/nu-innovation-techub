import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Axios from 'axios';

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

  const onSubmit = async (data) => {
    console.log(data);

    const productImage = data.productImage[0];
    const productName = data.productName;
    const productDescription = data.productDescription;
    const productPrice = data.productPrice;
    const salePrice = data.salePrice;
    const productCategory = data.productCategory;

    const formData = new FormData();
    formData.append('file', productImage);
    formData.append('upload_preset', 'kbusolgc');
    await Axios.post('https://api.cloudinary.com/v1_1/dy5g3pexw/image/upload', formData).then(
      (response, err) => {
        if (!err) {
          console.log(response.data.secure_url);
          const obj = {
            imagePath: response.data.secure_url,
            productName: productName,
            productDescription: productDescription,
            productPrice: productPrice,
            salePrice: salePrice,
            productCategory: productCategory,
            dateAdded: `${new Date().getUTCMonth()}/${new Date().getUTCDate()}/${new Date().getUTCFullYear()}`
          };
          Axios.post('http://localhost:3001/product/addProduct', obj).then((response) => {
            console.log(response);
          });
        }
      }
    );
  };
  // const onSubmit = (data) => console.log(data);
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
      <input
        type="file"
        name="picture"
        accept="image/*"
        {...register('productImage', { required: true })}
      />
      {/* use aria-invalid to indicate field contain error */}
      <input
        id="name"
        aria-invalid={errors.name ? 'true' : 'false'}
        {...register('productName', { required: true, maxLength: 10000 })}
        placeholder="Product Name"
      />
      <textarea
        id="description"
        aria-invalid={errors.name ? 'true' : 'false'}
        {...register('productDescription', { required: true, maxLength: 1000000 })}
        placeholder="Description"
      />
      {/* use role="alert" to announce the error message */}
      {/* {errors.name && errors.name.type === 'required' && <span role="alert">tite</span>}
      {errors.name && errors.name.type === 'maxLength' && (
        <span role="alert">Max length exceeded</span>
      )} */}

      <input
        id="price"
        type="number"
        name="priceProduct"
        accept="image/*"
        placeholder="Price"
        {...register('productPrice', { required: true })}
      />
      <input
        id="price"
        type="number"
        name="salePrice"
        accept="image/*"
        placeholder="Sale Price"
        {...register('salePrice', { required: true })}
      />

      <div class="form-floating">
        <select
          class="form-select"
          id="categorySelect"
          {...register('productCategory', { required: true })}
        >
          <option selected>Open this select menu</option>
          <option value="Books">Books</option>
          <option value="Innovations">Innovations</option>
          <option value="Souvenirs">Souvenirs</option>
        </select>
        <label for="floatingSelect">Category</label>
      </div>

      <input id="submitBtnProduct" type="submit" />
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
