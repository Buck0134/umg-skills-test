import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#000' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#fff' }}>
          UMG Skills Test
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={Link}
            to="/"
            sx={{ color: '#fff', '&:hover': { backgroundColor: '#333' } }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/part-1-react-table"
            sx={{ color: '#fff', '&:hover': { backgroundColor: '#333' } }}
          >
            Part 1
          </Button>
          <Button
            component={Link}
            to="/submit-data"
            sx={{ color: '#fff', '&:hover': { backgroundColor: '#333' } }}
          >
            Part 2
          </Button>
          <Button
            component={Link}
            to="/custom-lists"
            sx={{ color: '#fff', '&:hover': { backgroundColor: '#333' } }}
          >
            Part 3
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;