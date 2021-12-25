module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9b6366a6a3dd7294bbd57b05d660f387'),
  },
});
