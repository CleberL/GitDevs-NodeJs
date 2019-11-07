export const url = process.env.DATABASE_URL || 'mongodb://localhost/gitdevs';
export const flags = {
  useNewUrlParser: 'true',
  useCreateIndex: 'true',
  useUnifiedTopology: 'true',
};
