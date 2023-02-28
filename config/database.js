module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '15.207.110.45'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'trainsoft'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'Apurv@1998'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
