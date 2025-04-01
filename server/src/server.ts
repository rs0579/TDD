import express from 'express';
// import path from 'node:path';
import path from 'node:path'
import routes from './routes/index.js';


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));

app.use(routes);

if (process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '../client/dist')));

  app.get('*', (_req, res) => {
   res.sendFile(path.join(__dirname, '../client/dist/index.html'));
 });
}

app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
