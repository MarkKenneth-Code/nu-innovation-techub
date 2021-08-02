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
    marginLeft: '5px',
    marginBottom: '5px',
    border: '1px solid #d2d9d4',
    color: 'blue',
    borderRadius: '10px',
    width: '35ch',
    height: '50px'
  },
  button: {
    marginTop: '13px',
    marginLeft: '10px',
    textSizeAdjust: '60px'
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
        <Form.Group controlId="formFile" className={classes.filepicker}>
          <Form.Control type="file" className={classes.button} />
        </Form.Group>
        <TextField id="standard-pName" label="Title" />
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={7}
          variant="outlined"
        />
      </div>
    </form>
  );
}
