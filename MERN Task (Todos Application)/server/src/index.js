require('dotenv').config();

const db = require('./connection');

const express = require('express');
const app = express();

const cors = require('cors');

app.set('port', process.env.PORT || 8888);

app.use(express.json());
app.use(cors());

const tasksRoutes = require('./routes/task.route.js');

app.use('/api/task', tasksRoutes);

app.listen(app.get('port'), () => {
	console.log(`Server is listening on port ${app.get('port')}.`);
});
