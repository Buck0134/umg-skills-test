import { Box, Typography, Link, Divider, Paper, Grid } from '@mui/material';

const Part3Notes = () => {
  return (
    <Box p={4} maxWidth="900px" mx="auto">
      <Typography variant="h4" gutterBottom>
        🧠 Implementation Notes – Part 3
      </Typography>

      <Typography variant="body1" gutterBottom>
        This part demonstrates a full-stack feature allowing users to manage custom lists of artists using BigQuery and the iTunes API.
      </Typography>

      <Divider sx={{ my: 3 }} />
    <Typography variant="h6" gutterBottom>
    📊 BigQuery Table Schemas
    </Typography>

    <Grid container spacing={3}>
    {/* USERS TABLE */}
    <Grid item xs={12} md={6}>
        <Paper elevation={2} sx={{ p: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            👤 users
        </Typography>
        <Typography variant="body2"><strong>user_id</strong>: STRING (Primary Key)</Typography>
        <Typography variant="body2"><strong>name</strong>: STRING (Required)</Typography>
        </Paper>
    </Grid>

    {/* LISTS TABLE */}
    <Grid item xs={12} md={6}>
        <Paper elevation={2} sx={{ p: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            🗂️ lists
        </Typography>
        <Typography variant="body2"><strong>list_id</strong>: STRING (Primary Key)</Typography>
        <Typography variant="body2"><strong>name</strong>: STRING (Required)</Typography>
        <Typography variant="body2"><strong>created_by</strong>: STRING (FK to users.user_id)</Typography>
        <Typography variant="body2"><strong>created_at</strong>: TIMESTAMP (auto)</Typography>
        <Typography variant="body2"><strong>updated_at</strong>: TIMESTAMP (auto)</Typography>
        </Paper>
    </Grid>

    {/* ARTISTS TABLE */}
    <Grid item xs={12} md={6}>
        <Paper elevation={2} sx={{ p: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            🎤 artists
        </Typography>
        <Typography variant="body2"><strong>artist_id</strong>: STRING (Primary Key)</Typography>
        <Typography variant="body2"><strong>first_name</strong>: STRING</Typography>
        <Typography variant="body2"><strong>last_name</strong>: STRING</Typography>
        <Typography variant="body2"><strong>profile_url</strong>: STRING (iTunes Profile)</Typography>
        <Typography variant="body2"><strong>primary_genre_name</strong>: STRING</Typography>
        </Paper>
    </Grid>

    {/* ARTIST_IN_LIST TABLE */}
    <Grid item xs={12} md={6}>
        <Paper elevation={2} sx={{ p: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            🔗 artist_in_list
        </Typography>
        <Typography variant="body2"><strong>list_id</strong>: STRING (FK to lists.list_id)</Typography>
        <Typography variant="body2"><strong>artist_id</strong>: STRING (FK to artists.artist_id)</Typography>
        <Typography variant="body2"><strong>added_by_user</strong>: STRING (User ID)</Typography>
        <Typography variant="body2"><strong>added_at</strong>: TIMESTAMP</Typography>
        </Paper>
    </Grid>
    </Grid>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6">🔧 2. API Endpoints</Typography>
      <Typography mt={1}>
        I created FastAPI endpoints for all key operations:
      </Typography>
      <ul>
        <li><code>GET /lists</code>: Fetch all lists</li>
        <li><code>POST /lists/list</code>: Create a new list</li>
        <li><code>POST /lists/list/add-artist</code>: Add an artist to a list (with duplication check)</li>
        <li><code>DELETE /lists/list/remove-artist</code>: Remove an artist</li>
        <li><code>GET /lists/list/{'{list_id}'}/artists</code>: Fetch all artists in a list</li>
        <li><code>GET /lists/users</code>: Load all users</li>
      </ul>

      <Typography mt={2}>
        The backend performs input validation with <code>Pydantic</code> and integrates directly with BigQuery using parameterized queries to avoid injection.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6">💻 3. React Frontend Component</Typography>
      <Typography mt={1}>
        The frontend flow consists of 4 steps:
      </Typography>
      <ol>
        <li>🧑 Select user (UserSelect component)</li>
        <li>📋 View all lists (as cards)</li>
        <li>🎨 Select a list to show all artists</li>
        <li>➕ Add (via iTunes search) / ❌ Remove artists</li>
      </ol>

      <Typography mt={2}>
        The search input is backed by iTunes' public API with a debounce to minimize requests. Artist data is normalized before saving.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6">🧩 Integration Flow</Typography>
      <ul>
        <li>User selects their identity (or switches)</li>
        <li>They can view, select, or create lists</li>
        <li>Each list shows the artists in it via backend joins</li>
        <li>New artists are fetched from iTunes and saved to BigQuery</li>
      </ul>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6">🚧 Performance Considerations</Typography>
      <ul>
        <li>🎯 iTunes API is queried only on search (debounced)</li>
        <li>🔍 BigQuery is only read when necessary (initial load, after update)</li>
        <li>📦 Artist deduplication prevents bloating the table</li>
        <li>🧠 Potential future optimization: use Redis or SQLite cache to reduce repeated artist queries</li>
      </ul>

      <Divider sx={{ my: 3 }} />

    <Typography variant="h6">🔐 Security Considerations</Typography>
    <ul>
        <li>
            ✅ <strong>User traceability</strong> via <code>created_by</code> and <code>added_by_user</code>
        </li>
        <li>
            🔑 <strong>Safe queries</strong> – All queries are parameterized to prevent injection
        </li>
        <li>
            🔐 <strong>JWT-ready</strong> – User auth is already integrated, making it easy to scale to token-based protection
        </li>
        <li>
            🧠 <strong>Optional base64 encoding</strong> for lightweight obfuscation of sensitive values
        </li>
        <li>
            🛡️ <strong>Extendable with GCP IAM</strong> for role-based or dataset-level access control
        </li>
    </ul>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6">📎 GitHub Source Code</Typography>
      <ul>
        <li>
          <Link
            href="https://github.com/buckyyu/umg-skills-test/blob/main/backend/routes/part3_artist_list_routes.py"
            target="_blank"
            rel="noopener"
          >
            FastAPI Artist List Routes
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/buckyyu/umg-skills-test/blob/main/frontend/src/pages/Part3CustomLists/index.jsx"
            target="_blank"
            rel="noopener"
          >
            React Artist List Page
          </Link>
        </li>
      </ul>
    </Box>
  );
};

export default Part3Notes;