const inititalState = {
  hospitals: [
    {
      name: 'Hospital 1',
      city: 'City 1',
      province: 'Province 1',
      region: 'Region 1',
      contact: 'contact@contact.com',
    },
    {
      name: 'Hospital 2',
      city: 'City 1',
      province: 'Province 2',
      region: 'Region 1',
      contact: 'contact@contact.com',
    },
    {
      name: 'Hospital 3',
      city: 'City 2',
      province: 'Province 1',
      region: 'Region 2',
      contact: 'contact@contact.com',
    },
    {
      name: 'Hospital 4',
      city: 'City 2',
      province: 'Province 2',
      region: 'Region 3',
      contact: 'contact@contact.com',
    },
    {
      name: 'Hospital 5',
      city: 'City 2',
      province: 'Province 3',
      region: 'Region 2',
      contact: 'contact@contact.com',
    },
    {
      name: 'Hospital 6',
      city: 'City 3',
      province: 'Province 3',
      region: 'Region 2',
      contact: 'contact@contact.com',
    },
    {
      name: 'Hospital 7',
      city: 'City 1',
      province: 'Province 3',
      region: 'Region 2',
      contact: 'contact@contact.com',
    },
    {
      name: 'Hospital 8',
      city: 'City 2',
      province: 'Province 2',
      region: 'Region 1',
      contact: 'contact@contact.com',
    },
    {
      name: 'Hospital 9',
      city: 'City 3',
      province: 'Province 3',
      region: 'Region 1',
      contact: 'contact@contact.com',
    },
  ],

  cities: ['All', 'City 1', 'City 2', 'City 3'],

  provinces: ['All', 'Province 1', 'Province 2', 'Province 3'],

  regions: ['All', 'Region 1', 'Region 2', 'Region 3'],
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    //product related
    case 'ADD_HOSPITAL':
      return { ...state, hospitals: [...state.hospitals, action.payload] };

    default:
      return state;
  }
};

export default reducer;
