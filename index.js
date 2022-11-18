const express = require('express');
const cors = require('cors');
const app = express();

app.listen(4444, () => {
	console.log(`✅-Started at http://localhost:4444`);
});

app.use(cors());
app.use(express.static("./src"));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.sendFile('index.html', { root: "./src/html/" });
});