import profileReducer, { addNewPostCreator, deletePost } from "./profileReducer";

const state = {
   posts: [
      {
         id: 1,
         message: 'Hey, how are you?',
         likesCount: 5,
         avatar:
            'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      },
      {
         id: 2,
         message: `It's my first post!`,
         likesCount: 20,
         avatar:
            'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      },
   ]
}

const newPostText = 'tets';

it(`Adding a post increment posts lenght`, () => {
   // 1. initial data
   const action = addNewPostCreator(newPostText);

   // 2. action - what to do
   const newState = profileReducer(state, action);

   // 3. expectation
   expect(newState.posts.length).toBe(3);
})

it(`Adding a post adds new post text`, () => {
   // 1. initial data
   const action = addNewPostCreator(newPostText);

   // 2. action - what to do
   const newState = profileReducer(state, action);

   // 3. expectation
   expect(newState.posts[2].message).toBe(newPostText);
})

it(`Deleting a post decrement posts lenght`, () => {
   // 1. initial data
   const postId = 1;
   const action = deletePost(postId);

   // 2. action - what to do
   const newState = profileReducer(state, action);

   // 3. expectation
   expect(newState.posts.length).toBe(state.posts.length - 1);
})
