# Dev

## Steps for local development

1. Clone repo
2. Setup a local PSQL database named "studium_dev"
3. run `$yarn dev` from the root of the repo. This runs codegen in the background to generate typings from the graphql schema.
4. In another terminal, navigate to the `api` project. `$cd api`
5. run database migrations `$yarn migrate`
6. (optional) seed the database `$yarn seed`
7. start the backend `$yarn dev`
