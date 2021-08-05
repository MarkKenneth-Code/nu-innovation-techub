import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Form, Col, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap-floating-label';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '60px',
    '& .MuiTextField-root': {
      margin: '7px',
      width: '25ch'
    }
  },
  dropDown1: {
    margin: '7px',
    width: '25ch'
  },
  dropDown2: {
    margin: '7px',
    width: '45ch',
    marginLeft: '37px'
  }
}));

export default function Forms() {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="First name" size="lg" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" size="lg" />
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Control placeholder="Address" size="lg" />
          </Form.Group>
          <div class="form-floating">
            <select
              class="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label for="floatingSelect">Works with selects</label>
          </div>
        </Form>
      </div>
    </form>
  );
}
