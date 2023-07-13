const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5000;

const _dirname = path.dirname("");

const buildPath = path.join(_dirname, '../parker-app/build');
console.log('what is the path: ', buildPath)

app.use(express.static(buildPath));


app.get('/projectname', (req, res) => {
	res.send('PARKER')
})

app.get('/*', (req, res) => {

	res.sendFile(
		path.join(__dirname, '../parker-app/build/index.html'),
		function(err){
			if(err){
				res.status(500).send(err);
			}
		}
	)
});


app.listen(port, () => {
	  console.log(`Server is running on port ${port}`);
});


