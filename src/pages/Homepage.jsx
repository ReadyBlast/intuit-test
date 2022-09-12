import { Button } from '@mui/material';
import { Box, Container } from '@mui/system';
import { Link } from 'react-router-dom';
// import './Homepage.css';

const Homepage = () => {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        spacing={2}
      >
        <Link className="button" to="/clock">
          <Button variant="outlined">Clock</Button>
        </Link>
        <Link className="button" to="/weather" underline="none">
          <Button variant="outlined">Weather</Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Homepage;
