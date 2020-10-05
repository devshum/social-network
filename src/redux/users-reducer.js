const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
    usersData: []
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
            return { ...state, usersData: [ ...state.usersData, ...action.users ] }
        
        default:
            return state;
    }
}


export const toggleFollowActionCreator = userID => ({type: TOGGLE_FOLLOW, userID })
export const setUsersActionCreator = users => ({type: SET_USERS, users })

export default usersReducer;