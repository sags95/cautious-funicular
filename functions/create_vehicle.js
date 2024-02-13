export const config = {
  description: 'Creates vehicles',
  route: {
    public: true
  },
};

export default async function post (req) {
  const { swell, store, settings, data, session } = req;

  return data;

  return await swell.post('/vehicles', {
    make: data.make,
    model: data.model,
    year: data.year,
    customer_id: data.customer_id
  })

}
