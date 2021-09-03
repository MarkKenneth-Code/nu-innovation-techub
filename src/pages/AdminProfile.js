import { Box, Grid, Container, Typography } from '@material-ui/core';
import Page from '../components/Page';
import { useForm, Controller } from 'react-hook-form';
import { Button, TextField, Avatar } from '@material-ui/core';

export default function AdminProfile() {
  const { handleSubmit, control } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <Page title="Profile | NU Innovation Tech Hub">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Edit Profile</Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <UploadImage />
            <Grid container item xs={12} sm={10} md={8} style={{ alignSelf: 'center' }} spacing={2}>
              <FirstNameInput control={control} />
              <LastNameInput control={control} />
              <EmailInput control={control} />
              <CurrentPasswordInput control={control} />
              <NewPasswordInput control={control} />
            </Grid>
            <Grid container>
              <CancelChangesButton />
              <SaveChangesButton />
            </Grid>
          </div>
        </form>
      </Container>
    </Page>
  );
}

function UploadImage() {
  const profilePicture = 'http://localhost:3000/static/mock-images/avatars/avatar_default.jpg';

  return (
    <div
      style={{
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <img
        style={{
          alignSelf: 'center',
          width: '150px',
          height: '150px',
          borderRadius: '75px',
          border: '2px solid white',
          boxShadow: '0px 0px 5px 5px #ECECEC',
          marginTop: '1rem',
          marginBottom: '1rem'
        }}
        src={profilePicture}
        alt="profile"
      />
      <Button variant="contained" color="secondary" style={{ marginBottom: '3rem' }}>
        Upload new Image
      </Button>
    </div>
  );
}

function FirstNameInput(props) {
  return (
    <>
      {/* <Typography>First Name</Typography> */}
      <Grid item xs={12} md={6}>
        <Controller
          name="firstName"
          control={props.control}
          defaultValue="Kenneth"
          rules={{ required: 'First name required' }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              type="text"
              autoComplete="fname"
              variant="outlined"
              id="firstName"
              label="First Name"
              required
              fullWidth
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error && error.message}
            />
          )}
        />
      </Grid>
    </>
  );
}

function LastNameInput(props) {
  return (
    <>
      <Grid item xs={12} md={6}>
        <Controller
          name="lastName"
          control={props.control}
          defaultValue="DelaCruz"
          rules={{ required: 'Last name required' }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              type="text"
              autoComplete="lname"
              variant="outlined"
              id="lastName"
              label="Last Name"
              required
              fullWidth
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error && error.message}
            />
          )}
        />
      </Grid>
    </>
  );
}

function EmailInput(props) {
  return (
    <Grid item xs={12}>
      <Controller
        name="contactNumber"
        control={props.control}
        defaultValue="kennethdelacruz@gmail.com"
        rules={{ required: 'Email required' }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            type="email"
            autoComplete="email"
            variant="outlined"
            id="email"
            label="Email Address"
            required
            fullWidth
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error && error.message}
          />
        )}
      />
    </Grid>
  );
}

// returns password input field
function CurrentPasswordInput(props) {
  return (
    <Grid item xs={12}>
      <Controller
        name="currentPassword"
        control={props.control}
        defaultValue=""
        //rules={{ required: 'Password required' }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            type="password"
            variant="outlined"
            id="currentPassword"
            label="Current Password"
            fullWidth
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error && error.message}
          />
        )}
      />
    </Grid>
  );
}

// returns confirm password input field
function NewPasswordInput(props) {
  return (
    <Grid item xs={12}>
      <Controller
        name="newPassword"
        control={props.control}
        defaultValue=""
        // rules={{ required: 'Password required' }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            type="password"
            variant="outlined"
            id="newPassword"
            label="New Password"
            fullWidth
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error && error.message}
          />
        )}
      />
    </Grid>
  );
}

function SaveChangesButton() {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      style={{ margin: '2rem auto 0 auto' }}
    >
      Save changes
    </Button>
  );
}

function CancelChangesButton() {
  return (
    <Button type="reset" variant="outlined" color="primary" style={{ margin: '2rem auto 0 auto' }}>
      Cancel changes
    </Button>
  );
}
