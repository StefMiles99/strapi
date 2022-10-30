module.exports = ({ env }) => ({
  host: process.env.HOST || env('HOST', '0.0.0.0') || '0.0.0.0',
  port: process.env.PORT || env.int('PORT', 1337) || '8000',
  app: {
    keys: env.array("APP_KEYS"),
  },
});
