const initialState = {
   menu: {
      mainMenu: [
         { id: 1, label: 'Profile', path: '/profile' },
         { id: 2, label: 'Messages', path: '/dialogs' },
         { id: 3, label: 'News', path: '/news' },
         { id: 4, label: 'Music', path: '/music' },
      ],
      usersMenu: [{ id: 1, label: 'Users', path: '/users' }],
      settingsMenu: [{ id: 1, label: 'Settings', path: '/settings' }],
   },
   friends: [
      {
         id: 1,
         name: 'Dymich',
         avatar: 'https://image.flaticon.com/icons/png/512/147/147144.png',
      },
      {
         id: 2,
         name: 'Viktor',
         avatar:
            'https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png',
      },
      {
         id: 3,
         name: 'Sveta',
         avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
      },
      {
         id: 4,
         name: 'Sveta',
         avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
      },
   ],
};

const sidebarReducer = (state = initialState, action) => {
   return state;
};

export default sidebarReducer;
