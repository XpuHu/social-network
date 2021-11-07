const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';

const initialState = {
   users: [
      // {
      //    id: 1,
      //    followed: true,
      //    fullName: 'Dymich',
      //    currentStatus: `I'm bread`,
      //    location: { cityName: 'Moscow', countryName: 'Russia' },
      //    avatar: 'https://image.flaticon.com/icons/png/512/147/147144.png'
      // },
      // {
      //    id: 2,
      //    followed: false,
      //    fullName: 'Viktor',
      //    currentStatus: `I'm bread`,
      //    location: { cityName: 'Kiev', countryName: 'Ukraine' },
      //    avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png'
      // },
      // {
      //    id: 3,
      //    followed: true,
      //    fullName: 'Sveta',
      //    currentStatus: `I'm bread`,
      //    location: { cityName: 'Moscow', countryName: 'Russia' },
      //    avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png'
      // },
      // {
      //    id: 4,
      //    followed: false,
      //    fullName: 'Kate',
      //    currentStatus: `I'm bread`,
      //    location: { cityName: 'London', countryName: 'UK' },
      //    avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png'
      // }
   ],
   currentPage: 1,
   totalUsers: 0,
   usersCountOnPage: 5
}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               return u;
            })
         }
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               return u;
            })
         }
      case SET_USERS:
         return {
            ...state,
            users: [...action.users]
         }
      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.currentPage
         }
      case SET_TOTAL_USERS:
         return {
            ...state,
            totalUsers: action.totalUsers
         }
      case TOGGLE_FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               return u.id === action.userId ? { ...u, followed: !u.followed } : u;
            })
         }
      default:
         return state;
   }
}

export const followAC = (userId) => ( { type: FOLLOW, userId } );
export const unfollowAC = (userId) => ( { type: UNFOLLOW, userId } );
export const setUsersAC = (users) => ( { type: SET_USERS, users } );
export const toggleFollowAC = (userId) => ( { type: TOGGLE_FOLLOW, userId } );
export const setCurrentPageAC = (currentPage) => ( { type: SET_CURRENT_PAGE, currentPage } );
export const setTotalUsersAC = (totalUsers) => ( { type: SET_TOTAL_USERS, totalUsers } );

export default usersReducer;
