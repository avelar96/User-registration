const KEY_USERS="users";
function saveUser(user){
    //load the old data
    let data=readUsers();
    //merge
    data.push(user);
    //save the user in the local storage
    let val=JSON.stringify(data);
    localStorage.setItem(KEY_USERS,val);
}
function readUsers(){
    let previousUsers=localStorage.getItem(KEY_USERS);
    if(!previousUsers){//Not data?
        return[];//create an empty array
    }else{
        let list=JSON.parse(previousUsers);//parse the string back into obj
        return list;//this is an object
    }
}
function clearUsers(){
    localStorage.removeItem(KEY_USERS);
}
