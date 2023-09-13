import express from 'express';
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import personRoutes from './routes/person.js';

// File routing setup
// NOTE: __dirname cannot be directly used in ES6 modules
const __dirname = dirname(fileURLToPath(import.meta.url));

// Initialising the Express port
const app = express();
const PORT = 5000;

// Iniitialising JSON data format use
app.use(bodyParser.json());

// Setting the starting path for all the paths in the api.js file
app.use('/api', personRoutes);

// Returning landing page on GET '/' request
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/landing.html'));
})


// Running the Express server
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));