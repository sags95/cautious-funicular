export const config = {
  description: '',
  cron: {
    schedule: '0 0 * * *',
  },
};

export default async function (req) {
  const { swell, store, settings, data } = req;
  
  return await swell.get('/vehicles');
}
