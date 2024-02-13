export const config = {
  description: 'Handles vehicle approval',
  model: {
    events: ['vehicle.approved'],
    conditions: {},
  },
};

export default async function (req) {
  const { swell, store, settings, data } = req;

  
}
