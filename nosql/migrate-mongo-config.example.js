// In this file you can configure migrate-mongo

const configs = {
  production: {
    host: 'localhost',
    port: 27017,
    username: 'mongo',
    password: 'mongo',
    url: function () {
      this.url = `mongodb://${this.username}:${this.password}@${this.host}:${this.port}`;
    },
    databaseName: 'YOURDATABASENAME',
    options: {
      useNewUrlParser: true, // removes a deprecation warning when connecting
      useUnifiedTopology: true, // removes a deprecating warning when connecting
    },
  },
  development: {
    host: 'localhost',
    port: 27017,
    username: 'mongo',
    password: 'mongo',
    url: function () {
      this.url = `mongodb://${this.username}:${this.password}@${this.host}:${this.port}`;
    },
    databaseName: 'YOURDATABASENAME',
    options: {
      useNewUrlParser: true, // removes a deprecation warning when connecting
      useUnifiedTopology: true, // removes a deprecating warning when connecting
    },
  },
};

const config = process.env.NODE_ENV === 'production' ? configs.production : configs.development;
config.url();

// Return the config as a promise
module.exports = {
  mongodb: config,
  migrationsDir: 'migrations',
  changelogCollectionName: 'changelog',
  migrationFileExtension: '.js',
  useFileHash: false,
};
