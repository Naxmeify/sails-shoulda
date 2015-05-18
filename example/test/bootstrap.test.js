var Sails = require('sails')
  , sails;

before(function(done) {
  Sails.lift({
    // configuration for testing purposes
    log: {
      level: 'error'
    },
    models: {
      migrate: 'drop'
    }
  }, function(err, server) {
    console.log("LOL");
    sails = server;
    if (err) return done(err);
    // here you can load fixtures, etc.
    // Load fixtures
    done(err, sails);
  });
});

after(function(done) {
  // here you can clear fixtures, etc.
  console.log();
  sails.lower(done);
});
