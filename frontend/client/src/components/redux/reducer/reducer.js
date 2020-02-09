import {combineReducers} from 'redux';

function authenticate(state = {login : localStorage.getItem('token') }, action){
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
                    data : action.value.data
                }
            ]
        case "Add_All":
            return [
                ...state , 
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