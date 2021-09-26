function login(){
    let email=$("#txtEmail").val();
    let password=$("#txtPassword").val();
    let flag=false;
    let userList=readUsers();//this function is on the store manager
    for(var i=0;i<userList.length;i++){
        let user=userList[i];
        if(user.email===email && user.password===password){
            flag=true;
            window.location="users.html";
        }
    }
    if(!flag){
        console.log("invalid credentials");
        $('#alertError').removeClass("hide");
        setTimeout(function(){
            $("#alertError").addClass("hide");
        },3000);
    }
}
function init(){
    console.log("Home");
    $("#btnLogin").click(login);
}
window.onload = init;