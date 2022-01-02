const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

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
   totalUsersCount: 0,
   pageSize: 5,
   isFetching: true
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
            totalUsersCount: action.totalUsersCount
         }
      case TOGGLE_FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               return u.id === action.userId ? { ...u, followed: !u.followed } : u;
            })
         }
      case TOGGLE_IS_FETCHING:
         return {
            ...state,
            isFetching: action.isFetching
         }
      default:
         return state;
   }
}

export const follow = (userId) => ( { type: FOLLOW, userId } );
export const unfollow = (userId) => ( { type: UNFOLLOW, userId } );
export const setUsers = (users) => ( { type: SET_USERS, users } );
export const toggleFollow = (userId) => ( { type: TOGGLE_FOLLOW, userId } );
export const setCurrentPage = (currentPage) => ( { type: SET_CURRENT_PAGE, currentPage } );
export const setTotalUsers = (totalUsersCount) => ( { type: SET_TOTAL_USERS, totalUsersCount } );
export const toggleIsFetching = (isFetching) => ( { type: TOGGLE_IS_FETCHING, isFetching } );

export default usersReducer;
