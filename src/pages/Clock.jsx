import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Stack, Container } from '@mui/system';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button, Typography } from '@mui/material';

const Clock = () => {
  const date = new Date();
  const [timer, setTimer] = useState(date);

  useEffect(() => {
    setInterval(() => {
      setTimer(new Date());
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <Container>
      <Stack
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        margin="20px"
        spacing={2}
      >
        <Link className="button2" to="/">
          <Button variant="outlined">Home</Button>
        </Link>
        <Typography variant="h1">{timer.toLocaleTimeString()}</Typography>
      </Stack>
    </Container>
  );
};

export default Clock;
