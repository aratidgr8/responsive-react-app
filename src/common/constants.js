
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
  
export const gotCharacters = [
  {
    img: 'https://media.gq-magazine.co.uk/photos/62ac38f82da9f5f89888eba9/4:3/w_888,h_666,c_limit/jon-snow-series-1200.jpeg',
    title: 'Jon Snow',
  },
  {
    img: 'https://i.pinimg.com/564x/ec/a5/7c/eca57c69bfaa8ee8601026c223d5b755.jpg',
    title: 'Khalessi',
  },
  {
    img: 'https://pyxis.nymag.com/v1/imgs/9eb/c1a/a838f7bffb25ed90a376864c85ae94c578-14-cersei-lannister.rsquare.w700.jpg',
    title: 'Cersei',
  },
  {
    img: 'https://i.pinimg.com/originals/e7/50/6b/e7506b1d4af8a20fa03be01a5c876199.jpg',
    title: 'Arya Stark',
  },
  {
    img: 'https://i.pinimg.com/736x/ad/69/a9/ad69a986a10a20b54798a0c8c930edd7.jpg',
    title: 'Sansa Stark',
  },
  {
    img: 'https://i.pinimg.com/originals/e3/03/2b/e3032be1d7fd8e5757bee41cf8177c77.jpg',
    title: 'Petyr Baelish',
  },
  {
    img: 'https://media.gq-magazine.co.uk/photos/5d13ad5ecb85aa48c29458b8/1:1/w_1280,h_1280,c_limit/jamie-lannister-02-gq-10apr18_b.jpg',
    title: 'Jamie Lannister',
  },
  {
    img: 'https://static.toiimg.com/photo/62981209/.jpg',
    title: 'Tyrion Lannister',
  },
  {
    img: 'https://publish.purewow.net/wp-content/uploads/sites/2/2019/03/ned-stark-game-of-thrones-msn.jpg?resize=720%2C756',
    title: 'Ned Stark',
  },
  {
    img: 'https://prd-rteditorial.s3.us-west-2.amazonaws.com/wp-content/uploads/2017/07/13060621/Theon-Greyjoy.jpg',
    title: 'Theon Greyjoy',
  },
  {
    img: 'https://cdn.vox-cdn.com/thumbor/NSNBKh-MCe-4eq99SFjorkcIEyI=/0x0:3937x2953/1400x1400/filters:focal(0x0:3937x2953):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/46221760/marg.0.0.jpg',
    title: 'Marjorie Tyrell',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/8/80/Melisandre-Carice_van_Houten.jpg',
    title: 'Red Woman',
  },
];