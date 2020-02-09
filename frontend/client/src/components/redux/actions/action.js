export function Add_Note(title , data){
    return {
        type : "Add_Note",
        value : {
            title : title,
            data : data
        }
    }
}

