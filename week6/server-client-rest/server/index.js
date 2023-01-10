/*
Import packages
*/
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

/*
Import custopm packages
*/
const apiRoutes = require('./api/routes');

/*
Settings
*/
const NODE_ENV = process.env.NODE_ENV || 'development';
const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 8080; // Port >= 0 and < 65536

/*
Create Express app
*/
const app = express();

/*
bodyParser
*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text({ type: '/' }));

/*
Serving static files
*/
app.use('/static', express.static(path.join(__dirname, 'public')));

/*
API Routes
*/
app.use('/api', cors(), apiRoutes);

/*
Not Found routes
*/
app.get('*', (req, res, next) => {
  const err = new Error(
    `${req.ip} tried to access ${req.originalUrl}`,
  );
  err.statusCode = 301;
  next(err);
});

/*
Error Handler
*/
app.use((err, req, res, next) => {
  const error = err;
  error.statusCode = error.statusCode || 500;
  res.status(error.statusCode);

  const body = {
    url: req.url,
    error: {
      message: error.message,
      statusCode: error.statusCode,
    },
  };

  res.json(body);

  next();
});

/*
Start the server
Listen to incoming requests
*/
let server;
if (NODE_ENV !== 'test') {
  server = app.listen(PORT, HOSTNAME, (err) => {
    if (err) throw err;
    if (NODE_ENV === 'development') {
      console.log(`Server is listening at http://${HOSTNAME}:${PORT}!`);
    }
  });
}

/*
Handle shutdown gracefully
*/
const handleGracefully = async () => {
  try {
    await server.close(async (err) => {
      if (err) throw err;

      if (NODE_ENV === 'development') {
        console.log('Server is gracefully closed!');
      }
      process.exit(0);
    });
  } catch (ex) {
    console.error(ex);
  }
};

/*
Shutdown the application
*/
process.on('SIGINT', () => {
  handleGracefully();
});
process.on('SIGTERM', () => {
  handleGracefully();
});
process.on('SIGQUIT', () => {
  handleGracefully();
});

// Cntrl + C
process.on('exit', () => {
  handleGracefully();
});
