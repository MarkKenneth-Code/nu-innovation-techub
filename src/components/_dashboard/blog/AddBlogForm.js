import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { border, color, width } from '@material-ui/system';

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
  const classes = useStyles();
  const [values, setValues] = React.useState({
    textmask: '(1  )    -    '
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        {/* <Form.Group controlId="formFile" className={classes.filepicker}>
          <Form.Control type="file" className={classes.button} />
        </Form.Group> */}
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
    </form>
  );
}
