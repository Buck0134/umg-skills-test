import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Part1ReactTable from './pages/Part1ReactTable';
import Part2ApiMock from './pages/Part2ApiMock';
import Part3CustomLists from './pages/Part3CustomLists';

import { Box } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      >
      <NavBar />
      <Box flex="1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/part-1-react-table" element={<Part1ReactTable />} />
          <Route path="/submit-data" element={<Part2ApiMock />} />
          <Route path="/custom-lists" element={<Part3CustomLists />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
    </BrowserRouter>
  );
}

export default App;