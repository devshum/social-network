const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

const initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if(user.id === action.userID) {
                        return {...user, followed: !user.followed }
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
        
        default:
            return state;
    }
}

export const setTotalUsersCount = totalCount => ({type: SET_TOTAL_COUNT, totalCount});
export const setCurrentPage = page => ({type: SET_CURRENT_PAGE, page });
export const toggleFollow = userID => ({type: TOGGLE_FOLLOW, userID });
export const setUsers = users => ({type: SET_USERS, users });
export const toggleIsFetching = () => ({type: TOGGLE_IS_FETCHING});

export default usersReducer;