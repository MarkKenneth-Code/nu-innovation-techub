import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return <Box component="img" src="/static/NU-Logo.png" sx={{ width: 70, height: 70, ...sx }} />;
}
