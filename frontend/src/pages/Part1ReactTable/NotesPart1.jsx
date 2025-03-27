import { Box, Typography, Link, Paper, Divider } from '@mui/material';

const Part1ImplementationNotes = () => {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        📝 Implementation Notes – Part 1
      </Typography>

      <Typography variant="body1" gutterBottom>
        This component fulfills the requirement of displaying a simple React table with data fetched from an external API. We used the iTunes RSS Feed API to load the top 10 pop songs and displayed the data using Material UI’s <code>Table</code> component.
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>
        🔧 Key Functionalities:
      </Typography>
      <ul>
        <li>Fetching top 10 pop songs from iTunes RSS feed.</li>
        <li>Rendering a styled table using Material UI components.</li>
        <li>Displaying album art, song title, artist name, album name, and link to iTunes.</li>
      </ul>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>
        💡 Code Snippets:
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        Fetching from iTunes:
      </Typography>
      <Paper sx={{ p: 2, mb: 2, bgcolor: '#f5f5f5', fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
        {`const fetchTopPopSongs = async (limit = 10) => {
        const url = \`https://itunes.apple.com/us/rss/topsongs/limit=\${limit}/genre=14/json\`;
        const response = await fetch(url);
        const data = await response.json();
        return data.feed.entry || [];
        };`}
      </Paper>

      <Typography variant="subtitle1" gutterBottom>
        Table Structure with Album Art:
      </Typography>
      <Paper sx={{ p: 2, bgcolor: '#f5f5f5', fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
        {`<TableCell>
  <img
    src={song['im:image']?.[2]?.label || song['im:image']?.[0]?.label}
    alt="Album Art"
    style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 4 }}
  />
</TableCell>`}
      </Paper>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" gutterBottom>
        🔗 GitHub Source Code
      </Typography>
      <Link href="https://github.com/your-github/umg-skills-test" target="_blank" rel="noopener">
        View on GitHub
      </Link>
    </Box>
  );
};

export default Part1ImplementationNotes;