module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  port: '5433',
  password: 'pandora',
  database: 'meetapp',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
