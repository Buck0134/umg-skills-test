import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Captial Music Group Skills Test
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Welcome! This is a demonstration of my solution for the Universal Music Group Software Engineering skills test.
        Use the navigation bar to explore each of the three tasks:
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 'fit-content' }}>
        <Button variant="outlined" component={Link} to="/part-1-react-table">
          Part 1 – React Table (iTunes API)
        </Button>
        <Button variant="outlined" component={Link} to="/submit-data">
          Part 2 – API + BigQuery (Mock)
        </Button>
        <Button variant="outlined" component={Link} to="/custom-lists">
          Part 3 – Custom Artist Lists
        </Button>
      </Box>
    </Box>
  );
};

export default Home;