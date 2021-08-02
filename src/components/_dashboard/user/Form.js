import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '55px',
    marginLeft: '37px',
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
  const [state, setState] = React.useState({
    age: '',
    name: 'hai'
  });
  const handleChange1 = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value
    });
  };
  const handleChange2 = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value
    });
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField id="standard-fName" label="First Name" />
        <TextField id="standard-lName" label="Last Name" />
        <TextField id="standard-mName" label="Middle Name" />
        <TextField id="standard-mName" label="Company" />
        <TextField id="standard-mName" label="Role" />
        <FormControl variant="outlined" className={classes.dropDown1}>
          <InputLabel htmlFor="outlined-age-native-simple">Dropdown 1</InputLabel>
          <Select
            native
            value={state.age}
            onChange={handleChange1}
            label="Age"
            inputProps={{
              name: 'age',
              id: 'outlined-age-native-simple'
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.dropDown2}>
          <InputLabel htmlFor="outlined-age-native-simple">Dropdown 2</InputLabel>
          <Select
            native
            value={state.age}
            onChange={handleChange2}
            label="Age"
            inputProps={{
              name: 'age',
              id: 'outlined-age-native-simple'
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>1</option>
            <option value={20}>2</option>
            <option value={30}>3</option>
          </Select>
        </FormControl>
      </div>
    </form>
  );
}
