import { usersAPI } from "../api/api"
const SET_USERS = 'SET_USERS'
const SET_IS_CHECKED = 'SET_IS_CHECKED'

let initialState = {
    usersData: [],
    isChecked: false,
}

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                usersData: action.users.filter(user => user.username !== 'Delphine')
            }
            break;

        case SET_IS_CHECKED:
            return {
                ...state,
                isChecked: action.isChecked,
            }

        default:
            break;
    }
    return state
}

export const setUsersActionCreator = (users) => {
    return { type: SET_USERS, users }
}

export const setIsCheckedActionCreator = (isChecked) => {
    return { type: SET_IS_CHECKED, isChecked }
}

export const getUsersThunkCreator = () => {
    return dispatch => {
        usersAPI.getUsers()
            .then(data => {
                dispatch(setUsersActionCreator(data))
            })
    }
}

export default usersReducer