# DB Migration Template

## Prerequisites

1. Node `v12`

## Configuration

1. SQL Migration

Copy [migration.example.json](sql/migration.example.json) as [migration.json](migration.json)

Follow [Sequelize migrations configuration](https://sequelize.org/docs/v6/other-topics/migrations/#configuration)

2. NoSQL Migration

Copy [migrate-mongo-config.example.js](nosql/migrate-mongo-config.example.js) as [migrate-mongo-config.js](migrate-mongo-config.js)

Follow [Migrate Mongo basic user](https://github.com/seppevs/migrate-mongo#basic-usage)

## Install Dependencies

```bash
npm install
```

## Start migrating

1. Please follow [sql/README](sql/README.md) for `SQL` migration
2. Please follow [nosql/README](nosql/README.md) for `NoSQL` migration
3. See [package.json/scripts](package.json) for available scripts
4. Add more scripts at [package.json/scripts](package.json) to fulfill your needs

### Contributors ###

- Alfarih Faza <alfarihfz@gmail.com>
