import { combineReducers } from 'redux'

const user = (state={}, action) => {
    switch(action.type){
        case 'SET_USER':
            return action.user
        default:
            return state
    }
}

const authToken = (state='', action) => {
    switch(action.type){
        case 'SET_AUTHTOKEN':
            return action.token
        default:
            return state
    }
}

const refreshToken = (state='', action) => {
    switch(action.type){
        case 'SET_REFRESHOKEN':
            return action.token
        default:
            return state
    }
}

const activities = (state=[], action) => {
    switch(action.type){
        case 'SET_ACTIVITIES':
            return action.activities
        default:
            return state
    }
}

const errors = (state=[], action) => {
    switch(action.type){
        case 'SET_ERRORS':
            return action.errors
        default:
            return state
    }
}

export default combineReducers({
    user,
    authToken,
    refreshToken,
    activities,
    errors
})