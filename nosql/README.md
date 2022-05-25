# NoSQL Migration

This directory is intended as root directory for NoSQL migration. Default NoSQL database is `mongodb`and use [Migrate Mongo](https://www.npmjs.com/package/migrate-mongo) as the migration cli.

Migration cli documentation refer to [Migrate Mongo](https://www.npmjs.com/package/migrate-mongo).

## Directory structures

### Data (data)

`data` contains supporting data to perform migration.

For example `json` containing list of `user` object which will be inserted to database by seeders

### Models (models)

`models` contains your database model definition. You can write the model as `$jsonSchema` and will be use as [Schema Validation](https://www.mongodb.com/docs/manual/core/schema-validation/)

### Scripts (scripts)

`scripts` contains the `Migrate Mongo` script to perform your database migrations. You can refer to this documentation: [Creating a new migration script](https://github.com/seppevs/migrate-mongo#creating-a-new-migration-script)

### Seeders (seeders)

`seeders` contains the `Migration` script to insert your database initial data such as `enum table rows`, `superadmin credential`, etc.
