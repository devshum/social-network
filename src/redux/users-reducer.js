const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';

const initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1
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
                currentPage: action.page
            }
        }

        case SET_TOTAL_COUNT: {
        
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        
        default:
            return state;
    }
}

export const setTotalUsersCountActionCreator = totalCount => ({type: SET_TOTAL_COUNT, totalCount})
export const setCurrentPageActionCreator = page => ({type: SET_CURRENT_PAGE, page })
export const toggleFollowActionCreator = userID => ({type: TOGGLE_FOLLOW, userID })
export const setUsersActionCreator = users => ({type: SET_USERS, users })

export default usersReducer;