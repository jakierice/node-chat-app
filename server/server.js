const express = require('express');
const path = require('path');

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});