const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE-IS-FOLLOWING'

const initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if(user.id === action.userID) {
                        return {...user, followed: true }
                    }

                    return user;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if(user.id === action.userID) {
                        return {...user, followed: false }
                    }

                    return user;
                })
            }
       
        case SET_USERS: 
            return { ...state, usersData: [ ...action.users ] }


        case SET_CURRENT_PAGE: {
        
            return {
                ...state,
                usersData: [  ],
                currentPage: action.page
            }
        }

        case SET_TOTAL_COUNT: {
        
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: !state.isFetching
            }
        }

        case TOGGLE_IS_FOLLOWING: {
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] 
                                                       : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        
        default:
            return state;
    }
}

export const setTotalUsersCount = totalCount => ({type: SET_TOTAL_COUNT, totalCount});
export const setCurrentPage = page => ({type: SET_CURRENT_PAGE, page });

export const follow = userID => ({type: FOLLOW, userID });
export const unfollow = userID => ({type: UNFOLLOW, userID });

export const setUsers = users => ({type: SET_USERS, users });
export const toggleIsFetching = () => ({type: TOGGLE_IS_FETCHING});

export const toggleFollowInProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING, isFetching, userId});

export default usersReducer;