# SQL Migration

This directory is intended as root directory for SQL migration. This SQL migration use [Sequelize](https://sequelize.org/) as the orm & migration cli

## Directory structures

### Data (data)

`data` contains supporting data to perform migration.

For example `json` containing list of `user` object which will be inserted to database by seeders

### Models (models)

`models` contains your database model definition. The model refer to `Sequelize` model in this documentation: [Model Basics](https://sequelize.org/docs/v6/core-concepts/model-basics/) 

### Patches (patches)

`patches` contains `*.sql` scripts which behave as a `patch` for your database. For example, consider your database migration state as belows:

```yaml
- 2022052 5123456-xxxA
- 20220526123456-xxxB
- 20220527123456-xxxC (current state)
```

Your database current state already on `20220527123456-xxxC` but you need to make a change of `20220525123456-xxxA` but undoing migration to `20220525123456-xxxA` is not possible due to some reasons such would be a column dropping or table dropping.

In this condition, you can write the modification by a `sql` script in the `patches` folder and execute it.
The modification still need to be written at `20220525123456-xxxA` for later migration and won't need to execute the corresponding `patch` because the modification was written on `20220525123456-xxxA`.

### Scripts (scripts)

`scripts` contains the `Sequelize` script to perform your database migrations. You can refer to this documentation: [Migration Skeleton](https://sequelize.org/docs/v6/other-topics/migrations/#migration-skeleton)

### Seeders (seeders)

`seeders` contains the `Sequelize` seeder script to insert your database initial data such as `enum table rows`, `superadmin credential`, etc.
