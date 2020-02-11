import {combineReducers} from 'redux';

function authenticate(state = {login : localStorage.getItem('authToken') }, action){
    switch(action.type){
        case "Login":
            return {
                login : action.value
            }
        case "Logout":
            return {
                login : null
            }
        default : return state
    }
}


function add_note (state = [] , action){
    switch (action.type){
        case "Add_Note":
            return[
                ...state,
                {
                    title : action.value.title,
                    data : action.value.data,
                    _id : action.value._id || Math.random().toFixed(5) 
                }
            ]
        case "Add_All":
            return [ 
                ...action.value
            ]
        default : return state
    }
}

const noteApp = combineReducers({
    authenticate,
    add_note
})

export default noteApp;