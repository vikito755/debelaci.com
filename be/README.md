<h1>Setting up database</h1>
Prerequisites:
- Install Docker


Running local postgress docker command
docker run --name dev-postgres -e POSTGRES_PASSWORD=Hello@123 -d postgres

PGADMIN for local development:
docker run -d \
  --name pgadmin \
  -e PGADMIN_DEFAULT_EMAIL=admin@admin.com \
  -e PGADMIN_DEFAULT_PASSWORD=Hello@123 \
  -p 5050:80 \
  dpage/pgadmin4

For the DB_HOST env variables use:
docker inspect \
  -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' postgres:17.4

Env variable - DB_PORT, defaults to 5432

DB_USER=postgres
DB_PASSWORD=Hello@123