
## Setting up Prisma
To get started, please install the prisma library:

```npm install prisma```

You should also install the prisma plugin for VS Code. It will make formatting much easier:
```https://marketplace.visualstudio.com/items?itemName=Prisma.prisma```

Next, run prisma's init function: `npx prisma init`. This will generate the prisma directory and an initial `schema.prisma` file.

We will be using sqlite as our database, so you will want to replace the datasource db block with this code:

```
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}
```

## Defining the schema
Using [prisma's schema documentation](https://www.prisma.io/docs/orm/prisma-schema/overview), define a schema for a database according to the specifications below. You can validate your schema with `npx prisma validate`

### Candidates
Each candidate should have an auto-incrementing id. They should have a name and part fields that are strings. They should have a votes field that is an integer that defaults to 0. There should be a [one-to-many relationship](https://www.prisma.io/docs/orm/prisma-schema/data-model/relations/one-to-many-relations) with race. Be seure to set `onDelete: Cascade` on the @relation.

### Race
A race has an auto-incrementing id. It has a name which is a string. It also can have many candidates.

## Migrating the Schema
Once you are finished creating the schema, you will want to generate the database to match it using [prisma migrate](https://www.prisma.io/docs/orm/prisma-migrate/getting-started). You'll use this command: `prisma migrate dev --name init`. Subsequent changes to the schema will require another migration to update the db, preferably with a different name in the command, like this `prisma migrate dev --name added_job_title`


## Implementing the driver
Once you have the database set up, follow the instructions on the driver file to finish the assignment. I will sight-grade these assignments because I have not been able to get the automated testing to work reliably.