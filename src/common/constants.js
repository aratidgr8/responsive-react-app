
export const mainMenu = ["Home", "About Us", "Contact Us", "Shop"]

export const hamburgerMenu = [...mainMenu, "Login"]

export const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', title: 'King in the north'},
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', title: 'Queen regent' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', title: 'King slayer' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', title:'No one' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', title:'Khaleesi' },
    { id: 6, lastName: 'Stark', firstName: 'Sansa', title: 'Queen in the north' },
    { id: 7, lastName: 'Baelish', firstName: 'Petyr', title: 'Little Finger'},
    { id: 8, lastName: 'Tarly', firstName: 'Samwell', title:'Grand Maester'},
    { id: 9, lastName: 'Lannister', firstName: 'Tyrion', title: 'Hand of Queen' },
  ];

export const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },    
    {
      field: 'Title',
      headerName: 'Title',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.title || ''}`,
    },
];
  

export function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const type = [
    {
      value: 'quote',
      label: 'Love the show',
    },
    {
      value: 'complaint',
      label: 'Hate the show',
    },
    {
      value: 'other',
      label: 'Never watched',
    },
  ];
  