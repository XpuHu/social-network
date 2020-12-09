let state = {
   dialogsPage: {
      dialogs: [
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
            name: 'Andrey',
            avatar:
               'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png',
         },
         {
            id: 5,
            name: 'Slava',
            avatar:
               'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png',
         },
      ],
      messages: [
         {
            id: 1,
            message: 'Yo',
            my: false,
            avatar:
               'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
         },
         {
            id: 2,
            message: 'Hi',
            my: true,
            avatar:
               'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
         },
         {
            id: 3,
            message: 'How are you?',
            my: false,
            avatar:
               'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
         },
      ],
   },
   profilePage: {
      posts: [
         { id: 1, message: 'Hey, how are you?', likesCount: 5 },
         { id: 2, message: `It's my first post!`, likesCount: 20 },
      ],
      profile: {
         header: {
            image:
               'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
            label: 'header',
         },
         info: {
            avatar:
               'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
            description: 'description',
         },
      },
   },
   sidebar: {
      menu: {
         mainMenu: [
            { id: 1, label: 'Profile', path: '/profile' },
            { id: 2, label: 'Messages', path: '/dialogs' },
            { id: 3, label: 'News', path: '/news' },
            { id: 4, label: 'Music', path: '/music' },
         ],
         additionalMenu: [{ id: 1, label: 'Settings', path: '/settings' }],
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
   },
};

export default state;
