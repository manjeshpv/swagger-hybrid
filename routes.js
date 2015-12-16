/**
 * Main application routes
 */

'use strict';



module.exports = function (app) {

  // Insert routes below
  app.use('/yaml', require('./routes/yaml'));
  app.use('/json', require('./routes/json'));
  app.use('/ui', require('./routes/ui'));

}
