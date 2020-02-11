export function Add_Note(title , data){
    return {
        type : "Add_Note",
        value : {
            title : title,
            data : data
        }
    }
}

export function Add_Auth(token){
    return{
        type : "Login",
        value : token
    }
}

export function Add_All(value){
    return{
        type: "Add_All",
        value : value
    }
}

export function Logout(){
    localStorage.removeItem('authToken');
    return{
        type : "Logout"
    }
}